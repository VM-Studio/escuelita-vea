// INICIO — textos tal cual CONTENIDO-WEB.md (no reescribir).
export const inicio = {
  portada: {
    titular: 'El niño es cuerpo que siente y al sentir, piensa.',
    bajada:
      'Mirar la educación desde la sensibilidad del arte es mirarla como un despertar. Es habitar un lugar donde la mirada y la acción propician llegar a ser quien se es.',
    fotos: ['patio-abrazo-arbol', 'jardin-hojas-al-aire', 'jardin-ronda-arena-arboles'],
  },
  // Hero principal a pantalla completa: fotos que se van pasando (Jardín y Primaria conviven en el Inicio).
  // Las cinco que la escuela marcó con "SI" en la carpeta FOTOS PARA EL INICIO (rev. 19-11-2026).
  portadaFondo: ['fachada-mural-entrada', 'primaria-aula-tercero', 'sala5-ronda-sala', 'sala4-dibujo-arbol', 'jardin-pintura-murales'],
  presentacion: {
    nombre: 'La Escuelita',
    fundada: 'Fundada por la profesora Marta Calvo en 1959',
    // Portada (rev. 25-11-2026: se saca «67 años en la Educación por el Arte»; queda La Escuelita, la bajada y la frase)
    bajadaPortada: 'Centro de expresión infantil y espacio de formación continua',
    frasePortada: 'Un espacio donde los sentidos cobran sentido',
    jardin: { texto: 'Primer Jardín Argentino de Educación por el Arte', anio: '1959' },
    primaria: { texto: 'Instituto La Escuelita, Escuela Primaria de Educación a través del Arte', anio: '1997' },
  },
  bienvenida: {
    texto:
      'La escuela es un espacio donde las personas transcurren buena parte de sus vidas. Allí se despliegan modos de aprendizaje y de interacción que dejan huellas y marcas entrañables. Para nosotros, educar es una profunda responsabilidad social y humana. Este es nuestro compromiso.',
    foto: 'mural-la-escuelita',
  },
  interludio: {
    frase: 'El juego y el arte son su lenguaje natural.',
    // Carrusel circular (juego y arte): fotos del Jardín, ubicadas en el Inicio
    fotos: [
      'patio-ronda-arena-sombra', 'plastica-masa-muchas-manos', 'juego-paracaidas', 'musica-instrumentos',
      'plastica-tinta-pez', 'patio-tobogan-cenital', 'juego-tela-azul', 'sala3-espiral-tierra',
      'patio-baldes-cenital', 'plastica-arcilla-manos', 'edfisica-pelota-palmeras', 'sala2-tunel-arena',
    ],
  },
  lineaDeTiempo: {
    titulo: '67 años en la educación por el arte',
    bajada: 'Espacio educativo fundado por la profesora Marta Calvo en 1959.',
    hitos: [
      { anio: '1959', texto: 'Primer Jardín Argentino de Educación por el Arte', fotos: ['historica-dibujo-pared', 'historica-manos-pintura'] },
      { anio: '1997', texto: 'Instituto La Escuelita. Escuela Primaria de Educación a través del Arte.', fotos: ['primaria-recreo-sombra-arena'] },
    ],
  },
  ejes: {
    titulo: 'Nuestros ejes pedagógicos',
    items: [
      {
        titulo: 'Una mirada sobre las infancias',
        texto: [
          'La Escuelita es una forma de entender la educación que reconoce a cada niño y cada niña como una persona singular, con sus propios tiempos, intereses, necesidades y maneras de descubrir el mundo.',
          'Desde esta mirada, el acompañamiento de los adultos —familias y maestros— es fundamental. La educación se construye en el encuentro con otros, a través de vínculos que sostienen y enriquecen el crecimiento de cada niño y cada niña.',
        ],
        // Una de las opciones enviadas por la escuela (carpeta EJES PEDAGÓGICOS: 4-PLAST)
        foto: 'jardin-pintura-mesa-azul',
      },
      {
        titulo: 'Del Jardín a la Escuela Primaria',
        texto: [
          'La propuesta pedagógica desarrollada originalmente en el Jardín se extendió a la Escuela Primaria en 1997, dando continuidad a una misma manera de concebir la educación.',
          'Esta ampliación permitió integrar los contenidos curriculares de la enseñanza primaria con los principios pedagógicos que dieron origen a La Escuelita, acompañando a los chicos en nuevas etapas de su desarrollo y aprendizaje.',
        ],
        foto: 'primaria-septimo-y-primero',
      },
      {
        titulo: 'El taller como forma de cotidianidad',
        texto: [
          'El taller es nuestra forma cotidiana de enseñar y aprender. Un espacio donde los chicos exploran, experimentan, crean, se hacen preguntas y buscan respuestas, poniendo en juego sus ideas, sus emociones y sus conocimientos.',
          'En esta dinámica, el arte no constituye una actividad aislada, sino que atraviesa las distintas experiencias educativas. El hacer, el sentir y el pensar se integran en procesos de aprendizaje que promueven la participación, el intercambio y la construcción colectiva del conocimiento.',
        ],
        foto: 'taller-pintura-mesa',
      },
      {
        titulo: 'Una propuesta en permanente crecimiento que deja huella en la comunidad',
        texto: [
          'Hoy, el deseo de su fundadora y de su equipo interdisciplinario es que este modelo pedagógico propio, singular e innovador siga en crecimiento. Buscamos que se expanda hacia sectores cada vez más amplios y variados de la sociedad para potenciar su lazo y cercanía con la comunidad.',
        ],
        foto: 'musica-patio-familias',
      },
    ],
  },
  // Materiales del taller, textual de "El gesto espontáneo y sus materias" (Jardín).
  materiales: ['crayones', 'masa', 'témpera', 'arcilla', 'tinta china', 'anilinas', 'collage'],
  comunidadFotos: ['primaria-pena-noche', 'jardin-encuentro-familias-noche', 'primaria-campamento', 'primaria-kermese-carrera'],
  cierreFoto: 'jardin-abrazo-arena',
};
