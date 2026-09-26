import { Navbar } from "@/components/layout/Navbar";
import { FloatingSidebar } from "@/components/layout/FloatingSidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Credibility } from "@/components/sections/Credibility";
import { ExpertiseTicker } from "@/components/sections/ExpertiseTicker";
import { Stats } from "@/components/sections/Stats";
import { CreativityZone } from "@/components/sections/CreativityZone";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Capabilities } from "@/components/sections/Capabilities";
import { ToolsAndPlatforms } from "@/components/sections/ToolsAndPlatforms";
import { HowIWork } from "@/components/sections/HowIWork";
import { LeadGeneration } from "@/components/sections/LeadGeneration";
import { FreeAuditCTA } from "@/components/sections/FreeAuditCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProjectInquiryForm } from "@/components/sections/ProjectInquiryForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111113] text-[#F8FAFC] relative selection:bg-[#38BDF8] selection:text-[#111113]">
      {/* 1. Navigation */}
      <Navbar />

      {/* Floating Side Rails (Desktop) */}
      <FloatingSidebar />

      {/* 2. Hero */}
      <Hero />

      {/* 3. About Me */}
      <About />

      {/* 4. Credibility / Background */}
      <Credibility />

      {/* 5. Expertise Statement & Ticker */}
      <ExpertiseTicker />

      {/* 6. Three-Column Statistics Section */}
      <Stats />

      {/* 7. Behind the Build (Visuals & Architectures) */}
      <CreativityZone />

      {/* 8. Editorial Quote Section */}
      <QuoteSection />

      {/* 9. Featured Projects Masonry / Slider */}
      <FeaturedProjects />

      {/* 10. Services / What I Do */}
      <WhatIDo />

      {/* 11. Capabilities */}
      <Capabilities />

      {/* 12. Tools & Platforms Ecosystem Strip */}
      <ToolsAndPlatforms />

      {/* 13. How I Work (4-Step Methodology) */}
      <HowIWork />

      {/* 14. What Can I Automate For You (Lead Generation) */}
      <LeadGeneration />

      {/* 15. Free Workflow Audit Banner */}
      <FreeAuditCTA />

      {/* 16. What Clients Can Expect */}
      <Testimonials />

      {/* 17. Final Personal Introduction CTA */}
      <FinalCTA />

      {/* 18. Project Inquiry Form */}
      <ProjectInquiryForm />

      {/* 19. Footer / Contact */}
      <Footer />
    </main>
  );
}
