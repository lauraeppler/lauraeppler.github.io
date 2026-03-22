import "@/styles/sections/Contact.css";

const Contact = () => (
  <section className="contact wrapper section-container with-bg" id="contact">
    <h2 className="heading-2">Kontakt</h2>
    <p className="body">
      Du möchtest mehr über meine Arbeit erfahren, hast Fragen zu meinen
      Projekten oder möchtest dich einfach austauschen? Dann freue ich mich auf
      deine Nachricht.
    </p>

    <div className="contact-link-list">
      <a
        href="mailto:lauraeppler@web.de"
        id="contact-mail"
        className="contact-link"
      >
        <img src="/icons/mail.svg" alt="E-Mail" className="contact-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/laura-eppler-6b89561b1"
        target="_blank"
        rel="noopener noreferrer"
        id="contact-linkedin"
        className="contact-link"
        title="Icons made by Smashicons from www.flaticon.com"
      >
        <img
          src="/icons/linkedin.png"
          alt="LinkedIn"
          className="contact-icon"
        />
      </a>
    </div>

    <p className="body disclaimer">
      <strong>Hinweis:</strong> Dieses Portfolio befindet sich aktuell im
      Entwicklungsstand und ist noch nicht vollständig barrierefrei.
    </p>

  </section>
);

export default Contact;
