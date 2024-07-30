import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Isso ativa o modo escuro com a classe 'dark'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fwhite: "#E4E4E7",
      },
      screens: {
        screen01: "1900px",
        screen02: "1800px",
        screen03: "1700px",
        screen04: "1600px",
        screen1: "1500px",
        screen2: "1400px",
        screen3: "1300px",
        screen4: "1200px",
        screen5: "1100px",
        screen6: "1000px",
        screen7: "900px",
        screen8: "800px",
        screen9: "700px",
        screen10: "600px",
        screen11: "500px",
        screen11_5: "450px",
        screen12: "400px",
        screen13: "350px",
        screen14: "300px",

        menuburger: "630px",
      },
    },
  },
  plugins: [],
};
export default config;
