/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#111113",
          secondary: "#18181B",
          card: "#1C1C20",
          elevated: "#232328",
        },
        primary: {
          DEFAULT: "#F8FAFC",
          muted: "#A1A1AA",
          subtle: "#71717A",
        },
        sky: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
        },
        accent: {
          DEFAULT: "#38BDF8",
          light: "#7DD3FC",
          deep: "#0284C7",
        },
        border: {
          dark: "#27272A",
          muted: "#1F1F23",
          subtle: "#3F3F46",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
      },
    },
  },
  plugins: [],
};
