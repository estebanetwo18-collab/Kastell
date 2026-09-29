import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Hero editorial para páginas internas (fondo de foto + título grande). */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image: { src: string; alt: string };
  breadcrumb: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-ink text-ivory">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-10 animate-slow-zoom object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/30" aria-hidden />
      <div className="container pb-16 pt-44 md:pb-24">
        <nav aria-label="Ruta de navegación" className="mb-8 text-sm text-ivory/75">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="tap-target transition hover:text-ivory">Inicio</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li aria-current="page" className="text-ivory">{breadcrumb}</li>
          </ol>
        </nav>
        <p className="eyebrow mb-6 text-gold-light">{eyebrow}</p>
        <h1 className="max-w-5xl text-display-lg">{title}</h1>
        {intro && <p className="mt-7 max-w-2xl text-[0.95rem] leading-relaxed text-ivory/80">{intro}</p>}
        {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
