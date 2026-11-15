/*
 * Carrusel circular — port a JavaScript sin framework del componente "CircularCarousel" de React Bits
 * (https://reactbits.dev · https://github.com/DavidHDev/react-bits).
 * Copyright (c) 2026 David Haz — MIT + Commons Clause License Condition v1.0 (ver THIRD-PARTY-NOTICES.md).
 * Adaptado: sin React, geometría calculada en el servidor (Astro), misma física de giro, arrastre,
 * inercia, imán (snap), intro "rise", parallax y desvanecido por profundidad.
 */

export type Preset = 'cylinder' | 'orbit' | 'wheel' | 'panorama';
export const PRESETS = {
  cylinder: { axis: 'y', tilt: -5, perspective: 2500, curve: 1, spread: 1, inward: false, billboard: false, backfaces: true, window: 0 },
  orbit: { axis: 'y', tilt: -16, perspective: 1500, curve: 0, spread: 1.45, inward: false, billboard: true, backfaces: false, window: 0 },
  wheel: { axis: 'x', tilt: 0, perspective: 1800, curve: 0, spread: 1, inward: false, billboard: false, backfaces: true, window: 1.7 },
  panorama: { axis: 'y', tilt: 0, perspective: 0, curve: 1, spread: 1, inward: true, billboard: false, backfaces: false, window: 0 },
} as const;

const INTRO_LENGTH: Record<string, number> = { assemble: 1500, rise: 1400, spin: 1800, none: 0 };
const TILES = 8;
const OVERLAP = 2.5;
const DRAG_THRESHOLD = 5;
const SPRING = 118;
const SETTLE_SPEED = 9;
const TO_RAD = Math.PI / 180;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const wrap = (d: number) => ((((d + 180) % 360) + 360) % 360) - 180;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
const rotateX = (p: number[], deg: number) => { const r = deg * TO_RAD, c = Math.cos(r), s = Math.sin(r); return [p[0], p[1] * c - p[2] * s, p[1] * s + p[2] * c]; };
const rotateY = (p: number[], deg: number) => { const r = deg * TO_RAD, c = Math.cos(r), s = Math.sin(r); return [p[0] * c + p[2] * s, p[1], -p[0] * s + p[2] * c]; };

export interface OpcionesGeometria { count: number; preset: Preset; cardWidth: number; aspectRatio: number; gap: number; curve?: number; tiles?: number }

/** Geometría (se usa en el servidor para generar el HTML y en el cliente para animar). */
export function geometria(o: OpcionesGeometria) {
  const layout = PRESETS[o.preset] ?? PRESETS.cylinder;
  const axis = layout.axis;
  const curve = layout.billboard ? 0 : clamp(o.curve ?? layout.curve, 0, 1);
  const cardW = Math.max(40, o.cardWidth);
  const cardH = cardW / clamp(o.aspectRatio, 0.2, 5);
  const along = axis === 'x' ? cardH : cardW;
  const n = Math.max(o.count, 3);
  const pitch = (along + o.gap) * layout.spread;
  const chord = pitch / (2 * Math.sin(Math.PI / n));
  const arc = (n * pitch) / (2 * Math.PI);
  const radius = Math.max(chord + (arc - chord) * curve, along * 0.6);
  const total = curve > 0.001 ? (o.tiles ?? TILES) : 1;
  const length = along / total;
  const bend = curve > 0.001 ? radius / curve : 0;
  const tiles = Array.from({ length: total }, (_, index) => {
    const start = index * length - (index > 0 ? OVERLAP / 2 : 0);
    const end = (index + 1) * length + (index < total - 1 ? OVERLAP / 2 : 0);
    const center = (start + end) / 2 - along / 2;
    const alpha = bend ? center / bend : 0;
    const shift = bend ? bend * Math.sin(alpha) : center;
    const sink = bend ? bend * (1 - Math.cos(alpha)) : 0;
    const depth = layout.inward ? sink : -sink;
    const turn = ((layout.inward ? -alpha : alpha) * 180) / Math.PI;
    const move = axis === 'x'
      ? `translate3d(0px, ${shift}px, ${depth}px) rotateX(${-turn}deg)`
      : `translate3d(${shift}px, 0px, ${depth}px) rotateY(${turn}deg)`;
    return { index, total, start, end, size: end - start, move };
  });
  return { layout, axis, curve, cardW, cardH, along, radius, tiles, step: 360 / o.count };
}

