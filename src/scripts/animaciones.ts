// Núcleo de animación: loader, scroll suave (Lenis), revelados, trazos, contadores, parallax.
// Lento, suave, orgánico. Solo transform/opacity (+ clip-path en imágenes).
// Regla madre: los estados ocultos SOLO existen si html.anim-ready; si algo falla, se quita y todo queda visible.

const html = document.documentElement;
const liviano = html.classList.contains('liviano');
const reducido = html.classList.contains('reducido');
const conCargador = html.classList.contains('con-cargador');

const q = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => Array.prototype.slice.call(c.querySelectorAll<T>(s)) as T[];

/* ---------- Loader en modo simple (sin GSAP) ---------- */
function retirarCargadorSimple(demora = 900) {
  const c = document.querySelector<HTMLElement>('[data-cargador]');
  if (!c || !conCargador) return;
  html.classList.add('cargador-js');
  c.style.transition = 'opacity 0.45s ease';
  setTimeout(() => {
    c.style.opacity = '0';
    setTimeout(() => html.classList.remove('con-cargador'), 500);
  }, demora);
}

/* ---------- Scroll a anclas (con o sin Lenis) ---------- */
let lenisRef: any = null;
function irA(el: Element | null, inmediato = false) {
  if (!el) return;
  const off = -((document.querySelector('[data-encabezado]') as HTMLElement)?.offsetHeight || 72) - 24 - ((document.querySelector('[data-subnav]') as HTMLElement)?.offsetHeight || 0);
  if (lenisRef) lenisRef.scrollTo(el, { offset: off, immediate: inmediato, duration: 1.2 });
  else {
    const y = el.getBoundingClientRect().top + window.pageYOffset + off;
    window.scrollTo({ top: y, behavior: inmediato || reducido ? 'auto' : 'smooth' });
  }
}
document.addEventListener('le:ir-a', (e) => irA((e as CustomEvent).detail));

