import type { ExperiencePackage } from "@/content";
import { vatLabel } from "@/content";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

/**
 * Precio de un paquete tal como lo dice la fuente:
 *  - con acomodaciones (sencilla/doble/triple/niño) → cuadrícula
 *  - con precio único → monto (+ "desde" si aplica)
 *  - IVA: "+ IVA" / "IVA incluido" solo si la fuente lo indica
 */
export function PackagePrice({
  pkg,
  tone = "light",
  size = "card",
  className,
}: {
  pkg: ExperiencePackage;
  tone?: "light" | "dark";
  size?: "card" | "detail";
  className?: string;
}) {
  const dark = tone === "dark";
  const muted = dark ? "text-ivory/70" : "text-ink-muted";
  const strong = dark ? "text-ivory" : "text-ink";
  const price = pkg.price;
  const vat = price ? vatLabel(price.vat) : null;

  if (pkg.occupancyOptions?.length) {
    return (
      <div className={className}>
        <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", muted)}>
          Precio por persona, según acomodación
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5">
          {pkg.occupancyOptions.map((o) => (
            <div key={o.label} className={cn("flex items-baseline justify-between gap-3 border-b pb-1.5", dark ? "border-ivory/15" : "border-ink/10")}>
              <dt className={cn("text-sm", muted)}>{o.label}</dt>
              <dd className={cn("font-semibold tabular-nums", strong, size === "detail" ? "text-xl" : "text-base")}>{formatPrice(o.amount)}</dd>
            </div>
          ))}
        </dl>
        <p className={cn("mt-2.5 text-xs", muted)}>
          USD{vat ? ` · ${vat}` : ""}
        </p>
      </div>
    );
  }

  if (!price) {
    return <p className={cn("text-sm font-semibold", strong, className)}>Cotización a la medida</p>;
  }

  return (
    <div className={className}>
      {price.prefix && <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", muted)}>Desde</p>}
      <p className={cn("flex flex-wrap items-baseline gap-x-2 leading-none", strong)}>
        <span className={cn("font-serif font-light tabular-nums", size === "detail" ? "text-5xl" : "text-3xl")}>{formatPrice(price.amount)}</span>
        <span className={cn("text-sm", muted)}>USD</span>
        {vat && <span className={cn("rounded-full border px-2 py-0.5 text-xs font-semibold", dark ? "border-ivory/30 text-ivory" : "border-ink/25 text-ink")}>{vat}</span>}
      </p>
      {(price.per || price.basis) && (
        <p className={cn("mt-1.5 text-sm", muted)}>{[price.per, price.basis].filter(Boolean).join(" ")}</p>
      )}
    </div>
  );
}
