import styles from "../Styles/Features.module.css";
import { GiWoodPile } from "react-icons/gi";
import { FaTools, FaHardHat, FaClock, FaPalette } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function Features() {
  return (
    
    <section className={styles.features}>
      <h2>Why Traditional Carpentry Costs You More Than You Think</h2>
      <p className={styles.intro}>
        On-site furniture work may look affordable at first — but it often brings hidden problems that cost you time, money, and peace of mind.
      </p>

      <div className={styles.list}>
        <div>
          <GiWoodPile className={styles.icon} />
          <span>Dust, noise, and constant disruption at home</span>
        </div>

        <div>
          <FaTools className={styles.icon} />
          <span>Uneven finishing and lack of machine precision</span>
        </div>

        <div>
          <FaHardHat className={styles.icon} />
          <span>Dependence on unskilled or inconsistent labor</span>
        </div>

        <div>
          <FaClock className={styles.icon} />
          <span>Delays, poor coordination, and budget overruns</span>
        </div>

        <div>
          <MdCancel className={styles.icon} />
          <span>No warranty, no support once work is done</span>
        </div>

        <div>
          <FaPalette className={styles.icon} />
          <span>Limited design choices and poor material utilization</span>
        </div>
      </div>
    </section>
  );
}
