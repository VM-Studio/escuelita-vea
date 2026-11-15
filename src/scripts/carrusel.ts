// Embla: se carga cuando un carrusel se acerca al viewport. Sin JS queda la fila con scroll-snap.
const reducido = () => document.documentElement.classList.contains('reducido');

export function iniciarCarruseles() {
  const cajas = Array.prototype.slice.call(document.querySelectorAll<HTMLElement>('[data-carrusel]:not([data-carrusel-listo])')) as HTMLElement[];
  if (!cajas.length) return;
  const montar = async (caja: HTMLElement) => {
    if (caja.hasAttribute('data-carrusel-listo')) return;
    caja.setAttribute('data-carrusel-listo', '');
    const { default: EmblaCarousel } = await import('embla-carousel');
    const viewport = caja.querySelector<HTMLElement>('[data-carrusel-viewport]')!;
    const soloMovil = caja.getAttribute('data-carrusel') === 'movil';
    const opciones: any = { align: 'start', containScroll: 'trimSnaps', duration: reducido() ? 10 : 32, skipSnaps: false };
    if (soloMovil) opciones.breakpoints = { '(min-width: 64em)': { active: false } };
    const embla = EmblaCarousel(viewport, opciones);
    const controles = caja.querySelector<HTMLElement>('[data-carrusel-controles]')!;
    const prev = caja.querySelector<HTMLButtonElement>('[data-carrusel-prev]')!;
    const next = caja.querySelector<HTMLButtonElement>('[data-carrusel-next]')!;
    const puntos = caja.querySelector<HTMLElement>('[data-carrusel-puntos]')!;
    const slides = embla.slideNodes();
    slides.forEach((s, i) => { s.setAttribute('role', 'group'); s.setAttribute('aria-roledescription', 'diapositiva'); s.setAttribute('aria-label', `${i + 1} de ${slides.length}`); });

    const dibujarPuntos = () => {
      puntos.innerHTML = '';
      embla.scrollSnapList().forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', `Ir al grupo ${i + 1}`);
        b.addEventListener('click', () => embla.scrollTo(i));
        puntos.appendChild(b);
      });
    };
    const actualizar = () => {
      const activo = (embla as any).internalEngine?.().options?.active !== false;
      caja.classList.toggle('is-embla', activo);
      controles.hidden = !activo || embla.scrollSnapList().length < 2;
      prev.disabled = !embla.canScrollPrev();
      next.disabled = !embla.canScrollNext();
      const sel = embla.selectedScrollSnap();
      Array.prototype.forEach.call(puntos.children, (b: HTMLElement, i: number) => b.setAttribute('aria-current', String(i === sel)));
    };
    prev.addEventListener('click', () => embla.scrollPrev());
    next.addEventListener('click', () => embla.scrollNext());
    caja.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') embla.scrollPrev();
      if (e.key === 'ArrowRight') embla.scrollNext();
    });
    // Foco de teclado en un slide fuera de vista: llevarlo a la vista
    slides.forEach((s, i) => s.addEventListener('focusin', () => { const snap = embla.scrollSnapList().length > 1 ? (embla as any).internalEngine().slideRegistry.findIndex((g: number[]) => g.indexOf(i) > -1) : 0; if (snap > -1) embla.scrollTo(snap); }));
    embla.on('init', () => { dibujarPuntos(); actualizar(); });
    embla.on('reInit', () => { dibujarPuntos(); actualizar(); });
    embla.on('select', actualizar);
    embla.on('resize', actualizar);
    dibujarPuntos();
    actualizar();
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); montar(e.target as HTMLElement); } }), { rootMargin: '300px' });
    cajas.forEach((c) => io.observe(c));
  } else cajas.forEach(montar);
}
