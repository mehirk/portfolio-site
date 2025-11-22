import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#050a17",
        foreground: "#e8edf5",
        muted: "#9fb0c9",
        border: "rgba(255,255,255,0.12)",
        panel: "rgba(255,255,255,0.04)",
        panelStrong: "rgba(255,255,255,0.08)",
        accent: "#3ef7c3",
        accent2: "#f6b76a",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl: "18px",
        "2xl": "28px",
      },
    },
  },
  plugins: [],
};

export default config;
