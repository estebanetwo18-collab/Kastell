import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, MapPin, Sparkles } from "lucide-react";
import { getPackage, itineraryPackages } from "@/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ItineraryAccordion } from "@/components/ItineraryAccordion";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactButton } from "@/components/ContactModal";
import { FinalCTA } from "@/components/FinalCTA";
import { formatPrice } from "@/components/PackageCard";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return itineraryPackages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const pkg = getPackage(params.slug);
  if (!pkg) return {};
  return pageMetadata({
    title: `${pkg.title} · ${pkg.durationDays} días / ${pkg.durationNights} noches`,
    description: pkg.summary,
    path: `/experiencias/${pkg.slug}`,
    image: { url: pkg.image.src, alt: pkg.image.alt },
  });
}

export default function PackagePage({ params }: Props) {
  const pkg = getPackage(params.slug);
  if (!pkg || !pkg.itinerary) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description ?? pkg.summary,
    image: `${site.url}${pkg.image.src}`,
    touristType: pkg.types,
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "TouristDestination", name: d.location, description: `${d.label}: ${d.title}` },
      })),
    },
    provider: { "@id": `${site.url}/#organization` },
    ...(pkg.priceFrom
      ? { offers: { "@type": "Offer", price: pkg.priceFrom, priceCurrency: pkg.currency ?? "USD", description: pkg.priceNote, url: `${site.url}/experiencias/${pkg.slug}` } }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={pkg.eyebrow} breadcrumb={pkg.title} title={pkg.title} intro={pkg.summary} image={pkg.image}>
        <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink">
          <Clock className="h-4 w-4" aria-hidden /> {pkg.durationDays} días / {pkg.durationNights} noches
        </span>
        {pkg.destinations.map((d) => (
          <span key={d} className="inline-flex items-center gap-1.5 rounded-full border border-ivory/30 px-4 py-2 text-sm text-ivory backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-gold-light" aria-hidden /> {d}
          </span>
        ))}
      </PageHero>

      <section className="section">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Link href="/experiencias" className="mb-10 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-gold-deep">
                <ArrowLeft className="h-4 w-4" aria-hidden /> Todas las experiencias
              </Link>
              <p className="font-serif text-3xl leading-snug">{pkg.description}</p>
            </Reveal>

            {pkg.highlights && (
              <Reveal className="mt-14">
                <h2 className="eyebrow mb-6 text-gold-deep">Lo más especial</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 rounded-2xl bg-ivory-deep p-4">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal className="mt-16">
              <h2 className="mb-2 text-display-sm">Itinerario día a día</h2>
              <p className="mb-8 text-ink-muted">Toca cada día para ver el detalle.</p>
              <ItineraryAccordion days={pkg.itinerary} />
            </Reveal>

            {pkg.includes && (
              <Reveal className="mt-16">
                <h2 className="mb-6 text-display-sm">Qué incluye</h2>
                <ul className="space-y-3">
                  {pkg.includes.map((it) => (
                    <li key={it} className="flex items-start gap-3 border-b border-ink/10 pb-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {pkg.gallery && (
              <Reveal className="mt-16 grid grid-cols-2 gap-4">
                {pkg.gallery.map((g, i) => (
                  <div key={g.src} className={i === 0 ? "relative col-span-2 aspect-[16/9] overflow-hidden rounded-4xl" : "relative aspect-square overflow-hidden rounded-4xl"}>
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                  </div>
                ))}
              </Reveal>
            )}
          </div>

          {/* Tarjeta de reserva */}
          <aside className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-4xl bg-ink p-8 text-ivory shadow-float lg:sticky lg:top-32 md:p-10">
              {pkg.priceFrom && (
                <>
                  <p className="text-xs uppercase tracking-[0.2em] text-ivory/60">Desde</p>
                  <p className="mt-1 font-serif text-5xl">{formatPrice(pkg.priceFrom)}</p>
                  <p className="mt-1 text-sm text-ivory/70">por persona</p>
                  <p className="mt-4 text-xs leading-relaxed text-ivory/55">{pkg.priceNote}</p>
                </>
              )}
              <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-ivory/15 py-6 text-sm">
                <div>
                  <dt className="text-ivory/55">Duración</dt>
                  <dd className="mt-1 font-semibold">{pkg.durationDays} días / {pkg.durationNights} noches</dd>
                </div>
                <div>
                  <dt className="text-ivory/55">Destinos</dt>
                  <dd className="mt-1 font-semibold">{pkg.destinations.join(" · ")}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3">
                <WhatsAppButton message={pkg.whatsappMessage} className="w-full py-4">
                  Cotizar este viaje por WhatsApp
                </WhatsAppButton>
                <ContactButton className="btn-ghost-light w-full py-4" experience="Tailor-Made" packageName={pkg.title}>
                  Solicitar propuesta por correo
                </ContactButton>
              </div>
              <p className="mt-6 text-center text-xs text-ivory/55">Podemos adaptar fechas, hoteles y actividades a tu gusto.</p>
            </div>
          </aside>
        </div>
      </section>

      <FinalCTA
        title="¿Lo hacemos realidad?"
        intro="Escríbenos con tus fechas tentativas y el número de viajeros. Te enviamos una propuesta personalizada de este itinerario."
        whatsappMessage={pkg.whatsappMessage}
        defaultExperience="Tailor-Made"
      />
    </>
  );
}
