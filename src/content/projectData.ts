import BounceBall from "@/content/bounceball.mdx";
import EatMove from "@/content/eatmove.mdx";
import FourWays from "@/content/fourways.mdx";
import LocalMessenger from "@/content/localmessenger.mdx";
import Shuffle from "@/content/shuffle.mdx";
import Climex from "@/content/climex.mdx";
import Camture from "@/content/camture.mdx";
import { Project } from "@/types/Project";

const BounceBallData: Project = {
  id: "bounceball",
  component: BounceBall,
  title: "Bounce Ball - Neon Party Arcade",
  description: "Kurze Beschreibung deines ersten Projekts.",
  details:
    "Ausführliche Informationen zu Projekt 1. Hier kannst du alles beschreiben, was wichtig ist.",
  overview: {
    context:
      'Interdisziplinäres Studienprojekt im Rahmen des Moduls "Game Praktikum" an der Hochschule der Medien Stuttgart',
    period: "Wintersemester 2021/2022 - Sommersemester 2022",
    role: "Team Graphics - UX/UI Design, Icon Design, Asset Design, Partikeleffekte",
    tools: "Adobe Illustrator, Unity, Confluence, Jira, Codecks ",
  },
  images: ["bild1.jpg", "bild2.jpg"],
  link: "/projekt/BounceBall",
  tags: ["UX/UI Design", "Game", "Studienprojekt"],
};

 const CamtureData: Project = {
   id: "camture",
   component: Camture,
   title: "Camture",
   description: "Mobile Foto-Challenge-App zur Entdeckung verborgener Orte.",
   details:
     "Eine Foto-Challenge-App, mit der Nutzende versteckte und außergewöhnliche Orte in einer Stadt spielerisch entdecken können. Sie verbindet urbane Exploration mit Fotografie, Wettbewerb und Community-Interaktion.",
   overview: {
     context: 'Semesterprojekt im Modul "User Experience Design" an der Hochschule der Medien Stuttgart zur Themenstellung Hidden Culture',
     role: "UX/UI-Design",
     period: "Sommersemester 2021",
     tools: "Figma, Miro",
   },
   images: ["bild9.jpg", "bild10.jpg"],
   link: "/projekt/Camture",
   tags: ["UX/UI Design", "Mobile App", "Studienprojekt"],
 };

const ClimexData: Project = {
  id: "climex",
  component: Climex,
  title: "Climex",
  description: "Ein Serious Game, das Jugendliche spielerisch für die Folgen des Klimawandels sensibilisiert.",
  details:
    "Ein Serious Game, das Jugendliche und junge Erwachsene spielerisch für die Folgen des Klimawandels sensibilisiert. Durch die Verbindung von Storytelling, Gamification und alltagsnahen Handlungsaufgaben vermittelt die App Wissen, schafft emotionale Nähe zum Thema und motiviert zu nachhaltigem Verhalten.",
  overview: {
    context: 'Semesterprojekt im Studienfach "User Interface Design" an der Hochschule der Medien Stuttgart',
    role: "UX/UI Design, Recherche, Konzeption, Wireframing, Prototyping, Evaluation",
    period: "Sommersemester 2020",
    tools: "Marvel, Adobe XD, Adobe Illustrator",
  },
  images: ["bild3.jpg", "bild4.jpg"],
  link: "/projekt/Climex",
  tags: ["UX/UI Design", "Mobile App", "Serious Game", "Studienprojekt"],
};

const EatMoveData: Project = {
  id: "eatmove",
  component: EatMove,
  title: "Eat&Move",
  description: "Eine mobile Anwendung, die Rezepte und Workouts in einem System vereint.",
  details:
    "Ausführliche Informationen zu Projekt 4. Hier kannst du alles beschreiben, was wichtig ist.",
  overview: {
    context:
      'Semesterprojekt im Studienfach "Mobile Medien" an der Hochschule der Medien Stuttgart',
    role: "UX/UI Design, Informationsarchitektur, Prototyping",
    period: "Wintersemester 2020 (3. Semester)",
    tools: "Balsamiq, Adobe XD",
  },
  images: ["bild7.jpg", "bild8.jpg"],
  link: "/projekt/EatMove",
  tags: ["UX/UI Design", "Mobile App", "Studienprojekt"],
};

const FourWaysData: Project = {
  component: FourWays,
  id: "fourways",
  title: "FourWays - Smarthome App",
  description: "Eine blickbasierte Smarthome-App für Menschen mit Bewegungseinschränkungen.",
  details:
    "Eine blickbasierte Smarthome-App zur Steuerung des Wohnumfelds für Menschen mit motorischen Einschränkungen.",
  overview: {
    context: "BMBF-Forschungsprojekt in Kooperation mit dem Startup Treye Tech",
    period: "2023 - 2024",
    role: "Icon-Design",
    tools: "Adobe Illustrator",
  },
  images: ["bild5.jpg", "bild6.jpg"],
  link: "/projekt/FourWays",
  tags: ["Icon Design", "Mobile App"],
};

const LocalMessengerData: Project = {
  id: "localmessenger",
  component: LocalMessenger,
  title: "Local Messenger",
  description: "Eine App zur Unterstützungsvermittlung in ambulanten Wohnformen.",
  details:
    "Eine App zur schnellen und einfachen Kommunikation zwischen Menschen mit Unterstützungsbedarf und Assistierenden der ambulanten Betreuung und Pflege.",
  overview: {
    context: "Forschungsprojekt in Kooperation mit der Diakonie Kork",
    role: "UX/UI Design, Interaktionslogik, Prototyping",
    period: "2023",
    tools: "Adobe XD",
  },
  images: ["bild3.jpg", "bild4.jpg"],
  link: "/projekt/LocalMessenger",
  tags: ["UX/UI Design", "Ambulante Pflege", "Mobile App"],
};

const ShuffleData: Project = {
  id: "shuffle",
  component: Shuffle,
  title: 'SHUFFLE - Knowledge Badge "Barrierefrei lehren"',
  description: "Ein Qualifizierungsangebot zur digitalen Barrierefreiheit in der Lehre.",
  details:
    "Ein Weiterbildungsangebot zur digitalen Barrierefreiheit in der Hochschullehre mit öffentlich zugänglichem Onlinekurs und optionaler Qualifizierungsprüfung.",
  overview: {
    context: "Forschungsprojekt SHUFFLE in Kooperation mit IAAP D-A-CH",
    role: "Konzeption, Kurs- & Prüfungsentwicklung, Projektleitung, Prüfungskoordination, Evaluation",
    period: "2022 - 2025",
    tools: "",
  },
  images: ["bild1.jpg", "bild2.jpg"],
  link: "/projekt/SHUFFLE",
  tags: ["Barrierefreiheit in der Bildung", "Weiterbildungsangebot", "Projektleitung"],
};

export const projectsData: Record<string, Project> = {
  shuffle: ShuffleData,
  localmessenger: LocalMessengerData,
  fourways: FourWaysData,
  climex: ClimexData,
  camture: CamtureData
};
