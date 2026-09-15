/**
 * Dedicated Meta Ads & Performance Hub Data Store
 * Documented Campaign Frameworks & Verified Acquisition Metrics
 *
 * Source of Truth: Verified 4Orbits / Trifit Agency Performance Data
 */

export const META_ADS_HUB_DATA = {
  header: {
    badge: "04 // Performance Acquisition Hub",
    title: "Meta Ads & Paid Acquisition Performance",
    description: "Architecting full-funnel advertising structures across Facebook and Instagram to scale qualified customer acquisition with disciplined unit economics."
  },

  masterKpis: [
    {
      id: "leads",
      value: 1757,
      suffix: "+",
      prefix: "",
      label: "Qualified Leads Generated",
      sub: "Verified Conversion Output",
      trend: "High-Intent Forms"
    },
    {
      id: "campaigns",
      value: 136,
      suffix: "+",
      prefix: "",
      label: "Active Campaigns Managed",
      sub: "Iterative Testing Sets",
      trend: "Full-Funnel Funnels"
    },
    {
      id: "cpl",
      value: 118,
      suffix: "",
      prefix: "Rs ",
      label: "Best Cost Per Lead",
      sub: "Lowest Acquisition Cost",
      trend: "Optimized Efficiency"
    },
    {
      id: "impressions",
      value: 2.1,
      suffix: "M+",
      prefix: "",
      label: "Targeted Impressions",
      sub: "Across Meta Ad Network",
      trend: "Broad + Custom Lookalikes"
    },
    {
      id: "spend",
      value: 2.2,
      suffix: "L",
      prefix: "Rs ",
      label: "Ad Spend Managed",
      sub: "Controlled Budget Allocation",
      trend: "ROAS Focused"
    },
    {
      id: "top-campaign",
      value: 252,
      suffix: " Leads",
      prefix: "",
      label: "Single Campaign Peak",
      sub: "Top-Performing Ad Set",
      trend: "Highest Volume Run"
    }
  ],

  campaignBreakdowns: [
    {
      id: "trifit-leadgen-alpha",
      name: "Trifit Fitness Membership Acquisition Funnel",
      objective: "Direct Lead Generation (Instant Forms & WhatsApp)",
      platform: "Meta (Instagram Feed, Stories & Facebook Feed)",
      audience: "Geo-targeted radius (5km facility proximity) + Fitness Interests & 1% Lookalikes",
      budgetSpend: "Rs 2.2L Cumulative Spend",
      metrics: {
        leads: "1,757 Leads",
        cpl: "Rs 118 Best CPL",
        impressions: "2.1M+ Impressions",
        campaignCount: "136+ Campaigns",
        topRun: "252 Leads from 1 Campaign"
      },
      creativeStrategy: "Tested dynamic carousel hooks against short-form video gym tour walk-throughs. Deployed value-first urgency copy highlighting complimentary 3-day guest passes.",
      image: "assets/images/meta-ads/trifit-meta-ads-results.png",
      tactics: [
        "A/B split testing of static image creatives vs. dynamic workout video reels.",
        "Conditional lead form questions to filter tire-kickers and ensure sales-team qualification.",
        "Rapid budget shifting to ad sets maintaining CPL under regional benchmark thresholds."
      ],
      verifiedNote: "Verified performance metrics extracted from client Meta Ads Manager account."
    },
    {
      id: "meta-retargeting-framework",
      name: "High-Intent Retargeting & Cart Recovery Architecture",
      objective: "Mid-to-Bottom-of-Funnel Conversion",
      platform: "Meta Ads Network (Instagram Explore, Reels & Messenger)",
      audience: "30-Day Account Engagers, Video Viewers (50%+), and Website Visitors",
      budgetSpend: "Segmented Growth Allocation",
      metrics: {
        focus: "Conversion Lift",
        structure: "Multi-Tier Funnel",
        testing: "Continuous Weekly Sets"
      },
      creativeStrategy: "Social proof carousels with member transformation before/afters, overcoming final hesitations with trainer testimonials and money-back guarantee messaging.",
      image: "assets/images/social-media/4orbits-post-1.png",
      tactics: [
        "Dynamic ad creative delivery matching the user's prior level of brand engagement.",
        "Frequency capping to prevent creative burnout while maintaining top-of-mind brand recall.",
        "Exclusion of recently converted members to protect return on ad spend."
      ],
      verifiedNote: "Playbook deployed across agency client accounts at 4Orbits."
    }
  ]
};
