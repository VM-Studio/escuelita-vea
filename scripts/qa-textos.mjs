// Control de textos: verifica que cada texto publicable de CONTENIDO-WEB.md aparezca en el sitio generado (dist/)
// y que no aparezcan rótulos internos. Uso: npm run build && node scripts/qa-textos.mjs
import fs from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const md = await fs.readFile('CONTENIDO-WEB.md', 'utf8');

async function htmls(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== '_astro') out.push(...(await htmls(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const decode = (s) => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
const norm = (s) => decode(s).replace(/[“”«»"]/g, '"').replace(/[‘’']/g, "'").replace(/[—–]/g, '—').replace(/\s+/g, ' ').trim().toLowerCase();

const paginas = {};
let todo = '';
for (const f of await htmls(dist)) {
  if (f.includes(`${path.sep}guia${path.sep}`)) continue;
  const h = await fs.readFile(f, 'utf8');
  const cuerpo = h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<wbr>/g, '');
  const plano = decode(cuerpo.replace(/<span class="sr-only"> \(se abre en una pestaña nueva\)<\/span>/g, '').replace(/<!--[\s\S]*?-->/g, ' ').replace(/<br\s*\/?>/g, ' ').replace(/<\/?(em|strong|a|span|b|i|wbr)\b[^>]*>/g, '').replace(/<[^>]+>/g, ' '));
  const texto = norm(plano);
  paginas[path.relative(dist, f)] = plano;
  todo += ' ' + texto;
}

// --- Extraer unidades publicables de CONTENIDO-WEB.md ---
let cuerpo = md.slice(md.indexOf('# PÁGINA: INICIO'), md.indexOf('# FRASES PARA DESTACAR'));
const lineas = cuerpo.split('\n');
const unidades = [];
let bloque = [];
let saltarLista = false;
const flush = () => { if (bloque.length) { unidades.push(bloque.join(' ')); bloque = []; } };
for (let l of lineas) {
  if (/^\s*>/.test(l)) { flush(); continue; }
  if (/^# PÁGINA|^---$|^Copetes:|^Enlaces externos que el documento/.test(l)) { flush(); saltarLista = /^Enlaces externos/.test(l); continue; }
  if (saltarLista && /^- .*→ https?:/.test(l)) continue;
  if (/^### (La Coordinación|Los Docentes|Equipo Psicológico) →|^### Detalle \(oculto|^### Carta de agradecimiento de Marta Calvo \(desplegable\)/.test(l)) { flush(); continue; }
  if (/^\| ?-{3}/.test(l)) continue;
  l = l.replace(/`\[errata corregida[^\]]*\]`/g, '').replace(/^Botón: /, '');
  if (/^\|/.test(l)) { flush(); l.split('|').map((c) => c.trim()).filter(Boolean).forEach((c) => unidades.push(c)); continue; }
  if (/^#{2,3} /.test(l)) { flush(); unidades.push(l.replace(/^#+ /, '').replace(/ — /, ' ')); continue; }
  if (/^- /.test(l)) { flush(); bloque.push(l.slice(2)); continue; }
  if (/^\s*$/.test(l)) { flush(); continue; }
  bloque.push(l.trim());
}
flush();

// Partir en fragmentos verificables: etiquetas "**X:**", oraciones, ítems con " — "
const fragmentos = [];
for (let u of unidades) {
  u = u.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const partes = u.split(/\*\*([^*]+?)\*\*/).map((x) => x.replace(/\*/g, '').trim()).filter(Boolean);
  for (let p of partes) {
    p = p.replace(/:$/, '').replace(/^[:—–\-|]\s*/, '');
    for (const o of p.split(/(?<=[.!?…])\s+(?=[A-ZÁÉÍÓÚÑ¿¡“"(0-9])/)) {
      for (const q of o.split(/\s+[—|]\s+/)) {
        const t = q.replace(/^[,;:]\s*/, '').trim();
        if (t.length > 1) fragmentos.push(t);
      }
    }
  }
}

// Equivalencias de presentación aceptadas (el texto es el mismo, cambia la forma)
const equivalencias = [
  [/^(\d{4})$/, null], // años sueltos: aparecen como cifras
  [/^(Portada|Portada del Jardín|Portada de Primaria|Portada de Comunidad|Bienvenida institucional|Línea de tiempo|Presentación|Introducción)$/, null], // rótulos internos de sección, no se publican
  [/^(Ex alumnos y padres: memoria afectiva|Voces de la comunidad)$/, null], // testimonios: componente oculto hasta tener testimonios reales
];
const faltan = [];
for (const f of fragmentos) {
  const n = norm(f).replace(/\.$/, '').replace(/^([^:]{2,40}): /, (m, et) => (todo.includes(norm(et)) ? '' : m));
  if (equivalencias.some(([re]) => re.test(f))) continue;
  if (!todo.includes(n)) faltan.push(f);
}

// --- Rótulos internos que NO pueden aparecer ---
const prohibidos = [/\bBloque\b/, /Subsecci[oó]n/i, /Subbloque/i, /Secci[oó]n \d/i, /Sugerencia/i, /Nota de dise[ñn]o/i, /\bPENDIENTE\b/, /\[Foto/i, /\[Bot[oó]n/i, /lorem/i, /Pesta[ñn]a \d/i, /Desplegable \d/i, /\[ ?\+ ?\]/, /errata/i];
const encontrados = [];
for (const [pag, t] of Object.entries(paginas)) {
  for (const p of prohibidos) { const m = t.match(p); if (m) encontrados.push(`${pag}: "${m[0]}"`); }
}

console.log(`Fragmentos de texto verificados: ${fragmentos.length}`);
console.log(faltan.length ? `\n✗ Faltan ${faltan.length} fragmentos:\n- ${faltan.join('\n- ')}` : '✓ Todos los textos de CONTENIDO-WEB.md están publicados.');
console.log(encontrados.length ? `\n✗ Rótulos prohibidos:\n- ${encontrados.join('\n- ')}` : '✓ Ningún rótulo interno publicado.');
process.exitCode = faltan.length || encontrados.length ? 1 : 0;
