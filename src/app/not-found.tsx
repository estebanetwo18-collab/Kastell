import Link from "next/link";
import Image from "next/image";
import { waMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-ivory">
      <Image src="/images/monteverde-bosque.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-40" />
      <div className="container py-40">
        <p className="eyebrow mb-6 text-gold-light">Error 404</p>
        <h1 className="max-w-3xl text-display-lg">Este sendero no lleva a ninguna parte</h1>
        <p className="mt-6 max-w-xl text-lg text-ivory/75">La página que buscas no existe o cambió de lugar. Te ayudamos a retomar el camino.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-gold">Volver al inicio</Link>
          <WhatsAppButton message={waMessages.general} variant="ghost-light">Escríbenos</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
