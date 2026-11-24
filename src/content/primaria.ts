// PRIMARIA (Instituto La Escuelita) — textos tal cual CONTENIDO-WEB.md.
export const primaria = {
  portada: {
    titulo: 'Instituto La Escuelita: Escuela Primaria',
    subtitulo: 'Un encuentro con otros en torno al conocimiento y la creación', // rev. 19-11-2026
    cita: '“Preservamos lo que entendemos por educación: el lugar para que la palabra se convierta en acción, unión entre el hacer, el sentir y el pensar”.',
    citaFirma: 'Marta Calvo',
    texto:
      'Lo grupal es siempre una oportunidad. El encuentro en torno al conocimiento, la discusión y la creación deviene en acontecimiento, definido esto como aquello que corre los límites de lo esperado. Aprender es un acontecimiento porque lo nuevo tiene lugar. La potencia del pensamiento grupal motoriza el aspecto más social de los seres humanos.',
    foto: 'primaria-primer-dia',
  },
  interludioGrupal: { frase: 'Lo grupal es siempre una oportunidad.', foto: 'primaria-recreo-excavando' },
  comoAprendemos: {
    titulo: 'Cómo aprendemos',
    copeteTitulo: 'Proyectos, investigación, producción y trabajo colectivo',
    copete:
      'Trabajamos en proyectos que delinean un recorrido donde cada estudiante deja su propia marca singular, esa que distingue la producción. El trabajo en proyectos invita a tejer una trama con otros, de modo que aloja afinidades, diferencias e interrogantes complejos. En la escuela recuperamos la medida del tiempo: habitamos los procesos y nos distanciamos de la inmediatez mientras habitamos el espacio escolar.',
    convivenciaTitulo: 'Cómo se narra la convivencia: respeto, integración, vínculo, escucha, participación, diferencias',
    convivencia: [
      'Cuidamos las interacciones cotidianas para que la potencia grupal se transforme en una oportunidad de crecimiento y en una beneficiosa oportunidad para todos. Sentirse aceptado por pares y adultos es fundamental. Por eso, garantizamos una confianza que asegura que mostrarse en el aspecto más genuino y creativo sea plenamente valorado.',
      'A través de propuestas colaborativas, la polifonía de voces y la diversidad de miradas enriquecen el quehacer diario. Los acuerdos y las normas se construyen de forma fundamentada, y nos distanciamos de los rituales estereotipados.',
    ],
    // Galería al lado de "Cómo aprendemos" (pedido de la escuela, rev. 19-11-2026)
    fotos: ['primaria-aula-tercero', 'primaria-lectura-leyenda', 'primaria-leyenda-ronda', 'primaria-muestra-estepa', 'primaria-muestra-mesa', 'primaria-construccion-arena'],
    ronda: {
      etiqueta: 'La Ronda Pedagógica',
      texto: 'La ronda es nuestra práctica de encuentro grupal habitual. Mediada por adultos que escuchan para devolver preguntas y moderar los intercambios, constituye el espacio común para manifestar diferencias y trabajar los conflictos. Alojar la posibilidad del conflicto y destinar tiempo para su resolución abona de manera directa a la buena convivencia.',
    },
  },
  interludioAcontecimiento: { frase: 'Aprender es un acontecimiento porque lo nuevo tiene lugar.', foto: 'primaria-experimento-tubos' },
  areas: {
    titulo: 'Áreas de aprendizaje',
    intro:
      'Nuestra propuesta brinda a los niños y las niñas todos los saberes necesarios para continuar la trayectoria educativa en la escuela media de la modalidad que prefieran. La interacción con expresiones artísticas y la experiencia del arte como modo de expresión aportan un aspecto sensible que redunda en un conocimiento profundo de los contenidos. Potenciamos la capacidad de interrogación y el asombro frente al descubrimiento respetuoso. Las áreas no aparecen separadas: se entrelazan de forma orgánica en el marco de proyectos integrales.',
    // Dos módulos en zigzag con las áreas desplegables (pedido de la escuela, rev. 19-11-2026)
    modulos: [
      { titulo: 'Saberes Curriculares e Idiomas', foto: 'primaria-escribiendo-juntos', areas: ['lengua', 'matematica', 'ciencias-sociales', 'ciencias-naturales', 'ingles', 'esi'] },
      { titulo: 'Lenguajes Artísticos y Expresión', foto: 'primaria-leyenda-teatro', areas: ['artes-visuales', 'cine-y-foto', 'musica', 'teatro', 'educacion-fisica'] },
    ],
    ciclos: [
      { etiqueta: 'Primer Ciclo (1°, 2° y 3° grado)', texto: 'Propiciamos una modalidad donde el aprendizaje tiene un carácter vivencial. La investigación, la literatura, el encuentro directo con las fuentes, el juego dramático y las visitas a museos habilitan puentes para llegar a tiempos remotos y, de alguna manera, habitarlos de forma colectiva.' },
      { etiqueta: 'Segundo Ciclo (4° a 7° grado)', texto: 'La base adquirida opera como matriz para atravesar proyectos grupales que proponen mayores niveles de abstracción, análisis y síntesis.' },
    ],
    items: [
      {
        id: 'lengua', boton: 'Lengua', titulo: 'Lengua y Literatura',
        fotos: ['primaria-escribiendo-juntos', 'primaria-visita-escritor'],
        frase: 'Aprendemos a leer para leerlo todo.',
        texto: ['Vivenciamos la lectoescritura como un proceso dialéctico en el taller, donde interactuamos con pares y docentes. Aprendemos a leer para leerlo todo y seguir descubriendo la cultura; aprendemos a escribir para generar enunciados propios. La literatura es un campo central de 1° a 7° grado (cuentos, novelas, poesía, haikus, dramaturgia y ferias del libro). Cada obra es elegida con un riguroso criterio estético para ahondar en los distintos momentos de la humanidad a través del juego entre la palabra y el silencio.'],
      },
      {
        id: 'matematica', boton: 'Matemática', titulo: 'Matemática', fotos: [],
        texto: ['Proponemos "hacer matemática" a partir de situaciones problemáticas y juegos en clave didáctica. Los estudiantes resuelven desafíos con sus propios recursos, tal como hacen los matemáticos y matemáticas. Las puestas en común potencian el saber individual al conocer el pensamiento del otro. Esto permite poner en común, institucionalizar el conocimiento y jerarquizar los pasos que economizan recursos. Valoramos y exploramos el error como motor de nuevas estrategias. Ofrecemos una matemática graduada, geometría e instrumentos de medición, y participamos activamente en las Olimpíadas Matemáticas Ñandú.'],
      },
      {
        id: 'ciencias-sociales', boton: 'Ciencias Sociales', titulo: 'Ciencias Sociales', fotos: ['primaria-inmigrantes-escalera', 'primaria-rosario', 'primaria-tehuelches-papel'],
        texto: ['Indagamos la historia antigua y la reciente al comparar fuentes y miradas en el marco grupal. Conversamos sobre los procesos que van del pasado al presente, lo que propicia la sensibilidad ante las problemáticas del mundo. A través de libros, películas, museos y líneas de tiempo, los estudiantes interactúan directamente con las fuentes para construir conocimiento propio en lugar de repetir lo dicho por otros.'],
      },
      {
        id: 'ciencias-naturales', boton: 'Ciencias Naturales', titulo: 'Ciencias Naturales', fotos: ['primaria-experimento-pipeta', 'primaria-animales-carton'],
        texto: ['Cultivamos la curiosidad y el asombro ante los hitos y paradigmas científicos. Nos servimos de nuestro fondo de árboles (mandarino, nísperos, moreras, palmeras, magnolia y paltos) y del Jardín de Mariposas como una porción de naturaleza viva para investigar con lupas y microscopios. Confeccionar un calendario lunar o medir la sombra a la misma hora son prácticas cotidianas que reconfiguran el tiempo. En los grados superiores, complejizamos el aprendizaje mediante debates sobre el método científico y el lugar de la ciencia en la sociedad.'],
      },
      {
        id: 'artes-visuales', boton: 'Artes Visuales', titulo: 'Artes Visuales / Plástica', fotos: ['primaria-tinta-caminos', 'primaria-stop-motion'],
        texto: ['La elaboración de imágenes visuales es un modo de conocimiento fundamental en los procesos de aprendizaje. Mediante un abordaje lúdico y sensible con el dibujo, la pintura, el grabado, la cerámica y las construcciones, las infancias se descubren en su singularidad y conforman un grupo. Estimulamos la mirada crítica y la valoración artística a través de visitas a museos, la realización de libros ilustrados y la creación de animaciones en Stop Motion.'],
      },
      {
        id: 'cine-y-foto', boton: 'Cine y Foto', titulo: 'Fotografía y Cine (Documental y Ficcional)', fotos: [],
        texto: ['En un mundo atravesado por imágenes, la escuela es una oportunidad para interrogar los modos de ver a través de circuitos no tradicionales. Emprendemos un pasaje de la imagen al movimiento, y del movimiento a la ficción (fotografía, documental y corto ficcional). La experiencia grupal es una usina de preguntas esenciales sobre la representación, el acto de filmar y la subjetividad detrás de la cámara. Expandimos la mirada con tiempo para construir relatos y dar juego a la propia voz de otra manera.'],
      },
      {
        id: 'musica', boton: 'Música', titulo: 'Música', fotos: [],
        texto: ['Un espacio de encuentro, exploración y creación a través del canto, los instrumentos y la percusión corporal. El canto grupal y la voz ocupan un lugar privilegiado, donde se realizan experiencias de canto coral y texturas polifónicas. La música excede su clase específica y se enlaza con otras áreas para narrar procesos o generar una transmisión más precisa. La clase de música abre paso al ensamble. Son muchas las bandas que nacieron y tuvieron su primer escenario en las Peñas de la escuela, transformadas hoy en rituales compartidos por las familias.'],
        rap: { etiqueta: 'El Rap del Litio (7° grado)', texto: 'Proyecto interdisciplinario donde la música y la investigación científica se fusionan para narrar un proceso de aprendizaje transversal.' },
        penas: { titulo: 'Las Peñas de La Escuelita', fotos: ['primaria-pena-noche', 'primaria-pena-banderines'] },
      },
      {
        id: 'teatro', boton: 'Teatro', titulo: 'Juego Dramático (Teatro)', fotos: ['primaria-leyenda-teatro'],
        texto: ['Espacio de juego y exploración con el encuadre y las reglas necesarias para que cada participante profundice en su propia expresión. Aquí se encuentra ese gesto que sintetiza el universo de cada personaje. El juego dramático acompaña de forma transversal los proyectos de cada grado. Gracias a esto, el aprendizaje adquiere niveles más profundos de comprensión y vivencia corporal.'],
      },
      {
        id: 'educacion-fisica', boton: 'Ed. Física', titulo: 'Educación Física', fotos: [],
        texto: ['Oportunidad de explorar el propio cuerpo en movimiento y encontrarse con otros a través del juego y el deporte. Desarrollamos habilidades motrices (fuerza, resistencia, equilibrio, velocidad y coordinación) para construir autonomía y confianza, y ampliar la percepción. En el encuentro grupal, el juego invita a compartir propósitos, acordar reglas, cooperar y asumir roles rotativos.'],
      },
      {
        id: 'esi', boton: 'ESI', titulo: 'Educación Sexual Integral (ESI)', fotos: [],
        texto: ['Implementada de manera transversal y adaptada a cada edad en cumplimiento de la normativa vigente. Es una herramienta fundamental de cuidado, afecto y protección de derechos. Trabajamos sobre cinco grandes dimensiones institucionales: Cuidado del cuerpo y la salud (intimidad e higiene), Valoración de la afectividad (expresar emociones y pautas de respeto), Equidad de género (juegos y profesiones sin género), Respeto a la diversidad y Ejercicio de derechos (el valor de ser escuchados).'],
      },
      {
        id: 'ingles', boton: 'Inglés', titulo: 'Inglés (Lengua Extranjera)', fotos: ['primaria-libro-hechizos'],
        texto: ['Abordado desde un enfoque comunicativo y lúdico desde primer grado. El lenguaje se construye a partir del reconocimiento y la imitación para luego ajustar la lectura y redacción con libros actualizados. Despertamos un interés genuino al interactuar con textos literarios originales (canciones, poesías y clásicos infantiles y juveniles) o bien artículos sobre ciencias sociales y naturales adaptados para cada grado y nivel de alfabetización, tanto en español como en inglés. El área se integra de forma transversal a los proyectos de las materias curriculares de cada grado:'],
        lista: [
          { etiqueta: 'En segundo grado', texto: 'Observación del arte y la naturaleza con *Draw me a Star* de Eric Carle.' },
          { etiqueta: 'En tercer grado', texto: 'Proyecto sobre el tiempo y los ciclos de vida con el cuento *The Very Hungry Caterpillar*.' },
          { etiqueta: 'En cuarto grado', texto: 'Lectura de *Where the Wild Things Are*, en consonancia con el proyecto del Mapa del alma.' },
          { etiqueta: 'En los grados superiores', texto: 'Género del terror y el gótico con un trabajo anual sobre monstruos (desde Edgar Allan Poe hasta bandas de rock). Acompañamos la conformación del Estado Nacional, la gauchesca y el mito fundacional argentino con artículos sobre los celtas, leyendas del rey Arturo y la música de Rick Wakeman.' },
        ],
      },
    ],
  },
  interludioArboles: {
    frase: 'Detenerse para cuidar de los árboles que también son el refugio y el reparo de los días de la infancia.',
    foto: 'primaria-recreo-arboles',
  },
  proyectos: {
    titulo: 'Proyectos destacados',
    items: [
      {
        id: 'arboles-amigos', titulo: 'Árboles amigos y plantas nativas (1er grado)', foto: 'primaria-recreo-hojas-manos', trazo: 'hoja',
        texto: 'Nuestra escuela cuenta con un fondo de naturaleza que es un tesoro en medio de la ciudad. El Jardín de Mariposas, plantas nativas, moreras, magnolia, paltos, mandarino y un eucalipto nos rodean cotidianamente. Contamos con este espacio para aprender de él, respetarlo y valorar su aspecto más vitalizante. Los chicos y las chicas de 1er grado tienen la tarea de elegir un árbol para observar a lo largo de todo el año. Son testigos de un ciclo completo: corteza, altura, hojas, flores y frutos. Es un ritmo donde, a su tiempo y según la especie, florecen o deshojan. Son árboles que se parecen y son distintos a la vez. Dibujar, registrar y aprender de los árboles implica detenerse para saber del color, de la forma, de la textura, del perfume y del tiempo que lleva florecer. Significa detenerse para cuidar de los árboles que también son el refugio y el reparo de los días de la infancia.',
      },
      {
        id: 'los-pueblos', titulo: 'Los Pueblos (2do grado)', foto: 'primaria-quillangos-piso', trazo: 'sol',
        texto: 'Sucede de generación en generación eso de repetir la pregunta acerca de cómo llegamos hasta aquí y quiénes habitaban estos lugares en el tiempo lejano. Saber de otras personas, parecidas y distintas, activa los interrogantes de las infancias. Los pueblos originarios y su organización precolombina aportan una riqueza que, en relación con el legado cultural, las leyendas y las fuentes, activa la memoria arquetípica para dar lugar a un aprendizaje muy significativo. Investigar sobre la construcción de las viviendas, la comida, la vestimenta y sus creencias genera líneas de indagación abiertas para seguir aprendiendo. El vínculo con Plástica para saber de guardas, pinturas y telares, junto con el Juego Dramático para poner en acción lo aprendido, otorgan al aprendizaje un carácter vivencial donde lo lejano se acerca y se inscribe en una trama donde se comienza a labrar el tiempo histórico.',
      },
      {
        id: 'inmigrantes', titulo: 'Inmigrantes (3er grado)', foto: 'primaria-inmigrantes-valija', trazo: 'ola',
        texto: 'El grupo de tercer grado lleva adelante uno de los proyectos más entrañables de la escuela primaria: la gran inmigración de fines del siglo XIX. Esta temática interpela la trama de cada familia. Cada uno de nosotros está habitado por la historia de alguien que cruzó el océano en barco, con poco equipaje y muchas costumbres, recetas de cocina, algunas fotos y muchos rostros. Es el pasado y sus huellas en el presente de la biografía de cada familia, que resuena en la conformación de nuestra Nación. Los niños y niñas de tercero presentan su árbol familiar, estudian ese tiempo histórico, trabajan literatura que potencia el entendimiento y realizan la construcción de un personaje en el espacio de Juego Dramático que amalgama toda la información. Dialectos reales e inventados recrean esa época en que los inmigrantes llegaban a América para escribir la historia que nos trajo hasta aquí.',
      },
      {
        id: 'nandu', titulo: 'Olimpíadas de matemática Ñandú', foto: 'primaria-nandu-mar-del-plata', trazo: 'estrella',
        texto: 'Participamos en las Olimpíadas de Matemática Argentina, una competencia fundada en 1971 y basada en la resolución de problemas. En nuestra primera cohorte de ocho estudiantes (cuya participación es optativa), dos de ellos, gracias al mérito de su desempeño, alcanzaron la instancia Metropolitana en Mar del Plata. Nuestro proyecto de matemática de la escuela primaria dialoga de forma directa con las Ñandú.',
      },
    ],
  },
  secundaria: {
    titulo: 'Preparación para la secundaria',
    pregunta: '¿Qué habilidades desarrolla un egresado o egresada de La Escuelita?',
    habilidadesTexto: 'Sensibilidad, autonomía, creatividad, pensamiento, metodología, saberes concretos y herramientas para la escuela secundaria.',
    habilidades: ['Sensibilidad', 'autonomía', 'creatividad', 'pensamiento', 'metodología', 'saberes concretos', 'herramientas para la escuela secundaria'],
    texto: [
      'Una niña o un niño que se gradúa en nuestra escuela es una persona con la preparación necesaria para continuar su trayectoria educativa en la escuela media que desee. Una educación a través del arte forma a cada sujeto para que la formulación de preguntas sea siempre una constante y un motor para el conocimiento.',
      'Explorar con curiosidad y respeto aquello que va a indagarse se potencia gracias a la disponibilidad de múltiples lenguajes para aprender. La sensibilidad aporta un matiz que redunda en profundidad y en una capacidad de lectura más allá de un enunciado básico.',
      'Trabajamos la autonomía basada en el autorreconocimiento. Esperamos que nuestros estudiantes puedan reconocerse al saber de sus maneras de aprender. Buscamos que se preserven de aquello que, en ocasiones, el mercado y las redes sociales intentan imponer como lo natural para los adolescentes. Poder reconocerse brinda autonomía y seguridad.',
    ],
  },
};
