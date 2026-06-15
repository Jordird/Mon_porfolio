import { C } from "../../theme/theme";
import { profile } from "../../data/profile";
import heroPortrait from "../../assets/hero-portrait.jpg";
import profilePhoto from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="accueil" className="max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="pf-fade order-2 md:order-1">
        <div className="flex items-center gap-4 mb-6">
          <span
            className="shrink-0 rounded-full p-[3px]"
            style={{ background: `linear-gradient(135deg, ${C.react}, ${C.csharp})` }}
          >
            <img
              src={profilePhoto}
              alt="Portrait de RANDRIARINIAINA Andritiana Jordi"
              className="block w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top"
              style={{ border: `2px solid ${C.bg}` }}
            />
          </span>
          <div className="pf-mono text-xs tracking-widest uppercase" style={{ color: C.react }}>
            {profile.tagline}
          </div>
        </div>
        <h1 className="pf-display font-bold leading-tight text-4xl md:text-5xl lg:text-6xl">
          RANDRIARINIAINA
          <br />
          <span
            className="inline-block"
            style={{
              background: `linear-gradient(90deg, ${C.react}, ${C.csharp})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.15,
              paddingBottom: "0.1em",
            }}
          >
            Andritiana Jordi
          </span>
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
          Je conçois des applications web complètes : des interfaces <span style={{ color: C.react }}>React</span> modernes,
          des API <span style={{ color: C.csharp }}>C# / .NET</span> robustes et des bases
          <span style={{ color: C.sql }}> SQL Server</span> bien pensées. Du premier schéma de données au dernier pixel.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projets" className="pf-focus px-6 py-3 rounded-lg font-medium text-sm" style={{ background: C.react, color: C.bg }}>
            Voir mes projets
          </a>
          <a href="#contact" className="pf-focus px-6 py-3 rounded-lg font-medium text-sm" style={{ border: `1px solid ${C.border}`, color: C.text }}>
            Discutons
          </a>
        </div>
      </div>

      <div className="pf-fade order-1 md:order-2 relative" style={{ animationDelay: ".15s" }}>
        <div
          className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ width: 260, height: 260, background: C.react, top: -50, right: -30, zIndex: 0 }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ width: 240, height: 240, background: C.csharp, bottom: -40, left: -30, zIndex: 0 }}
        />
        <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: `1px solid ${C.border}`, zIndex: 1 }}>
          <img
            src={heroPortrait}
            alt="Portrait de RANDRIARINIAINA Andritiana Jordi"
            className="w-full h-auto object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${C.bg}, transparent)` }}
          />
          <div
            className="absolute left-4 right-4 bottom-4 flex items-center gap-2 pf-mono text-xs px-3 py-2 rounded-lg"
            style={{ background: C.overlay, border: `1px solid ${C.border}`, backdropFilter: "blur(6px)", color: C.text }}
          >
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#7BD88F" }} />
            {profile.availability}
          </div>
        </div>
      </div>
    </section>
  );
}
