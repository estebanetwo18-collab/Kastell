import type { PackageCategory } from "../types";

export const packageCategories: { id: PackageCategory; label: string; description: string }[] = [
  { id: "costa-rica", label: "Costa Rica", description: "Paquetes por Costa Rica de 3 a 10 días y experiencias a la medida." },
  { id: "internacionales", label: "Internacionales", description: "Viajes desde Costa Rica hacia México y el Caribe." },
  { id: "mexico", label: "México", description: "Ciudad de México, ciudades virreinales y tesoros coloniales." },
  { id: "cruceros", label: "Cruceros", description: "Navega por el Caribe con vuelo y traslados incluidos." },
  { id: "excursiones", label: "Excursiones de un día", description: "Volcanes, cataratas e isla en una jornada." },
];
