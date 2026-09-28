import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { ContactPageForm } from "@/components/ContactPageForm";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Escríbenos por WhatsApp al +506 6407 2932 o envíanos tu solicitud. Diseñamos tu viaje, boda destino o evento en Costa Rica.",
  path: "/contacto",
});

export default function ContactoPage() {
  const channels = [
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.whatsapp.display, href: waLink(waMessages.contact), external: true },
    { icon: Phone, label: "Teléfono", value: site.phone.display, href: site.phone.href },
    ...(site.email ? [{ icon: Mail, label: "Correo", value: site.email, href: `mailto:${site.email}` }] : []),
    { icon: InstagramIcon, label: "Instagram", value: "Síguenos en Instagram", href: site.social.instagram, external: true },
    { icon: FacebookIcon, label: "Facebook", value: "Síguenos en Facebook", href: site.social.facebook, external: true },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        breadcrumb="Contacto"
        title={<>Empecemos a planear tu <span className="text-gold-light">viaje</span></>}
        intro="Cuéntanos qué imaginas. Te respondemos con una propuesta pensada para ti, sin compromiso."
        // TODO: reemplazar con foto real
        image={{ src: "/images/contacto.jpg", alt: "Playa tropical con palmeras y arena blanca" }}
      >
        <WhatsAppButton message={waMessages.contact}>Escríbenos por WhatsApp</WhatsAppButton>
      </PageHero>

      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6 text-gold-deep">Canales directos</p>
              <h2 className="text-display-sm">La forma más rápida: WhatsApp</h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Escríbenos y conversemos directamente con nuestro equipo. También puedes usar el formulario y te contactamos por correo o WhatsApp.
              </p>
            </Reveal>
            <ul className="mt-10 space-y-3">
              {channels.map(({ icon: Icon, label, value, href, external }, i) => (
                <Reveal as="li" key={label} delay={0.05 * i}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-3xl border border-ink/10 bg-white/50 p-5 transition hover:border-gold/50 hover:bg-white"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-jungle text-gold-light transition group-hover:bg-gold-light group-hover:text-ink">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-stone">{label}</span>
                      <span className="font-semibold">{value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
              <Reveal as="li" className="flex items-center gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-jungle text-gold-light">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-stone">Ubicación</span>
                  <span className="font-semibold">{site.address.city}, {site.address.country}</span>
                </span>
              </Reveal>
              <Reveal as="li" className="flex items-center gap-4 px-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-jungle text-gold-light">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm text-ink-muted">Respondemos con rapidez a viajeros y agencias.</span>
              </Reveal>
            </ul>
          </div>

          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="rounded-4xl bg-white/60 p-7 shadow-soft ring-1 ring-ink/5 sm:p-12">
              <h2 className="font-serif text-4xl">Cuéntanos tu idea</h2>
              <p className="mb-10 mt-2 text-ink-muted">Todos los campos son necesarios, excepto la fecha.</p>
              <Suspense>
                <ContactPageForm />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
