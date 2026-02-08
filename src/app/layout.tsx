import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Alterei para Inter para combinar com o design agressivo
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/components/layout/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider"; // O componente que criamos antes

// Configurando a fonte Inter (usada no seu tailwind.config.ts)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "P. Lemos | Portfólio",
  description: "Estudante de Sistemas de Informação na UFV e Técnico em Eletrônica pelo CEFET-MG. Desenvolvedor Full-stack e pesquisador em Sistemas Distribuídos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning é necessário para o next-themes
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased transition-colors duration-500`}>
        {/* ThemeProvider gerencia o modo Dark/Light via classe */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {/* LanguageProvider gerencia a tradução PT/EN */}
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}