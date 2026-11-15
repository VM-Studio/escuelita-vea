/*
 * Tarjetas con rebote — port a JavaScript sin framework de "BounceCards" de React Bits
 * (https://reactbits.dev · https://github.com/DavidHDev/react-bits).
 * Copyright (c) 2026 David Haz — MIT + Commons Clause License Condition v1.0 (ver THIRD-PARTY-NOTICES.md).
 */
const PATTERN = [1, 0.5, -0.3, -1, 0.2, 0.75, -0.6, 0.35, -0.85, 0.1];
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export function iniciarRebote(root: HTMLElement) {
  const o = JSON.parse(root.dataset.config || '{}');
  const cards = Array.prototype.slice.call(root.querySelectorAll<HTMLElement>('[data-rebote-card]')) as HTMLElement[];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('liviano');
  const count = cards.length;
  const middle = (count - 1) / 2;
  const reach = Math.max(1, middle);
  const escala = () => Math.min(1, root.clientWidth / (o.containerWidth || 1));
  const s = () => {
    const k = escala();
    const cardSize = Math.max(10, o.cardSize) * k;
    return {
      slots: cards.map((_, i) => { const off = i - middle; return { x: off * o.spread * k, y: (o.arc || 0) * (off / reach) ** 2 * k, rotate: o.rotation * PATTERN[i % PATTERN.length] }; }),
      cardSize, delay: Math.max(0, o.animationDelay), stagger: Math.max(0, o.animationStagger), bounciness: clamp(o.bounciness, 0, 1),
      enableHover: o.enableHover !== false, pushDistance: o.pushDistance * k, hoverScale: clamp(o.hoverScale, 0.5, 2),
    };
  };
  let settings = s();
  root.style.setProperty('--bounce-cards-size', `${settings.cardSize}px`);
  const bodies: any[] = [];
  const state = { hovered: -1, time: 0, layer: -1 };
  let raf = 0, last = performance.now(), started = false;
  const body = (i: number) => bodies[i] ??= { ...settings.slots[i], scale: reduce ? 1 : 0, vx: 0, vy: 0, vr: 0, vs: 0, born: state.time };
  const step = (value: number, vel: number, target: number, k: number, d: number, dt: number) => { const n = vel + ((target - value) * k - vel * d) * dt; return [value + n * dt, n]; };

  const frame = (now: number) => {
    raf = 0;
    const dt = Math.min(1 / 30, Math.max(1 / 240, (now - last) / 1000));
    last = now; state.time += dt;
    const hovered = settings.enableHover ? state.hovered : -1;
    const popK = 170, popD = 2 * (1 - 0.85 * settings.bounciness) * Math.sqrt(popK);
    const moveK = 210, moveD = 2 * (reduce ? 1 : 0.72) * Math.sqrt(moveK);
    const sub = Math.ceil(dt / (1 / 240)), h = dt / sub;
    let moving = 0;
    for (let i = 0; i < count; i++) {
      const el = cards[i], c = body(i), slot = settings.slots[i];
      const appeared = reduce || state.time - c.born >= settings.delay + i * settings.stagger;
      let tx = slot.x, ty = slot.y, tr = slot.rotate, ts = appeared ? 1 : 0;
      if (hovered >= 0 && appeared) {
        if (i === hovered) { ty = slot.y - settings.cardSize * 0.04; tr = 0; ts = settings.hoverScale; }
        else tx = slot.x + Math.sign(i - hovered) * settings.pushDistance;
      }
      for (let k = 0; k < sub; k++) {
        [c.x, c.vx] = step(c.x, c.vx, tx, moveK, moveD, h);
        [c.y, c.vy] = step(c.y, c.vy, ty, moveK, moveD, h);
        [c.rotate, c.vr] = step(c.rotate, c.vr, tr, moveK, moveD, h);
        if (reduce) { c.scale = ts; c.vs = 0; } else [c.scale, c.vs] = step(c.scale, c.vs, ts, popK, popD, h);
      }
      moving += Math.abs(c.vx) + Math.abs(c.vy) + Math.abs(c.vr) + Math.abs(c.vs) * 100 + Math.abs(tx - c.x) + Math.abs(ty - c.y) + Math.abs(tr - c.rotate) + Math.abs(ts - c.scale) * 100 + (appeared ? 0 : 1);
      el.style.transform = `translate(-50%, -50%) translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0) rotate(${c.rotate.toFixed(3)}deg) scale(${Math.max(0, c.scale).toFixed(4)})`;
    }
    if (state.layer !== hovered) {
      state.layer = hovered;
      cards.forEach((el, i) => { el.style.zIndex = i === hovered ? String(count + 1) : String(i + 1); el.toggleAttribute('data-active', i === hovered); });
    }
    if (moving > 0.02) raf = requestAnimationFrame(frame);
  };
  const wake = () => { if (raf) return; last = performance.now(); raf = requestAnimationFrame(frame); };
  const pick = (e: PointerEvent) => {
    const rect = root.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2, py = e.clientY - rect.top - rect.height / 2;
    let best = -1, distance = Infinity;
    settings.slots.forEach((slot, i) => { const gap = Math.abs(px - slot.x); if (gap < distance) { distance = gap; best = i; } });
    if (best < 0) return -1;
    const half = settings.cardSize / 2;
    if (Math.abs(py - settings.slots[best].y) > half + 12 || distance > half + 12) return -1;
    if (state.hovered >= 0 && state.hovered !== best) { const cur = settings.slots[state.hovered]; if (cur && Math.abs(px - cur.x) - distance < 6) return state.hovered; }
    return best;
  };
  const onMove = (e: PointerEvent) => { const n = pick(e); if (n !== state.hovered) { state.hovered = n; wake(); } };
  root.addEventListener('pointermove', onMove);
  root.addEventListener('pointerdown', onMove);
  root.addEventListener('pointerleave', () => { if (state.hovered !== -1) { state.hovered = -1; wake(); } });
  root.addEventListener('click', (e) => { const i = pick(e as PointerEvent); if (i >= 0 && bodies[i] && !reduce) bodies[i].vs -= 2.2; wake(); });
  window.addEventListener('resize', () => { settings = s(); root.style.setProperty('--bounce-cards-size', `${settings.cardSize}px`); bodies.forEach((b, i) => { if (b) Object.assign(b, { born: b.born }); void i; }); wake(); });
  // Arranca la animación de entrada cuando el bloque aparece en pantalla
  const go = () => { if (started) return; started = true; root.setAttribute('data-listo', ''); state.time = 0; wake(); };
  if ('IntersectionObserver' in window) new IntersectionObserver(([e], io) => { if (e.isIntersecting) { io.disconnect(); go(); } }, { threshold: 0.3 }).observe(root);
  else go();
}
