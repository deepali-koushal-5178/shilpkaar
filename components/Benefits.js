import styles from "../Styles/Benefits.module.css";
import {
  FaClock,
  FaBroom,
  FaPalette,
  FaGem,
  FaHammer,
  FaRupeeSign,
} from "react-icons/fa";

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <h2>Why Homeowners Choose Factory-Finished Furniture</h2>
      <p className={styles.intro}>
        Discover how our modern, precision-built furniture transforms homes —
        faster, cleaner, and built to last.
      </p>

      <div className={styles.grid}>
        <div>
          <FaClock className={styles.icon} />
          <strong>Time-Saving</strong>
          <p>No weeks of on-site carpentry work.</p>
        </div>

        <div>
          <FaBroom className={styles.icon} />
          <strong>Dust-Free</strong>
          <p>Everything is pre-built in our factory — no mess at home.</p>
        </div>

        <div>
          <FaPalette className={styles.icon} />
          <strong>Customizable</strong>
          <p>Tailored to your exact size, layout, color, and style preferences.</p>
        </div>

        <div>
          <FaGem className={styles.icon} />
          <strong>Premium Finish</strong>
          <p>Perfect edge finish, smooth panels, and seamless design aesthetics.</p>
        </div>

        <div>
          <FaHammer className={styles.icon} />
          <strong>Durable Build</strong>
          <p>Crafted from high-quality engineered materials for long-lasting use.</p>
        </div>

        <div>
          <FaRupeeSign className={styles.icon} />
          <strong>Value for Money</strong>
          <p>Affordable, relocatable, and designed for years of everyday use.</p>
        </div>
      </div>

      <p className={styles.testimonial}>
        “Our modular kitchen was delivered in just 3 days — absolutely no dust,
        no chaos. The finish was perfect!” <br />– <strong>Homeowner from Indore</strong>
      </p>
    </section>
  );
}
