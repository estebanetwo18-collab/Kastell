import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { countByCategory, getPackage, packageCategories } from "@/content";
import { PackageCard } from "../PackageCard";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

/** Paquetes que se muestran en el Home (ids de /content/es/packages). */
const HOME_PACKAGES = ["paquete-essential", "crucero-caribe-enero-2027", "ciudades-virreinales"];

export function PackagesTeaser() {
  const items = HOME_PACKAGES.map((id) => getPackage(id)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <section id="paquetes-y-experiencias" className="section bg-ivory-deep">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Paquetes y experiencias"
            title={<>Elige tu próximo <span className="text-gold-deep">viaje</span></>}
            intro="Costa Rica, México, un crucero por el Caribe y excursiones de un día, con fechas, precios y condiciones a la vista."
          />
          <Reveal>
            <Link href="/experiencias" className="link-underline shrink-0 text-ink">
              Ver todos los paquetes <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <ul className="flex flex-wrap gap-2" aria-label="Categorías de paquetes">
            {packageCategories.map((c) => (
              <li key={c.id}>
                <Link href={`/experiencias?categoria=${c.id}`} className="inline-flex min-h-[44px] items-center rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition hover:border-ink hover:bg-ink hover:text-ivory">
                  {c.label} <span className="ml-1.5 text-xs opacity-70">{countByCategory(c.id)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={0.06 * i}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
