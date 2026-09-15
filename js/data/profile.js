/**
 * Centralized Profile, Core Competencies, Services & Contact Configuration
 * Single Source of Truth for Aashir Ahmed's Portfolio
 */

export const PROFILE_DATA = {
  name: "Aashir Ahmed",
  role: "Brand Manager",
  currentCompany: "Technest",
  period: "2026 – Present",
  primaryPositioning: "Brand Manager · Social Media Strategist · Digital Growth",
  tagline: "Building distinctive brands, high-performing Meta ad campaigns, and scalable social media ecosystems.",
  location: "Karachi, Pakistan",
  profilePhoto: "assets/images/profile/profile-pic.png",

  hero: {
    eyebrow: "Brand Manager @ Technest · Performance Marketing & Social Growth",
    headlineStart: "Guiding brand identity &",
    headlineAccent: "high-performing growth campaigns.",
    leadText: "Leading brand identity, multi-platform social strategy, and paid Meta advertising at Technest. I help businesses build authoritative market presence, engage loyal communities, and drive measurable revenue through data-backed marketing.",
    stats: [
      { value: "4+", label: "Years Experience", sub: "Brand & Growth Leadership" },
      { value: "2.1M+", label: "Views Generated", sub: "Organic & Paid Reach" },
      { value: "1,757", label: "Qualified Leads", sub: "Meta Ads Performance" },
      { value: "136+", label: "Ad Campaigns", sub: "Full-Funnel Testing" }
    ],
    curatedPills: [
      { label: "Current Role", value: "Brand Manager @ Technest", sub: "2026 – Present" },
      { label: "Core Verticals", value: "Brand, Social Media & Meta Ads", sub: "Full-Funnel Strategy" },
      { label: "Track Record", value: "1,750+ Leads · 2.1M+ Views", sub: "Verified Campaign Data" }
    ]
  },

  about: {
    badge: "01 // About Me",
    heading: "Where brand storytelling meets performance marketing.",
    lead: "I don't separate brand identity from performance marketing. A strong visual identity establishes credibility, while disciplined paid acquisition and engaging social content turn attention into loyal customers and revenue.",
    narrative: [
      "Currently serving as <strong>Brand Manager at Technest (2026 – Present)</strong>, my focus is on steering corporate brand identity, scaling social media operations, and managing targeted Meta advertising campaigns.",
      "Previously at <strong>4Orbits</strong>, I directed social media growth and Meta Ads for premier clients including Trifit Fitness, generating over 1,750 qualified membership leads at Rs 118 best cost-per-lead and accumulating 2.1M+ verified organic views."
    ],
    framework: [
      {
        step: "01",
        title: "Audience & Market Insight",
        desc: "Every creative campaign begins with deep audience research, competitor benchmarking, and understanding customer buying triggers."
      },
      {
        step: "02",
        title: "Full-Funnel Alignment",
        desc: "Connecting organic social content, community engagement, and paid Meta ad funnels into a cohesive, high-converting customer journey."
      },
      {
        step: "03",
        title: "Continuous Optimization",
        desc: "Regular performance reviews across Meta Ads Manager and social analytics to systematically refine creative hooks, audiences, and ad spend."
      }
    ],
    flow: "Research → Brand Direction → Content Creation → Paid Media → Optimization → Revenue"
  },

  competencies: [
    { name: "Brand Architecture & Visual Direction", category: "Brand" },
    { name: "Social Media Strategy & Operations", category: "Social" },
    { name: "Full-Funnel Meta Advertising", category: "Performance" },
    { name: "Content Calendars & Editorial Planning", category: "Content" },
    { name: "Campaign Concepts & Creative Direction", category: "Creative" },
    { name: "Competitive Auditing & Market Research", category: "Strategy" },
    { name: "Performance Analytics & Data Reporting", category: "Growth" },
    { name: "AI-Powered Creative Production", category: "Specialization" }
  ],

  services: [
    {
      number: "01",
      id: "brand-management",
      title: "Brand Management",
      description: "Establishing cohesive brand messaging, visual standards, and digital presence across channels to foster sustained awareness and market leadership."
    },
    {
      number: "02",
      id: "social-media-strategy",
      title: "Social Media Strategy",
      description: "Developing comprehensive multi-platform content calendars, high-impact campaign concepts, and distribution strategies aligned with audience behaviors."
    },
    {
      number: "03",
      id: "social-media-management",
      title: "Social Media Management",
      description: "Overseeing day-to-day Instagram and Facebook operations, production timelines, asset publishing, community engagement, and message workflows."
    },
    {
      number: "04",
      id: "meta-ads",
      title: "Meta Ads & Performance",
      description: "Planning, executing, and refining targeted Meta advertising campaigns with rigorous A/B testing, audience segmentation, and budget optimization."
    },
    {
      number: "05",
      id: "content-strategy",
      title: "Content Strategy",
      description: "Ideating high-retention creative concepts, visual hooks, carousels, and campaign collateral that drive engagement and support business goals."
    },
    {
      number: "06",
      id: "campaign-management",
      title: "Campaign Management",
      description: "Coordinating cross-functional workflows across creative, content, and marketing units from initial concept to live multi-channel distribution."
    },
    {
      number: "07",
      id: "creative-direction",
      title: "Creative Direction",
      description: "Guiding brand aesthetics, visual hierarchy, promotional video formats, and static layouts to maintain an elevated, high-converting identity."
    },
    {
      number: "08",
      id: "digital-growth",
      title: "Digital Growth & Analytics",
      description: "Tracking granular performance metrics across Meta Business Suite and platform analytics, translating data into strategic growth recommendations."
    }
  ],

  contact: {
    heading: "Have a brand, campaign, or growth challenge?",
    accentHeading: "Let's build something enduring.",
    subtext: "Available for strategic brand consulting, campaign orchestration, social media management, and performance marketing discussions.",
    channels: [
      {
        id: "email",
        label: "Email Directly",
        value: "aashir.khan440@gmail.com",
        href: "mailto:aashir.khan440@gmail.com",
        icon: "email",
        actionText: "Send Email"
      },
      {
        id: "whatsapp",
        label: "WhatsApp Business",
        value: "+92 310 2581680",
        href: "https://wa.me/923102581680",
        icon: "whatsapp",
        actionText: "Direct Chat"
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/aashir-ahmed-khan",
        href: "https://www.linkedin.com/in/aashir-ahmed-khan",
        icon: "linkedin",
        actionText: "Connect Profile"
      },
      {
        id: "contra",
        label: "Contra Portfolio",
        value: "contra.com/tijarat_team_pr39bgk7",
        href: "https://contra.com/tijarat_team_pr39bgk7",
        icon: "link",
        actionText: "View Profile"
      }
    ]
  },

  testimonials: [
    {
      id: "test-01",
      quote: "Aashir's strategic execution on our Meta ad funnels was transformative. Scaling 136+ ad campaigns while maintaining an acquisition cost of Rs 118 per qualified lead gave us predictable member growth that our sales team could count on every week.",
      author: "Farhan Siddiqui",
      role: "Managing Director",
      company: "4Orbits Digital Agency",
      project: "Trifit Fitness & Paid Acquisition",
      verified: true,
      initials: "FS"
    },
    {
      id: "test-02",
      quote: "At Technest, Aashir unified our brand architecture and transformed how our technical capabilities are communicated to enterprise clients. He brings both high-level governance and granular attention to visual detail.",
      author: "Zainab Malik",
      role: "Chief Operating Officer",
      company: "Technest",
      project: "Enterprise Brand Architecture",
      verified: true,
      initials: "ZM"
    },
    {
      id: "test-03",
      quote: "Working with Aashir on the Purevive launch gave our brand the editorial poise of an international DTC label. The minimalist packaging renders and the 30-day content calendar were delivered with speed and precision.",
      author: "Hamza Tariq",
      role: "Co-Founder & Creative Director",
      company: "Purevive Wellness / Sylex Studio",
      project: "Packaging & DTC Launch Framework",
      verified: true,
      initials: "HT"
    },
    {
      id: "test-04",
      quote: "In an enterprise retail environment with millions of customer touchpoints, Aashir turned chaotic digital feedback into crystal-clear sentiment reports that directly shaped our promotional campaign messaging.",
      author: "Khurram Shahzad",
      role: "Head of Marketing & Promotions",
      company: "Imtiaz Super Market",
      project: "Retail Marketing & Customer ORM",
      verified: true,
      initials: "KS"
    }
  ],

  resumeData: {
    title: "Executive Curriculum Vitae",
    subtitle: "Brand Manager · Social Media Strategist · Performance Marketer",
    summary: "Dynamic Brand Manager with 4+ years of cross-functional experience directing brand architecture, paid acquisition, and multi-platform content systems. Proven track record managing 136+ Meta Ad campaigns generating 1,757 qualified leads and driving 2.1M+ verified organic views across Pakistan's leading agencies and enterprise retail chains.",
    coreCompetencies: [
      "Brand Architecture & Positioning",
      "Full-Funnel Meta Advertising (ROAS & CPL Optimization)",
      "Multi-Platform Social Strategy (Instagram, Facebook, TikTok)",
      "High-Retention Short-Form Video & Carousel Concepts",
      "Competitive Auditing & Audience Segmentation",
      "Cross-Functional Creative Team Leadership",
      "AI-Assisted Commercial Creative Production",
      "Meta Business Suite & Google Analytics 4 (GA4)"
    ],
    technicalStack: [
      { category: "Advertising & Analytics", tools: ["Meta Ads Manager", "Google Analytics 4", "Meta Business Suite", "Looker Studio"] },
      { category: "Publishing & Operations", tools: ["Hootsuite", "Buffer", "Notion", "Trello", "Slack", "Google Workspace"] },
      { category: "Creative & Production", tools: ["Canva Pro", "CapCut Pro", "Figma", "Adobe Suite (Photoshop)", "Generative AI Pipelines"] }
    ],
    education: [
      {
        degree: "Bachelor of Business Administration (BBA) — Marketing",
        institution: "Karachi, Pakistan",
        period: "2018 – 2022",
        details: "Specialization in Consumer Psychology, Strategic Brand Management, and Digital Marketing Dynamics."
      }
    ],
    certifications: [
      "Meta Certified Digital Marketing Associate",
      "Google Analytics 4 Certification",
      "HubSpot Content Marketing Certified",
      "Advanced Social Media Strategy & Organic Growth"
    ],
    languages: ["English (Professional Working Proficiency)", "Urdu (Native / Bilingual)"]
  },

  roiPresets: {
    industries: [
      { id: "fitness", name: "Fitness & Wellness", cplMultiplier: 1.0, ctrBase: 3.2, convRate: 8.5 },
      { id: "ecommerce", name: "E-Commerce & Retail", cplMultiplier: 0.85, ctrBase: 2.8, convRate: 5.2 },
      { id: "b2b", name: "B2B & Enterprise Tech", cplMultiplier: 2.4, ctrBase: 1.9, convRate: 4.0 },
      { id: "services", name: "Local Professional Services", cplMultiplier: 1.2, ctrBase: 3.0, convRate: 7.0 }
    ],
    funnelPresets: {
      tofu: { percent: 50, label: "Top of Funnel (Brand Reach & Discovery)" },
      mofu: { percent: 30, label: "Middle of Funnel (Engagement & Retargeting)" },
      bofu: { percent: 20, label: "Bottom of Funnel (Direct Lead Capture & Offers)" }
    }
  }
};

