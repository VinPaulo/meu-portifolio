"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/layout/LanguageContext"; // Certifique-se de criar o contexto antes
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita erro de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center justify-between w-full max-w-6xl px-8 py-4 bg-white dark:bg-slate-950/20 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-full shadow-xl dark:shadow-2xl transition-all duration-500">
        
        {/* Logo Minimalista */}
        <div className="text-xl font-black tracking-tighter uppercase italic">
          P. <span className="text-blue-600">Lemos</span>
        </div>
        
        {/* Links de Navegação com tradução */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-black dark:text-slate-400">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.about}</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.projects}</a>
        </div>

        {/* Seletor de Idioma e CTA */}
        <div className="flex items-center gap-8">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-black dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
          </button>

          {/* Seletor PT/EN */}
          <div className="flex gap-2 text-[10px] font-black">
            <button 
              onClick={() => setLang("pt")} 
              className={`${lang === "pt" ? "text-blue-600" : "text-black dark:text-slate-600 hover:text-blue-600 dark:hover:text-slate-200"} transition-colors`}
            >
              PT
            </button>
            <span className="text-black dark:text-slate-700">/</span>
            <button 
              onClick={() => setLang("en")} 
              className={`${lang === "en" ? "text-blue-600" : "text-black dark:text-slate-600 hover:text-blue-600 dark:hover:text-slate-200"} transition-colors`}
            >
              EN
            </button>
          </div>

          <a 
            href="#contact"
            className="hidden sm:block px-6 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-600/20"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}