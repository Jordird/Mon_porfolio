import { useEffect, useState } from "react";
import { C } from "../../theme/theme";
import { navLinks } from "../../data/navigation";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Met en surbrillance le lien de la section actuellement visible.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? C.overlay : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all .3s",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Navigation principale">
        <a href="#accueil" className="pf-mono pf-focus text-sm font-medium" style={{ color: C.text }}>
          <span style={{ color: C.react }}>&lt;</span>jordi<span style={{ color: C.csharp }}> /&gt;</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="pf-link pf-focus"
              aria-current={active === l.id ? "true" : undefined}
              style={active === l.id ? { color: C.text } : undefined}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="pf-focus px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: C.react, color: C.bg }}
          >
            Me contacter
          </a>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="pf-mono pf-focus text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            style={{ color: C.text }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ background: C.overlay, borderBottom: `1px solid ${C.border}` }}>
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="pf-link pf-focus py-1"
              aria-current={active === l.id ? "true" : undefined}
              style={active === l.id ? { color: C.text } : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
