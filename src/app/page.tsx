import HeroSection from "@/components/features/home/HeroSection"
import ServicesPreview from "@/components/features/home/ServicesPreview"
import ProjectsPreview from "@/components/features/home/ProjectsPreview"
import TestimonialsSection from "@/components/features/home/TestimonialsSection"
import CTASection from "@/components/common/CTASection"

export default function HomePage() {
  return (
    // The 'flex flex-col' ensures each section stays in its own row
    // 'overflow-x-hidden' prevents the image from causing horizontal scrolls
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      
      {/* Hero Section - The top part of your mockup */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* The rest of the sections follow naturally below */}
      <section className="relative z-20 bg-background">
        <ServicesPreview />
        <ProjectsPreview />
        <TestimonialsSection />
        <CTASection />
      </section>

    </main>
  );
}