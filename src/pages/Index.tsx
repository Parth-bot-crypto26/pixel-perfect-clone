import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import InsideScoop from "@/components/InsideScoop";
import WorkSection from "@/components/WorkSection";
import FeaturedProject from "@/components/FeaturedProject";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UsesCard from "@/components/UsesCard";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top Blur Overlay */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed left-0 z-40 w-full select-none from-transparent to-black/60"
        style={{ 
          top: 0, 
          height: '150px', 
          maskImage: 'linear-gradient(black 50%, transparent)',
          backdropFilter: 'blur(5px)',
        }}
      />
      
      <Navigation />
      <main>
        <HeroSection />
        <BentoGrid />
        <InsideScoop />
        <WorkSection />
        <FeaturedProject />
        <SkillsSection />
        <AboutSection />
        <TestimonialsSection />
        <UsesCard />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;