import { C } from "../../theme/theme";

export default function SectionTitle({ kicker, title, accent }) {
  return (
    <div className="mb-12">
      <div className="pf-mono text-xs tracking-widest uppercase mb-3" style={{ color: accent }}>// {kicker}</div>
      <h2 className="pf-display text-3xl md:text-4xl font-700 font-bold" style={{ color: C.text }}>{title}</h2>
    </div>
  );
}
