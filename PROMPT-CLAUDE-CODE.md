# PROMPT PARA CLAUDE CODE — Nueva web de La Escuelita (V.E.A.)

Vas a construir desde cero el nuevo sitio institucional de **La Escuelita**, una escuela de
Educación por el Arte de la Ciudad de Buenos Aires (Jardín + Primaria). La carpeta del proyecto
está abierta y **vacía**, salvo el material que te dejo (ver punto 2). Leé este documento entero
antes de escribir una línea de código.

Trabajá como un equipo senior completo: dirección de arte, diseño de interacción, front-end,
performance y accesibilidad. El objetivo es un sitio **súper profesional, emotivo y que llame la
atención**, a la altura de un estudio de diseño premiado, y que al mismo tiempo cargue rápido y se
vea bien en cualquier pantalla, sistema operativo y computadora, incluidas las viejas.

---

## 1. El cliente y lo que hay que lograr

**La Escuelita** fue fundada por la profesora Marta Calvo en 1959. Es el *Primer Jardín Argentino
de Educación por el Arte* (1959) y, desde 1997, también el *Instituto La Escuelita, Escuela Primaria
de Educación a través del Arte*. Detrás está la asociación civil sin fines de lucro **V.E.A.**
(Visión Educacional Antropológica). Queda en Jorge Newbery 2950, CABA.

- Web actual, la que reemplazamos: https://laescuelitavea.org.ar/
- Web aspiracional para la escuela: https://www.aequalis.edu.ar/

**Para quién es el sitio** (en este orden):

1. **Familias nuevas.** Un adulto que entra por primera vez tiene que entender en menos de un
   minuto el alma de la escuela, el valor de la Educación por el Arte y el rigor del modelo, y
   terminar pidiendo una entrevista.
2. **La comunidad actual.** El sitio tiene que reflejar una escuela viva: talleres, salidas,
   adaptación artesanal, vida en comunidad.

**El tono, en palabras de la dueña:** *"Esta es una escuela muy emocional, muy emotiva, no tan
racional, no tan tradicional."* El sitio tiene que sentirse así: cálido, sensible, artesanal,
humano. Nada corporativo, nada de plantilla de colegio, nada infantilizado ni estridente.

**Idea rectora de la arquitectura (de la escuela):** el *Proyecto Pedagógico* es el corazón del
sitio; *Jardín* y *Primaria* son dos expresiones concretas de esa misma mirada. Primero se entiende
la filosofía, después cómo toma forma en cada etapa.

**Modo de trabajo acordado con la dueña:** *"Arranquemos, después vamos modificando."* Quiero una
primera versión completa y de mucha calidad, hecha de forma que después sea fácil mover, cambiar y
ajustar bloques.

---

## 2. Material de referencia

### 2.1 En la carpeta del proyecto

- `CONTENIDO-WEB.md` → **fuente de verdad de todos los textos**, ya limpios y ordenados por página.
  Incluye notas de diseño de la escuela, la lista de frases para destacar y las consultas abiertas.
- `_material/logos/` → logos de Jardín, Primaria y VEA (si la carpeta está vacía, ver punto 3.3).
- `_material/fotos/presentacion/` → fotos que mandó la dueña específicamente para la portada.
- `_material/fotos/jardin/` y `_material/fotos/primaria/` → descarga de las dos carpetas de fotos
  de Drive, con sus subcarpetas tal cual.

Si alguna de estas carpetas no existe o está vacía: **no frenes y no inventes**. Usá placeholders
neutros bien rotulados (punto 3.2) y dejalo anotado en `PENDIENTES.md`.

### 2.2 Originales online (tenés acceso; miralos y analizalos todo lo que quieras)

- **Drive con los textos editados** (documentos 0 a 7; el documento 0 y "Primera aproximación"
  explican la arquitectura):
  https://drive.google.com/drive/folders/1WsHRCI6mPa3XCTAs2jZ_CQDP8o2Ok7Ap?usp=drive_link
- **Documento crudo + pestaña "Link a las imágenes"**:
  https://docs.google.com/document/d/1_JRxb0QFFoLwIOijVyE9wWLL-HI6TgOtG5BSQRBlboc/edit?tab=t.0
- **Fotos de Jardín**: https://drive.google.com/drive/folders/1JBnTtvi6QCdr6u0_LV3WOM7v_CwMDMn0
- **Fotos de Primaria**: https://drive.google.com/drive/folders/1r2YeCIOlR-kLm5RiWpQrmqUeYX8vsE1J
- **Web actual**: https://laescuelitavea.org.ar/ (es una SPA: hay que renderizarla con navegador
  para leerla; tiene logo, redes sociales y enlaces de WhatsApp).
- **Referencia aspiracional**: https://www.aequalis.edu.ar/

### 2.3 Prioridad entre fuentes (importante)

1. Las reglas de este prompt.
2. `CONTENIDO-WEB.md` y los documentos **1 a 7** del primer Drive (son lo mismo; ante una
   diferencia, avisame).
3. Los documentos de arquitectura (0 y "Primera aproximación") para entender la estructura.
4. El documento crudo **solo por su pestaña de imágenes y por las pistas de qué foto va dónde**.
   Indicación textual de la dueña: *"De ese segundo drive, todo lo que son textos no los consideres
   porque esos son los crudos que yo recibí y que estuvimos editando en el primer drive."*
   → **Ningún texto del documento crudo se publica.**

