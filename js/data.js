/* ============================================================
   PORTFOLIO DATA
   ------------------------------------------------------------
   This file is the single source of truth for all editable
   content on the site: identity, experience, services, and
   work/case-study entries.

   TO ADD A NEW PROJECT: copy an object inside PROJECTS below,
   give it a new unique "id", fill in the fields, and save.
   No HTML editing required — the site renders this data
   automatically in the Work section and in the case-study modal.
   ============================================================ */

const PROFILE = {
  name: "Aashir Ahmed",
  roles: "Brand Manager · Social Media Strategist · Digital Growth",
  tagline: "I help brands grow with strategy, paid ads, and content that actually converts.",
  location: "Karachi, Pakistan",
  email: "aashir.khan440@gmail.com",
  whatsapp: "https://wa.me/923102581680",
  contra: "https://contra.com/tijarat_team_pr39bgk7",
  photo: "assets/images/profile/aashir-ahmed.png",
};

/* ------------------------------------------------------------
   EXPERIENCE
   Ordered newest first. Each entry supports an optional
   "results" array — omit it entirely if there's nothing to show yet.
------------------------------------------------------------- */
const EXPERIENCE = [
  {
    role: "Brand Manager",
    company: "Technest",
    period: "2026 – Present",
    location: "Karachi",
    type: "Full-time",
    description:
      "Placeholder — role details and responsibilities to be added.",
    bullets: [
      "Placeholder — key responsibilities to be added.",
    ],
    results: null,
  },
  {
    role: "Social Media Manager",
    company: "4Orbits",
    period: "Oct 2025 – Present",
    location: "Karachi",
    type: "Agency",
    description:
      "Managing social media accounts for multiple agency clients across Instagram and Facebook with full ownership of content strategy and paid campaigns.",
    bullets: [
      "Manage and grow social media accounts for multiple clients across Instagram and Facebook",
      "Plan content calendars, develop post and reel ideas, ensure consistent brand presence",
      "Plan and execute Meta Ads campaigns to drive reach, engagement, and lead generation",
      "Handle community management and optimize performance using Meta Business Suite",
    ],
    results: [
      { value: "2.1M+", label: "Instagram Views" },
      { value: "1,757", label: "Leads Generated" },
      { value: "136+", label: "Ad Campaigns" },
    ],
  },
  {
    role: "Social Media Manager",
    company: "Tijarat News",
    period: "Dec 2024 – Sep 2025",
    location: "Karachi",
    type: "Media",
    description:
      "Developed and executed end-to-end social media campaign strategies across Instagram, Facebook, TikTok, and YouTube.",
    bullets: [
      "Developed end-to-end social media campaign strategies across all platforms",
      "Directed content calendar and creative production pipeline",
      "Managed Meta Ads campaigns to boost content reach and audience engagement",
    ],
    results: null,
  },
  {
    role: "Officer — Marketing & Promotion",
    company: "Imtiaz",
    period: "Feb 2022 – Sep 2024",
    location: "Karachi",
    type: "Retail",
    description:
      "Managed brand reputation and promotional campaigns for one of Pakistan's leading retail chains.",
    bullets: [
      "Managed high-volume customer inquiries across multiple channels",
      "Synthesized customer feedback to identify promotional pain points",
      "Provided actionable reports to Marketing and Operations teams",
    ],
    results: null,
  },
  {
    role: "Social Media Executive",
    company: "HM Communication",
    period: "Feb 2021 – Dec 2021",
    location: "Karachi",
    type: "Agency",
    description:
      "Managed content workflow for multiple client brands with consistent delivery and performance tracking.",
    bullets: [
      "Scheduled 40+ posts weekly across 4-5 client channels using Hootsuite & Buffer",
      "Executed Meta Ads boosted posts to increase brand visibility",
      "Managed daily community management and post performance monitoring",
    ],
    results: null,
  },
];

/* ------------------------------------------------------------
   SERVICES
------------------------------------------------------------- */
const SERVICES = [
  {
    icon: "🎯",
    title: "Brand & Social Media Strategy",
    text: "Positioning, content pillars, and growth strategy across Instagram, Facebook & TikTok — built around consistent brand presence.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    text: "Content calendars, community management, analytics reporting, and day-to-day account ownership.",
  },
  {
    icon: "📊",
    title: "Meta Ads Management",
    text: "End-to-end paid advertising on Facebook & Instagram — campaign setup, audience targeting, A/B testing, budget optimization and ROI reporting.",
  },
  {
    icon: "✏️",
    title: "Content & Creative Direction",
    text: "On-brand graphics, reels, captions and hashtag strategy using Canva and CapCut, plus creative direction for campaigns.",
  },
  {
    icon: "🚀",
    title: "Campaign Management",
    text: "Planning and running campaigns end-to-end — from concept through execution, tracking, and iteration.",
  },
  {
    icon: "📈",
    title: "Digital Growth & Analytics",
    text: "In-depth performance tracking using Meta Business Suite, GA4, and Hootsuite. Monthly reports with actionable insights.",
  },
];

