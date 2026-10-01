import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/whatsapp";
import { Hero } from "@/components/home/Hero";
import { ValuesMarquee } from "@/components/home/ValuesMarquee";
import { ValueProposition } from "@/components/home/ValueProposition";
import { Offer } from "@/components/home/Offer";
import { Difference } from "@/components/home/Difference";
import { FeaturedExperience } from "@/components/home/FeaturedExperience";
import { PackagesTeaser } from "@/components/home/PackagesTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SustainabilityTeaser } from "@/components/home/SustainabilityTeaser";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Kastell Tours & Events | DMC de lujo en Costa Rica",
    description:
      "Diseñamos y operamos experiencias de viaje exclusivas en Costa Rica: luxury travel, bodas destino, viajes corporativos e incentivos, viajes a la medida y multidestino.",
    path: "/",
  }),
  title: { absolute: "Kastell Tours & Events | DMC de lujo en Costa Rica" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuesMarquee />
      <ValueProposition />
      <Offer />
      <Difference />
      <FeaturedExperience />
      <PackagesTeaser />
      <TestimonialsSection />
      <SustainabilityTeaser />
      <FinalCTA whatsappMessage={waMessages.finalCta} />
    </>
  );
}
