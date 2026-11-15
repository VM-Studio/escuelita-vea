// Capturas automáticas de páginas en varios anchos (control de calidad).
// Uso: node scripts/qa-capturas.mjs [base=http://localhost:4321] [--rutas=/,/jardin/] [--anchos=375,1440] [--modo=reducido|animado|sinjs]
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const base = args.find((a) => a.startsWith('http')) || 'http://localhost:4321';
const opt = (k, d) => (args.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
const rutas = opt('rutas', '/,/la-escuelita/,/la-escuelita/equipo/,/proyecto-pedagogico/,/jardin/,/primaria/,/comunidad/,/contacto/,/404/').split(',');
const anchos = opt('anchos', '320,375,414,768,1024,1280,1440,1920').split(',').map(Number);
const modo = opt('modo', 'reducido');
const salida = path.resolve('qa/capturas', modo);
await fs.mkdir(salida, { recursive: true });

const browser = await chromium.launch();
const problemas = [];
for (const ancho of anchos) {
  const alto = ancho < 768 ? 800 : ancho < 1280 ? 900 : 1000;
  const ctx = await browser.newContext({
    viewport: { width: ancho, height: alto },
    deviceScaleFactor: 1,
    reducedMotion: modo === 'reducido' ? 'reduce' : 'no-preference',
    javaScriptEnabled: modo !== 'sinjs',
    hasTouch: ancho < 1024,
  });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => problemas.push(`[${ancho}] error JS: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') problemas.push(`[${ancho}] consola: ${m.text()}`); });
  for (const ruta of rutas) {
    await page.goto(base + ruta, { waitUntil: 'load' }); await page.waitForTimeout(1200);
    if (modo === 'sinjs') {
      for (let y = 0; y < 30000; y += 700) { await page.mouse.wheel(0, 700); await page.waitForTimeout(60); }
      await page.waitForTimeout(500);
      const nombre = `${ruta.replace(/\//g, '_').replace(/^_|_$/g, '') || 'inicio'}-${ancho}.png`;
      await page.screenshot({ path: path.join(salida, nombre), fullPage: true });
      process.stdout.write(`✓ ${nombre}\n`);
      continue;
    }
    // recorrer para disparar lazy-load y revelados
    await page.evaluate(async () => {
      const paso = window.innerHeight * 0.7;
      for (let y = 0; y < document.body.scrollHeight; y += paso) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });
    await page.waitForTimeout(800);
    // desborde horizontal
    const desborde = await page.evaluate(() => {
      const w = document.documentElement.clientWidth;
      const malos = [];
      document.querySelectorAll('body *').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width && (r.right > w + 1 || r.left < -1)) {
          const cs = getComputedStyle(el);
          let p = el.parentElement, recortado = false;
          while (p) { const s = getComputedStyle(p); if (s.overflowX !== 'visible' && p !== document.body && p !== document.documentElement) { recortado = true; break; } p = p.parentElement; }
          if (!recortado && cs.position !== 'fixed') malos.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)} (${Math.round(r.left)}→${Math.round(r.right)})`);
        }
      });
      return { scroll: document.documentElement.scrollWidth > w, malos: malos.slice(0, 6) };
    });
    if (desborde.scroll || desborde.malos.length) problemas.push(`[${ancho}] ${ruta} desborde: ${desborde.scroll} ${desborde.malos.join(' | ')}`);
    const nombre = `${ruta.replace(/\//g, '_').replace(/^_|_$/g, '') || 'inicio'}-${ancho}.png`;
    await page.screenshot({ path: path.join(salida, nombre), fullPage: true });
    process.stdout.write(`✓ ${nombre}\n`);
  }
  await ctx.close();
}
await browser.close();
await fs.writeFile(path.join(salida, 'problemas.txt'), problemas.join('\n') || 'Sin problemas detectados.');
console.log(problemas.length ? `\n${problemas.length} problemas:\n${problemas.join('\n')}` : '\nSin problemas detectados.');