/* ------------------------------------------------------------
   WORK / CASE STUDIES
   category must be one of: "social-media" | "meta-ads" | "brand-creative" | "ai-creative"

   Fields:
   - results: array of {value,label} or null if not available yet
   - gallery: array of image paths (use as many real images as you have)
   - video: optional path to a video file for this project
   - challenge / strategy / execution / creativeWork: strings.
     Use "Add details for this project." as a placeholder for
     anything not yet written up — this keeps the case-study
     layout consistent even for incomplete entries.
------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "trifit-instagram",
    title: "Instagram Growth & Content Management",
    category: "social-media",
    client: "Fitness Brand — Agency Client (4Orbits)",
    industry: "Fitness / Wellness",
    role: "Social Media Manager",
    year: "2026",
    tags: ["Instagram", "Content Strategy", "Community Management"],
    thumbnail: "assets/images/social-media/trifit-instagram-insights.png",
    gallery: [
      "assets/images/social-media/trifit-instagram-insights.png",
      "assets/images/social-media/4orbits-post-1.png",
      "assets/images/social-media/4orbits-post-2.png",
    ],
    shortDescription:
      "Full Instagram content ownership for a fitness brand — content calendar, reels, and community growth.",
    challenge:
      "The brand needed consistent, high-quality content to grow their Instagram presence and reach a wider audience beyond existing followers.",
    strategy: "Add details for this project.",
    execution:
      "Managed complete Instagram presence — content calendar, reel creation, story management, hashtag strategy and community engagement.",
    creativeWork: "Add details for this project.",
    results: [
      { value: "2.1M+", label: "Total Views" },
      { value: "332.7K", label: "Reach" },
      { value: "11.7K", label: "Interactions" },
      { value: "982", label: "New Followers" },
      { value: "54.8%", label: "Non-Follower Reach" },
      { value: "215", label: "Content Pieces/Week" },
    ],
  },
  {
    id: "trifit-facebook",
    title: "Facebook Growth & Community Management",
    category: "social-media",
    client: "Fitness Brand — Agency Client (4Orbits)",
    industry: "Fitness / Wellness",
    role: "Social Media Manager",
    year: "2026",
    tags: ["Facebook", "Community Management", "Reporting"],
    thumbnail: "assets/images/social-media/trifit-facebook-insights.png",
    gallery: ["assets/images/social-media/trifit-facebook-insights.png"],
    shortDescription:
      "End-to-end Facebook management — posting, community engagement and performance tracking.",
    challenge:
      "Managing Facebook presence required consistent posting, community engagement and driving page visits and follows.",
    strategy: "Add details for this project.",
    execution:
      "Handled full Facebook management — posts, stories, reels, community replies and performance tracking using Meta Business Suite.",
    creativeWork: "Add details for this project.",
    results: [
      { value: "1.2M", label: "Facebook Views" },
      { value: "482K", label: "Unique Viewers" },
      { value: "2.3K", label: "Interactions" },
      { value: "7.7K", label: "Page Visits" },
      { value: "214", label: "New Followers" },
      { value: "400K", label: "Weekly Reach" },
    ],
  },
  {
    id: "trifit-meta-ads",
    title: "Meta Ads — Lead Generation Campaigns",
    category: "meta-ads",
    client: "Fitness Brand — Agency Client (4Orbits)",
    industry: "Fitness / Wellness",
    role: "Meta Ads Manager",
    year: "2026",
    tags: ["Meta Ads", "Lead Generation", "A/B Testing"],
    thumbnail: "assets/images/meta-ads/trifit-meta-ads-results.png",
    gallery: ["assets/images/meta-ads/trifit-meta-ads-results.png"],
    shortDescription:
      "End-to-end paid lead-generation campaigns with controlled cost-per-lead across multiple objectives.",
    challenge:
      "The brand needed consistent lead flow through paid campaigns with controlled cost per lead across multiple objectives.",
    strategy: "Add details for this project.",
    execution:
      "Managed end-to-end Meta Ads campaigns — audience targeting, A/B testing, budget allocation and performance optimization.",
    creativeWork: "Add details for this project.",
    results: [
      { value: "136+", label: "Campaigns" },
      { value: "1,757", label: "Total Leads" },
      { value: "2.1M+", label: "Impressions" },
      { value: "Rs 118", label: "Best Cost/Lead" },
      { value: "252", label: "Leads (1 campaign)" },
      { value: "Rs 2.2L", label: "Ad Spend Managed" },
    ],
  },
  {
    id: "brand-creative-placeholder",
    title: "Brand & Creative Project — Coming Soon",
    category: "brand-creative",
    client: "TBA",
    industry: "TBA",
    role: "TBA",
    year: "2026",
    tags: ["Placeholder"],
    thumbnail: "assets/images/ai-creative/ai-creative-1.png",
    gallery: [],
    shortDescription:
      "A brand or creative-direction project will be added here.",
    challenge: "Add details for this project.",
    strategy: "Add details for this project.",
    execution: "Add details for this project.",
    creativeWork: "Add details for this project.",
    results: null,
  },
  {
    id: "ai-creative-concepts",
    title: "AI Creative Concepts",
    category: "ai-creative",
    client: "TBA",
    industry: "TBA",
    role: "TBA",
    year: "2026",
    tags: ["AI Creative", "Placeholder"],
    thumbnail: "assets/images/ai-creative/ai-creative-2.png",
    gallery: [
      "assets/images/ai-creative/ai-creative-1.png",
      "assets/images/ai-creative/ai-creative-2.png",
      "assets/images/ai-creative/ai-creative-3.png",
    ],
    shortDescription:
      "AI-assisted creative concepts — full case-study details to be added.",
    challenge: "Add details for this project.",
    strategy: "Add details for this project.",
    execution: "Add details for this project.",
    creativeWork: "Add details for this project.",
    results: null,
  },
];

const CATEGORIES = [
  { key: "all", label: "All Work" },
  { key: "social-media", label: "Social Media Management" },
  { key: "meta-ads", label: "Meta Ads" },
  { key: "brand-creative", label: "Brand & Creative Projects" },
  { key: "ai-creative", label: "AI / Creative Work" },
];
