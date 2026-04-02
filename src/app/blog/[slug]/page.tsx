import BlogPostDetail from "@/components/features/blog/BlogPostDetail";
import { BLOG_POSTS }  from "@/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-generate all known blog post pages at build time
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogPostDetail slug={slug} />;
}