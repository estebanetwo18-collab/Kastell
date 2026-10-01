"use client";

import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { packageCategories, packages, type PackageCategory } from "@/content";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { PackageCard } from "./PackageCard";
import { WhatsAppIcon } from "./icons";

type Filter = "todos" | PackageCategory;

export function ExperienceCatalog({ initialCategory }: { initialCategory?: string }) {
  const valid = packageCategories.some((c) => c.id === initialCategory);
  const [filter, setFilter] = useState<Filter>(valid ? (initialCategory as PackageCategory) : "todos");

  // Refleja el filtro en la URL (?categoria=) para poder compartir la vista filtrada
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (filter === "todos") url.searchParams.delete("categoria");
      else url.searchParams.set("categoria", filter);
      window.history.replaceState(null, "", url.toString());
    } catch {
      /* noop */
    }
  }, [filter]);

  const results = useMemo(() => (filter === "todos" ? packages : packages.filter((p) => p.categories.includes(filter))), [filter]);
  const active = packageCategories.find((c) => c.id === filter);
  const options: { id: Filter; label: string; count: number }[] = [
    { id: "todos", label: "Todos", count: packages.length },
    ...packageCategories.map((c) => ({ id: c.id as Filter, label: c.label, count: packages.filter((p) => p.categories.includes(c.id)).length })),
  ];

  const waMessage = `Hola Kastell, busco una experiencia${active ? ` en la categoría "${active.label}"` : ""}. ¿Me ayudan a diseñarla?`;

  return (
    <div>
      <div className="rounded-4xl border border-ink/10 bg-white/50 p-5 md:p-7">
        <p className="mb-4 inline-flex items-center gap-2 font-serif text-xl">
          <SlidersHorizontal className="h-5 w-5 text-gold-deep" aria-hidden /> Filtra por categoría
        </p>
        <div role="group" aria-label="Categorías de paquetes" className="flex flex-wrap gap-2">
          {options.map((o) => {
            const on = filter === o.id;
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={on}
                data-filter-group="categoria"
                data-filter-value={o.id}
                onClick={() => setFilter(o.id)}
                className={cn(
                  "min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition",
                  on ? "border-ink bg-ink text-ivory" : "border-ink/20 text-ink hover:border-ink/50"
                )}
              >
                {o.label} <span className={cn("ml-1 text-xs", on ? "text-ivory/80" : "text-stone")}>{o.count}</span>
              </button>
            );
          })}
        </div>
        {active && <p className="mt-4 text-sm text-ink-muted">{active.description}</p>}
      </div>

      <p className="mt-8 text-base font-semibold text-ink-muted" aria-live="polite">
        {results.length === 1 ? "1 paquete o experiencia" : `${results.length} paquetes y experiencias`}
      </p>

      <ul className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {results.map((p) => (
          <li key={p.slug} data-categories={p.categories.join(" ")} className="animate-fade-up">
            <PackageCard pkg={p} />
          </li>
        ))}
        <li data-categories="todos-cta" className="flex">
          <div className="flex w-full flex-col justify-between rounded-4xl bg-jungle p-7 text-ivory md:p-9">
            <div>
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-light">A tu medida</p>
              <h3 className="mt-4 font-serif text-2xl leading-tight md:text-3xl">¿No ves tu viaje ideal? Lo diseñamos para ti.</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/80">
                Cada itinerario Kastell se puede adaptar o crear desde cero según tus fechas, intereses y estilo de viaje.
              </p>
            </div>
            <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 self-start">
              <WhatsAppIcon size={18} /> Diseñar mi experiencia
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
