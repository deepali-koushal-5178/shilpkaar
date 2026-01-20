"use client";
import { useState } from "react";
import styles from "../Styles/FAQ.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { faqdata } from "@/data/faq";
import { useRouter, usePathname } from "next/navigation";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const faqs = faqdata;
  const maxToShow = 5;

  const isFaqPage = pathname === "/faq";

  const visibleFaqs = isFaqPage ? faqs : faqs.slice(0, maxToShow);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>

      <div className={styles.list}>
        {visibleFaqs.map((f, i) => (
          <div
            key={i}
            className={`${styles.item} ${openIndex === i ? styles.active : ""}`}
          >
            <button
              className={styles.question}
              onClick={() => handleToggle(i)}
              aria-expanded={openIndex === i}
            >
              {f.q}
              <IoIosArrowDown
                className={`${styles.icon} ${
                  openIndex === i ? styles.rotate : ""
                }`}
              />
            </button>

            <div
              className={`${styles.answerWrapper} ${
                openIndex === i ? styles.show : ""
              }`}
            >
              <p className={styles.answer}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 👉 Only show button when NOT on full FAQ page */}
      {!isFaqPage && faqs.length > maxToShow && (
        <button
          className={styles.seeMoreBtn}
          onClick={() => router.push("/faq")}
        >
          See More FAQs →
        </button>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
