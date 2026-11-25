// Fotos de la portada del Inicio (hero a pantalla completa), en dos versiones con su propio encuadre:
//   · escritorio: horizontal 16:10 (2560 × 1600)
//   · celular:    vertical 1:2   (1200 × 2400)
// Así en el celular no se usa la foto horizontal "estirada" (mucho zoom y poca calidad), y en la compu
// las fotos verticales no se recortan a una franja.
//
// Calidad: si existe una versión ampliada con IA en _material/fotos-ia/<id>.png se parte de esa (más
// definición); si no, del original con remuestreo Lanczos y un enfoque suave. Para generar las versiones
// con IA (Real-ESRGAN, x4) pasá la ruta del programa realesrgan-ncnn-vulkan:
//     npm run fotos:portada -- --ia /ruta/a/realesrgan-ncnn-vulkan
// Brillo: se levanta un poco cada foto hasta un brillo medio parejo (pedido de la escuela: "lograr brillo").
//
// Salida: src/assets/fotos-portada/<id>-escritorio.jpg y <id>-celular.jpg (los usa FotoPortada.astro).
// Se procesan las fotos que tienen `recorte` (escritorio/celular) en src/data/fotos.mjs.
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';
import { fotos } from '../src/data/fotos.mjs';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const ORIG = path.join(RAIZ, '_material/fotos');
const IA = path.join(RAIZ, '_material/fotos-ia');
const SALIDA = path.join(RAIZ, 'src/assets/fotos-portada');
const iArg = process.argv.indexOf('--ia');
const binIA = iArg > -1 ? process.argv[iArg + 1] : '';

const FORMATOS = {
  escritorio: { w: 2560, h: 1600 },
  celular: { w: 1200, h: 2400 },
};
const BRILLO_OBJETIVO = 0.56;

await fs.mkdir(SALIDA, { recursive: true });
await fs.mkdir(IA, { recursive: true });

const pct = (s) => s.split(/\s+/).map((v) => parseFloat(v) / 100);

const deLaPortada = fotos.filter((x) => x.recorte);
for (const f of deLaPortada) {
  const { id } = f;
  const original = path.join(ORIG, f.archivo);
  const ampliada = path.join(IA, `${id}.png`);

  // 1) Ampliación con IA (opcional)
  if (binIA && !existsSync(ampliada)) {
    const tmp = path.join(IA, `${id}.entrada.png`);
    await sharp(original).rotate().toColorspace('srgb').png().toFile(tmp);
    process.stdout.write(`IA ×4 ${id}… `);
    execFileSync(binIA, ['-i', tmp, '-o', ampliada, '-n', 'realesrgan-x4plus'], { cwd: path.dirname(binIA), stdio: 'ignore' });
    await fs.unlink(tmp);
    process.stdout.write('listo\n');
  }
  const fuente = existsSync(ampliada) ? ampliada : original;
  const base = sharp(fuente).rotate().toColorspace('srgb');
  const meta = await sharp(fuente).rotate().metadata();
  // dimensiones ya rotadas
  const [W, H] = meta.orientation && meta.orientation >= 5 ? [meta.height, meta.width] : [meta.width, meta.height];

  // 2) Brillo parejo
  const st = await sharp(fuente).rotate().stats();
  const [r, g, b] = st.channels;
  const L = (0.2126 * r.mean + 0.7152 * g.mean + 0.0722 * b.mean) / 255;
  const brillo = Math.min(1.18, Math.max(1.03, BRILLO_OBJETIVO / L));

  for (const [nombre, { w, h }] of Object.entries(FORMATOS)) {
    const [fx, fy] = pct(f.recorte[nombre]);
    const A = w / h;
    let cw = W, ch = H;
    if (W / H > A) cw = Math.round(H * A); else ch = Math.round(W / A);
    const left = Math.round(Math.min(W - cw, Math.max(0, fx * W - cw / 2)));
    const top = Math.round(Math.min(H - ch, Math.max(0, fy * H - ch / 2)));
    const escala = w / cw;
    await base.clone()
      .extract({ left, top, width: cw, height: ch })
      .resize(w, h, { kernel: 'lanczos3' })
      .modulate({ brightness: brillo, saturation: 1.04 })
      .sharpen(escala > 1.3 ? { sigma: 0.9, m1: 0.6, m2: 2 } : { sigma: 0.6 })
      .jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4' })
      .toFile(path.join(SALIDA, `${id}-${nombre}.jpg`));
    console.log(`✓ ${id}-${nombre}  recorte ${cw}×${ch} de ${W}×${H}${fuente === ampliada ? ' (IA)' : ''} → ${w}×${h} (×${escala.toFixed(2)}), brillo ×${brillo.toFixed(2)}`);
  }
}
// limpiar las que ya no están en la portada
for (const a of await fs.readdir(SALIDA)) {
  const id = a.replace(/-(escritorio|celular)\.jpg$/, '');
  if (!deLaPortada.some((x) => x.id === id)) { await fs.unlink(path.join(SALIDA, a)); console.log(`✗ eliminado ${a}`); }
}
