/**
 * Configuración central de Kastell Tours & Events.
 * Todos los datos de contacto, redes y URLs viven aquí:
 * cambiá un valor y se actualiza en todo el sitio.
 */
export const site = {
  name: "Kastell Tours & Events",
  shortName: "Kastell",
  legalDescription:
    "Destination Management Company especializada en diseño, coordinación y operación de experiencias de viaje personalizadas, bodas destino, viajes corporativos, incentivos y experiencias de lujo en Costa Rica.",
  tagline: "El arte de crear experiencias únicas",
  promise: "Cada detalle diseñado para transformar tu viaje en una experiencia extraordinaria.",
  essence: "Lujo, creatividad y conexión: experiencias que permanecen en la memoria.",
  foundedYear: 2021,
  locale: "es-CR",
  // TODO: confirmar el dominio definitivo con el cliente (también en .env: NEXT_PUBLIC_SITE_URL)
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.kastelltours.com").replace(/\/$/, ""),
  address: {
    city: "San José",
    country: "Costa Rica",
    countryCode: "CR",
  },
  whatsapp: {
    display: "+506 6407 2932",
    number: "50664072932",
  },
  phone: {
    display: "+506 6407 2932",
    href: "tel:+50664072932",
  },
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  social: {
    // TODO: pegar URL real de Instagram
    instagram: "https://www.instagram.com/",
    // TODO: pegar URL real de Facebook
    facebook: "https://www.facebook.com/",
  },
  /**
   * Sellos de certificación / afiliación que se muestran en el footer.
   * TODO: agregar logos de certificación cuando el cliente los tenga, p. ej.:
   * { name: "Instituto Costarricense de Turismo (ICT)", logo: "/brand/certificaciones/ict.png" }
   * { name: "Certificado para la Sostenibilidad Turística (CST)", logo: "/brand/certificaciones/cst.png" }
   */
  certifications: [] as { name: string; logo: string }[],
  sustainabilityPolicyPdf: "/docs/politica-sostenibilidad-kastell.pdf",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Bodas & Eventos", href: "/bodas-y-eventos" },
  { label: "Sostenibilidad", href: "/sostenibilidad" },
  { label: "Contacto", href: "/contacto" },
];
