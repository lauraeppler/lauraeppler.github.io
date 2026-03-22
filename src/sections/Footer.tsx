import "@/styles/sections/Footer.css";

const Footer = () => (
  <footer className="footer with-bg" role="contentinfo">
    <p>
      &copy; {new Date().getFullYear()} Laura Eppler. Alle Rechte vorbehalten.
    </p>
  </footer>
);

export default Footer;
