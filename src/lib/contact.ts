import { site } from "./site";

export const experienceOptions = [
  "Luxury Travel",
  "Destination Wedding",
  "Corporate & Incentives",
  "Tailor-Made",
  "Multidestination",
  "Otro",
] as const;

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  date?: string;
  message: string;
  packageName?: string;
};

/** Resumen listo para continuar la conversación por WhatsApp. */
export function contactSummary(data: ContactPayload) {
  const lines = [
    `Hola Kastell, acabo de enviar una solicitud desde su sitio web.`,
    ``,
    `• Nombre: ${data.name}`,
    `• Correo: ${data.email}`,
    `• Teléfono / WhatsApp: ${data.phone}`,
    `• Experiencia de interés: ${data.experience}`,
  ];
  if (data.packageName) lines.push(`• Paquete: ${data.packageName}`);
  if (data.date) lines.push(`• Fecha tentativa: ${data.date}`);
  lines.push(`• Mensaje: ${data.message}`);
  return lines.join("\n");
}

/**
 * Envía el formulario a Web3Forms, que lo reenvía al correo del cliente.
 * Configurar NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (ver .env.example / README).
 */
export async function submitContact(data: ContactPayload): Promise<{ ok: boolean; reason?: "not-configured" | "error" }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return { ok: false, reason: "not-configured" };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nueva solicitud web — ${data.experience} — ${data.name}`,
        from_name: `${site.name} · Sitio web`,
        replyto: data.email,
        "Nombre completo": data.name,
        "Correo electrónico": data.email,
        "Teléfono / WhatsApp": data.phone,
        "Tipo de experiencia": data.experience,
        "Paquete de interés": data.packageName || "—",
        "Fecha tentativa": data.date || "—",
        Mensaje: data.message,
      }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean };
    return res.ok && json.success ? { ok: true } : { ok: false, reason: "error" };
  } catch {
    return { ok: false, reason: "error" };
  }
}
