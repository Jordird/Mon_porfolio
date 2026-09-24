import { C } from "../theme/theme";

// Contenu du faux éditeur de code (élément signature du hero).
export const codeTabs = {
  "jordi.tsx": {
    accent: C.react,
    lines: [
      [{ t: "const ", c: C.csharp }, { t: "Jordi", c: C.react }, { t: " = () => {", c: C.text }],
      [{ t: "  return (", c: C.text }],
      [{ t: "    <", c: C.muted }, { t: "Developpeur", c: C.react }],
      [{ t: "      role", c: C.sql }, { t: '="Fullstack"', c: "#9ECE8C" }],
      [{ t: "      frontend", c: C.sql }, { t: '="React"', c: "#9ECE8C" }],
      [{ t: "      passion", c: C.sql }, { t: '="UI propres & code lisible"', c: "#9ECE8C" }],
      [{ t: "    />", c: C.muted }],
      [{ t: "  );", c: C.text }],
      [{ t: "};", c: C.text }],
    ],
  },
  "Jordi.cs": {
    accent: C.csharp,
    lines: [
      [{ t: "public class ", c: C.csharp }, { t: "Developpeur", c: C.react }],
      [{ t: "{", c: C.text }],
      [{ t: "    public string ", c: C.csharp }, { t: "Nom", c: C.text }, { t: " => ", c: C.muted }, { t: '"Jordi RANDRIARINIAINA"', c: "#9ECE8C" }, { t: ";", c: C.text }],
      [{ t: "    public string[] ", c: C.csharp }, { t: "Backend", c: C.text }, { t: " => [", c: C.muted }, { t: '"C#"', c: "#9ECE8C" }, { t: ", ", c: C.text }, { t: '".NET"', c: "#9ECE8C" }, { t: ", ", c: C.text }, { t: '"API REST"', c: "#9ECE8C" }, { t: "];", c: C.muted }],
      [{ t: "    public bool ", c: C.csharp }, { t: "AimeLesDefis", c: C.text }, { t: " => ", c: C.muted }, { t: "true", c: C.csharp }, { t: ";", c: C.text }],
      [{ t: "}", c: C.text }],
    ],
  },
  "profil.sql": {
    accent: C.sql,
    lines: [
      [{ t: "SELECT ", c: C.csharp }, { t: "Rigueur, Curiosite, Experience", c: C.text }],
      [{ t: "FROM ", c: C.csharp }, { t: "Developpeurs", c: C.text }],
      [{ t: "WHERE ", c: C.csharp }, { t: "Nom = ", c: C.text }, { t: "'Jordi'", c: "#9ECE8C" }],
      [{ t: "  AND ", c: C.csharp }, { t: "Stack ", c: C.text }, { t: "IN ", c: C.csharp }, { t: "(", c: C.text }, { t: "'React'", c: "#9ECE8C" }, { t: ", ", c: C.text }, { t: "'SQL Server'", c: "#9ECE8C" }, { t: ");", c: C.text }],
    ],
  },
};
