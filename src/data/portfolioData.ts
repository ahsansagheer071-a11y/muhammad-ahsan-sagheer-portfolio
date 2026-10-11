export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  discipline?: "Graphic Design" | "Web Development" | "AI Automation" | "Branding";
  tags?: string[];
  imageSrc?: string;
  imagePlaceholderColor?: string;
  aspect?: "tall" | "standard" | "wide";
  summary?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  caption?: string;
  highlighted?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Ahsan Sagheer",
    firstName: "Muhammad",
    lastName: "Ahsan Sagheer",
    greeting: "Hi, I am",
    roleBadge: "Graphic Design • Web Development • AI Automation",
    heroRole: "Graphic Designer, Web Developer & AI Automation Specialist",
    heroSupporting: "Delivering commercial brand identities, high-impact advertising creative, modern web platforms, and automated workflow systems for ambitious businesses worldwide.",
    aboutHeading: "About me",
    aboutParagraphs: [
      "I'm a multidisciplinary Graphic Designer, Web Developer, and AI Automation Specialist with 2+ years of professional experience, including working with Softechgenics. I blend striking visual design with robust frontend engineering and autonomous workflow pipelines.",
      "My work ranges from commercial branding, packaging, and high-impact ad campaigns to high-performance Next.js platforms, intelligent AI agents, and enterprise workflow automations."
    ],
    browseProjectsCta: "Browse Projects",
    location: "Multan, Punjab, Pakistan",
    contactEmail: "ahsansagheer18@gmail.com",
    copyright: "© 2026. Muhammad Ahsan Sagheer — All rights reserved.",
  },

  credibility: {
    tag: "PROFESSIONAL BACKGROUND",
    headline: "Delivering commercial design, modern web applications, and intelligent automations.",
    subheadline: "Focused on high-impact visual design, clean engineering, and automated business workflows.",
    profileCard: {
      title: "Professional Experience",
      primary: "2+ Years",
      supporting: "Graphic Design, Web Development & AI Automation",
      secondary: "Previously worked with Softechgenics",
    }
  },

  expertiseTicker: {
    label: "Tools & Disciplines I Work With",
    items: [
      "Graphic Design",
      "Brand Identity",
      "Next.js",
      "AI Automation",
      "Ad Creatives",
      "Python",
      "Packaging Design",
      "System Architecture",
      "Tailwind CSS",
      "Local SEO"
    ],
  },

  stats: [
    {
      id: "stat-1",
      value: "2+",
      label: "Years Professional Experience",
      highlighted: false,
    },
    {
      id: "stat-2",
      value: "14+",
      label: "Featured Projects & Concepts",
      highlighted: true,
    },
    {
      id: "stat-3",
      value: "3",
      label: "Core Disciplines",
      caption: "Graphic Design • Web Dev • AI Automation",
      highlighted: false,
    },
  ] as StatItem[],

  creativityZone: {
    heading: "Behind the Build",
    items: [
      {
        id: "cz-1",
        title: "Commercial Graphic Design & Advertising",
        caption: "Brand Identities, Print Collateral & Ad Campaigns",
        imageSrc: "/images/projects/ironpeak/ironpeak-cover.jpg",
        bgGradient: "from-amber-950/40 via-zinc-900 to-slate-950",
      },
      {
        id: "cz-2",
        title: "Web Platforms & Digital Experiences",
        caption: "Full-Stack Web Architectures, UI/UX & Dealership Portals",
        imageSrc: "/images/projects/gj-equipment/gj-website.jpg",
        bgGradient: "from-zinc-900 via-slate-900 to-sky-950/50",
      },
      {
        id: "cz-3",
        title: "AI Automation & Workflow Systems",
        caption: "Autonomous Ingestion, Triage & Marketing Pipelines",
        imageSrc: "/images/projects/youtube-automation/youtube-architecture.svg",
        bgGradient: "from-slate-900 via-sky-950/40 to-zinc-900",
      },
    ]
  },

  quote: {
    text: "“People ignore design that ignores people.”",
    author: "— Frank Chimero",
  },

  featuredProjects: [
    {
      id: "proj-1",
      slug: "gj-equipment",
      title: "G&J Equipment — Website Redesign & Digital Creative",
      category: "Web Development • Digital Creative",
      discipline: "Web Development",
      tags: ["Web Development", "UI/UX", "Digital Advertising"],
      imageSrc: "/images/projects/gj-equipment/gj-website.jpg",
      summary: "Redesigned a heavy-equipment dealership website with custom inventory filtering and multi-channel commercial ad campaigns.",
    },
    {
      id: "proj-2",
      slug: "ironpeak-machinery",
      title: "IronPeak Machinery — Brand Campaign & Spec Sheets",
      category: "Graphic Design • Commercial Advertising",
      discipline: "Graphic Design",
      tags: ["Graphic Design", "Brand Identity", "Print Prepress"],
      imageSrc: "/images/projects/ironpeak/ironpeak-cover.jpg",
      summary: "Industrial heavy equipment brand identity featuring high-contrast billboard advertising and double-sided engineering spec sheets.",
    },
    {
      id: "proj-3",
      slug: "auraskin",
      title: "AuraSkin — Clinical Packaging & Editorial Brand System",
      category: "Graphic Design • Packaging Design",
      discipline: "Branding",
      tags: ["Branding", "Packaging Design", "Editorial"],
      imageSrc: "/images/projects/auraskin/auraskin-cover.jpg",
      summary: "Clinical derm-cosmetics brand identity combining amber apothecary dropper bottles with luxury editorial magazine typography.",
    },
    {
      id: "proj-4",
      slug: "ember-coffee",
      title: "Ember Coffee Roasters — Artisan Packaging & Identity",
      category: "Graphic Design • Brand Identity",
      discipline: "Branding",
      tags: ["Branding", "Packaging", "Artisan Coffee"],
      imageSrc: "/images/projects/ember-coffee/ember-coffee-cover.svg",
      summary: "Artisan specialty coffee packaging with matte charcoal craft valve pouches, metallic copper hot-stamping, and cafe collateral.",
    },
    {
      id: "proj-5",
      slug: "novasound",
      title: "NovaSound — Audio Campaign & Exploded Tech Specs",
      category: "Graphic Design • Consumer Electronics",
      discipline: "Graphic Design",
      tags: ["Graphic Design", "Advertising", "Infographics"],
      imageSrc: "/images/projects/novasound/novasound-cover.svg",
      summary: "Audiophile electronics advertising suite featuring acoustic chamber exploded schematics and high-contrast OLED billboard ads.",
    },
    {
      id: "proj-6",
      slug: "northline-realty",
      title: "Northline Realty — Luxury Architectural Identity",
      category: "Graphic Design • Luxury Print",
      discipline: "Branding",
      tags: ["Branding", "Luxury Print", "Editorial"],
      imageSrc: "/images/projects/northline/northline-cover.svg",
      summary: "Editorial brand identity and print system for a luxury architectural brokerage, including hardcover property monographs and VIP cards.",
    },
    {
      id: "proj-7",
      slug: "apex-auto",
      title: "Apex Auto Services — Motorsport Branding & Collateral",
      category: "Graphic Design • Print Collateral",
      discipline: "Graphic Design",
      tags: ["Graphic Design", "Motorsport", "Service Menus"],
      imageSrc: "/images/projects/apex-auto/apex-auto-cover.svg",
      summary: "Dynamic motorsport brand identity and technical dyno-spec service menus engineered for an elite performance automotive workshop.",
    },
    {
      id: "proj-8",
      slug: "leadforge-ai",
      title: "LeadForge AI — Lead Intelligence Platform",
      category: "AI • SaaS • Automation",
      discipline: "AI Automation",
      tags: ["AI SaaS", "Lead Intelligence", "WebIntel"],
      imageSrc: "/images/projects/leadforge/leadforge-dashboard.jpg",
      summary: "AI-powered business intelligence platform uniting website visitor analysis, automated lead qualification, and customer support routing.",
    },
    {
      id: "proj-9",
      slug: "ecommerce-platform",
      title: "Ecommerce Store Platform",
      category: "Web Development • Ecommerce",
      discipline: "Web Development",
      tags: ["Web Development", "Ecommerce", "Storefront"],
      imageSrc: "/images/projects/ecommerce/ecommerce-store.jpg",
      summary: "Modern dark-aesthetic digital storefront built with Next.js, featuring lightning-fast product filtering and streamlined checkout.",
    },
    {
      id: "proj-10",
      slug: "business-dashboard",
      title: "Business Management Dashboard",
      category: "Web Application • Dashboard",
      discipline: "Web Development",
      tags: ["Web Application", "Dashboard", "Workflows"],
      imageSrc: "/images/projects/dashboard/business-dashboard.jpg",
      summary: "Centralized operations command center for monitoring business KPIs, delegating team tasks, and visualizing revenue velocity.",
    },
    {
      id: "proj-11",
      slug: "youtube-comment-automation",
      title: "AI YouTube Comment Reply Automation",
      category: "AI Automation • YouTube",
      discipline: "AI Automation",
      tags: ["AI Automation", "YouTube API", "NLP"],
      imageSrc: "/images/projects/youtube-automation/youtube-architecture.svg",
      summary: "Autonomous NLP pipeline that detects comments via webhooks, evaluates viewer intent, and generates personalized creator replies.",
    },
    {
      id: "proj-12",
      slug: "clickup-client-intake",
      title: "Automated Client Intake & ClickUp Workflow",
      category: "Automation • ClickUp • Business Workflow",
      discipline: "AI Automation",
      tags: ["Business Automation", "ClickUp", "Webhooks"],
      imageSrc: "/images/projects/clickup-automation/clickup-mapping.svg",
      summary: "Autonomous webhook engine converting web intake briefs into formatted ClickUp tasks, assigning staff, and triggering client receipts.",
    },
    {
      id: "proj-13",
      slug: "news-to-reels",
      title: "AI News-to-Reels Automation",
      category: "AI • Content Automation • Social Media",
      discipline: "AI Automation",
      tags: ["AI Content", "Short-Form Video", "Pipelines"],
      imageSrc: "/images/projects/news-reels/news-reels-pipeline.svg",
      summary: "Automated media production pipeline aggregating news feeds, generating viral scripts, synthesizing neural voiceovers, and rendering 9:16 reels.",
    },
    {
      id: "proj-14",
      slug: "shopify-post-purchase",
      title: "Shopify Post-Purchase Retention Pipeline",
      category: "Shopify • Email Automation • Ecommerce",
      discipline: "AI Automation",
      tags: ["Ecommerce Automation", "Shopify", "Klaviyo"],
      imageSrc: "/images/projects/shopify-automation/shopify-post-purchase-email.svg",
      summary: "Retention automation listening for Shopify order webhooks to trigger predictive cross-sell emails and VIP customer follow-ups.",
    }
  ] as ProjectItem[],

  whatIDo: {
    tag: "WHAT I DO",
    headline: "I create commercial brand designs, high-performance web applications, and intelligent automation systems.",
    subheadline: "Delivering high-converting visual creative, robust frontend architectures, and autonomous workflows that help businesses scale efficiently.",
    items: [
      {
        id: "wid-1",
        title: "Commercial Graphic Design & Branding",
        desc: "High-impact brand identities, packaging dielines, advertising billboards, marketing collateral, and social campaign creative tailored for international businesses.",
      },
      {
        id: "wid-2",
        title: "Web Development",
        desc: "Modern, responsive websites and web applications built with Next.js, React, and Tailwind CSS around clean user experiences and measurable business goals.",
      },
      {
        id: "wid-3",
        title: "AI Automation & Workflows",
        desc: "AI-powered pipelines, webhook integrations, and business automations that eliminate repetitive tasks, accelerate lead response times, and scale operations.",
      },
      {
        id: "wid-4",
        title: "Local SEO & Digital Visibility",
        desc: "Google Business Profile optimization, structured local SEO audits, competitor benchmarking, and strategies designed to maximize high-intent local search visibility.",
      }
    ]
  },

  capabilities: [
    "Graphic Design",
    "Brand Identity",
    "Packaging Design",
    "Commercial Advertising",
    "AI Automation",
    "Web Development",
    "Next.js",
    "React",
    "Workflow Automation",
    "API Integration",
    "Shopify",
    "ClickUp",
    "Local SEO",
    "UI / UX Design",
  ],

  testimonials: [
    { id: "test-1", author: "Client Feedback", role: "Verified Client", content: "Verified testimonial will be added here.", rating: 5 },
    { id: "test-2", author: "Client Feedback", role: "Verified Client", content: "Verified testimonial will be added here.", rating: 5 },
    { id: "test-3", author: "Client Feedback", role: "Verified Client", content: "Verified testimonial will be added here.", rating: 5 },
    { id: "test-4", author: "Client Feedback", role: "Verified Client", content: "Verified testimonial will be added here.", rating: 5 },
    { id: "test-5", author: "Client Feedback", role: "Verified Client", content: "Verified testimonial will be added here.", rating: 5 },
    { id: "test-6", author: "Client Feedback", role: "Verified Client", content: "Verified testimonial will be added here.", rating: 5 },
  ] as TestimonialItem[],

  finalCta: {
    heading: "Hello Again!",
    body: "I am always open to discussing new projects, commercial creative campaigns, high-performance web development, and intelligent workflow automations. Feel free to reach out for inquiries or custom creative samples.",
    quote: "“Design without business is Decoration”",
    availability: "Available for freelance projects worldwide.",
    location: "Multan, Punjab, Pakistan",
    connectTitle: "Say Hello!",
    connectLabel: "LET'S CONNECT",
    ctaButton: "Email me",
  },

  socials: [
    { label: "LinkedIn", url: "", enabled: false },
    { label: "GitHub", url: "", enabled: false },
    { label: "Upwork", url: "", enabled: false },
    { label: "Fiverr", url: "", enabled: false },
  ],

  contactLinks: [
    { label: "Email", href: "mailto:ahsansagheer18@gmail.com", display: "ahsansagheer18@gmail.com", enabled: true },
    { label: "Upwork", href: "", display: "Upwork Profile", enabled: false },
    { label: "Fiverr", href: "", display: "Fiverr Profile", enabled: false },
    { label: "GitHub", href: "", display: "GitHub Profile", enabled: false },
    { label: "LinkedIn", href: "", display: "LinkedIn Profile", enabled: false },
  ],
};
