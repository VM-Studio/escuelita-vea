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
| 8 | **Logos** | ✅ Recibidos los dos logos oficiales (La Escuelita y V.E.A./Instituto La Escuelita), en alta calidad. Versiones sin fondo (navbar, hero, secciones claras, loader) y con fondo blanco (footer oscuro) en `public/logos/`; originales en `_material/logos/originales/`. Como la escuela tiene dos logos, en la presentación del Inicio va La Escuelita (Jardín, izquierda) e Instituto La Escuelita · V.E.A. (Primaria, derecha); no se repite el de V.E.A. abajo. Pendiente: rehacer favicon e íconos con el logo nuevo si se quiere. |
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

## 7. Componentes de React Bits (tercera pasada)

Portados de React Bits (https://reactbits.dev, licencia MIT + Commons Clause, con atribución en
`THIRD-PARTY-NOTICES.md`), reescritos sin React para mantener el sitio estático y liviano:

- **Circular Carousel** (cilindro 3D con CSS) en "El juego y el arte son su lenguaje natural." (Inicio): 12 fotos de juego y taller, gira solo, se arrastra, se maneja con flechas del teclado. Sin JS o en modo liviano: tira de 6 fotos.
- **Image Trail** en el hero del Inicio: al mover el mouse aparece un rastro de fotos del taller (solo desktop, no con movimiento reducido).
- **Curved Loop**: los materiales del taller corren sobre una curva, se pueden arrastrar y aceleran con el scroll (Inicio y Jardín). Reemplaza la marquesina recta.
- **Bounce Cards**: fotos de la comunidad que entran con rebote y se abren al pasar el mouse (Inicio).
- **Tilted Card** (inclinación 3D con brillo): puertas Jardín/Primaria, tarjetas "¿Qué nos diferencia?" y proyectos de Primaria (solo desktop).

Microcopy nuevo: "Arrastrá para girar" (debajo del carrusel circular).

## 8. Cuarta pasada: hero nuevo, logos oficiales y carrusel

- **Hero del Inicio rediseñado** (inspirado en patrones de 21st.dev "Centered Hero with Image Fan" y "Editorial Collage", más React Bits): fondo claro con manchas de color suaves, titular en tinta con "sentir, piensa." en cursiva roja (se lee siempre), botones "Pedí una entrevista" y "Conocé nuestra mirada", accesos a Jardín (1959) y Primaria (1997) con sus logos, y collage de fotos en abanico con sello giratorio. El rastro de fotos al mover el mouse sigue activo.
- El header ya no es transparente sobre fotos: siempre papel, con los dos logos sin fondo.
- **Carrusel circular**: gira siempre (no se frena con el mouse) y más rápido.
- Microcopy nuevo: etiqueta del hero "Primer Jardín Argentino de Educación por el Arte · 1959" (texto institucional) y los accesos "Jardín 1959 / Primaria 1997".

## 9. Quinta pasada

- **Footer**: fondo arena claro, logos sin fondo, solo 3 columnas (Jardín, Primaria, Dirección), más compacto.
- **Línea de tiempo (Inicio)**: el "67" rojo es el comienzo del título ("67 años en la educación por el arte"), sin repetirse. Nuevo botón "Conocé nuestra historia".
- **Carrusel circular**: ya no bloquea el scroll de la página (solo responde a gestos horizontales del trackpad y al arrastre).
- **Nueva página `/la-escuelita/historia/`**: cronología completa 1959–2020 con el texto **tal cual** la web anterior (54 entradas), agrupada por décadas, con fotos de archivo, hitos destacados (1959, 1990, 1992, 1997, 2012, 2019), línea que se dibuja con el scroll, contadores, años en curva y rastro de fotos históricas en la portada. Enlazada desde el menú (La Escuelita), el Inicio y La Escuelita. Las fotos de las décadas son de ambiente (archivo y escuela), no ilustran un hecho puntual: si la escuela tiene fotos de exposiciones, se pueden sumar.
- **Hero nuevo**: un arco/ventana al patio con fotos que se suceden, trazo de crayón, sol y las palabras "hacer · sentir · pensar" (de la frase de Marta Calvo) flotando alrededor; a la izquierda el titular, botones y los datos 1959 / 1997 / 67. El collage en abanico pasó a la Bienvenida y el rastro de fotos a la página de historia.
- **Fotos del documento de la escuela**: en Ciencias Sociales ahora están Inmigrantes, Viaje a Rosario y Tehuelches, como pidió la escuela. Sin cambios en el resto (ya coincidían). Siguen sin fotos en el Drive: feriantes de Boas Novas, Noche de los Museos, pandemia, jardines del IVA y Talleres integrados en el MNBA (el documento dice "hay fotos": pedirlas).
- Microcopy nuevo a aprobar: "Conocé nuestra historia", "Recorrer la cronología", "Historia e identidad" (botón), "Década del 60", palabras "hacer / sentir / pensar" del hero, "Nuestra historia (cronología)" en el menú.

