# CLAUDE.md — Reglas de oro del sitio de La Escuelita (V.E.A.)

Sitio institucional de La Escuelita: Primer Jardín Argentino de Educación por el Arte (1959) e
Instituto La Escuelita, Escuela Primaria de Educación a través del Arte (1997). Tono: emotivo,
cálido, artesanal, humano. Nada corporativo, nada de plantilla de colegio, nada infantilizado.

## Textos
- Los textos institucionales salen de `CONTENIDO-WEB.md` y viven en `src/content/*.ts`. Se publican
  **tal cual**: no reescribir, no resumir, no "mejorar", no inventar cifras, premios, nombres ni testimonios.
- Nunca publicar rótulos internos: "Bloque", "Sección", "Subsección", "Subbloque", numeración de
  apartados, "[ + ]", "Pestaña 1", "Desplegable 1", "Sugerencia", "Nota de diseño", "Objetivo",
  textos entre corchetes. Sí van años, edades, horarios, grados y "Taller de 2/3/4/5".
- Nada del documento crudo (Drive) se publica.
- Solo se escribe microcopy de interfaz (botones, etiquetas, alt, mensajes del formulario, 404), en
  rioplatense con voseo. Todo microcopy nuevo va a `PENDIENTES.md` para aprobación.
- Respetar el lenguaje de la escuela (niños y niñas, chicos y chicas, infancias). No unificar.
- Frases: solo las de la lista de `CONTENIDO-WEB.md`, en la página de la que provienen, en cursiva,
  como interludio foto + frase. Las de Marta Calvo siempre con su firma. No repetir una frase como
  interludio, ni ponerla pegada al párrafo que la contiene.
- Verificar con `npm run build && npm run qa:textos`.

## Fotos
- Registro único: `src/data/fotos.mjs` → `npm run fotos` genera masters, LQIP y `_material/FOTOS-MANIFEST.md`.
- Mirar cada foto antes de usarla. Nunca por nombre de archivo ni al azar.
- Jardín solo en contextos de Jardín; Primaria solo en Primaria. En Inicio, La Escuelita, Proyecto
  pedagógico y Comunidad pueden convivir con criterio. Ojo: `PRIMARIA-2DO-TEHUELCHES` está en la
  carpeta de Jardín pero es de Primaria.
- Nunca nombres de chicos en alt, pies ni archivos. Prohibido stock o IA para fotos de chicos.
- Los originales (`_material/fotos/`) nunca se publican ni se versionan.
- Proyecto Árboles: no usar fotos de `PROYECTO ÁRBOLES 3°` hasta confirmar el grado.
- Video del Rap del Litio: componente listo, apagado (`PUBLICAR.videoRapDelLitio`).

## Logos
- Presentación del Inicio: **Jardín a la izquierda, Primaria a la derecha, VEA abajo**. No cambiar.
- No redibujar, recolorear ni deformar logos. Hoy son provisorios (`public/logos/`, `src/components/Logo.astro`).

## Técnica
- Astro estático, CSS propio con tokens (`src/styles/global.css`), sin Tailwind. GSAP + Lenis.
- Soporte: Chrome/Edge 80+, Firefox 78+, Safari/iOS 13+. CSS moderno solo con respaldo:
  nada de `:has()`, container queries, anidado nativo, `inset`, `aspect-ratio` sin alternativa,
  `gap` en flex sin respaldo, `dvh` sin `vh` antes, `backdrop-filter` sin color sólido.
- El contenido primero: los estados ocultos de animación solo existen con `html.anim-ready`.
  Sin JS todo se lee. Desplegables con `<details>` nativo; pestañas sin JS = paneles apilados.
- Movimiento: lento, suave, solo transform/opacity (+clip-path). `prefers-reduced-motion` y "modo
  liviano" (`?liviano` para probarlo) sin Lenis, parallax ni SplitText.
- Componentes chicos en `src/components/`; datos repetidos en `src/config/sitio.ts`.
- No hacer push ni deploy sin pedido explícito. Commits por fase.
