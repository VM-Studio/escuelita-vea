// Interfaz: mejoras progresivas SIN dependencias. Todo el contenido funciona y se lee sin este archivo.
// Header, menú móvil, submenú, pestañas, acordeones (<details>), alternadores, subnavegación,
// WhatsApp flotante, barra de progreso, fotos (LQIP), secuencia del hero.

const $ = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = document) => ctx.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = document) => Array.prototype.slice.call(ctx.querySelectorAll<T>(sel)) as T[];
const html = document.documentElement;
const reducido = () => html.classList.contains('reducido') || html.classList.contains('liviano');
const emitir = (nombre: string, detalle?: unknown) => document.dispatchEvent(new CustomEvent(nombre, { detail: detalle }));

/* ---------- Fotos: quitar el desenfoque al cargar ---------- */
function fotos() {
  $$<HTMLImageElement>('.foto img').forEach((img) => {
    const fig = img.closest('.foto');
    const listo = () => fig && fig.classList.add('is-cargada');
    if (img.complete && img.naturalWidth > 0) listo();
    else {
      img.addEventListener('load', listo, { once: true });
      img.addEventListener('error', listo, { once: true });
    }
  });
}

/* ---------- Header: sólido al bajar del hero, se esconde al bajar y vuelve al subir ---------- */
function encabezado() {
  const h = $('[data-encabezado]');
  if (!h) return;
  let ultimo = window.pageYOffset;
  let pendiente = false;
  const umbral = () => (h.classList.contains('encabezado--hero') ? Math.max(80, window.innerHeight * 0.75) : 24);
  const actualizar = () => {
    pendiente = false;
    const y = window.pageYOffset;
    h.classList.toggle('is-solido', y > umbral() - 80);
    if (!h.classList.contains('is-menu-abierto') && !h.contains(document.activeElement)) {
      if (y > ultimo + 6 && y > 240) h.classList.add('is-oculto');
      else if (y < ultimo - 6 || y < 240) h.classList.remove('is-oculto');
    }
    ultimo = y;
  };
  window.addEventListener('scroll', () => { if (!pendiente) { pendiente = true; requestAnimationFrame(actualizar); } }, { passive: true });
  h.addEventListener('focusin', () => h.classList.remove('is-oculto'));
  actualizar();
}

/* ---------- Submenú desktop ---------- */
function submenu() {
  $$('[data-submenu-boton]').forEach((b) => {
    const menu = document.getElementById(b.getAttribute('aria-controls') || '');
    if (!menu) return;
    const set = (abierto: boolean) => { b.setAttribute('aria-expanded', String(abierto)); menu.classList.toggle('is-abierto', abierto); };
    b.addEventListener('click', () => set(b.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('keydown', (e) => { if (e.key === 'Escape') { set(false); b.focus(); } });
    document.addEventListener('click', (e) => { if (!b.parentElement?.contains(e.target as Node)) set(false); });
  });
}

/* ---------- Trampa de foco para menú/modales ---------- */
function atraparFoco(cont: HTMLElement, e: KeyboardEvent, extra: HTMLElement[] = []) {
  if (e.key !== 'Tab') return;
  const focos = extra.concat($$<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', cont).filter((el) => el.offsetParent !== null));
  if (!focos.length) return;
  const primero = focos[0];
  const ultimo = focos[focos.length - 1];
  if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
  else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
}

/* ---------- Menú móvil a pantalla completa ---------- */
function menuMovil() {
  const boton = $<HTMLButtonElement>('[data-menu-boton]');
  const menu = $('[data-menu]');
  const header = $('[data-encabezado]');
  if (!boton || !menu || !header) return;
  const texto = $('[data-menu-texto]', boton);
  const items = $$('[data-menu-item]', menu);
  items.forEach((el, i) => el.style.setProperty('--i', String(i)));
  let abierto = false;
  const set = (v: boolean) => {
    abierto = v;
    boton.setAttribute('aria-expanded', String(v));
    if (texto) texto.textContent = v ? 'Cerrar menú' : 'Abrir menú';
    header.classList.toggle('is-menu-abierto', v);
    html.classList.toggle('menu-abierto', v);
    emitir(v ? 'le:bloquear-scroll' : 'le:liberar-scroll');
    if (v) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add('is-abierto'));
      const primero = $<HTMLElement>('a', menu);
      if (primero) setTimeout(() => primero.focus({ preventScroll: true } as FocusOptions), 60);
    } else {
      menu.classList.remove('is-abierto');
      const cerrar = () => { if (!abierto) menu.hidden = true; };
      if (reducido()) cerrar(); else setTimeout(cerrar, 380);
    }
  };
  boton.addEventListener('click', () => set(!abierto));
  document.addEventListener('keydown', (e) => {
    if (!abierto) return;
    if (e.key === 'Escape') { set(false); boton.focus(); }
    atraparFoco(menu, e, [boton]);
  });
  menu.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) set(false); });
  window.addEventListener('resize', () => { if (abierto && window.innerWidth >= 1200) set(false); });
}

