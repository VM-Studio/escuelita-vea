// NUESTRA COMUNIDAD — textos tal cual CONTENIDO-WEB.md.
export const comunidad = {
  portada: {
    titulo: 'Nuestra Comunidad',
    bajada: 'En nuestra institución, la comunidad se encuentra para celebrar, jugar, crear, viajar y compartir.',
    texto: 'Al compartir una experiencia entre varios, la escuela se transforma en un lugar más significativo. Conformamos esta comunidad viva que se renueva cada año con la llegada de cada uno de sus nuevos integrantes.',
    foto: 'primaria-pena-banderines',
  },
  introduccion: {
    // La primera oración es también una de las "frases" de la escuela: se destaca en cursiva, sin repetirla.
    frase: 'Una escuela también se construye alrededor de una mesa, una ronda, un paseo y un hacer en común.',
    texto: [
      'En nuestra institución, la comunidad se encuentra para celebrar, jugar, crear, viajar y compartir. Reunirnos es una forma de hacer lugar, escuchar, imaginar y armar algo entre muchos. Descubrimos que, al compartir una experiencia entre varios, la escuela se transforma en un lugar más significativo.',
      'Tanto los niños como los adultos aprenden al formar parte de un grupo de pertenencia. Por eso, consideramos fundamental construir un vínculo de confianza indestructible entre las familias y la escuela para que cada niño y niña se sienta seguro y contenido. Entre todos —infancias, familias, equipo docente y no docente— conformamos esta comunidad viva que se renueva cada año con la llegada de cada uno de sus nuevos integrantes.',
    ],
  },
  talleresMuestras: {
    id: 'talleres-y-muestras',
    titulo: 'Talleres y Muestras',
    bajada: 'Efemérides y fechas que la escuela trabaja con identidad propia.',
    texto: 'El 24 de marzo, el 2 de abril, el 25 de mayo y el 9 de julio son momentos en los que familias, estudiantes y docentes nos reconocemos como parte de una misma historia y tejido social. Las efemérides se abordan a través de proyectos comunitarios y producciones colectivas. Nos distanciamos de los rituales estereotipados para dar paso a la reflexión fundamentada.',
    fechas: ['24 de marzo', '2 de abril', '25 de mayo', '9 de julio'],
    items: [
      { etiqueta: 'Feria de Libros y Palabras', texto: 'La feria constituye un espacio para encontrarnos alrededor de la lectura, descubrir nuevas historias y hacer circular autores junto con mundos posibles. Las mesas de libros son una tradición muy bien recibida en esta escuela. En ellas, cada participante busca el ejemplar que acompañará sus momentos de lectura en soledad o en agrupamientos.' },
      { etiqueta: 'Muestras Didácticas', texto: 'Espacios abiertos donde el objetivo es ilustrar el recorrido pedagógico realizado por cada grupo. Compartimos de forma transparente las estrategias, los dialectos, las técnicas y los procesos creativos que amalgaman la información de los talleres cotidianos para compartirlos con la comunidad.' },
    ],
    foto: 'primaria-muestra-ambientes',
  },
  salidas: {
    id: 'salidas-y-celebraciones',
    titulo: 'Salidas y Celebraciones',
    bajada: 'Eventos anuales, jornadas especiales y articulaciones institucionales.',
    salidasEducativas: { etiqueta: 'Salidas Educativas', texto: 'Forma parte de la agenda anual visitar un gran número de museos y espacios de nuestra Ciudad, en consonancia con el contenido de cada grado. Nos interesa interactuar tanto con exposiciones permanentes como ocasionales. Todo espacio que sume contenido a los proyectos se consolida como un lugar factible de visita.' },
    // "Mapa de salidas": el texto se publica completo; los lugares marcados con {{…}} o [enlace](url) se ven como chips.
    areas: [
      {
        etiqueta: 'Área de Ciencias', color: 'verde',
        texto: 'Desarrollamos indagaciones directas y contrastes de fuentes en el [Museo Argentino de Ciencias Naturales Bernardino Rivadavia](https://www.macnconicet.gob.ar/), el {{Museo Etnográfico Juan B. Ambrosetti}}, el [MUNTREF - Museo de la Inmigración](https://untref.edu.ar/muntref/es/museo-de-la-inmigracion/), el [Centro Ana Frank Argentina](https://centroanafrank.com.ar/), la {{Planta Potabilizadora General San Martín de AySA}}, el {{Instituto Geográfico Nacional (IGN)}}, el {{Congreso de la Nación}} y la {{Casa de Gobierno}}. Realizamos además el {{Circuito Belgraniano}}, el {{Circuito Sanmartiniano}}, el {{Museo Histórico de Buenos Aires Cornelio de Saavedra}} y los recorridos de memoria en el {{Parque de la Memoria}} y el {{Museo Evita}}.',
      },
      {
        etiqueta: 'Área de Arte', color: 'rojo',
        texto: 'Enriquecemos la percepción visual y la mirada crítica en el [MALBA](https://www.malba.org.ar/), el [Museo Nacional de Bellas Artes](https://www.bellasartes.gob.ar/), el {{Museo Casa de Yrurtia}}, el {{Museo de Artistas Argentinos "Benito Quinquela Martín"}}, {{Fundación PROA}} y los espacios dedicados a la experimentación como el {{Museo Xul Solar}} y el {{Museo de Arte Popular José Hernández}}.',
      },
      {
        etiqueta: 'Entorno Local y Literatura', color: 'ocre',
        texto: 'Realizamos recorridos por el barrio de {{Colegiales}} (comercios, plazas, correo) y visitas orientadas a las letras en la {{Biblioteca La Nube}}, la {{Biblioteca Nacional Mariano Moreno}} y la {{Biblioteca del Congreso de la Nación}}.',
      },
      {
        etiqueta: 'Área de Teatro', color: 'azul',
        texto: 'Asistimos a salas independientes como {{Hasta Trilce}} para presenciar, por ejemplo, la adaptación de los cuentos de “Sucedió en colores” de la autora Liliana Bodoc.',
      },
    ],
    fotos: ['primaria-salida-caminito', 'primaria-museo-ciencias'],
    hitosTitulo: 'Hitos anuales y viajes',
    hitos: [
      { id: 'viaje-a-rosario', etiqueta: 'Viaje a Rosario (4to grado)', fotos: ['primaria-rosario'], texto: 'El grupo de cuarto grado promete lealtad a la bandera en un proyecto nacional profundo. Los estudiantes investigan, leen y representan una obra de teatro que repasa la biografía de Manuel Belgrano y la creación del símbolo patrio. El legado de Belgrano nos interpela en valores fundamentales. La visita a la ciudad de Rosario y al [Monumento a la Bandera](https://www.monumentoalabandera.gob.ar/) cierra el proyecto con un contenido simbólico y un matiz sensible indispensable para profundizar los aprendizajes.' },
      { id: 'penas', etiqueta: 'Las Peñas de La Escuelita', fotos: ['primaria-pena-noche'], texto: 'Dos veces al año damos lugar a este evento tan esperado que nos reúne los días sábado. Niños, niñas y grandes se combinan para tocar y cantar un repertorio variado a elección de cada participante. La música, los bailes y la reunión de las familias entre los árboles permiten habitar la escuela de otra manera y celebrar el canto compartido. Es un lugar para cada uno, a la medida de cada quien.' },
      { id: 'campamentos', etiqueta: 'Campamentos', fotos: ['primaria-campamento'], texto: 'Dormir fuera de casa, explorar otros territorios, jugar y habitar la naturaleza transforma la experiencia escolar. Esta vivencia construye otra forma de estar juntos y afianza la confianza mutua.' },
      { id: 'kermese', etiqueta: 'La Kermese de 7mo Grado', fotos: ['primaria-kermese-carrera', 'primaria-kermese-ronda'], texto: 'Una mañana preparada íntegramente por los estudiantes de séptimo grado. Ellos invitan a toda la escuela a través de distintos juegos tradicionales a recrear las dinámicas lúdicas de sus primeros años institucionales. Es un clásico de cada agosto donde celebramos a las infancias a través del juego.' },
    ],
  },
  // Frase de la escuela, como interludio entre los hitos y los talleres (no pegada al texto de Peñas).
  interludio: { frase: 'Es un lugar para cada uno, a la medida de cada quien.', foto: 'musica-patio-familias' },
  familias: {
    id: 'actividades-con-familias',
    titulo: 'Actividades con familias',
    bajada: 'Reuniones, talleres, espacios de adultos, capacitaciones y encuentros abiertos.',
    texto: 'La educación es una tarea eminentemente social y participativa que necesita del trabajo de un equipo con capacidad de interacción y reflexión sobre su hacer. Sostenemos un lazo continuo con el entorno familiar a través de múltiples dispositivos diseñados por la institución a tal fin: entrevistas individuales, grupos de reflexión, asesoramiento y reuniones de familias tanto individuales como grupales. Este abordaje interdisciplinario permite que los adultos nos encontremos en un hacer común que acompaña activamente la crianza y el crecimiento seguro de los niños y las niñas.',
    foto: 'jardin-encuentro-familias-noche',
  },
  voces: {
    titulo: 'Ex alumnos y padres: memoria afectiva',
    subtitulo: 'Voces de la comunidad',
    // Vacío a propósito: no se publican testimonios inventados. Ver PUBLICAR.testimonios.
    testimonios: [] as { texto: string; autor: string; rol?: string }[],
  },
  extracurriculares: {
    titulo: 'Talleres extracurriculares',
    grupos: [
      {
        titulo: 'Para las infancias',
        items: [
          { nombre: 'Taller de Natación', para: 'Para niños entre 4 y 12 años' },
          { nombre: 'Taller de juego y naturaleza', para: 'Para niños entre 4 y 5 años' },
          { nombre: 'Taller de violín y Guitarra', para: 'Para niños entre 5 y 10 años' },
          { nombre: 'Taller de Música', para: 'Para bebés y niños entre 6 y 18 meses con un acompañante' },
        ],
      },
      {
        titulo: 'Para adultos',
        items: [
          { nombre: 'Taller de Fotografía', para: 'Para adultos' },
          { nombre: 'Taller de Collage', para: 'Para adultos' },
          { nombre: 'Taller de canto', para: 'Para adultos' },
        ],
      },
    ],
  },
};
