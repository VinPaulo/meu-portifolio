import { useLanguage } from "@/components/layout/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-20 text-center border-t border-white/5">
      <p className="text-slate-600 font-bold uppercase tracking-[0.4em] text-xs">
        {t.footer.text}
      </p>
    </footer>
  );
}