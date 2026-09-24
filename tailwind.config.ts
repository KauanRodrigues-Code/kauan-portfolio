import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050505",
          soft: "#080808",
        },
        surface: {
          DEFAULT: "#0d0d0d",
          raised: "#111111",
          line: "#1c1c1f",
        },
        ink: {
          DEFAULT: "#ffffff",
          muted: "#a1a1aa",
          faint: "#6b6b74",
        },
        accent: {
          DEFAULT: "#2563eb",
          bright: "#3b82f6",
          dim: "#1d4ed8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-40px,-40px,0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        drift: "drift 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
