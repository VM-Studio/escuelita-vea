# Pendientes y supuestos

Primera versión completa. Lo de abajo está abierto: cada punto tiene el supuesto con el que se avanzó.

## 1. Consultas para la escuela

| # | Tema | Supuesto aplicado hoy |
| --- | --- | --- |
| 1 | **Rap del Litio**: ¿7° grado (texto) o 6° (carpeta)? ¿Se puede publicar el video? | Se publica el texto tal cual ("7° grado"). El componente de video está listo y **apagado** (`PUBLICAR.videoRapDelLitio` en `src/config/sitio.ts`; pasos en `src/components/VideoLitio.astro`). |
| 2 | **Árboles amigos**: ¿1er grado (texto) o 3° (carpeta "PROYECTO ÁRBOLES 3°")? | Texto tal cual. La tarjeta usa una foto de naturaleza de RECREOS (manos con hojas); las fotos de la carpeta de Árboles no se usan hasta confirmar. |
| 3 | **"Hace 30 años"** la primaria (fundada en 1997; otro párrafo dice "pronta a celebrar sus 30 años"). | Texto tal cual: "hace 30 años". |
| 4 | **Año de V.E.A.** | 1992 (texto editado). |
| 5 | **Testimonios** de ex alumnos, familias y docentes. | Carrusel "Voces de la comunidad" construido y **oculto** (`PUBLICAR.testimonios` + `src/content/comunidad.ts`). |
| 6 | **Libro de hechizos (Macbeth) e historieta alfabética** (Inglés): ¿se suman como proyecto destacado? | No se publica el texto (no está en el editado). Una foto de esa carpeta ilustra el área de Inglés. |
| 7 | **Feria**: ¿"Feria de Libros y Palabras" o "Feria de Boas Novas"? | "Feria de Libros y Palabras" (texto editado). |
| 8 | **Logos**: faltan los tres por separado y en buena calidad (ideal SVG): Jardín, Primaria y VEA. | Provisorios: recortes del único PNG de la web anterior (250×112 px, se ven borrosos en pantallas nítidas). **Primaria no tiene logo**: se muestra un rótulo tipográfico provisorio ("Instituto La Escuelita · Primaria") que **no es un logo** y hay que reemplazar. El orden Jardín izquierda / Primaria derecha / VEA abajo está respetado. Favicon e íconos salen del dibujo de Jardín: rehacerlos con el SVG definitivo. |
| 9 | **Autorización de imagen** de todas las fotos y del video. | Se publican las fotos seleccionadas; **confirmar antes de salir a producción**. Revisar `_material/FOTOS-MANIFEST.md`. |
| 10 | **Noticias / Cronología / Admisión 2026** de la web anterior. | Fuera de esta etapa. Las URL viejas redirigen (`vercel.json`). La estructura admite sumar una sección "Novedades" más adelante. |
| 11 | **Redes sociales**: la web anterior tenía los íconos con enlaces vacíos (`#facebook`, `#instagram`, `#youtube`). | Íconos preparados y ocultos. Completar las URL en `src/config/sitio.ts` (`REDES`) y aparecen solos en el footer. |
| 12 | **Teléfono fijo** (+54 11 3968-9929) de la web anterior. | No se publica (`SITIO.telefonoFijo.visible = false`). |
| 13 | Los documentos de arquitectura nombran un área **"Tecnología"** en Primaria, pero no hay texto. | No se publica. Si se quiere, mandar el texto. |
| 14 | El documento 0 ubicaba la **carta de Marta Calvo** en "Nuestro equipo"; `CONTENIDO-WEB.md` la ubica en Historia. | Va en **La Escuelita → Reconocimiento** (según `CONTENIDO-WEB.md`). |
| 15 | "Primera aproximación" mencionaba **preguntas frecuentes** (salas / horarios / adaptación). | No hay textos de FAQ; no se inventan. |

## 2. Fotos que faltan o conviene sumar

- **Fachada o inauguración de la Primaria** (la línea de tiempo de 1997 usa una foto de recreo).
- Fotos para las áreas de Primaria que hoy no tienen: **Matemática, Cine y Foto, Educación Física, ESI** (los paneles se ven bien sin foto).
- Fotos de **Feria de libros**, **muestras didácticas** de Jardín y **actividades con familias** de Primaria.
- Fotos de la carpeta **"presentacion"** que mencionaba el brief: no existe en el Drive. La portada usa PATIO, TALLER DE 5, TALLER DE 4 y una de Primaria al aire libre.
- Detalle completo de qué foto va dónde: `_material/FOTOS-MANIFEST.md`.

## 3. Microcopy a aprobar (lo único escrito por nosotros)

**Navegación y botones**
- "Pedí una entrevista" (header, cierres, menú)
- "Conocé nuestra mirada" (hero Inicio) · "Conocé el proyecto pedagógico" · "Conocé nuestra comunidad"
- "Conocé el Jardín" · "Conocé la Primaria" (puertas y presentación) · "Conocé al equipo"
- "Abrir menú" / "Cerrar menú" · "Saltar al contenido" · "Volver arriba ↑"
- "Seguir leyendo" / "Cerrar" (Cómo aprendemos) · "Cerrar el detalle" (adaptación) · "Cerrar la carta"
- Título de sección sobre las puertas en Proyecto pedagógico: "Jardín y Primaria"
- "Nuestro equipo" (enlace al final de La Escuelita)
- "Ver el mapa" · "Abrir en Google Maps" · título "Cómo llegar"

