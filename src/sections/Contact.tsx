import "@/styles/sections/Contact.css";

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Kontakt</h2>
    <p>
      Du möchtest mehr über meine Arbeit erfahren, hast Fragen zu meinen
      Projekten oder möchtest dich einfach austauschen?
      Dann freue ich mich auf deine Nachricht.
    </p>

    <a
      href="mailto:lauraeppler@web.de"
      id="contact-mail"
      className="contact-link"
    >
      Mail
    </a>
    <a
      href="https://www.linkedin.com/in/laura-eppler-6b89561b1"
      target="_blank"
      rel="noopener noreferrer"
      id="contact-linkedin"
      className="contact-link"
    >
      LinkedIn
    </a>

    <div>
      <p>
        <strong>Hinweis:</strong> Dieses Portfolio befindet sich aktuell im Entwicklungsstand und ist noch nicht vollständig barrierefrei.
      </p>
    </div>
  </section>
);

export default Contact;
