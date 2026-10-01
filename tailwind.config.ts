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
          light: "#D6BA8A", // texto dorado sobre fondos oscuros (AA ≥4.5 sobre ink y jungle)
          deep: "#7D5F33", // texto dorado sobre fondos claros (AA)
        },
        jungle: { DEFAULT: "#3A4A3C", deep: "#2C382E", mist: "#DDE2D6" },
        stone: { DEFAULT: "#6B6358" },
      },
      fontFamily: {
        // Todo el sitio usa Montserrat. `font-serif` se mantiene como alias de títulos (misma fuente)
        // para no tocar cada componente; `font-accent` (Fraunces) es solo para citas puntuales.
        serif: ["var(--font-main)", "system-ui", "sans-serif"],
        sans: ["var(--font-main)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "Georgia", "serif"],
      },
      // Escala de texto compacta (≈6–12 % menor que la de Tailwind por defecto).
      // Los campos de formulario usan 16px fijos para evitar el zoom automático de iOS.
      fontSize: {
        xs: ["0.72rem", { lineHeight: "1.05rem" }],
        sm: ["0.82rem", { lineHeight: "1.25rem" }],
        base: ["0.94rem", { lineHeight: "1.5rem" }],
        lg: ["1.03rem", { lineHeight: "1.6rem" }],
        xl: ["1.15rem", { lineHeight: "1.65rem" }],
        "2xl": ["1.35rem", { lineHeight: "1.8rem" }],
        "3xl": ["1.65rem", { lineHeight: "2.05rem" }],
        "4xl": ["2rem", { lineHeight: "2.35rem" }],
        "5xl": ["2.5rem", { lineHeight: "1" }],
        "6xl": ["3rem", { lineHeight: "1" }],
        "display-xl": ["clamp(2rem, 4.1vw, 3.9rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.7rem, 3.1vw, 2.8rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.45rem, 2.3vw, 2rem)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.2rem, 1.6vw, 1.4rem)", { lineHeight: "1.12" }],
      },
      letterSpacing: { eyebrow: "0.28em" },
      boxShadow: {
        float: "0 30px 60px -25px rgba(20,19,16,0.35)",
        soft: "0 12px 40px -18px rgba(20,19,16,0.25)",
      },
      borderRadius: { "4xl": "2rem" },
      keyframes: {
        "slow-zoom": { "0%": { transform: "scale(1.08)" }, "100%": { transform: "scale(1)" } },
        "hero-pan": { "0%": { transform: "scale(1.1)" }, "100%": { transform: "scale(1)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "slow-zoom": "slow-zoom 2.4s cubic-bezier(0.22,1,0.36,1) both",
        "hero-pan": "hero-pan 8s ease-out both",
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.45s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
