/** @type {import('next').NextConfig} */
// STATIC_EXPORT=1 genera una copia estática en /out (solo para vistas previas).
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  ...(staticExport ? { output: "export" } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: staticExport,
  },
};

export default nextConfig;
