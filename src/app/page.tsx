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

      {/* 10. Core Services & Consolidated Capabilities Ecosystem */}
      <WhatIDo />

      {/* 11. How I Work (4-Step Methodology) */}
      <HowIWork />

      {/* 12. Lead Generation Scoping */}
      <LeadGeneration />

      {/* 13. Free Workflow Consultation & Audit */}
      <FreeAuditCTA />

      {/* 14. What Clients Can Expect */}
      <Testimonials />

      {/* 15. Final Personal Introduction CTA */}
      <FinalCTA />

      {/* 16. Project Inquiry Form & Contact */}
      <ProjectInquiryForm />

      {/* 17. Footer */}
      <Footer />
    </main>
  );
}
