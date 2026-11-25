import { existsSync } from 'node:fs';
// Prepara las fotos seleccionadas en src/data/fotos.mjs:
//  1) master optimizado en src/assets/fotos/<id>.jpg (máx. 2400 px, sRGB, sin metadatos/EXIF/GPS)
//  2) LQIP (miniatura desenfocada en base64) en src/data/fotos-lqip.json
//  3) _material/FOTOS-MANIFEST.md (tabla para revisión de la escuela)
//  Opcional: --hoja  genera _material/_revision/hoja-seleccion.jpg (contacto visual con los id)
//
// Uso: npm run fotos            (procesa solo lo nuevo o cambiado)
//      npm run fotos -- --todo  (reprocesa todo)
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { fotos, fotosRevisadasSinUso } from '../src/data/fotos.mjs';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const ORIG = path.join(RAIZ, '_material/fotos');
const SALIDA = path.join(RAIZ, 'src/assets/fotos');
const LQIP = path.join(RAIZ, 'src/data/fotos-lqip.json');
const MANIFEST = path.join(RAIZ, '_material/FOTOS-MANIFEST.md');
const todo = process.argv.includes('--todo');
const hoja = process.argv.includes('--hoja');

await fs.mkdir(SALIDA, { recursive: true });
let lqip = {};
try { lqip = JSON.parse(await fs.readFile(LQIP, 'utf8')); } catch {}

const ids = new Set();
const faltantes = [];
for (const f of fotos) {
  if (ids.has(f.id)) throw new Error(`id duplicado: ${f.id}`);
  ids.add(f.id);
  // Si la escuela entregó una versión mejorada (_material/fotos-mejoradas/<id>.jpg|png|…), se usa esa.
  const mejorada = ['jpg', 'jpeg', 'png', 'webp', 'tif', 'tiff', 'JPG', 'JPEG', 'PNG'].map((e) => path.join(RAIZ, '_material/fotos-mejoradas', `${f.id}.${e}`)).find((a) => existsSync(a));
  const origen = mejorada || path.join(ORIG, f.archivo);
  const destino = path.join(SALIDA, `${f.id}.jpg`);
  try { await fs.access(origen); } catch { faltantes.push(f); continue; }
  let rehacer = todo;
  if (!rehacer) {
    try {
      const [a, b] = await Promise.all([fs.stat(origen), fs.stat(destino)]);
      rehacer = a.mtimeMs > b.mtimeMs;
    } catch { rehacer = true; }
  }
  if (rehacer) {
    // Brillo: las fotos oscuras se levantan un poco (rev. 25-11-2026: "en el celu se ven oscuras"); las demás quedan igual
    const st = await sharp(origen).rotate().stats();
    const [r, g, b] = st.channels;
    const L = (0.2126 * r.mean + 0.7152 * g.mean + 0.0722 * b.mean) / 255;
    const brillo = L < 0.5 ? Math.min(1.2, 0.5 / L) : 1;
    await sharp(origen)
      .rotate() // respeta orientación EXIF y la descarta
      .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
      .toColorspace('srgb')
      .modulate({ brightness: brillo })
      .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' })
      .toFile(destino);
    process.stdout.write(`✓ ${f.id}\n`);
  }
  if (rehacer || !lqip[f.id]) {
    const meta = await sharp(destino).metadata();
    const buf = await sharp(destino).resize(24).blur(0.6).jpeg({ quality: 45 }).toBuffer();
    lqip[f.id] = { w: meta.width, h: meta.height, lqip: `data:image/jpeg;base64,${buf.toString('base64')}` };
  }
}
// limpiar masters y lqip que ya no están en el registro
for (const archivo of await fs.readdir(SALIDA)) {
  const id = archivo.replace(/\.jpg$/, '');
  if (!ids.has(id)) { await fs.unlink(path.join(SALIDA, archivo)); delete lqip[id]; console.log(`✗ eliminado ${id}`); }
}
for (const id of Object.keys(lqip)) if (!ids.has(id)) delete lqip[id];
await fs.writeFile(LQIP, JSON.stringify(lqip, null, 1) + '\n');

