import Link from "next/link";
import { SERVICES } from "@/constants";
import styles from "./ServicesPreview.module.css";

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">My Services</h2>
      <div className="section-divider" />
      <div className={styles.grid}>
        {SERVICES.slice(0, 3).map((service) => (
          <div key={service.id} className={styles.card}>
            <div className={`${styles.cardImg} img-placeholder`} />
            <div className={styles.cardLines}>
              {Array.from({ length: 3 }).map((_, i) => <div key={i} className={styles.cardLine} />)}
            </div>
            <div className={styles.cardBtns}>
              <Link href="/services" className={styles.btnPrimary}>Read More</Link>
              <Link href="/contact"  className={styles.btnOutline}>Avail Service</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}