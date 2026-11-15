// PhotoSwipe: se carga recién cuando el usuario toca una foto de galería (o cuando una galería se acerca).
let cargado: Promise<void> | null = null;
let listo = false;

function preparar() {
  if (cargado) return cargado;
  cargado = Promise.all([import('photoswipe/lightbox'), import('photoswipe')]).then(([{ default: PhotoSwipeLightbox }, { default: PhotoSwipe }]) => {
    document.querySelectorAll<HTMLElement>('[data-galeria]').forEach((g) => {
      const lb = new PhotoSwipeLightbox({
        gallery: g,
        children: 'a',
        pswpModule: PhotoSwipe,
        bgOpacity: 0.94,
        showHideAnimationType: 'zoom',
        closeTitle: 'Cerrar (Esc)',
        zoomTitle: 'Acercar',
        arrowPrevTitle: 'Anterior',
        arrowNextTitle: 'Siguiente',
        errorMsg: 'La foto no se pudo cargar.',
        indexIndicatorSep: ' de ',
        padding: { top: 24, bottom: 24, left: 16, right: 16 },
      });
      lb.on('uiRegister', () => {
        lb.pswp?.ui?.registerElement({
          name: 'texto-alt', order: 9, isButton: false, appendTo: 'root',
          onInit: (el, pswp) => {
            el.className = 'pswp__texto-alt';
            pswp.on('change', () => {
              const img = pswp.currSlide?.data.element?.querySelector('img');
              el.textContent = img?.getAttribute('alt') || '';
            });
          },
        });
      });
      lb.on('openingAnimationStart', () => document.dispatchEvent(new CustomEvent('le:bloquear-scroll')));
      lb.on('destroy', () => document.dispatchEvent(new CustomEvent('le:liberar-scroll')));
      lb.init();
    });
    listo = true;
  });
  cargado.catch((e) => { console.warn('[galería] sin lightbox:', e); cargado = null; });
  return cargado;
}

export function cargarLightbox() {
  const galerias = document.querySelectorAll<HTMLElement>('[data-galeria]');
  if (!galerias.length) return;
  // Primer clic antes de que cargue: esperar y abrir
  galerias.forEach((g) =>
    g.addEventListener('click', (e) => {
      const a = (e.target as HTMLElement).closest('a');
      if (!a || listo) return;
      e.preventDefault();
      preparar().then(() => a.click());
    }),
  );
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => { if (es.some((x) => x.isIntersecting)) { io.disconnect(); preparar(); } }, { rootMargin: '400px' });
    galerias.forEach((g) => io.observe(g));
  }
}
