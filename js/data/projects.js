/**
 * Master Centralized Project & Case Study Store
 * Single Source of Truth for Work Portfolio, Categorized Views & Case Study Dossiers
 *
 * Easy to extend: simply add a new object to PROJECTS_DATA.
 */

export const CATEGORIES = [
  { id: "social-media", label: "Social Media & Growth" },
  { id: "meta-ads", label: "Meta Ads & Performance" },
  { id: "brand-creative", label: "Brand & Creative Strategy" },
  { id: "ai-creative", label: "AI Creative Direction" }
];

export const PROJECTS_DATA = [
  {
    id: "trifit-instagram-growth",
    title: "Instagram Ecosystem Growth & High-Retention Content",
    category: "social-media",
    client: "Trifit Fitness (Agency Client via 4Orbits)",
    industry: "Health, Fitness & Wellness",
    year: "2026",
    role: "Social Media Manager",
    featured: true,
    thumbnail: "assets/images/social-media/trifit-instagram-insights.png",
    images: [
      "assets/images/social-media/trifit-instagram-insights.png",
      "assets/images/social-media/4orbits-post-1.png",
      "assets/images/social-media/4orbits-post-2.png"
    ],
    video: "assets/videos/social-media-reel-1.mp4",
    tags: ["Instagram Growth", "Content Calendar", "Community Management", "Reels"],
    shortDescription: "End-to-end Instagram content management and organic reach scaling for a premier fitness brand, generating 2.1M+ views and driving 54.8% non-follower discovery.",
    description: "Designed a multi-pillar content distribution system combining high-energy trainer reels, educational fitness carousels, and engaging interactive stories to transform stagnant follower numbers into an engaged fitness community.",
    results: [
      { label: "Total Views", value: "2.1M+" },
      { label: "Total Reach", value: "332.7K" },
      { label: "Total Interactions", value: "11.7K" },
      { label: "New Followers", value: "982" },
      { label: "Non-Follower Reach", value: "54.8%" },
      { label: "Content Volume", value: "215/week" }
    ],
    caseStudy: {
      overview: "Comprehensive Instagram brand leadership for Trifit Fitness under 4Orbits agency management. The goal was to establish strong visual authority, break out of existing follower reach loops, and drive gym walk-ins.",
      challenge: "The brand faced low organic reach, inconsistent posting cadences, and content that failed to engage fitness enthusiasts outside their immediate follower circle.",
      strategy: "Implemented a 3-pillar content system: 1) High-energy short-form video reels optimized for the Explore algorithm; 2) Educational carousel breakdowns covering workout routines and nutritional advice; 3) Daily interactive stories with polls and trainer Q&As to boost engagement signals.",
      execution: "Scheduled up to 215 weekly content touchpoints across feed, stories, and reels. Maintained strict color grading, bold typographic hook layouts, and proactive comment community moderation.",
      creativeWork: "Curated multi-slide high-contrast carousels, produced dynamic workout reels with synced audio hooks, and authored value-driven captions with targeted fitness hashtags.",
      results: [
        { label: "Total Views", value: "2.1M+" },
        { label: "Account Reach", value: "332.7K" },
        { label: "Engagement Rate", value: "11.7K interactions" },
        { label: "Explore Discovery", value: "54.8% non-followers" }
      ],
      gallery: [
        "assets/images/social-media/trifit-instagram-insights.png",
        "assets/images/social-media/4orbits-post-1.png",
        "assets/images/social-media/4orbits-post-2.png"
      ],
      additionalInfo: "Metrics verified directly from Meta Business Suite analytics dashboard."
    }
  },
  {
    id: "trifit-meta-ads-leadgen",
    title: "Full-Funnel Meta Ads & Paid Member Acquisition",
    category: "meta-ads",
    client: "Trifit Fitness (Agency Client via 4Orbits)",
    industry: "Health, Fitness & Club Memberships",
    year: "2026",
    role: "Meta Ads Strategist & Performance Lead",
    featured: true,
    thumbnail: "assets/images/meta-ads/trifit-meta-ads-results.png",
    images: [
      "assets/images/meta-ads/trifit-meta-ads-results.png"
    ],
    video: null,
    tags: ["Meta Ads", "Lead Generation", "A/B Testing", "CPL Optimization"],
    shortDescription: "Managed 136+ paid Meta advertising campaigns generating 1,757 qualified membership leads at an exceptional best cost of Rs 118 per lead.",
    description: "Architected segmented paid acquisition funnels across Facebook and Instagram feeds, testing offer hooks, dynamic creative variations, and geo-targeted lookalike audiences to maximize return on ad spend.",
    results: [
      { label: "Ad Campaigns", value: "136+" },
      { label: "Total Leads", value: "1,757" },
      { label: "Impressions", value: "2.1M+" },
      { label: "Best Cost / Lead", value: "Rs 118" },
      { label: "Single Campaign Leads", value: "252" },
      { label: "Ad Spend Managed", value: "Rs 2.2L" }
    ],
    caseStudy: {
      overview: "Direct-response Meta Ads acquisition strategy developed for Trifit Fitness to scale local gym memberships while maintaining strict acquisition cost ceilings.",
      challenge: "High regional competition among premium fitness centers made lead acquisition expensive, with generic ad creative suffering fast ad fatigue and high cost-per-click.",
      strategy: "Structured a segmented TOFU/MOFU/BOFU campaign architecture. Tested instant lead forms versus WhatsApp direct chat conversions, deployed geo-fenced custom audiences within a 5km facility radius, and cycled fresh creative variants weekly.",
      execution: "Launched 136+ targeted campaign sets on Meta Ads Manager. Monitored real-time cost-per-lead thresholds, automatically shifting daily budget allocations toward top-converting ad sets.",
      creativeWork: "High-contrast promotional banners, urgency-driven seasonal discount messaging, facility walkthrough video hooks, and frictionless Meta Instant Forms.",
      results: [
        { label: "Qualified Leads", value: "1,757" },
        { label: "Best CPL", value: "Rs 118 / lead" },
        { label: "Single Campaign Output", value: "252 leads" },
        { label: "Total Impressions", value: "2.1M+" }
      ],
      gallery: [
        "assets/images/meta-ads/trifit-meta-ads-results.png"
      ],
      additionalInfo: "All campaign metrics reflect verified real results from Meta Ads Manager dashboard."
    }
  },
  {
    id: "trifit-facebook-community",
    title: "Facebook Brand Presence & Community Engagement",
    category: "social-media",
    client: "Trifit Fitness (Agency Client via 4Orbits)",
    industry: "Health, Fitness & Wellness",
    year: "2026",
    role: "Social Media Manager",
    featured: false,
    thumbnail: "assets/images/social-media/trifit-facebook-insights.png",
    images: [
      "assets/images/social-media/trifit-facebook-insights.png"
    ],
    video: null,
    tags: ["Facebook Growth", "Community Management", "Organic Reach"],
    shortDescription: "Generated 1.2M Facebook views and 482K unique viewers through consistent editorial programming and community engagement.",
    description: "Expanded the brand's Facebook ecosystem with active member spotlight posts, promotional event broadcasts, and rapid message response workflows.",
    results: [
      { label: "Facebook Views", value: "1.2M" },
      { label: "Unique Viewers", value: "482K" },
      { label: "Interactions", value: "2.3K" },
      { label: "Page Visits", value: "7.7K" },
      { label: "New Followers", value: "214" },
      { label: "Weekly Reach", value: "400K" }
    ],
    caseStudy: {
      overview: "Omnichannel Facebook management aligning organic social interactions with broader brand marketing objectives.",
      challenge: "Facebook page reach was declining due to algorithmic preference for short-form video and high-intent local community discussions.",
      strategy: "Revamped posting schedule to prioritize high-engagement conversational updates, member transformation testimonials, and video clips.",
      execution: "Maintained active community inbox response times under 15 minutes, scheduled scheduled updates during peak regional commute hours, and cross-pollinated content from Instagram.",
      creativeWork: "Branded testimonial banners, schedule announcements, and local wellness community discussion prompts.",
      results: [
        { label: "Total Views", value: "1.2M" },
        { label: "Unique Viewers", value: "482K" },
        { label: "Weekly Reach", value: "400K" },
        { label: "Page Visits", value: "7.7K" }
      ],
      gallery: [
        "assets/images/social-media/trifit-facebook-insights.png"
      ],
      additionalInfo: "Factual insights tracked and extracted from Meta Business Suite."
    }
  },
  {
    id: "technest-brand-ecosystem",
    title: "Omnichannel Brand Strategy & Creative Guidelines",
    category: "brand-creative",
    client: "Technest",
    industry: "Technology & IT Solutions",
    year: "2026",
    role: "Brand Manager",
    featured: true,
    thumbnail: "assets/images/brand-creative/technest-brand-guidelines.jpg",
    images: [
      "assets/images/brand-creative/technest-brand-guidelines.jpg",
      "assets/images/brand-creative/CC1-09.jpg",
      "assets/images/brand-creative/CC1-10.jpg"
    ],
    video: null,
    tags: ["Brand Architecture", "Creative Direction", "Design Systems"],
    shortDescription: "Strategic brand stewardship, visual identity governance, and cohesive multi-channel creative direction for scaling enterprise presence at Technest.",
    description: "Directing the visual identity guidelines, corporate presentation design, and integrated digital marketing systems that define Technest's market positioning.",
    results: [
      { label: "Brand Standards", value: "Unified Guidelines" },
      { label: "Design System", value: "Cross-Platform" },
      { label: "Campaign Results", value: "Active Cycles" }
    ],
    caseStudy: {
      overview: "Ongoing leadership as Brand Manager at Technest, establishing unified brand messaging, visual hierarchy, and full-funnel digital presence.",
      challenge: "Aligning rapid technological service offerings with a clear, authoritative, and recognizable corporate brand identity.",
      strategy: "Developed a comprehensive brand framework governing typography, color systems, digital communication tone, and structured social media pillars.",
      execution: "Governing brand compliance across cross-functional marketing, design, and developer units. Coordinating continuous rollouts of marketing collateral.",
      creativeWork: "Brand book guidelines, corporate stationery, website visual direction, and digital presentation decks.",
      results: [
        { label: "Brand Cohesion", value: "Unified Standards" },
        { label: "Strategic Milestone", value: "Active Deployment" },
        { label: "Campaign Case Studies", value: "Added as Cycles Conclude" }
      ],
      gallery: [
        "assets/images/brand-creative/technest-brand-guidelines.jpg",
        "assets/images/brand-creative/CC1-09.jpg",
        "assets/images/brand-creative/CC1-10.jpg"
      ],
      additionalInfo: "Selected brand initiatives and campaign results will be added as projects are completed. Zero fabricated metrics."
    }
  },
  {
    id: "purevive-wellness-identity",
    title: "Wellness Brand Identity & E-Commerce Concept",
    category: "brand-creative",
    client: "Purevive Wellness / Sylex Studio",
    industry: "Health, E-Commerce & Consumer Goods",
    year: "2026",
    role: "Brand Strategist & Creative Partner",
    featured: false,
    thumbnail: "assets/images/brand-creative/purevive-wellness-packaging.jpg",
    images: [
      "assets/images/brand-creative/purevive-wellness-packaging.jpg",
      "assets/images/brand-creative/CC1-11.jpg",
      "assets/images/brand-creative/CC1-12.jpg"
    ],
    video: null,
    tags: ["Packaging Mockup", "Brand Positioning", "Content Calendar"],
    shortDescription: "Minimalist luxury packaging design concept and 30-day social calendar framework for a direct-to-consumer wellness supplement brand.",
    description: "Crafted an editorial visual identity balancing organic botanical warmth with clinical efficacy, complete with product packaging mockups and promotional launch concepts.",
    results: [
      { label: "Calendar Framework", value: "30-Day Launch Plan" },
      { label: "Packaging System", value: "Luxury Minimalist" },
      { label: "Creative Direction", value: "Editorial Aesthetics" }
    ],
    caseStudy: {
      overview: "Creative partnership to develop a high-converting brand identity for a premium wellness supplement line.",
      challenge: "The crowded wellness supplement sector required an aesthetic that projected pure ingredients and scientific authority without clinical sterility.",
      strategy: "Centered visual direction on warm amber glass packaging, stark sans-serif typography, and natural botanical light play.",
      execution: "Delivered packaging mockups, social media launch calendar templates, and content scripting for short-form UGC video hooks.",
      creativeWork: "Amber dropper bottle packaging renders, matte packaging box designs, and editorial social carousel templates.",
      results: [
        { label: "Asset Turnaround", value: "Complete Launch Kit" },
        { label: "Visual Standard", value: "Premium Editorial" },
        { label: "Social Architecture", value: "30-Day Calendar" }
      ],
      gallery: [
        "assets/images/brand-creative/purevive-wellness-packaging.jpg",
        "assets/images/brand-creative/CC1-11.jpg",
        "assets/images/brand-creative/CC1-12.jpg"
      ],
      additionalInfo: "Developed alongside 30-day structured social media calendar documentation."
    }
  },
  {
    id: "ai-luxury-commercial-concepts",
    title: "AI-Powered Luxury Product Commercial Visuals",
    category: "ai-creative",
    client: "AI Creative Laboratory & Commercial Showcase",
    industry: "Luxury Products & Generative Design",
    year: "2026",
    role: "Creative Technologist",
    featured: true,
    thumbnail: "assets/images/ai-creative/ai-luxury-timepiece-commercial.jpg",
    images: [
      "assets/images/ai-creative/ai-luxury-timepiece-commercial.jpg",
      "assets/images/ai-creative/ai-creative-1.png",
      "assets/images/ai-creative/ai-creative-2.png"
    ],
    video: null,
    tags: ["AI Commercial", "Generative Production", "3D Product Aesthetics"],
    shortDescription: "Leveraging advanced generative image pipelines to craft studio-grade commercial scenes, dramatically reducing 3D studio production lead times.",
    description: "Positioning AI creative production as a supporting superpower to conceptualize hyper-realistic product commercials and advertising visual variations on demand.",
    results: [
      { label: "Production Turnaround", value: "70% Faster" },
      { label: "Visual Standard", value: "Studio CGI Quality" },
      { label: "Exploration Pipeline", value: "Rapid Prototyping" }
    ],
    caseStudy: {
      overview: "Exploration into generative commercial production, testing the limits of AI-assisted visual storytelling for luxury and high-tech physical products.",
      challenge: "Traditional 3D studio rendering and physical commercial photoshoots require weeks of lead time and substantial budget overhead for early-stage concept testing.",
      strategy: "Engineered deterministic prompt architectures and layered rendering techniques to simulate complex studio lighting, refractive materials, and macro product details.",
      execution: "Generated multi-angle product hero shots, combining AI-rendered assets with typographic post-processing and motion editing.",
      creativeWork: "Floating luxury timepiece product visuals, liquid chrome simulations, and futuristic commercial compositions.",
      results: [
        { label: "Concept Velocity", value: "Same-Day Prototypes" },
        { label: "Visual Fidelity", value: "8K Commercial Standard" },
        { label: "Workflow Efficiency", value: "70% Cost Reduction" }
      ],
      gallery: [
        "assets/images/ai-creative/ai-luxury-timepiece-commercial.jpg",
        "assets/images/ai-creative/ai-creative-1.png",
        "assets/images/ai-creative/ai-creative-2.png"
      ],
      additionalInfo: "AI utilized strictly as an advanced creative production tool, supporting core brand strategy."
    }
  },
  {
    id: "ai-beverage-campaign-visuals",
    title: "Generative High-Speed Beverage Advertising",
    category: "ai-creative",
    client: "Consumer Goods Creative Concept",
    industry: "Food & Beverage / Advertising",
    year: "2026",
    role: "Creative Technologist",
    featured: false,
    thumbnail: "assets/images/ai-creative/ai-beverage-dynamic-splash.jpg",
    images: [
      "assets/images/ai-creative/ai-beverage-dynamic-splash.jpg",
      "assets/images/ai-creative/ai-creative-3.png"
    ],
    video: null,
    tags: ["Beverage Ad", "Dynamic Splashes", "AI Creative"],
    shortDescription: "High-energy commercial beverage product concept with crystal fluid splashes and dark cinematic studio lighting generated via AI pipelines.",
    description: "Demonstrating how AI visual workflows can produce dynamic high-speed commercial splash imagery suitable for digital billboards, social campaigns, and print.",
    results: [
      { label: "Visual Realism", value: "High-Speed Dynamic" },
      { label: "Asset Adaptability", value: "Multi-Format" },
      { label: "Creative Variations", value: "Instant Iteration" }
    ],
    caseStudy: {
      overview: "Commercial beverage advertising exploration testing generative synthesis of complex fluid dynamics and packaging textures.",
      challenge: "Capturing high-speed liquid splashes with physical cameras requires specialized phantom cameras, rigs, and extensive retouches.",
      strategy: "Utilized customized prompt parameters specifying fluid viscosity, focal distance, rim lighting, and matte metal surface physics.",
      execution: "Produced high-impact advertising assets optimized for Instagram Stories, Meta video ad overlays, and digital out-of-home mockups.",
      creativeWork: "Matte black beverage can composition with swirling liquid ribbons and floating ice elements.",
      results: [
        { label: "Lighting Control", value: "Studio Edge Rim" },
        { label: "Fluid Realism", value: "Crystal Dynamic" },
        { label: "Deployment", value: "Social & Digital Ads" }
      ],
      gallery: [
        "assets/images/ai-creative/ai-beverage-dynamic-splash.jpg",
        "assets/images/ai-creative/ai-creative-3.png"
      ],
      additionalInfo: "Part of an ongoing creative research initiative in modern digital growth advertising."
    }
  }
];
