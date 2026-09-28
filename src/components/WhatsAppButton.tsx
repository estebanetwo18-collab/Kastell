import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "./icons";

type Variant = "gold" | "ink" | "ghost-light" | "ghost-dark" | "link" | "link-light";

const variants: Record<Variant, string> = {
  gold: "btn-gold",
  ink: "btn-ink",
  "ghost-light": "btn-ghost-light",
  "ghost-dark": "btn-ghost-dark",
  link: "link-underline text-ink",
  "link-light": "link-underline text-gold-light",
};

/** Enlace directo a WhatsApp con mensaje precargado según la sección. */
export function WhatsAppButton({
  message,
  children = "Escríbenos por WhatsApp",
  variant = "gold",
  className,
  iconSize = 18,
}: {
  message: string;
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
  iconSize?: number;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variants[variant], className)}
    >
      <WhatsAppIcon size={iconSize} />
      <span>{children}</span>
      <span className="sr-only"> (abre WhatsApp en una nueva pestaña)</span>
    </a>
  );
}
