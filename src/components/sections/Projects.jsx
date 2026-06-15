import { C } from "../../theme/theme";
import { projects } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";

export default function Projects() {
  return (
    <section id="projets" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle kicker="réalisations" title="Projets sélectionnés" accent={C.csharp} />
      <div className="space-y-6">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="pf-card rounded-xl p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-start"
            style={{ background: C.surface, border: `1px solid ${C.border}` }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = p.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="pf-mono text-xs" style={{ color: p.accent }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="pf-display text-xl md:text-2xl font-semibold">{p.name}</h3>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: C.muted }}>{p.desc}</p>
            </div>
            <div className="flex md:flex-col flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="pf-mono text-xs px-3 py-1 rounded-full" style={{ background: C.surface2, border: `1px solid ${C.border}`, color: C.text }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
