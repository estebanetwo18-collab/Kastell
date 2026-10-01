import type { ExperiencePackage, PackageCategory, PackagePrice } from "../types";
import { costaRicaPackages } from "./costa-rica";
import { internationalPackages } from "./internacionales";
import { tourPackages } from "./excursiones";

export { packageCategories } from "./categories";

/**
 * ─────────────────────────────────────────────────────────────
 * CATÁLOGO COMPLETO "PAQUETES Y EXPERIENCIAS"
 * El orden de este arreglo es el orden en la página.
 * Para agregar un paquete: sumarlo al archivo de su categoría
 * (costa-rica.ts, internacionales.ts o excursiones.ts). La tarjeta,
 * el filtro, la página de detalle, el menú y el sitemap se generan solos.
 * ─────────────────────────────────────────────────────────────
 */
export const packages: ExperiencePackage[] = [...costaRicaPackages, ...internationalPackages, ...tourPackages];

/** Paquetes con página de detalle propia (/experiencias/<slug>) */
export const itineraryPackages = packages.filter((p) => p.kind === "itinerary");
export const tourList = packages.filter((p) => p.kind === "tour");
export const featuredPackage = packages.find((p) => p.featured) ?? packages[0];
export const popularPackages = packages.filter((p) => p.popular);

export function getPackage(slug: string) {
  return itineraryPackages.find((p) => p.slug === slug);
}

export function countByCategory(id: PackageCategory) {
  return packages.filter((p) => p.categories.includes(id)).length;
}

export const TOUR_PAGE_PATH = "/experiencias/excursiones-de-un-dia";

/** Ruta de "Ver detalles" de un paquete */
export function packageHref(p: ExperiencePackage) {
  return p.href ?? `/experiencias/${p.slug}`;
}

/** Texto del indicador de IVA según la fuente. "unspecified" → null (no se afirma nada). */
export function vatLabel(vat: PackagePrice["vat"]) {
  return vat === "plus" ? "+ IVA" : vat === "included" ? "IVA incluido" : null;
}

/** Precio mínimo (para datos estructurados) considerando acomodaciones */
export function lowestPrice(p: ExperiencePackage) {
  const all = [...(p.occupancyOptions?.map((o) => o.amount) ?? []), ...(p.price ? [p.price.amount] : [])];
  return all.length ? Math.min(...all) : undefined;
}

export function highestPrice(p: ExperiencePackage) {
  const all = [...(p.occupancyOptions?.map((o) => o.amount) ?? []), ...(p.price ? [p.price.amount] : [])];
  return all.length ? Math.max(...all) : undefined;
}
