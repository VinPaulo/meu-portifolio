"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/layout/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-64 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título da Seção com peso 900 */}
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-24 italic leading-none">
          {t.techStack.titlePart1} <span className="text-blue-600">{t.techStack.titlePart2}</span>
        </h2>
        
        {/* Grid de Containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.techStack.categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 shadow-xl dark:shadow-none"
            >
              {/* Header do Card */}
              <div className="mb-8">
                <h3 className={`text-xs font-black uppercase tracking-[0.4em] mb-4 ${cat.color}`}>
                  {cat.title}
                </h3>
                <p className="text-black dark:text-slate-400 text-sm font-medium">
                  {cat.description}
                </p>
              </div>
              
              {/* Badges Internos com estilo Pill */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-5 py-2 bg-blue-50 dark:bg-slate-950/60 border border-blue-100 dark:border-white/5 rounded-full text-sm font-bold text-black dark:text-slate-400 hover:bg-blue-100 hover:text-blue-900 dark:hover:text-white hover:border-blue-200 dark:hover:border-blue-500/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}