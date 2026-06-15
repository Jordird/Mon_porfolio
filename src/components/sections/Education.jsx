import { C } from "../../theme/theme";
import { education } from "../../data/education";
import { techSkills } from "../../data/techSkills";
import SectionTitle from "../ui/SectionTitle";

export default function Education() {
  return (
    <section id="diplomes" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle kicker="formation" title="Diplômes et compétences techniques" accent={C.sql} />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Diplômes */}
        <div>
          <h3 className="pf-display text-xl font-semibold mb-6">Diplômes</h3>
          <div className="relative pl-8" style={{ borderLeft: `1px solid ${C.border}` }}>
            {education.map((e) => (
              <div key={e.degree} className="relative mb-8 last:mb-0">
                <span
                  className="absolute w-3 h-3 rounded-full"
                  style={{ left: "-2.40rem", top: "0.35rem", background: C.sql, boxShadow: `0 0 0 4px ${C.bg}` }}
                />
                <div className="pf-mono text-xs uppercase tracking-widest mb-1" style={{ color: C.sql }}>{e.period}</div>
                <h4 className="pf-display text-lg font-semibold mb-1">{e.degree}</h4>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{e.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compétences techniques */}
        <div>
          <h3 className="pf-display text-xl font-semibold mb-6">Compétences techniques</h3>
          <div className="space-y-5">
            {techSkills.map((s) => (
              <div
                key={s.title}
                className="pf-card rounded-xl p-5"
                style={{ background: C.surface, border: `1px solid ${C.border}` }}
                onMouseEnter={(ev) => (ev.currentTarget.style.borderColor = s.accent)}
                onMouseLeave={(ev) => (ev.currentTarget.style.borderColor = C.border)}
              >
                <h4 className="pf-display text-base font-semibold mb-3">{s.title}</h4>
                <ul className="space-y-1.5">
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
        </div>
      </div>
    </section>
  );
}
