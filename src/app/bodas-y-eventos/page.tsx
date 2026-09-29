import Image from "next/image";
import { Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactButton } from "@/components/ContactModal";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = pageMetadata({
  title: "Bodas destino y eventos en Costa Rica",
  description:
    "Bodas destino, eventos corporativos, viajes de incentivo y celebraciones especiales en Costa Rica, diseñados y coordinados por Kastell Tours & Events.",
  path: "/bodas-y-eventos",
  image: { url: "/images/boda-pareja.jpg", alt: "Pareja de novios en Costa Rica" },
});

const weddingSteps = [
  { title: "Soñamos juntos", text: "Conversamos sobre su historia, estilo, número de invitados y presupuesto para entender la boda que imaginan." },
  { title: "Diseñamos la experiencia", text: "Proponemos locaciones, proveedores, ambientación y una experiencia completa para ustedes y sus invitados." },
  { title: "Coordinamos cada detalle", text: "Hospedaje, traslados, actividades para invitados, ensayos y cronograma: todo bajo un mismo equipo." },
  { title: "Ustedes solo disfrutan", text: "El gran día estamos en todas partes para que ustedes estén, simplemente, en el momento." },
];

const blocks = [
  {
    id: "corporativo",
    eyebrow: "Corporate & Incentives",
    title: "Eventos corporativos e incentivos",
    text: "Viajes de incentivo, reuniones, convenciones y experiencias de integración con logística impecable. Creamos programas que premian, conectan e inspiran a equipos y clientes clave.",
    items: ["Viajes de incentivo y premiación", "Reuniones, convenciones y lanzamientos", "Actividades de integración y team building", "Coordinación de grupos y traslados"],
    image: { src: "/images/evento-corporativo.jpg", alt: "Presentación en un evento corporativo" },
    message: waMessages.corporate,
    experience: "Corporate & Incentives",
  },
  {
    id: "celebraciones",
    eyebrow: "Eventos privados y sociales",
    title: "Celebraciones especiales",
    text: "Aniversarios, cumpleaños, reencuentros y fiestas de graduación. Haz que la celebración sea inolvidable por los recuerdos bonitos, no por el estrés de organizarla: eso déjalo en nuestras manos.",
    items: ["Fiestas de graduación", "Aniversarios y cumpleaños", "Cenas privadas y reencuentros", "Ambientación, producción y coordinación"],
    image: { src: "/images/evento-celebracion.jpg", alt: "Celebración con amigos bajo luces cálidas" },
    message: waMessages.graduation,
    experience: "Otro",
  },
];

// TODO: reemplazar con fotos reales de bodas y eventos Kastell (galería)
const gallery = [
  { src: "/images/boda-ceremonia.jpg", alt: "Sillas de ceremonia decoradas con flores al aire libre", className: "col-span-2 row-span-2" },
  { src: "/images/boda-novia.jpg", alt: "Novia con ramo de flores", className: "row-span-2" },
  { src: "/images/evento-mesa.jpg", alt: "Mesa de banquete decorada con flores", className: "" },
  { src: "/images/boda-anillos.jpg", alt: "Anillos de boda sobre flores", className: "" },
];

export default function BodasEventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Bodas & Eventos"
        breadcrumb="Bodas & Eventos"
        title={<>Celebraciones que se <span className="text-gold-light">recuerdan</span> para siempre</>}
        intro="Bodas destino, eventos corporativos y celebraciones especiales en Costa Rica, diseñados con creatividad y ejecutados con precisión."
        // TODO: reemplazar con foto real de una boda Kastell
        image={{ src: "/images/boda-pareja.jpg", alt: "Pareja de recién casados en un bosque" }}
      >
        <WhatsAppButton message={waMessages.weddings}>Planear mi boda</WhatsAppButton>
        <WhatsAppButton message={waMessages.events} variant="ghost-light">Organizar un evento</WhatsAppButton>
      </PageHero>

      {/* Bodas destino */}
      <section id="bodas" className="section">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Destination Weddings"
              title={<>Su boda en Costa Rica, <span className="text-gold-deep">sin preocupaciones</span></>}
              intro="Selva, volcanes, playas del Pacífico o una hacienda en el Valle Central. Parejas de todo el mundo eligen Costa Rica para decir “sí”, y nosotros nos encargamos de que todo sea tal como lo soñaron."
            />
            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
              <WhatsAppButton message={waMessages.weddings}>Hablemos de su boda</WhatsAppButton>
              <ContactButton experience="Destination Wedding">Enviar solicitud</ContactButton>
            </Reveal>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {weddingSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.06 * i} className="rounded-4xl border border-ink/10 bg-white/50 p-8">
                <span className="font-serif text-4xl text-gold-deep">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Galería */}
      <section className="pb-24 md:pb-32" aria-labelledby="galeria-titulo">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="galeria-titulo" className="text-display-sm">Galería</h2>
            <p className="max-w-md text-sm text-stone">Momentos de bodas y celebraciones. Pronto, más historias reales de nuestras parejas y clientes.</p>
          </div>
          <div className="grid auto-rows-[11rem] grid-cols-2 gap-4 md:auto-rows-[15rem] md:grid-cols-4">
            {gallery.map((g) => (
              <Reveal key={g.src} className={`relative overflow-hidden rounded-3xl ${g.className}`}>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-[1.4s] hover:scale-105" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporativo + celebraciones */}
      {blocks.map((b, i) => (
        <section key={b.id} id={b.id} className={i === 0 ? "section scroll-mt-20 bg-ink text-ivory" : "section scroll-mt-20 bg-ivory-deep"}>
          <div className={`container grid items-center gap-14 lg:grid-cols-2 ${i === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-4xl">
              {/* TODO: reemplazar con foto real */}
              <Image src={b.image.src} alt={b.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </Reveal>
            <div>
              <SectionHeading tone={i === 0 ? "light" : "dark"} eyebrow={b.eyebrow} title={b.title} intro={b.text} />
              <Reveal delay={0.1}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <Check className={i === 0 ? "mt-0.5 h-4 w-4 shrink-0 text-gold-light" : "mt-0.5 h-4 w-4 shrink-0 text-gold-deep"} aria-hidden /> {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-3">
                  <WhatsAppButton message={b.message}>Cotizar por WhatsApp</WhatsAppButton>
                  <ContactButton experience={b.experience} className={i === 0 ? "btn-ghost-light" : "btn-ghost-dark"}>
                    Enviar solicitud
                  </ContactButton>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <FinalCTA
        title="Cuéntanos qué quieres celebrar"
        intro="Una boda, un viaje de incentivo o una fiesta inolvidable: te respondemos con ideas y una propuesta a tu medida."
        whatsappMessage={waMessages.weddings}
        defaultExperience="Destination Wedding"
      />
    </>
  );
}
