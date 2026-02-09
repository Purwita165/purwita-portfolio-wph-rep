import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SkillSection from "@/components/sections/SkillSection";
import FaqSection from "@/components/sections/FaqSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PortfolioSection from "@/components/sections/PortfolioSection"
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <SkillSection />
      <FaqSection />
      <ComparisonSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}