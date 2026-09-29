"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { Testimonial } from "@/content";
import { cn } from "@/lib/cn";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const t = items[i];
  const many = items.length > 1;
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);

  return (
    <div className="relative" aria-roledescription="carrusel" aria-label="Testimonios de clientes">
      <Quote className="h-14 w-14 text-gold" strokeWidth={1} aria-hidden />
      <AnimatePresence mode="wait">
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5 }}
          aria-roledescription="diapositiva"
          aria-label={`${i + 1} de ${items.length}`}
        >
          <blockquote className="mt-8 font-accent text-[clamp(1.6rem,3.2vw,2.75rem)] font-light italic leading-[1.2] text-ivory">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-gold font-serif text-2xl text-ink" aria-hidden>
              {t.author.charAt(0)}
            </span>
            <span>
              <span className="block font-semibold text-ivory">{t.author}</span>
              <span className="text-sm text-ivory/60">
                {t.source}
                {t.context ? ` · ${t.context}` : ""}
              </span>
            </span>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
      {many && (
        <div className="mt-10 flex items-center gap-4">
          <button type="button" onClick={() => go(-1)} aria-label="Testimonio anterior" className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 text-ivory transition hover:border-gold hover:bg-gold hover:text-ink">
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Testimonio siguiente" className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 text-ivory transition hover:border-gold hover:bg-gold hover:text-ink">
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
          <div className="ml-2 flex gap-2">
            {items.map((_, k) => (
              <span key={k} className={cn("h-1 rounded-full transition-all", k === i ? "w-8 bg-gold" : "w-3 bg-ivory/25")} aria-hidden />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
