import type { Testimonial } from "./types";

/**
 * Solo se publican testimonios reales. Para agregar uno nuevo,
 * copiá el objeto y completá quote/author/source.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Sin palabras, un día mágico. Gracias por hacer posible este sueño y un recuerdo inolvidable. Mari, gracias por todo, jamás vamos a olvidar este día.",
    author: "Javier Álvarez",
    source: "Recomendación en Facebook",
    context: "Celebración especial",
  },
  // TODO: testimonio real del cliente
  // { quote: "…", author: "Nombre Apellido", source: "Google / Facebook / Tripadvisor", context: "Boda destino" },
  // TODO: testimonio real del cliente
  // { quote: "…", author: "Nombre Apellido", source: "Google / Facebook / Tripadvisor", context: "Luna de miel" },
  // TODO: testimonio real del cliente
  // { quote: "…", author: "Empresa / Nombre", source: "Referencia directa", context: "Viaje de incentivos" },
];
