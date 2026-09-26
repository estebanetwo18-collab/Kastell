import { site } from "./site";

/** Construye un enlace wa.me con un mensaje precargado. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Mensajes precargados por sección. Mantenerlos aquí facilita
 * editarlos (y traducirlos en el futuro) sin tocar componentes.
 */
export const waMessages = {
  general: "Hola Kastell, me gustaría diseñar una experiencia en Costa Rica.",
  header: "Hola Kastell, quiero cotizar una experiencia en Costa Rica.",
  hero: "Hola Kastell, quiero diseñar mi próximo viaje a Costa Rica. ¿Me ayudan?",
  stats: "Hola Kastell, me gustaría saber cómo trabajan para diseñar un viaje a la medida.",
  difference: "Hola Kastell, quiero conocer más sobre su forma de trabajar.",
  testimonials: "Hola Kastell, vi las experiencias de sus clientes y quiero vivir la mía.",
  sustainability: "Hola Kastell, me interesa un viaje sostenible y con comunidades locales.",
  finalCta: "Hola Kastell, estoy listo para mi próxima experiencia. ¿Conversamos?",
  about: "Hola Kastell, me encantaría conocer más sobre ustedes y su forma de trabajar.",
  services: "Hola Kastell, quiero información sobre sus servicios.",
  experiences: "Hola Kastell, quiero ver opciones de experiencias en Costa Rica.",
  weddings: "Hola, quiero información para mi boda destino en Costa Rica.",
  events: "Hola Kastell, quiero organizar un evento privado o social.",
  corporate: "Hola Kastell, quiero cotizar un viaje corporativo o de incentivos.",
  graduation: "Hola Kastell, quiero organizar una fiesta de graduación.",
  b2b: "Hola Kastell, represento a una agencia / tour operador y me interesa trabajar con ustedes.",
  contact: "Hola Kastell, les escribo desde su sitio web.",
  footer: "Hola Kastell, les escribo desde su sitio web.",
  floating: "Hola Kastell, les escribo desde su sitio web y quiero más información.",
} as const;
