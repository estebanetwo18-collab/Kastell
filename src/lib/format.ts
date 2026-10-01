export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

/**
 * Modo revisión: muestra notas internas (reviewNotes) y el panel /revision.
 * Se activa con NEXT_PUBLIC_REVIEW_MODE=1. NO activar en producción.
 */
export const REVIEW_MODE = process.env.NEXT_PUBLIC_REVIEW_MODE === "1";