---

## 3. Reglas de oro (no negociables)

### 3.1 Textos

- Los textos institucionales se publican **tal cual** están en `CONTENIDO-WEB.md`. No los
  reescribas, no los resumas, no los "mejores", no inventes contenido institucional, no agregues
  datos (cifras, premios, nombres, testimonios) que no estén ahí.
- Indicación textual de la dueña: *"los números no van, donde dice la palabra sección eso no lo
  tenés que poner, donde dice subbloque no lo tenés que poner."* Es decir: en la web **nunca**
  aparecen "Bloque 1", "Sección", "Subsección", "Subbloque", la numeración de apartados
  ("1. La concepción del niño", "6. Nuestra comunidad"), "[ + ]", "Pestaña 1", "Desplegable 1",
  "Sugerencia", "Nota de diseño", "Objetivo", ni textos entre corchetes tipo "[Foto…]" o
  "[Botón…]". Sí van los números que son contenido: años, edades, horarios, grados y los nombres
  "Taller de 2 / 3 / 4 / 5".
- Lo que dice *"el tema es ver cómo todo ese contenido lo vas acomodando de una manera
  interesante"* es tu trabajo: el texto no cambia, **cambia cómo se presenta** (jerarquía,
  desplegables, pestañas, tarjetas, interludios de foto y frase).
- El único texto que podés escribir vos es **microcopy de interfaz** (botones, etiquetas, alt de
  imágenes, mensajes del formulario, 404). Español rioplatense con voseo, cálido y simple
  ("Conocé", "Escribinos", "Pedí una entrevista"). Listá todo ese microcopy en `PENDIENTES.md`
  para que la escuela lo apruebe.
- Respetá el lenguaje de la escuela (niños y niñas, chicos y chicas, infancias). No lo unifiques.

### 3.2 Fotos (acá hay que ser muy cuidadoso)

Indicación textual de la dueña: *"dos grupos de fotos, una de jardín, otra de primaria, que no
quiero que pongas aleatoriamente cualquiera en cualquier lado porque hay que ser muy cuidadoso,
pero sí de ahí podés sacar las más lindas, las que se vean más al aire libre o las que te parezca
que son más significativas para ese primer momento de la presentación."*

- **Mirá cada foto antes de usarla** (abrila, describila). Ninguna foto se ubica por nombre de
  archivo ni al azar.
- Fotos de Jardín → solo en contextos de Jardín. Fotos de Primaria → solo en Primaria. En Inicio,
  La Escuelita, Proyecto Pedagógico y Comunidad pueden convivir, siempre con criterio.
- Cada subcarpeta indica el tema. Una foto de la carpeta `PATIO` va en "El patio"; una de
  `INMIGRANTES 3°` va en el proyecto Inmigrantes; etc. Mapa completo en el punto 6.
- **Portada / presentación:** elegí las más lindas, luminosas y al aire libre, que muestren *el
  espacio físico, la naturaleza y chicos haciendo y jugando*. Primero las de
  `_material/fotos/presentacion/`; después `PATIO` (Jardín) y `RECREOS` (Primaria).
- Preferí planos donde se vea el **hacer** (manos, materiales, juego, ronda, árboles) antes que
  retratos en primerísimo plano. Descartá fotos borrosas, mal iluminadas, con carteles o
  etiquetas donde se lea el nombre de un chico, o con cualquier situación poco cuidada.
- Nunca pongas nombres de chicos en `alt`, pies de foto ni nombres de archivo.
- **Prohibido** usar fotos de stock de niños o imágenes generadas por IA. Si falta una foto, va un
  placeholder neutro (bloque de color con textura de papel y un rótulo interno tipo
  `FOTO PENDIENTE · patio`), visible solo en desarrollo.
- Generá `_material/FOTOS-MANIFEST.md` con una tabla: archivo original · nivel · carpeta ·
  qué se ve · dónde la usás · por qué · observaciones. Es lo que la dueña va a revisar y aprobar.
- Los originales pesan mucho (hay PNG de 6 a 8 MB). **Nunca** se publican originales: todo pasa
  por el pipeline de imágenes (punto 9).
- Hay un video (`RAP DEL LITIO 6°`, mp4). Dejá el componente de video listo pero **no lo
  publiques** hasta que se confirme la autorización (va a `PENDIENTES.md`).

### 3.3 Logos

Indicación textual de la dueña: *"en la presentación LOGOS de Jardín a la izquierda y de primaria
a la derecha, abajo el logo de VEA."* Esto se respeta al pie de la letra en la presentación del
Inicio.

- Usá los archivos de `_material/logos/`. No los redibujes, no los recolorees, no los deformes.
- Si no están, la web actual tiene un único PNG chico con el dibujo rojo de "la escuelita" y la
  palabra VEA: sirve **solo como placeholder temporal**. Anotá en `PENDIENTES.md` que faltan los
  tres logos por separado y en buena calidad (ideal SVG).
- El rojo del logo es el color de marca: tomalo con cuentagotas del archivo real.

### 3.4 Frases

