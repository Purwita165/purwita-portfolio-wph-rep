import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SkillSection from "@/components/sections/SkillSection";
import FaqSection from "@/components/sections/FaqSection";
import PortfolioSection from "@/components/sections/PortfolioSection"
export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <SkillSection />
      <FaqSection />
      <PortfolioSection />
    </main>
  );
}