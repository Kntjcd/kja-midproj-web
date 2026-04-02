import Link  from "next/link";
import Image from "next/image";
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
            <div className={styles.cardImgWrap}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.cardImg}
              />
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
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