/* ---------- Pestañas accesibles (sin JS: todos los paneles visibles con su título) ---------- */
function pestanas() {
  $$('[data-tabs]').forEach((cont) => {
    const lista = $('[role="tablist"]', cont) || $('[data-tabs-lista]', cont);
    const tabs = $$<HTMLButtonElement>('[data-tab]', cont);
    const paneles = $$('[data-panel]', cont);
    const indicador = $('[data-tabs-indicador]', cont);
    if (!lista || !tabs.length) return;
    lista.setAttribute('role', 'tablist');
    cont.classList.add('is-js');

    const mover = (t: HTMLElement) => {
      if (!indicador) return;
      indicador.style.width = `${t.offsetWidth}px`;
      indicador.style.transform = `translateX(${t.offsetLeft}px)`;
    };
    const activar = (i: number, foco = false, actualizarUrl = false) => {
      tabs.forEach((t, j) => {
        const sel = i === j;
        t.setAttribute('aria-selected', String(sel));
        t.tabIndex = sel ? 0 : -1;
        paneles[j].hidden = !sel;
        paneles[j].classList.toggle('is-activo', sel);
      });
      const t = tabs[i];
      mover(t);
      if (foco) t.focus();
      // centrar la pestaña activa en la fila con scroll horizontal (mobile)
      const caja = lista as HTMLElement;
      if (caja.scrollWidth > caja.clientWidth) caja.scrollTo({ left: t.offsetLeft - caja.clientWidth / 2 + t.offsetWidth / 2, behavior: reducido() ? 'auto' : 'smooth' });
      if (actualizarUrl && paneles[i].id && history.replaceState) history.replaceState(null, '', `#${paneles[i].id}`);
      emitir('le:contenido-cambio');
    };
    tabs.forEach((t, i) => {
      t.setAttribute('role', 'tab');
      t.setAttribute('aria-controls', paneles[i].id);
      t.id = t.id || `${paneles[i].id}-tab`;
      paneles[i].setAttribute('role', 'tabpanel');
      paneles[i].setAttribute('aria-labelledby', t.id);
      paneles[i].tabIndex = 0;
      t.addEventListener('click', () => activar(i, false, true));
      t.addEventListener('keydown', (e) => {
        let n = -1;
        if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
        else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = tabs.length - 1;
        if (n > -1) { e.preventDefault(); activar(n, true, true); }
      });
    });
    const desdeHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const idx = paneles.findIndex((p) => p.id === id);
      return idx;
    };
    const inicial = desdeHash();
    activar(inicial > -1 ? inicial : 0);
    if (inicial > -1) setTimeout(() => emitir('le:ir-a', cont), 150);
    window.addEventListener('hashchange', () => { const i = desdeHash(); if (i > -1) { activar(i); emitir('le:ir-a', cont); } });
    let r = 0;
    window.addEventListener('resize', () => { cancelAnimationFrame(r); r = requestAnimationFrame(() => mover(tabs[tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true')] || tabs[0])); });
    if ((document as any).fonts && (document as any).fonts.ready) (document as any).fonts.ready.then(() => mover(tabs[tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true')] || tabs[0]));
  });
}

/* ---------- Acordeones y desplegables sobre <details> nativo, con altura animada ---------- */
function acordeones() {
  const animar = 'animate' in HTMLElement.prototype;
  $$<HTMLDetailsElement>('details[data-acordeon]').forEach((d) => {
    const resumen = $<HTMLElement>('summary', d);
    const cuerpo = $<HTMLElement>('[data-acordeon-cuerpo]', d);
    if (!resumen || !cuerpo) return;
    let anim: Animation | null = null;
    const grupo = d.getAttribute('data-acordeon');

    const cerrar = (det: HTMLDetailsElement) => {
      const c = $<HTMLElement>('[data-acordeon-cuerpo]', det);
      if (!c || !det.open) return;
      if (!animar || reducido()) { det.open = false; return; }
      det.classList.add('is-cerrando');
      const a = c.animate([{ height: `${c.offsetHeight}px`, opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 420, easing: 'cubic-bezier(0.33,1,0.68,1)' });
      a.onfinish = () => { det.open = false; det.classList.remove('is-cerrando'); emitir('le:contenido-cambio'); };
    };
    const abrir = (actualizarUrl = true) => {
      if (grupo) $$<HTMLDetailsElement>(`details[data-acordeon="${grupo}"]`).forEach((o) => { if (o !== d) cerrar(o); });
      d.open = true;
      if (actualizarUrl && d.id && history.replaceState) history.replaceState(null, '', `#${d.id}`);
      if (animar && !reducido()) {
        const alto = cuerpo.offsetHeight;
        anim = cuerpo.animate([{ height: '0px', opacity: 0 }, { height: `${alto}px`, opacity: 1 }], { duration: 520, easing: 'cubic-bezier(0.22,1,0.36,1)' });
        anim.onfinish = () => { anim = null; emitir('le:contenido-cambio'); };
      } else emitir('le:contenido-cambio');
      // cargar fotos perezosas que aparecen dentro
      $$<HTMLImageElement>('img[loading="lazy"]', cuerpo).forEach((im) => { im.loading = 'eager'; });
    };
    resumen.addEventListener('click', (e) => {
      e.preventDefault();
      if (anim) return;
      if (d.open) {
        cerrar(d);
        if (d.id && location.hash === `#${d.id}` && history.replaceState) history.replaceState(null, '', location.pathname + location.search);
      } else abrir();
    });
  });
  // abrir por URL (#id del details o de algo adentro)
  const porHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const d = (el.tagName === 'DETAILS' ? el : el.closest('details')) as HTMLDetailsElement | null;
    if (d && !d.open) { d.open = true; emitir('le:contenido-cambio'); setTimeout(() => emitir('le:ir-a', d), 120); }
  };
  porHash();
  window.addEventListener('hashchange', porHash);
}

/* ---------- Alternador (Equipo: tres botones, se despliega solo el elegido) ---------- */
function alternadores() {
  $$('[data-alternador]').forEach((cont) => {
    const botones = $$<HTMLButtonElement>('[data-alternar]', cont);
    const paneles = $$('[data-alternado]', cont);
    cont.classList.add('is-js');
    const set = (id: string | null, url = true) => {
      botones.forEach((b) => b.setAttribute('aria-expanded', String(b.dataset.alternar === id)));
      paneles.forEach((p) => {
        const v = p.id === id;
        p.hidden = !v;
        p.classList.toggle('is-activo', v);
      });
      if (url && history.replaceState) history.replaceState(null, '', id ? `#${id}` : location.pathname);
      emitir('le:contenido-cambio');
      if (id) { const p = document.getElementById(id); if (p) setTimeout(() => emitir('le:ir-a', p), 60); }
    };
    botones.forEach((b) => {
      b.addEventListener('click', () => set(b.getAttribute('aria-expanded') === 'true' ? null : b.dataset.alternar || null));
    });
    const h = decodeURIComponent(location.hash.slice(1));
    set(paneles.some((p) => p.id === h) ? h : null, false);
  });
}

/* ---------- Subnavegación de anclas con sección activa ---------- */
function subnav() {
  const nav = $('[data-subnav]');
  if (!nav || !('IntersectionObserver' in window)) return;
  const enlaces = $$<HTMLAnchorElement>('a[href^="#"]', nav);
  const secciones = enlaces.map((a) => document.getElementById(a.hash.slice(1))).filter(Boolean) as HTMLElement[];
  const fila = $('[data-subnav-fila]', nav) as HTMLElement;
  const marcar = (id: string) => {
    enlaces.forEach((a) => {
      const act = a.hash.slice(1) === id;
      if (act) {
        a.setAttribute('aria-current', 'true');
        if (fila && fila.scrollWidth > fila.clientWidth) fila.scrollTo({ left: a.offsetLeft - 16, behavior: reducido() ? 'auto' : 'smooth' });
      } else a.removeAttribute('aria-current');
    });
  };
  const visibles = new Map<string, number>();
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => visibles.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
    let mejor = '';
    let max = 0;
    secciones.forEach((s) => { const v = visibles.get(s.id) || 0; if (v > max) { max = v; mejor = s.id; } });
    if (mejor) marcar(mejor);
    else if (secciones[0] && secciones[0].getBoundingClientRect().top > window.innerHeight * 0.4) {
      enlaces.forEach((a) => a.removeAttribute('aria-current'));
      if (fila) fila.scrollLeft = 0;
    }
  }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.01, 0.25, 0.5, 1] });
  secciones.forEach((s) => io.observe(s));
}

/* ---------- WhatsApp flotante: aparece después del hero, deja elegir nivel ---------- */
function whatsapp() {
  const cont = $('[data-wa]');
  const boton = $<HTMLAnchorElement>('[data-wa-boton]');
  const panel = $('[data-wa-panel]');
  if (!cont || !boton || !panel) return;
  boton.setAttribute('href', '#wa-panel');
  const set = (v: boolean) => { boton.setAttribute('aria-expanded', String(v)); panel.hidden = !v; };
  boton.addEventListener('click', (e) => { e.preventDefault(); set(panel.hidden); });
  boton.addEventListener('keydown', (e) => { if (e.key === ' ') { e.preventDefault(); set(panel.hidden); } });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { set(false); boton.focus(); } });
  document.addEventListener('click', (e) => { if (!cont.contains(e.target as Node)) set(false); });
  const mostrar = () => cont.classList.add('is-visible');
  const hero = $('[data-hero]');
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { if (!e.isIntersecting) mostrar(); }, { threshold: 0.15 }).observe(hero);
  } else {
    const alScroll = () => { if (window.pageYOffset > window.innerHeight * 0.5) { mostrar(); window.removeEventListener('scroll', alScroll); } };
    window.addEventListener('scroll', alScroll, { passive: true });
    setTimeout(mostrar, 4000);
  }
  if (!reducido()) {
    let veces = 0;
    const pulso = () => {
      if (veces++ > 4) return;
      if (cont.classList.contains('is-visible') && panel.hidden) {
        cont.classList.remove('is-pulso');
        void cont.offsetWidth;
        cont.classList.add('is-pulso');
      }
      setTimeout(pulso, 14000);
    };
    setTimeout(pulso, 9000);
  }
}

