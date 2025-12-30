"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../Styles/QuoteModal.module.css";

export default function QuoteModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // -------------------------
  // HANDLE SUBMIT
  // -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      from_name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    try {
      // 1️⃣ Send Email to ADMIN
      await emailjs.send(
        "service_qkn3hlm",         // SERVICE ID (CHANGE THIS)
        "template_vqemefp",
 // ADMIN TEMPLATE ID (CHANGE THIS)
        formData,
        "_wg8ZL43UQswc603J"           // PUBLIC KEY (CHANGE THIS)
      );

      // 2️⃣ Send Confirmation Email to USER
      await emailjs.send(
        "service_qkn3hlm",         // SAME SERVICE ID
        "template_99k07ea",   // USER TEMPLATE (CHANGE)
        formData,
        "_wg8ZL43UQswc603J"
      );

      alert("Your request has been submitted successfully!");

    } catch (error) {
      console.log("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    }

    // Reset form
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    onClose(); // Close modal
  };

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <h2 className={styles.modalTitle}>Get Free Quote</h2>

        <form onSubmit={handleSubmit}>

          <input
            className={styles.inputField}
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className={styles.inputField}
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            className={styles.inputField}
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            className={styles.textArea}
            name="message"
            placeholder="Message (Optional)"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}