**Cierres con llamado a entrevista**
- "Vení a conocer La Escuelita" / "Vení a conocer el Jardín" / "Vení a conocer la Primaria"
- "Escribinos y coordinamos una entrevista." (con variantes "en el Jardín." / "en el nivel Primario.")
- "O escribinos por WhatsApp" · "Ver datos de contacto"

**WhatsApp flotante**
- "¿Con quién querés hablar?" · "Escribinos por WhatsApp"
- Mensaje precargado: "Hola, quería hacer una consulta."

**Contacto / formulario**
- Volanta "Admisión" + título "Contacto"; "Escribinos por WhatsApp" en cada tarjeta
- "Pedí una entrevista" + bajada: "Contanos quién sos y qué nivel te interesa. Al enviar, se abre WhatsApp con tu mensaje listo para mandar al Jardín o a la Primaria."
- Campos: "Tu nombre" · "Nivel que te interesa" · "Edad o grado de tu hijo o hija" · "Mensaje (opcional)"
- Botones: "Enviar por WhatsApp" · "Prefiero escribir por mail"
- Errores: "Contanos tu nombre, así sabemos con quién hablamos." · "Elegí Jardín o Primaria para saber a quién escribirle."
- Confirmación: "¡Listo! Abrimos WhatsApp con tu mensaje. Si no se abrió, tocá acá."
- Mensaje que se arma: "Hola, mi nombre es [nombre]. Me gustaría pedir una entrevista para el Jardín / nivel Primario. Edad o grado: […]. [mensaje] — Mensaje enviado desde la web de La Escuelita."

**Otros**
- Volantas: "Jardín · Nivel Inicial", "Primaria · Nivel Primario", "Historia e identidad", "La Escuelita"
- Pie de la foto histórica principal: "Archivo de La Escuelita"
- Fecha decorativa "22 · 08 · 2024" (tomada del texto del reconocimiento)
- 404: "Por acá no hay nada… todavía" · "Esta página no existe o cambió de lugar. Te invitamos a volver al inicio o a escribirnos." · "Volver al inicio" · "Escribinos"
- Textos alternativos de todas las fotos: en `src/data/fotos.mjs` (campo `alt`) y en el manifest.
- Títulos y descripciones para buscadores (SEO): en el encabezado de cada página (`src/pages/*.astro`).
- Lectores de pantalla: "(se abre en una pestaña nueva)", "Ampliar foto: …", "Anterior", "Siguiente".

## 4. Decisiones tomadas (para validar)

- **Frases en cursiva:** Fraunces cursiva (misma familia que los títulos, más cálida). Instrument Serif se probó y se puede ver en `/guia/`.
- **Rojo de marca:** `#D23334`, tomado con cuentagotas del logo VEA (cumple contraste AA). El rojo del dibujo "la escuelita" (`#E30613`) se usa solo en trazos.
- **Loader del sol:** solo en pantallas de 1024 px o más y en la primera visita de la sesión. En celulares se omite para que la portada aparezca de inmediato (rendimiento).
- **Titular del hero:** se revela línea por línea en desktop; en celulares aparece quieto (es el elemento principal de carga).
- **Formulario:** sin servidor; arma el mensaje y abre WhatsApp del nivel elegido, con alternativa por mail. Para conectar un servicio de formularios, completar `ENDPOINT_FORMULARIO` en `src/pages/contacto.astro`.
- **Mapa de salidas:** el texto de cada área se publica completo, con los lugares marcados como "chips" (los que tienen web, enlazados).
- **Frases que abren un texto** (adaptación, comunidad, primaria) no se repiten como interludio justo al lado: se usó otra frase de la misma página o se destacó la oración dentro del texto.

## 5. Técnica

- Lighthouse en mobile (Inicio, Jardín, Primaria): **Performance 93–94, Accesibilidad 100, Buenas prácticas 100, SEO 100**. En desktop: Performance 96–97 y el resto en 100. El LCP en mobile simulado da 3,0–3,2 s (objetivo: 2,5 s): el elemento es el titular, que espera la tipografía y la foto del hero en una conexión 4G lenta simulada. Se puede bajar a costa de `font-display: optional` para Fraunces o de achicar más la foto del hero: decidir.
- No hay push ni deploy: queda listo para Vercel (estático).
- El sitio no tiene todavía el dominio verificado: `site` en `astro.config.mjs` apunta a `https://laescuelitavea.org.ar`.

## 6. Rediseño de escala y lenguaje gráfico (segunda pasada)

- Todo el sitio más compacto: tipografías, espacios entre secciones, tarjetas, botones (más finos), header y fotos.
- Recursos de "escuela de arte" (para validar):
  - Titulares editoriales: una parte del título en cursiva y color (el texto no cambia; es solo tipografía).
  - Sello circular giratorio con el texto "Primer Jardín Argentino de Educación por el Arte · 1959" (portada, historia y footer).
  - Manchas de pintura orgánicas detrás de algunas fotos y fotos con recorte en arco.
  - "Paleta" de pinceladas de color como separador (presentación, Jardín, Primaria, Equipo, Contacto, footer).
  - Marquesina de materiales sobre fondo tinta con palabras de colores.
