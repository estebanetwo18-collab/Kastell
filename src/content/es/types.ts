export type ImageAsset = {
  src: string;
  alt: string;
};

export type ExperienceType =
  | "romance"
  | "aventura"
  | "naturaleza"
  | "bienestar"
  | "bodas"
  | "corporativo"
  | "lujo"
  | "multidestino";

export type ItineraryDay = {
  /** Ej. "Día 1", "Días 4–5" o "2 noches" */
  label: string;
  title: string;
  location?: string;
  /** Si falta, el día se muestra como línea simple (sin detalle expandible) */
  description?: string;
  highlights?: string[];
};

/** Categorías del catálogo "Paquetes y experiencias". Un paquete puede tener varias. */
export type PackageCategory = "costa-rica" | "internacionales" | "mexico" | "cruceros" | "excursiones";

/** Estado del IVA según la fuente: "plus" = + IVA, "included" = IVA incluido, "unspecified" = la fuente no lo indica */
export type VatStatus = "plus" | "included" | "unspecified";

export type PackagePrice = {
  amount: number;
  currency: "USD";
  /** "desde" cuando la fuente dice "Desde" */
  prefix?: "desde";
  /** Texto tal como aplica el precio, p. ej. "por persona" */
  per: string;
  /** Aclaración de ocupación, p. ej. "en ocupación doble" */
  basis?: string;
  vat: VatStatus;
  note?: string;
};

export type OccupancyPrice = { label: string; amount: number };

export type DateStatus = "confirmed" | "tbc" | "not-provided";

export type ExperiencePackage = {
  /** Identificador estable; también es la URL: /experiencias/<slug> */
  slug: string;
  /** "itinerary" = página de detalle propia · "bespoke" = línea a la medida que enlaza a otra sección ·
   *  "tour" = excursión de un día (se detalla en /experiencias/excursiones-de-un-dia) */
  kind: "itinerary" | "bespoke" | "tour";
  title: string;
  eyebrow: string;
  summary: string;
  description?: string;
  categories: PackageCategory[];
  types: ExperienceType[];
  /** Destinos / ruta como chips */
  destinations: string[];
  /** Texto de destino resumido para la tarjeta, p. ej. "San José · Arenal" */
  destinationLabel?: string;
  durationDays?: number;
  durationNights?: number;
  /** Texto de duración cuando no hay días/noches exactos, p. ej. "A tu medida" o "1 día" */
  durationLabel?: string;
  /** Fecha visible. Si dateStatus es "tbc" se muestra "Fecha por confirmar". */
  dateLabel?: string;
  dateStatus: DateStatus;
  price?: PackagePrice;
  /** Precios por acomodación (sencilla, doble, triple, niño) */
  occupancyOptions?: OccupancyPrice[];
  image: ImageAsset;
  /** Posición del recorte de la imagen en tarjetas (CSS object-position) */
  imagePosition?: string;
  gallery?: ImageAsset[];
  highlights?: string[];
  includes?: string[];
  /** Texto cuando la fuente no trae inclusiones (se muestra en lugar de la lista) */
  includesNote?: string;
  excludes?: string[];
  /** "days" = itinerario día a día · "nights" = ruta con noches por destino */
  itineraryKind?: "days" | "nights";
  itinerary?: ItineraryDay[];
  /** Aclaración visible bajo el itinerario */
  itineraryNote?: string;
  conditions?: string[];
  /** Disponibilidad: nunca se asume. "on-request" = se consulta con Kastell. */
  availabilityStatus: "on-request";
  /** true = hay datos que deben validarse antes de considerarlos finales */
  needsConfirmation: boolean;
  /** Notas INTERNAS para revisión (solo se muestran con NEXT_PUBLIC_REVIEW_MODE=1) */
  reviewNotes?: string[];
  whatsappMessage: string;
  /** Ruta a la que lleva "Ver detalles" (por defecto /experiencias/<slug>) */
  href?: string;
  featured?: boolean;
  /** Aparece en el pie de página */
  popular?: boolean;
};

export type Pillar = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "gem" | "heart" | "briefcase" | "compass" | "route";
  image: ImageAsset;
  whatsappMessage: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  source: string;
  context?: string;
};
