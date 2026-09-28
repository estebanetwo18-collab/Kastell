import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import type { ExperiencePackage } from "@/content";
import { cn } from "@/lib/cn";
import { WhatsAppButton } from "./WhatsAppButton";
import { ContactButton } from "./ContactModal";

export function packageHref(p: ExperiencePackage) {
  return p.kind === "itinerary" ? `/experiencias/${p.slug}` : p.href ?? "/experiencias";
}

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

const experienceForContact: Record<string, string> = {
  bodas: "Destination Wedding",
  corporativo: "Corporate & Incentives",
  multidestino: "Multidestination",
  lujo: "Luxury Travel",
};

export function PackageCard({ pkg, className }: { pkg: ExperiencePackage; className?: string }) {
  const href = packageHref(pkg);
  const duration = pkg.kind === "itinerary" ? `${pkg.durationDays} días / ${pkg.durationNights} noches` : pkg.durationLabel;
  const experience = pkg.types.map((t) => experienceForContact[t]).find(Boolean) ?? "Tailor-Made";

  return (
    <article className={cn("group relative flex h-full flex-col overflow-hidden rounded-4xl bg-white/60 ring-1 ring-ink/5 transition duration-500 hover:-translate-y-1 hover:shadow-float", className)}>
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden" tabIndex={-1} aria-hidden>
        <Image src={pkg.image.src} alt="" fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover transition duration-[1.4s] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ivory/90 px-3.5 py-1.5 text-xs font-semibold text-ink backdrop-blur">
          <Clock className="h-3.5 w-3.5 text-gold-deep" aria-hidden /> {duration}
        </span>
        {pkg.priceFrom && (
          <span className="absolute bottom-5 left-5 font-serif text-ivory">
            <span className="block text-xs font-sans uppercase tracking-[0.2em] text-ivory/80">Desde</span>
            <span className="text-3xl">{formatPrice(pkg.priceFrom)}</span>
            <span className="text-xs font-sans text-ivory/80"> / persona*</span>
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-deep">{pkg.eyebrow}</p>
        <h3 className="mt-3 font-serif text-[1.75rem] leading-tight text-ink">
          <Link href={href} className="after:absolute after:inset-0 focus:outline-none">
            {pkg.title}
          </Link>
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Destinos incluidos">
          {pkg.destinations.map((d) => (
            <li key={d} className="chip">
              <MapPin className="h-3 w-3 text-gold-deep" aria-hidden /> {d}
            </li>
          ))}
        </ul>
        <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink-muted">{pkg.summary}</p>
        <div className="relative z-10 mt-7 flex flex-wrap items-center gap-3">
          <Link href={href} className="btn-ink px-5 py-3">
            Explorar <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          <ContactButton className="btn-ghost-dark px-5 py-3" experience={experience} packageName={pkg.title}>
            Contáctanos
          </ContactButton>
          <WhatsAppButton message={pkg.whatsappMessage} variant="link" className="ml-auto" iconSize={16}>
            Cotizar
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
