"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Monta o link mailto dinamicamente com os dados do formulário
    const mailtoLink = `mailto:paulovinaudmoreira@gmail.com?subject=${encodeURIComponent(form.subject)}&body=Olá, meu nome é ${encodeURIComponent(form.name)} (%0D%0A${encodeURIComponent(form.email)}).%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="min-h-screen py-64 bg-background flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-32">
        
        {/* Lado Esquerdo: Chamada e Redes Sociais */}
        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] italic">
              {t.contact.titlePart1} <br /> <span className="text-blue-600">{t.contact.titlePart2}</span>
            </h2>
            <p className="text-2xl text-black dark:text-slate-400 font-medium max-w-md">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Seus botões sociais originais com estilo Pill */}
          <div className="flex gap-8">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vinaudpaulo-lemos/" },
              { Icon: Github, href: "https://github.com/VinPaulo" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank" 
                className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/40 text-black dark:text-slate-400 hover:text-blue-600 border border-slate-200 dark:border-white/5 transition-all shadow-lg hover:shadow-xl hover:-translate-y-3"
              >
                <item.Icon size={40} />
              </a>
            ))}
          </div>
        </div>

        {/* Lado Direito: Formulário Nível Caio Diniz */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder={t.contact.form.name}
              required
              className="w-full p-8 bg-white/80 dark:bg-slate-900/40 border border-black/10 dark:border-white/5 rounded-pill text-slate-900 dark:text-white font-bold placeholder:text-slate-500 dark:placeholder:text-slate-700 focus:border-blue-500/50 outline-none transition-all"
              onChange={(e) => setForm({...form, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder={t.contact.form.email}
              required
              className="w-full p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-pill text-black dark:text-white font-bold placeholder:text-slate-400 dark:placeholder:text-slate-700 focus:border-blue-500 outline-none transition-all shadow-sm focus:shadow-md"
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
          </div>
          <input 
            type="text" 
            placeholder={t.contact.form.subject}
            required
            className="w-full p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-pill text-black dark:text-white font-bold placeholder:text-slate-400 dark:placeholder:text-slate-700 focus:border-blue-500 outline-none transition-all shadow-sm focus:shadow-md"
            onChange={(e) => setForm({...form, subject: e.target.value})}
          />
          <textarea 
            placeholder={t.contact.form.message}
            rows={5}
            required
            className="w-full p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-[2.5rem] text-black dark:text-white font-bold placeholder:text-slate-400 dark:placeholder:text-slate-700 focus:border-blue-500 outline-none transition-all resize-none shadow-sm focus:shadow-md"
            onChange={(e) => setForm({...form, message: e.target.value})}
          />
          
          <button 
            type="submit"
            className="w-full md:w-auto px-16 py-10 bg-blue-600 text-white rounded-full font-black text-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-center gap-6"
          >
            {t.contact.form.send} <Send size={24} />
          </button>
        </form>

      </div>
    </section>
  );
}