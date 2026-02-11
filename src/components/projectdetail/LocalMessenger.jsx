import React from "react";

const LocalMessenger = () => (
  <section className="project-detail">
    <h1>Local Messenger</h1>

    <div>
      <h2>Kurzbeschreibung</h2>
      <p>
        Local Messenger ist eine datenschutzfreundliche Messaging-App für lokale Communities. Ziel ist Austausch,
        Nachbarschaftshilfe und Event-Organisation ohne zentrale Datenhaltung.
      </p>

      <dl>
        <dt>Art:</dt>
        <dd>Studienprojekt / Prototyp</dd>
        <dt>Teamgröße:</dt>
        <dd>4 Personen </dd>
        <dt>Rolle:</dt>
        <dd>Design & Prototyping</dd>
        <dt>Tools:</dt>
        <dd>Adobe XD</dd>
      </dl>
    </div>

    <nav aria-label="Inhaltsverzeichnis">
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#architecture">Architektur</a></li>
        <li><a href="#screens">Screens</a></li>
        <li><a href="#reflections">Reflections</a></li>
      </ul>
    </nav>

    <section id="features">
      <h2>Features</h2>
      <ul>
        <li>Private Gruppen & Broadcasts</li>
        <li>Ortbasierte Räume</li>
        <li>Einfache Event-Organisation</li>
      </ul>
    </section>

    <section id="architecture">
      <h2>Architektur</h2>
      <p>Client-seitiger Prototyp mit optionaler Backend-Integration; Fokus auf minimale Datenspeicherung.</p>
    </section>

    <section id="screens">
      <h2>Screens</h2>
      <p>Wireframes und Prototypen zeigen Chat-, Gruppen- und Event-Flows.</p>
    </section>

    <section id="reflections">
      <h2>Reflections</h2>
      <p>Erkenntnisse, Herausforderungen und nächste Schritte.</p>
    </section>
  </section>
);

export default LocalMessenger;