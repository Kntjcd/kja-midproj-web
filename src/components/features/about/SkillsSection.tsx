import { SKILLS } from "@/constants";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">My Skills</h2>
      <div className="section-divider" />
      <div className={styles.grid}>
        
        {/* Left: Professional Background Description */}
        <div className={styles.descCol}>
          <p className={styles.description}>
            With over <strong>three years of dedicated experience</strong> at 
            Libetario Digital Marketing Solutions, I have developed a comprehensive 
            toolkit for business growth. My journey has focused on building 
            high-converting websites through <strong>CMS platforms</strong>, 
            crafting modern visual identities in <strong>Figma</strong>, and 
            implementing <strong>SEO strategies</strong> that drive organic visibility. 
            Beyond design, I specialize in <strong>Facebook Advertising</strong>, 
            managing campaigns that help clients connect with their audience and 
            scale their online presence.
          </p>
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