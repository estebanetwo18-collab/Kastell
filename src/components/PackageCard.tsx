import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import type { ExperiencePackage } from "@/content";
import { packageHref } from "@/content";
import { REVIEW_MODE } from "@/lib/format";
import { cn } from "@/lib/cn";
import { PackagePrice } from "./PackagePrice";
import { WhatsAppButton } from "./WhatsAppButton";

export function packageDuration(p: ExperiencePackage) {
  if (p.durationLabel) return p.durationLabel;
  if (p.durationDays && p.durationNights) return `${p.durationDays} días / ${p.durationNights} noches`;
  if (p.durationDays) return `${p.durationDays} días`;
  if (p.durationNights) return `${p.durationNights} noches`;
  return undefined;
}

/** Tarjeta resumida de paquete. El detalle completo vive en la página/panel de detalle. */
export function PackageCard({ pkg, className }: { pkg: ExperiencePackage; className?: string }) {
  const href = packageHref(pkg);
  const duration = packageDuration(pkg);
  const showDate = pkg.dateLabel;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-4xl bg-white/60 ring-1 ring-ink/5 transition duration-500 hover:-translate-y-1 hover:shadow-float",
        className
      )}
    >
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden" tabIndex={-1} aria-hidden>
        <Image
          src={pkg.image.src}
          alt=""
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          style={{ objectPosition: pkg.imagePosition }}
          className="object-cover transition duration-[1.4s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" aria-hidden />
        {duration && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ivory/95 px-3.5 py-1.5 text-xs font-semibold text-ink backdrop-blur">
            <Clock className="h-3.5 w-3.5 text-gold-deep" aria-hidden /> {duration}
          </span>
        )}
        {pkg.needsConfirmation && (
          <span className="absolute right-4 top-4 rounded-full bg-gold-light px-3 py-1.5 text-xs font-bold text-ink">Por confirmar</span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-deep">{pkg.eyebrow}</p>
        <h3 className="mt-2.5 font-serif text-xl leading-snug text-ink md:text-2xl">
          <Link href={href} className="after:absolute after:inset-0 focus:outline-none">
            {pkg.title}
          </Link>
        </h3>

        <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
          {pkg.destinationLabel && (
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> <span>{pkg.destinationLabel}</span>
            </li>
          )}
          {showDate && (
            <li className="flex items-start gap-2 font-medium text-ink">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden /> <span>{pkg.dateLabel}</span>
            </li>
          )}
        </ul>

        <PackagePrice pkg={pkg} className="mt-5 border-t border-ink/10 pt-5" />
        {pkg.price?.note && <p className="mt-2 text-xs leading-relaxed text-stone">{pkg.price.note}</p>}

        {REVIEW_MODE && pkg.reviewNotes?.length ? (
          <p className="mt-4 rounded-xl bg-[#FFF4DC] px-3 py-2 text-xs font-bold text-[#4A2F00]">Revisar: {pkg.reviewNotes.length} nota(s) interna(s)</p>
        ) : null}

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3 pt-6">
          <Link href={href} className="btn-ink px-5 py-3">
            Ver detalles <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          <WhatsAppButton message={pkg.whatsappMessage} variant="ghost-dark" className="px-5 py-3" iconSize={16}>
            Solicitar información
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
