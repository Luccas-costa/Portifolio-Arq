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
        menuburger: "630px",
      },
    },
  },
  plugins: [],
};
export default config;
