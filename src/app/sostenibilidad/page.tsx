import Image from "next/image";
import { Download, Leaf, Scale, ShieldCheck, Users } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { sustainability } from "@/content";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = pageMetadata({
  title: "Sostenibilidad",
  description:
    "Nuestra política de sostenibilidad: compromiso ambiental, apoyo a comunidades locales y Código de Conducta contra la explotación sexual infantil en viajes y turismo.",
  path: "/sostenibilidad",
});

export default function SostenibilidadPage() {
  const commitments = [
    { ...sustainability.environmental, icon: Leaf },
    { ...sustainability.social, icon: Users },
  ];
  return (
    <>
      <PageHero
        eyebrow="Sostenibilidad"
        breadcrumb="Sostenibilidad"
        title={<>Cuidamos el lugar que nos <span className="text-gold-light">inspira</span></>}
        intro={sustainability.intro}
        // TODO: reemplazar con foto real de una experiencia sostenible Kastell
        image={{ src: "/images/sostenibilidad-bosque.jpg", alt: "Sendero en un bosque tropical iluminado por el sol" }}
      >
        <a href={site.sustainabilityPolicyPdf} target="_blank" rel="noopener" className="btn-gold">
          <Download className="h-4 w-4" aria-hidden /> Descargar política (PDF)
        </a>
        <WhatsAppButton message={waMessages.sustainability} variant="ghost-light">Viaje sostenible</WhatsAppButton>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Nuestros compromisos"
            title={<>Un lujo que <span className="text-gold-deep">deja huella positiva</span></>}
            intro="La sostenibilidad no es un extra en nuestros viajes: es parte de cómo trabajamos todos los días."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {commitments.map(({ icon: Icon, title, intro, items }, i) => (
              <Reveal key={title} delay={0.08 * i} className="rounded-4xl border border-ink/10 bg-white/50 p-8 md:p-12">
                <Icon className="h-10 w-10 text-gold-deep" strokeWidth={1.7} aria-hidden />
                <h2 className="mt-8 font-serif text-3xl">{title}</h2>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-muted">{intro}</p>
                <ul className="mt-8 space-y-3">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-3 border-b border-ink/10 pb-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden /> {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Código de conducta */}
      <section className="section bg-jungle text-ivory">
        <div className="container grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="mx-auto grid aspect-square max-w-xs place-items-center rounded-full border border-ivory/20 p-10 text-center">
              <div>
                <ShieldCheck className="mx-auto h-16 w-16 text-gold-light" strokeWidth={1} aria-hidden />
                <p className="mt-5 text-xs font-semibold uppercase tracking-eyebrow text-gold-light">Compromiso ético</p>
                <p className="mt-2 font-serif text-2xl leading-tight">Protección de la niñez y la adolescencia</p>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <SectionHeading tone="light" eyebrow="Código de Conducta" title={sustainability.code.title} />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-[0.9rem] leading-relaxed text-ivory/80">{sustainability.code.body}</p>
              <div className="mt-8 flex items-start gap-4 rounded-3xl border border-ivory/15 p-6">
                <Scale className="mt-0.5 h-6 w-6 shrink-0 text-gold-light" strokeWidth={1.7} aria-hidden />
                <p className="text-ivory/80">{sustainability.legal}</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {/* PDF de la política completa provisto por el cliente: /public/docs/politica-sostenibilidad-kastell.pdf */}
                <a href={site.sustainabilityPolicyPdf} target="_blank" rel="noopener" className="btn-gold">
                  <Download className="h-4 w-4" aria-hidden /> Leer la política completa (PDF)
                </a>
                <WhatsAppButton message={waMessages.sustainability} variant="ghost-light">Consultas por WhatsApp</WhatsAppButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative aspect-square overflow-hidden rounded-4xl">
            {/* TODO: reemplazar con foto real de comunidades locales / proyectos */}
            <Image src="/images/sostenibilidad-aerea.jpg" alt="Vista aérea de un bosque tropical" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Viajar con propósito"
              title={<>Experiencias con <span className="text-gold-deep">comunidades locales</span></>}
              intro="Diseñamos momentos que conectan a nuestros viajeros con la gente, la cultura y los proyectos que hacen única a Costa Rica —como la visita al Proyecto de Rescate del Patrimonio Ancestral Villa Maleku, incluida en nuestra luna de miel—, siempre con respeto y prácticas responsables en zonas protegidas."
            />
            <Reveal delay={0.1} className="mt-10">
              <WhatsAppButton message={waMessages.sustainability}>Quiero un viaje con propósito</WhatsAppButton>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA whatsappMessage={waMessages.sustainability} />
    </>
  );
}
