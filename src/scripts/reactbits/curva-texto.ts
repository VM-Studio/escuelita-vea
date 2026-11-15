/*
 * Texto en curva infinito — port a JavaScript sin framework de "CurvedLoop" de React Bits
 * (https://reactbits.dev · https://github.com/DavidHDev/react-bits).
 * Copyright (c) 2026 David Haz — MIT + Commons Clause License Condition v1.0 (ver THIRD-PARTY-NOTICES.md).
 */
const VIEW_WIDTH = 1440;
const MAX_FLING = 4000;
const wrapOffset = (v: number, len: number) => (len > 0 ? (((v % len) + len) % len) - len : v);

export function iniciarCurva(jacket: HTMLElement) {
  const svg = jacket.querySelector<SVGSVGElement>('svg')!;
  const medir = svg.querySelector<SVGTextContentElement>('[data-medir]')!;
  const path = svg.querySelector<SVGPathElement>('path')!;
  const textPath = svg.querySelector<SVGTextPathElement>('textPath')!;
  const unidad = textPath.dataset.unidad || '';
  const speed = Number(jacket.dataset.speed || 1.4);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('liviano');
  let spacing = 0, offset = 0, velocity = 0, dir = jacket.dataset.direction === 'right' ? 1 : -1;
  let hover = false, frame = 0, last = 0, visible = true;
  const scroll = { distance: 0, level: 0, y: window.pageYOffset };
  const drag = { active: false, x: 0, time: 0, scale: 1, velocity: 0 };
  const apply = () => textPath.setAttribute('startOffset', `${offset}px`);

  const medirTodo = () => {
    spacing = medir.getComputedTextLength();
    if (!spacing) return;
    const largo = path.getTotalLength();
    const copias = Math.ceil(largo / spacing) + 2;
    const sep = textPath.dataset.separador || '';
    const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const html = sep ? esc(unidad).split(sep).join(`<tspan class="sep">${sep}</tspan>`) : esc(unidad);
    textPath.innerHTML = html.repeat(copias);
    offset = wrapOffset(offset, spacing);
    apply();
    jacket.style.visibility = 'visible';
  };
  medirTodo();
  (document as any).fonts?.ready?.then(medirTodo);
  if ('ResizeObserver' in window) new ResizeObserver(medirTodo).observe(svg);

  window.addEventListener('scroll', () => { const y = window.pageYOffset; scroll.distance += Math.abs(y - scroll.y); scroll.y = y; }, { passive: true });

  const tick = (now: number) => {
    frame = 0;
    if (!visible) return;
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    const rate = dt > 0 ? scroll.distance / dt : 0;
    scroll.distance = 0;
    scroll.level += (rate - scroll.level) * (1 - Math.exp(-dt * (rate > scroll.level ? 10 : 2.4)));
    if (!drag.active && spacing) {
      const halted = reduce;
      const target = halted ? 0 : dir * speed * 60;
      const extra = halted ? 0 : dir * scroll.level * 0.6 * 0.3; // scrollBoost
      velocity += (target - velocity) * (1 - Math.exp(-dt * 3));
      const step = (velocity + extra) * dt;
      if (Math.abs(step) > 0.0001) { offset = wrapOffset(offset + step, spacing); apply(); }
    }
    frame = requestAnimationFrame(tick);
  };
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !frame) { last = 0; scroll.level = 0; frame = requestAnimationFrame(tick); }
  }).observe(jacket);

  jacket.addEventListener('pointerdown', (e) => {
    const rect = svg.getBoundingClientRect();
    drag.active = true; drag.x = e.clientX; drag.time = performance.now(); drag.scale = VIEW_WIDTH / (rect.width || VIEW_WIDTH); drag.velocity = 0;
    velocity = 0; jacket.setAttribute('data-dragging', '');
    try { jacket.setPointerCapture(e.pointerId); } catch {}
  });
  jacket.addEventListener('pointermove', (e) => {
    if (!drag.active) return;
    const now = performance.now();
    const delta = (e.clientX - drag.x) * drag.scale;
    const dt = Math.max(now - drag.time, 1) / 1000;
    drag.x = e.clientX; drag.time = now;
    drag.velocity = drag.velocity * 0.5 + (delta / dt) * 0.5;
    offset = wrapOffset(offset + delta, spacing); apply();
  });
  const end = () => {
    if (!drag.active) return;
    drag.active = false; jacket.removeAttribute('data-dragging');
    const fling = performance.now() - drag.time > 100 ? 0 : Math.max(-MAX_FLING, Math.min(MAX_FLING, drag.velocity));
    velocity = fling;
    if (Math.abs(fling) > 60) dir = fling > 0 ? 1 : -1;
  };
  jacket.addEventListener('pointerup', end);
  jacket.addEventListener('pointercancel', end);
  jacket.addEventListener('lostpointercapture', end);
  jacket.addEventListener('pointerenter', () => { hover = true; });
  jacket.addEventListener('pointerleave', () => { hover = false; end(); });
  void hover;
}
