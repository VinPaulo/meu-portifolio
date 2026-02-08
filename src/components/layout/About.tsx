"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/layout/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-64 bg-background">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        
        {/* Lado Esquerdo: Título com Leading Negativo */}
        <div className="space-y-10">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase italic">
            {t.about.titlePart1} <br /> <span className="text-blue-600">{t.about.titlePart2}</span>
          </h2>
        </div>

        {/* Lado Direito: Texto com Respiro e Hierarquia */}
        <div className="space-y-8 text-xl md:text-2xl text-black dark:text-slate-400 font-medium leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t.about.paragraph1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.about.paragraph2 }} />
        </div>

      </div>
    </section>
  );
}