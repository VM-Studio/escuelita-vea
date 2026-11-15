/*
 * Inclinación 3D con resorte y brillo — port reducido de "TiltedCard" de React Bits
 * (https://reactbits.dev · https://github.com/DavidHDev/react-bits).
 * Copyright (c) 2026 David Haz — MIT + Commons Clause License Condition v1.0 (ver THIRD-PARTY-NOTICES.md).
 * Mismo sistema de resortes (rx, ry, lift), escala al pasar el mouse y reflejo que sigue el ángulo.
 */
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
type St = Record<string, number>;
const step = (st: St, key: string, target: number, omega: number, zeta: number, dt: number) => {
  const v = `v${key}`;
  const n = Math.max(1, Math.ceil(dt / (1 / 240)));
  const h = dt / n;
  for (let i = 0; i < n; i++) { st[v] += (omega * omega * (target - st[key]) - 2 * zeta * omega * st[v]) * h; st[key] += st[v] * h; }
  const settled = Math.abs(target - st[key]) < 0.001 && Math.abs(st[v]) < 0.01;
  if (settled) { st[key] = target; st[v] = 0; }
  return !settled;
};

export function iniciarInclinacion(el: HTMLElement, { amplitude = 8, scale = 1.03, smoothness = 0.6, glare = 0.35 } = {}) {
  const body = (el.querySelector('[data-inclinar-cuerpo]') as HTMLElement) || el;
  const st: St = { rx: 0, vrx: 0, ry: 0, vry: 0, lift: 0, vlift: 0 };
  const p = { nx: 0, ny: 0, inside: false };
  let raf = 0, last = 0;
  const omega = 20 * Math.pow(0.2, smoothness), zeta = 1 - 0.3 * smoothness;
  const frame = (now: number) => {
    raf = 0;
    const dt = clamp((now - last) / 1000 || 0, 0, 0.05);
    last = now;
    let busy = false;
    busy = step(st, 'rx', p.inside ? -p.ny * amplitude : 0, omega, zeta, dt) || busy;
    busy = step(st, 'ry', p.inside ? p.nx * amplitude : 0, omega, zeta, dt) || busy;
    busy = step(st, 'lift', p.inside ? 1 : 0, omega, Math.max(zeta, 0.85), dt) || busy;
    const s = 1 + (scale - 1) * st.lift;
    body.style.transform = `perspective(900px) rotateX(${st.rx.toFixed(3)}deg) rotateY(${st.ry.toFixed(3)}deg) scale(${s.toFixed(4)})`;
    const reach = Math.max(amplitude, 1);
    body.style.setProperty('--tc-gx', `${(50 + (st.ry / reach) * 46).toFixed(2)}%`);
    body.style.setProperty('--tc-gy', `${(50 - (st.rx / reach) * 46).toFixed(2)}%`);
    body.style.setProperty('--tc-glare', (glare * Math.max(st.lift, Math.min(1, Math.hypot(st.rx, st.ry) / reach))).toFixed(3));
    if (busy) raf = requestAnimationFrame(frame);
  };
  const wake = () => { if (raf) return; last = performance.now(); raf = requestAnimationFrame(frame); };
  el.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    p.nx = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
    p.ny = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
    p.inside = true; wake();
  });
  el.addEventListener('pointerleave', () => { p.inside = false; wake(); });
}

export function iniciarInclinaciones() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('liviano')) return;
  document.querySelectorAll<HTMLElement>('[data-inclinar]').forEach((el) => iniciarInclinacion(el, JSON.parse(el.dataset.inclinar || '{}')));
}
