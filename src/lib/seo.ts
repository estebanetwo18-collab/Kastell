import type { Metadata } from "next";
import { site } from "./site";

const defaultImage = { url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Kastell Tours & Events — Costa Rica" };

/** Metadatos completos por página (title, description, canonical, OG, Twitter). */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width?: number; height?: number; alt: string };
}): Metadata {
  const img = image ?? defaultImage;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_CR",
      siteName: site.name,
      url: path,
      title,
      description,
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img.url],
    },
  };
}
