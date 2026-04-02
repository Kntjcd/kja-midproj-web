import Link from "next/link";
import { BLOG_POSTS } from "@/constants";
import styles from "./BlogCategoryView.module.css";

interface Props { categorySegments: string[]; }

export default function BlogCategoryView({ categorySegments }: Props) {
  const categorySlug = categorySegments[0] ?? "all";
  const subCategory  = categorySegments[1] ?? null;

  const posts = BLOG_POSTS.filter((p) =>
    categorySlug === "all" ? true : p.category === categorySlug
  );

  return (
    <section className={styles.section}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/blog" className={styles.breadLink}>Blog</Link>
        <span> / </span>
        <span className={styles.breadCurrent}>{categorySlug}</span>
        {subCategory && <><span> / </span><span className={styles.breadCurrent}>{subCategory}</span></>}
      </div>

      <h2 className={styles.heading}>
        Category: <span className={styles.catName}>{categorySlug}</span>
      </h2>
      <p className={styles.routeNote}>
        Route segments: <code>{categorySegments.join(" / ")}</code> — uses <code>[...category]</code> catch-all
      </p>

      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={`${styles.cardImg} img-placeholder`} />
              <div className={styles.cardBody}>
                <span className={styles.tag}>{post.category}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDesc}>{post.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className={styles.empty}>No posts found in this category.</p>
        )}
      </div>
    </section>
  );
}