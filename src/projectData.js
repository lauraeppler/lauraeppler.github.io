import useFetch from "@/hooks/useFetch";

export const useFetchProjectContent = (id) => {
  const BounceBallData = {
  "id": "bounceball",
  "title": "Bounce Ball - Neon Party Arcade",
  "description": "Kurze Beschreibung deines ersten Projekts.",
  "details": "Ausführliche Informationen zu Projekt 1. Hier kannst du alles beschreiben, was wichtig ist.",
  "context": "Interdisziplinäres Studienprojekt im Rahmen des Moduls \"Game Praktikum\" an der Hochschule der Medien Stuttgart",
  "period": "Wintersemester 2021/2022 - Sommersemester 2022",
  "role": "Team Graphics - UX/UI Design, Icon Design, Asset Design, Partikeleffekte",
  "tools": "Adobe Illustrator, Unity, Confluence, Jira, Codecks ",
  "images": ["bild1.jpg", "bild2.jpg"],
  "link": "/projekt/BounceBall",
  "tags": ["UX/UI Design", "Game", "Studienprojekt"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/bounceball/projektziel.md")
    },
    {
      title: "Meine Rolle",
      content: useFetch("/content/bounceball/meine-rolle.md")
    },
    {
      title: "Projektstruktur",
      content: useFetch("/content/bounceball/projektstruktur.md")
    },
  ]
};

const CamtureData = {
  "id": "camture",
  "title": "Camture",
  "description": "Kurze Beschreibung deines fünften Projekts.",
  "details": "Ausführliche Informationen zu Projekt 5. Hier kannst du alles beschreiben, was wichtig ist.",
  "context": "",
  "role": "",
  "period": "??",
  "tools": "",
  "images": ["bild9.jpg", "bild10.jpg"],
  "link": "/projekt/Camture",
  "tags": ["UX/UI Design", "Digitale Barrierefreiheit", "Webentwicklung"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/camture/projektziel.md")
    },
    {
      title: "Meine Rolle",
      content: useFetch("/content/camture/meine-rolle.md")
    },
    {
      title: "Projektstruktur",
      content: useFetch("/content/camture/projektstruktur.md")
    },
  ]
};

const ClimexData = {
  "id": "climex",
  "title": "Climex",
  "description": "Kurze Beschreibung deines zweiten Projekts.",
  "details": "Ausführliche Informationen zu Projekt 2. Hier kannst du alles beschreiben, was wichtig ist.",
  "context": "",
  "role": "",
  "period": "??",
  "tools": "",
  "images": ["bild3.jpg", "bild4.jpg"],
  "link": "/projekt/Climex",
  "tags": ["UX/UI Design", "Informationsarchitektur", "Mobile App", "Studienprojekt"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/climex/projektziel.md")
    },
    {
      title: "Meine Rolle",
      content: useFetch("/content/climex/meine-rolle.md")
    },
    {
      title: "Projektstruktur",
      content: useFetch("/content/climex/projektstruktur.md")
    },
  ]
};

const EatMoveData = {
  "id": "eatmove",
  "title": "Eat&Move",
  "description": "Eine mobile Anwendung, die Rezepte und Workouts in einem System vereint.",
  "details": "Ausführliche Informationen zu Projekt 4. Hier kannst du alles beschreiben, was wichtig ist.",
  "context": "Semesterprojekt im Studienfach \"Mobile Medien\" an der Hochschule der Medien Stuttgart",
  "role": "UX/UI Design, Informationsarchitektur, Prototyping",
  "period": "Wintersemester 2020 (3. Semester)",
  "tools": "Balsamiq, Adobe XD",
  "images": ["bild7.jpg", "bild8.jpg"],
  "link": "/projekt/EatMove",
  "tags": ["UX/UI Design", "Mobile App", "Studienprojekt"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/eatmove/projektziel.md")
    },
    {
      title: "Meine Rolle",
      content: useFetch("/content/eatmove/meine-rolle.md")
    },
    {
      title: "Projektstruktur",
      content: useFetch("/content/eatmove/projektstruktur.md")
    },
  ]
};

