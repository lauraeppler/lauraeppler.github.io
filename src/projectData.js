import useFetch from "./hooks/useFetch";

export const useFetchProjectContent = () => {
  const BounceBallData = {
  "id": "bounceball",
  "title": "Bounce Ball",
  "description": "Kurze Beschreibung deines ersten Projekts.",
  "details": "Ausführliche Informationen zu Projekt 1. Hier kannst du alles beschreiben, was wichtig ist.",
  "context": "Interdisziplinäres Studienprojekt im Rahmen des Moduls \"Game Design\" an der Hochschule der Medien Stuttgart",
  "period": "Sommersemester 2022 - Wintersemester 2022/2023",
  "role": "UX/UI Design, Partikeleffekte",
  "tools": "Adobe Illustrator, Unity",
  "images": ["bild1.jpg", "bild2.jpg"],
  "link": "/projekt/BounceBall",
  "tags": ["Spielentwicklung", "JavaScript"],
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
  "tags": ["Umwelt", "Datenvisualisierung"],
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
  "title": "EatMove",
  "description": "Kurze Beschreibung deines vierten Projekts.",
  "details": "Ausführliche Informationen zu Projekt 4. Hier kannst du alles beschreiben, was wichtig ist.",
  "context": "",
  "role": "",
  "period": "??",
  "tools": "",
  "images": ["bild7.jpg", "bild8.jpg"],
  "link": "/projekt/EatMove",
  "tags": ["Gesundheit", "App-Entwicklung"],
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
  "title": "Four Ways",
  "description": "Kurze Beschreibung deines dritten Projekts.",
  "details": "Ausführliche Informationen zu Projekt 3. Hier kannst du alles beschreiben, was wichtig ist.",
  "context": "",
  "role": "",
  "period": "??",
  "tools": "",
  "images": ["bild5.jpg", "bild6.jpg"],
  "link": "/projekt/FourWays",
  "tags": ["UX/UI Design", "Interaktives Design"],
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
      title: "Projektstruktur",
      content: useFetch("/content/fourways/projektstruktur.md")
    },
  ]
};

const LocalMessengerData = {
  "id": "localmessenger",
  "title": "Local Messenger",
  "description": "Kurze Beschreibung deines zweiten Projekts.",
  "details": "Ausführliche Informationen zu Projekt 2. Hier kannst du alles beschreiben, was wichtig ist.",
  "context": "",
  "role": "",
  "period": "??",
  "tools": "",
  "images": ["bild3.jpg", "bild4.jpg"],
  "link": "/projekt/LocalMessenger",
  "tags": ["Webentwicklung", "JavaScript", "Kommunikation"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/localmessenger/projektziel.md")
    },
    {
      title: "Meine Rolle",
      content: useFetch("/content/localmessenger/meine-rolle.md")
    },
    {
      title: "Projektstruktur",
      content: useFetch("/content/localmessenger/projektstruktur.md")
    },
  ]
};

const ShuffleData = {
  "id": "shuffle",
  "title": "SHUFFLE - Knowledge Badge \"Barrierefrei lehren\"",
  "description": "Ein Qualifizierungsangebot für Lehrpersonen zur digitalen Barrierefreiheit in der Lehre",
  "details": "Das Knowledge Badge „Barrierefrei lehren“ ist ein öffentlich zugänglicher Weiterbildungskurs zur digitalen Barrierefreiheit in der Hochschullehre mit optionaler Qualifizierungsprüfung.",
  "context": "Forschungsprojekt SHUFFLE in Kooperation mit der Universität Hamburg",
  "role": "Konzeption, Kurs- & Prüfungsentwicklung, Projektleitung & Koordination, Evaluation",
  "period": "??",
  "images": ["bild1.jpg", "bild2.jpg"],
  "link": "/projekt/SHUFFLE",
  "tags": ["Digitale Barrierefreiheit", "Bildung", "Onlinekurs", "Projektleitung"],
  "sections": [
    {
      title: "Projektziel",
      content: useFetch("/content/shuffle/projektziel.md")
    },
    {
      title: "Meine Rolle",
      content: useFetch("/content/shuffle/meine-rolle.md")
    },
    {
      title: "Projektstruktur",
      content: useFetch("/content/shuffle/projektstruktur.md")
    },
  ]
};

  const projectsData = [ShuffleData, LocalMessengerData, FourWaysData, ClimexData, CamtureData, BounceBallData, EatMoveData];

  return projectsData
}