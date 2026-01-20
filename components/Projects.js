"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../Styles/Projects.module.css";

export default function Projects() {
  const projects = [
    { img: "/images/Kitchens/kitchen16.jpg", title: "Modular Kitchen – The Empress, Indore" },
    { img: "/images/Sliding-Wardrobe/wb22.jpg", title: "Wardrobe Design – Elite Apex, Indore" },
    { img: "/images/tv4.jpg", title: "Living room interior – Kanak Smart City, Indore" },
    { img: "/images/Double-Bed/db30.jpg", title: "Bedroom Set – Indore" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const startX = useRef(0);
  const endX = useRef(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // const handleTouchStart = (e) => {
  //   startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  // };

  // const handleTouchMove = (e) => {
  //   endX.current = e.touches ? e.touches[0].clientX : e.clientX;
  // };

  // const handleTouchEnd = (e) => {
  //   const diff = startX.current - endX.current;
  //   if (Math.abs(diff) > 50) {
  //     if (diff > 0) handleNext(e); // swipe left
  //     else handlePrev(e); // swipe right
  //   }
  // };

  return (
    <section className={styles.projects}>
      <h2>Our Latest Modular Furniture Projects</h2>
      <p className={styles.subtext}>
        Explore some of our recent factory-finished furniture installations across India.
      </p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageBox}>
              <Image
                src={p.img}
                alt={p.title}
                width={400}
                height={250}
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <button className={styles.viewBtn} onClick={() => setSelectedIndex(i)}>
                  View Project
                </button>
              </div>
            </div>
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedIndex(null)}>
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          
          >
            <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)}>
              ✕
            </button>

            <button className={`${styles.navBtn} ${styles.left}`} onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className={`${styles.navBtn} ${styles.right}`} onClick={handleNext}>
              <FaChevronRight />
            </button>

            <Image
              src={projects[selectedIndex].img}
              alt={projects[selectedIndex].title}
              width={800}
              height={500}
              className={styles.modalImg}
              priority
            />

            <p className={styles.modalTitle}>{projects[selectedIndex].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
