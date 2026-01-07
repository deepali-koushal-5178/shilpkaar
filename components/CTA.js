"use client";
import styles from "../Styles/CTA.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className={styles.cta} id="consultation">
      <div className={styles.container}>
        <h2>Transform Your Space with Precision-Built Modular Furniture</h2>
        <p>
          Book your free design consultation today and discover how factory-made quality makes all the difference.
        </p>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.primaryBtn}>
            Book a Consultation
          </a>

          <a
            href="https://wa.me/918319266986?text=Hi!%20I%20want%20to%20discuss%20a%20furniture%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
