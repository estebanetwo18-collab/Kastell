"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";

type OpenOptions = { experience?: string; packageName?: string };
type Ctx = { open: (opts?: OpenOptions) => void };

const ContactContext = createContext<Ctx>({ open: () => {} });
export const useContactModal = () => useContext(ContactContext);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [opts, setOpts] = useState<OpenOptions | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((o: OpenOptions = {}) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setOpts(o);
  }, []);
  const close = useCallback(() => setOpts(null), []);

  useEffect(() => {
    if (!opts) {
      lastFocus.current?.focus?.();
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => dialogRef.current?.querySelector<HTMLElement>("input:not([type=hidden]):not(.hidden), select")?.focus(), 80);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([tabindex="-1"]), select, textarea');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [opts, close]);

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {opts && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={close} aria-hidden />
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-4xl bg-ivory p-7 shadow-float sm:rounded-4xl sm:p-10"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button onClick={close} className="absolute right-5 top-5 rounded-full p-2 text-ink-muted transition hover:bg-ink/5 hover:text-ink" aria-label="Cerrar formulario">
                <X className="h-5 w-5" aria-hidden />
              </button>
              <p className="eyebrow mb-4 text-gold-deep">Cotiza tu experiencia</p>
              <h2 id="contact-modal-title" className="mb-2 font-serif text-4xl">Empecemos a planear tu viaje</h2>
              <p className="mb-8 text-ink-muted">Cuéntanos tu idea y te respondemos con una propuesta pensada para ti.</p>
              <ContactForm compact defaultExperience={opts.experience} packageName={opts.packageName} onDone={close} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContactContext.Provider>
  );
}

/** Botón que abre el modal de contacto (utilizable desde Server Components). */
export function ContactButton({
  children = "Contáctanos",
  className = "btn-ghost-dark",
  experience,
  packageName,
}: {
  children?: React.ReactNode;
  className?: string;
  experience?: string;
  packageName?: string;
}) {
  const { open } = useContactModal();
  return (
    <button type="button" className={className} onClick={() => open({ experience, packageName })} aria-haspopup="dialog">
      {children}
    </button>
  );
}
