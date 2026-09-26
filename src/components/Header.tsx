"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";
import { packages } from "@/content";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

function TopBar({ hidden }: { hidden: boolean }) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-ink text-ivory/80 transition-[max-height,opacity] duration-500",
        hidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      )}
    >
      <div className="container flex h-10 items-center justify-between gap-4 text-[0.72rem] tracking-wide">
        <div className="flex items-center gap-5">
          <a href={waLink(waMessages.header)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-gold-light">
            <WhatsAppIcon size={14} /> <span>{site.whatsapp.display}</span>
          </a>
          <a href={site.phone.href} className="hidden items-center gap-2 transition hover:text-gold-light md:inline-flex">
            <Phone className="h-3.5 w-3.5" aria-hidden /> Llámanos
          </a>
        </div>
        {/* TODO: agregar sello de Tripadvisor / certificaciones cuando el cliente los tenga */}
        <p className="hidden text-ivory/60 lg:block">Destination Management Company · San José, Costa Rica · Desde {site.foundedYear}</p>
        <div className="flex items-center gap-4">
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Kastell" className="transition hover:text-gold-light">
            <InstagramIcon size={15} />
          </a>
          <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Kastell" className="transition hover:text-gold-light">
            <FacebookIcon size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdown(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">
        Saltar al contenido
      </a>
      <TopBar hidden={scrolled} />
      <div
        className={cn(
          "transition-all duration-500",
          solid ? "bg-ivory/90 shadow-[0_1px_0_rgba(20,19,16,0.08)] backdrop-blur-xl" : "bg-gradient-to-b from-ink/50 to-transparent"
        )}
      >
        <nav aria-label="Principal" className="container flex h-20 items-center justify-between gap-6">
          <div className="w-36 shrink-0 md:w-44">
            <Logo variant={solid ? "dark" : "light"} priority />
          </div>

          <ul className="hidden items-center gap-1 xl:flex [&>li]:flex [&>li]:items-center">
            {mainNav.slice(1).map((item) =>
              item.href === "/experiencias" ? (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-full py-2 pl-3.5 pr-1 text-[0.82rem] font-medium tracking-wide transition",
                        solid ? "text-ink hover:text-gold-deep" : "text-ivory hover:text-gold-light",
                        isActive(item.href) && (solid ? "text-gold-deep" : "text-gold-light")
                      )}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={dropdown}
                      aria-controls="menu-experiencias"
                      aria-label="Ver paquetes turísticos"
                      onClick={() => setDropdown((d) => !d)}
                      className={cn("rounded-full p-1.5 pr-3 transition", solid ? "text-ink" : "text-ivory")}
                    >
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropdown && "rotate-180")} aria-hidden />
                    </button>
                  </div>
                  <AnimatePresence>
                    {dropdown && (
                      <motion.div
                        id="menu-experiencias"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-3xl border border-ink/5 bg-ivory p-3 shadow-float">
                          <p className="px-4 pb-2 pt-3 text-[0.65rem] font-semibold uppercase tracking-eyebrow text-gold-deep">Paquetes turísticos</p>
                          <ul>
                            {packages.map((p) => (
                              <li key={p.slug}>
                                <Link
                                  href={p.kind === "itinerary" ? `/experiencias/${p.slug}` : p.href ?? "/experiencias"}
                                  className="group flex items-start justify-between gap-4 rounded-2xl px-4 py-3 transition hover:bg-ivory-deep"
                                >
                                  <span>
                                    <span className="block font-serif text-lg leading-tight text-ink">{p.title}</span>
                                    <span className="text-xs text-stone">
                                      {p.kind === "itinerary" ? `${p.durationDays} días / ${p.durationNights} noches` : p.durationLabel} · {p.destinations.slice(0, 3).join(" · ")}
                                    </span>
                                  </span>
                                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gold-deep opacity-0 transition group-hover:opacity-100" aria-hidden />
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link href="/experiencias" className="mt-1 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-ivory transition hover:bg-ink-soft">
                            Ver todas las experiencias <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-[0.82rem] font-medium tracking-wide transition",
                      solid ? "text-ink hover:text-gold-deep" : "text-ivory hover:text-gold-light",
                      isActive(item.href) && (solid ? "text-gold-deep" : "text-gold-light")
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={waLink(waMessages.header)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden px-5 py-3 text-[0.8rem] sm:inline-flex"
            >
              <WhatsAppIcon size={16} /> Cotizar por WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              className={cn("rounded-full p-2.5 transition xl:hidden", solid ? "text-ink hover:bg-ink/5" : "text-ivory hover:bg-ivory/10")}
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-ivory xl:hidden"
          >
            <nav aria-label="Menú móvil" className="container flex min-h-full flex-col justify-between gap-10 py-10">
              <ul className="space-y-1">
                {mainNav.map((item, i) => (
                  <motion.li key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn("block border-b border-ink/10 py-4 font-serif text-3xl", isActive(item.href) ? "text-gold-deep" : "text-ink")}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-5">
                <a href={waLink(waMessages.header)} target="_blank" rel="noopener noreferrer" className="btn-gold w-full">
                  <WhatsAppIcon size={18} /> Cotizar por WhatsApp
                </a>
                <div className="flex items-center justify-center gap-6 text-ink-muted">
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Kastell"><InstagramIcon size={20} /></a>
                  <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Kastell"><FacebookIcon size={20} /></a>
                  <a href={site.phone.href} className="text-sm font-medium">{site.phone.display}</a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
