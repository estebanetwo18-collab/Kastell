import { AlertTriangle } from "lucide-react";
import { REVIEW_MODE } from "@/lib/format";

/** Notas internas de validación. Solo visibles con NEXT_PUBLIC_REVIEW_MODE=1 (nunca en producción). */
export function ReviewNotes({ notes, title = "Nota interna de revisión" }: { notes?: string[]; title?: string }) {
  if (!REVIEW_MODE || !notes?.length) return null;
  return (
    <aside className="rounded-3xl border-2 border-dashed border-[#B26A00] bg-[#FFF4DC] p-5 text-[#4A2F00]" aria-label={title}>
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]">
        <AlertTriangle className="h-4 w-4" aria-hidden /> {title} · no es contenido público
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
        {notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </aside>
  );
}
