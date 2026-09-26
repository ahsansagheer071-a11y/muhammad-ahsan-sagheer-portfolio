import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projectsData";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Sparkles,
  Workflow,
  Zap,
  Layers,
  Code2,
  Mail,
  ChevronRight,
  Database
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Muhammad Ahsan Sagheer`,
    description: project.tagline,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  // Get next and previous projects for quick navigation
  const slugs = Object.keys(PROJECTS_DATA);
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : slugs[0];
  const nextProject = PROJECTS_DATA[nextSlug];

  return (
    <div className="min-h-screen bg-[#111113] text-[#F8FAFC] selection:bg-[#38BDF8] selection:text-[#111113] font-sans">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111113]/85 border-b border-[#27272A]/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Muhammad Ahsan Sagheer — Home"
          >
            {/* MAS Monogram mark */}
            <div className="group-hover:[&_rect:first-child]:fill-[#1a1a1d] group-hover:[&_rect:nth-child(2)]:fill-[#7DD3FC] group-hover:[&_circle]:fill-[#7DD3FC] transition-all duration-200">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="MAS monogram"
                className="flex-shrink-0"
              >
                <rect width="36" height="36" rx="6" fill="#18181B" />
                <rect x="6" y="5" width="24" height="2" rx="1" fill="#38BDF8" />
                <path
                  d="M7 28V12L12.5 21L18 12L18 28"
                  stroke="#F8FAFC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M18 28L22 12L26 28M19.8 22H24.2"
                  stroke="#F8FAFC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="30" cy="30" r="2" fill="#38BDF8" />
              </svg>
            </div>

            <div className="hidden sm:flex flex-col leading-tight select-none">
              <span className="font-heading font-extrabold text-[11px] text-[#F8FAFC] tracking-[0.14em] uppercase group-hover:text-[#F8FAFC] transition-colors">
                MUHAMMAD
              </span>
              <span className="font-heading font-semibold text-[9px] text-[#A1A1AA] tracking-[0.18em] uppercase group-hover:text-[#7DD3FC] transition-colors">
                AHSAN SAGHEER
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A1A1AA] hover:text-[#38BDF8] transition-colors px-3 py-2 rounded-lg hover:bg-[#18181B]"
            >
              <ArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>

            <Link
              href="/#inquiry"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8] text-[#111113] font-semibold text-xs sm:text-sm hover:bg-[#0ea5e9] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20"
            >
              <Mail size={15} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16 space-y-20">
        
        {/* Project Hero */}
        <section className="space-y-8">
          
          {/* Breadcrumb & Project Type Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/" className="text-xs text-[#71717A] hover:text-[#A1A1AA] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-[#71717A]" />
            <Link href="/#portfolio" className="text-xs text-[#71717A] hover:text-[#A1A1AA] transition-colors">Projects</Link>
            <ChevronRight size={13} className="text-[#71717A]" />
            <span className="text-xs text-[#38BDF8] font-medium">{project.slug}</span>

            <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
              <Sparkles size={12} />
              {project.projectType}
            </span>
          </div>

          {/* Heading and Tagline */}
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#38BDF8]">
              {project.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-md bg-[#18181B] border border-[#27272A] text-[#F8FAFC]/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hero Visual Display */}
          <div className="relative w-full rounded-2xl border border-[#27272A] bg-[#18181B] overflow-hidden shadow-2xl shadow-black/60 group">
            {/* Window title bar mockup header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#141416] border-b border-[#27272A]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/60"></span>
                <span className="w-3 h-3 rounded-full bg-[#eab308]/60"></span>
                <span className="w-3 h-3 rounded-full bg-[#22c55e]/60"></span>
              </div>
              <span className="text-xs font-mono text-[#71717A]">
                {project.slug}.case-study
              </span>
              <div className="w-12"></div>
            </div>

            {/* Hero Image / Mockup Preview */}
            <div className="relative w-full aspect-[16/9] max-h-[540px] bg-[#18181B]">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Executive Summary Grid (Overview, Challenge, Solution) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-mono uppercase tracking-wider">
            <Layers size={15} />
            <span>Architecture & Execution</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Overview Card */}
            <div className="p-7 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#111113] border border-[#27272A] flex items-center justify-center text-[#38BDF8]">
                <Cpu size={20} />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">Project Overview</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{project.overview}</p>
            </div>

            {/* The Challenge Card */}
            <div className="p-7 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#111113] border border-[#27272A] flex items-center justify-center text-amber-400">
                <Zap size={20} />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">The Challenge</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{project.challenge}</p>
            </div>

            {/* The Solution Card */}
            <div className="p-7 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#111113] border border-[#27272A] flex items-center justify-center text-emerald-400">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">The Solution</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{project.solution}</p>
            </div>

          </div>
        </section>

        {/* Workflow / Process Node Diagram */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-mono uppercase tracking-wider">
            <Workflow size={15} />
            <span>Workflow & Pipeline Architecture</span>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#18181B] border border-[#27272A] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-2">
              How the System Operates
            </h2>
            <p className="text-sm text-[#A1A1AA] max-w-2xl mb-8">
              End-to-end multi-stage pipeline designed for modularity, low maintenance, and high reliability.
            </p>

            {/* Horizontal / Grid Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
              {project.workflow.map((item, idx) => (
                <div
                  key={item.step}
                  className="relative p-5 rounded-xl bg-[#111113] border border-[#27272A] flex flex-col justify-between space-y-3 hover:border-[#38BDF8]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-[#18181B] border border-[#27272A] flex items-center justify-center font-mono font-bold text-xs text-[#38BDF8]">
                      0{item.step}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-heading text-base font-bold text-[#F8FAFC] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Indicator Arrow for all but last item on desktop */}
                  {idx < project.workflow.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#38BDF8]">
                      <div className="w-6 h-6 rounded-full bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[10px]">
                        →
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features & Business Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Key Features */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-mono uppercase tracking-wider">
              <Sparkles size={15} />
              <span>Core Capabilities</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
              Key Functional Features
            </h2>

            <div className="space-y-4">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#38BDF8]/40 transition-colors"
                >
                  <h4 className="font-heading text-base font-bold text-[#F8FAFC] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pl-3.5">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Business Benefits */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 size={15} />
              <span>Business Value</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
              Practical Advantages
            </h2>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-4">
              {project.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5 border border-[#38BDF8]/20">
                    <CheckCircle2 size={13} />
                  </div>
                  <p className="text-xs sm:text-sm text-[#F8FAFC]/90 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies Stack */}
            <div className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-3">
              <div className="flex items-center gap-2 text-[#A1A1AA] text-xs font-mono uppercase tracking-wider">
                <Database size={14} />
                <span>Technologies & Tools</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-[#111113] border border-[#27272A] text-[#38BDF8] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* Visual Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-mono uppercase tracking-wider">
              <Layers size={15} />
              <span>Visual Gallery & Deliverables</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
              Project Interface & Deliverables
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#18181B] border border-[#27272A] overflow-hidden group hover:border-[#38BDF8]/50 transition-colors"
                >
                  <div className="relative w-full aspect-video bg-[#111113]">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-1">
                    <h4 className="font-heading text-sm font-bold text-[#F8FAFC]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Pagination (Next Project Banner) */}
        {nextProject && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#18181B] border border-[#27272A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#38BDF8]/40 transition-colors">
            <div>
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">Next Project</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F8FAFC] mt-0.5">
                {nextProject.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1">{nextProject.category}</p>
            </div>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111113] border border-[#27272A] text-xs sm:text-sm font-semibold text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#111113] transition-all"
            >
              <span>Explore Next Project</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        )}

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#18181B] border border-[#27272A] relative overflow-hidden text-center space-y-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
              Let&apos;s Build Together
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              Have a similar project or automation requirement?
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              I can help design, build, and deploy custom web platforms and AI-driven workflow automations tailored to your operational goals.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/#inquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#38BDF8] text-[#111113] font-bold text-sm hover:bg-[#0ea5e9] transition-all duration-200 shadow-xl shadow-[#38BDF8]/20"
              >
                <Mail size={16} />
                <span>Start a Conversation</span>
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111113] border border-[#27272A] text-[#F8FAFC] font-semibold text-sm hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all"
              >
                <span>Browse All Projects</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#27272A] py-10 bg-[#111113] mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>{PORTFOLIO_DATA.personal.copyright}</p>
          <div className="flex items-center gap-6">
            <span>{PORTFOLIO_DATA.personal.location}</span>
            <Link href="/" className="hover:text-[#38BDF8] transition-colors">
              Back to Top ↑
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
