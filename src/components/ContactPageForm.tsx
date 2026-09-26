"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "./ContactForm";

/** Permite preseleccionar la experiencia vía ?experiencia=… (p. ej. desde tarjetas). */
export function ContactPageForm() {
  const params = useSearchParams();
  return <ContactForm key={params.get("experiencia") ?? ""} defaultExperience={params.get("experiencia") ?? undefined} />;
}
