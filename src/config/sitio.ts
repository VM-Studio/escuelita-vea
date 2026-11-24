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

// Interruptores de contenido pendiente de aprobación.
export const PUBLICAR = {
  videoRapDelLitio: false, // hasta confirmar autorización y grado
  testimonios: false, // hasta tener testimonios reales
} as const;

export const NAV = [
  {
    texto: 'La Escuelita',
    href: '/la-escuelita/',
    hijos: [
      // Orden pedido por la escuela (rev. 19-11-2026). La cronología queda como botón opcional dentro de Nuestra historia.
      { texto: 'Nuestra Identidad', href: '/la-escuelita/' },
      { texto: 'Nuestra Historia', href: '/la-escuelita/historia/' },
      { texto: 'Nuestro Equipo', href: '/la-escuelita/equipo/' },
    ],
  },
  { texto: 'Proyecto Pedagógico', href: '/proyecto-pedagogico/' },
  { texto: 'Jardín', href: '/jardin/' },
  { texto: 'Primaria', href: '/primaria/' },
  { texto: 'Nuestra Comunidad', href: '/comunidad/' },
  { texto: 'Contacto / Admisión', href: '/contacto/' },
] as const;
