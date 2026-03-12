import { Link } from "react-router-dom";
import "./Header.css";
import { HOME } from './../../routes';

const Header = () => {
  return (
    <header className="main-header">
      <nav aria-label="Hauptnavigation">
        <Link to={{pathname: HOME, hash: '#about'}}>Über mich</Link>
        <Link to={{pathname: HOME, hash: '#projects'}}>Projekte</Link>
        <Link to={{pathname: HOME, hash: '#contact'}}>Kontakt</Link>
        <Link to={{pathname: HOME, hash: ''}}>Lebenslauf (PDF)</Link>
      </nav>
    </header>
  )
};

export default Header;