Indicación textual de la dueña: *"fuimos poniendo algunas frasecitas sueltas que hablan de la
manera que ellas tienen de ver la educación. Esas frasecitas, para que le busques alguna cursiva,
pueden ir abajo de una foto, como para cortar todo el contenido tan pesado y apelar un poco más al
tema de lo emocional."*

- Las frases están listadas al final de `CONTENIDO-WEB.md`. Son el recurso emotivo principal del
  sitio: **interludios de foto + frase en cursiva** entre bloques de contenido denso.
- Cada frase va en la página de la que proviene. Las de Marta Calvo siempre llevan su firma.
- No inventes frases. No uses la misma frase dos veces en el sitio (salvo la del hero).

---

## 4. Stack técnico

Elegí siempre la **última versión estable** de cada cosa (verificá en la documentación oficial
antes de instalar; no asumas APIs de memoria).

- **Astro**, salida 100 % estática, sin framework de UI. HTML real en cada página (clave para SEO,
  velocidad y máquinas viejas). JavaScript solo como mejora progresiva.
- **CSS propio** con design tokens en custom properties (podés usar SCSS si te ordena). **No uses
  Tailwind v4**: exige navegadores muy nuevos y acá hay que soportar equipos viejos.
- **GSAP** con ScrollTrigger, SplitText y DrawSVG (hoy toda la suite es gratuita, también para uso
  comercial; se instala del paquete npm `gsap`).
- **Lenis** para el scroll suave, sincronizado con ScrollTrigger.
- **Embla Carousel** (carruseles) y **PhotoSwipe** (lightbox de galerías), o equivalentes igual de
  livianos y accesibles.
- **Fuentes autoalojadas** (Fontsource), `font-display: swap`, solo los pesos que se usan.
- Imágenes con el pipeline de `astro:assets` (sharp).
- `@astrojs/sitemap`. Deploy pensado para **Vercel** (estático). `git init` y commits por fase.
  **No hagas push ni deploy sin que te lo pida.**

Dónde mirar para subir el nivel de las animaciones (inspiración y documentación):
gsap.com (docs y demos de ScrollTrigger, SplitText, DrawSVG, Flip), lenis.dev, Codrops
(tympanus.net/codrops), LottieFiles (por si conviene una micro-animación vectorial puntual),
motion.dev y Awwwards (sitios de escuelas, museos y estudios editoriales). Inspirate; no copies.

---

## 5. Arquitectura del sitio

### 5.1 Mapa

| Ruta | Página | Contenido |
| --- | --- | --- |
| `/` | Inicio | Portada, presentación con logos, bienvenida, línea de tiempo, ejes, accesos a Jardín y Primaria, comunidad, llamado a entrevista |
| `/la-escuelita/` | La Escuelita | Historia, reconocimiento y carta de Marta Calvo, hitos culturales, V.E.A., identidad, ¿por qué educar a través del arte? |
| `/la-escuelita/equipo/` | Nuestro equipo | Organigrama, compromiso docente, perfiles (Coordinación / Docentes / Equipo psicológico) |
| `/proyecto-pedagogico/` | Proyecto pedagógico | Introducción y los cuatro ejes. **Corazón del sitio.** |
| `/jardin/` | Jardín | Portada, diferenciales, propuesta, salas (2 a 5), lenguajes, patio, adaptación, horarios |
| `/primaria/` | Primaria | Portada, cómo aprendemos, áreas, proyectos destacados, preparación para la secundaria |
| `/comunidad/` | Nuestra comunidad | Talleres y muestras, salidas y celebraciones, familias, voces (oculto), talleres extracurriculares |
| `/contacto/` | Admisión y contacto | Datos de Jardín y Primaria, pedido de entrevista, mapa |
| `/404` | No encontrada | Cálida, con salida a Inicio y Contacto |

Redirecciones desde la web vieja (en `vercel.json`): `/institucional/admision` → `/contacto/`,
`/institucional/cronologia` y `/jardin/origenes` → `/la-escuelita/`, `/institucional/noticias` →
`/comunidad/`.

### 5.2 Navegación

- Orden del menú (el que definió la escuela): **La Escuelita · Proyecto Pedagógico · Jardín ·
  Primaria · Nuestra Comunidad · Contacto / Admisión**. "La Escuelita" despliega *Historia e
  identidad* y *Nuestro equipo*. El último ítem es un botón destacado: **Pedí una entrevista**.
- Header fijo y liviano: transparente sobre el hero, se vuelve papel sólido al scrollear, se
  esconde al bajar y reaparece al subir. Logo siempre visible y con enlace a Inicio.
- Mobile: menú a pantalla completa con los enlaces grandes, entrada escalonada, datos de contacto
  y WhatsApp al pie. Áreas táctiles de 44 px como mínimo.
- En páginas largas (Jardín, Primaria, Comunidad): **subnavegación de anclas** pegajosa con la
  sección activa resaltada (en mobile, una fila con scroll horizontal).
- Footer completo: los tres logos, dirección, contacto de cada nivel, redes, mapa del sitio y una
  frase de cierre. Botón flotante de WhatsApp que deja elegir **Jardín** o **Primaria**.
- Pestañas y desplegables con URL propia (`/jardin/#taller-de-3`) para poder compartir el enlace.

---

## 6. Página por página