// ── Manifest ────────────────────────────────────────────────────────────────
const esc = (s = '') => String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');
const fila = (f) => `| \`${esc(f.archivo)}\` | ${f.nivel === 'jardin' ? 'Jardín' : 'Primaria'} | ${esc(f.carpeta)} | ${esc(f.ve)} | ${f.usos.map(esc).join('<br>')} | ${esc(f.porque)} | ${esc(f.obs || '—')} |`;
const md = `# Manifest de fotos — La Escuelita

> Generado automáticamente por \`npm run fotos\` a partir de \`src/data/fotos.mjs\`. **No editar a mano.**
> Fecha: ${new Date().toISOString().slice(0, 10)} · Fotos en uso: ${fotos.length}

Cómo revisarlo: cada fila es una foto original del Drive (ruta relativa a \`_material/fotos/\`).
La columna **Dónde se usa** indica la página y el bloque. Para cambiar una foto, avisá qué fila y por cuál
reemplazarla; el cambio se hace en un solo lugar (\`src/data/fotos.mjs\`).

Criterios aplicados: cada foto se miró antes de ubicarla; Jardín solo en Jardín y Primaria solo en Primaria
(en Inicio, La Escuelita, Proyecto pedagógico y Comunidad conviven con criterio); preferencia por fotos al
aire libre y por el *hacer* (manos, materiales, ronda, árboles); ningún nombre de chico/a en textos
alternativos ni en archivos; los originales nunca se publican (se generan versiones optimizadas sin metadatos).

**Pendiente de la escuela:** confirmar la autorización de imagen de todas las fotos antes de publicar.

| Archivo original | Nivel | Carpeta | Qué se ve | Dónde se usa | Por qué | Observaciones |
| --- | --- | --- | --- | --- | --- | --- |
${fotos.map(fila).join('\n')}

## Fotos revisadas que no se usan (por ahora)

| Archivo | Motivo |
| --- | --- |
${fotosRevisadasSinUso.map((r) => `| \`${esc(r.archivo)}\` | ${esc(r.motivo)} |`).join('\n')}

Todas las demás fotos de las carpetas fueron miradas y quedan disponibles como alternativas.
${faltantes.length ? `\n## ⚠️ Originales no encontrados\n\n${faltantes.map((f) => `- \`${f.archivo}\` (${f.id})`).join('\n')}\n` : ''}`;
await fs.writeFile(MANIFEST, md);

if (hoja) {
  const C = 360; const cols = 6; const n = fotos.length; const rows = Math.ceil(n / cols);
  const comps = [];
  for (let i = 0; i < n; i++) {
    const f = fotos[i];
    const img = await sharp(path.join(SALIDA, `${f.id}.jpg`)).resize(C - 8, C - 40, { fit: 'inside' }).toBuffer();
    const label = Buffer.from(`<svg width="${C}" height="34"><rect width="100%" height="100%" fill="#000"/><text x="6" y="22" font-family="Arial" font-size="15" fill="#ff0">${i} ${f.id}</text></svg>`);
    comps.push({ input: label, left: (i % cols) * C, top: Math.floor(i / cols) * C });
    comps.push({ input: img, left: (i % cols) * C + 4, top: Math.floor(i / cols) * C + 36 });
  }
  await fs.mkdir(path.join(RAIZ, '_material/_revision'), { recursive: true });
  await sharp({ create: { width: cols * C, height: rows * C, channels: 3, background: '#fff' } })
    .composite(comps).jpeg({ quality: 70 }).toFile(path.join(RAIZ, '_material/_revision/hoja-seleccion.jpg'));
  console.log('hoja de selección generada');
}
if (faltantes.length) console.warn(`⚠️  Faltan ${faltantes.length} originales (ver manifest).`);
console.log(`Listo: ${fotos.length} fotos.`);
