// ─────────────────────────────────────────────────────────────
//  Thème visuel du portfolio
//  Encre profonde, double accent (cyan React / violet C#)
//  Les couleurs sont exposées en variables CSS pour permettre
//  le bascule clair / sombre via l'attribut [data-theme] sur <html>.
// ─────────────────────────────────────────────────────────────

export const C = {
  bg: "var(--pf-bg)",
  surface: "var(--pf-surface)",
  surface2: "var(--pf-surface2)",
  border: "var(--pf-border)",
  text: "var(--pf-text)",
  muted: "var(--pf-muted)",
  faint: "var(--pf-faint)",
  react: "var(--pf-react)",
  csharp: "var(--pf-csharp)",
  sql: "var(--pf-sql)",
  overlay: "var(--pf-overlay)",
};

export const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  :root,
  [data-theme="dark"] {
    --pf-bg: #000000;
    --pf-surface: #101627;
    --pf-surface2: #151D33;
    --pf-border: #1E2742;
    --pf-text: #E7EBF4;
    --pf-muted: #8C96B0;
    --pf-faint: #5A6480;
    --pf-react: #5ED4F3;
    --pf-csharp: #A78BFA;
    --pf-sql: #F4BF6A;
    --pf-overlay: rgba(10,14,26,0.88);
  }

  [data-theme="light"] {
    --pf-bg: #FFFFFF;
    --pf-surface: #F5F7FB;
    --pf-surface2: #EAEEF6;
    --pf-border: #DCE2EE;
    --pf-text: #161B26;
    --pf-muted: #5A6480;
    --pf-faint: #8C96B0;
    --pf-react: #0E9CBE;
    --pf-csharp: #6D4FE0;
    --pf-sql: #B4760A;
    --pf-overlay: rgba(255,255,255,0.85);
  }

  .pf-root { font-family: 'Inter', system-ui, sans-serif; transition: background-color .3s, color .3s; }
  .pf-display { font-family: 'Space Grotesk', sans-serif; }
  .pf-mono { font-family: 'JetBrains Mono', monospace; }
  .pf-fade { opacity: 0; transform: translateY(14px); animation: pfIn .7s ease forwards; }
  @keyframes pfIn { to { opacity: 1; transform: none; } }

  /* Formes géométriques flottantes en arrière-plan du Hero */
  .pf-shape {
    opacity: 0;
    transform: translateY(-120px) rotate(calc(var(--pf-rot, 0deg) - 15deg));
    animation: pfShapeIn 2.2s cubic-bezier(.23,.86,.39,.96) forwards;
    animation-delay: var(--pf-delay, 0s);
  }
  @keyframes pfShapeIn {
    to { opacity: 1; transform: translateY(0) rotate(var(--pf-rot, 0deg)); }
  }
  .pf-shape-inner { animation: pfFloat 12s ease-in-out infinite; }
  @keyframes pfFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(14px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .pf-fade { animation: none; opacity: 1; transform: none; }
    .pf-shape { animation: none; opacity: 1; transform: rotate(var(--pf-rot, 0deg)); }
    .pf-shape-inner { animation: none; }
    .pf-root * { transition: none !important; }
  }
  .pf-link { color: var(--pf-muted); transition: color .2s; }
  .pf-link:hover, .pf-link:focus-visible { color: var(--pf-text); }
  .pf-card { transition: border-color .25s, transform .25s; }
  .pf-card:hover { transform: translateY(-3px); }
  .pf-focus:focus-visible { outline: 2px solid var(--pf-react); outline-offset: 2px; border-radius: 4px; }
  html { scroll-behavior: smooth; }
`;
