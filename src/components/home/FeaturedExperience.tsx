import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { featuredPackage as pkg } from "@/content";
import { formatPrice } from "@/lib/format";
import { ItineraryAccordion } from "../ItineraryAccordion";
import { Reveal } from "../Reveal";
import { WhatsAppButton } from "../WhatsAppButton";

export function FeaturedExperience() {
  return (
    <section id="experiencias" className="section relative overflow-hidden bg-ink text-ivory">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow mb-6 text-gold-light">Experiencia destacada</p>
            <h2 className="max-w-3xl text-display-md">{pkg.title}</h2>
          </Reveal>
          <Reveal>
            <Link href="/experiencias" className="link-underline shrink-0 text-gold-light">
              Ver todas las experiencias <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
              <Image src={pkg.image.src} alt={pkg.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-ink/70 p-6 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-ivory/70">Desde</p>
                <p className="font-serif text-4xl text-ivory">
                  {formatPrice(pkg.price!.amount)} <span className="font-sans text-sm text-ivory/70">por persona</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ivory/70">{pkg.price!.note}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-ink">
                  <Clock className="h-3.5 w-3.5" aria-hidden /> {pkg.durationDays} días / {pkg.durationNights} noches
                </span>
                <ul className="flex flex-wrap gap-2" aria-label="Destinos incluidos">
                  {pkg.destinations.map((d) => (
                    <li key={d} className="inline-flex items-center gap-1.5 rounded-full border border-ivory/20 px-3 py-1.5 text-xs text-ivory/85">
                      <MapPin className="h-3 w-3 text-gold-light" aria-hidden /> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 text-[0.9rem] leading-relaxed text-ivory/75">{pkg.summary}</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <ItineraryAccordion days={pkg.itinerary!} tone="dark" />
            </Reveal>
            <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton message={pkg.whatsappMessage} className="px-7 py-4">
                Cotizar este viaje por WhatsApp
              </WhatsAppButton>
              <Link href={`/experiencias/${pkg.slug}`} className="btn-ghost-light px-7 py-4">
                Ver itinerario completo <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
