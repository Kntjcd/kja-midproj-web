import { SITE_EMAIL, SITE_LOCATION, SITE_PHONE } from "@/constants";
import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <div className={styles.wrapper}>
      {/* Google Map placeholder */}
      <div className={styles.mapCard}>
        <div className={styles.mapPlaceholder}>
          <span className={styles.mapLabel}>GOOGLE MAP</span>
          <div className={styles.mapControls}>
            <div className={styles.mapBtn}>+</div>
            <div className={styles.mapBtn}>−</div>
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className={styles.infoRow}>
        <div className={styles.infoCard}>
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div>
            <p className={styles.infoLabel}>Email</p>
            <p className={styles.infoValue}>{SITE_EMAIL}</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <p className={styles.infoLabel}>Location</p>
            <p className={styles.infoValue}>{SITE_LOCATION}</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/>
            </svg>
          </div>
          <div>
            <p className={styles.infoLabel}>Phone</p>
            <p className={styles.infoValue}>{SITE_PHONE}</p>
          </div>
        </div>
      </div>
    </div>
  );
}