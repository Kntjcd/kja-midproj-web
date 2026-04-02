import Link from "next/link";
import styles from "./BioSection.module.css";

export default function BioSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageCol}>
        <div className={styles.imageWrap}>
          <div className={`${styles.bioImage} img-placeholder`} />
          <div className={styles.badge}>3 + Years  Experience</div>
        </div>
      </div>

      <div className={styles.contentCol}>
        <h2 className={styles.name}>Hi, I&apos;m Kent!</h2>
        <div className={styles.underline} />
        <div className={styles.lines}>
          {Array.from({ length: 2 }).map((_, i) => <div key={i} className={styles.line} />)}
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>FRONT END</span>
          <span className={styles.tag}>BACK END</span>
        </div>
        <div className={styles.lines}>
          {Array.from({ length: 4 }).map((_, i) => <div key={i} className={styles.line} />)}
        </div>
        <div className={styles.buttons}>
          <Link href="/projects" className={styles.btnPrimary}>Read More</Link>
          <Link href="/contact"  className={styles.btnOutline}>Avail Service</Link>
        </div>
      </div>
    </section>
  );
}