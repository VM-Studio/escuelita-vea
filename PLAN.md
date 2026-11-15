# Plan — Nueva web de La Escuelita (V.E.A.)

**Concepto:** "el taller". Papel, tinta china, crayón, arena y hojas. Estructura editorial y serena;
la emoción la dan las fotos reales, las frases en cursiva y el ritmo (contenido → respiro → interludio).

**Stack:** Astro 7 estático · CSS propio con tokens (sin Tailwind) · GSAP 3.15 (ScrollTrigger, SplitText,
DrawSVG) · Lenis (solo desktop con puntero fino) · Embla y PhotoSwipe (carga diferida) · fuentes
autoalojadas (Fraunces + Figtree) · `astro:assets` con AVIF/WebP/JPEG · sitemap · Vercel.

**Fases**
1. Lectura y plan: textos (`CONTENIDO-WEB.md`, cotejado con los documentos 1–7 del Drive: coinciden),
   fotos descargadas del Drive y miradas una por una → `src/data/fotos.mjs` → `_material/FOTOS-MANIFEST.md`.
2. Base: tokens, tipografías, layout, header, menú móvil, footer, trazos SVG, `/guia/`.
3. Núcleo de animación: loader (sol), Lenis, revelados, trazos, contadores, transiciones nativas, modo liviano.
4. Inicio completo.
5. Proyecto pedagógico, Jardín, Primaria, La Escuelita, Equipo, Comunidad, Contacto, 404.
6. Pasada de fotos (recortes y focos) — 7. Control de calidad — 8. Entrega.

**Reglas que guían todo:** ver `CLAUDE.md`. Lo abierto, en `PENDIENTES.md`.
