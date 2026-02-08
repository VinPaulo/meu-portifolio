"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-64 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-24 italic leading-none">
          {t.projects.titlePart1} <br /> <span className="text-blue-600">{t.projects.titlePart2}</span>
        </h2>

        {/* Grid Responsivo de 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {t.projects.items.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className="group p-10 md:p-14 bg-slate-50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-[3rem] flex flex-col justify-between hover:border-blue-500/30 transition-all duration-500 shadow-xl dark:shadow-2xl"
            >
              <div className="space-y-8">
                {/* Header do Projeto */}
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight max-w-[80%]">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a href={project.link} target="_blank" className="p-4 bg-white dark:bg-slate-950 rounded-full border border-slate-200 dark:border-transparent text-slate-700 dark:text-slate-500 hover:text-blue-600 dark:hover:text-white hover:border-blue-300 transition-all">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
                
                {/* Descrição com peso médio */}
                <p className="text-black dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                  {project.description}
                </p>

                {/* Badges de Tecnologias */}
                <div className="flex flex-wrap gap-3 pt-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-blue-500 bg-blue-500/5 px-5 py-2 rounded-full border border-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link de Ação Invisível que aparece no Hover */}
              <div className="mt-12 flex items-center gap-2 text-black dark:text-white font-black uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {t.projects.viewRepository} <ExternalLink size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}