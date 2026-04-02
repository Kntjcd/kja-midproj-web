import { SKILLS } from "@/constants";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">My Skills</h2>
      <div className="section-divider" />
      <div className={styles.grid}>
        {/* Left: placeholder text lines */}
        <div className={styles.descCol}>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={styles.descLine} />
          ))}
        </div>
        {/* Right: skill progress bars */}
        <div className={styles.barsCol}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPct}>{skill.level}%</span>
              </div>
              <div className={styles.track}>
                <div className={styles.fill} style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}