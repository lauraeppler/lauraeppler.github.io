import React from "react";
import "../App.css";

const Header = () => {
  const [activeTab, setActiveTab] = React.useState("about");

  return (
    <header className="main-header">
      <nav aria-label="Hauptnavigation">
        <a href="#about">Über mich</a>
        <a href="#projects">Projekte</a>
        <a href="#contact">Kontakt</a>
        <a href="">Lebenslauf (PDF)</a>
      </nav>
    </header>
  )
};

export default Header;
