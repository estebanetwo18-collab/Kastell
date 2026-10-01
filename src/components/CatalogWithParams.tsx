"use client";

import { useSearchParams } from "next/navigation";
import { ExperienceCatalog } from "./ExperienceCatalog";

/** Permite abrir el catálogo ya filtrado: /experiencias?categoria=cruceros */
export function CatalogWithParams() {
  const params = useSearchParams();
  return <ExperienceCatalog initialCategory={params.get("categoria") ?? undefined} />;
}
