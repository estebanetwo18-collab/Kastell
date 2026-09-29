import Image from "next/image";
import { Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { audiences, mission, story, values, vision } from "@/content";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = pageMetadata({
  title: "Nosotros",
  description:
    "Kastell Tours & Events nace en 2021 en San José, Costa Rica. Conoce nuestra misión, visión y los valores con los que diseñamos cada experiencia.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        breadcrumb="Nosotros"
        title={<>Donde el arte de viajar se encuentra con la <span className="text-gold-light">excelencia</span></>}
        intro={site.essence}
        // TODO: reemplazar con foto real del equipo Kastell
        image={{ src: "/images/monteverde-bosque.jpg", alt: "Bosque nuboso de Costa Rica con luz filtrada" }}
      >
        <WhatsAppButton message={waMessages.about}>Conversemos</WhatsAppButton>
      </PageHero>

      {/* Historia */}
      <section className="section">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6 text-gold-deep">Nuestra historia</p>
              <h2 className="text-display-md">
                Desde {site.foundedYear}, <span className="text-gold-deep">en San José</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="relative mt-12 aspect-[4/5] overflow-hidden rounded-4xl">
              {/* TODO: reemplazar con foto real del equipo / oficina Kastell */}
              <Image src="/images/nosotros-historia.jpg" alt="Mapa, libreta y cámara listos para planear un viaje" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </Reveal>
          </div>
          <div className="space-y-7 text-base leading-relaxed md:text-[1.05rem] text-ink-muted lg:col-span-6 lg:col-start-7 lg:pt-24">
            {story.map((p, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className={i === 0 ? "font-serif text-3xl leading-snug text-ink" : ""}>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <WhatsAppButton message={waMessages.about} variant="link" className="text-base">
                Escríbenos y conozcámonos
              </WhatsAppButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="section bg-ink text-ivory">
        <div className="container grid gap-6 lg:grid-cols-2">
          {[
            { label: "Misión", text: mission },
            { label: "Visión", text: vision },
          ].map((b, i) => (
            <Reveal key={b.label} delay={0.08 * i} className="rounded-4xl border border-ivory/15 p-8 md:p-12">
              <p className="eyebrow mb-8 text-gold-light">{b.label}</p>
              <p className="font-serif text-[clamp(1.25rem,1.9vw,1.65rem)] leading-snug">{b.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="container mt-12 flex justify-center">
          <WhatsAppButton message={waMessages.about} variant="ghost-light">
            Diseñemos algo memorable juntos
          </WhatsAppButton>
        </div>
      </section>

      {/* Valores */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Nuestros valores"
            title={<>Siete palabras que <span className="text-gold-deep">nos guían</span></>}
            intro="No son un eslogan: son los criterios con los que tomamos cada decisión, desde elegir un hotel hasta escribir un mensaje."
          />
          <ul className="mt-16 grid gap-px overflow-hidden rounded-4xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={0.04 * i} className="bg-ivory p-8 md:p-10">
                <span className="font-serif text-lg text-gold-deep">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-3xl">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{v.description}</p>
              </Reveal>
            ))}
            <li className="flex flex-col justify-between bg-jungle p-8 text-ivory md:p-10">
              <p className="font-serif text-2xl leading-snug">¿Compartes estos valores? Nos encantará conocerte.</p>
              <WhatsAppButton message={waMessages.about} variant="link-light" className="mt-8 self-start">
                Escríbenos
              </WhatsAppButton>
            </li>
          </ul>
        </div>
      </section>

      {/* Audiencias */}
      <section className="section bg-ivory-deep">
        <div className="container">
          <SectionHeading
            eyebrow="Con quién trabajamos"
            title={<>Aliados de la industria, <span className="text-gold-deep">anfitriones</span> de viajeros</>}
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {[
              { ...audiences.b2b, key: "b2b", msg: waMessages.b2b, cta: "Soy agencia / tour operador" },
              { ...audiences.b2c, key: "b2c", msg: waMessages.general, cta: "Quiero planear mi viaje" },
            ].map((a, i) => (
              <Reveal key={a.key} delay={0.08 * i} className="flex flex-col rounded-4xl bg-ivory p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-deep">{a.key.toUpperCase()}</p>
                <h3 className="mt-3 font-serif text-3xl">{a.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-muted">{a.intro}</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {a.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 border-b border-ink/10 pb-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> {it}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton message={a.msg} variant="ink" className="mt-10 self-start">
                  {a.cta}
                </WhatsAppButton>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA whatsappMessage={waMessages.about} />
    </>
  );
}
