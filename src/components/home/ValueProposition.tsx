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
              Creando viajes que se recuerdan <span className="text-gold-deep">desde 2021</span>
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-ink-muted">
              Nacimos en San José con una idea sencilla y ambiciosa: combinar el arte de viajar con la excelencia en el servicio. Diseñamos, coordinamos y operamos experiencias en todo Costa Rica para viajeros, parejas, empresas y agencias de todo el mundo.
            </p>
          </Reveal>

          {/* La persona detrás de cada detalle */}
          <Reveal delay={0.1} className="mt-12">
            <figure className="relative grid items-end gap-6 overflow-hidden rounded-4xl bg-jungle p-6 text-ivory shadow-float sm:grid-cols-[11rem_1fr] sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-gold/30" aria-hidden />
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-gold/20" aria-hidden />
              <div className="relative mx-auto aspect-[3/4] w-40 overflow-hidden rounded-t-full border-4 border-gold/60 sm:mx-0 sm:w-44">
                {/* Foto de María provista por el cliente (documento "Kastell Página web"). TODO: pedir versión en alta resolución */}
                <Image src="/images/maria.jpg" alt="María, de Kastell Tours & Events, conduciendo una ceremonia al aire libre" fill sizes="176px" className="object-cover object-top" />
              </div>
              <figcaption className="relative">
                <p className="text-[0.68rem] font-semibold uppercase tracking-eyebrow text-gold-light">Detrás de cada detalle</p>
                {/* TODO: confirmar apellido y cargo de María con el cliente */}
                <p className="mt-2 font-serif text-4xl font-light">María</p>
                <p className="text-sm text-ivory/70">Anfitriona y maestra de ceremonias</p>
                <blockquote className="mt-5 border-l-2 border-gold pl-4 text-lg italic leading-snug text-ivory/90">
                  “Mari, gracias por todo, jamás vamos a olvidar este día.”
                  <footer className="mt-1 text-sm not-italic text-ivory/60">Javier Álvarez, cliente</footer>
                </blockquote>
              </figcaption>
            </figure>
          </Reveal>

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

      {/* Cifras */}
      <div className="container mt-28">
        <Reveal>
          <dl className="grid overflow-hidden rounded-4xl bg-ink text-ivory sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`relative p-8 md:p-10 ${i > 0 ? "border-t border-ivory/10 sm:border-t-0 sm:border-l" : ""} ${i === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""} ${i === 3 ? "sm:border-t lg:border-t-0" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-serif text-6xl font-light leading-none text-gold-light md:text-7xl">{s.value}</span>
                  <span className="mt-4 block text-lg leading-snug text-ivory/75">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
