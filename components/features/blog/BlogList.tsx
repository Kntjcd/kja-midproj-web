import Link from "next/link";
import { BLOG_POSTS } from "@/constants";
import styles from "./BlogList.module.css";

export default function BlogList() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {BLOG_POSTS.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
            <div className={`${styles.cardImg} img-placeholder`} />
            <div className={styles.cardBody}>
              <div className={styles.meta}>
                <span className={styles.tag}>{post.category}</span>
                <span className={styles.date}>{post.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardDesc}>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}