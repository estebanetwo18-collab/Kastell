import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stats } from "@/content";
import { waMessages } from "@/lib/whatsapp";
import { Reveal } from "../Reveal";
import { WhatsAppButton } from "../WhatsAppButton";

// Forma de escudo en coordenadas relativas (0–1), proporción 300×420.
const SHIELD_PATH =
  "M0.08 0H0.92Q1 0 1 0.0571V0.7381Q1 0.7714 0.96 0.7881L0.54 0.981Q0.5 1 0.46 0.981L0.04 0.7881Q0 0.7714 0 0.7381V0.0571Q0 0 0.08 0Z";

/** Retrato recortado en forma de escudo, con un escudo dorado desplazado detrás. */
function ShieldPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative mx-auto aspect-[300/420] w-full max-w-[21rem]">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="kastell-shield" clipPathUnits="objectBoundingBox">
            <path d={SHIELD_PATH} />
          </clipPath>
          <linearGradient id="kastell-shield-gold" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="#EDE5D8" />
            <stop offset="55%" stopColor="#C9A874" />
            <stop offset="100%" stopColor="#B08D57" />
          </linearGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="absolute inset-0 h-full w-full translate-x-4 translate-y-4" aria-hidden>
        <path d={SHIELD_PATH} fill="url(#kastell-shield-gold)" />
      </svg>
      <div className="absolute inset-0 drop-shadow-[0_24px_36px_rgba(20,19,16,0.25)]">
        <div className="relative h-full w-full [clip-path:url(#kastell-shield)]">
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 21rem, 80vw" className="object-cover object-top" />
        </div>
      </div>
    </figure>
  );
}

export function ValueProposition() {
  return (
    <section className="section overflow-hidden">
      {/* Historia + cifras */}
      <div className="container grid gap-14 lg:grid-cols-12 lg:gap-0">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] max-w-full">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold" aria-hidden />
            <div className="relative h-full overflow-hidden rounded-sm">
              {/* TODO: reemplazar con foto real de un hotel o experiencia Kastell */}
              <Image src="/images/resort-selva.jpg" alt="Piscina de un hotel boutique rodeada de selva tropical" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow mb-6 text-gold-deep">Kastell Tours &amp; Events · San José, Costa Rica</p>
            <h2 className="text-display-md">
              Creando viajes que se recuerdan <span className="text-gold-deep">desde 2021</span>
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-ink-muted">
              Nacimos en San José con una idea sencilla y ambiciosa: combinar el arte de viajar con la excelencia en el servicio. Diseñamos, coordinamos y operamos experiencias en todo Costa Rica para viajeros, parejas, empresas y agencias de todo el mundo.
            </p>
          </Reveal>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.06 * i} className="border-t border-ink/15 pt-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-serif text-5xl font-light leading-none text-gold-deep md:text-6xl">{s.value}</span>
                  <span className="mt-3 block text-lg leading-snug text-ink-muted">{s.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* María: la persona detrás de cada detalle */}
      <div className="container mt-28 md:mt-36">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <p className="eyebrow mb-6 text-gold-deep">Detrás de cada detalle</p>
            {/* TODO: confirmar apellido y cargo de María con el cliente */}
            <h3 className="text-display-md">
              María, anfitriona y <span className="text-gold-deep">maestra de ceremonias</span> de Kastell.
            </h3>
            <blockquote className="mt-8 max-w-lg">
              <p className="text-2xl italic leading-snug text-ink">“Mari, gracias por todo, jamás vamos a olvidar este día.”</p>
              <footer className="mt-3 text-base text-stone">Javier Álvarez, cliente · Recomendación en Facebook</footer>
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/nosotros" className="btn-ghost-dark">
                Conoce al equipo <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <WhatsAppButton message={waMessages.stats}>Hablemos</WhatsAppButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
            {/* Foto provista por el cliente (documento "Kastell Página web"). TODO: pedir versión en alta resolución */}
            <ShieldPortrait src="/images/maria.jpg" alt="María, de Kastell Tours & Events, conduciendo una ceremonia al aire libre" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
