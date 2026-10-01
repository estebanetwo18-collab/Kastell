import type { ExperiencePackage } from "../types";

/**
 * ─────────────────────────────────────────────────────────────
 * COSTA RICA ONE DAY — excursiones de un día
 * Fuente: "Paquetes Kastell 27.pdf", página 4. La fuente solo trae nombre y precio:
 * no se agregaron horarios, inclusiones ni descripciones.
 * Todas se muestran en /experiencias/excursiones-de-un-dia (ancla = slug).
 * ─────────────────────────────────────────────────────────────
 */

const TOUR_PAGE = "/experiencias/excursiones-de-un-dia";

type TourInput = {
  slug: string;
  title: string;
  destinations: string[];
  amount: number;
  vat: "plus" | "unspecified";
  half?: boolean;
  image: { src: string; alt: string };
  imagePosition?: string;
  reviewNotes?: string[];
  needsConfirmation?: boolean;
};

function tour(t: TourInput): ExperiencePackage {
  return {
    slug: t.slug,
    kind: "tour",
    eyebrow: "Excursión de un día",
    title: t.title,
    summary: `Excursión de ${t.half ? "medio día" : "un día"}: ${t.destinations.join(", ")}.`,
    categories: ["excursiones"],
    types: ["aventura", "naturaleza"],
    destinations: t.destinations,
    destinationLabel: t.destinations.join(" · "),
    durationLabel: t.half ? "Medio día" : "1 día",
    dateStatus: "not-provided",
    // La fuente no dice "por persona" en las excursiones: no se asume.
    price: { amount: t.amount, currency: "USD", per: "", vat: t.vat },
    image: t.image,
    imagePosition: t.imagePosition,
    availabilityStatus: "on-request",
    needsConfirmation: t.needsConfirmation ?? false,
    reviewNotes: t.reviewNotes,
    href: `${TOUR_PAGE}#${t.slug}`,
    whatsappMessage: `Hola Kastell, quiero información de la excursión "${t.title}".`,
  };
}

// TODO: reemplazar las fotos de stock por fotos reales de cada excursión.
const ISLA = { src: "/images/paquetes/stock-isla.jpg", alt: "Isla verde rodeada de aguas turquesa" };
const MONTANA = { src: "/images/paquetes/stock-lago-montana.jpg", alt: "Montañas reflejadas en un lago" };
const CASCADA = { src: "/images/paquetes/stock-cascada.jpg", alt: "Cascada entre vegetación tropical" };
const PUENTES = { src: "/images/puentes-colgantes.jpg", alt: "Puente colgante entre montañas y bosque" };
const RIO = { src: "/images/paquetes/stock-rio-palmeras.jpg", alt: "Río rodeado de palmeras en la selva tropical" };
const BOSQUE = { src: "/images/sostenibilidad-bosque.jpg", alt: "Sendero en un bosque tropical iluminado por el sol" };

export const tourPackages: ExperiencePackage[] = [
  tour({ slug: "isla-tortuga", title: "Isla Tortuga", destinations: ["Isla Tortuga"], amount: 195, vat: "plus", image: ISLA }),
  tour({
    slug: "irazu-orosi-lankester",
    title: "Volcán Irazú, Valle de Orosi y Lankester",
    destinations: ["Volcán Irazú", "Valle de Orosi", "Lankester"],
    amount: 165,
    vat: "plus",
    image: MONTANA,
    reviewNotes: ["El brief escribe 'Lancaster'; el PDF dice 'Lankester' (Jardín Botánico Lankester). Se usó la grafía del PDF."],
  }),
  tour({ slug: "irazu-medio-dia", title: "Volcán Irazú medio día", destinations: ["Volcán Irazú"], amount: 135, vat: "plus", half: true, image: MONTANA }),
  tour({
    slug: "combo-doka-poas-la-paz",
    title: "Combo Doka, Poás y Cataratas La Paz",
    destinations: ["Doka", "Volcán Poás", "Cataratas La Paz"],
    amount: 165,
    vat: "plus",
    image: PUENTES,
    reviewNotes: ["INCONSISTENCIA DE PRECIOS: este combo (3 atracciones) cuesta $165, menos que 'Doka y Volcán Poás' ($175, 2 atracciones) y lo mismo que 'Cataratas La Paz' solo ($165). Validar con el cliente."],
    needsConfirmation: true,
  }),
  tour({
    slug: "doka-poas",
    title: "Doka y Volcán Poás",
    destinations: ["Doka", "Volcán Poás"],
    amount: 175,
    vat: "plus",
    image: RIO,
    reviewNotes: ["Cuesta $175, más que el combo Doka + Poás + La Paz ($165). Validar."],
    needsConfirmation: true,
  }),
  tour({
    slug: "cataratas-la-paz",
    title: "Cataratas La Paz",
    destinations: ["Cataratas La Paz"],
    amount: 165,
    vat: "unspecified",
    image: CASCADA,
    needsConfirmation: true,
    reviewNotes: [
      "IVA NO INDICADO EN LA FUENTE: el PDF dice '$165.00' sin '+ iva' (las demás excursiones sí lo dicen). No se agregó '+ IVA'. Confirmar si es un olvido o si el precio ya incluye IVA.",
      "Mismo precio que el combo Doka + Poás + La Paz ($165).",
    ],
  }),
  tour({ slug: "guayabo-irazu", title: "Monumento Nacional Guayabo y Volcán Irazú", destinations: ["Monumento Nacional Guayabo", "Volcán Irazú"], amount: 199, vat: "plus", image: BOSQUE }),
];
