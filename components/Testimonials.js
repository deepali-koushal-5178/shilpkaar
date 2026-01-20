"use client";

import { testimonialsData } from "@/data/testimonial";
import styles from "../Styles/Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = testimonialsData;  

  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>

      {/* FEATURED LARGE CARD */}
      <article className={styles.featuredCard}>
        <blockquote>
          <p>“{featured.quote}”</p>
        </blockquote>
        <cite>— {featured.name}, {featured.location}</cite>
      </article>

      {/* SWIPER FOR SMALL CARDS */}
   <Swiper
  modules={[Pagination]}
  pagination={{ clickable: true }}
  slidesPerView={2}
  spaceBetween={20}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1100: { slidesPerView: 3 },
  }}
  className={styles.slider}
>
  {others.map((t, i) => (
    <SwiperSlide key={i}>
      <article className={styles.smallCard}>
        <blockquote>
          <p>“{t.quote}”</p>
        </blockquote>
        <cite>— {t.name}, {t.location}</cite>
      </article>
    </SwiperSlide>
  ))}
</Swiper>

<p className={styles.swipeHint}>Swipe to see more →</p>

    </section>
  );
}
