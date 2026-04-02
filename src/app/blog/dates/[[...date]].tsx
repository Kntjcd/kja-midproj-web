import BlogDateFilter from "@/components/features/blog/BlogDateFilter";

interface Props {
  params: Promise<{ date?: string[] }>;
}

export default async function BlogDatePage({ params }: Props) {
  const { date } = await params;
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Blog by Date</h1>
        <div className="page-divider" />
      </div>
      <BlogDateFilter dateSegments={date} />
    </>
  );
}