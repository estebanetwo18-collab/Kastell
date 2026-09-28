"use client";

import { useId, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { contactSummary, experienceOptions, submitContact, type ContactPayload } from "@/lib/contact";
import { waLink } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "./icons";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export function ContactForm({
  defaultExperience,
  packageName,
  compact = false,
  tone = "light",
  onDone,
}: {
  defaultExperience?: string;
  packageName?: string;
  compact?: boolean;
  tone?: "light" | "dark";
  onDone?: () => void;
}) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [summary, setSummary] = useState<ContactPayload | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const initialExperience =
    defaultExperience && (experienceOptions as readonly string[]).includes(defaultExperience) ? defaultExperience : "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    // Honeypot anti-spam: los humanos no ven este campo.
    if (fd.get("website")) return;

    const data: ContactPayload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      experience: String(fd.get("experience") || ""),
      date: String(fd.get("date") || "") || undefined,
      message: String(fd.get("message") || "").trim(),
      packageName,
    };

    const nextErrors: Record<string, string> = {};
    if (data.name.length < 2) nextErrors.name = "Cuéntanos tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = "Revisa tu correo electrónico.";
    if (data.phone.replace(/\D/g, "").length < 7) nextErrors.phone = "Incluye un teléfono o WhatsApp válido.";
    if (!data.experience) nextErrors.experience = "Elige un tipo de experiencia.";
    if (data.message.length < 5) nextErrors.message = "Cuéntanos un poco sobre tu idea.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`);
      first?.focus();
      return;
    }

    setStatus("sending");
    const result = await submitContact(data);
    setSummary(data);
    if (result.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus(result.reason === "not-configured" ? "fallback" : "error");
    }
  }

  const dark = tone === "dark";

  if (summary && (status === "sent" || status === "fallback" || status === "error")) {
    const title =
      status === "sent"
        ? "¡Gracias! Recibimos tu solicitud."
        : status === "fallback"
          ? "Continuemos por WhatsApp"
          : "No pudimos enviar el formulario";
    const body =
      status === "sent"
        ? "Nuestro equipo te responderá muy pronto. Si prefieres avanzar ya mismo, continúa la conversación por WhatsApp: tus datos van resumidos en el mensaje."
        : status === "fallback"
          ? "Tu mensaje está listo. Envíalo por WhatsApp y te respondemos personalmente, con tus datos ya resumidos."
          : "Hubo un problema de conexión. No te preocupes: envíanos tu solicitud por WhatsApp, con tus datos ya resumidos.";
    return (
      <div role="status" aria-live="polite" className={cn("flex flex-col items-start gap-5", dark ? "text-ivory" : "text-ink")}>
        <CheckCircle2 className={cn("h-10 w-10", dark ? "text-gold-light" : "text-gold-deep")} strokeWidth={1.7} aria-hidden />
        <h3 className="font-serif text-3xl">{title}</h3>
        <p className={cn("max-w-md leading-relaxed", dark ? "text-ivory/75" : "text-ink-muted")}>{body}</p>
        <div className="flex flex-wrap gap-3">
          <a href={waLink(contactSummary(summary))} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <WhatsAppIcon size={18} /> Continuar por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setSummary(null);
              onDone?.();
            }}
            className={dark ? "btn-ghost-light" : "btn-ghost-dark"}
          >
            {onDone ? "Cerrar" : "Enviar otra solicitud"}
          </button>
        </div>
      </div>
    );
  }

  const labelCls = cn("label", dark && "text-ivory/70");
  const fieldCls = cn("field", dark && "border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/40 focus:bg-ivory/10");
  const errCls = cn("mt-1.5 text-xs", dark ? "text-[#F2B8A0]" : "text-[#9B2C1C]");
  const fieldProps = (name: string) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined,
  });
  const Err = ({ name }: { name: string }) =>
    errors[name] ? (
      <p id={`${uid}-${name}-err`} className={errCls}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {packageName && (
        <p className={cn("sm:col-span-2 rounded-xl px-4 py-3 text-sm", dark ? "bg-ivory/10 text-ivory" : "bg-ivory-deep text-ink")}>
          Paquete de interés: <strong className="font-semibold">{packageName}</strong>
        </p>
      )}
      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-name`} className={labelCls}>Nombre completo</label>
        <input {...fieldProps("name")} type="text" autoComplete="name" required className={fieldCls} placeholder="¿Cómo te llamas?" />
        <Err name="name" />
      </div>
      <div>
        <label htmlFor={`${uid}-email`} className={labelCls}>Correo electrónico</label>
        <input {...fieldProps("email")} type="email" autoComplete="email" required className={fieldCls} placeholder="tu@correo.com" />
        <Err name="email" />
      </div>
      <div>
        <label htmlFor={`${uid}-phone`} className={labelCls}>Teléfono / WhatsApp</label>
        <input {...fieldProps("phone")} type="tel" autoComplete="tel" required className={fieldCls} placeholder="+1 555 000 0000" />
        <Err name="phone" />
      </div>
      <div>
        <label htmlFor={`${uid}-experience`} className={labelCls}>Tipo de experiencia</label>
        <select {...fieldProps("experience")} required defaultValue={initialExperience} className={cn(fieldCls, "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10")}
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23B08D57' stroke-width='1.5'/%3E%3C/svg%3E")` }}
        >
          <option value="" disabled>Selecciona una opción</option>
          {experienceOptions.map((o) => (
            <option key={o} value={o} className="text-ink">{o}</option>
          ))}
        </select>
        <Err name="experience" />
      </div>
      <div>
        <label htmlFor={`${uid}-date`} className={labelCls}>
          Fecha tentativa <span className="normal-case tracking-normal opacity-70">(opcional)</span>
        </label>
        <input {...fieldProps("date")} type="text" className={fieldCls} placeholder="Ej. marzo 2027" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-message`} className={labelCls}>Mensaje</label>
        <textarea {...fieldProps("message")} required rows={compact ? 3 : 5} className={cn(fieldCls, "resize-y")}
          placeholder="Cuéntanos qué imaginas: cuántas personas, qué te emociona, qué celebras…" />
        <Err name="message" />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "sending"} className="btn-gold">
          {status === "sending" ? (
            <><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Enviando…</>
          ) : (
            <>Enviar solicitud <ArrowRight className="h-4 w-4" aria-hidden /></>
          )}
        </button>
        <p className={cn("text-xs leading-relaxed", dark ? "text-ivory/60" : "text-stone")}>
          ¿Prefieres hablar ya? WhatsApp{" "}
          <a href={waLink("Hola Kastell, les escribo desde el formulario de su sitio web.")} target="_blank" rel="noopener noreferrer" className={cn("font-semibold underline underline-offset-4", dark ? "text-gold-light" : "text-gold-deep")}>
            {site.whatsapp.display}
          </a>
        </p>
      </div>
    </form>
  );
}
