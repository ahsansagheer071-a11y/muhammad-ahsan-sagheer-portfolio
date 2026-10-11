import { Navbar } from "@/components/layout/Navbar";
import { FloatingSidebar } from "@/components/layout/FloatingSidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Credibility } from "@/components/sections/Credibility";
import { ExpertiseTicker } from "@/components/sections/ExpertiseTicker";
import { Stats } from "@/components/sections/Stats";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CreativityZone } from "@/components/sections/CreativityZone";
import { QuoteSection } from "@/components/sections/QuoteSection";
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
      {/* 1. Top Navigation */}
      <Navbar />

      {/* Floating Side Rails (Desktop) */}
      <FloatingSidebar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Me */}
      <About />

      {/* 4. Professional Credibility / Background */}
      <Credibility />

      {/* 5. Disciplines Ticker */}
      <ExpertiseTicker />

      {/* 6. Three-Column Key Metrics */}
      <Stats />

      {/* 7. Featured Portfolio Carousel (Elevated above Behind the Build) */}
      <FeaturedProjects />

      {/* 8. Behind the Build (Systems & Architectures) */}
      <CreativityZone />

      {/* 9. Editorial Quote Section */}
      <QuoteSection />

      {/* 10. Core Services */}
      <WhatIDo />

      {/* 11. Restored Capabilities Section */}
      <Capabilities />

      {/* 12. Restored Tools & Platforms Ecosystem */}
      <ToolsAndPlatforms />

      {/* 13. How I Work (4-Step Methodology) */}
      <HowIWork />

      {/* 14. Lead Generation Scoping */}
      <LeadGeneration />

      {/* 15. Free Workflow Consultation & Audit */}
      <FreeAuditCTA />

      {/* 16. What Clients Can Expect */}
      <Testimonials />

      {/* 17. Final Personal Introduction CTA */}
      <FinalCTA />

      {/* 18. Project Inquiry Form & Contact */}
      <ProjectInquiryForm />

      {/* 19. Footer */}
      <Footer />
    </main>
  );
}
