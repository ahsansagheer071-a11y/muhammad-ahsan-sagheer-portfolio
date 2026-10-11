"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Palette,
  Globe,
  Bot,
  Tag
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

export const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasDragged = useRef(false);

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

  // Update scroll bounds & progress indicator
  const updateScrollMetrics = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(maxScroll > 10 && scrollLeft < maxScroll - 10);

    const progress = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)) : 0;
    setScrollProgress(progress);

    // Calculate approximate active card index
    const firstCard = el.querySelector<HTMLElement>(".project-carousel-card");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24;
      const idx = Math.min(
        filteredProjects.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      setActiveIndex(idx);
    }
  }, [filteredProjects.length]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollMetrics, { passive: true });
    window.addEventListener("resize", updateScrollMetrics);
    updateScrollMetrics();

    return () => {
      el.removeEventListener("scroll", updateScrollMetrics);
      window.removeEventListener("resize", updateScrollMetrics);
    };
  }, [updateScrollMetrics]);

  // Filter change handler: resets scroll position to start
  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    trackEvent("portfolio_filter_click", { category: filter });

    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Carousel Arrow Navigation
  const scrollByDirection = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>(".project-carousel-card");
    const step = firstCard ? firstCard.offsetWidth + 24 : 420;
    const target = direction === "left" ? el.scrollLeft - step : el.scrollLeft + step;

    el.scrollTo({ left: target, behavior: "smooth" });
  };

  // Keyboard navigation on carousel container
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByDirection("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByDirection("right");
    }
  };

  // Drag-to-scroll interaction for desktop mice
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = sliderRef.current;
    if (!el) return;

    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftStart.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = sliderRef.current;
    if (!el) return;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 6) {
      hasDragged.current = true;
    }
    el.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <section id="portfolio" className="relative w-full py-16 sm:py-20 bg-[#111113] overflow-hidden">
      
      {/* Top Subtle Wavy Line */}
      <div className="w-full flex justify-center mb-8 px-6">
        <svg
          style={{ width: "160px", height: "14px", maxWidth: "160px" }}
          className="text-[#38BDF8]/40"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#38BDF8]">
              <Sparkles size={12} />
              <span>SELECTED COMMERCIAL WORK &amp; CONCEPTS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              Featured <span className="text-[#38BDF8]">Portfolio</span>
            </h2>
            <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-xl leading-relaxed">
              Commercial graphic design campaigns, modern web architectures, and autonomous AI automation pipelines.
            </p>
          </div>

          {/* Carousel Arrow Controls & Live Index */}
          <div className="flex items-center gap-4 self-start md:self-end">
            {/* Live Progress Count */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#71717A] tabular-nums select-none">
                <span className="text-[#38BDF8] font-bold">
                  {String(Math.min(activeIndex + 1, filteredProjects.length)).padStart(2, "0")}
                </span>
                {" / "}
                {String(filteredProjects.length).padStart(2, "0")}
              </span>
              {/* Minimal Progress Bar */}
              <div className="w-20 sm:w-28 h-1 bg-[#27272A] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#38BDF8] rounded-full transition-all duration-200"
                  style={{ width: `${Math.max(8, scrollProgress)}%` }}
                />
              </div>
            </div>

            {/* Left / Right Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollByDirection("left")}
                disabled={!canScrollLeft}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  canScrollLeft
                    ? "border-[#27272A] bg-[#18181B] text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] hover:scale-105 active:scale-95"
                    : "border-[#27272A]/40 bg-[#18181B]/40 text-[#71717A]/30 cursor-not-allowed"
                }`}
                aria-label="Previous project slide"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => scrollByDirection("right")}
                disabled={!canScrollRight}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  canScrollRight
                    ? "border-[#27272A] bg-[#18181B] text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] hover:scale-105 active:scale-95"
                    : "border-[#27272A]/40 bg-[#18181B]/40 text-[#71717A]/30 cursor-not-allowed"
                }`}
                aria-label="Next project slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#27272A]/80 pb-4">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.label;
            const count = counts[tab.label];

            return (
              <button
                key={tab.label}
                onClick={() => handleFilterChange(tab.label)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#38BDF8] text-[#111113] shadow-md shadow-[#38BDF8]/20"
                    : "bg-[#18181B] text-[#A1A1AA] border border-[#27272A] hover:text-[#F8FAFC] hover:border-[#38BDF8]/40 hover:bg-[#202025]"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1 rounded ${
                    isActive ? "bg-[#111113]/20 text-[#111113] font-bold" : "text-[#71717A]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Horizontal Carousel Track */}
      {/* Container paddings calibrated to show ~2.5 cards on desktop, 1.5 on tablet, 1.1 on mobile */}
      <div className="w-full relative">
        <div
          ref={sliderRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 sm:px-10 lg:px-16 pb-4 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden focus:outline-none cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: "touch" }}
          aria-label="Featured projects carousel"
        >
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="project-carousel-card snap-start shrink-0 w-[84vw] max-w-[340px] sm:w-[58vw] sm:max-w-[420px] md:w-[48vw] md:max-w-[400px] lg:w-[38%] xl:w-[35%] lg:max-w-[460px] flex flex-col"
            >
              <Link
                href={`/projects/${project.slug}`}
                onClick={(e) => {
                  if (hasDragged.current) {
                    e.preventDefault();
                    return;
                  }
                  trackEvent("project_card_click", {
                    slug: project.slug,
                    title: project.title,
                    discipline: project.discipline,
                  });
                }}
                className="group flex flex-col h-full rounded-2xl bg-[#18181B] border border-[#27272A] overflow-hidden hover:border-[#38BDF8]/60 hover:shadow-2xl hover:shadow-[#38BDF8]/10 transition-all duration-300 focus:outline-none"
              >
                {/* 4:3 Aspect Ratio Image Showcase */}
                <div className="relative w-full aspect-[4/3] bg-[#111113] overflow-hidden">
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 36vw"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#18181B] text-[#71717A]">
                      <Layers size={32} />
                    </div>
                  )}

                  {/* Gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-black/20 pointer-events-none" />

                  {/* Subtle top discipline tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#111113]/85 backdrop-blur-md border border-[#27272A] text-[10px] font-mono font-medium text-[#38BDF8]">
                      {project.discipline || "Project"}
                    </span>
                  </div>

                  {/* Hover arrow badge */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-7 h-7 rounded-full bg-[#38BDF8] text-[#111113] flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform motion-reduce:transform-none">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Editorial Typography Details Below Image */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-2.5 bg-[#18181B]">
                  {/* Category & Subtle Concept/Client Designation */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A] gap-2">
                    <span className="truncate uppercase tracking-wider text-[11px] text-[#A1A1AA]">
                      {project.category.split("•")[0]?.trim() || project.category}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#111113] border border-[#27272A] text-[#71717A] shrink-0">
                      {project.projectType || "Concept Project"}
                    </span>
                  </div>

                  {/* Project Title with Subtle Arrow indicator */}
                  <div className="flex items-start justify-between gap-3 pt-0.5">
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="pt-0.5 text-[#71717A] group-hover:text-[#38BDF8] transition-colors shrink-0">
                      <ArrowUpRight
                        size={16}
                        className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform motion-reduce:transform-none"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions: View All Projects (14) + Free Sample Creative CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-10">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#18181B] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#111113] border border-[#27272A] flex items-center justify-center text-[#38BDF8] shrink-0 hidden sm:flex">
              <Layers size={18} />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-[#F8FAFC]">
                Want to explore the complete catalog?
              </h4>
              <p className="text-xs text-[#A1A1AA] mt-0.5">
                Browse all 14 commercial campaigns, web applications, and AI pipelines in the full gallery.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111113] border border-[#27272A] text-xs sm:text-sm font-semibold text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors"
            >
              <span>View All Projects ({allProjects.length})</span>
              <ArrowUpRight size={14} />
            </Link>

            <a
              href="#inquiry"
              onClick={() => {
                trackEvent("free_sample_cta_click", { source: "portfolio_carousel_footer" });
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("select-automation-service", {
                      detail: "Graphic Design & Branding",
                    })
                  );
                }
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#38BDF8] text-[#111113] text-xs sm:text-sm font-bold hover:bg-[#7DD3FC] transition-colors shadow-md shadow-[#38BDF8]/20"
            >
              <Sparkles size={13} />
              <span>Request Free Sample Creative</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
