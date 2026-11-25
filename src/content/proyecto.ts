// PROYECTO PEDAGÓGICO — textos tal cual CONTENIDO-WEB.md. Corazón del sitio.
export const proyecto = {
  titulo: 'Proyecto pedagógico',
  intro: [
    'Cuando una familia se acerca a La Escuelita por primera vez, descubre que nuestra propuesta busca utilizar el arte como el medio más potente para el desarrollo humano. Traducimos nuestra mirada en una experiencia cotidiana pensada por y para las infancias.',
    // "la profesora Marta Calvo" enlaza a la historia (nota de diseño de la escuela).
    'Nuestra metodología de trabajo nació hace 67 años como una dinámica de taller en el jardín. El modelo creado por la profesora [Marta Calvo](/la-escuelita/historia/) y sus equipos de trabajo surgió a partir de la observación y el respeto por el potencial creativo. Así se convirtió en un modelo pedagógico propio, singular e innovador.',
    'Esta propuesta se extendió luego a la etapa escolar. De este modo dio lugar, hace 30 años, a nuestra escuela primaria. La institución conjuga la estructura curricular oficial con los principios básicos de La Escuelita, y los adapta a las necesidades propias de estas edades junto a sus posibilidades concretas.',
    'Lo que distingue nuestro trabajo es el empleo de la dinámica de taller como forma cotidiana del aprendizaje. Concebimos al arte como una actividad transversal y nodal, inherente a nuestra condición de seres humanos. Hoy, el deseo de su fundadora y su equipo interdisciplinario es que este modelo siga en crecimiento y expansión hacia sectores cada vez más amplios y variados de la sociedad, para potenciar su lazo y cercanía con la comunidad.',
  ],
  fotoApertura: 'fachada-mural-calle',
  // Fondo de la portada: fotos que van pasando (carpeta PROYECTO PEDAGOGICO enviada por la escuela, rev. 19-11-2026).
  // Rev. 25-11-2026: una foto más (Primaria, taller en el piso) y cada foto se ve entera.
  fotosApertura: [
    'fachada-mural-calle', 'taller-maestra-mural-retratos', 'jardin-musica-guitarra', 'patio-regando-cantero', 'plastica-retratos-tinta',
    'primaria-tehuelches-papel', 'jardin-pintura-murales', 'literatura-libros-mesa', 'taller-maestras-dibujos', 'plastica-masa-figura',
  ],
  ejesTitulo: 'Ejes fundamentales',
  ejesIntro: 'Nuestra propuesta pedagógica cotidiana se estructura y despliega bajo los siguientes ejes fundamentales:',
  ejes: [
    {
      id: 'la-concepcion-del-nino',
      titulo: 'La concepción del niño',
      texto: [
        'El niño es cuerpo. Es en el cuerpo todo —el movimiento, la voz, la mirada, las manos— donde se manifiesta el gesto espontáneo de las infancias. El juego y el arte son su lenguaje natural. Este lenguaje se vuelve propio cuando existe un ambiente que favorece su expresión y construcción interna.',
        'Buscamos albergar y dar lugar a la cultura de la infancia a través de los canales esenciales de comunicación y conocimiento. En este camino, el juego y el arte se definen como pilares fundamentales para un devenir persona con identidad propia.',
      ],
      foto: 'juego-dramatico-capas',
    },
    {
      id: 'educacion-por-el-arte',
      titulo: 'Educación por el Arte',
      texto: [
        'Nuestro eje está puesto en el proceso más que en el resultado, que adquiere así otro valor. Para las familias, esto se hace visible en nuestras muestras didácticas. Estas exposiciones ilustran el recorrido pedagógico de cada grupo para dar cuenta de su devenir, y muestran de forma transparente las estrategias y técnicas del equipo docente.',
      ],
      foto: 'jardin-rostros-muestra',
    },
    {
      id: 'expresion-aprendizaje',
      titulo: 'Expresión / Aprendizaje',
      texto: [
        'El aprendizaje ocurre a través de la acción y la convivencia con otros. Esta concepción da respuesta a la necesidad de integración que requiere el desarrollo del ser humano para expresarse, comunicarse y trascender.',
        'En el día a día de la escuela, esto se manifiesta en el hacer concreto. Los chicos gozan del proceso de crear y construir. De esta manera logran un resultado esencialmente comunicativo que ilumina el mundo que los circunda y la cultura que los alberga.',
      ],
      foto: 'primaria-stop-motion',
    },
    {
      id: 'el-rol-del-docente',
      titulo: 'El Rol del Docente',
      texto: [
        'El maestro es el coordinador del grupo y el mediador eficaz que concreta cotidianamente el quehacer educativo. Trabaja en equipo junto a la Coordinación y los docentes de las distintas disciplinas (Música, Teatro, Educación Física, Cine y Fotografía).',
      ],
      foto: 'taller-maestra-plantando',
      apartados: [
        { etiqueta: 'Acompañamiento', texto: 'Su tarea principal es observar, mediar y generar confianza para respetar los procesos individuales. Crea un marco de contención afectiva fundado en pautas claras, donde chicos y chicas se mueven con creciente autonomía y libertad. Además, conoce las dinámicas grupales, las rutinas del taller y genera un clima de búsqueda afín a la curiosidad infantil.' },
        { etiqueta: 'Evaluación formativa', texto: 'Nuestros modos de evaluación se basan en la observación constante de procesos y producciones. Este camino se sostiene mediante la comunicación a las familias a través de informes y encuentros.' },
        { etiqueta: 'Formación Docente Continua', texto: 'Apelamos al crecimiento constante de nuestro equipo. La práctica pedagógica brinda un contexto para el propio aprendizaje y desarrollo de cada persona, lo que favorece la reflexión sobre la praxis como núcleo de esta formación. La Escuelita valora la intuición y la vocación más allá de los saberes específicos previos. El conocimiento es acción y reflexión: un crecimiento personal y grupal tanto en niños y niñas como en docentes que se ven interpelados por la labor diaria.' },
      ],
    },
  ],
  // Interludios entre ejes (frases generales, textuales de la lista de la escuela).
  interludios: [
    { despuesDe: 'la-concepcion-del-nino', frase: 'Mirar la educación desde la sensibilidad del arte es mirarla como un despertar.', foto: 'patio-regando-cantero' },
    { despuesDe: 'expresion-aprendizaje', frase: 'Para nosotros, educar es una profunda responsabilidad social y humana.', foto: 'primaria-septimo-acompana' },
  ],
};
