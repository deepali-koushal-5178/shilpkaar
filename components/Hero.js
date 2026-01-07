'use client';
import { useEffect, useState } from "react";
import styles from "../Styles/Hero.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero}>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Custom Furniture. Factory Precision. Crafted in Indore.</h1>
          <p>
            We design and manufacture modular furniture for homes, offices, and commercial spaces — built with precision, durability, and elegant finish.
          </p>
          <a
            href="https://wa.me/918319266986?text=Hi%20Team%20Shilpkaar!%20I%20would%20like%20to%20discuss%20a%20custom%20furniture%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <FaWhatsapp className={styles.whatsappIcon} /> Get a Free Design Consultation
          </a>
        </div>

        <div className={styles.scrollDown}>↓ Scroll to Explore</div>
      </div>
    </section>
  );
}
