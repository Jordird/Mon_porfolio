// ─────────────────────────────────────────────────────────────
//  Portfolio — RANDRIARINIAINA Andritiana Jordi
//  Développeur Fullstack · React · C# / .NET · SQL Server
//  Thème : encre profonde, double accent (cyan React / violet C#)
// ─────────────────────────────────────────────────────────────

import { C, fontStyles } from "./theme/theme";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import BackToTop from "./components/ui/BackToTop";

export default function Portfolio() {
  return (
    <div className="pf-root min-h-screen" style={{ background: C.bg, color: C.text }}>
      <style>{fontStyles}</style>

      <a
        href="#accueil"
        className="pf-focus sr-only focus:not-sr-only fixed top-4 left-4 z-50 px-4 py-2 rounded-lg text-sm font-medium"
        style={{ background: C.surface, color: C.text, border: `1px solid ${C.border}` }}
      >
        Aller au contenu principal
      </a>

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
