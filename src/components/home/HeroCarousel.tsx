"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type HeroSlide = { src: string; alt: string };

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const INTERVAL_MS = 6500;

/**
 * Carrusel simple de fondo: fundido suave y el mismo zoom lento del hero.
 * La primera imagen es fija en el HTML (carga rápida, sin saltos); al montar,
 * el resto se reordena al azar, así cada visita recorre las experiencias en otro orden.
 */
export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [order, setOrder] = useState(slides);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setOrder([slides[0], ...shuffle(slides.slice(1))]);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((i) => i + 1);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides]);

  const current = active % order.length;

  return (
    <div className="absolute inset-0 -z-10" data-hero-carousel aria-hidden>
      {order.map((s, i) => (
        <div key={s.src} className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image
            src={s.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === current ? "animate-hero-pan" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}
