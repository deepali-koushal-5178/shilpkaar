"use client";

import { FaRegHandshake } from "react-icons/fa";
import styles from "../Styles/FeatureSection.module.css";
import { FiPenTool, FiAward, FiTag, FiTool } from "react-icons/fi";

export default function FeaturesSection() {
  const features = [
    { icon: <FiPenTool />, title: "Custom Designs" },
    { icon: <FiAward />, title: "Written Warranty" },
    { icon:  <FaRegHandshake />, title: "Fair Pricing" },
    { icon: <FiTool />, title: "Factory Finish" },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((f, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.icon}>{f.icon}</div>
            <p className={styles.title}>{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
