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
        wiggler: "wiggler 1s ease-in-out ",
        wiggleb: "wiggleb 1s ease-in-out ",
        wigglet: "wigglet 1s ease-in-out ",
        blink: "blink 0.5s ease-in ",
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

        wigglet: {
          "0%": { transform: "rotate(-2deg)" },
          "25%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(-6deg)" },
          "100%": { transform: "rotate(-4deg)" },
        },
        wiggler: {
          "0%": { transform: "translate(0px,0px)" },
          "25%": { transform: "translate(20px,0px)" },
          "50%": { transform: "translate(10px,0px)" },
          "75%": { transform: "translate(15px,0px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
        wiggleb: {
          "0%": { transform: "translate(0px,0px)" },
          "25%": { transform: "translate(0px,8px)" },
          "50%": { transform: "translate(0px,5px)" },
          "75%": { transform: "translate(0px,10px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
        blink: {
          "0%": { opacity: "100%" },
          // "25%": { opacity: "0%" },
          "50%": { opacity: "0%" },
          // "75%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
