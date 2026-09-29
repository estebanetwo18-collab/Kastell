import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stats } from "@/content";
import { waMessages } from "@/lib/whatsapp";
import { Reveal } from "../Reveal";
import { WhatsAppButton } from "../WhatsAppButton";
import { ParallaxImage } from "../ParallaxImage";
import { RotatingSeal } from "../RotatingSeal";

export function ValueProposition() {
  return (
    <>
      <section className="section overflow-hidden">
        {/* Historia + cifras */}
        <div className="container grid gap-14 lg:grid-cols-12 lg:gap-0">
          {/* Composición con parallax: dos fotos que se mueven en direcciones opuestas al hacer scroll */}
          <Reveal className="relative pb-20 lg:col-span-5 lg:pb-24">
            {/* TODO: reemplazar con fotos reales de hoteles o experiencias Kastell */}
            <ParallaxImage
              src="/images/resort-selva.jpg"
              alt="Piscina de un hotel boutique rodeada de selva tropical"
              sizes="(min-width: 1024px) 36vw, 86vw"
              strength={36}
              className="aspect-[4/5] w-[86%] rounded-3xl"
            />
            <ParallaxImage
              src="/images/suite-vista.jpg"
              alt="Suite con vista a las montañas"
              sizes="(min-width: 1024px) 20vw, 46vw"
              strength={-24}
              className="absolute bottom-0 right-0 aspect-[4/5] w-[46%] rounded-3xl shadow-float ring-[10px] ring-ivory"
            />
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow mb-6 text-gold-deep">
                Kastell Tours &amp; Events · San José, Costa Rica
              </p>
              <h2 className="text-display-md">
                Creando viajes que se recuerdan{" "}
                <span className="text-gold-deep">desde 2021</span>
              </h2>
              <p className="mt-7 text-[0.95rem] leading-relaxed text-ink-muted">
                Nacimos en San José con una idea sencilla y ambiciosa: combinar
                el arte de viajar con la excelencia en el servicio. Diseñamos,
                coordinamos y operamos experiencias en todo Costa Rica para
                viajeros, parejas, empresas y agencias de todo el mundo.
              </p>
            </Reveal>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={0.06 * i}
                  className="border-t border-ink/15 pt-5"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-serif text-3xl font-light leading-none text-gold-deep md:text-4xl">
                      {s.value}
                    </span>
                    <span className="mt-3 block text-lg leading-snug text-ink-muted">
                      {s.label}
                    </span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* María: la persona detrás de cada detalle */}
      <section className="relative overflow-hidden bg-jungle-deep py-24 text-ivory md:py-32">
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-gold/25 blur-[120px]"
          aria-hidden
        />
        <div className="container relative grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <p className="eyebrow mb-6 text-gold-light">
              Detrás de cada detalle
            </p>
            {/* TODO: confirmar apellido y cargo de María con el cliente */}
            <h3 className="text-display-md">
              María, anfitriona y{" "}
              <span className="text-gold-light">maestra de ceremonias</span> de
              Kastell.
            </h3>
            <blockquote className="mt-8 max-w-lg">
              <p className="font-accent text-lg font-light md:text-xl italic leading-snug text-ivory/90">
                “Mari, gracias por todo, jamás vamos a olvidar este día.”
              </p>
              <cite className="mt-3 block text-base not-italic text-ivory/60">
                Javier Álvarez, cliente · Recomendación en Facebook
              </cite>
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/nosotros" className="btn-ghost-light">
                Conoce al equipo{" "}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <WhatsAppButton message={waMessages.stats}>
                Hablemos
              </WhatsAppButton>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8"
          >
            <div className="relative mx-auto w-full max-w-[24rem]">
              {/* Foto provista por el cliente (documento "Kastell Página web"). TODO: pedir versión en alta resolución */}
              <ParallaxImage
                src="/images/maria.jpg"
                alt="María, de Kastell Tours & Events, conduciendo una ceremonia al aire libre"
                sizes="(min-width: 1024px) 24rem, 86vw"
                strength={28}
                className="aspect-[4/5] rounded-[2rem] shadow-float"
                imageClassName="object-top"
              />
              <RotatingSeal
                text="Kastell · Tours & Events · Desde 2021 ·"
                className="absolute -top-8 left-3 w-24 sm:-left-10 sm:w-32"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
