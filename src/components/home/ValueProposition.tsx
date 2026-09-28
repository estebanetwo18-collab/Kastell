import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stats } from "@/content";
import { waMessages } from "@/lib/whatsapp";
import { Reveal } from "../Reveal";
import { WhatsAppButton } from "../WhatsAppButton";

/** Escudo con degradado detrás del retrato (proporción 300×340). */
function Shield() {
  return (
    <svg viewBox="0 0 300 340" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[80%] w-full drop-shadow-[0_30px_40px_rgba(20,19,16,0.22)]" aria-hidden>
      <defs>
        <linearGradient id="kastell-shield" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#EDE5D8" />
          <stop offset="55%" stopColor="#C9A874" />
          <stop offset="100%" stopColor="#B08D57" />
        </linearGradient>
      </defs>
      <path
        d="M24 0H276Q300 0 300 24V230Q300 244 288 251L162 332Q150 340 138 332L12 251Q0 244 0 230V24Q0 0 24 0Z"
        fill="url(#kastell-shield)"
      />
    </svg>
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
            <figure className="relative mx-auto aspect-[300/425] w-full max-w-[22rem]">
              <Shield />
              {/* Recorte de la foto provista por el cliente (documento "Kastell Página web"). TODO: pedir versión en alta resolución */}
              <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_79%,50%_100%,0_79%)]">
                <Image
                  src="/images/maria-recorte.png"
                  alt="María, de Kastell Tours & Events, conduciendo una ceremonia"
                  fill
                  sizes="(min-width: 1024px) 22rem, 80vw"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
