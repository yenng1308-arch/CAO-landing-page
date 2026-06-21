import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          DEFAULT: "#D5B98A",
          light: "#E8D5B5",
          dark: "#B89B6D",
        },
        emerald: {
          DEFAULT: "#003A32",
          light: "#005C4F",
          dark: "#00241E",
        },
        neutral: {
          warm: "#F7F5F0",
          charcoal: "#1F2225",
        },
        blush: {
          DEFAULT: "#E8C8C2",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
