import React from "react";
import "../App.css";

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Kontakt</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">E-Mail:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Nachricht:</label>
      <textarea id="message" name="message" required />
      <button type="submit">Absenden</button>
    </form>
  </section>
);

export default Contact;
