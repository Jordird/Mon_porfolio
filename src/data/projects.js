import { C } from "../theme/theme";

export const projects = [
  {
    name: "Application fullstack — Ravinala Airports",
    stack: ["React", "C# / .NET", "SQL Server"],
    accent: C.sql,
    desc: "Stage professionnel (6 mois) : développement d'une application web fullstack, du schéma SQL Server jusqu'à l'interface React, en passant par des API REST .NET. Participation au cycle de développement complet.",
  },
  {
    name: "Application de gestion des ventes — Ozala Consulting",
    stack: ["Angular", "API REST", "Back-end"],
    accent: C.react,
    desc: "Stage de développement web (6 mois) : interface de gestion des ventes (produits, clients, commandes, factures) avec Angular, intégrée au back-end via des API REST, et tableau de bord de suivi des ventes en temps réel.",
  },
  {
    name: "Méthanisation des déchets organiques",
    stack: ["React", "MySQL", "IoT / Capteurs"],
    accent: C.csharp,
    desc: "Projet universitaire (2025) : supervision en temps réel via interface web. Capteurs de température, de pression et de gaz (MQ4, DS18B20, BMP280), dashboard React avec affichage des mesures et alertes, données stockées en MySQL.",
  },
];
