import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, ShieldCheck, Users } from "lucide-react";
import { waMessages } from "@/lib/whatsapp";
import { Reveal } from "../Reveal";
import { WhatsAppButton } from "../WhatsAppButton";

export function SustainabilityTeaser() {
  const items = [
    { icon: Leaf, title: "Compromiso ambiental", text: "Reciclaje, uso eficiente de agua y energía, productos biodegradables." },
    { icon: Users, title: "Compromiso social", text: "Apoyo a comunidades locales y respeto por su cultura." },
    { icon: ShieldCheck, title: "Código de Conducta", text: "Contra la explotación sexual infantil en viajes y turismo." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-4xl bg-ink text-ivory">
          {/* TODO: reemplazar con foto real de una experiencia sostenible Kastell */}
          <Image src="/images/sostenibilidad-bosque.jpg" alt="" fill sizes="100vw" className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" aria-hidden />
          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-12 lg:p-20">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow mb-6 text-gold-light">Sostenibilidad</p>
              <h2 className="text-display-md">
                Viajar bonito es también <span className="text-gold-light">viajar bien</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/80">
                Contamos con una política de sostenibilidad formal que guía cómo operamos y con quién trabajamos. Porque el lujo verdadero cuida el lugar que lo hace posible.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link href="/sostenibilidad" className="btn-gold">
                  Nuestro compromiso <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <WhatsAppButton message={waMessages.sustainability} variant="link-light">
                  Viaje sostenible por WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>
            <ul className="grid gap-4 self-end lg:col-span-5 lg:col-start-8">
              {items.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={0.08 * i} className="flex items-start gap-5 rounded-3xl border border-ivory/15 bg-ink/40 p-6 backdrop-blur-md">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-light"><Icon className="h-6 w-6 text-ink" strokeWidth={1.8} aria-hidden /></span>
                  <div>
                    <h3 className="font-serif text-xl">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ivory/70">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
