import Image from "next/image";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

/** CTA final estilo "tarjeta de contacto": foto + tarjeta flotante con formulario. */
export function FinalCTA({
  title = "¿Listo para tu próxima experiencia?",
  intro = "Cuéntanos qué sueñas vivir en Costa Rica. Te respondemos con una propuesta pensada para ti, sin compromiso.",
  whatsappMessage,
  defaultExperience,
}: {
  title?: string;
  intro?: string;
  whatsappMessage: string;
  defaultExperience?: string;
}) {
  return (
    <section id="contacto-rapido" className="relative isolate overflow-hidden bg-jungle-deep py-24 md:py-32">
      {/* TODO: reemplazar con foto real de la sección de contacto */}
      <Image src="/images/cta-playa.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-jungle-deep via-jungle-deep/85 to-jungle-deep/40" aria-hidden />
      <div className="container grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6 text-gold-light">Empecemos a planear</p>
          <h2 className="text-display-lg text-ivory">{title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed md:text-[1.05rem] text-ivory/75">{intro}</p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <WhatsAppButton message={whatsappMessage} className="px-7 py-4 text-base" iconSize={22}>
              Escríbenos al {site.whatsapp.display}
            </WhatsAppButton>
            <p className="text-sm text-ivory/60">Respuesta rápida · Atención personalizada antes, durante y después del viaje</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-4xl bg-ivory p-7 shadow-float sm:p-10">
            <h3 className="font-serif text-3xl text-ink">¿Tienes una pregunta?</h3>
            <p className="mb-8 mt-2 text-ink-muted">Déjanos tus datos y te contactamos muy pronto.</p>
            <ContactForm compact defaultExperience={defaultExperience} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
