import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight, ScrollText } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { CatalogWithParams } from "@/components/CatalogWithParams";
import { ExperienceCatalog } from "@/components/ExperienceCatalog";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMetadata({
  title: "Paquetes y experiencias",
  description:
    "Paquetes en Costa Rica, viajes internacionales a México, crucero por el Caribe y excursiones de un día. Precios, fechas y condiciones de cada paquete.",
  path: "/experiencias",
});

export default function ExperienciasPage() {
  return (
    <>
      <PageHero
        eyebrow="Paquetes y experiencias"
        breadcrumb="Paquetes y experiencias"
        title={<>Viajes que se <span className="text-gold-light">sienten</span>, no solo se recorren</>}
        intro="Paquetes por Costa Rica, viajes a México, crucero por el Caribe y excursiones de un día. Todos pueden consultarse y adaptarse con nuestro equipo."
        // TODO: reemplazar con foto real de experiencias Kastell
        image={{ src: "/images/puentes-colgantes.jpg", alt: "Viajero cruzando un puente colgante entre montañas" }}
        compact
      >
        <WhatsAppButton message={waMessages.experiences}>Solicitar información</WhatsAppButton>
      </PageHero>

      <section id="paquetes" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Paquetes y experiencias"
            title={<>Elige tu punto de <span className="text-gold-deep">partida</span></>}
            intro="Filtra por categoría. Cada tarjeta resume fecha, duración y precio; en “Ver detalles” encuentras itinerario, inclusiones y condiciones."
            className="mb-12"
          />
          <Suspense fallback={<ExperienceCatalog />}>
            <CatalogWithParams />
          </Suspense>
        </div>
      </section>

      <section className="bg-ivory-deep py-16 md:py-20">
        <div className="container">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-eyebrow text-gold-deep">
                <ScrollText className="h-4 w-4" aria-hidden /> Reservas y condiciones
              </p>
              <h2 className="mt-3 text-display-sm">Antes de reservar</h2>
              <p className="mt-3 text-ink-muted">
                Las condiciones pueden variar según el paquete, temporada, proveedor y disponibilidad. Confirma los detalles con Kastell antes de reservar.
              </p>
            </div>
            <Link href="/reservas-y-condiciones" className="btn-ink shrink-0">
              Ver reservas y condiciones <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA whatsappMessage={waMessages.experiences} defaultExperience="Tailor-Made" />
    </>
  );
}
