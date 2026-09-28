/** @type {import('next').NextConfig} */
// STATIC_EXPORT=1 genera una copia estática en /out (solo para vistas previas).
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  ...(staticExport ? { output: "export" } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // WebP: buena compresión y codificación ~5× más rápida que AVIF en el primer request.
    formats: ["image/webp"],
    // Las fotos originales miden como máximo 2400px: no generamos tamaños mayores (evita upscaling y CPU).
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 2048],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    unoptimized: staticExport,
  },
};

export default nextConfig;
