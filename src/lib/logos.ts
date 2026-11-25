// ¿Ya está el logo propio de la Primaria? (public/logos/primaria-sinfondo.png). Se decide al generar el sitio.
import fs from 'node:fs';
import path from 'node:path';
export const hayLogoPrimaria = () => fs.existsSync(path.join(process.cwd(), 'public/logos/primaria-sinfondo.png'));
