import type { Config } from "tailwindcss";

const config: Config = {
  // Ativa o suporte ao modo escuro baseado em classe
  darkMode: "class",
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        // Conecta a fonte Inter configurada no seu Layout
        sans: ['var(--font-inter)'], 
      },
      borderRadius: {
        // Estilo "Pill" usado no Sobre Mim e nos Cards
        'pill': '2.5rem',
      },
      fontWeight: {
        // Peso 900 para a tipografia agressiva estilo Caio Diniz
        'black': '900',
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
      }
    },
  },
  plugins: [],
};

export default config;