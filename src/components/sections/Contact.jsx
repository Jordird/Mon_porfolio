import { C } from "../../theme/theme";
import { profile } from "../../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="rounded-2xl p-8 md:p-14 text-center" style={{ background: `linear-gradient(140deg, ${C.surface}, ${C.surface2})`, border: `1px solid ${C.border}` }}>
        <div className="pf-mono text-xs tracking-widest uppercase mb-4" style={{ color: C.react }}>// contact</div>
        <h2 className="pf-display text-3xl md:text-4xl font-bold mb-4">Un projet en tête ?</h2>
        <p className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: C.muted }}>
          {profile.contactIntro}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="pf-focus px-6 py-3 rounded-lg font-medium text-sm" style={{ background: C.react, color: C.bg }}>
            ✉ {profile.email}
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="pf-focus px-6 py-3 rounded-lg font-medium text-sm" style={{ border: `1px solid ${C.border}`, color: C.text }}>
            ☎ {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="pf-focus px-6 py-3 rounded-lg font-medium text-sm" style={{ border: `1px solid ${C.border}`, color: C.text }}>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pf-focus px-6 py-3 rounded-lg font-medium text-sm" style={{ border: `1px solid ${C.border}`, color: C.text }}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
