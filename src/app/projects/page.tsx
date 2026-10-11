"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Layers,
  Palette,
  Globe,
  Bot,
  Tag,
  Mail,
  Home
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type CategoryFilter = "All" | "Graphic Design" | "Web Development" | "AI Automation" | "Branding";

const FILTER_TABS: { label: CategoryFilter; icon: React.ReactNode }[] = [
  { label: "All", icon: <Layers size={13} /> },
  { label: "Graphic Design", icon: <Palette size={13} /> },
  { label: "Web Development", icon: <Globe size={13} /> },
  { label: "AI Automation", icon: <Bot size={13} /> },
  { label: "Branding", icon: <Tag size={13} /> },
];

export default function ProjectsDirectoryPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const allProjects = PORTFOLIO_DATA.featuredProjects;

  // Category counts
  const counts = useMemo(() => {
    const map: Record<CategoryFilter, number> = {
      All: allProjects.length,
      "Graphic Design": 0,
      "Web Development": 0,
      "AI Automation": 0,
      Branding: 0,
    };
    allProjects.forEach((p) => {
      if (p.discipline && map[p.discipline] !== undefined) {
        map[p.discipline]++;
      }
    });
    return map;
  }, [allProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((p) => p.discipline === activeFilter);
  }, [activeFilter, allProjects]);

  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    trackEvent("portfolio_filter_click", { category: filter, location: "projects_directory" });
  };

  return (
    <div className="min-h-screen bg-[#111113] text-[#F8FAFC] selection:bg-[#38BDF8] selection:text-[#111113] font-sans">
      
      {/* Top Header Navigation */}
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
              <span className="font-heading font-extrabold text-[11px] text-[#F8FAFC] tracking-[0.14em] uppercase">
                MUHAMMAD
              </span>
              <span className="font-heading font-semibold text-[9px] text-[#A1A1AA] tracking-[0.18em] uppercase group-hover:text-[#7DD3FC] transition-colors">
                AHSAN SAGHEER
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A1A1AA] hover:text-[#38BDF8] transition-colors px-3 py-2 rounded-lg hover:bg-[#18181B]"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
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

      {/* Main Directory Body */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16 space-y-12">
        
        {/* Breadcrumb & Hero Statement */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#71717A]">
            <Link href="/" className="hover:text-[#A1A1AA] transition-colors flex items-center gap-1">
              <Home size={12} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#38BDF8] font-medium">Projects Directory</span>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#38BDF8]">
              <Sparkles size={12} />
              <span>COMPLETE PORTFOLIO CATALOG</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight">
              All Projects &amp; <span className="text-[#38BDF8]">Case Studies</span>
            </h1>
            <p className="text-[#A1A1AA] text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore the full portfolio of 14 commercial campaigns, web applications, and AI pipelines across graphic design, software development, and automation.
            </p>
          </div>
        </div>

        {/* Filter Category Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#27272A]/80 pb-6">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.label;
            const count = counts[tab.label];

            return (
              <button
                key={tab.label}
                onClick={() => handleFilterChange(tab.label)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#38BDF8] text-[#111113] shadow-lg shadow-[#38BDF8]/20"
                    : "bg-[#18181B] text-[#A1A1AA] border border-[#27272A] hover:text-[#F8FAFC] hover:border-[#38BDF8]/40 hover:bg-[#202025]"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive ? "bg-[#111113]/20 text-[#111113] font-bold" : "text-[#71717A]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group flex flex-col h-full rounded-2xl bg-[#18181B] border border-[#27272A] overflow-hidden hover:border-[#38BDF8]/60 hover:shadow-2xl hover:shadow-[#38BDF8]/10 transition-all duration-300 focus:outline-none"
            >
              {/* 4:3 Image Showcase */}
              <div className="relative w-full aspect-[4/3] bg-[#111113] overflow-hidden">
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#18181B] text-[#71717A]">
                    <Layers size={32} />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-black/20 pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#111113]/85 backdrop-blur-md border border-[#27272A] text-[10px] font-mono font-medium text-[#38BDF8]">
                    {project.discipline || "Project"}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#38BDF8] text-[#111113] flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-3 bg-[#18181B]">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A] gap-2">
                    <span className="truncate uppercase tracking-wider text-[11px] text-[#A1A1AA]">
                      {project.category.split("•")[0]?.trim() || project.category}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#111113] border border-[#27272A] text-[#71717A] shrink-0">
                      {project.projectType || "Concept Project"}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#27272A]/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#71717A]">
                    {project.tags?.[0] || "Featured"}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#38BDF8] group-hover:translate-x-0.5 transition-transform">
                    <span>View Case Study</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Contact & Sample CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#18181B] border border-[#27272A] relative overflow-hidden text-center space-y-6 mt-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
              Commercial Creative &amp; Development
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Have an upcoming branding, web, or automation project?
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              I collaborate with international founders and teams to deliver commercial design systems, high-performance web platforms, and automated operations.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/#inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#38BDF8] text-[#111113] font-bold text-xs sm:text-sm hover:bg-[#0ea5e9] transition-all duration-200 shadow-xl shadow-[#38BDF8]/20"
              >
                <Mail size={15} />
                <span>Get in Touch</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111113] border border-[#27272A] text-[#F8FAFC] font-semibold text-xs sm:text-sm hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all"
              >
                <ArrowLeft size={15} />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#27272A] py-10 bg-[#111113] mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© 2026. Muhammad Ahsan Sagheer — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Multan, Punjab, Pakistan</span>
            <Link href="/" className="hover:text-[#38BDF8] transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
