"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Lado Esquerdo: Textos e CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase italic">
              {t.hero.greeting} <br />
              <span className="text-blue-600">Paulo Lemos</span>
            </h1>
            <p className="text-xl md:text-2xl text-black dark:text-slate-400 font-medium leading-relaxed max-w-lg">
              {t.hero.role}
            </p>
          </div>

          {/* Grupo de Botões (Ações) */}
          <div className="flex flex-wrap gap-6">
            <a 
              href="#projects" 
              className="h-20 inline-flex items-center gap-4 px-12 bg-blue-600 text-white rounded-full font-black text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
            >
              {t.hero.viewProjects} <ArrowRight size={22} />
            </a>

            {/* Link atualizado para evitar erro 404 */}
            <a 
              href="/PauloLemos-Curriculo-1.pdf" 
              download="Curriculo_Paulo_Lemos.pdf"
              className="h-20 inline-flex items-center gap-4 px-12 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-full font-black text-lg hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-blue-500/30 transition-all shadow-md hover:shadow-xl"
            >
              {t.hero.downloadCV} <Download size={22} className="text-blue-500" />
            </a>
          </div>
        </motion.div>

        {/* Lado Direito: Imagem/Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Efeito de brilho ao fundo */}
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" />
            
            <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white dark:border-slate-900 shadow-2xl relative z-10">
              <img 
                src="https://github.com/VinPaulo.png" 
                alt="Paulo Lemos" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}