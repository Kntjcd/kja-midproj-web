import Link  from "next/link";
import Image from "next/image";
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
      <div className={styles.heroImgWrap}>
        <Image src={post.image} alt={post.title} fill className={styles.heroImg} priority />
      </div>
      <div className={styles.body}>
        <p>{post.description}</p>
        <p>{post.content}</p>
      </div>
    </article>
  );
}