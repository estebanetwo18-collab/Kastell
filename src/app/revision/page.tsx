import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { packages, policySections, packageHref } from "@/content";
import { REVIEW_MODE } from "@/lib/format";

export const metadata: Metadata = { title: "Panel de revisión", robots: { index: false, follow: false } };

/** Panel interno: todo lo que debe validar el cliente antes de publicar. Solo existe con NEXT_PUBLIC_REVIEW_MODE=1. */
export default function RevisionPage() {
  if (!REVIEW_MODE) notFound();
  const withNotes = packages.filter((p) => p.reviewNotes?.length);
  const policies = policySections.filter((s) => s.reviewNotes?.length);

  return (
    <div className="container pb-24 pt-44">
      <p className="eyebrow mb-4 text-gold-deep">Uso interno · no publicar</p>
      <h1 className="text-display-md">Panel de revisión de paquetes y condiciones</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Cada punto es información dudosa, incompleta o contradictoria en las fuentes. Ninguno se resolvió “por intuición”: cuando falta un dato, la web
        muestra “por confirmar” o no lo muestra.
      </p>

      <h2 className="mt-12 text-display-sm">Paquetes ({withNotes.length})</h2>
      <ul className="mt-6 space-y-5">
        {withNotes.map((p) => (
          <li key={p.slug} className="rounded-3xl border-2 border-dashed border-[#B26A00] bg-[#FFF4DC] p-6 text-[#4A2F00]">
            <h3 className="flex flex-wrap items-center gap-3 font-serif text-xl">
              <AlertTriangle className="h-5 w-5" aria-hidden />
              <Link href={packageHref(p)} className="underline underline-offset-4">{p.title}</Link>
              {p.needsConfirmation && <span className="rounded-full bg-[#B26A00] px-3 py-1 text-xs font-bold text-white">needsConfirmation</span>}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {p.reviewNotes!.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 text-display-sm">Reservas y condiciones ({policies.length})</h2>
      <ul className="mt-6 space-y-5">
        {policies.map((s) => (
          <li key={s.id} className="rounded-3xl border-2 border-dashed border-[#B26A00] bg-[#FFF4DC] p-6 text-[#4A2F00]">
            <h3 className="font-serif text-xl">
              <Link href={`/reservas-y-condiciones#${s.id}`} className="underline underline-offset-4">{s.title}</Link>
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {s.reviewNotes!.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
