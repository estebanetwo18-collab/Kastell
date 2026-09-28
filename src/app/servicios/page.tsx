import Image from "next/image";
import { Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/whatsapp";
import { differentiators, services } from "@/content";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";
import { DynamicIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Servicios",
  description:
    "Itinerarios personalizados, hoteles boutique y de lujo, transporte privado, tours, concierge, bodas destino, viajes corporativos, eventos y turismo sostenible en Costa Rica.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        breadcrumb="Servicios"
        title={<>Todo lo que tu viaje necesita, <span className="text-gold-light">en un solo lugar</span></>}
        intro="Diseñamos, coordinamos y operamos cada pieza de la experiencia para que tú solo te ocupes de disfrutarla."
        // TODO: reemplazar con foto real de servicios Kastell
        image={{ src: "/images/servicio-gastronomia.jpg", alt: "Mesa de cena elegante con platos gourmet" }}
      >
        <WhatsAppButton message={waMessages.services}>Cotizar servicios</WhatsAppButton>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Lo que hacemos"
            title={<>Nueve servicios, <span className="text-gold-deep">un mismo estándar</span></>}
            intro="Puedes contratarlos por separado o dejar que los integremos en una sola experiencia coordinada de principio a fin."
          />
          <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={0.04 * (i % 3)}>
                <article id={s.id} className="group flex h-full scroll-mt-32 flex-col rounded-4xl border border-ink/10 bg-white/50 p-8 transition duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-soft">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-ivory-deep">
                      <DynamicIcon name={s.icon} className="h-6 w-6 text-gold-deep" />
                    </span>
                    <span className="font-serif text-lg text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-8 font-serif text-[1.85rem] leading-tight">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">{s.description}</p>
                  <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> {d}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton message={s.whatsappMessage} variant="link" className="mt-8 self-start">
                    Consultar por WhatsApp
                  </WhatsAppButton>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Nuestra diferencia */}
      <section className="section bg-ink text-ivory">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading tone="light" eyebrow="Nuestra diferencia" title={<>El lujo está en <span className="text-gold-light">cómo te hacemos sentir</span></>} />
            <Reveal delay={0.1} className="relative mt-12 aspect-[4/3] overflow-hidden rounded-4xl">
              {/* TODO: reemplazar con foto real */}
              <Image src="/images/servicio-bienestar.jpg" alt="Tratamiento de spa y bienestar" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </Reveal>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {differentiators.map((d, i) => (
              <Reveal as="li" key={d.title} delay={0.05 * i} className="rounded-3xl border border-ivory/15 p-7">
                <DynamicIcon name={d.icon} className="h-8 w-8 text-gold-light" strokeWidth={1.2} />
                <h3 className="mt-6 font-serif text-2xl">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{d.description}</p>
              </Reveal>
            ))}
            <li className="sm:col-span-2">
              <WhatsAppButton message={waMessages.difference} className="mt-4">
                Hablemos de tu próximo viaje
              </WhatsAppButton>
            </li>
          </ul>
        </div>
      </section>

      <FinalCTA whatsappMessage={waMessages.services} />
    </>
  );
}
