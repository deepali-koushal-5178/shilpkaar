"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../../Styles/Products.module.css";
import { items } from "@/data/products";
import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || "All";

  const categories = [
    "All",
    "Kitchens",
    "Sliding-Wardrobes",
    "Single-Bed",
    "Double-Bed",
    "Dressing-units",
    "Shoe-rack",
    "Working-tables",
    "Accent-chairs",
    "Tall-unit",
    "Study-Unit",
    "Hinged-Wardrobe",
    "Executive-Table",
    "Console",
    "Crockery-unit",
    "Below-stairs",
  ];

  const [category, setCategory] = useState(initialCategory);
  const [filtered, setFiltered] = useState(items);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (category === "All") {
      setFiltered(items);
    } else {
      setFiltered(items.filter((i) => i.category === category));
    }
  }, [category]);

  return (
    <section className={styles.products}>
      <h2>{category === "All" ? "All Designs" : `${category} Designs`}</h2>
      <p className={styles.sub}>
        {category === "All"
          ? "Explore our complete furniture collection."
          : `Explore our full range of ${category.toLowerCase()} designs.`}
      </p>

      <div className={styles.filters}>
        {categories.map((c) => (
          <button
            key={c}
            className={`${styles.pill} ${category === c ? styles.active : ""}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imgBox}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={styles.productImage}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className={styles.overlay}>
                <button
                  className={styles.viewBtn}
                  onClick={() => setSelected(item)}
                >
                  View Image
                </button>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.catalogBtn}
        onClick={() => router.back()}
        style={{ marginTop: "40px" }}
      >
        ← Back to Products
      </button>

      {selected && (
        <div
          className={styles.modalBackdropLite}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.modalBoxLite}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtnLite}
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <div className={styles.modalImageWrapperLite}>
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                wheel={{ step: 0.2 }}
                panning={{ velocityDisabled: true }}
              >
                <TransformComponent>
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    width={900}
                    height={600}
                    className={styles.modalImgLite}
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>

            <p className={styles.modalCaption}>{selected.name}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div>Loading catalog...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