/* ---------- Barra de progreso de lectura ---------- */
function progreso() {
  const barra = $('[data-progreso]');
  if (!barra) return;
  let p = false;
  const act = () => {
    p = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    barra.style.transform = `scaleX(${max > 0 ? Math.min(1, window.pageYOffset / max) : 0})`;
  };
  window.addEventListener('scroll', () => { if (!p) { p = true; requestAnimationFrame(act); } }, { passive: true });
  act();
}

/* ---------- Secuencia lenta de fotos en el hero (Ken Burns suave) ---------- */
function heroSecuencia() {
  const caja = $('[data-hero-secuencia]');
  if (!caja || reducido()) return;
  const capas = $$('[data-hero-capa]', caja);
  if (capas.length < 2) return;
  let i = 0;
  let visible = true;
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; });
  // Las capas 2..n tienen las fotos con loading=lazy: se cargan recién cuando arranca la secuencia
  const hero = caja.closest('section');
  const cargar = (c: HTMLElement) => $$<HTMLImageElement>('img', c).forEach((im) => { im.loading = 'eager'; });
  setTimeout(() => { if (hero) hero.classList.add('is-secuencia'); cargar(capas[1]); }, 2500);
  setInterval(() => {
    const r = caja.getBoundingClientRect();
    if (!visible || r.bottom < 0 || r.top > window.innerHeight) return;
    const sig = (i + 1) % capas.length;
    cargar(capas[(sig + 1) % capas.length]);
    const img = $<HTMLImageElement>('img', capas[sig]);
    if (img && !(img.complete && img.naturalWidth)) return; // esperar a que esté cargada
    capas.forEach((c) => c.classList.remove('is-previa'));
    capas[i].classList.replace('is-activa', 'is-previa');
    capas[sig].classList.add('is-activa');
    i = sig;
  }, 7000);
}

