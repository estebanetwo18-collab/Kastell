"use client";

import { useEffect, useState } from "react";
import { waLink, waMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "./icons";

/** Botón flotante de WhatsApp, visible en todas las páginas. */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <aside aria-label="Contacto rápido por WhatsApp">
    <a
      href={waLink(waMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp (abre en una nueva pestaña)"
      className={cn(
        "group fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-[70] flex items-center rounded-full bg-[#1F7A4D] p-4 text-white shadow-float ring-4 ring-[#1F7A4D]/15 transition-all duration-500 hover:bg-[#186540] sm:bottom-[calc(1.75rem+env(safe-area-inset-bottom))] sm:right-[calc(1.75rem+env(safe-area-inset-right))]",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <WhatsAppIcon size={26} />
      {/* Etiqueta solo en dispositivos con mouse: sin espacio reservado, así el botón es un círculo perfecto */}
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 md:inline [@media(hover:hover)]:group-hover:ml-3 [@media(hover:hover)]:group-hover:max-w-[12rem] [@media(hover:hover)]:group-hover:pr-1">
        ¿Planeamos tu viaje?
      </span>
    </a>
    </aside>
  );
}
