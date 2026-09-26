export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
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
    roleBadge: "AI Automation & Web Developer",
    heroRole: "AI Automation & Web Developer",
    heroSupporting: "I build intelligent automations and high-impact web applications for modern businesses.",
    aboutHeading: "About me",
    aboutParagraphs: [
      "I'm a Web Developer and AI Automation Specialist with 2+ years of professional experience, including working with Softechgenics. I build practical digital solutions that help businesses simplify processes, improve customer experiences and operate more efficiently.",
      "My work ranges from modern websites and business platforms to AI-powered workflows, ecommerce automation and internal systems. I enjoy turning repetitive or complicated processes into clean, reliable digital experiences."
    ],
    browseProjectsCta: "Browse Projects",
    location: "Multan, Punjab, Pakistan",
    contactEmail: "ahsansagheer071@gmail.com",
    copyright: "© 2026. Muhammad Ahsan Sagheer — All rights reserved.",
  },

  credibility: {
    tag: "PROFESSIONAL BACKGROUND",
    headline: "Building practical digital solutions for real businesses.",
    subheadline: "Focused on clean engineering, intelligent automations, and scalable web solutions.",
    profileCard: {
      title: "Professional Experience",
      primary: "2+ Years",
      supporting: "Web Development, AI Automation & Digital Solutions",
      secondary: "Previously worked with Softechgenics",
    }
  },

  expertiseTicker: {
    label: "Tools & Systems I Work With",
    items: ["AI Automation", "Next.js", "Web Development", "Python", "Local SEO", "System Architecture", "Tailwind CSS"],
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
      value: "8+",
      label: "Featured Projects",
      highlighted: true,
    },
    {
      id: "stat-3",
      value: "3",
      label: "Core Specialties",
      caption: "AI Automation • Web Development • SEO",
      highlighted: false,
    },
  ] as StatItem[],

  creativityZone: {
    heading: "Behind the Build",
    items: [
      {
        id: "cz-1",
        title: "AI Automation Workflows",
        caption: "Intelligent Workflows & Agent Pipelines",
        imageSrc: "/images/creative/automation-workflow.jpg",
        bgGradient: "from-slate-900 via-sky-950/40 to-zinc-900",
      },
      {
        id: "cz-2",
        title: "Web Applications & Dashboards",
        caption: "Full-Stack Web Architectures & Interfaces",
        imageSrc: "/images/creative/dashboard-app.jpg",
        bgGradient: "from-zinc-900 via-slate-900 to-sky-950/50",
      },
      {
        id: "cz-3",
        title: "Digital Creative & Campaigns",
        caption: "Advertising Creatives & Brand Visuals",
        imageSrc: "/images/creative/gj-creative.jpg",
        bgGradient: "from-sky-950/40 via-zinc-900 to-slate-950",
      },
    ]
  },

  quote: {
    text: "\u201cPeople ignore design that ignores people.\u201d",
    author: "\u2014 Frank Chimero",
  },

  featuredProjects: [
    {
      id: "proj-1",
      slug: "gj-equipment",
      title: "G&J Equipment \u2014 Website Redesign & Digital Creative",
      category: "Web Development \u2022 UI/UX \u2022 Digital Marketing",
      tags: ["Web Development", "UI/UX", "Digital Marketing"],
      imageSrc: "/images/projects/gj-equipment/gj-website.jpg",
      summary: "Redesigned a heavy-equipment dealership website and created supporting product graphics, advertising creatives and video content for ongoing campaigns.",
    },
    {
      id: "proj-2",
      slug: "leadforge-ai",
      title: "LeadForge AI \u2014 Lead Intelligence Platform",
      category: "AI \u2022 SaaS \u2022 Automation",
      tags: ["AI", "SaaS", "Automation"],
      imageSrc: "/images/projects/leadforge/leadforge-dashboard.jpg",
      summary: "Built an AI-powered business intelligence platform combining website analysis, lead insights, customer support, inbox automation and ecommerce intelligence.",
    },
    {
      id: "proj-3",
      slug: "ecommerce-platform",
      title: "Ecommerce Store Platform",
      category: "Web Development \u2022 Ecommerce",
      tags: ["Web Development", "Ecommerce", "Storefront"],
      imageSrc: "/images/projects/ecommerce/ecommerce-store.jpg",
      summary: "Built a modern ecommerce experience focused on product discovery, responsive shopping flows and a clean customer journey.",
    },
    {
      id: "proj-4",
      slug: "business-dashboard",
      title: "Business Management Dashboard",
      category: "Web Application \u2022 Dashboard",
      tags: ["Web Application", "Dashboard", "Workflows"],
      imageSrc: "/images/projects/dashboard/business-dashboard.jpg",
      summary: "Developed a centralized business dashboard for managing operational data, workflows and day-to-day business activity.",
    },
    {
      id: "proj-5",
      slug: "youtube-comment-automation",
      title: "AI YouTube Comment Reply Automation",
      category: "AI Automation \u2022 YouTube",
      tags: ["AI Automation", "YouTube", "NLP"],
      imageSrc: "/images/projects/youtube-automation/youtube-reply.jpg",
      summary: "Built an automation that detects new YouTube comments, understands each comment's context and generates a relevant personalized reply instead of using generic responses.",
    },
    {
      id: "proj-6",
      slug: "clickup-client-intake",
      title: "Automated Client Intake & ClickUp Workflow",
      category: "Automation \u2022 ClickUp \u2022 Business Workflow",
      tags: ["Automation", "ClickUp", "Business Workflow"],
      imageSrc: "/images/projects/clickup-automation/clickup-intake.jpg",
      summary: "Created a workflow that captures client form submissions, sends the data into ClickUp, creates a task, assigns the correct team member and automatically confirms receipt with the customer.",
    },
    {
      id: "proj-7",
      slug: "news-to-reels",
      title: "AI News-to-Reels Automation",
      category: "AI \u2022 Content Automation \u2022 Social Media",
      tags: ["AI", "Content Automation", "Social Media"],
      imageSrc: "/images/projects/news-reels/news-to-reels.jpg",
      summary: "Built an automated workflow that identifies trending news, turns topics into short-form content and prepares content for publishing across Instagram and TikTok.",
    },
    {
      id: "proj-8",
      slug: "shopify-post-purchase",
      title: "Shopify Post-Purchase Automation",
      category: "Shopify \u2022 Email Automation \u2022 Ecommerce",
      tags: ["Shopify", "Email Automation", "Ecommerce"],
      imageSrc: "/images/projects/shopify-automation/shopify-post-purchase.jpg",
      summary: "Created a post-purchase workflow that automatically sends personalized customer communication after an order is completed.",
    }
  ] as ProjectItem[],

  whatIDo: {
    tag: "WHAT I DO",
    headline: "I build intelligent automations, high-performance web applications, and practical digital systems that help businesses work smarter.",
    subheadline: "Delivering thoughtful engineering, streamlined automations, and polished user experiences that empower businesses to operate faster and convert higher.",
    items: [
      {
        id: "wid-1",
        title: "AI Automation",
        desc: "AI-powered workflows and business automations that reduce repetitive work, improve response times and connect the tools businesses already use.",
      },
      {
        id: "wid-2",
        title: "Web Development",
        desc: "Modern, responsive websites and web applications built around clean user experiences, practical functionality and business goals.",
      },
      {
        id: "wid-3",
        title: "Local SEO",
        desc: "Google Business Profile optimization, local SEO audits, competitor research and strategies designed to improve local search visibility.",
      },
      {
        id: "wid-4",
        title: "Creative & Digital Content",
        desc: "Professional web graphics, ecommerce banners, ad creatives, product visuals and digital content for businesses and online brands.",
      }
    ]
  },

  capabilities: [
    "AI Automation",
    "Web Development",
    "Next.js",
    "React",
    "Workflow Automation",
    "API Integration",
    "Shopify",
    "ClickUp",
    "Local SEO",
    "Google Business Profile",
    "UI / UX",
    "Digital Creative",
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
    body: "I am always open to discussing new projects, intelligent automation opportunities, and impactful web development collaborations. Feel free to reach out for inquiries or consultations.",
    quote: "\u201cDesign without business is Decoration\u201d",
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
    { label: "Email", href: "mailto:ahsansagheer071@gmail.com", display: "ahsansagheer071@gmail.com", enabled: true },
    { label: "Upwork", href: "", display: "Upwork Profile", enabled: false },
    { label: "Fiverr", href: "", display: "Fiverr Profile", enabled: false },
    { label: "GitHub", href: "", display: "GitHub Profile", enabled: false },
    { label: "LinkedIn", href: "", display: "LinkedIn Profile", enabled: false },
  ],
};
