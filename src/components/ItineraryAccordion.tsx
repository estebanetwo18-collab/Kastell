"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, MapPin, Plus } from "lucide-react";
import type { ItineraryDay } from "@/content";
import { cn } from "@/lib/cn";

export function ItineraryAccordion({ days, tone = "light", defaultOpen = 0 }: { days: ItineraryDay[]; tone?: "light" | "dark"; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const dark = tone === "dark";
  return (
    <ol className={cn("border-t", dark ? "border-ivory/15" : "border-ink/10")}>
      {days.map((d, i) => {
        const isOpen = open === i;
        const id = `dia-${i}`;
        return (
          <li key={d.label} className={cn("border-b", dark ? "border-ivory/15" : "border-ink/10")}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-btn`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-5 py-6 text-left font-sans"
              >
                <span className={cn("w-20 shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] md:w-24", dark ? "text-gold-light" : "text-gold-deep")}>{d.label}</span>
                <span className="flex-1">
                  <span className={cn("block font-serif text-xl leading-snug md:text-2xl", dark ? "text-ivory" : "text-ink")}>{d.title}</span>
                  <span className={cn("mt-1 inline-flex items-center gap-1.5 text-xs", dark ? "text-ivory/60" : "text-stone")}>
                    <MapPin className="h-3 w-3" aria-hidden /> {d.location}
                  </span>
                </span>
                <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-full border transition", dark ? "border-ivory/25 group-hover:border-gold-light" : "border-ink/15 group-hover:border-gold", isOpen && "rotate-45")}>
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-btn`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 md:pl-[7.25rem]">
                    <p className={cn("max-w-2xl leading-relaxed", dark ? "text-ivory/75" : "text-ink-muted")}>{d.description}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {d.highlights.map((h) => (
                        <li key={h} className={cn("flex items-start gap-2.5 text-sm", dark ? "text-ivory/85" : "text-ink")}>
                          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", dark ? "text-gold-light" : "text-gold-deep")} aria-hidden /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
