import { cn } from "@/lib/cn";

/** Sello circular con texto que gira lentamente (se detiene con prefers-reduced-motion). Posicionar con `absolute` vía className. */
export function RotatingSeal({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("grid aspect-square place-items-center rounded-full bg-ink text-gold-light shadow-float", className)} aria-hidden>
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="seal-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
        </defs>
        <text className="fill-current font-serif text-[9px] font-semibold uppercase">
          {/* textLength reparte el texto exactamente en la circunferencia (2π·44 ≈ 276) */}
          <textPath href="#seal-circle" textLength="272" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="font-serif text-2xl font-light text-ivory">K</span>
    </div>
  );
}
