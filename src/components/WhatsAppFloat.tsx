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
    <a
      href={waLink(waMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp (abre en una nueva pestaña)"
      className={cn(
        "group fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-full bg-[#1F7A4D] p-4 text-white shadow-float ring-4 ring-[#1F7A4D]/15 transition-all duration-500 hover:bg-[#186540] sm:bottom-7 sm:right-7",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <WhatsAppIcon size={26} />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[12rem] group-hover:pr-1 md:inline">
        ¿Planeamos tu viaje?
      </span>
    </a>
  );
}