Los textos están en `CONTENIDO-WEB.md`. Acá va cómo presentarlos. Las "notas de diseño" de ese
archivo son sugerencias de la escuela: respetá la intención y mejorá la ejecución.

### Inicio

1. **Loader** (punto 8.1).
2. **Hero a pantalla completa**: la mejor foto al aire libre (o una secuencia muy lenta de 3 o 4
   con fundido tipo Ken Burns suave). Titular: *"El niño es cuerpo que siente y al sentir,
   piensa."* revelado línea por línea; debajo la bajada. Indicador de scroll dibujado a mano.
   El texto tiene que leerse perfecto sobre la foto (degradado sutil, nunca un velo gris pesado).
3. **Presentación con logos**, sobre papel: "La Escuelita", "Fundada por la profesora Marta Calvo
   en 1959", "67 años en la Educación por el Arte", "Centro de expresión infantil y Espacio de
   formación docente continua". Debajo, dos columnas: **izquierda, logo de Jardín** con "Primer
   Jardín Argentino de Educación por el Arte · 1959"; **derecha, logo de Primaria** con "Instituto
   La Escuelita, Escuela Primaria de Educación a través del Arte · 1997". **Debajo y centrado,
   logo de VEA.** En mobile se mantiene el orden de lectura: Jardín, Primaria, VEA. Cada columna
   enlaza a su página.
4. **Bienvenida institucional** con foto principal.
5. **Interludio foto + frase.**
6. **Línea de tiempo**: 1959 y 1997 como hitos grandes, con "67 años" como número protagonista
   (contador animado) y la frase *Un espacio donde "los sentidos" cobran sentido*. Fotos de la
   carpeta `HISTORICAS` para 1959. La línea se dibuja con el scroll.
7. **Nuestros ejes pedagógicos**: los cuatro bloques como piezas editoriales alternadas
   (texto / foto), no como cuatro tarjetas iguales.
8. **Dos puertas**: Jardín y Primaria, dos grandes paneles con foto, una línea y botón.
9. **Marquesina lenta** con los materiales del taller, textual del contenido: crayones · masa ·
   témpera · arcilla · tinta china · anilinas · collage.
10. **Comunidad** (adelanto con 3 o 4 fotos y enlace) y **cierre con llamado a entrevista**.

### La Escuelita

- Historia con fotos de `HISTORICAS`, tratadas como archivo (marco de papel, leve rotación, pie
  en cursiva).
- Reconocimiento a Marta Calvo → botón **"Leer la carta de agradecimiento de Marta Calvo"**: la
  carta se despliega completa, presentada como una carta real (papel, márgenes amplios, serif,
  firma). Cerrada por defecto.
- Hitos culturales: cuatro hitos con los años 1979 y 1990 destacados.
- V.E.A.: bloque propio con su logo y los cinco ejes de acción.
- Identidad: los cuatro pilares. "¿Por qué educar a través del arte?" como cierre con interludio.

### Nuestro equipo

- Organigrama cálido: fundadora y asesora arriba; dos columnas, Jardín y Primaria. No hay fotos
  del equipo: resolvelo con tipografía y trazos, sin avatares genéricos.
- Compromiso docente.
- Perfiles: tres copetes siempre visibles + tres botones (**La Coordinación / Los Docentes /
  Equipo Psicológico**); se despliega solo el elegido.

### Proyecto pedagógico

- Es la página más "editorial": ritmo de lectura, mucho aire, interludios de foto y frase entre
  ejes. Los cuatro ejes como capítulos con título grande **sin numeración**.
- "El rol del docente" con sus tres apartados (Acompañamiento, Evaluación formativa, Formación
  docente continua).
- "la profesora Marta Calvo" enlaza a `/la-escuelita/`. Cierra con las dos puertas a Jardín y
  Primaria.

### Jardín

- **Portada a pantalla completa** con foto de chicos en el taller y la cita de Marta Calvo.
- **¿Qué nos diferencia?** Cinco tarjetas (juego, expresión, vínculos, exploración, autonomía):
  grilla de 3 columnas en desktop, carrusel deslizable en mobile; ícono dibujado a mano + foto.
- **Propuesta pedagógica**: cuatro conceptos + "El gesto espontáneo y sus materias".
- **Nuestras salas**: 4 pestañas (Taller de 2 / 3 / 4 / 5), cada una con su subtítulo, su foto
  (carpetas `TALLER DE 2` … `TALLER DE 5`) y sus apartados. En mobile, pestañas con scroll
  horizontal o acordeón, lo que resulte más cómodo.
- **Nuestros lenguajes**: 5 acordeones (Plástica, Música, Juego Dramático, Educación Física,
  Literatura), se abre de a uno, con foto de su carpeta al abrir.
- **El patio**: el momento más visual de la página. Galería o carrusel grande de `PATIO` y el
  texto en dos columnas con viñetas.
- **Adaptación**: introducción visible + botón **"Conocé en detalle nuestra propuesta de
  adaptación"** que despliega el detalle.
- **Horarios**: tabla clara en desktop, tarjetas por sala en mobile; el beneficio de pre y post
  hora, destacado. Cierre con llamado a entrevista (Jardín).

### Primaria

