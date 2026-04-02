import Link from "next/link";
import { BLOG_POSTS } from "@/constants";
import styles from "./BlogPostDetail.module.css";

interface Props { slug: string; }

export default function BlogPostDetail({ slug }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h2>Post not found</h2>
        <Link href="/blog" className={styles.back}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <Link href="/blog" className={styles.back}>← Back to Blog</Link>
      <div className={styles.meta}>
        <span className={styles.tag}>{post.category}</span>
        <span className={styles.date}>{post.date}</span>
      </div>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.divider} />
      <div className={`${styles.heroImg} img-placeholder`} />
      <div className={styles.body}>
        <p>{post.description}</p>
        <p>This is the full content of the blog post. In a real project this would come from a CMS or markdown files. This placeholder demonstrates the <strong>[slug]</strong> dynamic route pattern in Next.js App Router.</p>
        <p>Current slug: <code>{post.slug}</code> → route: <code>/blog/{post.slug}</code></p>
      </div>
    </article>
  );
}