interface Config extends OpcionesGeometria {
  intro: 'rise' | 'assemble' | 'spin' | 'none';
  autoplay: 'drift' | 'step' | 'off';
  speed: number; interval: number; direction: 'left' | 'right';
  draggable: boolean; momentum: number; snap: boolean; pauseOnHover: boolean; focusOnClick: boolean;
  parallax: number; stretch: number; depthFade: number; tilt?: number; perspective?: number;
}

/** Arma las "tiras" (tiles) de cada tarjeta en el navegador: el HTML inicial queda liviano. */
function construirTiles(root: HTMLElement, g: ReturnType<typeof geometria>) {
  const { cardW, cardH, along, axis, tiles, layout } = g;
  root.querySelectorAll<HTMLElement>('[data-cc-index]').forEach((card) => {
    const src = card.dataset.src || '';
    let html = '';
    const una = (t: (typeof tiles)[number], back: boolean) => {
      const strip = back ? t.total - 1 - t.index : t.index;
      const first = strip === 0, last = strip === t.total - 1, r = 'var(--cc-radius)';
      const fr = axis === 'x' ? `${first ? r : 0} ${first ? r : 0} ${last ? r : 0} ${last ? r : 0}` : `${first ? r : 0} ${last ? r : 0} ${last ? r : 0} ${first ? r : 0}`;
      const offset = back ? along - t.end : t.start;
      const box = axis === 'x' ? `left:${-cardW / 2}px;top:${-t.size / 2}px;width:${cardW}px;height:${t.size}px` : `left:${-t.size / 2}px;top:${-cardH / 2}px;width:${t.size}px;height:${cardH}px`;
      const photo = axis === 'x' ? `left:0;top:${-offset}px;width:${cardW}px;height:${cardH}px` : `left:${-offset}px;top:0;width:${cardW}px;height:${cardH}px`;
      const flip = axis === 'x' ? ' rotateX(180deg)' : ' rotateY(180deg)';
      return `<div class="circular-carousel__tile" style="${box};transform:${t.move}${back ? flip : ''}" aria-hidden="true"><div class="circular-carousel__frame" style="height:${axis === 'x' ? t.size : cardH}px;border-radius:${fr}"><img class="circular-carousel__photo" src="${src}" alt="" draggable="false" decoding="async" style="${photo}">${back ? '<div class="circular-carousel__inner"></div>' : ''}<div class="circular-carousel__shade"></div></div></div>`;
    };
    tiles.forEach((t) => { html += una(t, false); });
    if (layout.backfaces) tiles.forEach((t) => { html += una(t, true); });
    card.innerHTML = html;
  });
}

