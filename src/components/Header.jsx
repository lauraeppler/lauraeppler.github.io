import React from "react";
import "../App.css";

const Header = () => (
  <header className="main-header">
    <h1>Laura Eppler</h1>
    <nav aria-label="Hauptnavigation">
      <a href="#about">Über mich</a>
      <a href="#projects">Projekte</a>
      <a href="#contact">Kontakt</a>
    </nav>
  </header>
);

export default Header;
