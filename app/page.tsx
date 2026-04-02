import HeroSection         from "@/components/features/home/HeroSection";
import ServicesPreview     from "@/components/features/home/ServicesPreview";
import ProjectsPreview     from "@/components/features/home/ProjectsPreview";
import TestimonialsSection from "@/components/features/home/TestimonialsSection";
import CTASection          from "@/components/common/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProjectsPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}