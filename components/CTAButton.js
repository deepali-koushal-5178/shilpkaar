"use client";

import { useState } from "react";
import styles from "../Styles/CTAButton.module.css";
import QuoteModal from "./QuoteModal";

export default function CTAButton({ mode = "desktop" }) {
  const [open, setOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      {mode === "desktop" && (
        <a onClick={openModal} className={styles.desktopCTA}>
          Get Free Quote
        </a>
      )}

      {mode === "floating" && (
        <a onClick={openModal} className={styles.floatingCTA}>
          Get Free Quote
        </a>
      )}

      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
