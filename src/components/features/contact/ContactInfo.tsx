import { SITE_EMAIL, SITE_LOCATION, SITE_PHONE } from "@/constants";
import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  // Use the same link from your iframe for the redirection
  const googleMapsAddress = "https://www.google.com/maps/search/?api=1&query=Cordova+Cebu+Philippines";

  return (
    <div className={styles.wrapper}>
      {/* Real Google Map Integration */}
      <div className={styles.mapCard}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.6598691998612!2d123.96070917734744!3d10.262604607758457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af5762be06f%3A0xd4bee3697d587b49!2sCordova%20Public%20College!5e0!3m2!1sen!2sph!4v1775195488831!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="KJA Digital Marketing Solutions Location"
        />
      </div>

      {/* Interactive Info cards */}
      <div className={styles.infoRow}>

        {/* EMAIL CARD */}
        <a href={`mailto:${SITE_EMAIL}`} className={styles.infoCard}>
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <p className={styles.infoLabel}>Email</p>
            <p className={styles.infoValue}>{SITE_EMAIL}</p>
          </div>
        </a>

        {/* LOCATION CARD */}
        <a
          href={googleMapsAddress}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.infoCard}
        >
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <p className={styles.infoLabel}>Location</p>
            <p className={styles.infoValue}>{SITE_LOCATION}</p>
          </div>
        </a>

        {/* PHONE CARD */}
        <a
          href="tel:09709670040"
          className={styles.infoCard}
          aria-label="Call KJA Digital Marketing"
        >
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
            </svg>
          </div>
          <div>
            <p className={styles.infoLabel}>Phone</p>
            {/* This displays the formatted version to the user */}
            <p className={styles.infoValue}>0970 967 0040</p>
          </div>
        </a>

      </div>
    </div>
  );
}