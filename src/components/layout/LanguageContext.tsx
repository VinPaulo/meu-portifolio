"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "@/constants/translations";

type Language = "pt" | "en";

const LanguageContext = createContext({
  lang: "pt" as Language,
  setLang: (l: Language) => {},
  t: translations.pt
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);