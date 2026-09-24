import { useEffect, useState } from "react";
import { C } from "../../theme/theme";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut de la page"
      className="pf-focus pf-mono fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center text-lg shadow-2xl"
      style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.react }}
    >
      ↑
    </button>
  );
}
