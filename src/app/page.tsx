import HeroSection from "@/components/Hero";
import TestimonialsSection from "@/components/Testimonials";
import PainPointsSection from "@/components/PainPoints";
import WhatYouLearnSection from "@/components/WhatYouLearn";
import TeamSection from "@/components/Team";
import FAQSection from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <PainPointsSection />
      <WhatYouLearnSection />
      <TeamSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
