import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";
import { itineraryPackages, mission, pillars } from "@/content";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory/75">
      {/* pb extra: el botón flotante de WhatsApp no tapa la última fila del footer */}
      <div className="container pb-28 pt-24 lg:pb-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="w-48">
              <Logo variant="light" />
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed">{mission}</p>
            <a href={waLink(waMessages.footer)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8">
              <WhatsAppIcon size={18} /> {site.whatsapp.display}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className="mb-5 font-sans text-[0.7rem] font-semibold uppercase tracking-eyebrow text-gold-light">Explora</h2>
              <ul className="text-sm">
                {mainNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="inline-flex min-h-[44px] min-w-[44px] items-center transition hover:text-ivory">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-5 font-sans text-[0.7rem] font-semibold uppercase tracking-eyebrow text-gold-light">Experiencias destacadas</h2>
              <ul className="text-sm">
                {itineraryPackages.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/experiencias/${p.slug}`} className="inline-flex min-h-[44px] min-w-[44px] items-center transition hover:text-ivory">{p.title}</Link>
                  </li>
                ))}
                {pillars.map((p) => (
                  <li key={p.id}>
                    <Link href={p.href} className="inline-flex min-h-[44px] min-w-[44px] items-center transition hover:text-ivory">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-5 font-sans text-[0.7rem] font-semibold uppercase tracking-eyebrow text-gold-light">Contacto</h2>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href={waLink(waMessages.footer)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-3 transition hover:text-ivory">
                    <WhatsAppIcon size={16} /> WhatsApp {site.whatsapp.display}
                  </a>
                </li>
                <li>
                  <a href={site.phone.href} className="inline-flex min-h-[44px] items-center gap-3 transition hover:text-ivory">
                    <Phone className="h-4 w-4" aria-hidden /> {site.phone.display}
                  </a>
                </li>
                {site.email && (
                  <li>
                    <a href={`mailto:${site.email}`} className="inline-flex min-h-[44px] items-center gap-3 transition hover:text-ivory">
                      <Mail className="h-4 w-4" aria-hidden /> {site.email}
                    </a>
                  </li>
                )}
                <li className="inline-flex min-h-[44px] items-center gap-3">
                  <MapPin className="h-4 w-4" aria-hidden /> {site.address.city}, {site.address.country}
                </li>
                <li className="flex gap-3 pt-2">
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Kastell" className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 transition hover:border-gold hover:text-gold-light">
                    <InstagramIcon size={16} />
                  </a>
                  <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Kastell" className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 transition hover:border-gold hover:text-gold-light">
                    <FacebookIcon size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certificaciones y afiliaciones */}
        <div className="mt-20 border-t border-ivory/10 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-eyebrow text-gold-light">Certificaciones y afiliaciones</h2>
              <p className="mt-2 max-w-md text-xs text-ivory/55">
                Operamos bajo el marco legal costarricense de turismo responsable y un Código de Conducta contra la explotación sexual infantil.{" "}
                <Link href="/sostenibilidad" className="tap-target inline-block whitespace-nowrap underline underline-offset-4 hover:text-ivory">Conoce nuestra política</Link>.
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-4" aria-label="Sellos y certificaciones">
              <li className="flex items-center gap-3 rounded-2xl border border-ivory/15 px-4 py-3">
                <ShieldCheck className="h-6 w-6 text-gold-light" strokeWidth={1.4} aria-hidden />
                <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em] text-ivory/70">
                  Código de Conducta
                  <br />
                  <span className="font-normal normal-case tracking-normal text-ivory/50">Protección de la niñez</span>
                </span>
              </li>
              {/* TODO: agregar logos de certificación cuando el cliente los tenga (ICT, CST u otras).
                  1. Guardar los archivos en /public/brand/certificaciones/
                  2. Agregarlos en `certifications` dentro de src/lib/site.ts */}
              {site.certifications.map((c) => (
                <li key={c.name} className="flex h-14 items-center rounded-2xl bg-ivory/95 px-4">
                  <Image src={c.logo} alt={c.name} width={120} height={48} className="h-9 w-auto object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Todos los derechos reservados.</p>
          <p className="font-serif text-sm text-ivory/60">{site.essence}</p>
          <a href={site.sustainabilityPolicyPdf} target="_blank" rel="noopener" className="tap-target inline-flex items-center gap-1 transition hover:text-ivory">
            Política de sostenibilidad (PDF) <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
