export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  badge?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface GalleryItem {
  title: string;
  imageSrc: string;
  caption: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  projectType: "Real Commercial Project" | "Independent Project" | "Demo Project" | "AI Automation" | "Business Automation" | "AI Content Automation" | "Ecommerce Automation";
  tagline: string;
  heroImage: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  workflow: WorkflowStep[];
  features: FeatureItem[];
  benefits: string[];
  technologies: string[];
  gallery: GalleryItem[];
  ctaText?: string;
}

export const PROJECTS_DATA: Record<string, ProjectCaseStudy> = {
  "gj-equipment": {
    slug: "gj-equipment",
    title: "G&J Equipment — Website Redesign & Digital Creative",
    category: "Web Development • UI/UX • Digital Marketing",
    projectType: "Real Commercial Project",
    tagline: "A comprehensive digital redesign and multi-channel creative campaign suite for a heavy equipment dealership.",
    heroImage: "/images/projects/gj-equipment/gj-website.jpg",
    tags: ["Web Development", "UI / UX", "Digital Advertising", "Product Creative", "Video Content"],
    overview: "G&J Equipment is a commercial heavy-equipment and machinery dealership requiring a modern digital presence to showcase heavy machinery inventory, streamline customer quote inquiries, and provide consistent promotional assets for ongoing advertising campaigns.",
    challenge: "The previous dealership web structure suffered from fragmented equipment categorizations, low mobile discoverability, and inconsistent visual branding across social marketing channels.",
    solution: "Designed and engineered a high-performance, dark-themed responsive website featuring structured inventory filtering, prominent quote capture triggers, and unified advertising creatives across web, print, and video channels.",
    workflow: [
      { step: 1, title: "Equipment Intake", description: "Cataloging heavy machinery inventory with detailed specs, capacities, and high-res visuals.", badge: "Catalog" },
      { step: 2, title: "Structured Navigation", description: "Segmenting machinery by industry category, rental vs. sale, and availability status.", badge: "UX Architecture" },
      { step: 3, title: "Lead & Quote Capture", description: "Direct inquiry forms on individual equipment pages routing inquiries directly to sales reps.", badge: "Conversion" },
      { step: 4, title: "Multi-Channel Promotion", description: "Synchronized advertising creatives and video clips deployed across digital campaigns.", badge: "Marketing" },
    ],
    features: [
      { title: "Responsive Inventory Browsing", description: "Clean desktop and mobile product grids allowing buyers to inspect equipment specifications effortlessly." },
      { title: "High-Visibility Quote CTAs", description: "Contextual quotation buttons embedded directly into every machinery card and detail page." },
      { title: "Promotional Creative Suite", description: "Supporting advertising graphics, social banners, and digital display assets aligned with brand identity." },
      { title: "Video & Campaign Content", description: "Short-form machinery walk-arounds and promotional video formats tailored for social channels." },
      { title: "Fast-Loading Static Architecture", description: "Optimized asset delivery ensuring sub-second response times across remote mobile connections." },
      { title: "Unified Brand System", description: "Consistent typography, dark aesthetic, and visual hierarchy maintained across all dealership touchpoints." },
    ],
    benefits: [
      "Presents a commanding, professional digital presence that instills buyer confidence in high-value transactions.",
      "Simplifies heavy equipment discovery through intuitive category hierarchies and spec cards.",
      "Enables faster inquiry routing from prospective commercial buyers to sales teams.",
      "Provides unified visual consistency between advertising campaigns and the dealership website.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "UI/UX Design", "Figma", "Digital Marketing"],
    gallery: [
      { title: "Dealership Homepage Interface", imageSrc: "/images/projects/gj-equipment/gj-website.jpg", caption: "Full desktop overview showcasing heavy machinery inventory and quote action triggers." },
      { title: "Digital Campaign Assets", imageSrc: "/images/creative/gj-creative.jpg", caption: "Advertising banners and promotional creative layouts for ongoing marketing campaigns." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  "leadforge-ai": {
    slug: "leadforge-ai",
    title: "LeadForge AI — Lead Intelligence Platform",
    category: "AI • SaaS • Automation",
    projectType: "Independent Project",
    tagline: "An AI-powered business intelligence suite uniting website analytics, lead qualification, and automated customer communication.",
    heroImage: "/images/projects/leadforge/leadforge-dashboard.jpg",
    tags: ["AI SaaS", "Lead Intelligence", "WebIntel AI", "SupportFlow AI", "InboxFlow AI", "CommerceIQ"],
    overview: "LeadForge AI is a specialized intelligence platform engineered to bridge the gap between raw web traffic and actionable sales insight. It provides modular AI capabilities including website intent analysis, customer support routing, inbox triage, and ecommerce insights.",
    challenge: "Modern businesses lose high-intent leads due to disjointed analytics tools, slow response times, and an inability to automatically score visitor intent before manual sales outreach.",
    solution: "Engineered a centralized dashboard integrating four specialized AI modules (WebIntel AI, SupportFlow AI, InboxFlow AI, and CommerceIQ) that automatically categorize leads and recommend priority actions.",
    workflow: [
      { step: 1, title: "Data Ingestion", description: "Capturing visitor interactions, website inquiries, and incoming communications in real time.", badge: "Ingestion" },
      { step: 2, title: "AI Classification", description: "Contextual language models evaluate intent, sentiment, and buying readiness.", badge: "AI Processing" },
      { step: 3, title: "Modular Scoring", description: "Applying intent scores (0-100) and segmenting leads into high-priority pipeline buckets.", badge: "Intelligence" },
      { step: 4, title: "Action & Dispatch", description: "Routing qualified leads to automated inbox sequences or direct sales dashboards.", badge: "Execution" },
    ],
    features: [
      { title: "WebIntel AI", description: "Behavioral website analysis identifying high-intent visitor patterns and purchase signals." },
      { title: "SupportFlow AI", description: "Automated ticket triage and contextual customer query resolution." },
      { title: "InboxFlow AI", description: "Intelligent email categorization, priority flagging, and draft reply generation." },
      { title: "CommerceIQ", description: "Ecommerce intelligence tracking cart velocity, product demand, and drop-off points." },
      { title: "Real-Time Intelligence Dashboard", description: "Unified dark UI with interactive velocity charts and instant lead classification feeds." },
      { title: "Custom Lead Scoring Rules", description: "Configurable intent thresholds tailored to business-specific qualification criteria." },
    ],
    benefits: [
      "Helps sales teams identify and prioritize high-value prospects without manual data analysis.",
      "Reduces lead qualification latency through instant AI scoring and contextual insights.",
      "Centralizes multiple operational AI tools into a single, cohesive business dashboard.",
      "Enables scalable customer communication across support channels and email inboxes.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI Pipelines", "NLP Models", "Chart.js"],
    gallery: [
      { title: "Lead Intelligence Dashboard", imageSrc: "/images/projects/leadforge/leadforge-dashboard.jpg", caption: "Main command center showing lead velocity, intent scores, and active modular AI feeds." },
      { title: "Executive Analytics Overview", imageSrc: "/images/creative/dashboard-app.jpg", caption: "Operational activity timeline and multi-channel performance breakdown." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  "ecommerce-platform": {
    slug: "ecommerce-platform",
    title: "Ecommerce Store Platform",
    category: "Web Development • Ecommerce",
    projectType: "Demo Project",
    tagline: "A modern, high-performance ecommerce experience focused on intuitive product discovery and seamless checkout flows.",
    heroImage: "/images/projects/ecommerce/ecommerce-store.jpg",
    tags: ["Demo Project", "Ecommerce", "Storefront", "Responsive Design", "Product Discovery"],
    overview: "A comprehensive digital storefront concept built to demonstrate modern ecommerce principles: lightning-fast page transitions, mobile-optimized browsing, intuitive category filtering, and a frictionless customer purchase journey.",
    challenge: "Many online storefronts suffer from heavy third-party scripts, cluttered layouts, and cumbersome multi-step filtering that introduce friction into product exploration.",
    solution: "Built a minimalist dark-aesthetic shopping platform with instant category switching, dynamic price calculation, responsive cart drawer, and clean product presentation.",
    workflow: [
      { step: 1, title: "Catalog Discovery", description: "Instant tag filtering across categories (Audio, Wearables, Mobile, Smart Home).", badge: "Discovery" },
      { step: 2, title: "Product Detail", description: "High-definition visual showcase with technical specifications and stock availability.", badge: "Inspection" },
      { step: 3, title: "Cart Staging", description: "Persistent slide-out drawer cart with instant quantity adjustments.", badge: "Staging" },
      { step: 4, title: "Streamlined Checkout", description: "Single-view payment and shipping confirmation interface designed to minimize abandonment.", badge: "Checkout" },
    ],
    features: [
      { title: "Dynamic Product Catalog", description: "Responsive grid layout with live rating badges, price displays, and instant add-to-cart." },
      { title: "Category Filter Bar", description: "Pill-based category switching that updates product collections with zero full-page reloads." },
      { title: "Featured Product Hero", description: "Prominent visual billboard highlighting flagship releases with direct explore action." },
      { title: "Mobile-First Shopping Flow", description: "Touch-optimized buttons, gesture-friendly product cards, and legible typography." },
      { title: "Cart & Account Architecture", description: "Clean state management for cart items, customer preferences, and order history." },
      { title: "Performance-Tuned Frontend", description: "Sub-second load times engineered with Next.js static rendering and optimized image formats." },
    ],
    benefits: [
      "Provides an effortless product browsing experience tailored for high-conversion retail brands.",
      "Reduces friction through responsive filter controls and instant shopping bag feedback.",
      "Maintains visual clarity across desktop displays, tablets, and mobile devices.",
      "Serves as an extensible, scalable foundation for direct-to-consumer and B2B commerce.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "State Management", "Responsive UI"],
    gallery: [
      { title: "Digital Storefront Interface", imageSrc: "/images/projects/ecommerce/ecommerce-store.jpg", caption: "Hero banner showcase and curated trending product grid with dark aesthetic." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  "business-dashboard": {
    slug: "business-dashboard",
    title: "Business Management Dashboard",
    category: "Web Application • Dashboard",
    projectType: "Demo Project",
    tagline: "A centralized operations dashboard concept for managing business data, team tasks, and operational pipelines.",
    heroImage: "/images/projects/dashboard/business-dashboard.jpg",
    tags: ["Demo Project", "Web Application", "Operations Dashboard", "Task Management", "Reporting"],
    overview: "A comprehensive business operations dashboard designed to unify fragmented business metrics, task allocations, client pipelines, and activity timelines into a single intuitive control center.",
    challenge: "Operational leaders often struggle with fragmented visibility, switching between separate apps for CRM, task delegation, revenue monitoring, and activity logging.",
    solution: "Created an all-in-one operations hub featuring live metric cards, task allocation progress bars, revenue breakdown charts, and an automated activity feed.",
    workflow: [
      { step: 1, title: "Data Aggregation", description: "Pulling operational status, task queues, and pipeline values into central state.", badge: "Aggregation" },
      { step: 2, title: "KPI Visualization", description: "Rendering interactive sparklines for active workflows, pending tasks, and revenue trends.", badge: "Visualization" },
      { step: 3, title: "Task Delegation", description: "Tracking team workload allocation and upcoming project milestones.", badge: "Coordination" },
      { step: 4, title: "Audit & Timeline", description: "Chronological event stream capturing workflow completions and system status updates.", badge: "Audit" },
    ],
    features: [
      { title: "Executive KPI Cards", description: "High-level metrics for Active Workflows, Task Status, Customer Pipeline, and Revenue Tracker." },
      { title: "Interactive Sparkline Trends", description: "Visual indicators showing performance trajectories and target milestones over time." },
      { title: "Real-Time Activity Timeline", description: "Live event stream detailing task completions, invoice approvals, and client onboarding." },
      { title: "Team Workload Allocation", description: "Progress bar indicators tracking active project bandwidth across team members." },
      { title: "Revenue Distribution Charts", description: "Interactive breakdown analyzing service lines, product revenues, and recurring accounts." },
      { title: "Dark Minimalist Ergonomics", description: "Engineered with a low-strain dark palette (#18181B) for extended daily operational use." },
    ],
    benefits: [
      "Consolidates critical business operations into a unified, distraction-free interface.",
      "Enables management teams to spot workflow bottlenecks and revenue trends early.",
      "Reduces information silos across sales, operations, and fulfillment departments.",
      "Provides a clean structural foundation for scalable internal SaaS tooling.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SVG Charts", "Component Architecture"],
    gallery: [
      { title: "Operations Command Center", imageSrc: "/images/projects/dashboard/business-dashboard.jpg", caption: "Full dashboard view showing KPI sparklines, activity stream, and revenue breakdown." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  "youtube-comment-automation": {
    slug: "youtube-comment-automation",
    title: "AI YouTube Comment Reply Automation",
    category: "AI Automation • YouTube",
    projectType: "AI Automation",
    tagline: "An automated intelligence workflow that analyzes YouTube comments in context and generates natural, brand-consistent replies.",
    heroImage: "/images/projects/youtube-automation/youtube-reply.jpg",
    tags: ["AI Automation", "YouTube API", "NLP Context Engine", "Community Engagement", "Webhooks"],
    overview: "An autonomous AI workflow engineered for content creators and brands to maintain active, authentic community engagement on YouTube without requiring hours of manual typing.",
    challenge: "High-volume channels receive hundreds of comments daily. Generic auto-responders feel artificial, while manual responses consume extensive operational time.",
    solution: "Engineered a node-based automation that listens for new comments via webhooks, evaluates video context and viewer intent with NLP models, and generates natural personalized replies with optional human review.",
    workflow: [
      { step: 1, title: "Webhook Trigger", description: "Real-time detection of newly posted comments on designated YouTube channel videos.", badge: "Trigger" },
      { step: 2, title: "Ingestion & Filter", description: "Parsing author metadata, comment text, and filtering language/profanity.", badge: "Filter" },
      { step: 3, title: "Context & Sentiment", description: "AI engine evaluates video topic, comment nuance, sentiment, and question intent.", badge: "AI Analysis" },
      { step: 4, title: "Personalized Generation", description: "Crafting a unique, context-aware reply matching brand tone and specific viewer query.", badge: "Generation" },
      { step: 5, title: "Publish or Approval", description: "Direct automated posting or routing edge cases to a creator approval queue.", badge: "Action" },
    ],
    features: [
      { title: "Real-Time Webhook Monitoring", description: "Instant notification and processing within seconds of comment publication." },
      { title: "Deep Context Comprehension", description: "Evaluates the specific video subject matter to ensure replies accurately answer technical questions." },
      { title: "Custom Tone Conditioning", description: "Configurable response style (Helpful, Professional, Enthusiastic, Casual) tailored to creator voice." },
      { title: "Sentiment & Safety Filtering", description: "Automatic sentiment classification (e.g. 85% Positive) with spam/troll blacklisting." },
      { title: "Hybrid Human-in-the-Loop", description: "Optional approval gate routing uncertain or sensitive comments to a quick one-click review queue." },
      { title: "Scalable Execution Engine", description: "Capable of processing hundreds of concurrent community interactions effortlessly." },
    ],
    benefits: [
      "Enables creators and brands to engage 100% of community comments in a personalized manner.",
      "Drastically reduces repetitive manual typing while boosting algorithmic channel engagement.",
      "Maintains brand voice consistency across all published replies 24/7.",
      "Protects brand reputation through intelligent sentiment filtering and review routing.",
    ],
    technologies: ["Node.js", "YouTube Data API", "OpenAI / Claude API", "Webhook Architecture", "JSON Pipelines"],
    gallery: [
      { title: "Visual Automation Canvas", imageSrc: "/images/projects/youtube-automation/youtube-reply.jpg", caption: "5-stage node workflow showing webhook trigger, NLP analysis, and automated dispatch logic." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  "clickup-client-intake": {
    slug: "clickup-client-intake",
    title: "Automated Client Intake & ClickUp Workflow",
    category: "Automation • ClickUp • Business Workflow",
    projectType: "Business Automation",
    tagline: "An automated pipeline that converts client form submissions into organized ClickUp tasks and sends instant client confirmation.",
    heroImage: "/images/projects/clickup-automation/clickup-intake.jpg",
    tags: ["Business Automation", "ClickUp API", "Client Onboarding", "Webhook Integration", "Email Notifications"],
    overview: "A streamlined operational workflow designed to eliminate manual data entry from client onboarding. It automatically captures intake forms, validates project data, populates ClickUp task structures, assigns the right specialist, and confirms receipt.",
    challenge: "Manual client intake processes lead to delayed follow-ups, misplaced project specifications, and disorganized team task assignments.",
    solution: "Engineered an end-to-end webhook automation that instantly processes incoming client submissions, creates formatted ClickUp cards with custom fields, assigns staff based on project category, and sends automated confirmation emails.",
    workflow: [
      { step: 1, title: "Form Submission", description: "Prospect submits client intake form with project scope, budget, and timeline requirements.", badge: "Capture" },
      { step: 2, title: "Validation & Sanitization", description: "Validating contact fields and parsing structured project parameters via webhook.", badge: "Validation" },
      { step: 3, title: "ClickUp Task Creation", description: "Automatically instantiating a structured task card with custom fields, labels, and due dates.", badge: "Task Gen" },
      { step: 4, title: "Smart Team Routing", description: "Assigning the specific team member based on service type and current availability rules.", badge: "Assignment" },
      { step: 5, title: "Customer Acknowledgment", description: "Dispatching a personalized confirmation email verifying receipt and outlining next steps.", badge: "Notification" },
    ],
    features: [
      { title: "Automated Data Ingestion", description: "Zero manual data re-typing between web forms and project management software." },
      { title: "Custom ClickUp Field Mapping", description: "Maps budget, service type, client company, and deadlines into native ClickUp attributes." },
      { title: "Rule-Based Team Assignment", description: "Automatically delegates tasks to web developers, SEO specialists, or designers based on form criteria." },
      { title: "Instant Customer Receipt", description: "Sends immediate, professional confirmation emails with reference IDs to build client confidence." },
      { title: "Audit Trail & Error Handling", description: "Logs all webhook executions with fallback alerts in case of submission irregularities." },
      { title: "Modular Architecture", description: "Easily extensible to integrate with Slack, Google Drive, or billing platforms." },
    ],
    benefits: [
      "Eliminates intake bottlenecks and ensures zero prospective client requests fall through the cracks.",
      "Cuts onboarding friction by establishing immediate task ownership within the team.",
      "Delivers instant professional communication to clients within seconds of form submission.",
      "Saves hours of weekly administrative overhead for project managers and agency owners.",
    ],
    technologies: ["ClickUp REST API", "Webhook Middleware", "Node.js", "Transactional Email", "JSON Schema"],
    gallery: [
      { title: "Client Intake Workflow Diagram", imageSrc: "/images/projects/clickup-automation/clickup-intake.jpg", caption: "Step-by-step operational pipeline connecting web forms, ClickUp task generation, and email dispatch." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  "news-to-reels": {
    slug: "news-to-reels",
    title: "AI News-to-Reels Automation",
    category: "AI • Content Automation • Social Media",
    projectType: "AI Content Automation",
    tagline: "An automated content production workflow designed to monitor trending industry news and format topics into short-form video reels.",
    heroImage: "/images/projects/youtube-automation/youtube-reply.jpg",
    tags: ["AI Content Automation", "News Ingestion", "Short-Form Video", "Script Generation", "Social Workflow"],
    overview: "A specialized content automation pipeline designed to help digital creators and marketing teams capitalize on breaking industry news by automating trend research, script structuring, and storyboard preparation for Instagram Reels and TikTok.",
    challenge: "Creating timely short-form video content around breaking trends is extremely time-intensive, requiring constant news monitoring, scriptwriting, and multi-format adaptations.",
    solution: "Engineered a systematic workflow that aggregates trending industry news feeds, selects high-interest topics with AI, drafts structured video scripts with hook/body/CTA segments, and prepares media assets for creator production.",
    workflow: [
      { step: 1, title: "Trend Ingestion", description: "Automated monitoring of RSS feeds and curated industry news sources.", badge: "Ingestion" },
      { step: 2, title: "Topic Selection", description: "AI evaluates viral potential, relevance, and novelty to select top daily topics.", badge: "Filtering" },
      { step: 3, title: "Script & Hook Structuring", description: "Generates 30-60 second vertical video scripts optimized for audience retention.", badge: "Scripting" },
      { step: 4, title: "Asset Preparation", description: "Compiles on-screen text overlays, caption files, and visual prompt recommendations.", badge: "Formatting" },
      { step: 5, title: "Production Queue", description: "Queues prepared storyboard packages for creator voiceover and multi-platform publishing.", badge: "Publishing" },
    ],
    features: [
      { title: "Automated News Feed Monitoring", description: "Aggregates breaking tech and business headlines across pre-configured trusted sources." },
      { title: "Retention-Focused Script Frameworks", description: "Engineers hooks, concise body points, and clear calls-to-action tailored for short-form video." },
      { title: "Multi-Platform Adaptation", description: "Formats content variations optimized for Instagram Reels, TikTok, and YouTube Shorts." },
      { title: "Caption & Hashtag Generation", description: "Generates SEO-friendly captions, hashtags, and keyword-rich video descriptions." },
      { title: "Creator Review Gate", description: "Maintains editorial quality with a quick approval step prior to final video rendering." },
      { title: "Content Batching Pipeline", description: "Capable of generating a week's worth of trending topic concepts in minutes." },
    ],
    benefits: [
      "Drastically accelerates social media content production cycles around breaking news.",
      "Eliminates creator block by continuously providing structured, trend-backed script packages.",
      "Ensures consistent publishing cadence across short-form video platforms.",
      "Frees up creative teams to focus on high-touch video execution rather than manual research.",
    ],
    technologies: ["AI Language Models", "RSS Ingestion", "Python", "Social Media APIs", "Content Pipelines"],
    gallery: [
      { title: "Content Automation Architecture", imageSrc: "/images/projects/youtube-automation/youtube-reply.jpg", caption: "System architecture showing trending news ingestion, AI script formatting, and video preparation." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  "shopify-post-purchase": {
    slug: "shopify-post-purchase",
    title: "Shopify Post-Purchase Automation",
    category: "Shopify • Email Automation • Ecommerce",
    projectType: "Ecommerce Automation",
    tagline: "An automated post-purchase workflow that triggers personalized customer communication and order follow-ups after checkout.",
    heroImage: "/images/projects/ecommerce/ecommerce-store.jpg",
    tags: ["Shopify Automation", "Email Marketing", "Post-Purchase Experience", "Customer Retention", "Order Triggers"],
    overview: "An automated ecommerce communication system designed to enhance customer retention. It listens for completed Shopify checkout events and triggers timed, personalized post-purchase email sequences including shipping updates, care instructions, and VIP re-engagement.",
    challenge: "Standard ecommerce order confirmation emails are transactional and impersonal, missing critical opportunities to reinforce brand loyalty and reduce post-purchase buyer anxiety.",
    solution: "Engineered a Shopify webhook automation that analyzes customer order history, customizes confirmation copy based on product categories purchased, and schedules relevant follow-up communications.",
    workflow: [
      { step: 1, title: "Shopify Order Webhook", description: "Captures checkout completion event with line items, customer details, and shipping address.", badge: "Trigger" },
      { step: 2, title: "Customer & Order Analysis", description: "Identifies whether customer is first-time or returning, and tags product categories.", badge: "Segmentation" },
      { step: 3, title: "Personalized Content Assembly", description: "Generates tailored email copy with product-specific usage tips and personalized greeting.", badge: "Personalization" },
      { step: 4, title: "Automated Dispatch", description: "Sends high-deliverability transactional email and schedules day-7 review request.", badge: "Delivery" },
    ],
    features: [
      { title: "Real-Time Order Webhooks", description: "Instant trigger activation immediately upon customer payment completion in Shopify." },
      { title: "Dynamic Product Care Guides", description: "Embeds customized instructions tailored specifically to the exact items purchased." },
      { title: "Customer Lifecycle Segmentation", description: "Differentiates messaging between new customers, repeat buyers, and high-value orders." },
      { title: "Automated Feedback Triggers", description: "Schedules post-delivery review requests timed to arrive after expected package transit." },
      { title: "Deliverability Optimization", description: "Lightweight HTML email templates engineered for inbox placement across all email clients." },
      { title: "Analytics & Open Tracking", description: "Tracks delivery, open rates, and follow-up interaction without invasive tracking." },
    ],
    benefits: [
      "Provides immediate reassurance to buyers with clear, personalized order details.",
      "Increases customer lifetime value by encouraging timely repeat engagement.",
      "Reduces customer support inquiries regarding order status and product usage.",
      "Operates fully autonomously in the background without manual intervention.",
    ],
    technologies: ["Shopify Webhooks", "Liquid / HTML Email", "Node.js", "Transactional Mail API", "Klaviyo / ESP"],
    gallery: [
      { title: "Post-Purchase Flow Canvas", imageSrc: "/images/projects/ecommerce/ecommerce-store.jpg", caption: "Ecommerce trigger architecture routing customer purchases into personalized notification sequences." },
    ],
    ctaText: "Have a similar project in mind?"
  }
};
