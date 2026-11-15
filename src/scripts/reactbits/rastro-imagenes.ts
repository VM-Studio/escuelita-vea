/*
 * Rastro de imágenes — port a JavaScript sin framework de "ImageTrail" de React Bits
 * (https://reactbits.dev · https://github.com/DavidHDev/react-bits).
 * Copyright (c) 2026 David Haz — MIT + Commons Clause License Condition v1.0 (ver THIRD-PARTY-NOTICES.md).
 * Solo en desktop con puntero fino; respeta prefers-reduced-motion y el modo liviano.
 */
type Cfg = { threshold: number; lifetime: number; appearScale: number; zoom: number; flash: number; exitScale: number; drift: number; rotation: number; sizeVariance: number; alignToMotion: boolean; stack: number; tilt: number };
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export async function iniciarRastro(container: HTMLElement, escucha: HTMLElement = container) {
  const { gsap } = await import('gsap');
  const cfg: Cfg = { threshold: 90, lifetime: 0.45, appearScale: 1, zoom: 1.2, flash: 0, exitScale: 0.3, drift: 0.6, rotation: 9, sizeVariance: 0.3, alignToMotion: false, stack: 0, tilt: 0, ...JSON.parse(container.dataset.config || '{}') };
  container.querySelectorAll<HTMLElement>('[data-trail-image] [data-bg]').forEach((el) => { el.style.backgroundImage = `url(${el.dataset.bg})`; });
  const images = Array.prototype.slice.call(container.querySelectorAll<HTMLElement>('[data-trail-image]')).map((el: HTMLElement) => ({ el, inner: el.firstElementChild as HTMLElement }));
  const total = images.length;
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mouse = { x: 0, y: 0 }, last = { x: 0, y: 0 }, cache = { x: 0, y: 0 };
  const visibles: typeof images = [];
  let started = false, raf = 0, index = -1, zIndex = 1, active = 0, lastAngle = 0;

  const settle = () => { active = Math.max(0, active - 1); if (!active && !visibles.length) zIndex = 1; };
  const retire = (img: (typeof images)[number]) => gsap.to(img.el, { duration: 0.4, ease: 'power4', opacity: 0, scale: cfg.exitScale });

  const spawn = () => {
    if (!total) return;
    index = (index + 1) % total;
    const img = images[index];
    const width = img.el.offsetWidth, height = img.el.offsetHeight;
    const dx = mouse.x - last.x, dy = mouse.y - last.y;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    let fromAngle = gsap.utils.random(-cfg.rotation, cfg.rotation);
    let toAngle = fromAngle * 0.4;
    if (cfg.alignToMotion) { fromAngle = lastAngle; toAngle = angle; while (toAngle - fromAngle > 180) toAngle -= 360; while (toAngle - fromAngle < -180) toAngle += 360; lastAngle = toAngle; }
    const scale = 1 + gsap.utils.random(-0.5, 0.6) * cfg.sizeVariance;
    const drift = cfg.drift > 0;
    const slide = drift ? 0.6 * cfg.drift : 0;
    ++zIndex; ++active;
    gsap.killTweensOf(img.el); gsap.killTweensOf(img.inner);
    const vi = visibles.indexOf(img); if (vi >= 0) visibles.splice(vi, 1);
    const tl = gsap.timeline({ onComplete: settle });
    tl.fromTo(img.el,
      { opacity: 1, scale: cfg.appearScale * scale, zIndex, x: cache.x - width / 2, y: cache.y - height / 2, rotation: fromAngle },
      { duration: drift ? 0.9 : 0.4, ease: drift ? 'power2' : 'power1', scale, x: mouse.x - width / 2 + dx * slide, y: mouse.y - height / 2 + dy * slide, rotation: toAngle }, 0);
    if (cfg.zoom !== 1 || cfg.flash > 0) tl.fromTo(img.inner, { scale: cfg.zoom, filter: `brightness(${1 + cfg.flash * 1.5})` }, { duration: 0.5, ease: 'power1', scale: 1, filter: 'brightness(1)' }, 0);
    if (cfg.stack > 0) {
      visibles.push(img);
      const keep = Math.max(1, Math.min(Math.round(cfg.stack), total - 1));
      while (visibles.length > keep) { const old = visibles.shift(); if (old) retire(old); }
      return;
    }
    tl.to(img.el, { duration: 0.4, ease: drift ? 'expo' : 'power3', opacity: 0, scale: cfg.exitScale * scale }, cfg.lifetime);
    if (drift) tl.to(img.el, { duration: 1.5, ease: 'power4', x: `+=${dx * cfg.drift * 1.2}`, y: `+=${dy * cfg.drift * 1.2}` }, cfg.lifetime);
  };

  const loop = () => {
    raf = 0;
    cache.x = lerp(cache.x, mouse.x, 0.1);
    cache.y = lerp(cache.y, mouse.y, 0.1);
    if (!query.matches && Math.hypot(mouse.x - last.x, mouse.y - last.y) > cfg.threshold) { spawn(); last.x = mouse.x; last.y = mouse.y; }
    if (Math.abs(cache.x - mouse.x) > 0.5 || Math.abs(cache.y - mouse.y) > 0.5) raf = requestAnimationFrame(loop);
  };
  escucha.addEventListener('mousemove', (e) => {
    if ((e.target as HTMLElement).closest('a, button, [data-sin-rastro]')) return; // no tapar botones ni texto interactivo
    const rect = container.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
    if (!started) { started = true; cache.x = last.x = mouse.x; cache.y = last.y = mouse.y; }
    if (!raf) raf = requestAnimationFrame(loop);
  });
}
