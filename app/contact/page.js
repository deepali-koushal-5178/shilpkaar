"use client";

import React, { useState } from "react";
import styles from "@/Styles/Contactpage.module.css";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        setTimeout(() => {
            setStatus({ ok: true, msg: "Message sent successfully!" });
            setForm({ name: "", email: "", message: "" });
            setSending(false);
        }, 1000);
    };

    const mapSrc = `https://www.google.com/maps?q=Shop%202,%20Gayathri%20Paradise,%20Opp.%20Gayathri%20Mandir,%20Kanadia,%20Indore%20-%20452016&z=16&output=embed`;

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.subheading}>
                Have a question or need a custom furniture quote? We’d love to hear from you.
            </p>

            <div className={styles.grid}>
                <div className={styles.formCard}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label>
                            <span>Name</span>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </label>

                        <label>
                            <span>Email</span>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                            />
                        </label>

                        <label>
                            <span>Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Tell us about your project"
                            />
                        </label>

                        <div className={styles.actions}>
                            <button type="submit" disabled={sending}>
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                            {status && (
                                <p className={status.ok ? styles.success : styles.error}>
                                    {status.msg}
                                </p>
                            )}
                        </div>
                    </form>

                    <div className={styles.contactInfo}>
                        <p><strong>Phone:</strong> +91 8446004545</p>
                        <p><strong>Email:</strong> shilpkaarfurnitures@gmail.com</p>
                        <p><strong>Address:</strong> Shop 2, Gayathri Paradise, Opp. Gayathri Mandir, Kanadia, Indore – 452016</p>
                    </div>
                </div>

                <div className={styles.mapSection}>
                    <div className={styles.mapWrapper}>
                        <iframe
                            title="Office location"
                            src={mapSrc}
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>

                    <div className={styles.extraInfo}>
                        <h3>Opening Hours</h3>
                        <ul>
                            <li>Mon — Fri: 10:00am — 6:00pm</li>
                            <li>Sat: 10:00am — 2:00pm</li>
                            <li>Sun: Closed</li>
                        </ul>
                        {/* 
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
