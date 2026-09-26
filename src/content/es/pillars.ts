import type { Pillar } from "./types";

export const pillars: Pillar[] = [
  {
    id: "luxury-travel",
    title: "Luxury Travel",
    subtitle: "Privado, exclusivo, tuyo",
    description:
      "Experiencias privadas y altamente personalizadas para viajeros que valoran la exclusividad, el confort y los detalles que nadie más ve.",
    icon: "gem",
    // TODO: reemplazar con foto real de Luxury Travel
    image: { src: "/images/pilar-luxury.jpg", alt: "Resort de lujo con piscina frente al mar" },
    whatsappMessage: "Hola Kastell, me interesa un viaje de lujo privado en Costa Rica.",
    href: "/servicios#concierge",
  },
  {
    id: "destination-weddings",
    title: "Destination Weddings",
    subtitle: "El sí más memorable",
    description:
      "Bodas destino para parejas de todo el mundo, con una ejecución impecable desde la primera visita hasta la última canción.",
    icon: "heart",
    // TODO: reemplazar con foto real de Destination Weddings
    image: { src: "/images/pilar-bodas.jpg", alt: "Recién casados celebrando junto a sus invitados" },
    whatsappMessage: "Hola, quiero información para mi boda destino en Costa Rica.",
    href: "/bodas-y-eventos",
  },
  {
    id: "corporate-incentives",
    title: "Corporate & Incentives",
    subtitle: "Equipos que se inspiran",
    description:
      "Viajes de motivación, reuniones y experiencias de alto impacto para empresas que quieren premiar, conectar e inspirar a su gente.",
    icon: "briefcase",
    // TODO: reemplazar con foto real de Corporate & Incentives
    image: { src: "/images/pilar-corporativo.jpg", alt: "Salón preparado para una conferencia corporativa" },
    whatsappMessage: "Hola Kastell, quiero cotizar un viaje corporativo o de incentivos.",
    href: "/bodas-y-eventos#corporativo",
  },
  {
    id: "tailor-made",
    title: "Tailor-Made Experiences",
    subtitle: "Diseñado desde cero",
    description:
      "Viajes creados por completo a la medida de tus intereses, tu estilo y tus expectativas. Ninguno se repite, porque ningún viajero es igual.",
    icon: "compass",
    // TODO: reemplazar con foto real de Tailor-Made Experiences
    image: { src: "/images/pilar-a-la-medida.jpg", alt: "Viajeros contemplando un paisaje al amanecer" },
    whatsappMessage: "Hola Kastell, quiero un viaje diseñado 100% a mi medida.",
    href: "/servicios#itinerarios",
  },
  {
    id: "multidestination",
    title: "Multidestination Travel",
    subtitle: "Un país, muchos mundos",
    description:
      "Rutas que conectan varios destinos bajo un mismo estándar de lujo y coherencia, sin costuras entre un lugar y el siguiente.",
    icon: "route",
    // TODO: reemplazar con foto real de Multidestination Travel
    image: { src: "/images/pilar-multidestino.jpg", alt: "Vista aérea de una costa tropical con botes" },
    whatsappMessage: "Hola Kastell, quiero diseñar un viaje multidestino por Costa Rica.",
    href: "/experiencias",
  },
];
