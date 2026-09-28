import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/content";
import { cn } from "@/lib/cn";
import { DynamicIcon } from "../icons";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { WhatsAppButton } from "../WhatsAppButton";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

export function Offer() {
  return (
    <section id="que-ofrecemos" className="section bg-ivory-deep">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Qué ofrecemos"
            title={<>Cinco maneras de vivir <span className="text-gold-deep">Costa Rica</span></>}
            intro="Cada línea de experiencia tiene su propio lenguaje, pero todas comparten lo esencial: diseño a la medida, ejecución impecable y una atención que se siente."
          />
          <Reveal>
            <Link href="/servicios" className="link-underline shrink-0 text-ink">
              Ver todos los servicios <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.id} delay={0.06 * i} className={cn(spans[i], i === 0 && "md:col-span-2 lg:col-span-7")}>
              <article className="group relative flex h-full min-h-[30rem] flex-col justify-end overflow-hidden rounded-4xl bg-ink text-ivory">
                <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw" className="object-cover opacity-75 transition duration-[1.4s] group-hover:scale-105 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" aria-hidden />
                <div className="relative p-7 md:p-8">
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-ivory/30 bg-ivory/10 backdrop-blur">
                    <DynamicIcon name={p.icon} className="h-6 w-6 text-gold-light" />
                  </span>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-eyebrow text-gold-light">{p.subtitle}</p>
                  <h3 className="mt-2 font-serif text-3xl md:text-4xl">
                    <Link href={p.href} className="after:absolute after:inset-0">{p.title}</Link>
                  </h3>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ivory/80">{p.description}</p>
                  <div className="relative z-10 mt-6">
                    <WhatsAppButton message={p.whatsappMessage} variant="ghost-light" className="px-5 py-2.5 text-[0.8rem]" iconSize={16}>
                      Consultar por WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
