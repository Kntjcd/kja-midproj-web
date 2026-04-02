import ServicesGrid from "@/components/features/services/ServicesGrid";
import CTASection   from "@/components/common/CTASection";

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Services</h1>
        <div className="page-divider" />
      </div>
      <ServicesGrid />
      <CTASection />
    </>
  );
}