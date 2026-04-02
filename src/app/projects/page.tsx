import ProjectsGrid from "@/components/features/projects/ProjectsGrid";
import CTASection   from "@/components/common/CTASection";

export default function ProjectsPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <div className="page-divider" />
      </div>
      <ProjectsGrid />
      <CTASection />
    </>
  );
}