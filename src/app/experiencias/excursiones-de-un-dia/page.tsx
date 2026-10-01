import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import { tourList } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { PackagePrice } from "@/components/PackagePrice";
import { ReviewNotes } from "@/components/ReviewNotes";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = pageMetadata({
  title: "Excursiones de un día en Costa Rica",
  description:
    "Isla Tortuga, Volcán Irazú, Valle de Orosi, Lankester, Doka, Volcán Poás, Cataratas La Paz y Guayabo: excursiones de un día con precios.",
  path: "/experiencias/excursiones-de-un-dia",
});

export default function ExcursionesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Excursiones de un día — Kastell Tours & Events",
    itemListElement: tourList.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        name: t.title,
        provider: { "@id": `${site.url}/#organization` },
        offers: { "@type": "Offer", price: t.price?.amount, priceCurrency: "USD" },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Costa Rica One Day"
        breadcrumb="Excursiones de un día"
        title="Excursiones de un día"
        intro="Volcanes, cataratas, valles y una isla en una sola jornada. Elige tu excursión y solicita la información."
        // TODO: reemplazar con foto real de excursiones Kastell
        image={{ src: "/images/paquetes/stock-lago-montana.jpg", alt: "Montañas reflejadas en un lago" }}
        compact
      >
        <WhatsAppButton message={waMessages.experiences}>Solicitar información</WhatsAppButton>
      </PageHero>

      <section className="section">
        <div className="container">
          <Link href="/experiencias?categoria=excursiones" className="mb-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-gold-deep">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Todos los paquetes y experiencias
          </Link>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
            Horarios, puntos de salida e inclusiones de cada excursión se confirman con Kastell al solicitarla. Las condiciones pueden variar según
            temporada, proveedor y disponibilidad.
          </p>

          <ul className="mt-10 grid gap-5">
            {tourList.map((t, i) => (
              <Reveal as="li" key={t.slug} delay={0.03 * (i % 3)}>
                <article id={t.slug} className="grid scroll-mt-32 gap-6 rounded-4xl border border-ink/10 bg-white/60 p-5 md:grid-cols-[14rem_1fr_auto] md:items-center md:p-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-square">
                    <Image src={t.image.src} alt={t.image.alt} fill sizes="(min-width: 768px) 14rem, 100vw" className="object-cover" style={{ objectPosition: t.imagePosition }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-deep">{t.eyebrow}</p>
                    <h2 className="mt-2 font-serif text-xl leading-snug md:text-2xl">{t.title}</h2>
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Destinos">
                      {t.destinations.map((d) => (
                        <li key={d} className="chip">
                          <MapPin className="h-3 w-3 text-gold-deep" aria-hidden /> {d}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-ink-muted">
                      <Clock className="h-4 w-4 text-gold-deep" aria-hidden /> {t.durationLabel}
                    </p>
                    {t.needsConfirmation && t.price?.vat === "unspecified" && (
                      <p className="mt-2 text-sm font-medium text-ink">IVA por confirmar con Kastell.</p>
                    )}
                    <ReviewNotes notes={t.reviewNotes} />
                  </div>
                  <div className="flex flex-col gap-4 md:items-end md:text-right">
                    <PackagePrice pkg={t} />
                    <WhatsAppButton message={t.whatsappMessage} variant="ghost-dark" className="px-5 py-3" iconSize={16}>
                      Solicitar información
                    </WhatsAppButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA whatsappMessage={waMessages.experiences} defaultExperience="Tailor-Made" />
    </>
  );
}
