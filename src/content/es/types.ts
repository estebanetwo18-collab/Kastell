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
  /** Ej. "Día 1" o "Días 4–5" */
  label: string;
  title: string;
  location: string;
  description: string;
  highlights: string[];
};

export type ExperiencePackage = {
  slug: string;
  /** "itinerary" = itinerario publicado con día a día y página propia.
   *  "bespoke"   = línea de experiencia 100% a la medida (sin precio fijo). */
  kind: "itinerary" | "bespoke";
  title: string;
  eyebrow: string;
  summary: string;
  description?: string;
  types: ExperienceType[];
  destinations: string[];
  durationDays?: number;
  durationNights?: number;
  /** Texto de duración para experiencias a la medida */
  durationLabel?: string;
  priceFrom?: number;
  currency?: "USD";
  priceNote?: string;
  image: ImageAsset;
  gallery?: ImageAsset[];
  highlights?: string[];
  includes?: string[];
  itinerary?: ItineraryDay[];
  whatsappMessage: string;
  /** Ruta a la que lleva "Explorar" (por defecto /experiencias/[slug]) */
  href?: string;
  featured?: boolean;
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
