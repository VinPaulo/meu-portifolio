import { Hero } from "@/components/layout/Hero";
import { About } from "@/components/layout/About";
import { TechStack } from "@/components/layout/TechStack";
import { Projects } from "@/components/layout/Projects"; 
import { ContactSection } from "@/components/layout/ContactSection";
import { Navbar } from "@/components/layout/Navbar"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar /> 
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <ContactSection />
      <footer className="py-10 text-center text-neutral-900 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
        © 2026 P. Lemos • Sistemas de Informação UFV
      </footer>
    </main>
  );
}