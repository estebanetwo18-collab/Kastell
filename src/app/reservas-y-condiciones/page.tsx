import { ChevronDown, Info } from "lucide-react";
import { conditionsNote, policySections } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ReviewNotes } from "@/components/ReviewNotes";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = pageMetadata({
  title: "Reservas y condiciones",
  description:
    "Cómo reservar con Kastell Tours & Events: confirmación escrita, cambios, cancelaciones, depósitos, pagos, seguros, reclamos y código de conducta.",
  path: "/reservas-y-condiciones",
});

export default function ReservasPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservas y condiciones"
        breadcrumb="Reservas y condiciones"
        title="Reservas y condiciones"
        intro="Lo que necesitas saber antes de reservar: cómo solicitar, confirmar, cambiar o cancelar tu viaje."
        // TODO: reemplazar con foto real
        image={{ src: "/images/contacto.jpg", alt: "Playa tropical con palmeras y arena blanca" }}
        compact
      >
        <WhatsAppButton message={waMessages.general}>Consultar por WhatsApp</WhatsAppButton>
      </PageHero>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p role="note" className="flex items-start gap-3 rounded-3xl border border-gold/50 bg-ivory-deep p-5 text-[0.95rem] font-medium leading-relaxed text-ink">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden /> {conditionsNote}
            </p>

            <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {policySections.map((s) => (
                <details key={s.id} id={s.id} className="group scroll-mt-32 py-1">
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-lg leading-snug text-ink marker:hidden [&::-webkit-details-marker]:hidden md:text-xl">
                    <span>{s.title}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-gold-deep transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="space-y-6 pb-7 pr-2 text-[0.95rem] leading-relaxed text-ink-muted">
                    {s.blocks.map((b, i) => (
                      <div key={i}>
                        {b.heading && <h3 className="mb-2 font-serif text-base font-semibold text-ink">{b.heading}</h3>}
                        {b.paragraphs?.map((p) => (
                          <p key={p} className="mb-3 last:mb-0">
                            {p}
                          </p>
                        ))}
                        {b.bullets && (
                          <ul className="mt-2 space-y-2.5">
                            {b.bullets.map((li) => (
                              <li key={li} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden /> <span>{li}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    <ReviewNotes notes={s.reviewNotes} />
                  </div>
                </details>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-4xl bg-ink p-7 text-ivory lg:sticky lg:top-32">
              <h2 className="font-serif text-2xl">¿Dudas antes de reservar?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ivory/80">
                Escríbenos y confirmamos contigo los detalles del paquete, las fechas y las condiciones que aplican.
              </p>
              <WhatsAppButton message={waMessages.general} className="mt-6 w-full">
                Escribir por WhatsApp {site.whatsapp.display}
              </WhatsAppButton>
            </div>
          </aside>
        </div>
      </section>

      <FinalCTA whatsappMessage={waMessages.general} />
    </>
  );
}
