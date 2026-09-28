import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { featuredPackage } from "@/content";
import { WhatsAppButton } from "../WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
      {/* TODO: reemplazar con foto (o video) real del hero — naturaleza costarricense de lujo */}
      <Image
        src="/images/hero.jpg"
        alt="Río turquesa entre palmeras en la selva tropical de Costa Rica"
        fill
        priority
        sizes="100vw"
        className="-z-10 animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent" aria-hidden />

      <div className="container grid gap-12 pb-24 pt-40 md:pb-28 lg:grid-cols-12 lg:items-end lg:pb-32">
        <div className="lg:col-span-8">
          <p className="eyebrow mb-7 text-ivory [text-shadow:0_1px_12px_rgba(20,19,16,0.6)]">
            Destination Management Company · Costa Rica
          </p>
          <h1 className="text-display-xl text-gold-light [text-shadow:0_2px_24px_rgba(20,19,16,0.45)]">
            El arte de crear
            <br />
            <span className="font-light text-ivory">experiencias</span> únicas
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/85 md:text-xl">{site.promise}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppButton message={waMessages.hero} className="px-7 py-4">
              Diseñemos tu viaje
            </WhatsAppButton>
            <Link href="#experiencias" className="btn-ghost-light px-7 py-4">
              Ver experiencias <ArrowDown className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Tarjeta flotante: experiencia destacada */}
        <div className="hidden lg:col-span-4 lg:block lg:pb-10">
          <Link
            href={`/experiencias/${featuredPackage.slug}`}
            className="group ml-auto flex max-w-sm items-center gap-4 rounded-3xl border border-ivory/15 bg-ivory/10 p-3 pr-5 backdrop-blur-md transition hover:bg-ivory/20"
          >
            <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
              <Image src={featuredPackage.image.src} alt="" fill sizes="96px" className="object-cover transition duration-700 group-hover:scale-110" />
            </span>
            <span className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Experiencia destacada</span>
              <span className="mt-1 block font-serif text-xl leading-tight">{featuredPackage.title}</span>
              <span className="mt-1 block text-xs text-ivory/70">
                {featuredPackage.durationDays} días / {featuredPackage.durationNights} noches
              </span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-light transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
