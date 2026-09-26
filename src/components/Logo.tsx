import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Logo oficial Kastell (archivo provisto por el cliente, sin recrear).
 * `light` usa una versión en crema generada a partir del mismo archivo.
 * TODO: pedir logo en blanco al cliente (versión oficial para fondos oscuros)
 * y reemplazar /public/brand/kastell-logo-light.png.
 */
export function Logo({
  variant = "dark",
  className,
  priority,
  asLink = true,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
  asLink?: boolean;
}) {
  const img = (
    <Image
      src={variant === "light" ? "/brand/kastell-logo-light.png" : "/brand/kastell-logo-black.png"}
      alt="Kastell Tours & Events"
      width={1944}
      height={461}
      priority={priority}
      className={cn("h-auto w-full", className)}
      sizes="220px"
    />
  );
  if (!asLink) return img;
  return (
    <Link href="/" aria-label="Kastell Tours & Events — Inicio" className="block">
      {img}
    </Link>
  );
}
