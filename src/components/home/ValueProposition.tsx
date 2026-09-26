import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stats } from "@/content";
import { waMessages } from "@/lib/whatsapp";
import { Reveal } from "../Reveal";
import { WhatsAppButton } from "../WhatsAppButton";

export function ValueProposition() {
  return (
    <section className="section overflow-hidden">
      <div className="container grid gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl md:aspect-[5/6]">
            {/* TODO: reemplazar con foto real de un hotel o experiencia Kastell */}
            <Image src="/images/resort-selva.jpg" alt="Piscina de un hotel boutique rodeada de selva tropical" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          {/* Tarjeta flotante */}
          <div className="absolute -bottom-10 right-4 w-60 rounded-3xl bg-ivory p-3 shadow-float sm:right-8 md:w-72">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {/* TODO: reemplazar con foto real */}
              <Image src="/images/suite-vista.jpg" alt="Suite con vista a las montañas" fill sizes="288px" className="object-cover" />
            </div>
            <div className="px-2 pb-2 pt-4">
              <p className="font-serif text-xl leading-tight">Itinerarios de autor</p>
              <p className="mt-1 text-xs leading-relaxed text-stone">Cada viaje se diseña desde cero, pensando en quién lo vive.</p>
            </div>
          </div>
          <div className="absolute -left-2 top-10 hidden rounded-3xl bg-jungle px-6 py-5 text-ivory shadow-float sm:block md:-left-6">
            <p className="font-serif text-5xl leading-none">100%</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ivory/75">a la medida</p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-6 lg:pl-8">
          <Reveal>
            <p className="eyebrow mb-6 text-gold-deep">Kastell Tours & Events</p>
            <h2 className="text-display-md">
              Creando viajes que se recuerdan <em className="italic text-gold-deep">desde 2021</em>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-ink-muted">
              Nacimos en San José con una idea sencilla y ambiciosa: combinar el arte de viajar con la excelencia en el servicio. Diseñamos, coordinamos y operamos experiencias en todo Costa Rica para viajeros, parejas, empresas y agencias de todo el mundo.
            </p>
          </Reveal>

          <dl className="mt-12 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.08 * i} className="rounded-3xl border border-ink/10 bg-white/50 p-6">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-serif text-5xl leading-none text-ink">{s.value}</span>
                  <span className="mt-3 block text-sm leading-snug text-ink-muted">{s.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-6">
            <WhatsAppButton message={waMessages.stats} variant="ink">
              Conversemos
            </WhatsAppButton>
            <Link href="/nosotros" className="link-underline text-ink">
              Conoce nuestra historia <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
