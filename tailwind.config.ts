import type { Config } from "tailwindcss";

/**
 * Paleta Kastell — "lujo tropical".
 * Si el cliente entrega un manual de marca con HEX oficiales,
 * basta con ajustar los valores aquí: todo el sitio usa estos tokens.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", xl: "2.5rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        ink: { DEFAULT: "#141310", soft: "#2A2823", muted: "#4A463F" },
        ivory: { DEFAULT: "#F6F1E9", deep: "#EDE5D8", line: "#DDD3C3" },
        gold: {
          DEFAULT: "#B08D57", // decorativo, fondos de botón (texto ink encima)
          light: "#C9A874", // texto dorado sobre fondos oscuros (AA)
          deep: "#7D5F33", // texto dorado sobre fondos claros (AA)
        },
        jungle: { DEFAULT: "#3A4A3C", deep: "#2C382E", mist: "#DDE2D6" },
        stone: { DEFAULT: "#6B6358" },
      },
      fontFamily: {
        // `font-serif` = fuente de títulos, `font-sans` = fuente de textos/subtítulos.
        // (Nombres históricos: hoy los títulos van en Manrope y los textos en Cormorant Garamond.)
        serif: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-text)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7.5vw, 7.25rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.6rem, 2.6vw, 2.25rem)", { lineHeight: "1.12" }],
      },
      letterSpacing: { eyebrow: "0.28em" },
      boxShadow: {
        float: "0 30px 60px -25px rgba(20,19,16,0.35)",
        soft: "0 12px 40px -18px rgba(20,19,16,0.25)",
      },
      borderRadius: { "4xl": "2rem" },
      keyframes: {
        "slow-zoom": { "0%": { transform: "scale(1.08)" }, "100%": { transform: "scale(1)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        "slow-zoom": "slow-zoom 2.4s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
