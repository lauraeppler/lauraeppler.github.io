import { Link } from "react-router-dom";
import { HOME } from "../routes.ts";
import "@/styles/sections/Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <nav aria-label="Hauptnavigation">
        <ul>
          <li className="main-header__link">
            <Link to={{ pathname: HOME, hash: "#about" }}>Über mich</Link>
          </li>
          <li className="main-header__link">
            <Link to={{ pathname: HOME, hash: "#projects" }}>Projekte</Link>
          </li>
          <li className="main-header__link">
            <Link to={{ pathname: HOME, hash: "#contact" }}>Kontakt</Link>
          </li>
          <li className="lebenslauf-link button-primary">
            <a href="/Lebenslauf.Portfolio.LauraEppler.pdf" download>
              Lebenslauf (PDF)
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
