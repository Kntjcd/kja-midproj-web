import Link from "next/link";
import { SERVICES } from "@/constants";
import styles from "./ServicesGrid.module.css";

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      {SERVICES.map((service) => (
        <div key={service.id} className={styles.card}>
          <div className={`${styles.cardImg} img-placeholder`} />
          <div className={styles.cardLines}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={styles.cardLine} />
            ))}
          </div>
          <div className={styles.cardBtns}>
            <Link href="/services" className={styles.btnPrimary}>Read More</Link>
            <Link href="/contact"  className={styles.btnOutline}>Avail Service</Link>
          </div>
        </div>
      ))}
    </section>
  );
}