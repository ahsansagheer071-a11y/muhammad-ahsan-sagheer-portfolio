"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import {
  Sparkles,
  ArrowUpRight,
  Layers,
  Palette,
  Globe,
  Bot,
  Tag
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type CategoryFilter = "All" | "Graphic Design" | "Web Development" | "AI Automation" | "Branding";

const FILTER_TABS: { label: CategoryFilter; icon: React.ReactNode }[] = [
  { label: "All", icon: <Layers size={14} /> },
  { label: "Graphic Design", icon: <Palette size={14} /> },
  { label: "Web Development", icon: <Globe size={14} /> },
  { label: "AI Automation", icon: <Bot size={14} /> },
  { label: "Branding", icon: <Tag size={14} /> },
];

export const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const allProjects = PORTFOLIO_DATA.featuredProjects;

  // Compute category counts
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

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((p) => p.discipline === activeFilter);
  }, [activeFilter, allProjects]);

  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    trackEvent("portfolio_filter_click", { category: filter });
  };

  return (
    <section id="portfolio" className="relative w-full py-20 md:py-28 bg-[#111113] overflow-hidden">
      
      {/* Top Decorative Wavy Line */}
      <div className="w-full flex justify-center mb-12 px-6">
        <svg
          style={{ width: "180px", height: "18px", maxWidth: "180px" }}
          className="text-[#38BDF8]/40"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#38BDF8]">
              <Sparkles size={13} />
              <span>COMMERCIAL WORK &amp; CASE STUDIES</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F8FAFC] tracking-tight">
              Featured <span className="text-[#38BDF8]">Portfolio</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore commercial graphic design campaigns, high-performance web applications, and autonomous AI automation pipelines.
            </p>
          </motion.div>
        </div>

        {/* Filter Category Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 border-b border-[#27272A]/80 pb-6">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.label;
            const count = counts[tab.label];

            return (
              <button
                key={tab.label}
                onClick={() => handleFilterChange(tab.label)}
                className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#38BDF8] text-[#111113] shadow-lg shadow-[#38BDF8]/20"
                    : "bg-[#18181B] text-[#A1A1AA] border border-[#27272A] hover:text-[#F8FAFC] hover:border-[#38BDF8]/50 hover:bg-[#202025]"
                }`}
              >
                <span className={isActive ? "text-[#111113]" : "text-[#38BDF8]"}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive
                      ? "bg-[#111113]/15 text-[#111113] font-bold"
                      : "bg-[#111113] text-[#71717A] group-hover:text-[#A1A1AA]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project: ProjectItem) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  onClick={() =>
                    trackEvent("project_card_click", {
                      slug: project.slug,
                      title: project.title,
                      discipline: project.discipline,
                    })
                  }
                  className="group flex flex-col h-full rounded-2xl bg-[#18181B] border border-[#27272A] overflow-hidden hover:border-[#38BDF8]/60 hover:shadow-2xl hover:shadow-[#38BDF8]/10 transition-all duration-300 focus:outline-none"
                >
                  {/* Visual Preview Showcase Image */}
                  <div className="relative w-full aspect-[16/10] bg-[#111113] overflow-hidden">
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

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-black/20 pointer-events-none" />

                    {/* Discipline Badge on Top Left */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#111113]/85 backdrop-blur-md border border-[#27272A] text-[11px] font-mono font-medium text-[#38BDF8] shadow-md">
                        {project.discipline || "Project"}
                      </span>
                    </div>

                    {/* Explore Quick-View Indicator on Top Right */}
                    <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#38BDF8] text-[#111113] flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors line-clamp-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                    </div>

                    {/* Card Footer: Tags & Explore Link */}
                    <div className="pt-3 border-t border-[#27272A]/80 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
                        {project.tags?.slice(0, 2).map((tag: string) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#111113] border border-[#27272A] text-[#94A3B8] group-hover:border-[#38BDF8]/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#38BDF8] shrink-0 group-hover:translate-x-0.5 transition-transform">
                        <span>Case Study</span>
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner with Free Sample CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[#18181B] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-[#F8FAFC]">
              Have a commercial design or automation requirement?
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1AA]">
              I provide tailored brand concepts, high-impact ad creatives, and custom AI pipeline scoping.
            </p>
          </div>
          <a
            href="#inquiry"
            onClick={() => {
              trackEvent("free_sample_cta_click", { source: "portfolio_bottom" });
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("select-automation-service", {
                    detail: "Graphic Design & Branding",
                  })
                );
              }
            }}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#38BDF8] text-[#111113] font-bold text-xs sm:text-sm hover:bg-[#7DD3FC] transition-all shadow-lg shadow-[#38BDF8]/20 cursor-pointer"
          >
            <Sparkles size={15} />
            <span>Request a Free Sample Creative</span>
          </a>
        </div>

      </div>
    </section>
  );
};
