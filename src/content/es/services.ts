export type Service = {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  whatsappMessage: string;
};

export const services: Service[] = [
  {
    id: "itinerarios",
    title: "Diseño de itinerarios personalizados",
    description:
      "Escuchamos cómo sueñas tu viaje y lo convertimos en un itinerario claro, equilibrado y lleno de momentos memorables.",
    details: ["Propuesta a la medida en función de tus intereses", "Ritmo y tiempos pensados para disfrutar", "Ajustes hasta que se sienta perfecto"],
    icon: "map",
    whatsappMessage: "Hola Kastell, quiero que me diseñen un itinerario personalizado.",
  },
  {
    id: "hoteles",
    title: "Hoteles boutique y de lujo",
    description:
      "Seleccionamos y reservamos hospedajes que conocemos, desde refugios en la selva hasta villas frente al mar.",
    details: ["Hoteles boutique, resorts y villas privadas", "Habitaciones elegidas según tu estilo", "Amenidades y sorpresas coordinadas"],
    icon: "bed-double",
    whatsappMessage: "Hola Kastell, busco hospedaje boutique o de lujo en Costa Rica.",
  },
  {
    id: "transporte",
    title: "Transporte privado",
    description:
      "Traslados cómodos, puntuales y seguros con conductores profesionales, para que el camino también sea parte del viaje.",
    details: ["Traslados aeropuerto – hotel", "Vehículos privados para cada trayecto", "Coordinación de horarios en todo el itinerario"],
    icon: "car",
    whatsappMessage: "Hola Kastell, necesito transporte privado en Costa Rica.",
  },
  {
    id: "tours",
    title: "Tours y excursiones",
    description:
      "Aventura, naturaleza, cultura, gastronomía y bienestar: experiencias guiadas que revelan la Costa Rica auténtica.",
    details: ["Aventura: canopy, cuadraciclos, puentes colgantes", "Naturaleza y cultura con guías locales", "Gastronomía y bienestar"],
    icon: "mountain",
    whatsappMessage: "Hola Kastell, quiero información sobre tours y excursiones.",
  },
  {
    id: "concierge",
    title: "Concierge de lujo",
    description:
      "Reservas especiales, bienestar, celebraciones sorpresa: un equipo atento a cada deseo durante tu estadía.",
    details: ["Reservas en restaurantes y experiencias exclusivas", "Experiencias de spa y bienestar", "Detalles y celebraciones sorpresa"],
    icon: "concierge-bell",
    whatsappMessage: "Hola Kastell, me interesa el servicio de concierge de lujo.",
  },
  {
    id: "bodas",
    title: "Bodas destino",
    description:
      "Diseño, producción y coordinación de bodas en Costa Rica, con una experiencia completa para la pareja y sus invitados.",
    details: ["Búsqueda de locaciones y proveedores", "Diseño y ambientación", "Logística de invitados y coordinación del día"],
    icon: "heart",
    whatsappMessage: "Hola, quiero información para mi boda destino en Costa Rica.",
  },
  {
    id: "corporativo",
    title: "Viajes corporativos e incentivos",
    description:
      "Programas de incentivo, reuniones y experiencias de equipo con logística impecable y un sello memorable.",
    details: ["Viajes de incentivo y premiación", "Reuniones, convenciones y lanzamientos", "Actividades de integración"],
    icon: "briefcase",
    whatsappMessage: "Hola Kastell, quiero cotizar un viaje corporativo o de incentivos.",
  },
  {
    id: "eventos",
    title: "Eventos privados y sociales",
    description:
      "Aniversarios, cumpleaños, fiestas de graduación y celebraciones especiales, organizados sin estrés para ti.",
    details: ["Fiestas de graduación", "Aniversarios, cumpleaños y reencuentros", "Producción, ambientación y coordinación"],
    icon: "party-popper",
    whatsappMessage: "Hola Kastell, quiero organizar un evento privado o social.",
  },
  {
    id: "sostenible",
    title: "Turismo sostenible y comunidades",
    description:
      "Experiencias responsables junto a comunidades locales, que dejan huella positiva en el destino y en quien lo visita.",
    details: ["Encuentros con comunidades y proyectos locales", "Prácticas responsables en zonas protegidas", "Proveedores comprometidos con el ambiente"],
    icon: "leaf",
    whatsappMessage: "Hola Kastell, me interesa un viaje sostenible y con comunidades locales.",
  },
];
