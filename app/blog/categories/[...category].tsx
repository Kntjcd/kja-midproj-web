import BlogCategoryView from "@/components/features/blog/BlogCategoryView";

interface Props {
  params: Promise<{ category: string[] }>;
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Blog</h1>
        <div className="page-divider" />
      </div>
      <BlogCategoryView categorySegments={category} />
    </>
  );
}