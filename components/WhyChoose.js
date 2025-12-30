"use client";

import styles from "../Styles/WhyChoose.module.css";
import {
  FaClock,
  FaBroom,
  FaPalette,
  FaGem,
  FaHammer,
  FaTrophy,
  FaCog,
  FaIndustry,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";

export default function WhyMerged() {
  const cards = [
    {
      icon: <FaClock />,
      title: "Time-Saving",
      text: "No weeks of on-site carpentry. Everything is pre-built in the factory.",
    },
    {
      icon: <FaBroom />,
      title: "Dust-Free Process",
      text: "Your home stays clean — no cutting, dust or disturbance.",
    },
    {
      icon: <FaPalette />,
      title: "Fully Customizable",
      text: "Designed to match your space, color palette and style.",
    },
    {
      icon: <FaGem />,
      title: "Premium Finish",
      text: "Perfect edges, smooth panels and flawless craftsmanship.",
    },
    {
      icon: <FaHammer />,
      title: "Durable Build Quality",
      text: "Made from high-grade engineered boards & branded hardware.",
    },

    // 5 from Why Choose Section
    {
      icon: <FaTrophy />,
      title: "10+ Years Experience",
      text: "Trusted by homeowners, architects and commercial clients.",
    },
    {
      icon: <FaCog />,
      title: "German–Italian Technology",
      text: "Precision cutting, edge banding & premium finishing.",
    },
    {
      icon: <FaIndustry />,
      title: "In-House Manufacturing",
      text: "Built entirely in our Indore factory — no outsourcing.",
    },
    {
      icon: <FaBoxOpen />,
      title: "End-to-End Service",
      text: "Design, manufacturing, installation & after-sales under one roof.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality-Assured Materials",
      text: "High-grade boards, laminates & fittings for long life.",
    },
  ];

  return (
    <section className={styles.section}>
      <h2>Why Homeowners & Professionals Trust Shilpkaar Furnitures</h2>

      <p className={styles.intro}>
        Combining the benefits of factory-finished modular furniture with
        the expertise of a 10+ year trusted manufacturing brand.
      </p>

      <div className={styles.grid}>
        {cards.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
