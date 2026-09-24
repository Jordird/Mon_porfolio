import { C } from "../../theme/theme";

// ─────────────────────────────────────────────────────────────
//  Couche d'arrière-plan décorative : formes en dégradé arrondies
//  qui apparaissent en fondu puis flottent doucement.
//  100 % CSS (cf. .pf-shape / .pf-float dans theme.js) — aucune
//  dépendance. Palette alignée sur la charte (cyan / violet / ambre).
// ─────────────────────────────────────────────────────────────

function Shape({ width, height, rotate, color, delay = 0, className }) {
  return (
    <div
      className={`pf-shape absolute ${className}`}
      style={{ "--pf-rot": `${rotate}deg`, "--pf-delay": `${delay}s` }}
    >
      <div className="pf-shape-inner relative" style={{ width, height }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, color-mix(in srgb, ${color} 16%, transparent), transparent)`,
            backdropFilter: "blur(2px)",
            border: "2px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 32px 0 rgba(255,255,255,0.08)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}

export default function ElegantShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <Shape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        color={C.react}
        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      />
      <Shape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        color={C.csharp}
        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
      />
      <Shape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        color={C.csharp}
        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
      />
      <Shape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        color={C.sql}
        className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
      />
      <Shape
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        color={C.react}
        className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
      />
    </div>
  );
}
