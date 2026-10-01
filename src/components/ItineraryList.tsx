import { MapPin } from "lucide-react";
import type { ItineraryDay } from "@/content";
import { cn } from "@/lib/cn";

/** Itinerario simple (sin detalle expandible): una línea por día o por tramo de noches. */
export function ItineraryList({ items, tone = "light" }: { items: ItineraryDay[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className={cn("border-t", dark ? "border-ivory/15" : "border-ink/10")}>
      {items.map((d, i) => (
        <li key={`${d.label}-${i}`} className={cn("flex items-start gap-5 border-b py-4", dark ? "border-ivory/15" : "border-ink/10")}>
          <span className={cn("w-24 shrink-0 pt-0.5 text-xs font-bold uppercase tracking-[0.14em]", dark ? "text-gold-light" : "text-gold-deep")}>{d.label}</span>
          <span className="flex-1">
            <span className={cn("block font-serif text-lg leading-snug", dark ? "text-ivory" : "text-ink")}>{d.title}</span>
            {d.description && <span className={cn("mt-1 block text-sm", dark ? "text-ivory/70" : "text-ink-muted")}>{d.description}</span>}
            {d.location && (
              <span className={cn("mt-1 inline-flex items-center gap-1.5 text-xs", dark ? "text-ivory/60" : "text-stone")}>
                <MapPin className="h-3 w-3" aria-hidden /> {d.location}
              </span>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
