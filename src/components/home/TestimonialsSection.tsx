import Image from "next/image";
import { testimonials } from "@/content";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { Reveal } from "../Reveal";
import { TestimonialCarousel } from "../Testimonials";
import { WhatsAppButton } from "../WhatsAppButton";
import { FacebookIcon } from "../icons";

export function TestimonialsSection() {
  return (
    <section className="section bg-jungle text-ivory">
      <div className="container grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
              {/* TODO: reemplazar con foto real de clientes Kastell (con su autorización) */}
              <Image src="/images/boda-pareja.jpg" alt="Pareja celebrando en un bosque" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-3 hidden w-40 overflow-hidden rounded-3xl border-4 border-jungle sm:block md:w-48">
              <div className="relative aspect-square">
                <Image src="/images/boda-anillos.jpg" alt="Anillos de boda" fill sizes="192px" className="object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <p className="eyebrow mb-8 text-gold-light">Palabras de nuestros clientes</p>
            <TestimonialCarousel items={testimonials} />
          </Reveal>
          <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-6 border-t border-ivory/15 pt-8">
            <WhatsAppButton message={waMessages.testimonials}>Quiero vivir mi experiencia</WhatsAppButton>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="link-underline text-ivory/85">
              <FacebookIcon size={16} /> Más recomendaciones en Facebook
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
