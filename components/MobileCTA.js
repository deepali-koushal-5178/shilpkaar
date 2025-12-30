"use client";

import { useState, useEffect } from "react";
import styles from "../Styles/CTAButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) return null;

  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className={styles.mobileCTA}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
