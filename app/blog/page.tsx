import BlogList  from "@/components/features/blog/BlogList";
import CTASection from "@/components/common/CTASection";

export default function BlogPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Blog</h1>
        <div className="page-divider" />
      </div>
      <BlogList />
      <CTASection />
    </>
  );
}