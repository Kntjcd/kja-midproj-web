import BioSection    from "@/components/features/about/BioSection";
import SkillsSection from "@/components/features/about/SkillsSection";
import CTASection    from "@/components/common/CTASection";

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">About</h1>
        <div className="page-divider" />
      </div>
      <BioSection />
      <SkillsSection />
      <CTASection />
    </>
  );
}