- **Portada** con la cita de Marta Calvo.
- **Cómo aprendemos**: copete visible; al desplegar, dos columnas (Proyectos y convivencia / "La
  Ronda Pedagógica" en caja de color).
- **Áreas de aprendizaje**: introducción + Primer y Segundo ciclo; después una **botonera de 11
  áreas** (Lengua, Matemática, Ciencias Sociales, Ciencias Naturales, Artes Visuales, Cine y Foto,
  Música, Teatro, Ed. Física, ESI, Inglés) que muestra un panel por vez, con su foto. En mobile,
  chips con scroll horizontal. En Música: lugar para el video del Rap del Litio y galería de Peñas.
- **Proyectos destacados**: 4 tarjetas grandes con foto (Árboles, Los Pueblos, Inmigrantes, Ñandú).
- **Preparación para la secundaria**: caja destacada; las siete habilidades como palabras grandes
  que aparecen de a una.

### Nuestra comunidad

- Portada + introducción (no repitas dos veces seguidas la misma oración).
- Tres desplegables: **Talleres y Muestras / Salidas y Celebraciones / Actividades con familias**.
- Las salidas educativas son una lista larga de museos: mostralas como **"mapa de salidas"** en
  chips agrupados por área (Ciencias, Arte, Entorno local y Literatura, Teatro), con los enlaces
  externos que trae el contenido (pestaña nueva, `rel="noopener"`).
- Hitos anuales (Viaje a Rosario, Peñas, Campamentos, Kermese) como tarjetas con galería.
- **Voces de la comunidad**: carrusel de testimonios construido pero **oculto** hasta tener
  testimonios reales.
- **Talleres extracurriculares** (ancla `#talleres`): tarjetas en dos grupos, infancias y adultos.

### Admisión y contacto

- Dos tarjetas iguales, **Jardín** y **Primaria**: WhatsApp, mail y dirección.
  Jardín: +54 9 11 7369-4297 · info@laescuelitavea.org.ar · `https://wa.me/5491173694297`
  Primaria: +54 9 11 3092-1927 · institutolaescuelita@gmail.com · `https://wa.me/5491130921927`
  Dirección de ambos: Jorge Newbery 2950, C.A.B.A. (CP 1426).
- **Pedido de entrevista**: formulario corto (nombre, nivel de interés, edad o grado, mensaje).
  Sin backend: al enviar arma un mensaje prolijo y abre el WhatsApp del nivel elegido; alternativa
  por mail (`mailto:`). Dejalo preparado para enchufar un servicio de formularios más adelante.
- Mapa de Google embebido con carga diferida (se carga al acercarse o al hacer clic).

### Mapa de carpetas de fotos → sección

**Jardín:** `TALLER DE 2`, `TALLER DE 3`, `TALLER DE 4`, `TALLER DE 5` → pestañas de salas ·
`PLÁSTICA`, `MÚSICA`, `JUEGO DRAMÁTICO`, `ED FÍSICA`, `LITERATURA` → acordeones de lenguajes ·
`PATIO` → El patio y portada · `HISTORICAS` → historia y línea de tiempo.
Ojo: dentro de la carpeta de Jardín hay una que es de Primaria (`PRIMARIA-2DO-TEHUELCHES`).

**Primaria:** `RECREOS`, `PRIMER DÍA DE CLASES` → portada y vida cotidiana ·
`7° AYUDA A 1° A ESCRIBIR UNA CARTA`, `VISITA ESCRITOR` → Lengua y Literatura ·
`OLIMPÍADAS MATEMÁTICA` → Matemática y proyecto Ñandú ·
`INMIGRANTES 3°`, `PUEBLOS ORIGINARIOS 2°`, `PRIMARIA-2DO-TEHUELCHES`, `ACTO SAN MARTIN 5°` →
Ciencias Sociales y proyectos · `Experiencias CN 7°`, `VISITA MUSEO CN NAT`, `ANIMALES 1°`,
`MUESTRA DE AMBIENTES 5°`, `CALENDARIO 3°`, `PROYECTO ÁRBOLES 3°` → Ciencias Naturales y proyecto
Árboles · `PLÁSTICA`, `STOP MOTION 4°` → Artes Visuales · `RAP DEL LITIO 6°`, `PEÑA` → Música y
Comunidad · `LIBRO DE LOS HECHIZOS INGLÉS` → Inglés · `VIAJE A ROSARIO 4°`, `CAMPAMENTO`,
`KERMESSE` → Comunidad.

---

## 7. Dirección de arte

**Concepto: "el taller".** El sitio se siente como entrar al taller de La Escuelita: papel, tinta
china, crayón, masa, hojas de árbol, arena del patio. Editorial y sereno en la estructura,
artesanal en los detalles. La emoción viene de las fotos reales, las frases y el ritmo; no de
adornos.

- **Paleta** (punto de partida; ajustá el rojo al logo real y verificá contraste AA):
  papel `#FAF6EE` · papel oscuro `#F1E9DA` · tinta `#23201C` · tinta suave `#5C554C` ·
  **rojo Escuelita** ≈ `#D62828` (marca, acentos, trazos) · arena `#E3C79B` · ocre `#C4872E` ·
  verde hoja `#4E7A4B` · azul anilina `#2F5D8A`.
  Fondo siempre cálido, nunca blanco puro ni gris. El rojo se usa con intención, no en todo.
  Acento de orientación por nivel: **Jardín** tira a ocre/arena; **Primaria**, a verde hoja.
- **Tipografía:**
  Títulos → una serif con carácter y calidez (propuesta: *Fraunces* variable).
  Frases → **cursiva** de esa misma familia, grande y con aire (es el pedido de la dueña); probá
  también una itálica tipo *Instrument Serif* y quedate con la que emocione más.
  Texto → una sans humanista muy legible (propuesta: *Figtree*), 17–19 px en desktop,
  interlineado 1.6–1.7, columnas de 60 a 72 caracteres.
  Detalle manuscrito (opcional y mínimo, tipo *Caveat*) solo para anotaciones cortas.
- **Trazos a mano:** un pequeño sistema de SVG propios con textura de crayón o tinta (subrayados,
  círculos, flechas, un sol, una hoja, una espiral). Son el hilo conductor: subrayan una palabra
  del titular, separan secciones, hacen de viñeta, se dibujan con el scroll. Que parezcan hechos
  por una mano, no íconos de librería.
- **Fotos:** protagonistas, grandes, con buen recorte. Tratamiento uniforme y sutil para que
  fotos de orígenes distintos convivan (misma calidez; nada de filtros marcados). Algunas "pegadas"
  como trabajos colgados en el taller: borde de papel, sombra mínima, 1 o 2 grados de rotación.
- **Textura:** grano de papel apenas perceptible (un PNG o SVG liviano; nada de filtros caros).
- **Ritmo de página:** contenido → respiro → interludio emotivo → contenido. Ninguna pantalla debe
  ser un muro de texto: los bloques largos van en desplegables, pestañas o columnas.
- **Qué tomar de Aequalis:** la calidez, las fotos reales de chicos haciendo, la claridad para
  entrar por nivel, los títulos con gesto manual. **Qué superar:** jerarquía tipográfica, aire,
  consistencia, movimiento y velocidad. No copies su diseño ni sus colores.
- Evitá a toda costa: degradados violetas, glassmorphism, emojis como íconos, tarjetas todas
  iguales con sombra, ilustraciones de banco, tipografías infantiles tipo Comic.

---

## 8. Sistema de animación

Las animaciones están al servicio de la emoción: **lentas, suaves, orgánicas**, como una mano que
dibuja. Easing tipo `power3.out` / `expo.out`, duraciones de 0.6 a 1.2 s, escalonados cortos.
Nada rebota, nada parpadea, nada marea. Solo se animan `transform` y `opacity` (más `clip-path`
en revelados de imagen).

### 8.1 Loader

- Pantalla color papel. Un trazo de crayón rojo **dibuja un círculo y después sus rayos: un sol**
  (uno de los primeros dibujos con sentido de la infancia). El sol da paso al logo y la pantalla se levanta como
  una hoja de papel, encadenando con la entrada del hero.
- Dura entre 1.2 y 2 s. Solo en la primera visita de la sesión (`sessionStorage`); después, nada.
- Nunca bloquea: si el JS falla o tarda, una animación CSS de respaldo lo retira sola a los 3 s.
  Sin JS, no existe. Con `prefers-reduced-motion`, es un fundido breve.

### 8.2 Scroll suave

- Lenis + ScrollTrigger, **solo en desktop con puntero fino**. En táctil, scroll nativo.
- Anclas con desplazamiento suave y compensación del header fijo.
- Desactivado en "modo liviano" (8.6) y nunca activo dentro de modales, mapas o carruseles.

### 8.3 Revelados de entrada

- Titulares: por líneas, con máscara (SplitText), al entrar en pantalla.
- Párrafos y tarjetas: fundido + 20–30 px hacia arriba, escalonado.
- Imágenes: revelado con `clip-path` y un leve zoom-out del interior.
- Frases de interludio: palabra por palabra o línea por línea, más lentas que el resto.
- Trazos SVG: se dibujan (DrawSVG) al entrar o ligados al scroll.
- Números (1959, 1997, 67): contador.
- Cada elemento se anima **una sola vez**. Lo que ya está visible al cargar, entra con el hero.

### 8.4 Movimiento ligado al scroll (con mesura)

- Parallax muy leve en la foto del hero y en los interludios.
- La línea de tiempo se dibuja a medida que se avanza.
- Como máximo **un** tramo "pinneado" en todo el sitio y solo en desktop. Nada de secuestrar el
  scroll.
- Barra fina de progreso de lectura en páginas largas.

### 8.5 Micro-interacciones

- Enlaces y menú: subrayado de crayón que se dibuja en hover y foco.
- Botones: relleno que entra como una pincelada, flecha que avanza; estado presionado.
- Tarjetas: se elevan apenas, la foto hace un zoom lentísimo, el trazo decorativo se completa.
- Pestañas: indicador que se desliza a la activa; el panel hace fundido cruzado.
- Acordeones: altura animada, el "+" gira a "×".
- Menú mobile: el ícono hace morph; los enlaces entran escalonados.
- Formulario: etiquetas flotantes, validación amable, confirmación con un trazo que se dibuja.
- WhatsApp flotante: aparece después del hero, con un pulso suave cada tanto.
- Imágenes: aparición con desenfoque que se aclara al terminar de cargar (LQIP).
- Lightbox con transición desde la miniatura. Botón "volver arriba".

### 8.6 Transiciones entre páginas

- Usá **view transitions nativas entre documentos, solo con CSS** (`@view-transition
  { navigation: auto; }`): fundido corto y header persistente. El navegador que no las soporta
  navega normal. No uses un router del lado del cliente: no quiero pelear con el ciclo de vida de
  los scripts ni sumar puntos de falla en máquinas viejas.

### 8.7 Modo liviano y accesibilidad del movimiento

- `prefers-reduced-motion: reduce` → sin Lenis, sin parallax, sin pin, sin SplitText; solo
  fundidos breves. Todo el contenido visible igual.
- "Modo liviano" automático (misma versión reducida) si se detecta ahorro de datos, poca memoria o
  pocos núcleos (`navigator.connection.saveData`, `deviceMemory <= 2`, `hardwareConcurrency <= 2`)
  o si faltan APIs básicas.
- **Regla madre: el contenido primero.** El HTML llega visible. Los estados iniciales ocultos de
  los revelados solo se aplican cuando el script de animación cargó bien y marcó
  `html.anim-ready`. Si algo falla, no queda nada invisible. Probalo bloqueando el JS.

---

## 9. Responsive, compatibilidad y rendimiento

### 9.1 Responsive

- **Mobile first.** Tiene que verse impecable de 320 px a 2560 px: celulares chicos y grandes,
  tablets en vertical y horizontal, notebooks de 1366×768, monitores grandes y ultrawide.
- Tipografía y espaciados fluidos con `clamp()` (con valor fijo de respaldo declarado antes).
- Contenedor con ancho máximo; en pantallas enormes el contenido no se estira: crece el aire.
- Sin scroll horizontal jamás. Probá también con zoom del navegador al 200 % y con texto grande
  del sistema.
- Unidades de alto de viewport con respaldo (`100vh` y después `100dvh`), respetando el notch
  (`env(safe-area-inset-*)`).
- Hover solo donde hay hover (`@media (hover: hover)`); en táctil todo funciona con toque.

### 9.2 Sistemas y navegadores

- Tiene que funcionar bien en **Windows, macOS, Linux, Android e iOS**, en Chrome, Edge, Firefox,
  Safari y Samsung Internet.
- **Equipos y software viejos:** soporte completo en navegadores de 2020 en adelante (Chrome y
  Edge 80+, Firefox 78+, Safari e iOS 13+). En algo más viejo todavía, el sitio se tiene que poder
  **leer y navegar completo**, aunque sin efectos.
- Configurá `browserslist`, Autoprefixer y los `target` de build (JS y CSS) para esa base.
- CSS moderno **solo con respaldo**: nada de depender de `:has()`, container queries, anidado
  nativo, `aspect-ratio` sin alternativa, `gap` en flex sin alternativa, `inset`, `dvh` sin `vh`
  antes, ni `backdrop-filter` sin color sólido de respaldo. Usá `@supports` cuando haga falta.
- Desplegables con `<details>/<summary>` nativos (andan sin JS) mejorados con animación. Pestañas:
  sin JS, todos los paneles visibles uno debajo del otro con su título.
- Modales propios y accesibles (foco atrapado, Escape, clic afuera); no dependas de `<dialog>`.
- Imágenes con `<picture>`: AVIF, WebP y **JPEG de respaldo**.
- Fuentes con respaldo de sistema bien elegido y métricas ajustadas para que no salte el texto.

### 9.3 Rendimiento (pensado para computadoras lentas)

- Imágenes: `srcset` y `sizes` correctos, anchos de 480 a 2000 px, `width` y `height` siempre,
  `loading="lazy"` y `decoding="async"` salvo la del hero (esa va con prioridad alta y precarga).
- JS mínimo: el núcleo de animación se carga diferido; carrusel, lightbox y mapa, solo donde se
  usan y cuando hacen falta. Presupuesto: menos de ~130 KB de JS comprimido en Inicio.
- Sin videos de fondo, sin WebGL, sin librerías de íconos enteras, sin fuentes de más.
- Objetivo Lighthouse en mobile: **Performance ≥ 90, Accesibilidad ≥ 95, Buenas prácticas ≥ 95,
  SEO = 100.** LCP < 2.5 s, CLS < 0.05.

### 9.4 Accesibilidad

- WCAG 2.1 AA. HTML semántico, un solo `h1` por página, jerarquía de títulos correcta, `lang="es-AR"`.
- Todo operable con teclado, foco siempre visible, enlace "Saltar al contenido".
- Pestañas, acordeones, carruseles y menú con roles y estados ARIA correctos.
- Contraste AA también sobre fotos. `alt` descriptivo y sobrio en todas las imágenes.

### 9.5 SEO y metadatos

- `title` y `description` por página (escritos a partir del contenido, sin inventar datos),
  Open Graph con imagen, canonical, sitemap, `robots.txt`, favicon e íconos a partir del logo.
- JSON-LD de institución educativa (nombre, dirección, teléfonos, año de fundación 1959).

---

## 10. Organización del código

- Componentes chicos y reutilizables: `Hero`, `FraseFoto`, `Tabs`, `Acordeon`, `Desplegable`,
  `Galeria`, `Carrusel`, `Timeline`, `TarjetaProyecto`, `Trazo`, `Boton`, etc.
- **El contenido separado del diseño**: los textos viven en archivos de contenido por página
  (colecciones de Astro o archivos de datos), no hardcodeados en el markup. Cambiar un texto o
  reordenar bloques tiene que ser trivial.
- Un archivo de configuración con los datos que se repiten: teléfonos, mails, dirección, redes,
  años (1959, 1997) y la cifra "67 años".
- Tokens de diseño en un solo lugar. Una ruta `/guia/` (no indexada) que muestre tipografías,
  colores, botones, trazos y componentes: la voy a usar para revisar con la dueña.
- Creá `CLAUDE.md` con las reglas de oro de este prompt para que valgan en todas las sesiones.
- `README.md` corto: cómo correr, cómo cambiar un texto, cómo sumar una foto, cómo publicar.

---

## 11. Plan de trabajo

Avanzá fase por fase sin frenarte a pedir aprobación, salvo que algo sea irreversible (push,
deploy, borrar material). Hacé un commit al cerrar cada fase.

1. **Lectura y plan.** Leé todo el material y los enlaces, mirá las fotos, analizá la web actual
   y la aspiracional. Escribí `PLAN.md` (corto) y arrancá `_material/FOTOS-MANIFEST.md` y
   `PENDIENTES.md`.
2. **Base.** Proyecto Astro, tokens, tipografías, layout, header, footer, menú mobile, trazos SVG,
   página `/guia/`.
3. **Núcleo de animación.** Loader, scroll suave, revelados, micro-interacciones, transiciones,
   modo liviano. Probado antes de seguir.
4. **Inicio completo**, pulido al máximo: es la vara de calidad para el resto.
5. **Resto de las páginas**, en este orden: Proyecto pedagógico, Jardín, Primaria, La Escuelita,
   Equipo, Comunidad, Contacto, 404.
6. **Pasada de fotos**: selección final según el manifest, recortes, optimización.
7. **Control de calidad** (punto 12) y correcciones.
8. **Entrega**: resumen de lo hecho, decisiones que tomaste, `PENDIENTES.md` actualizado y cómo
   verlo (`npm run dev` y `npm run build && npm run preview`).

---

## 12. Control de calidad (no des nada por terminado sin esto)

- `npm run build` sin errores ni advertencias.
- Capturas automáticas (Playwright o similar) de todas las páginas a 320, 375, 414, 768, 1024,
  1280, 1440 y 1920 px. **Miralas una por una** y corregí desbordes, textos cortados, saltos raros
  y espacios muertos.
- Recorrido completo solo con teclado. Recorrido con JS desactivado: todo el contenido se lee.
- Recorrido con `prefers-reduced-motion` y con el modo liviano forzado.
- Lighthouse en mobile y desktop en Inicio, Jardín y Primaria; cumplí los objetivos del punto 9.3.
- Buscá en todo el sitio generado que **no aparezcan**: "Bloque", "Subsección", "Subbloque",
  "Sección 1", "Sugerencia", "Nota de diseño", "PENDIENTE", "[Foto", "[Botón", "lorem".
- Compará página por página contra `CONTENIDO-WEB.md`: no falta ni sobra ningún texto.
- Verificá teléfonos, mails, dirección, nombres y cargos del equipo, y la tabla de horarios,
  carácter por carácter.
- Verificá el orden de los logos en la presentación: Jardín izquierda, Primaria derecha, VEA abajo.
- Todos los enlaces internos y externos funcionan. WhatsApp abre el número correcto de cada nivel.

---

## 13. Pendientes y supuestos

Arrancá igual con todo esto abierto; resolvelo con el supuesto indicado y registralo en
`PENDIENTES.md` (las consultas para la escuela están al final de `CONTENIDO-WEB.md`).

- Logos definitivos por separado → mientras tanto, placeholder a partir del logo actual.
- Testimonios → componente oculto.
- Video del Rap del Litio y grado (6° o 7°) → componente listo, sin publicar; se usa el texto tal
  cual.
- Proyecto Árboles (1er grado en el texto, 3° en la carpeta) → no asocies esas fotos hasta
  confirmar; usá fotos de naturaleza de Primaria que no generen contradicción.
- URLs de Facebook, Instagram y YouTube → tomalas de la web actual; si no las conseguís, dejá los
  íconos preparados y ocultos.
- Teléfono fijo de la web actual (+54 11 3968-9929) → no lo publiques hasta confirmar.
- Noticias, cronología y admisión por año de la web vieja → fuera de esta etapa; dejá la
  estructura lista para sumar "Novedades" más adelante.
- Autorización de imagen de los chicos → la confirma la escuela antes de publicar.

---

## 14. Qué NO hacer

- No reescribir ni inventar contenido institucional. No publicar nada del documento crudo.
- No ubicar fotos al azar ni mezclar niveles. No usar stock ni IA para imágenes de chicos.
- No mostrar rótulos internos ni numeración de apartados.
- No tocar los logos. No cambiar el orden de logos de la presentación.
- No sacrificar legibilidad, velocidad o compatibilidad por un efecto.
- No dejar contenido que dependa de JS para poder leerse.
- No hacer push ni deploy sin que yo lo pida.

Empezá por la fase 1, contame el plan en pocas líneas y seguí con la fase 2 sin esperar respuesta.
