const FourWays = () => {
  return (
    <section className="project-detail fourways">
      <div className="project-hero">
        <h1>Four Ways</h1>
        <p className="project-subtitle">Eine augen und blickgesteuerte Smarthome-App </p>
      </div>

      <div className="project-overview">
        <h2>Projektübersicht</h2>
        <div className="overview-layout">
          <p className="overview-description">
            Kurze Beschreibung deines dritten Projekts. Ausführliche Informationen zu Projekt 3.
            Hier kannst du alles beschreiben, was wichtig ist.
          </p>
          <dl className="overview-details">
            <div className="overview-item">
              <dt>Kontext</dt>
              <dd>Forschungsprojekt FourWays in Kooperation mit Treye Tech</dd>
            </div>
            <div className="overview-item">
              <dt>Rolle</dt>
              <dd>Icon Design</dd>
            </div>
            <div className="overview-item">
              <dt>Zeitraum</dt>
              <dd>[Zeitraum einfügen]</dd>
            </div>
            <div className="overview-item">
              <dt>Tools</dt>
              <dd>Adobe Illustrator</dd>
            </div>
          </dl>
        </div>
      </div>

      <nav className="content-navigation" aria-label="Inhaltsverzeichnis">
        <h2>Zum Inhalt springen:</h2>
        <ul>
          <li>
            <a href="#ziel">Ziel</a>
          </li>
          <li>
            <a href="#rolle">Meine Rolle</a>
          </li>
          <li>
            <a href="#ergebnisse">Projektstruktur</a>
          </li>
        </ul>
      </nav>

      <section id="ziel" className="content-section">
        <h2>Ausgangssituation & Ziel</h2>
        <p>[Beschreibung der Ausgangssituation und Ziele einfügen]</p>
      </section>

      <section id="rolle" className="content-section">
        <h2>Meine Rolle</h2>
        <p>[Beschreibung Phase 1]</p>

        <p>Verantwortungsberreiche:</p>
        <div id="phase1-responsibilities" className="responsibilities-list">
          <ul>
            <li>[Verantwortung 1]</li>
            <li>[Verantwortung 2]</li>
            <li>[Verantwortung 3]</li>
          </ul>
        </div>

        <p>[Abschluss Phase 1]</p>
      </section>

      <section id="ergebnisse" className="content-section">
        <h2>Icon Design</h2>
        <p>[Beschreibung Ergebnis 1]</p>
        <ul className="features-list">
          <li>[Feature 1]</li>
          <li>[Feature 2]</li>
          <li>[Feature 3]</li>
        </ul>
      </section>
    </section>
  );
};

export default FourWays;
