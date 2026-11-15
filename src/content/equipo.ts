// NUESTRO EQUIPO — textos tal cual CONTENIDO-WEB.md.
export const equipo = {
  titulo: 'Nuestro equipo',
  fundadora: { cargo: 'Fundadora', nombre: 'Profesora Marta Calvo' },
  asesora: { cargo: 'Asesora institucional', nombre: 'Nora Cassinelli' },
  niveles: [
    {
      nivel: 'Nivel Inicial (Jardín)',
      clave: 'jardin',
      personas: [
        { cargo: 'Dirección', nombre: 'Cristina Castagnino' },
        { cargo: 'Vicedirección', nombre: 'Mercedes Ramognini' },
        { cargo: 'Coordinación Pedagógica', nombre: 'Anastasia Moench Pla' },
        { cargo: 'Psicóloga', nombre: 'Lucía Rogari' },
      ],
    },
    {
      nivel: 'Nivel Primario',
      clave: 'primaria',
      personas: [
        { cargo: 'Dirección', nombre: 'María Laura Pérez' },
        { cargo: 'Vicedirección', nombre: 'Marina Rusiñol' },
        { cargo: 'Coordinación Pedagógica', nombre: 'Guillermina Eizmendi' },
        { cargo: 'Psicólogas', nombre: 'Alicia Cuestas y Luciana Cantisani' },
      ],
    },
  ],
  compromiso: {
    titulo: 'Nuestro compromiso docente',
    texto: [
      'Una clara definición de roles garantiza el logro de los propósitos institucionales y los objetivos específicos para cada taller y cada grado.',
      'La articulación entre Arte, Educación y Salud guía nuestro abordaje interdisciplinario. Esta mirada singular potencia el entrecruzamiento de disciplinas a través de la Educación por el Arte, y concibe a la escuela como un espacio fundamental de prevención, crecimiento y cuidado.',
    ],
  },
  perfiles: {
    titulo: 'Organización y perfiles pedagógicos',
    items: [
      {
        id: 'coordinacion',
        boton: 'La Coordinación',
        copeteEtiqueta: 'El Equipo de Coordinación',
        copete: 'Conducción pedagógica e interdisciplinaria que promueve la coherencia institucional y el lazo de confianza con las familias.',
        titulo: 'El Equipo de Coordinación',
        intro:
          'La conducción pedagógica de cada nivel está a cargo de un equipo interdisciplinario integrado por la Directora, la Vicedirectora, la Coordinadora Pedagógica y la Psicóloga.',
        puntos: [
          { etiqueta: 'Coherencia interna', texto: 'Conecta, promueve y evalúa la praxis docente diaria.' },
          { etiqueta: 'Resolución activa', texto: 'Resuelve los dilemas cotidianos y planifica secuencias junto a actividades integradas.' },
          { etiqueta: 'Vínculo y mediación', texto: 'Funciona como un tercero confiable en el estrecho lazo familia/hijo. Este equipo acompaña el proceso social y contiene a los adultos en su rol de principales educadores para favorecer el crecimiento de niños y niñas.' },
        ],
      },
      {
        id: 'docentes',
        boton: 'Los Docentes',
        copeteEtiqueta: 'El Rol del Docente',
        copete: 'Coordinadores grupales y mediadores afectivos que transforman el taller en un espacio cotidiano de libertad, autonomía y aprendizaje.',
        titulo: 'Rol Docente',
        intro:
          'El maestro es el coordinador del grupo y el mediador eficaz que concreta cotidianamente el quehacer educativo. Organiza el taller según el hacer específico y trabaja en equipo junto a la Coordinación y los docentes de las distintas disciplinas (Música, Juego Dramático/Teatro, Educación Física, Cine y Fotografía).',
        puntos: [
          { etiqueta: 'Contención afectiva', texto: 'Crea un marco fundado en pautas claras donde chicos y chicas se mueven con creciente autonomía y libertad. El docente sostiene los acuerdos de convivencia, propuestos en primera instancia por el adulto, defendidos por el grupo y recreados con sus propios matices.' },
          { etiqueta: 'Clima de búsqueda', texto: 'Genera un entorno afín a la curiosidad propia de la infancia en un sistema de ida y vuelta constante.' },
          { etiqueta: 'Dominio técnico', texto: 'Posee un profundo conocimiento de las dinámicas grupales, las rutinas y las técnicas específicas del taller.' },
        ],
      },
      {
        id: 'psicologico',
        boton: 'Equipo Psicológico',
        copeteEtiqueta: 'Modelo de Intervención Psicológica',
        copete: 'Una mirada pionera y preventiva integrada al día a día escolar, que acompaña el crecimiento de las infancias y sus entornos.',
        titulo: 'Modelo de Intervención Psicológica',
        intro:
          'La institución fue pionera en incluir la figura del psicólogo como parte necesaria del Equipo de Conducción, tanto en el Jardín como en la Primaria. Nuestro modelo se aleja del tradicional "gabinete psicológico" reactivo: aquí la psicología está integrada al quehacer cotidiano del niño, del docente y de la familia.',
        puntos: [
          { etiqueta: 'Enfoque preventivo', texto: 'Trabaja en contacto directo y diario mediante la observación, la detección precoz y el acompañamiento ante obstáculos o conflictos antes de su instalación definitiva.' },
          { etiqueta: 'Participación estratégica', texto: 'Integra el Equipo de Coordinación y aporta una perspectiva clave para la reflexión grupal e individual.' },
          { etiqueta: 'Dispositivos de acompañamiento', texto: 'Sostiene un lazo continuo con el entorno familiar a través de entrevistas, grupos de reflexión, asesoramiento y reuniones individuales o grupales.' },
        ],
      },
    ],
  },
};
