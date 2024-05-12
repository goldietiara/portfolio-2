import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out ",
        wiggle2: "wiggle2 0.5s ease-in-out ",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(18deg)" },
          "50%": { transform: "rotate(10deg)" },
          "75%": { transform: "rotate(14deg)" },
          "100%": { transform: "rotate(12deg)" },
        },
        wiggle2: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-18deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(-14deg)" },
          "100%": { transform: "rotate(-12deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
