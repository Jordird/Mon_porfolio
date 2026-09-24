import { C } from "../theme/theme";

export const skills = [
  {
    title: "Frontend",
    accent: C.react,
    tag: "interface",
    items: [
      "React / Hooks",
      "JavaScript · TypeScript",
      "HTML5 / CSS3 · Tailwind CSS · Bootstrap  ",
      "· CoreUI",
      "Responsive design",
      "Consommation d'API REST",
    ],
    desc: "Des interfaces réactives, accessibles et soignées, pensées d'abord pour l'utilisateur.",
  },
  {
    title: "Backend",
    accent: C.csharp,
    tag: "logique métier",
    items: [
      "C# · .NET / ASP.NET Core",
      "API REST · Web API",
      "Entity Framework Core",
      "Architecture en couches",
      "Authentification & sécurité",
    ],
    desc: "Des API robustes et maintenables, avec une logique métier claire et testable.",
  },
  {
    title: "Base de données",
    accent: C.sql,
    tag: "données",
    items: [
      "SQL Server",
      "T-SQL · procédures stockées",
      "Modélisation relationnelle",
      "Optimisation de requêtes",
      "Intégrité & migrations",
    ],
    desc: "Des schémas bien modélisés et des requêtes optimisées pour des données fiables.",
  },
];
