import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Clock, Info, MapPin, ScrollText, Sparkles, X } from "lucide-react";
import { getPackage, highestPrice, itineraryPackages, lowestPrice, vatLabel } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ItineraryAccordion } from "@/components/ItineraryAccordion";
import { ItineraryList } from "@/components/ItineraryList";
import { PackagePrice } from "@/components/PackagePrice";
import { packageDuration } from "@/components/PackageCard";
import { ReviewNotes } from "@/components/ReviewNotes";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactButton } from "@/components/ContactModal";
import { FinalCTA } from "@/components/FinalCTA";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return itineraryPackages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  const duration = packageDuration(pkg);
  return pageMetadata({
    title: `${pkg.title}${duration ? ` · ${duration}` : ""}`,
    description: pkg.summary,
    path: `/experiencias/${pkg.slug}`,
    image: { url: pkg.image.src, alt: pkg.image.alt },
  });
}

export default async function PackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const duration = packageDuration(pkg);
  const low = lowestPrice(pkg);
  const high = highestPrice(pkg);
  const hasDetailedItinerary = pkg.itinerary?.some((d) => d.description);
  const dateText = pkg.dateLabel ?? "Consulta las fechas con Kastell";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description ?? pkg.summary,
    image: `${site.url}${pkg.image.src}`,
    touristType: pkg.types,
    ...(pkg.itinerary
      ? {
          itinerary: {
            "@type": "ItemList",
            itemListElement: pkg.itinerary.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "TouristDestination", name: d.location ?? d.title, description: `${d.label}: ${d.title}` },
            })),
          },
        }
      : {}),
    provider: { "@id": `${site.url}/#organization` },
    ...(low !== undefined
      ? {
          offers: {
            "@type": low === high ? "Offer" : "AggregateOffer",
            ...(low === high ? { price: low } : { lowPrice: low, highPrice: high }),
            priceCurrency: pkg.price?.currency ?? "USD",
            description: [pkg.price?.note, vatLabel(pkg.price?.vat ?? "unspecified")].filter(Boolean).join(" · ") || undefined,
            url: `${site.url}/experiencias/${pkg.slug}`,
          },
        }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={pkg.eyebrow}
        breadcrumb={pkg.title}
        title={pkg.title}
        intro={pkg.summary}
        image={pkg.image}
        imagePosition={pkg.imagePosition}
        compact
      >
        {duration && (
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-light px-4 py-2 text-sm font-semibold text-ink">
            <Clock className="h-4 w-4" aria-hidden /> {duration}
          </span>
        )}
        {pkg.dateLabel && (
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-4 py-2 text-sm font-medium text-ivory backdrop-blur">
            <CalendarDays className="h-4 w-4" aria-hidden /> {pkg.dateLabel}
          </span>
        )}
        {pkg.needsConfirmation && <span className="rounded-full bg-ivory px-4 py-2 text-sm font-bold text-ink">Por confirmar</span>}
      </PageHero>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Precio y datos clave: primero en móvil */}
          <aside className="order-first lg:order-last lg:col-span-5 lg:col-start-8">
            <div className="rounded-4xl bg-ink p-7 text-ivory shadow-float md:p-9 lg:sticky lg:top-32">
              <PackagePrice pkg={pkg} tone="dark" size="detail" />
              {pkg.price?.note && <p className="mt-4 text-xs leading-relaxed text-ivory/70">{pkg.price.note}</p>}
              <dl className="mt-7 grid gap-4 border-y border-ivory/15 py-6 text-sm">
                {duration && (
                  <div>
                    <dt className="text-ivory/70">Duración</dt>
                    <dd className="mt-1 font-semibold">{duration}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-ivory/70">Fecha</dt>
                  <dd className="mt-1 font-semibold">{dateText}</dd>
                </div>
                <div>
                  <dt className="text-ivory/70">Ruta</dt>
                  <dd className="mt-1 font-semibold">{pkg.destinationLabel ?? pkg.destinations.join(" · ")}</dd>
                </div>
              </dl>
              <div className="mt-7 flex flex-col gap-3">
                <WhatsAppButton message={pkg.whatsappMessage} className="w-full py-4">
                  Solicitar información por WhatsApp
                </WhatsAppButton>
                <ContactButton className="btn-ghost-light w-full py-4" experience="Tailor-Made" packageName={pkg.title}>
                  Solicitar propuesta por correo
                </ContactButton>
              </div>
              <p className="mt-5 text-center text-xs leading-relaxed text-ivory/70">
                Fechas y disponibilidad se confirman con Kastell antes de reservar.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <Reveal>
              <Link href="/experiencias" className="mb-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-gold-deep">
                <ArrowLeft className="h-4 w-4" aria-hidden /> Todos los paquetes y experiencias
              </Link>
              {pkg.description && <p className="font-serif text-2xl leading-snug md:text-[1.7rem]">{pkg.description}</p>}
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Destinos incluidos">
                {pkg.destinations.map((d) => (
                  <li key={d} className="chip">
                    <MapPin className="h-3 w-3 text-gold-deep" aria-hidden /> {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <ReviewNotes notes={pkg.reviewNotes} />

            {pkg.highlights && (
              <Reveal className="mt-12">
                <h2 className="eyebrow mb-5 text-gold-deep">Lo más especial</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 rounded-2xl bg-ivory-deep p-4 text-sm">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {pkg.itinerary && (
              <Reveal className="mt-14">
                <h2 className="mb-2 text-display-sm">{pkg.itineraryKind === "nights" ? "Ruta y noches" : "Itinerario día a día"}</h2>
                {hasDetailedItinerary && pkg.itineraryKind !== "nights" && <p className="mb-6 text-sm text-ink-muted">Toca cada día para ver el detalle.</p>}
                <div className="mt-5">
                  {hasDetailedItinerary && pkg.itineraryKind !== "nights" ? <ItineraryAccordion days={pkg.itinerary} /> : <ItineraryList items={pkg.itinerary} />}
                </div>
                {pkg.itineraryNote && (
                  <p className="mt-5 flex items-start gap-3 rounded-2xl bg-ivory-deep p-4 text-sm leading-relaxed text-ink-muted">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> {pkg.itineraryNote}
                  </p>
                )}
              </Reveal>
            )}

            <Reveal className="mt-14 grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-5 text-display-sm">Qué incluye</h2>
                {pkg.includes ? (
                  <ul className="space-y-3">
                    {pkg.includes.map((it) => (
                      <li key={it} className="flex items-start gap-3 border-b border-ink/10 pb-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> {it}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="rounded-2xl bg-ivory-deep p-4 text-sm leading-relaxed text-ink-muted">{pkg.includesNote ?? "Las inclusiones se confirman con Kastell al solicitar el paquete."}</p>
                )}
              </div>
              <div>
                <h2 className="mb-5 text-display-sm">Qué no incluye</h2>
                {pkg.excludes ? (
                  <ul className="space-y-3">
                    {pkg.excludes.map((it) => (
                      <li key={it} className="flex items-start gap-3 border-b border-ink/10 pb-3 text-sm">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" aria-hidden /> {it}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="rounded-2xl bg-ivory-deep p-4 text-sm leading-relaxed text-ink-muted">
                    La información disponible no detalla exclusiones para este paquete. Confirma con Kastell qué servicios no están incluidos.
                  </p>
                )}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="mb-5 text-display-sm">Condiciones</h2>
              {pkg.conditions && (
                <ul className="space-y-2.5 text-sm text-ink-muted">
                  {pkg.conditions.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden /> {c}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                Las condiciones pueden variar según el paquete, temporada, proveedor y disponibilidad. Confirma los detalles con Kastell antes de reservar.
              </p>
              <Link href="/reservas-y-condiciones" className="link-underline mt-4 text-ink">
                <ScrollText className="h-4 w-4" aria-hidden /> Reservas y condiciones <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>

            {pkg.gallery && (
              <Reveal className="mt-14 grid grid-cols-2 gap-4">
                {pkg.gallery.map((g, i) => (
                  <div key={g.src} className={i === 0 ? "relative col-span-2 aspect-[16/9] overflow-hidden rounded-4xl" : "relative aspect-square overflow-hidden rounded-4xl"}>
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                  </div>
                ))}
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <FinalCTA
        title="¿Lo hacemos realidad?"
        intro="Escríbenos con tus fechas tentativas y el número de viajeros. Te respondemos con la información de este paquete."
        whatsappMessage={pkg.whatsappMessage}
        defaultExperience="Tailor-Made"
      />
    </>
  );
}
