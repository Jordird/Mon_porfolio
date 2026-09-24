import { C } from "../../theme/theme";
import { skills } from "../../data/skills";
import SectionTitle from "../ui/SectionTitle";
import CodeWindow from "../ui/CodeWindow";

export default function Skills() {
  return (
    <section id="competences" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle kicker="stack technique" title="Trois couches, une seule exigence" accent={C.react} />
      <div className="max-w-xl mb-12">
        <CodeWindow />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div
            key={s.title}
            className="pf-card rounded-xl p-6"
            style={{ background: C.surface, border: `1px solid ${C.border}` }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = s.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            <div className="pf-mono text-xs uppercase tracking-widest mb-2" style={{ color: s.accent }}>{s.tag}</div>
            <h3 className="pf-display text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm flex items-start gap-2" style={{ color: C.text }}>
                  <span className="pf-mono mt-0.5" style={{ color: s.accent }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
