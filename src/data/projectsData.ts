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
  projectType:
    | "Real Commercial Project"
    | "Independent Project"
    | "Demo Project"
    | "AI Automation"
    | "Business Automation"
    | "AI Content Automation"
    | "Ecommerce Automation"
    | "Concept Project"
    | "Commercial Concept Project";
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
  // ==========================================
  // 1. G&J Equipment (Commercial Web & Creative)
  // ==========================================
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
      { title: "Commercial Print & Billboard Layouts", description: "Large-format trade publication spreads and roadside billboard advertising creative." },
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
      { title: "Dealership Digital Storefront", imageSrc: "/images/projects/gj-equipment/gj-website.jpg", caption: "Heavy machinery inventory showcase with dark luxury aesthetic and quote capture." },
      { title: "Dealership UI & Interactive Filters", imageSrc: "/images/projects/gj-equipment/gj-dealership-web.jpg", caption: "High-resolution desktop interface showcasing equipment categories and specification modal." },
      { title: "Commercial Print & Billboard Ad", imageSrc: "/images/projects/gj-equipment/gj-equipment-ad.jpg", caption: "High-impact commercial billboard and magazine advertising spread." },
      { title: "Social & Digital Campaign Creatives", imageSrc: "/images/creative/gj-creative.jpg", caption: "Multi-channel advertising banners and promotional social creatives." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  // ==========================================
  // 2. IronPeak Machinery (Graphic Design Concept)
  // ==========================================
  "ironpeak-machinery": {
    slug: "ironpeak-machinery",
    title: "IronPeak Machinery — Heavy Equipment Brand Campaign & Spec Sheets",
    category: "Graphic Design • Brand Identity • Commercial Advertising",
    projectType: "Concept Project",
    tagline: "An industrial brand identity and multi-touchpoint advertising campaign for rugged earthmoving machinery.",
    heroImage: "/images/projects/ironpeak/ironpeak-cover.jpg",
    tags: ["Graphic Design", "Brand Identity", "Industrial Advertising", "Technical Catalog", "Billboard Design"],
    overview: "IronPeak Machinery is an independent commercial concept exploring heavy equipment visual branding. The project encompasses large-format billboard advertising, technical specification catalogs, and cross-channel digital marketing assets built around rugged durability and raw mechanical precision.",
    challenge: "Heavy equipment marketing frequently relies on dry, cluttered spec sheets or generic stock photography that fail to project power, engineering precision, or premium commercial reliability.",
    solution: "Developed a commanding visual system utilizing high-contrast industrial typography ('BUILT FOR THE UNYIELDING'), dark-charcoal palettes with safety-hazard amber accents, isometric technical schematics, and high-impact commercial print collateral.",
    workflow: [
      { step: 1, title: "Brand Strategy & Tone", description: "Defining core identity pillars: industrial endurance, unyielding capability, and mechanical precision.", badge: "Strategy" },
      { step: 2, title: "Schematic Architecture", description: "Designing structured technical data grids for hydraulic pressure, horsepower, and operating weights.", badge: "Layout" },
      { step: 3, title: "Large-Format Advertising", description: "Composing bold roadside billboard spreads and heavy construction journal print advertisements.", badge: "Out of Home" },
      { step: 4, title: "Multi-Channel Digital Suite", description: "Adapting hero key visuals across Instagram squares, web leaderboards, and mobile ad units.", badge: "Digital Ads" },
    ],
    features: [
      { title: "High-Impact Industrial Typography", description: "Bold, condensed typographic hierarchy tailored for maximum legibility at high speeds and large distances." },
      { title: "Technical Spec Sheet & Flyer Design", description: "Double-sided engineering flyer with isometric mechanical schematics and payload performance tables." },
      { title: "Roadside Billboard & OOH Advertising", description: "14x48 commercial billboard creative engineered for commanding highway visibility." },
      { title: "Omni-Channel Campaign Matrix", description: "Unified campaign system adapted seamlessly across 1:1, 16:9, and vertical mobile formats." },
      { title: "Custom Emblem & Monogram", description: "Geometric chisel-cut brand emblem evoking mountain peaks and hardened excavator teeth." },
      { title: "Print-Ready Prepress Specifications", description: "Full CMYK separation, rich blacks, vector line-art, and 300+ DPI high-resolution output files." },
    ],
    benefits: [
      "Projects formidable equipment strength and engineering credibility to commercial contractors.",
      "Translates dense engineering data into clear, legible specification hierarchies.",
      "Ensures seamless visual coherence across physical billboards, equipment wraps, and digital feeds.",
      "Elevates heavy machinery marketing above typical commodity dealer advertising.",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Print Prepress", "Typography", "Color Theory"],
    gallery: [
      { title: "Flagship Commercial Billboard", imageSrc: "/images/projects/ironpeak/ironpeak-cover.jpg", caption: "Heavy-duty crawler billboard campaign with unyielding industrial typography and high-impact art direction." },
      { title: "Technical Spec Sheet & Flyer", imageSrc: "/images/projects/ironpeak/ironpeak-specs.jpg", caption: "Double-sided engineering flyer detailing hydraulic pressures, payload limits, and isometric diagrams." },
      { title: "Omni-Channel Campaign Matrix", imageSrc: "/images/projects/ironpeak/ironpeak-banner.jpg", caption: "Multi-platform advertising kit showing billboard, Instagram square, and web display formats." },
    ],
    ctaText: "Need high-impact commercial branding or creative?"
  },

  // ==========================================
  // 3. AuraSkin (Graphic Design Concept)
  // ==========================================
  "auraskin": {
    slug: "auraskin",
    title: "AuraSkin — Clinical Skincare Packaging & Editorial Brand System",
    category: "Graphic Design • Brand Identity • Packaging Design",
    projectType: "Concept Project",
    tagline: "A clean, clinical skincare brand identity uniting apothecary amber dropper bottles with high-fashion editorial typography.",
    heroImage: "/images/projects/auraskin/auraskin-cover.jpg",
    tags: ["Graphic Design", "Branding", "Packaging Design", "Editorial Layout", "Cosmetic Identity"],
    overview: "AuraSkin is a comprehensive brand identity and packaging concept developed for a premium clinical derm-cosmetics line. It merges medical precision with luxury skincare aesthetics across amber glass bottles, box packaging, and editorial marketing spreads.",
    challenge: "Clinical skincare branding often tilts either excessively clinical and sterile, or overly ornate and devoid of scientific credibility.",
    solution: "Formulated a balanced visual system with minimalist serif typography, scientific percentage badges (e.g. 15% Vitamin C + Ferulic Acid), warm amber glass bottles with matte-black droppers, and high-editorial whitespace.",
    workflow: [
      { step: 1, title: "Aesthetic Benchmarking", description: "Auditing luxury dermatology packaging to determine optimum typography and apothecary bottle cues.", badge: "Research" },
      { step: 2, title: "Bottle Dieline & Labeling", description: "Designing primary waterproof amber dropper labels with ingredient taxonomy and foil stamping.", badge: "Packaging" },
      { step: 3, title: "Outer Box Carton Design", description: "Constructing secondary outer carton packaging with clinical efficacy disclaimers and embossed logos.", badge: "Dieline" },
      { step: 4, title: "Editorial Spread & Ads", description: "Art-directing high-fashion magazine editorial spreads highlighting clinical test outcomes.", badge: "Editorial" },
    ],
    features: [
      { title: "Minimalist Apothecary Packaging Suite", description: "Amber glass bottle labels featuring clean geometric typography and gold foil stamp accents." },
      { title: "Precise Ingredient Taxonomy", description: "Structured percentage callouts ensuring key actives are immediately identifiable to consumers." },
      { title: "High-Fashion Editorial Layouts", description: "Magazine spreads utilizing generous negative space, refined serifs, and macro botanical imagery." },
      { title: "Embossed Foil & Matte Finishes", description: "Print specifications detailed for soft-touch box varnishes and hot-stamped gold typography." },
      { title: "Cohesive Color System", description: "Warm apothecary amber, muted cream, and deep volcanic charcoal forming a serene luxury palette." },
      { title: "Digital Campaign Assets", description: "Ready-to-deploy social media product reveal carousels and ecommerce banner sets." },
    ],
    benefits: [
      "Conveys potent medical-grade formulation without sacrificing luxury bathroom counter aesthetics.",
      "Enhances retail shelf standout through distinct amber bottle contrast.",
      "Simplifies ingredient transparency for discerning cosmetic buyers.",
      "Delivers scalable packaging templates ready for multi-SKU product line expansions.",
    ],
    technologies: ["Adobe InDesign", "Photoshop", "Illustrator", "Packaging Dielines", "Brand Strategy"],
    gallery: [
      { title: "Primary Packaging & Dropper Bottle", imageSrc: "/images/projects/auraskin/auraskin-cover.jpg", caption: "Luxury amber dropper bottle with clinical typography, foil accents, and botanical formulation background." },
      { title: "Editorial Spread & Clinical Claims", imageSrc: "/images/projects/auraskin/auraskin-editorial.svg", caption: "High-fashion magazine editorial spread displaying clinical efficacy metrics and secondary box dieline." },
    ],
    ctaText: "Looking to elevate your packaging or brand identity?"
  },

  // ==========================================
  // 4. Ember Coffee Roasters (Graphic Design Concept)
  // ==========================================
  "ember-coffee": {
    slug: "ember-coffee",
    title: "Ember Coffee Roasters — Artisan Packaging & Visual Identity",
    category: "Graphic Design • Brand Identity • Packaging Design",
    projectType: "Concept Project",
    tagline: "A warm, copper-accented specialty coffee brand identity featuring matte craft bags and cafe collateral.",
    heroImage: "/images/projects/ember-coffee/ember-coffee-cover.svg",
    tags: ["Graphic Design", "Packaging", "Artisan Coffee", "Brand Identity", "Print Collateral"],
    overview: "Ember Coffee Roasters is an artisan roastery brand concept celebrating small-batch roasting and origin transparency. The visual language utilizes dark matte charcoal bags, metallic copper foil lettering, and elevation/tasting-notes badges.",
    challenge: "Specialty coffee shelves are intensely crowded, requiring instant differentiation between roasts while communicating complex origin, altitude, and flavor profiles legibly.",
    solution: "Designed a cohesive brand system pairing deep volcanic charcoal tones with warm copper hot-stamping, structured sensory radar charts, reusable tin labels, and cafe takeout collateral.",
    workflow: [
      { step: 1, title: "Roastery Identity & Monogram", description: "Crafting flame-inspired geometric emblem and artisan copper typographic wordmark.", badge: "Identity" },
      { step: 2, title: "Craft Bag Dielines", description: "Designing matte black valve pouch packaging with copper foil stamping and tear-notch layout.", badge: "Dieline" },
      { step: 3, title: "Origin Badge Taxonomy", description: "Developing modular label stickers detailing roast level, elevation, processing method, and notes.", badge: "Taxonomy" },
      { step: 4, title: "Cafe Ephemera & Collateral", description: "Extending visual language to eco-friendly takeaway cups, kraft menu boards, and loyalty cards.", badge: "Collateral" },
    ],
    features: [
      { title: "Matte Black Craft Bag Packaging", description: "Tactile valve pouch with metallic copper foil hot-stamping and batch number hand-stamps." },
      { title: "Flavor Notes & Altitude Taxonomy", description: "Instant visual cues highlighting notes of dark cacao, candied orange, and toasted hazelnut." },
      { title: "Single-Origin & Blend Architecture", description: "Color-coded accent labels differentiating light, medium, and espresso roast profiles." },
      { title: "Eco-Friendly Cafe Takeaway Cups", description: "Branded double-wall kraft cups featuring the signature Ember copper monogram seal." },
      { title: "In-Store Chalkboard & Menu Layouts", description: "Clean typographic menu hierarchy designed for fast customer ordering flow." },
      { title: "Comprehensive Brand Guidelines", description: "Complete brand guidelines covering logo clear-space, print color codes, and foil stamping." },
    ],
    benefits: [
      "Commands premium artisanal pricing through luxury tactile packaging aesthetics.",
      "Helps coffee enthusiasts instantly navigate origin regions and tasting profiles.",
      "Creates an unforgettable retail unboxing and in-cafe customer experience.",
      "Modular label architecture supports rapid seasonal bean rollouts with minimal cost.",
    ],
    technologies: ["Packaging Design", "Vector Illustration", "Adobe Illustrator", "Print Collateral", "Typography"],
    gallery: [
      { title: "Artisan Coffee Bag Packaging", imageSrc: "/images/projects/ember-coffee/ember-coffee-cover.svg", caption: "Matte black valve pouch with metallic copper foil branding, roast date stamp, and flavor notes." },
      { title: "Complete Brand Identity System", imageSrc: "/images/projects/ember-coffee/ember-coffee-identity.svg", caption: "Brand logo variations, color palette, custom iconography, and branded takeaway cup collateral." },
    ],
    ctaText: "Ready to launch an artisanal brand or packaging suite?"
  },

  // ==========================================
  // 5. NovaSound (Graphic Design Concept)
  // ==========================================
  "novasound": {
    slug: "novasound",
    title: "NovaSound — High-Fidelity Audio Campaign & Exploded Tech Specs",
    category: "Graphic Design • Consumer Electronics • Advertising",
    projectType: "Concept Project",
    tagline: "An audiophile electronics advertising suite featuring acoustic chamber cutaways and launch graphics.",
    heroImage: "/images/projects/novasound/novasound-cover.svg",
    tags: ["Graphic Design", "Consumer Electronics", "Advertising Campaign", "Infographic Design", "Tech Marketing"],
    overview: "NovaSound is an audio lifestyle brand concept focusing on studio-grade wireless acoustics. The creative package combines futuristic neon-cyan and deep obsidian aesthetics with detailed engineering infographics illustrating 40mm beryllium drivers and hybrid active noise cancellation.",
    challenge: "Consumer tech advertising often resorts to superficial lifestyle photography that fails to justify premium pricing or communicate real acoustic engineering advantages.",
    solution: "Crafted a multi-tier visual campaign combining dramatic edge-lit product hero visuals, clean acoustic frequency curve charts, exploded hardware cutaways, and digital billboard layouts.",
    workflow: [
      { step: 1, title: "Acoustic Concept & Moodboard", description: "Establishing obsidian dark aesthetic with electric cyan laser glows and sci-fi minimalism.", badge: "Moodboard" },
      { step: 2, title: "Acoustic Cutaway Infographic", description: "Illustrating exploded ear-cup assembly: memory foam, driver diaphragm, acoustic chamber, and ANC mic.", badge: "Schematic" },
      { step: 3, title: "Frequency Response Data Vis", description: "Visualizing 20Hz-40kHz linear sound curve demonstrating studio-reference fidelity.", badge: "Data Viz" },
      { step: 4, title: "Global Launch Billboard Campaign", description: "Composing large-format digital out-of-home advertising layouts for flagship urban centers.", badge: "Launch Ads" },
    ],
    features: [
      { title: "High-Contrast Obsidian & Cyan Art Direction", description: "Sleek dark-mode aesthetic engineered for high visual punch on OLED displays and city billboards." },
      { title: "Exploded Driver & Acoustic Chamber Infographics", description: "Detailed 2D engineering schematic showing beryllium drivers and hybrid cancellation mics." },
      { title: "Audiophile Frequency Curve Visualization", description: "Clear, scientific visualization of acoustic response curves that build tech authority." },
      { title: "High-Impact Digital Billboard & Display Ads", description: "Compelling product launch creatives formatted for 4K digital billboard displays." },
      { title: "Feature Spotlight Social Carousels", description: "Swipeable social media infographics breaking down latency, Bluetooth 5.4, and battery specs." },
      { title: "Flagship Retail Packaging Sleeve", description: "Premium outer box sleeve with spot UV gloss varnish on headphone contours." },
    ],
    benefits: [
      "Visually validates audiophile engineering to justify premium flagship tiering.",
      "Demystifies complex acoustic concepts through intuitive graphic storytelling.",
      "Drives high ad click-through rates via dramatic edge lighting and contrast.",
      "Establishes a distinct modern identity in the competitive personal audio sector.",
    ],
    technologies: ["Adobe Photoshop", "Illustrator", "Infographic Design", "Digital Marketing", "Art Direction"],
    gallery: [
      { title: "Flagship Headphone Launch Ad", imageSrc: "/images/projects/novasound/novasound-cover.svg", caption: "Dramatic dark-room hero creative showcasing beryllium drivers, hybrid ANC, and futuristic typography." },
      { title: "Exploded Driver & Frequency Specs", imageSrc: "/images/projects/novasound/novasound-specs.svg", caption: "Technical engineering infographic breaking down the acoustic chamber layers and frequency response." },
    ],
    ctaText: "Need high-impact advertising or tech infographics?"
  },

  // ==========================================
  // 6. Northline Realty (Graphic Design Concept)
  // ==========================================
  "northline-realty": {
    slug: "northline-realty",
    title: "Northline Realty — High-End Architectural Real Estate Identity",
    category: "Graphic Design • Brand Identity • Luxury Print",
    projectType: "Concept Project",
    tagline: "A refined visual identity and editorial print system for an ultra-luxury modern architectural brokerage.",
    heroImage: "/images/projects/northline/northline-cover.svg",
    tags: ["Graphic Design", "Brand Identity", "Luxury Real Estate", "Editorial Print", "Architectural Marketing"],
    overview: "Northline Realty is a bespoke brand identity and print collateral concept designed for luxury architectural properties and premier residential developments. The system emphasizes timeless serif typography, deep forest green and champagne gold accents, and architectural floor plan monographs.",
    challenge: "Luxury real estate marketing is frequently saturated with generic blue signage, cluttered listing flyers, and disorganized property brochures that undervalue multi-million-dollar estates.",
    solution: "Established an understated editorial aesthetic inspired by architectural monographs, featuring structured floor plan presentations, foil-stamped property pitch decks, VIP private viewing invitations, and minimalist digital listings.",
    workflow: [
      { step: 1, title: "Architectural Brand Strategy", description: "Positioning the brokerage around rare modern architecture, discretion, and timeless luxury.", badge: "Strategy" },
      { step: 2, title: "Property Monograph Design", description: "Creating editorial hardcover brochure templates with architectural floor plans and materials palette.", badge: "Editorial" },
      { step: 3, title: "VIP Private Showing Ephemera", description: "Designing heavy-stock foil-stamped invitations and embossed estate presentation folders.", badge: "Print Luxury" },
      { step: 4, title: "Signage & Digital Portals", description: "Architectural metal lawn sign design and digital showcase guidelines for trophy listings.", badge: "Signage & Web" },
    ],
    features: [
      { title: "Timeless Monogram & Typography System", description: "Custom geometric monogram paired with classic serif typography evoking heritage institutions." },
      { title: "Hardcover Property Monograph Layouts", description: "Editorial print spreads with architectural photography, material callouts, and acreage specs." },
      { title: "Architectural Floor Plan Insets", description: "High-precision vector floor plans with room square footage and circulation paths." },
      { title: "Champagne Gold Foil VIP Invitations", description: "Heavyweight cotton stock cards designed for exclusive private estate viewings." },
      { title: "Architectural Yard Signage System", description: "Minimalist black-steel frame signage with refined gold typography and discrete QR codes." },
      { title: "Turnkey Agent Listing Templates", description: "Modular InDesign layouts allowing agents to compile bespoke pitch decks in minutes." },
    ],
    benefits: [
      "Reflects the true architectural caliber of trophy estate properties.",
      "Elevates broker prestige during high-stakes seller listing presentations.",
      "Leaves an indelible physical impression with affluent international buyers.",
      "Provides agent teams with turnkey, high-consistency publication templates.",
    ],
    technologies: ["Adobe InDesign", "Illustrator", "Print Production", "Luxury Typography", "Brand Systems"],
    gallery: [
      { title: "Architectural Monograph & Brochure", imageSrc: "/images/projects/northline/northline-cover.svg", caption: "Refined hardcover property monograph featuring deep forest green, champagne gold accents, and photography." },
      { title: "VIP Invitations & Identity Collateral", imageSrc: "/images/projects/northline/northline-cards.svg", caption: "Foil-stamped VIP viewing invitation suite, business card system, and floor plan spec sheets." },
    ],
    ctaText: "Designing an ultra-luxury brand identity or monograph?"
  },

  // ==========================================
  // 7. Apex Auto Services (Graphic Design Concept)
  // ==========================================
  "apex-auto": {
    slug: "apex-auto",
    title: "Apex Auto Services — High-Performance Motorsport Branding & Service Collateral",
    category: "Graphic Design • Brand Identity • Print Collateral",
    projectType: "Concept Project",
    tagline: "A high-octane visual identity and technical service collateral suite for a precision automotive performance center.",
    heroImage: "/images/projects/apex-auto/apex-auto-cover.svg",
    tags: ["Graphic Design", "Brand Identity", "Motorsport", "Automotive Collateral", "Service Menu Design"],
    overview: "Apex Auto Services is a dynamic brand identity and print collateral concept crafted for an elite automotive tuning, dyno calibration, and track-prep workshop. The identity features aggressive angled racing stripes, vibrant motorsport yellow against carbon darks, and technical dyno-spec service menus.",
    challenge: "Automotive repair shops routinely suffer from dated, low-resolution branding, oily handwritten paperwork, and confusing pricing sheets that undermine customer trust.",
    solution: "Developed a high-velocity visual identity featuring a speed-tailored monogram, weather-resistant service order forms, transparent tiered performance packages, dyno power chart handouts, and large shop bay signage.",
    workflow: [
      { step: 1, title: "Motorsport Brand Positioning", description: "Channeling GT racing aesthetics: aggressive apex angles, racing yellow accents, and carbon textures.", badge: "Branding" },
      { step: 2, title: "Tiered Performance Menus", description: "Structuring Stage 1, Stage 2, and Track Prep packages into clean, transparent service menus.", badge: "Collateral" },
      { step: 3, title: "Dyno & Inspection Forms", description: "Designing official horsepower dyno certification sheets and vehicle inspection checklists.", badge: "Forms" },
      { step: 4, title: "Bay Signage & Apparel", description: "Developing workshop entrance signage, service bay markers, and technician apparel.", badge: "Environment" },
    ],
    features: [
      { title: "High-Octane Motorsport Visual Identity", description: "Carbon dark and electric racing yellow color palette built to convey speed and mechanical precision." },
      { title: "Performance Service Menu & Pricing Flyers", description: "Clear, itemized pricing tiers for ECU tuning, suspension corner-balancing, and brake upgrades." },
      { title: "Dyno Power Certification Templates", description: "Official horsepower and torque printouts featuring dyno curve plots and technician sign-offs." },
      { title: "Multi-Point Track-Prep Checklist", description: "Standardized inspection sheets covering brake fluid boiling points, tire pressures, and torque specs." },
      { title: "Workshop Facia & Service Bay Signage", description: "High-visibility industrial bay numbering and safety warning graphics for the workshop floor." },
      { title: "Fleet Vehicle Wrap & Merchandising", description: "Striking vehicle livery vector layouts for track support trucks and team apparel." },
    ],
    benefits: [
      "Inspires instant owner confidence for high-value sports cars and exotics.",
      "Eliminates invoice ambiguity with clear, itemized performance tiers.",
      "Bridges the gap between grassroots track racing culture and commercial professionalism.",
      "Boosts repeat shop visits through structured inspection record cards.",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Signage Design", "Print Finishing", "Brand Identity"],
    gallery: [
      { title: "Performance Shop Poster & Identity", imageSrc: "/images/projects/apex-auto/apex-auto-cover.svg", caption: "High-octane workshop poster featuring carbon fiber textures, racing yellow badges, and dyno tuning graphics." },
      { title: "Service Package Menu & Dyno Flyer", imageSrc: "/images/projects/apex-auto/apex-auto-menu.svg", caption: "Technical performance service menu detailing Stage 1-3 tuning, track prep checklists, and pricing tiers." },
    ],
    ctaText: "Ready to overhaul your automotive brand or collateral?"
  },

  // ==========================================
  // 8. LeadForge AI (AI SaaS Platform)
  // ==========================================
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
      { title: "WebIntel AI Visitor Intent Engine", imageSrc: "/images/projects/leadforge/leadforge-webintel.svg", caption: "Real-time telemetry architecture capturing enterprise visitor interactions and generating intent scores." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  // ==========================================
  // 9. Ecommerce Store Platform (Web Dev)
  // ==========================================
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
      { title: "Product Detail & Frictionless Cart", imageSrc: "/images/projects/ecommerce/ecommerce-pdp.svg", caption: "Luxury product detail page featuring instant variant selection, customer reviews, and slide-out cart." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  // ==========================================
  // 10. Business Management Dashboard (Web App)
  // ==========================================
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
      { title: "Operations Telemetry & Sprint Board", imageSrc: "/images/projects/dashboard/business-operations.svg", caption: "Executive cockpit featuring monthly revenue trajectories, team workload distribution, and live project status." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  // ==========================================
  // 11. YouTube Comment Automation (AI Automation)
  // ==========================================
  "youtube-comment-automation": {
    slug: "youtube-comment-automation",
    title: "AI YouTube Comment Reply Automation",
    category: "AI Automation • YouTube",
    projectType: "AI Automation",
    tagline: "An automated intelligence workflow that analyzes YouTube comments in context and generates natural, brand-consistent replies.",
    heroImage: "/images/projects/youtube-automation/youtube-architecture.svg",
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
      { title: "YouTube Community AI Automation Pipeline", imageSrc: "/images/projects/youtube-automation/youtube-architecture.svg", caption: "End-to-end architecture diagram detailing webhook ingest, NLP intent classification, and automated reply dispatch." },
      { title: "Visual Automation Canvas", imageSrc: "/images/projects/youtube-automation/youtube-reply.jpg", caption: "5-stage node workflow showing webhook trigger, NLP analysis, and automated dispatch logic." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  // ==========================================
  // 12. ClickUp Client Intake (Business Automation)
  // ==========================================
  "clickup-client-intake": {
    slug: "clickup-client-intake",
    title: "Automated Client Intake & ClickUp Workflow",
    category: "Automation • ClickUp • Business Workflow",
    projectType: "Business Automation",
    tagline: "An automated pipeline that converts client form submissions into organized ClickUp tasks and sends instant client confirmation.",
    heroImage: "/images/projects/clickup-automation/clickup-mapping.svg",
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
      { title: "ClickUp Enterprise Intake & Dispatch Workflow", imageSrc: "/images/projects/clickup-automation/clickup-mapping.svg", caption: "Structured brief ingestion, custom field mapping, team member capacity allocation, and Slack alerts." },
      { title: "Client Intake Workflow Diagram", imageSrc: "/images/projects/clickup-automation/clickup-intake.jpg", caption: "Step-by-step operational pipeline connecting web forms, ClickUp task generation, and email dispatch." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  // ==========================================
  // 13. News-to-Reels Automation (AI Content Automation)
  // ==========================================
  "news-to-reels": {
    slug: "news-to-reels",
    title: "AI News-to-Reels Automation",
    category: "AI • Content Automation • Social Media",
    projectType: "AI Content Automation",
    tagline: "An automated content production workflow designed to monitor trending industry news and format topics into short-form video reels.",
    heroImage: "/images/projects/news-reels/news-reels-pipeline.svg",
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
      { title: "Automated News-to-Reels Rendering Pipeline", imageSrc: "/images/projects/news-reels/news-reels-pipeline.svg", caption: "Autonomous RSS wire monitoring, ElevenLabs neural voiceover synthesis, and dynamic 9:16 video generation." },
      { title: "Content Automation Architecture", imageSrc: "/images/projects/news-reels/news-to-reels.jpg", caption: "System architecture showing trending news ingestion, AI script formatting, and video preparation." },
    ],
    ctaText: "Have a similar project in mind?"
  },

  // ==========================================
  // 14. Shopify Post-Purchase Automation (Ecommerce Automation)
  // ==========================================
  "shopify-post-purchase": {
    slug: "shopify-post-purchase",
    title: "Shopify Post-Purchase Automation",
    category: "Shopify • Email Automation • Ecommerce",
    projectType: "Ecommerce Automation",
    tagline: "An automated post-purchase workflow that triggers personalized customer communication and order follow-ups after checkout.",
    heroImage: "/images/projects/shopify-automation/shopify-post-purchase-email.svg",
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
      { title: "Shopify Post-Purchase Retention Pipeline", imageSrc: "/images/projects/shopify-automation/shopify-post-purchase-email.svg", caption: "Order fulfillment webhook trigger, predictive cross-sell matching, and high-converting transactional email design." },
      { title: "Post-Purchase Flow Canvas", imageSrc: "/images/projects/shopify-automation/shopify-post-purchase.jpg", caption: "Ecommerce trigger architecture routing customer purchases into personalized notification sequences." },
    ],
    ctaText: "Have a similar project in mind?"
  }
};
