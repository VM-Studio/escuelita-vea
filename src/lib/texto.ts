// Mini-marcado para los archivos de contenido (los textos se escriben tal cual):
//   **negrita**   *cursiva*   [texto](/ruta)   [texto](https://externo)
// Saltos de línea simples dentro de un string se respetan como <br>.
// Un string con párrafos separados por línea en blanco se convierte en varios <p>.

const ESC: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const escapar = (s: string) => s.replace(/[&<>"]/g, (c) => ESC[c]);

export function enLinea(s: string): string {
  let h = escapar(s);
  h = h.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t, url) => {
    const externo = /^https?:\/\//.test(url);
    return externo
      ? `<a href="${url}" target="_blank" rel="noopener">${t}<span class="sr-only"> (se abre en una pestaña nueva)</span></a>`
      : `<a href="${url}">${t}</a>`;
  });
  h = h.replace(/\{\{([^}]+)\}\}/g, '<span class="chip">$1</span>');
  h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>');
  h = h.replace(/\n/g, '<br>');
  return h;
}

export function parrafos(s: string | string[]): string {
  const lista = Array.isArray(s) ? s : s.split(/\n\s*\n/);
  return lista.map((p) => `<p>${enLinea(p.trim())}</p>`).join('');
}

/** Separa "**Etiqueta:** cuerpo" en { etiqueta, cuerpo } para tarjetas y listas. */
export function etiquetaYCuerpo(s: string): { etiqueta: string; cuerpo: string } {
  const m = s.match(/^\*\*(.+?):\*\*\s*([\s\S]*)$/);
  return m ? { etiqueta: m[1], cuerpo: m[2] } : { etiqueta: '', cuerpo: s };
}

export function slug(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Titular editorial: el texto NO cambia, solo se destaca una parte en cursiva (recurso tipográfico).
 * Si hay ":" se destaca lo que sigue; si no, la última palabra.
 */
export function acento(titulo: string): string {
  const t = escapar(titulo);
  const i = t.indexOf(':');
  if (i > -1 && i < t.length - 2) return `${t.slice(0, i + 1)} <em class="acento">${t.slice(i + 1).trim()}</em>`;
  const m = t.match(/^(.*\s)(\S+)$/);
  return m ? `${m[1]}<em class="acento">${m[2]}</em>` : t;
}
