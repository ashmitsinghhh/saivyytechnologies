import HeroSection from "@/components/sections/HeroSection";
import AICapabilitiesSection from "@/components/sections/AICapabilitiesSection";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import ClientResultsSection from "@/components/sections/ClientResultsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TechnologyStackSection from "@/components/sections/TechnologyStackSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AICapabilitiesSection />
      <GlobalReachSection />
      <ClientResultsSection />
      <TestimonialsSection />
      <TechnologyStackSection />
      <ContactSection />
    </div>
  );
}