## 11. Rediseño creativo (rama `rediseno-creativo`)

Referencias: Awwwards (Hatching Dragons, Fine Acts, London Film School, Department of Emotions) y landonorris.com
(ideas adaptadas, nada copiado). Se trabaja en una rama de git: para volver a la versión anterior, `git checkout main`.

- **Más fotos:** se sumaron 35 fotos del Drive que no se usaban (obras de 1°, 2°, 3° y 5°, y escenas del taller del Jardín). Ver manifest.
- **Constelación de fotos** con líneas topográficas de crayón (Inicio: bienvenida; Jardín: "El gesto espontáneo y sus materias").
- **Galería de obras** sobre fondo oscuro con rótulos de grado (Inicio y Primaria).
- **Puertas Jardín / Primaria** que se expanden al pasar el mouse.
- **"Priorizamos"**: lista con foto que cambia en "¿Qué nos diferencia?" (Jardín).
- Microcopy nuevo a aprobar: "Obras del taller", "Obras de la Primaria", "Producciones de los chicos y las chicas en los talleres de La Escuelita.", "Producciones de los chicos y las chicas en los proyectos de cada grado.", "Conocé las áreas de la Primaria", rótulos de obras ("Animales · 1° grado", "La cordillera · 5° grado", etc.).

## 12. Pedidos de la dueña (16/11/2026)

- **Fondos apastelados / color piedra:** se aclararon los fondos y se pasaron a piedra las secciones que eran oscuras (obras, hitos culturales, talleres extracurriculares, hitos de la cronología).
- **Letra manuscrita de niño:** la palabra destacada de los títulos usa Reenie Beanie (letra de marcador infantil). Si se quiere en más o menos lugares, es un solo estilo (`.acento`).
- **Dibujitos de los chicos en los costados:** se recortaron los 12 dibujos de la lámina en crayón (`public/dibujos/`) y aparecen chiquitos en los laterales, moviéndose "cuadro a cuadro" como el posteo animado del Instagram. Se pueden sumar más dibujos si la escuela manda otras láminas.
- **Efecto bedes.com.ar:** al pasar de sección, la foto queda quieta debajo y la página se desliza por encima (todas las frases con foto + nuevas bandas de foto en Inicio, Jardín y Primaria). Las fotos se ponen en blanco y negro al pasar el mouse.
- **"Conocé nuestro Instagram":** fila de 4 reels de @la.escuelita.vea que se reproducen sin sonido (se activa al tocar) y botón "Conocenos". Reels usados: Bienvenida a la primavera (Jardín), Taller de 2, 2do grado · Los Pueblos, Los recreos en nuestro fondo. Recortados a 20 s y comprimidos (`public/reels/`). **Confirmar** que se pueden publicar en la web y cuáles prefieren; se cambian reemplazando 4 archivos.
- Microcopy nuevo: "Conocé nuestro Instagram", "Conocenos", títulos de los reels, rótulos de las bandas de foto ("El patio de La Escuelita", "El taller, todos los días", "El patio · naturaleza y encuentro", "Recreo en el fondo de la escuela").

## 13. Inicio rediseñado (19/11/2026)

- **Hero principal nuevo:** fotos a pantalla completa que pasan cada 4 segundos, con "La Escuelita" y "67 años en la Educación por el Arte" encima (textos tal cual del documento). Fotos: Leyenda bajo los árboles, ronda de música, quillangos, primer día de Primaria y taller de construcción. **Confirmar** que les gustan para la portada.
- **Debajo, "El niño es cuerpo que siente…"** con la foto en forma de "pill" que sale del borde derecho. Sin dibujitos en esa sección.
- **Se sacó la cinta de materiales** del Inicio (los materiales siguen en la página del Jardín).
- **Obras del taller:** tarjetas con foto arriba y panel blanco con el nombre del taller y el grado.
- **Cierre "Vení a conocer La Escuelita":** foto y título más centrados, con dos dibujitos a los costados (solo en el Inicio).
- Microcopy nuevo: aria-label "Bajar" en la flecha del hero principal.
- **Bienvenida ("La escuela es un espacio…"):** fotos a la izquierda que pasan solas cada 4,5 s (con flechas y contador), texto al costado. El fondo ondulado pasó a "El juego y el arte son su lenguaje natural".
