import Link from "next/link";
import { BLOG_POSTS } from "@/constants";
import styles from "./BlogDateFilter.module.css";

interface Props { dateSegments: string[] | undefined; }

export default function BlogDateFilter({ dateSegments }: Props) {
  const hasFilter = dateSegments && dateSegments.length > 0;
  const year  = dateSegments?.[0] ?? null;
  const month = dateSegments?.[1] ?? null;

  const posts = BLOG_POSTS.filter((p) => {
    if (!hasFilter) return true;
    if (year  && !p.date.startsWith(year))              return false;
    if (month && !p.date.startsWith(`${year}-${month}`)) return false;
    return true;
  });

  return (
    <section className={styles.section}>
      {/* Filter bar */}
      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>
          {hasFilter ? `Posts from: ${year}${month ? `/${month}` : ""}` : "All posts by date"}
        </span>
        <div className={styles.chips}>
          <Link href="/blog"              className={styles.chip}>All</Link>
          <Link href="/blog/date/2025"    className={styles.chip}>2025</Link>
          <Link href="/blog/date/2024"    className={styles.chip}>2024</Link>
          <Link href="/blog/date/2025/03" className={styles.chip}>Mar 2025</Link>
          <Link href="/blog/date/2025/02" className={styles.chip}>Feb 2025</Link>
        </div>
      </div>

      <p className={styles.routeNote}>
        Route: <code>/blog{hasFilter ? `/date/${dateSegments!.join("/")}` : ""}</code>
        &nbsp;— uses <code>{"[[...date]]"}</code> optional catch-all
      </p>

      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={`${styles.cardImg} img-placeholder`} />
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span className={styles.tag}>{post.category}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p className={styles.empty}>No posts found for this date range.</p>
        )}
      </div>
    </section>
  );
}