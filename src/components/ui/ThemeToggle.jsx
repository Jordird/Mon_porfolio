import { useEffect, useState } from "react";
import { C } from "../../theme/theme";

function getInitialTheme() {
  const stored = localStorage.getItem("pf-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("pf-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
      className="pf-focus pf-mono w-10 h-10 rounded-lg flex items-center justify-center text-lg"
      style={{ border: `1px solid ${C.border}`, color: C.text }}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
