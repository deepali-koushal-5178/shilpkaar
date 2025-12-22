"use client";

import Image from "next/image";
import styles from "../../Styles/Machine.module.css";
import { machinesData } from "@/data/machines";

const machines = machinesData
export default function OurMachines() {
  return (
    <section className={styles.machines}>
      <h1 className={styles.heading}>Our Machines</h1>
      <p className={styles.subheading}>
        Explore the cutting-edge technology behind our precision-crafted modular furniture.
      </p>

      <div className={styles.container}>
        {machines.map((m, index) => (
          <div
            key={m.id}
            className={`${styles.machine} ${index % 2 === 1 ? styles.reverse : ""}`}
          >
            <div className={styles.imageBox}>
              <Image
                src={m.img}
                alt={m.name}
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            <div className={styles.textBox}>
              <h2>{m.name}</h2>
              <p>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