/* ---------- Portadas con fotos a pantalla completa que pasan (Inicio, Proyecto pedagógico) ---------- */
// Fundido cruzado sin "corte": la foto que entra se decodifica antes de mostrarse y la que sale queda
// quieta y opaca debajo hasta que la nueva terminó de aparecer.
function portadaSecuencia() {
  if (reducido()) return;
  $$('[data-portada]').forEach((portada) => {
    const capas = $$('[data-portada-capa]', portada);
    const marcas = $$('[data-portada-marca]', portada);
    if (capas.length < 2) return;
    const intervalo = Number(portada.getAttribute('data-portada-intervalo')) || 4000;
    let i = 0;
    let ocupado = false;
    const cargar = (c: HTMLElement) => $$<HTMLImageElement>('img', c).forEach((im) => { im.loading = 'eager'; });
    portada.classList.add('is-secuencia');
    cargar(capas[1]);
    setInterval(() => {
      if (ocupado || document.hidden) return;
      const r = portada.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const sig = (i + 1) % capas.length;
      cargar(capas[(sig + 1) % capas.length]);
      const img = $<HTMLImageElement>('img', capas[sig]);
      if (img && !(img.complete && img.naturalWidth)) return; // esperar a que esté cargada
      ocupado = true;
      const decodificar = img && typeof img.decode === 'function' ? img.decode().catch(() => undefined) : Promise.resolve();
      decodificar.then(() => {
        requestAnimationFrame(() => {
          capas.forEach((c, k) => { if (k !== i && k !== sig) c.classList.remove('is-previa', 'is-activa'); });
          capas[i].classList.remove('is-activa');
          capas[i].classList.add('is-previa');
          capas[sig].classList.remove('is-previa');
          capas[sig].classList.add('is-activa');
          if (marcas.length) {
            if (sig === 0) marcas.forEach((m) => m.classList.remove('is-hecha', 'is-activa'));
            else marcas[i].classList.add('is-hecha');
            marcas[i].classList.remove('is-activa');
            void marcas[sig].offsetWidth;
            marcas[sig].classList.add('is-activa');
          }
          i = sig;
          ocupado = false;
        });
      });
    }, intervalo);
  });
}

/* ---------- Volver arriba ---------- */
function volverArriba() {
  $$<HTMLAnchorElement>('[data-volver-arriba]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    emitir('le:ir-arriba');
    if (!html.classList.contains('lenis')) window.scrollTo({ top: 0, behavior: reducido() ? 'auto' : 'smooth' });
    const main = document.getElementById('contenido');
    setTimeout(() => main && main.focus({ preventScroll: true } as FocusOptions), 500);
  }));
}

function iniciar() {
  fotos();
  encabezado();
  submenu();
  menuMovil();
  pestanas();
  acordeones();
  alternadores();
  subnav();
  whatsapp();
  progreso();
  heroSecuencia();
  portadaSecuencia();
  volverArriba();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
else iniciar();
