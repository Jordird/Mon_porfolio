import { C } from "../../theme/theme";
import { profile } from "../../data/profile";
import { journey } from "../../data/journey";
import { experiences } from "../../data/experiences";
import { interests } from "../../data/interests";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="apropos" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle kicker="qui suis-je" title="À propos de moi" accent={C.sql} />

      {/* Objectif professionnel */}
      <div
        className="rounded-xl p-6 md:p-8 mb-14"
        style={{ background: `linear-gradient(140deg, ${C.surface}, ${C.surface2})`, border: `1px solid ${C.border}` }}
      >
        <div className="pf-mono text-xs uppercase tracking-widest mb-3" style={{ color: C.react }}>// objectif professionnel</div>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl" style={{ color: C.text }}>{profile.objective}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-14">
        {/* Parcours */}
        <div>
          <h3 className="pf-display text-xl font-semibold mb-6">Parcours</h3>
          <div className="relative pl-8" style={{ borderLeft: `1px solid ${C.border}` }}>
            {journey.map((j) => (
              <div key={j.title} className="relative mb-8 last:mb-0">
                <span
                  className="absolute w-3 h-3 rounded-full"
                  style={{ left: "-2.40rem", top: "0.35rem", background: C.sql, boxShadow: `0 0 0 4px ${C.bg}` }}
                />
                <div className="pf-mono text-xs uppercase tracking-widest mb-1" style={{ color: C.sql }}>{j.period}</div>
                <h4 className="pf-display text-lg font-semibold mb-1">{j.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{j.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expériences */}
        <div>
          <h3 className="pf-display text-xl font-semibold mb-6">Expériences</h3>
          <div className="space-y-5">
            {experiences.map((e) => (
              <div
                key={e.role + e.period}
                className="pf-card rounded-xl p-5"
                style={{ background: C.surface, border: `1px solid ${C.border}` }}
                onMouseEnter={(ev) => (ev.currentTarget.style.borderColor = e.accent)}
                onMouseLeave={(ev) => (ev.currentTarget.style.borderColor = C.border)}
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h4 className="pf-display text-base font-semibold">{e.role}</h4>
                  <span className="pf-mono text-xs shrink-0" style={{ color: e.accent }}>{e.period}</span>
                </div>
                <div className="pf-mono text-xs mb-3" style={{ color: C.muted }}>{e.org}</div>
                <ul className="space-y-1.5">
                  {e.points.map((p) => (
                    <li key={p} className="text-sm flex items-start gap-2" style={{ color: C.text }}>
                      <span className="pf-mono mt-0.5" style={{ color: e.accent }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centres d'intérêt */}
      <div>
        <h3 className="pf-display text-xl font-semibold mb-6">Centres d'intérêt technologiques</h3>
        <div className="flex flex-wrap gap-3">
          {interests.map((i) => (
            <span
              key={i.label}
              className="pf-mono text-sm px-4 py-2 rounded-full"
              style={{ background: C.surface2, border: `1px solid ${C.border}`, color: i.accent }}
            >
              {i.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
