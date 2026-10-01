export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { mainNav } from "@/lib/site";
import { itineraryPackages } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = mainNav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.8,
  }));
  const pkgs = itineraryPackages.map((p) => ({
    url: `${site.url}/experiencias/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const extra = ["/experiencias/excursiones-de-un-dia", "/reservas-y-condiciones"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...pages, ...pkgs, ...extra];
}
