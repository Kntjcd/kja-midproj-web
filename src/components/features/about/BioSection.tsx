import Link  from "next/link";
import Image from "next/image";
import { ABOUT } from "@/constants";
import styles from "./BioSection.module.css";

export default function BioSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageCol}>
        <div className={styles.imageWrap}>
          <Image
            src={ABOUT.image}
            alt={ABOUT.name}
            fill
            className={styles.bioImage}
            priority
          />
          <div className={styles.badge}>{ABOUT.experience}</div>
        </div>
      </div>

      <div className={styles.contentCol}>
        <h2 className={styles.name}>Hi, I&apos;m Kent!</h2>
        <div className={styles.underline} />
        <p className={styles.role}>{ABOUT.role}</p>
        <p className={styles.bio}>{ABOUT.bio}</p>
        <div className={styles.tags}>
          {ABOUT.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <p className={styles.desc}>{ABOUT.description}</p>
        <div className={styles.buttons}>
          <Link href="/projects" className={styles.btnPrimary}>Read More</Link>
          <Link href="/contact"  className={styles.btnOutline}>Avail Service</Link>
        </div>
      </div>
    </section>
  );
}