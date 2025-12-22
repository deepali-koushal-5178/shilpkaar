"use client";
import styles from "../Styles/WhyChoose.module.css";
import { FaTrophy, FaCog, FaBoxOpen, FaIndustry, FaCheckCircle } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className={styles.whychoose} id="whychoose">
      <h2>Why Choose Shilpkaar Furnitures – Modular Furniture Manufacturer in Indore</h2>
      <span className={styles.subtitle}>
        Trusted manufacturing partner for homes, offices, and commercial spaces.
      </span>

      <p className={styles.intro}>
        We are not just furniture makers — we are manufacturers with a mission to bring
        precision, durability, and design harmony to every home, office, and commercial project.
      </p>

      <div className={styles.features}>
        <div>
          <FaTrophy />
          <strong>10+ Years of Expertise</strong>
          <br />
          Serving homeowners, architects, and businesses across India with custom-built solutions.
        </div>

        <div>
          <FaCog />
          <strong>German & Italian Technology</strong>
          <br />
          World-class edge banding, cutting, and finishing for flawless modular precision.
        </div>

        <div>
          <FaIndustry />
          <strong>In-House Manufacturing</strong>
          <br />
          Built from design to finish in our Indore facility — ensuring quality control at every stage.
        </div>

        <div>
          <FaBoxOpen />
          <strong>End-to-End Delivery</strong>
          <br />
          From design consultation to installation and after-sales support — handled entirely by our team.
        </div>

        <div>
          <FaCheckCircle />
          <strong>Quality Assured Materials</strong>
          <br />
          We use industry-grade boards, laminates, and fittings for strength and long life.
        </div>
      </div>

      <div className={styles.quality}>
        <p>
          <strong>Our Promise:</strong> Every Shilpkaar product goes through strict quality checks,
          ensuring precision manufacturing, long life, and a finish that defines craftsmanship.
        </p>
      </div>
    </section>
  );
}
