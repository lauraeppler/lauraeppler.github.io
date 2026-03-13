import { Link } from "react-router-dom";
import "./Header.css";
import { HOME } from './../../routes';

const Header = () => {
  return (
    <header className="main-header">
      <nav aria-label="Hauptnavigation">
        <ul>
          <li>
            <Link to={{pathname: HOME, hash: '#about'}}>Über mich</Link>
          </li>
          <li>
            <Link to={{pathname: HOME, hash: '#projects'}}>Projekte</Link>
          </li>
          <li>
            <Link to={{pathname: HOME, hash: '#contact'}}>Kontakt</Link>
          </li>
          <li className="lebenslauf-link">
            <Link to={{pathname: HOME, hash: ''}}>Lebenslauf (PDF)</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
