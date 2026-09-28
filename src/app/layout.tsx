import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactProvider } from "@/components/ContactModal";
import { pillars } from "@/content";

// Títulos: Manrope · Textos y subtítulos: Cormorant Garamond
const display = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const text = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | DMC de lujo en Costa Rica`,
    template: `%s | ${site.name}`,
  },
  description:
    "Destination Management Company en Costa Rica: viajes de lujo a la medida, bodas destino, viajes corporativos e incentivos y experiencias multidestino. Desde 2021 en San José.",
  applicationName: site.name,
  keywords: [
    "DMC Costa Rica",
    "Destination Management Company Costa Rica",
    "viajes de lujo Costa Rica",
    "bodas destino Costa Rica",
    "luna de miel Costa Rica",
    "viajes de incentivo Costa Rica",
    "tours privados Costa Rica",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: site.name,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Kastell Tours & Events — Costa Rica" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#141310",
  width: "device-width",
  initialScale: 1,
  // Permite usar env(safe-area-inset-*) para respetar notch y barra inferior del iPhone
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: "Kastell DMC",
  description: site.legalDescription,
  slogan: site.promise,
  url: site.url,
  logo: `${site.url}/brand/kastell-logo-black.png`,
  image: `${site.url}/images/og-cover.jpg`,
  foundingDate: String(site.foundedYear),
  telephone: site.phone.display.replace(/\s/g, ""),
  ...(site.email ? { email: site.email } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  },
  areaServed: { "@type": "Country", name: "Costa Rica" },
  knowsLanguage: ["es"],
  sameAs: [site.social.instagram, site.social.facebook],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone.display.replace(/\s/g, ""),
    contactType: "reservations",
    availableLanguage: ["Spanish"],
  },
  makesOffer: pillars.map((p) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: p.title, description: p.description },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CR" className={`${display.variable} ${text.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ContactProvider>
          <Header />
          <main id="contenido">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ContactProvider>
      </body>
    </html>
  );
}
