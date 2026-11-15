# La Escuelita · sitio web

Sitio institucional de La Escuelita (V.E.A.): Jardín y Primaria de Educación por el Arte.
Astro estático + CSS propio + GSAP. Pensado para Vercel.

## Correr el sitio

```bash
npm install
npm run dev                         # http://localhost:4321 (desarrollo)
npm run build && npm run preview    # versión final, como se va a publicar
```

Requiere Node 22 o más nuevo.

## Cambiar un texto

Los textos están separados del diseño, en `src/content/` (un archivo por página: `inicio.ts`,
`jardin.ts`, `primaria.ts`, etc.). Buscá la frase, cambiala y guardá. Se puede usar `**negrita**`,
`*cursiva*` y `[enlace](/ruta)`.

Teléfonos, mails, dirección, redes y años están en un solo lugar: `src/config/sitio.ts`.
Para mostrar las redes sociales, completá sus URL ahí (hoy están vacías y ocultas).

Después de cambiar textos: `npm run build && npm run qa:textos` compara todo contra `CONTENIDO-WEB.md`.

## Sumar o cambiar una foto

1. Poné el original en `_material/fotos/jardin/...` o `_material/fotos/primaria/...` (no se sube al repositorio).
2. Agregá o editá su ficha en `src/data/fotos.mjs` (qué se ve, texto alternativo sin nombres, dónde se usa).
3. `npm run fotos` → genera la versión optimizada, el desenfoque de carga y actualiza `_material/FOTOS-MANIFEST.md`.
4. Usala en la página con `<Foto id="mi-foto" ratio="4/3" />` (o poné su `id` en el archivo de contenido).

## Logos

Hoy son provisorios (recortes del PNG de la web anterior). Cuando lleguen los definitivos: copiarlos en
`public/logos/` y actualizar las rutas en `src/components/Logo.astro`.

## Publicar

En Vercel: importar el repositorio, framework **Astro**, comando `npm run build`, carpeta `dist`.
Las redirecciones de la web anterior están en `vercel.json`.

## Control de calidad

```bash
npm run qa:capturas                 # capturas de todas las páginas en 8 anchos (con el sitio corriendo)
npm run qa:textos                   # textos vs CONTENIDO-WEB.md y rótulos prohibidos
```

Guía visual para revisar con la escuela: `/guia/` (no indexada). Modo liviano para probar: `?liviano`.

Más detalles: `CLAUDE.md` (reglas), `PENDIENTES.md` (lo que falta), `PLAN.md`.
