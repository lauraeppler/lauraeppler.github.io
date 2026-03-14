import { Project } from "./types/Project";

export function useFetchProjectContent(): Project[];
export function useFetchProjectContent(
  id: string | undefined,
): Project | undefined;
export function useFetchProjectContent(
  id?: string,
): Project | Project[] | undefined {
  const BounceBallData: Project = {
    id: "bounceball",
    title: "Bounce Ball - Neon Party Arcade",
    description: "Kurze Beschreibung deines ersten Projekts.",
    details:
      "Ausführliche Informationen zu Projekt 1. Hier kannst du alles beschreiben, was wichtig ist.",
    context:
      'Interdisziplinäres Studienprojekt im Rahmen des Moduls "Game Praktikum" an der Hochschule der Medien Stuttgart',
    period: "Wintersemester 2021/2022 - Sommersemester 2022",
    role: "Team Graphics - UX/UI Design, Icon Design, Asset Design, Partikeleffekte",
    tools: "Adobe Illustrator, Unity, Confluence, Jira, Codecks ",
    images: ["bild1.jpg", "bild2.jpg"],
    link: "/projekt/BounceBall",
    tags: ["UX/UI Design", "Game", "Studienprojekt"],
    sections: [
      {
        id: "projektziel",
        title: "Projektziel",
        filePath: "/content/bounceball/projektziel.md",
      },
      {
        id: "meine-rolle",
        title: "Meine Rolle",
        filePath: "/content/bounceball/meine-rolle.md",
      },
      {
        id: "projektstruktur",
        title: "Projektstruktur",
        filePath: "/content/bounceball/projektstruktur.md",
      },
    ],
  };

  const CamtureData: Project = {
    id: "camture",
    title: "Camture",
    description: "Kurze Beschreibung deines fünften Projekts.",
    details:
      "Ausführliche Informationen zu Projekt 5. Hier kannst du alles beschreiben, was wichtig ist.",
    context: "",
    role: "",
    period: "??",
    tools: "",
    images: ["bild9.jpg", "bild10.jpg"],
    link: "/projekt/Camture",
    tags: ["UX/UI Design", "Digitale Barrierefreiheit", "Webentwicklung"],
    sections: [
      {
        id: "projektziel",
        title: "Projektziel",
        filePath: "/content/camture/projektziel.md",
      },
      {
        id: "meine-rolle",
        title: "Meine Rolle",
        filePath: "/content/camture/meine-rolle.md",
      },
      {
        id: "projektstruktur",
        title: "Projektstruktur",
        filePath: "/content/camture/projektstruktur.md",
      },
    ],
  };

  const ClimexData: Project = {
    id: "climex",
    title: "Climex",
    description: "Kurze Beschreibung deines zweiten Projekts.",
    details:
      "Ausführliche Informationen zu Projekt 2. Hier kannst du alles beschreiben, was wichtig ist.",
    context: "",
    role: "",
    period: "??",
    tools: "",
    images: ["bild3.jpg", "bild4.jpg"],
    link: "/projekt/Climex",
    tags: [
      "UX/UI Design",
      "Informationsarchitektur",
      "Mobile App",
      "Studienprojekt",
    ],
    sections: [
      {
        id: "projektziel",
        title: "Projektziel",
        filePath: "/content/climex/projektziel.md",
      },
      {
        id: "meine-rolle",
        title: "Meine Rolle",
        filePath: "/content/climex/meine-rolle.md",
      },
      {
        id: "projektstruktur",
        title: "Projektstruktur",
        filePath: "/content/climex/projektstruktur.md",
      },
    ],
  };

  const EatMoveData: Project = {
    id: "eatmove",
    title: "Eat&Move",
    description:
      "Eine mobile Anwendung, die Rezepte und Workouts in einem System vereint.",
    details:
      "Ausführliche Informationen zu Projekt 4. Hier kannst du alles beschreiben, was wichtig ist.",
    context:
      'Semesterprojekt im Studienfach "Mobile Medien" an der Hochschule der Medien Stuttgart',
    role: "UX/UI Design, Informationsarchitektur, Prototyping",
    period: "Wintersemester 2020 (3. Semester)",
    tools: "Balsamiq, Adobe XD",
    images: ["bild7.jpg", "bild8.jpg"],
    link: "/projekt/EatMove",
    tags: ["UX/UI Design", "Mobile App", "Studienprojekt"],
    sections: [
      {
        id: "projektziel",
        title: "Projektziel",
        filePath: "/content/eatmove/projektziel.md",
      },
      {
        id: "meine-rolle",
        title: "Meine Rolle",
        filePath: "/content/eatmove/meine-rolle.md",
      },
      {
        id: "projektstruktur",
        title: "Projektstruktur",
        filePath: "/content/eatmove/projektstruktur.md",
      },
    ],
  };

  const FourWaysData: Project = {
    id: "fourways",
    title: "FourWays - Smarthome App",
    description:
      "Eine blickbasierte Smarthome-App für Menschen mit Bewegungseinschränkungen",
    details:
      "Eine blickbasierte Smarthome-App zur Steuerung des Wohnumfelds für Menschen mit motorischen Einschränkungen",
    context: "BMBF-Forschungsprojekt in Kooperation mit dem Startup Treye Tech",
    period: "??",
    role: "Icon Design",
    tools: "Adobe Illustrator",
    images: ["bild5.jpg", "bild6.jpg"],
    link: "/projekt/FourWays",
    tags: ["Icon Design", "Mobile App"],
    sections: [
      {
        id: "projektziel",
        title: "Projektziel",
        filePath: "/content/fourways/projektziel.md",
      },
      {
        id: "meine-rolle",
        title: "Meine Rolle",
        filePath: "/content/fourways/meine-rolle.md",
      },
      {
        id: "designansatz",
        title: "Designprinzipien",
        filePath: "/content/fourways/designansatz.md",
      },
      {
        id: "projektergebnisse",
        title: "Icon-Set",
        filePath: "/content/fourways/projektergebnisse.md",
      },
      {
        id: "impact",
        title: "Impact",
        filePath: "/content/fourways/impact.md",
      },
    ],
  };

  const LocalMessengerData: Project = {
    id: "localmessenger",
    title: "Local Messenger",
    description:
      "Eine App zur Unterstützungsvermittlung in ambulanten Wohnformen",
    details:
      "Eine App zur schnellen und einfachen Kommunikation zwischen Menschen mit Unterstützungsbedarf und Assistierenden der ambulanten Betreuung und Pflege",
    context: "Forschungsprojekt in Kooperation mit der Diakonie Kork",
    role: "UX/UI Design, Interaktionslogik, Prototyping",
    period: "??",
    tools: "Adobe XD",
    images: ["bild3.jpg", "bild4.jpg"],
    link: "/projekt/LocalMessenger",
    tags: ["UX/UI Design", "Ambulante Pflege", "Mobile App"],
    sections: [
      {
        id: "projektziel",
        title: "Projektziel",
        filePath: "/content/localmessenger/projektziel.md",
      },
      {
        id: "meine-rolle",
        title: "Mein Beitrag",
        filePath: "/content/localmessenger/meine-rolle.md",
      },
      {
        id: "ergebnisse",
        title: "Ergebnisse",
        filePath: "/content/localmessenger/ergebnisse.md",
      },
    ],
  };

  const ShuffleData: Project = {
    id: "shuffle",
    title: 'SHUFFLE - Knowledge Badge "Barrierefrei lehren"',
    description:
      "Ein Qualifizierungsangebot zur digitalen Barrierefreiheit in der Lehre",
    details:
      "Ein Weiterbildungsangebot zur digitalen Barrierefreiheit in der Hochschullehre mit öffentlich zugänglichem Onlinekurs und optionaler Qualifizierungsprüfung.",
    context: "Forschungsprojekt SHUFFLE in Kooperation mit IAAP D-A-CH",
    role: "Konzeption, Kurs- & Prüfungsentwicklung, Projektleitung, Prüfungskoordination, Evaluation",
    period: "??",
    images: ["bild1.jpg", "bild2.jpg"],
    link: "/projekt/SHUFFLE",
    tags: [
      "Barrierefreiheit in der Bildung",
      "Weiterbildungsangebot",
      "Projektleitung",
    ],
    sections: [
      {
        id: "projektziel",
        title: "Projektziel",
        filePath: "/content/shuffle/projektziel.md",
      },
      {
        id: "meine-rolle",
        title: "Mein Beitrag",
        filePath: "/content/shuffle/meine-rolle.md",
      },
      {
        id: "projektstruktur",
        title: "Ergebnisse",
        filePath: "/content/shuffle/projektstruktur.md",
      },
    ],
  };

  const projectsData: Project[] = [
    ShuffleData,
    LocalMessengerData,
    FourWaysData,
    ClimexData,
    CamtureData,
    BounceBallData,
    EatMoveData,
  ];

  if (id) {
    return projectsData.find((project) => project.id === id);
  }
  return projectsData;
}