const FourWaysData = {
  "id": "fourways",
  "title": "FourWays - Smarthome App",
  "description": "Eine blickbasierte Smarthome-App für Menschen mit Bewegungseinschränkungen",
  "details": "Eine blickbasierte Smarthome-App zur Steuerung des Wohnumfelds für Menschen mit motorischen Einschränkungen",
  "context": "BMBF-Forschungsprojekt in Kooperation mit dem Startup Treye Tech",
  "period": "??",
  "role": "Icon Design",
  "tools": "Adobe Illustrator",
  "images": ["bild5.jpg", "bild6.jpg"],
  "link": "/projekt/FourWays",
  "tags": ["Icon Design", "Mobile App"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/fourways/projektziel.md")
    },
    {
      title: "Meine Rolle",
      content: useFetch("/content/fourways/meine-rolle.md")
    },
    {
      title: "Designprinzipien",
      content: useFetch("/content/fourways/designansatz.md")
    },
    {
      title: "Icon-Set",
      content: useFetch("/content/fourways/projektergebnisse.md")
    },
    {
      title: "Impact",
      content: useFetch("/content/fourways/impact.md")
    },
  ]
};

const LocalMessengerData = {
  "id": "localmessenger",
  "title": "Local Messenger",
  "description": "Eine App zur Unterstützungsvermittlung in ambulanten Wohnformen",
  "details": "Eine App zur schnellen und einfachen Kommunikation zwischen Menschen mit Unterstützungsbedarf und Assistierenden der ambulanten Betreuung und Pflege",
  "context": "Forschungsprojekt in Kooperation mit der Diakonie Kork",
  "role": "UX/UI Design, Interaktionslogik, Prototyping",
  "period": "??",
  "tools": "Adobe XD",
  "images": ["bild3.jpg", "bild4.jpg"],
  "link": "/projekt/LocalMessenger",
  "tags": ["UX/UI Design", "Ambulante Pflege", "Mobile App"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/localmessenger/projektziel.md")
    },
    {
      title: "Mein Beitrag",
      content: useFetch("/content/localmessenger/meine-rolle.md")
    },
    {
      title: "Ergebnisse",
      content: useFetch("/content/localmessenger/ergebnisse.md")
    },
  ]
};

const ShuffleData = {
  "id": "shuffle",
  "title": "SHUFFLE - Knowledge Badge \"Barrierefrei lehren\"",
  "description": "Ein Qualifizierungsangebot zur digitalen Barrierefreiheit in der Lehre",
  "details": "Ein Weiterbildungsangebot zur digitalen Barrierefreiheit in der Hochschullehre mit öffentlich zugänglichem Onlinekurs und optionaler Qualifizierungsprüfung.",
  "context": "Forschungsprojekt SHUFFLE in Kooperation mit IAAP D-A-CH",
  "role": "Konzeption, Kurs- & Prüfungsentwicklung, Projektleitung, Prüfungskoordination, Evaluation",
  "period": "??",
  "images": ["bild1.jpg", "bild2.jpg"],
  "link": "/projekt/SHUFFLE",
  "tags": ["Barrierefreiheit in der Bildung", "Weiterbildungsangebot", "Projektleitung"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/shuffle/projektziel.md")
    },
    {
      title: "Mein Beitrag",
      content: useFetch("/content/shuffle/meine-rolle.md")
    },
    {
      title: "Ergebnisse",
      content: useFetch("/content/shuffle/projektstruktur.md")
    },
  ]
};

  const projectsData = [ShuffleData, LocalMessengerData, FourWaysData, ClimexData, CamtureData, BounceBallData, EatMoveData];

  if(id) {
    return projectsData.find(project => project.id === id);
  }
  return projectsData;
}