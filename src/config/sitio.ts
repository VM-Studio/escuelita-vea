// Datos que se repiten en todo el sitio. Cambiar acá cambia en todas las páginas.

export const SITIO = {
  nombre: 'La Escuelita',
  nombreCompleto: 'La Escuelita · V.E.A.',
  url: 'https://laescuelitavea.org.ar',
  fundadora: 'Marta Calvo',
  anioFundacion: 1959,
  anioPrimaria: 1997,
  anioVEA: 1992,
  aniosTrayectoria: 67, // "67 años en la Educación por el Arte" (texto institucional)
  direccion: {
    calle: 'Jorge Newbery 2950',
    ciudad: 'C.A.B.A.',
    cp: '1426',
    texto: 'Jorge Newbery 2950, C.A.B.A. (CP 1426)',
    mapsQuery: 'Jorge Newbery 2950, C1426 CABA, Argentina',
  },
  // Fijo de la web anterior: NO se publica hasta que la escuela lo confirme.
  telefonoFijo: { visible: false, texto: '+54 11 3968-9929', tel: '+541139689929' },
} as const;

export const NIVELES = {
  jardin: {
    nombre: 'Jardín',
    nombreLargo: 'Nivel Inicial (Jardín)',
    telefono: '+54 9 11 7369-4297',
    tel: '+5491173694297',
    whatsapp: 'https://wa.me/5491173694297',
    mail: 'info@laescuelitavea.org.ar',
    ruta: '/jardin/',
  },
  primaria: {
    nombre: 'Primaria',
    nombreLargo: 'Nivel Primario',
    telefono: '+54 9 11 3092-1927',
    tel: '+5491130921927',
    whatsapp: 'https://wa.me/5491130921927',
    mail: 'institutolaescuelita@gmail.com',
    ruta: '/primaria/',
  },
} as const;

// Redes: la web anterior tenía los íconos pero sin enlaces reales (#facebook, #instagram, #youtube).
// Cuando la escuela pase las URL, completarlas acá: los íconos aparecen solos.
export const REDES: { nombre: 'Instagram' | 'Facebook' | 'YouTube'; url: string }[] = [
  { nombre: 'Instagram', url: '' },
  { nombre: 'Facebook', url: '' },
  { nombre: 'YouTube', url: '' },
];

// Videos de Instagram que la escuela pidió sumar a la web (documento "Contenido de Inst que puede servir
// para la web", nov. 2026). Se alojan en public/videos/ (portada .jpg + .mp4). Los títulos son los textos
// que aparecen en el propio video o en su publicación.
export const VIDEOS = {
  conocenos: { archivo: 'conocenos', titulo: '¿Querés saber más sobre nosotros?', instagram: 'https://www.instagram.com/reel/DFtXQ3TMltf/' },
  desde1959: { archivo: 'desde-1959', titulo: '1959 · Hoy · Y seguimos creciendo', instagram: 'https://www.instagram.com/reel/DPM1PGaEvvk/' },
  primerDiaJardin: { archivo: 'primer-dia-jardin', titulo: 'Primer día en el Jardín', instagram: 'https://www.instagram.com/reel/DGi8-qlB-Q1/' },
  jardin: { archivo: 'jardin-educar-es-sacar', titulo: 'La Escuelita Jardín, desde 1959', instagram: 'https://www.instagram.com/reel/DVRh47SDAkw/' },
  comunidad: { archivo: 'comunidad-cierre-ciclo', titulo: 'Cerrando el ciclo lectivo Nº 65', instagram: 'https://www.instagram.com/reel/DEGYuaatcOo/' },
  // Historia destacada de Instagram: no se puede descargar ni insertar sin iniciar sesión; va como enlace.
  reconocimientoMartaCalvo: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDA5MjcyMjA3NDc3MTc5?story_media_id=3475384103585750305_44949379596',
} as const;

// Interruptores de contenido pendiente de aprobación.
export const PUBLICAR = {
  videoRapDelLitio: false, // hasta confirmar autorización y grado
  testimonios: false, // hasta tener testimonios reales
} as const;

export const NAV = [
  {
    texto: 'La Escuelita',
    // «La Escuelita» lleva al Inicio; la flechita abre las páginas de La Escuelita (pedido rev. 25-11-2026)
    href: '/',
    activoEn: ['/', '/la-escuelita/'],
    hijos: [
      // Orden pedido por la escuela (rev. 19-11-2026). La cronología queda como botón opcional dentro de Nuestra historia.
      { texto: 'Nuestra Historia', href: '/la-escuelita/historia/' },
      { texto: 'Nuestra Identidad', href: '/la-escuelita/' },
      { texto: 'Nuestro Equipo', href: '/la-escuelita/equipo/' },
    ],
  },
  {
    texto: 'Proyecto Pedagógico',
    href: '/proyecto-pedagogico/',
    // Desplegables pedidos por la escuela (rev. 19-11-2026): los cuatro ejes fundamentales
    hijos: [
      { texto: 'Concepción del niño', href: '/proyecto-pedagogico/#la-concepcion-del-nino' },
      { texto: 'Educación por el arte', href: '/proyecto-pedagogico/#educacion-por-el-arte' },
      { texto: 'Expresión/aprendizaje', href: '/proyecto-pedagogico/#expresion-aprendizaje' },
      { texto: 'Rol del docente', href: '/proyecto-pedagogico/#el-rol-del-docente' },
    ],
  },
  { texto: 'Jardín', href: '/jardin/' },
  { texto: 'Primaria', href: '/primaria/' },
  { texto: 'Nuestra Comunidad', href: '/comunidad/' },
  { texto: 'Contacto / Admisión', href: '/contacto/' },
] as const;
