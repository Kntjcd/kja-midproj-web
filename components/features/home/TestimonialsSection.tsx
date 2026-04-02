import { TESTIMONIALS } from "@/constants";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">What My Clients Say</h2>
      <div className="section-divider" />
      <div className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className={styles.card}>
            <div className={styles.top}>
              <span className={styles.quote}>&apos;{t.quote.slice(0,22)}...&apos;</span>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24"
                    fill={i < t.rating ? "#f5c518" : "none"} stroke="#f5c518" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className={styles.author}>
              <div className={styles.avatar} />
              <div>
                <p className={styles.name}>{t.author}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.indicator}>—</p>
    </section>
  );
}