import { pageMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { ExperienceCatalog } from "@/components/ExperienceCatalog";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = pageMetadata({
  title: "Experiencias y paquetes en Costa Rica",
  description:
    "Explora nuestras experiencias en Costa Rica: luna de miel en Arenal y Monteverde, bodas destino, viajes de incentivo, viajes multidestino y escapadas privadas de lujo.",
  path: "/experiencias",
});

export default function ExperienciasPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiencias"
        breadcrumb="Experiencias"
        title={<>Viajes que se <em className="italic text-gold-light">sienten</em>, no solo se recorren</>}
        intro="Itinerarios de autor y líneas de experiencia a la medida. Todos pueden adaptarse a tus fechas, tu grupo y tu forma de viajar."
        // TODO: reemplazar con foto real de experiencias Kastell
        image={{ src: "/images/puentes-colgantes.jpg", alt: "Viajero cruzando un puente colgante entre montañas" }}
      >
        <WhatsAppButton message={waMessages.experiences}>Cotizar por WhatsApp</WhatsAppButton>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Paquetes turísticos"
            title={<>Elige tu punto de <em className="italic text-gold-deep">partida</em></>}
            intro="Filtra por tipo de experiencia o por destino. Si no encuentras exactamente lo que buscas, lo diseñamos contigo."
            className="mb-14"
          />
          <ExperienceCatalog />
        </div>
      </section>

      <FinalCTA whatsappMessage={waMessages.experiences} defaultExperience="Tailor-Made" />
    </>
  );
}
