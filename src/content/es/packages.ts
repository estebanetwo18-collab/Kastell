import type { ExperiencePackage } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 * CATÁLOGO DE EXPERIENCIAS
 * Para agregar un itinerario nuevo, copiá el objeto de
 * "luna-de-miel-arenal-monteverde", cambiá el `slug` (será la URL:
 * /experiencias/<slug>) y editá los textos. La página de detalle,
 * los filtros, el sitemap y el menú se generan solos.
 * ─────────────────────────────────────────────────────────────
 */
export const packages: ExperiencePackage[] = [
  {
    slug: "luna-de-miel-arenal-monteverde",
    kind: "itinerary",
    featured: true,
    eyebrow: "Itinerario de autor",
    title: "Luna de miel entre volcanes y bosque nuboso",
    summary:
      "Cinco días para celebrar el amor entre aguas termales, lodo volcánico, puentes colgantes y el bosque nuboso de Monteverde.",
    description:
      "Diseñamos esta luna de miel para parejas que quieren vivir Costa Rica con intensidad y calma a la vez: amaneceres en la selva de San Carlos, la energía del Volcán Arenal, una cena especial bajo el vapor de las aguas termales y la emoción de volar sobre el bosque nuboso de Monteverde. Cada traslado, reserva y detalle queda en nuestras manos para que ustedes solo se dediquen a disfrutar.",
    types: ["romance", "aventura", "naturaleza", "bienestar"],
    destinations: ["San Carlos", "La Fortuna", "Monteverde"],
    durationDays: 5,
    durationNights: 4,
    priceFrom: 1565,
    currency: "USD",
    priceNote:
      "Precio de referencia por persona. Sujeto a cambios según temporada, disponibilidad y tamaño del grupo.",
    // TODO: reemplazar con foto real del paquete Luna de Miel
    image: {
      src: "/images/paquete-luna-de-miel.jpg",
      alt: "Cascada rodeada de selva tropical en Costa Rica",
    },
    gallery: [
      // TODO: reemplazar con fotos reales del itinerario
      { src: "/images/puentes-colgantes.jpg", alt: "Puente colgante sobre el bosque tropical" },
      { src: "/images/monteverde-bosque.jpg", alt: "Bosque nuboso con luz filtrada entre los árboles" },
      { src: "/images/resort-selva.jpg", alt: "Piscina de un hotel boutique rodeada de selva" },
    ],
    highlights: [
      "Baños de barro volcánico y piscinas termominerales",
      "Tour en cuadraciclo por los cráteres del Volcán Arenal",
      "Cena especial en Ecotermales",
      "Puentes colgantes sobre el dosel del bosque",
      "Canopy de 16 cables en Monteverde, con Superman subterráneo",
    ],
    includes: [
      "4 noches de hospedaje en hoteles seleccionados",
      "Cóctel de bienvenida y tres tiempos de alimentación a la carta en San Carlos",
      "Desayunos en Monteverde",
      "Tours y actividades descritos en el itinerario",
      "Coordinación integral y acompañamiento antes, durante y después del viaje",
    ],
    itinerary: [
      {
        label: "Día 1",
        title: "Selva, barro volcánico y aguas termales",
        location: "San Carlos",
        description:
          "Llegan a un refugio rodeado de selva tropical donde el ritmo lo marca la naturaleza. La tarde es para consentirse: baños de barro volcánico al aire libre y acceso a las piscinas termominerales.",
        highlights: [
          "Cóctel de bienvenida",
          "Tres tiempos de alimentación a la carta",
          "Caminata guiada a las 6:00 a.m. al Proyecto de Rescate del Patrimonio Ancestral Villa Maleku",
        ],
      },
      {
        label: "Día 2",
        title: "La huella del Volcán Arenal",
        location: "La Fortuna",
        description:
          "Por la mañana, un recorrido en cuadraciclo por los cráteres que dejó la erupción del Volcán Arenal en 1968, el río de lodo volcánico, el mirador al Lago Arenal y los cultivos tradicionales de La Fortuna. Al caer la noche, Ecotermales: baño en aguas termales y una cena especial para dos.",
        highlights: [
          "Tour de cuadraciclos por los cráteres de 1968",
          "Mirador al Lago Arenal",
          "Aguas termales y cena especial en Ecotermales",
        ],
      },
      {
        label: "Día 3",
        title: "Caminar entre las copas de los árboles",
        location: "La Fortuna",
        description:
          "Un recorrido de dos horas por los puentes colgantes, entre senderos de paisajes espectaculares, para descubrir la vida del bosque desde las alturas.",
        highlights: ["Tour de puentes colgantes (2 horas)", "Senderos con vistas panorámicas"],
      },
      {
        label: "Días 4 – 5",
        title: "Monteverde, el bosque nuboso",
        location: "Monteverde",
        description:
          "Dos días rodeados de naturaleza en uno de los bosques nubosos más famosos del mundo. La gran aventura: un canopy de 16 cables —cinco de ellos entre 467 m y 1 km de largo, a alturas de 75 a 150 m— con rappel, Tarzan swing, Superman en cable y el Superman subterráneo, un túnel de 240 m bajo la montaña.",
        highlights: [
          "Canopy de 16 cables con rappel y Tarzan swing",
          "Superman en cable y Superman subterráneo (túnel de 240 m)",
          "Hospedaje con desayuno incluido",
        ],
      },
    ],
    whatsappMessage: "Hola, quiero cotizar el paquete Luna de Miel (5 días / 4 noches: San Carlos, La Fortuna y Monteverde).",
  },
  {
    slug: "boda-destino-a-la-medida",
    kind: "bespoke",
    eyebrow: "Destination Weddings",
    title: "Tu boda destino en Costa Rica",
    summary:
      "De la propuesta de locación al último baile: diseñamos, coordinamos y operamos cada momento de tu boda y la experiencia de tus invitados.",
    types: ["bodas", "romance", "lujo"],
    destinations: ["Guanacaste", "Pacífico Central", "Valle Central"],
    durationLabel: "A tu medida",
    // TODO: reemplazar con foto real de una boda Kastell
    image: { src: "/images/pilar-bodas.jpg", alt: "Pareja de recién casados celebrando al aire libre" },
    whatsappMessage: "Hola, quiero información para mi boda destino en Costa Rica.",
    href: "/bodas-y-eventos",
  },
  {
    slug: "incentivos-corporativos",
    kind: "bespoke",
    eyebrow: "Corporate & Incentives",
    title: "Viajes de incentivo y reuniones de alto impacto",
    summary:
      "Programas para equipos y clientes clave: logística impecable, actividades que inspiran y momentos que fortalecen la cultura de tu empresa.",
    types: ["corporativo", "aventura", "lujo"],
    destinations: ["San José", "Guanacaste", "La Fortuna"],
    durationLabel: "A tu medida",
    // TODO: reemplazar con foto real de un evento corporativo Kastell
    image: { src: "/images/pilar-corporativo.jpg", alt: "Salón de conferencias preparado para un evento corporativo" },
    whatsappMessage: "Hola Kastell, quiero cotizar un viaje corporativo o de incentivos.",
    href: "/bodas-y-eventos#corporativo",
  },
  {
    slug: "costa-rica-multidestino",
    kind: "bespoke",
    eyebrow: "Multidestination Travel",
    title: "Costa Rica de costa a costa",
    summary:
      "Volcanes, bosque nuboso, playas del Pacífico y el Caribe en un solo viaje, con el mismo estándar de lujo y coherencia en cada parada.",
    types: ["multidestino", "naturaleza", "lujo"],
    destinations: ["La Fortuna", "Monteverde", "Guanacaste", "Caribe Sur"],
    durationLabel: "A tu medida",
    // TODO: reemplazar con foto real
    image: { src: "/images/pilar-multidestino.jpg", alt: "Vista aérea de una playa de aguas turquesa" },
    whatsappMessage: "Hola Kastell, quiero diseñar un viaje multidestino por Costa Rica.",
    href: "/contacto?experiencia=Multidestination",
  },
  {
    slug: "escapada-privada-de-lujo",
    kind: "bespoke",
    eyebrow: "Luxury Travel",
    title: "Escapada privada de lujo",
    summary:
      "Villas y hoteles boutique, traslados privados, bienestar y concierge: una Costa Rica íntima, exclusiva y hecha a tu ritmo.",
    types: ["lujo", "bienestar", "romance"],
    destinations: ["Guanacaste", "Pacífico Central"],
    durationLabel: "A tu medida",
    // TODO: reemplazar con foto real
    image: { src: "/images/pilar-luxury.jpg", alt: "Resort de lujo con piscina frente al mar" },
    whatsappMessage: "Hola Kastell, quiero diseñar una escapada privada de lujo en Costa Rica.",
    href: "/contacto?experiencia=Luxury%20Travel",
  },
];

export const itineraryPackages = packages.filter((p) => p.kind === "itinerary");
export const featuredPackage = packages.find((p) => p.featured) ?? packages[0];

export function getPackage(slug: string) {
  return itineraryPackages.find((p) => p.slug === slug);
}

export const allDestinations = Array.from(new Set(packages.flatMap((p) => p.destinations))).sort((a, b) =>
  a.localeCompare(b, "es")
);