async function iniciar() {
  if (liviano || reducido) {
    // Modo liviano o movimiento reducido: sin Lenis, sin parallax, sin SplitText. Solo un fundido breve del loader.
    retirarCargadorSimple(reducido ? 500 : 300);
    return;
  }

  const rescate = window.setTimeout(() => html.classList.add('anim-rescate'), 4500);
  try {
    const [{ gsap }, { ScrollTrigger }, { SplitText }, { DrawSVGPlugin }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/SplitText'),
      import('gsap/DrawSVGPlugin'),
    ]);
    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
    gsap.defaults({ ease: 'power3.out', duration: 1 });

    // Lenis solo en desktop con puntero fino. En táctil, scroll nativo.
    const escritorio = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)').matches;
    if (escritorio) {
      const { default: Lenis } = await import('lenis');
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1, autoRaf: false, allowNestedScroll: true, prevent: (n: HTMLElement) => !!n.closest('iframe, .pswp, [data-menu]') });
      lenisRef = lenis;
      html.classList.add('lenis');
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      document.addEventListener('le:bloquear-scroll', () => lenis.stop());
      document.addEventListener('le:liberar-scroll', () => lenis.start());
      document.addEventListener('le:ir-arriba', () => lenis.scrollTo(0, { duration: 1.4 }));
      // anclas internas con compensación del header
      document.addEventListener('click', (e) => {
        const a = (e.target as HTMLElement).closest('a[href*="#"]') as HTMLAnchorElement | null;
        if (!a || a.target === '_blank' || a.hasAttribute('data-wa-boton') || a.hasAttribute('data-volver-arriba')) return;
        if (a.pathname !== location.pathname || !a.hash || a.hash === '#') return;
        const destino = document.getElementById(decodeURIComponent(a.hash.slice(1)));
        if (!destino) return;
        e.preventDefault();
        irA(destino);
        if (history.pushState) history.pushState(null, '', a.hash);
      });
    }

    html.classList.add('anim-ready');

    /* ---- Loader: el sol se dibuja, aparece el logo y la hoja se levanta ---- */
    const tlEntrada = gsap.timeline({ paused: true });
    const cargador = document.querySelector<HTMLElement>('[data-cargador]');
    if (conCargador && cargador) {
      html.classList.add('cargador-js');
      const circulo = cargador.querySelector('.cargador__circulo');
      const logo = cargador.querySelector('[data-cargador-logo]');
      const hoja = cargador.querySelector('[data-cargador-hoja]');
      const sol = cargador.querySelector('[data-cargador-sol]');
      gsap.set(circulo, { drawSVG: '0%' });
      const tl = gsap.timeline({ onComplete: () => { html.classList.remove('con-cargador'); } });
      tl.to(circulo, { drawSVG: '100%', duration: 0.75, ease: 'power2.inOut' })
        .to(sol, { scale: 0.86, duration: 0.6, ease: 'power2.inOut' }, '-=0.1')
        .fromTo(logo, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.45 }, '-=0.45')
        .to(hoja, { yPercent: -104, rotate: -1.5, duration: 0.85, ease: 'expo.inOut' }, '+=0.15')
        .add(() => { tlEntrada.play(); }, '-=0.45');
    } else {
      requestAnimationFrame(() => tlEntrada.play());
    }

    /* ---- Hero: titular línea por línea, bajada y scroll dibujado ---- */
    const hero = document.querySelector<HTMLElement>('[data-hero]');
    if (hero) {
      const titular = hero.querySelector<HTMLElement>('[data-hero-titular]');
      const resto = q('[data-hero-resto]', hero);
      const trazos = q('[data-hero-trazo] path', hero);
      const fondo = hero.querySelector('[data-hero-fondo]');
      // En pantallas chicas el titular no se parte en líneas: es el LCP y tiene que pintarse de inmediato.
      const titularAnimado = window.matchMedia('(min-width: 1024px)').matches;
      if (titular && !titularAnimado) {
        gsap.set(titular, { visibility: 'visible' }); // se queda quieto: ya está pintado desde el HTML
      }
      if (titular && titularAnimado) {
        const st = SplitText.create(titular, { type: 'lines', mask: 'lines', linesClass: 'linea' });
        gsap.set(titular, { visibility: 'visible' });
        gsap.set(st.lines, { yPercent: 105 });
        tlEntrada.to(st.lines, { yPercent: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out' }, 0.1);
      }
      if (fondo) tlEntrada.fromTo(fondo, { scale: 1.08 }, { scale: 1, duration: 2.4, ease: 'power2.out' }, 0);
      if (resto.length) {
        gsap.set(resto, { autoAlpha: 0, y: 18 });
        tlEntrada.to(resto, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 }, 0.55);
      }
      if (trazos.length) {
        gsap.set(trazos, { drawSVG: '0%' });
        tlEntrada.to(trazos, { drawSVG: '100%', duration: 0.9, stagger: 0.2, ease: 'power2.inOut' }, 0.9);
      }
      // parallax muy leve de la foto del hero
      if (fondo) gsap.to(hero.querySelector('[data-hero-parallax]') || fondo, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
      // Marcar los elementos del hero como "ya revelados" para que no los tome el batch general
      q('[data-revelar], [data-dibujar], [data-titulo-lineas]', hero).forEach((el) => el.setAttribute('data-anim-hecho', ''));
    }

    /* ---- Abanico de fotos: entran apiladas y se abren al llegar con el scroll ---- */
    q('[data-abanico]').forEach((caja) => {
      const items = q('[data-abanico-item]', caja);
      gsap.set(items, { autoAlpha: 0, y: 60, rotation: 0, scale: 0.92 });
      gsap.to(items, { autoAlpha: 1, y: 0, rotation: (_i: number, el: HTMLElement) => parseFloat(getComputedStyle(el).getPropertyValue('--r')) || 0, scale: 1, duration: 1.3, stagger: 0.09, ease: 'expo.out', clearProps: 'transform', scrollTrigger: { trigger: caja, start: 'top 80%', once: true } });
    });

    /* ---- Titulares por líneas con máscara ---- */
    q('[data-titulo-lineas]:not([data-anim-hecho])').forEach((el) => {
      const st = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'linea', aria: el.matches('h1,h2,h3,h4,h5,h6') ? 'auto' : 'none' });
      gsap.set(el, { visibility: 'visible' });
      gsap.from(st.lines, {
        yPercent: 105,
        duration: 1.1,
        stagger: 0.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    /* ---- Frases de interludio: palabra por palabra, más lentas ---- */
    q('[data-frase]').forEach((el) => {
      const st = SplitText.create(el, { type: 'words,lines', mask: 'lines', linesClass: 'linea', aria: el.matches('h1,h2,h3,h4') ? 'auto' : 'none' });
      gsap.set(el, { visibility: 'visible' });
      gsap.from(st.words, {
        yPercent: 110,
        opacity: 0,
        duration: 1.3,
        stagger: 0.045,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    /* ---- Párrafos y tarjetas: fundido + 24 px, escalonado por lotes ---- */
    const reveladores = q('[data-revelar]:not([data-anim-hecho])');
    ScrollTrigger.batch(reveladores, {
      start: 'top 90%',
      once: true,
      onEnter: (lote) => gsap.to(lote, { autoAlpha: 1, y: 0, duration: 0.95, stagger: 0.09, ease: 'power3.out', overwrite: true }),
    });

    /* ---- Imágenes: revelado con clip-path y leve zoom-out del interior ---- */
    q('[data-revelar-img]').forEach((fig) => {
      const img = fig.querySelector('img');
      const tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 88%', once: true } });
      tl.to(fig, { clipPath: 'inset(0% 0% 0% 0%)', webkitClipPath: 'inset(0% 0% 0% 0%)', duration: 1.25, ease: 'expo.out' } as any);
      if (img) tl.to(img, { scale: 1, duration: 1.6, ease: 'power2.out' }, 0);
    });

    /* ---- Trazos SVG que se dibujan ---- */
    q<SVGElement>('[data-dibujar]:not([data-anim-hecho])').forEach((svg) => {
      const partes = q('path, circle, line, polyline, ellipse', svg);
      gsap.set(partes, { drawSVG: '0%', visibility: 'visible' });
      if (svg.getAttribute('data-dibujar') === 'scroll') {
        gsap.to(partes, { drawSVG: '100%', ease: 'none', stagger: 0.1, scrollTrigger: { trigger: svg, start: 'top 85%', end: 'top 35%', scrub: 0.6 } });
      } else {
        gsap.to(partes, { drawSVG: '100%', duration: 1.1, stagger: 0.12, ease: 'power2.inOut', scrollTrigger: { trigger: svg, start: 'top 90%', once: true } });
      }
    });

    /* ---- Contadores (1959, 1997, 67) ---- */
    q('[data-contador]').forEach((el) => {
      const fin = parseInt(el.getAttribute('data-contador') || el.textContent || '0', 10);
      const desde = parseInt(el.getAttribute('data-desde') || String(Math.max(0, fin - (fin > 1000 ? 60 : fin))), 10);
      const obj = { v: desde };
      el.textContent = String(desde);
      gsap.to(obj, {
        v: fin,
        duration: fin > 1000 ? 1.6 : 2,
        ease: 'power2.out',
        snap: { v: 1 },
        onUpdate: () => { el.textContent = String(Math.round(obj.v)); },
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    /* ---- Línea de tiempo que se dibuja con el scroll ---- */
    q('[data-linea-tiempo]').forEach((caja) => {
      const linea = caja.querySelector('[data-linea]');
      if (linea) gsap.fromTo(linea, { scaleY: 0, scaleX: 0 }, { scaleY: 1, scaleX: 1, ease: 'none', scrollTrigger: { trigger: caja, start: 'top 75%', end: 'bottom 60%', scrub: 0.5 } });
    });

    /* ---- Parallax leve (interludios) ---- */
    q('[data-parallax]').forEach((el) => {
      const cant = parseFloat(el.getAttribute('data-parallax') || '8');
      gsap.fromTo(el, { yPercent: -cant }, { yPercent: cant, ease: 'none', scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    /* ---- Palabras grandes que aparecen de a una (habilidades del egresado) ---- */
    q('[data-de-a-una]').forEach((cont) => {
      const items = q('[data-palabra]', cont);
      gsap.set(items, { autoAlpha: 0, y: 14 });
      gsap.to(items, { autoAlpha: 1, y: 0, stagger: 0.28, duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: cont, start: 'top 75%', once: true } });
    });

    // Recalcular cuando cambia la altura del contenido (acordeones, pestañas, fuentes)
    let t = 0;
    document.addEventListener('le:contenido-cambio', () => { clearTimeout(t); t = window.setTimeout(() => ScrollTrigger.refresh(), 80); });
    if ((document as any).fonts?.ready) (document as any).fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener('load', () => ScrollTrigger.refresh());

    // Si se llegó con #ancla, ir sin animación
    if (location.hash && lenisRef) {
      const d = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (d) setTimeout(() => irA(d, true), 50);
    }
    window.clearTimeout(rescate);
  } catch (err) {
    // Nada queda invisible si falla: se quitan los estados ocultos.
    console.warn('[animaciones] modo sin efectos:', err);
    html.classList.remove('anim-ready', 'lenis');
    retirarCargadorSimple(0);
    window.clearTimeout(rescate);
  }
}

iniciar();
