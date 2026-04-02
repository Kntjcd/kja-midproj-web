import Link  from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/constants";
import styles from "./ProjectsPreview.module.css";

export default function ProjectsPreview() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">My Projects</h2>
      <div className="section-divider" />
      <div className={styles.grid}>
        {PROJECTS.slice(0, 3).map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.cardImgWrap}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.cardImg}
              />
            </div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDesc}>{project.description}</p>
            <Link href="/projects" className={styles.readMore}>Read More</Link>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {[1,2,3].map((n) => (
          <button key={n} className={n === 1 ? styles.pageActive : styles.pageBtn}>{n}</button>
        ))}
        <span className={styles.dots}>—</span>
        <button className={styles.pageBtn}>67</button>
        <button className={styles.pageBtn}>68</button>
      </div>
    </section>
  );
}