import { differentiators } from "@/content";
import { waMessages } from "@/lib/whatsapp";
import { DynamicIcon } from "../icons";
import { Reveal } from "../Reveal";
import { WhatsAppButton } from "../WhatsAppButton";

export function Difference() {
  return (
    <section className="section">
      <div className="container grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow mb-6 text-gold-deep">Nuestra diferencia</p>
              <h2 className="text-display-md">
                Lo que no se ve, <em className="italic text-gold-deep">se siente</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Un gran viaje se construye con cientos de decisiones bien tomadas. Estas son las que nos definen.
              </p>
              <WhatsAppButton message={waMessages.difference} variant="ink" className="mt-10">
                Hablemos de tu viaje
              </WhatsAppButton>
            </Reveal>
          </div>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-4xl bg-ink/10 sm:grid-cols-2 lg:col-span-8">
          {differentiators.map((d, i) => (
            <Reveal as="li" key={d.title} delay={0.05 * i} className="group bg-ivory p-8 transition-colors duration-500 hover:bg-white md:p-10">
              <div className="flex items-start justify-between">
                <DynamicIcon name={d.icon} className="h-9 w-9 text-gold-deep transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.2} />
                <span className="font-serif text-lg italic text-ink/30">0{i + 1}</span>
              </div>
              <h3 className="mt-10 font-serif text-2xl leading-snug md:text-[1.7rem]">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{d.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
