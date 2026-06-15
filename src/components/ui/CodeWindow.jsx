import { useState } from "react";
import { C } from "../../theme/theme";
import { codeTabs } from "../../data/codeSnippets";

export default function CodeWindow() {
  const [tab, setTab] = useState("jordi.tsx");
  const active = codeTabs[tab];

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
      {/* Barre de fenêtre */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: `1px solid ${C.border}` }}>
        <span className="w-3 h-3 rounded-full" style={{ background: "#F36C6C" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#F4BF6A" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#7BD88F" }} />
        <div className="flex gap-1 ml-4 overflow-x-auto" role="tablist" aria-label="Aperçu de code">
          {Object.keys(codeTabs).map((name) => (
            <button
              key={name}
              role="tab"
              aria-selected={tab === name}
              onClick={() => setTab(name)}
              className="pf-mono pf-focus text-xs px-3 py-1 rounded-md whitespace-nowrap"
              style={{
                color: tab === name ? codeTabs[name].accent : C.faint,
                background: tab === name ? C.surface2 : "transparent",
                border: `1px solid ${tab === name ? C.border : "transparent"}`,
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      {/* Code */}
      <div className="p-5 overflow-x-auto" style={{ minHeight: "230px" }}>
        {active.lines.map((line, i) => (
          <div key={i} className="pf-mono text-sm leading-7 whitespace-pre">
            <span className="select-none mr-4" style={{ color: C.faint }}>{String(i + 1).padStart(2, "0")}</span>
            {line.map((seg, j) => (
              <span key={j} style={{ color: seg.c }}>{seg.t}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="px-5 py-2 pf-mono text-xs flex justify-between" style={{ borderTop: `1px solid ${C.border}`, color: C.faint }}>
        <span>● fullstack — 3 langages, 1 développeur</span>
        <span style={{ color: active.accent }}>UTF-8</span>
      </div>
    </div>
  );
}