export function iniciarCarruselCircular(root: HTMLElement) {
  const cfg = JSON.parse(root.dataset.config || '{}') as Config;
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('liviano');
  const g = geometria({ ...cfg, tiles: window.innerWidth < 768 ? 5 : 8 });
  construirTiles(root, g);
  const stage = root.querySelector<HTMLElement>('[data-cc-stage]')!;
  const camera = root.querySelector<HTMLElement>('[data-cc-camera]')!;
  const ring = root.querySelector<HTMLElement>('[data-cc-ring]')!;
  const cards = Array.prototype.slice.call(root.querySelectorAll<HTMLElement>('[data-cc-index]')) as HTMLElement[];
  const live = root.querySelector<HTMLElement>('[data-cc-live]');
  const s = {
    count: cfg.count, step: g.step, radius: g.radius, layout: g.layout, axis: g.axis,
    tilt: cfg.tilt ?? g.layout.tilt,
    perspective: g.layout.inward ? g.radius : (cfg.perspective ?? g.layout.perspective),
    cardW: g.cardW, cardH: g.cardH,
    intro: reduced ? 'none' : cfg.intro,
    autoplay: reduced ? 'off' : cfg.autoplay,
    speed: cfg.speed, interval: Math.max(0.5, cfg.interval), draggable: cfg.draggable,
    momentum: clamp(cfg.momentum, 0, 1), snap: cfg.snap, pauseOnHover: cfg.pauseOnHover,
    parallax: reduced ? 0 : clamp(cfg.parallax, 0, 1), stretch: reduced ? 0 : clamp(cfg.stretch, 0, 1),
    depthFade: clamp(cfg.depthFade, 0, 1), reduced,
  };
  const dragSign = g.layout.inward ? -1 : 1;
  const state = {
    angle: 0, velocity: 0, target: null as number | null, dir: (cfg.direction === 'right' ? 1 : -1) * dragSign,
    press: null as null | { id: number; x: number; y: number; angle: number; moved: boolean; origin: number; samples: { time: number; angle: number }[] },
    drag: false, hover: false, pointer: { inside: false, x: 0, y: 0 }, yaw: 0, pitch: 0,
    intro: null as null | { type: string; start: number }, introDone: false, holdUntil: 0, stepAt: 0,
    suppressClick: false, wheelTimer: 0 as any, fit: 1, shift: 0, drop: 0, last: 0,
  };
  let ready = false;
  let active = 0;
  let raf = 0;
  let visible = true;
  const nearest = (a: number) => Math.round(a / s.step) * s.step;

  const measure = () => {
    const rect = root.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const width = rect.width * 0.94;
    const height = rect.height * 0.92;
    const P = s.perspective;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    if (s.layout.inward) { minX = -width / 2; maxX = width / 2; minY = -s.cardH / 2; maxY = s.cardH / 2; }
    else {
      const corners = [[-s.cardW / 2, -s.cardH / 2], [s.cardW / 2, -s.cardH / 2], [-s.cardW / 2, s.cardH / 2], [s.cardW / 2, s.cardH / 2]];
      const limit = s.layout.window ? s.layout.window * s.step : 180;
      for (let a = -limit; a <= limit; a += limit / 24) {
        for (const [cx, cy] of corners) {
          let p: number[];
          if (s.axis === 'x') p = rotateY(rotateX([cx, cy, s.radius], -a), s.tilt);
          else if (s.layout.billboard) { const c = rotateY([0, 0, s.radius], a); p = rotateX([c[0] + cx, cy, c[2]], s.tilt); }
          else p = rotateX(rotateY([cx, cy, s.radius], a), s.tilt);
          p = [p[0], p[1], p[2] - s.radius];
          if (p[2] >= P * 0.95) continue;
          const k = P / (P - p[2]);
          minX = Math.min(minX, p[0] * k); maxX = Math.max(maxX, p[0] * k);
          minY = Math.min(minY, p[1] * k); maxY = Math.max(maxY, p[1] * k);
        }
      }
    }
    const fit = Math.min(1, width / Math.max(maxX - minX, 1), height / Math.max(maxY - minY, 1));
    state.fit = fit;
    state.shift = -((minY + maxY) / 2) * fit;
    state.drop = s.axis === 'x' ? (rect.width / fit) * 0.55 + s.cardW : (rect.height / fit) * 0.55 + s.cardH;
    stage.style.perspective = `${P}px`;
    stage.style.transform = `translate3d(0, ${state.shift}px, 0) scale(${fit})`;
  };

  const introCard = (elapsed: number, landing: number) => {
    if (!state.intro) return { radius: 1, lift: 0 };
    const type = state.intro.type;
    const reach = Math.abs(wrap(landing + state.angle));
    if (type === 'assemble') { const p = easeOut(clamp((elapsed - (reach / 180) * 420) / 1080, 0, 1)); return { radius: 1 + 0.6 * (1 - p), lift: 0 }; }
    if (type === 'rise') { const p = easeOutQuint(clamp((elapsed - (reach / 180) * 480) / 900, 0, 1)); return { radius: 1, lift: (1 - p) * state.drop }; }
    if (type === 'spin') { const p = easeOut(clamp(elapsed / INTRO_LENGTH.spin, 0, 1)); return { radius: 1 + 0.28 * (1 - p), lift: 0 }; }
    return { radius: 1, lift: 0 };
  };

  const advance = (dt: number, now: number) => {
    if (!state.introDone && ready) {
      if (!state.intro) { if (s.intro === 'none') state.introDone = true; else state.intro = { type: s.intro, start: now }; }
      if (state.intro && now - state.intro.start >= INTRO_LENGTH[state.intro.type]) { state.intro = null; state.introDone = true; }
    }
    const paused = (s.pauseOnHover && state.hover) || state.drag || now < state.holdUntil;
    const cruise = s.autoplay === 'drift' && !paused && !state.intro ? s.speed * state.dir : 0;
    let busy = Boolean(state.intro) || state.drag;
    if (state.drag || state.intro) state.velocity = state.drag ? state.velocity : 0;
    else if (state.target !== null) {
      let remaining = dt;
      const damping = 2 * Math.sqrt(SPRING);
      while (remaining > 0) {
        const h = Math.min(remaining, 1 / 240);
        const accel = SPRING * (state.target - state.angle) - damping * state.velocity;
        state.velocity += accel * h; state.angle += state.velocity * h; remaining -= h;
      }
      if (Math.abs(state.target - state.angle) < 0.004 && Math.abs(state.velocity) < 0.03) { state.angle = state.target; state.velocity = 0; state.target = null; }
      busy = true;
    } else {
      const tau = 0.18 + s.momentum * 1.5;
      state.velocity += (cruise - state.velocity) * (1 - Math.exp(-dt / tau));
      state.angle += state.velocity * dt;
      if (cruise === 0 && s.snap && Math.abs(state.velocity) < SETTLE_SPEED) state.target = nearest(state.angle);
      busy = busy || cruise !== 0 || Math.abs(state.velocity) > 0.01 || state.target !== null;
    }
    if (s.autoplay === 'step' && !paused && !state.intro && state.introDone) {
      if (!state.stepAt) state.stepAt = now + s.interval * 1000;
      if (now >= state.stepAt) { state.target = (state.target ?? nearest(state.angle)) + s.step * state.dir; state.stepAt = now + s.interval * 1000; }
      busy = true;
    } else state.stepAt = 0;
    if (now < state.holdUntil) busy = true;
    const ease = 1 - Math.exp(-dt / 0.35);
    const aimYaw = state.pointer.inside ? state.pointer.x * s.parallax * 9 : 0;
    const aimPitch = state.pointer.inside ? -state.pointer.y * s.parallax * 6 : 0;
    state.yaw += (aimYaw - state.yaw) * ease; state.pitch += (aimPitch - state.pitch) * ease;
    if (Math.abs(aimYaw - state.yaw) > 0.01 || Math.abs(aimPitch - state.pitch) > 0.01) busy = true;
    return busy;
  };

  const render = (now: number) => {
    const elapsed = state.intro ? now - state.intro.start : 0;
    const swell = 1 + s.stretch * 0.12 * Math.min(1, Math.abs(state.velocity) / 420);
    let spinOffset = 0;
    if (state.intro?.type === 'spin') spinOffset = -300 * state.dir * (1 - easeOut(clamp(elapsed / INTRO_LENGTH.spin, 0, 1)));
    else if (state.intro?.type === 'assemble') spinOffset = -32 * state.dir * (1 - easeOut(clamp(elapsed / INTRO_LENGTH.assemble, 0, 1)));
    const angle = state.angle + spinOffset;
    const R = s.radius * swell;
    if (s.axis === 'x') { camera.style.transform = `translate3d(0, 0, ${-R}px) rotateY(${s.tilt + state.yaw}deg) rotateX(${state.pitch}deg)`; ring.style.transform = `rotateX(${-angle}deg)`; }
    else if (s.layout.inward) { camera.style.transform = `translate3d(0, 0, ${s.perspective - 1}px) rotateX(${s.tilt + state.pitch}deg) rotateY(${state.yaw}deg)`; ring.style.transform = `rotateY(${angle}deg)`; }
    else { camera.style.transform = `translate3d(0, 0, ${-R}px) rotateX(${s.tilt + state.pitch}deg) rotateY(${state.yaw}deg)`; ring.style.transform = `rotateY(${angle}deg)`; }
    for (let i = 0; i < s.count; i++) {
      const card = cards[i];
      if (!card) continue;
      const base = i * s.step;
      const mod = introCard(elapsed, base);
      const r = R * mod.radius;
      let t: string;
      if (s.axis === 'x') t = `rotateX(${-base}deg) translateZ(${r}px)`;
      else if (s.layout.inward) t = `rotateY(${base}deg) translateZ(${-r}px)`;
      else { t = `rotateY(${base}deg) translateZ(${r}px)`; if (s.layout.billboard) t += ` rotateY(${-(base + angle)}deg)`; }
      if (mod.lift) t += s.axis === 'x' ? ` translateX(${mod.lift}px)` : ` translateY(${mod.lift}px)`;
      card.style.transform = t;
      const world = wrap(base + angle);
      const facing = Math.cos(world * TO_RAD);
      if (s.layout.inward) card.style.visibility = Math.abs(world) > 86 ? 'hidden' : '';
      card.style.setProperty('--cc-depth', (s.depthFade * Math.pow((1 - facing) / 2, 1.25)).toFixed(3));
    }
    const index = ((Math.round(-state.angle / s.step) % s.count) + s.count) % s.count || 0;
    if (index !== active) {
      active = index;
      if (live) live.textContent = `${cards[index]?.getAttribute('aria-label') || ''}`;
    }
  };

  const frame = (now: number) => {
    raf = 0;
    const dt = state.last ? Math.min((now - state.last) / 1000, 0.05) : 1 / 60;
    state.last = now;
    const busy = advance(dt, now);
    render(now);
    if (busy && visible && !document.hidden) raf = requestAnimationFrame(frame);
    else state.last = 0;
  };
  const wake = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame); };

  document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; state.last = 0; } else wake(); });
  if ('ResizeObserver' in window) new ResizeObserver(() => { measure(); wake(); }).observe(root);
  else window.addEventListener('resize', () => { measure(); wake(); });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) wake(); else { cancelAnimationFrame(raf); raf = 0; state.last = 0; } }).observe(root);

  root.addEventListener('wheel', (event) => {
    if (!s.draggable) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : 0;
    if (!delta) return;
    event.preventDefault();
    const perPixel = 180 / (Math.PI * s.radius * state.fit);
    state.target = null;
    state.angle -= delta * perPixel * dragSign;
    state.velocity = -delta * perPixel * dragSign * 30;
    state.holdUntil = performance.now() + 1600;
    clearTimeout(state.wheelTimer);
    state.wheelTimer = setTimeout(() => { if (s.snap) state.target = nearest(state.angle + state.velocity * 0.12); wake(); }, 140);
    wake();
  }, { passive: false });

  const focusIndex = (index: number) => {
    let target = -index * s.step;
    target += 360 * Math.round((state.angle - target) / 360);
    state.target = target; state.holdUntil = performance.now() + 1200; wake();
  };
  const stepBy = (delta: number) => {
    const base = state.target ?? Math.round(state.angle / s.step) * s.step;
    state.target = base - delta * s.step * dragSign; state.holdUntil = performance.now() + 1200; wake();
  };
  const updatePointer = (e: PointerEvent) => {
    const rect = root.getBoundingClientRect();
    state.pointer.x = clamp(((e.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    state.pointer.y = clamp(((e.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
  };
  root.addEventListener('pointerdown', (e) => {
    state.suppressClick = false;
    if (!s.draggable || e.button !== 0) return;
    state.press = { id: e.pointerId, x: e.clientX, y: e.clientY, angle: state.angle, moved: false, origin: 0, samples: [{ time: performance.now(), angle: state.angle }] };
  });
  root.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'mouse') { state.pointer.inside = true; updatePointer(e); }
    const press = state.press;
    if (!press || press.id !== e.pointerId) { wake(); return; }
    const delta = s.axis === 'x' ? e.clientY - press.y : e.clientX - press.x;
    const cross = s.axis === 'x' ? e.clientX - press.x : e.clientY - press.y;
    if (!press.moved) {
      if (Math.abs(delta) < DRAG_THRESHOLD) return;
      if (Math.abs(cross) > Math.abs(delta) * 1.2 && e.pointerType !== 'mouse') { state.press = null; return; }
      press.moved = true; press.origin = delta; state.drag = true; state.target = null; state.velocity = 0;
      root.setAttribute('data-dragging', '');
      try { root.setPointerCapture(e.pointerId); } catch {}
    }
    const perPixel = 180 / (Math.PI * s.radius * state.fit);
    state.angle = press.angle + (delta - press.origin) * perPixel * dragSign;
    const now = performance.now();
    press.samples.push({ time: now, angle: state.angle });
    while (press.samples.length > 2 && now - press.samples[0].time > 110) press.samples.shift();
    wake();
  });
  const release = (e: PointerEvent) => {
    const press = state.press;
    if (!press || press.id !== e.pointerId) return;
    state.press = null;
    if (!press.moved) return;
    state.drag = false;
    root.removeAttribute('data-dragging');
    state.suppressClick = true;
    const first = press.samples[0];
    const last = press.samples[press.samples.length - 1];
    const span = (last.time - first.time) / 1000;
    const velocity = span > 0.008 ? clamp((last.angle - first.angle) / span, -1400, 1400) : 0;
    state.velocity = velocity;
    if (Math.abs(velocity) > 60) state.dir = Math.sign(velocity);
    const coasting = s.autoplay === 'drift' && !(s.pauseOnHover && state.hover && e.pointerType === 'mouse');
    if (s.snap && !coasting) {
      const tau = 0.18 + s.momentum * 1.5;
      state.target = Math.round((state.angle + velocity * tau * 0.55) / s.step) * s.step;
    }
    wake();
  };
  root.addEventListener('pointerup', release);
  root.addEventListener('pointercancel', release);
  root.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'mouse') return; state.hover = true; wake(); });
  root.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { state.hover = false; state.pointer.inside = false; } wake(); });
  root.addEventListener('click', (e) => {
    if (state.suppressClick) { state.suppressClick = false; return; }
    const card = (e.target as HTMLElement).closest?.('[data-cc-index]');
    if (!card) return;
    if (cfg.focusOnClick) focusIndex(Number(card.getAttribute('data-cc-index')));
  });
  root.addEventListener('keydown', (e) => {
    const forward = s.axis === 'x' ? 'ArrowDown' : 'ArrowRight';
    const backward = s.axis === 'x' ? 'ArrowUp' : 'ArrowLeft';
    if (e.key === forward) stepBy(1);
    else if (e.key === backward) stepBy(-1);
    else if (e.key === 'Home') focusIndex(0);
    else if (e.key === 'End') focusIndex(s.count - 1);
    else return;
    e.preventDefault();
  });

  // Igual que el original: esperar las primeras imágenes (o 2,4 s) antes de la intro
  const imgs = cards.slice(0, 16).map((c) => c.querySelector('img')).filter(Boolean) as HTMLImageElement[];
  const load = (im: HTMLImageElement) => new Promise<void>((res) => { if (im.complete) res(); else { im.addEventListener('load', () => res(), { once: true }); im.addEventListener('error', () => res(), { once: true }); } });
  Promise.race([Promise.all(imgs.map(load)), new Promise((r) => setTimeout(r, 2400))]).then(() => {
    ready = true;
    root.setAttribute('data-ready', '');
    measure();
    wake();
  });
  measure();
  render(performance.now());
}

export function iniciarCarruselesCirculares() {
  const cajas = Array.prototype.slice.call(document.querySelectorAll<HTMLElement>('[data-carrusel-circular]')) as HTMLElement[];
  if (!cajas.length) return;
  const montar = (c: HTMLElement) => { if (c.hasAttribute('data-montado')) return; c.setAttribute('data-montado', ''); iniciarCarruselCircular(c); };
  if (!('IntersectionObserver' in window)) return cajas.forEach(montar);
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); montar(e.target as HTMLElement); } }), { rootMargin: '300px' });
  cajas.forEach((c) => io.observe(c));
}
