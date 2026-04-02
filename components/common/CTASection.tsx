import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <h2 className={styles.title}>Get In Touch With Us</h2>
        <div className={styles.divider} />
        <p className={styles.line}>Ready to grow your digital presence? Let&apos;s build something remarkable.</p>
        <p className={styles.line}>We specialize in impactful digital marketing strategies.</p>
        <p className={styles.line}>From design to execution — we handle it all.</p>
        <p className={styles.line}>Your success is our mission.</p>
        <Link href="/contact" className={styles.btn}>Get In Touch</Link>
      </div>
    </section>
  );
}