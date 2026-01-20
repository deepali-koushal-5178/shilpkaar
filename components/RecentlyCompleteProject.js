"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../Styles/Projects.module.css";

export default function RecentlyCompletedProjects() {
  const videos = [
    { src: "/videos/video1.mp4", title: "Modular Kitchen – Indore" },
    { src: "/videos/video2.mp4", title: "Wardrobe Installation – Bhopal" },
    { src: "/videos/video3.mp4", title: "TV Unit Setup – Pune" },
    { src: "/videos/video4.mp4", title: "Bedroom Makeover – Ujjain" },
    { src: "/videos/video5.mp4", title: "Bedroom Makeover – Ujjain" },
    { src: "/videos/video6.mp4", title: "Bedroom Makeover – Ujjain" },
    { src: "/videos/video7.mp4", title: "Bedroom Makeover – Ujjain" },
    { src: "/videos/video8.mp4", title: "Bedroom Makeover – Ujjain" },
    { src: "/videos/video9.mp4", title: "Bedroom Makeover – Ujjain" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.projects}>
      <h2>Recently Completed Projects</h2>
      <p className={styles.subtext}>
        A quick look at some of our latest on-site modular furniture installations.
      </p>

      <div className={styles.grid}>
        {videos.map((v, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageBox}>
              <video
                src={v.src}
                muted
                className={`${styles.projectImage} ${styles.videoPreview}`}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />

              <div className={styles.overlay}>
                <button
                  className={styles.viewBtn}
                  onClick={() => setSelectedIndex(i)}
                >
                  Watch Video
                </button>
              </div>
            </div>
            <h3>{v.title}</h3>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className={`${styles.modalBox} ${styles.videoModalBox}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className={`${styles.closeBtn} ${styles.videoCloseBtn}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              ✕
            </button>

            {/* NAV BUTTONS */}
            <button
              className={`${styles.navBtn} ${styles.left}`}
              onClick={(e) => {
                e.stopPropagation();
                handlePrev(e);
              }}
            >
              <FaChevronLeft />
            </button>

            <button
              className={`${styles.navBtn} ${styles.right}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNext(e);
              }}
            >
              <FaChevronRight />
            </button>

            <video
              src={videos[selectedIndex].src}
              controls
              autoPlay
              className={`${styles.modalImg} ${styles.videoModal}`}
            />

            <p className={styles.modalTitle}>
              {videos[selectedIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
