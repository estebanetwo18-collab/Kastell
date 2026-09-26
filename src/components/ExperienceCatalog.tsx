"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { allDestinations, experienceTypeLabels, packages, type ExperienceType } from "@/content";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { PackageCard } from "./PackageCard";
import { WhatsAppIcon } from "./icons";

const types = Object.keys(experienceTypeLabels) as ExperienceType[];

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  getLabel,
}: {
  label: string;
  options: T[];
  value: T | null;
  onChange: (v: T | null) => void;
  getLabel: (v: T) => string;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-[0.68rem] font-semibold uppercase tracking-eyebrow text-gold-deep">{label}</legend>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={value === null}
          data-filter-group={label}
          data-filter-value=""
          onClick={() => onChange(null)}
          className={cn("rounded-full border px-4 py-2 text-sm transition", value === null ? "border-ink bg-ink text-ivory" : "border-ink/15 text-ink hover:border-ink/40")}
        >
          Todos
        </button>
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            data-filter-group={label}
            data-filter-value={o}
            onClick={() => onChange(value === o ? null : o)}
            className={cn("rounded-full border px-4 py-2 text-sm transition", value === o ? "border-ink bg-ink text-ivory" : "border-ink/15 text-ink hover:border-ink/40")}
          >
            {getLabel(o)}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function ExperienceCatalog() {
  const [type, setType] = useState<ExperienceType | null>(null);
  const [dest, setDest] = useState<string | null>(null);

  const usedTypes = useMemo(() => types.filter((t) => packages.some((p) => p.types.includes(t))), []);
  const results = useMemo(
    () => packages.filter((p) => (!type || p.types.includes(type)) && (!dest || p.destinations.includes(dest))),
    [type, dest]
  );

  const emptyMsg = `Hola Kastell, busco una experiencia${type ? ` de ${experienceTypeLabels[type].toLowerCase()}` : ""}${dest ? ` en ${dest}` : ""}. ¿Me ayudan a diseñarla?`;

  return (
    <div>
      <div className="rounded-4xl border border-ink/10 bg-white/50 p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="inline-flex items-center gap-2 font-serif text-2xl">
            <SlidersHorizontal className="h-5 w-5 text-gold-deep" aria-hidden /> Filtra tu experiencia
          </p>
          {(type || dest) && (
            <button type="button" onClick={() => { setType(null); setDest(null); }} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
              <X className="h-4 w-4" aria-hidden /> Limpiar filtros
            </button>
          )}
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <FilterGroup label="Tipo de experiencia" options={usedTypes} value={type} onChange={setType} getLabel={(t) => experienceTypeLabels[t]} />
          <FilterGroup label="Destino" options={allDestinations} value={dest} onChange={setDest} getLabel={(d) => d} />
        </div>
      </div>

      <p className="mt-10 text-sm text-stone" aria-live="polite">
        {results.length === 1 ? "1 experiencia" : `${results.length} experiencias`}
      </p>

      <motion.ul layout className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {results.map((p) => (
            <motion.li key={p.slug} data-types={p.types.join(" ")} data-destinations={p.destinations.join("|")} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.35 }}>
              <PackageCard pkg={p} />
            </motion.li>
          ))}
          <motion.li key="a-medida" layout className="flex">
            <div className="flex w-full flex-col justify-between rounded-4xl bg-jungle p-8 text-ivory md:p-10">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-eyebrow text-gold-light">
                  {results.length ? "Tailor-Made" : "Sin resultados… todavía"}
                </p>
                <h3 className="mt-4 font-serif text-4xl leading-tight">
                  {results.length ? "¿No ves tu viaje ideal? Lo diseñamos para ti." : "Esa combinación aún no está publicada, pero la diseñamos para ti."}
                </h3>
                <p className="mt-4 leading-relaxed text-ivory/75">
                  Cada itinerario Kastell se puede adaptar o crear desde cero según tus fechas, intereses y estilo de viaje.
                </p>
              </div>
              <a href={waLink(emptyMsg)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-10 self-start">
                <WhatsAppIcon size={18} /> Diseñar mi experiencia
              </a>
            </div>
          </motion.li>
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
