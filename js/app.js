/**
 * Aashir Ahmed — Master Portfolio Orchestrator
 * Connects centralized data layers with interactive motion, filtering,
 * modal drawers, fullscreen lightbox previews, and predictive ROI tools.
 */

import { PROFILE_DATA } from './data/profile.js';
import { EXPERIENCE_DATA } from './data/experience.js';
import { PROJECTS_DATA, CATEGORIES } from './data/projects.js';
import { META_ADS_HUB_DATA } from './data/metaAds.js';
import { SOCIAL_GALLERY_DATA } from './data/socialGallery.js';

import { initMotion } from './modules/motion.js';
import { initCaseStudyModal, openCaseStudy } from './modules/caseStudyModal.js';
import { initLightbox, openLightbox } from './modules/lightbox.js';
import { initThemeSwitcher } from './modules/themeSwitcher.js';
import { initRoiCalculator } from './modules/roiCalculator.js';
import { initTestimonials } from './modules/testimonials.js';
import { initContactForm } from './modules/contactForm.js';
import { initResumeModal } from './modules/resumeModal.js';
import { initQuickDock } from './modules/quickDock.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme switcher immediately
  initThemeSwitcher();

  // Initialize dynamic content renderers
  renderNavigation();
  renderHero();
  renderAbout();
  renderExperience();
  initProjectsSearchAndFilter();
  renderMetaAdsHub();
  initRoiCalculator();
  renderSocialGallery();
  renderServices();
  initTestimonials();
  renderContact();
  initContactForm();
  renderFooter();

  // Initialize interactive controllers
  initNavigationInteractions();
  initCaseStudyModal();
  initLightbox();
  initResumeModal();
  initQuickDock();
  initMotion();
});

/**
 * Navigation Bar Renderer
 */
function renderNavigation() {
  const brandName = document.getElementById('navBrandName');
  const brandStatus = document.getElementById('navBrandStatus');
  if (brandName) brandName.textContent = PROFILE_DATA.name;
  if (brandStatus) {
    brandStatus.innerHTML = `<span class="status-indicator" aria-hidden="true"></span>${PROFILE_DATA.role} · ${PROFILE_DATA.currentCompany}`;
  }
}

/**
 * Mobile & Desktop Navigation Drawer and active anchor highlighting
 */
function initNavigationInteractions() {
  const menuToggle = document.getElementById('menuToggle');
  const navDrawerOverlay = document.getElementById('navDrawerOverlay');
  const navDrawerClose = document.getElementById('navDrawerClose');
  const navDrawerBackdrop = document.getElementById('navDrawerBackdrop');
  const shortcutLinks = document.querySelectorAll('.nav-shortcut-link');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');

  function openDrawer() {
    if (!navDrawerOverlay) return;
    navDrawerOverlay.classList.add('is-open');
    navDrawerOverlay.setAttribute('aria-hidden', 'false');
    if (menuToggle) {
      menuToggle.classList.add('is-active');
      menuToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    if (!navDrawerOverlay) return;
    navDrawerOverlay.classList.remove('is-open');
    navDrawerOverlay.setAttribute('aria-hidden', 'true');
    if (menuToggle) {
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('drawer-open');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navDrawerOverlay && navDrawerOverlay.classList.contains('is-open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (navDrawerClose) {
    navDrawerClose.addEventListener('click', closeDrawer);
  }

  if (navDrawerBackdrop) {
    navDrawerBackdrop.addEventListener('click', closeDrawer);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawerOverlay && navDrawerOverlay.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Close drawer on link navigation
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Active section tracking on scroll
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = [...shortcutLinks, ...drawerLinks];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 180;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        allNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * Hero Section Renderer
 */
function renderHero() {
  const h = PROFILE_DATA.hero;
  const eyebrowEl = document.getElementById('heroEyebrow');
  const headlineEl = document.getElementById('heroHeadline');
  const leadEl = document.getElementById('heroLead');
  const curatedStripEl = document.getElementById('heroCuratedStrip');
  const statsStripEl = document.getElementById('heroStatsStrip');
  const photoEl = document.getElementById('heroProfileImg');

  if (eyebrowEl) eyebrowEl.textContent = h.eyebrow;
  if (headlineEl) {
    headlineEl.innerHTML = `${h.headlineStart} <span class="serif-accent">${h.headlineAccent}</span>`;
  }
  if (leadEl) leadEl.textContent = h.leadText;

  if (photoEl && PROFILE_DATA.profilePhoto) {
    photoEl.src = PROFILE_DATA.profilePhoto;
    photoEl.alt = `${PROFILE_DATA.name} — ${PROFILE_DATA.role}`;
    photoEl.onerror = () => {
      // Fallback styling if photo cannot load
      photoEl.style.display = 'none';
      const container = photoEl.parentElement;
      if (container) {
        container.classList.add('is-fallback');
        container.innerHTML = `<span class="profile-monogram-fallback">${PROFILE_DATA.name.split(' ').map(n=>n[0]).join('')}</span>`;
      }
    };
  }

  if (curatedStripEl) {
    curatedStripEl.innerHTML = h.curatedPills.map(p => `
      <div class="curated-pill">
        <span class="pill-label">${p.label}</span>
        <span class="pill-value">${p.value}</span>
        <span class="pill-sub">${p.sub}</span>
      </div>
    `).join('');
  }

  if (statsStripEl) {
    statsStripEl.innerHTML = h.stats.map(s => {
      const numMatch = s.value.match(/([\d\.]+)/);
      const targetNum = numMatch ? numMatch[1] : '0';
      const suffix = s.value.replace(targetNum, '');
      const decimals = targetNum.includes('.') ? 1 : 0;

      return `
        <div class="stat-cell reveal-on-scroll">
          <div class="stat-number-wrap">
            <span class="stat-number" 
                  data-counter-target="${targetNum}" 
                  data-counter-suffix="${suffix}" 
                  data-counter-decimals="${decimals}">
              0${suffix}
            </span>
          </div>
          <span class="stat-label">${s.label}</span>
          <span class="stat-sub">${s.sub}</span>
        </div>
      `;
    }).join('');
  }
}

/**
 * About Section Renderer
 */
function renderAbout() {
  const a = PROFILE_DATA.about;
  const badgeEl = document.getElementById('aboutBadge');
  const headingEl = document.getElementById('aboutHeading');
  const leadEl = document.getElementById('aboutLead');
  const narrativeEl = document.getElementById('aboutNarrative');
  const philosophiesEl = document.getElementById('aboutPhilosophies');
  const competenciesEl = document.getElementById('competenciesList');

  if (badgeEl) badgeEl.textContent = a.badge;
  if (headingEl) headingEl.textContent = a.heading;
  if (leadEl) leadEl.textContent = a.lead;

  if (narrativeEl) {
    narrativeEl.innerHTML = a.narrative.map(p => `<p class="about-narrative-p">${p}</p>`).join('');
  }

  if (philosophiesEl) {
    philosophiesEl.innerHTML = a.framework.map(f => `
      <div class="philosophy-card reveal-on-scroll">
        <span class="ph-index">${f.step}</span>
        <div class="ph-body">
          <h4 class="ph-title">${f.title}</h4>
          <p class="ph-desc">${f.desc}</p>
        </div>
      </div>
    `).join('');
  }

  if (competenciesEl) {
    competenciesEl.innerHTML = PROFILE_DATA.competencies.map(c => `
      <div class="competency-item">
        <span class="comp-name">${c.name}</span>
        <span class="comp-category-tag">${c.category}</span>
      </div>
    `).join('');
  }
}

/**
 * Experience Section Renderer
 */
function renderExperience() {
  const container = document.getElementById('experienceTimeline');
  if (!container) return;

  container.innerHTML = EXPERIENCE_DATA.map(exp => `
    <article class="experience-card ${exp.isCurrent ? 'is-current' : ''} reveal-on-scroll">
      <div class="exp-header-row">
        <div class="exp-company-block">
          <span class="exp-badge ${exp.isCurrent ? 'badge-current' : ''}">${exp.badge}</span>
          <h3 class="exp-company-name">${exp.company}</h3>
          <span class="exp-role-title">${exp.role}</span>
        </div>
        <div class="exp-period-block">
          <span class="exp-period">${exp.period}</span>
          <span class="exp-meta-info">${exp.location} · ${exp.type}</span>
        </div>
      </div>

      <p class="exp-overview-text">${exp.overview}</p>

      <div class="exp-details-grid">
        <div class="exp-col-responsibilities">
          <h4 class="exp-subhead">Core Responsibilities</h4>
          <ul class="exp-bullet-list">
            ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <div class="exp-col-initiatives">
          <h4 class="exp-subhead">Key Strategic Initiatives</h4>
          <ul class="exp-bullet-list">
            ${exp.keyInitiatives.map(ki => `<li>${ki}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Factual Metrics / Clean Placeholders -->
      <div class="exp-results-bar">
        <div class="exp-results-wrap">
          ${exp.results.map(res => `
            <div class="exp-result-pill">
              <span class="exp-res-val">${res.value}</span>
              <span class="exp-res-lbl">${res.label}</span>
            </div>
          `).join('')}
        </div>
        ${exp.note ? `<p class="exp-note-text">ⓘ ${exp.note}</p>` : ''}
      </div>
    </article>
  `).join('');
}

/**
 * Work Portfolio Filter & Search Controller
 */
let currentCategoryFilter = 'social-media';
let currentSearchQuery = '';

function initProjectsSearchAndFilter() {
  renderProjectsFilter();
  wireSearchInput();
  renderProjectsGrid();
}

function renderProjectsFilter() {
  const bar = document.getElementById('portfolioFilterBar');
  if (!bar) return;

  bar.innerHTML = CATEGORIES.map(cat => {
    const count = PROJECTS_DATA.filter(p => p.category === cat.id).length;
    return `
      <button class="filter-pill ${cat.id === currentCategoryFilter ? 'active' : ''}" 
              data-filter="${cat.id}" 
              role="tab" 
              aria-selected="${cat.id === currentCategoryFilter}">
        <span>${cat.label}</span>
        <span class="filter-tab-count">(${count})</span>
      </button>
    `;
  }).join('');

  const pills = bar.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      currentCategoryFilter = pill.getAttribute('data-filter');

      const grid = document.getElementById('projectsGrid');
      if (grid) {
        grid.classList.add('is-filtering');
        setTimeout(() => {
          renderProjectsGrid();
          grid.classList.remove('is-filtering');
        }, 150);
      } else {
        renderProjectsGrid();
      }
    });
  });
}

function wireSearchInput() {
  const searchInput = document.getElementById('projectSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    if (clearBtn) {
      clearBtn.style.display = currentSearchQuery.length > 0 ? 'inline-flex' : 'none';
    }
    renderProjectsGrid();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearchQuery = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      renderProjectsGrid();
    });
  }
}

/**
 * Projects Grid Renderer with Category Filtering & Full-Text Search
 */
function renderProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  const countEl = document.getElementById('projectResultsCount');
  if (!grid) return;

  // Filter strictly by selected discipline category
  const filtered = PROJECTS_DATA.filter(project => {
    const matchesCategory = project.category === currentCategoryFilter;
    if (!matchesCategory) return false;

    if (!currentSearchQuery) return true;

    const searchable = [
      project.title,
      project.client,
      project.industry,
      project.role,
      project.shortDescription,
      project.description,
      ...(project.tags || [])
    ].join(' ').toLowerCase();

    return searchable.includes(currentSearchQuery);
  });

  const catObj = CATEGORIES.find(c => c.id === currentCategoryFilter);
  const catName = catObj ? catObj.label : 'Selected Category';

  // Update status count label
  if (countEl) {
    if (currentSearchQuery) {
      countEl.textContent = `Showing ${filtered.length} project(s) matching "${currentSearchQuery}" in ${catName}`;
    } else {
      countEl.textContent = `Showing ${filtered.length} case studies in ${catName}`;
    }
  }

  // Handle empty state
  if (!filtered.length) {
    grid.innerHTML = `
      <div class="projects-empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No Case Studies Found</h3>
        <p class="empty-desc">No projects matched "${currentSearchQuery}" in ${catName}.</p>
        <button type="button" class="btn btn-secondary btn-sm" id="btnResetProjectFilters">
          Clear Search Query
        </button>
      </div>
    `;

    const resetBtn = grid.querySelector('#btnResetProjectFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentSearchQuery = '';
        const searchInput = document.getElementById('projectSearchInput');
        const clearBtn = document.getElementById('clearSearchBtn');
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        renderProjectsGrid();
      });
    }
    return;
  }

  grid.innerHTML = filtered.map(project => `
    <article class="project-card ${project.featured ? 'is-featured' : ''} reveal-on-scroll" 
             data-id="${project.id}" 
             tabindex="0"
             role="button"
             aria-label="View case study for ${project.title}">
      <div class="project-media-container">
        <img src="${project.thumbnail}" alt="${project.title}" class="project-card-image" loading="lazy" />
        <div class="project-card-badge-row">
          <span class="project-category-badge">${project.category.replace('-', ' ').toUpperCase()}</span>
          ${project.featured ? `<span class="project-featured-badge">Featured Case Study</span>` : ''}
        </div>
        <div class="project-hover-curtain">
          <span class="project-explore-btn">
            Explore Case Study
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </span>
        </div>
      </div>

      <div class="project-content-block">
        <div class="project-meta-row">
          <span class="project-client-name">${project.client}</span>
          <span class="project-year-tag">${project.year}</span>
        </div>

        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-summary">${project.shortDescription}</p>

        <div class="project-tags-array">
          ${project.tags.slice(0, 3).map(t => `<span class="project-micro-tag">${t}</span>`).join('')}
        </div>

        ${project.results && project.results.length ? `
          <div class="project-card-metrics-preview">
            ${project.results.slice(0, 3).map(r => `
              <div class="micro-metric">
                <span class="micro-val">${r.value}</span>
                <span class="micro-lbl">${r.label}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </article>
  `).join('');

  // Wire click events to open case study drawer
  const cards = grid.querySelectorAll('.project-card');
  cards.forEach(card => {
    const id = card.getAttribute('data-id');
    card.addEventListener('click', () => openCaseStudy(id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCaseStudy(id);
      }
    });
  });

  // Re-run motion observer on newly rendered cards
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!isReducedMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(c => observer.observe(c));
  } else {
    cards.forEach(c => c.classList.add('is-revealed'));
  }
}

/**
 * Meta Ads Acquisition Hub Renderer
 */
function renderMetaAdsHub() {
  const kpiGrid = document.getElementById('metaAdsKpiGrid');
  const campaignsDeck = document.getElementById('metaAdsCampaignsDeck');
  if (!kpiGrid && !campaignsDeck) return;

  if (kpiGrid) {
    kpiGrid.innerHTML = META_ADS_HUB_DATA.masterKpis.map(kpi => {
      const decimals = kpi.value % 1 !== 0 ? 1 : 0;
      return `
        <div class="meta-kpi-card reveal-on-scroll">
          <span class="meta-kpi-trend">${kpi.trend}</span>
          <div class="meta-kpi-val-wrap">
            <span class="meta-kpi-value" 
                  data-counter-target="${kpi.value}" 
                  data-counter-prefix="${kpi.prefix}" 
                  data-counter-suffix="${kpi.suffix}" 
                  data-counter-decimals="${decimals}">
              ${kpi.prefix}0${kpi.suffix}
            </span>
          </div>
          <span class="meta-kpi-label">${kpi.label}</span>
          <span class="meta-kpi-sub">${kpi.sub}</span>
        </div>
      `;
    }).join('');
  }

  if (campaignsDeck) {
    campaignsDeck.innerHTML = META_ADS_HUB_DATA.campaignBreakdowns.map(camp => `
      <article class="meta-campaign-case-card reveal-on-scroll">
        <div class="camp-media-column">
          <div class="camp-img-frame" data-src="${camp.image}" data-caption="${camp.name}">
            <img src="${camp.image}" alt="${camp.name}" loading="lazy" />
            <div class="camp-expand-badge">⤢ Inspect Visual</div>
          </div>
          <p class="camp-verified-stamp">✓ ${camp.verifiedNote}</p>
        </div>

        <div class="camp-info-column">
          <div class="camp-meta-header">
            <span class="camp-objective-badge">${camp.objective}</span>
            <span class="camp-platform">${camp.platform}</span>
          </div>

          <h3 class="camp-title">${camp.name}</h3>
          <p class="camp-audience-target"><strong>Audience Architecture:</strong> ${camp.audience}</p>
          <p class="camp-strategy-copy">${camp.creativeStrategy}</p>

          <div class="camp-tactics-list">
            <h4 class="camp-tactics-heading">Tactical Deployment</h4>
            <ul>
              ${camp.tactics.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>

          <div class="camp-metrics-strip">
            ${Object.entries(camp.metrics).map(([key, val]) => `
              <div class="camp-metric-tag">
                <span class="tag-val">${val}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </article>
    `).join('');

    // Wire image clicks to lightbox
    campaignsDeck.querySelectorAll('.camp-img-frame').forEach(frame => {
      frame.addEventListener('click', () => {
        const src = frame.getAttribute('data-src');
        const cap = frame.getAttribute('data-caption');
        openLightbox(src, cap);
      });
    });
  }
}

/**
 * Creative Distribution Gallery Renderer
 */
function renderSocialGallery() {
  const container = document.getElementById('socialGalleryGrid');
  if (!container) return;

  container.innerHTML = SOCIAL_GALLERY_DATA.map(item => `
    <article class="gallery-card reveal-on-scroll" data-src="${item.image}" data-caption="${item.title}">
      <div class="gallery-media-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="gallery-type-badge">${item.type}</div>
        ${item.video ? `<div class="gallery-video-indicator">▶ Video Reel</div>` : ''}
        <div class="gallery-hover-veil">
          <span class="gallery-inspect-btn">⤢ Full View</span>
        </div>
      </div>
      <div class="gallery-info-wrapper">
        <span class="gallery-platform">${item.platform}</span>
        <h4 class="gallery-title">${item.title}</h4>
        <p class="gallery-caption">${item.caption}</p>
        <div class="gallery-tags">
          ${item.tags.map(t => `<span class="gal-tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-src');
      const caption = card.getAttribute('data-caption');
      openLightbox(src, caption);
    });
  });
}

/**
 * Services Matrix Renderer
 */
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  container.innerHTML = PROFILE_DATA.services.map(svc => `
    <article class="service-editorial-card reveal-on-scroll">
      <div class="svc-header-row">
        <span class="svc-number">${svc.number}</span>
        <span class="svc-bullet">●</span>
      </div>
      <h3 class="svc-title">${svc.title}</h3>
      <p class="svc-description">${svc.description}</p>
      <div class="svc-card-footer">
        <a href="#contact" class="svc-inquire-link">
          Inquire About Service
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
      </div>
    </article>
  `).join('');
}

/**
 * Contact Channels Renderer
 */
function renderContact() {
  const headingEl = document.getElementById('contactHeadline');
  const subtextEl = document.getElementById('contactSubtext');
  const channelsEl = document.getElementById('contactChannels');

  if (headingEl) {
    headingEl.innerHTML = `${PROFILE_DATA.contact.heading} <span class="serif-accent">${PROFILE_DATA.contact.accentHeading}</span>`;
  }
  if (subtextEl) subtextEl.textContent = PROFILE_DATA.contact.subtext;

  if (channelsEl) {
    channelsEl.innerHTML = PROFILE_DATA.contact.channels.map(ch => `
      <a href="${ch.href}" class="contact-channel-card reveal-on-scroll" ${ch.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        <div class="channel-info">
          <span class="channel-label">${ch.label}</span>
          <span class="channel-value">${ch.value}</span>
        </div>
        <span class="channel-action-arrow">
          ${ch.actionText} →
        </span>
      </a>
    `).join('');
  }
}

/**
 * Footer Renderer
 */
function renderFooter() {
  const nameEl = document.getElementById('footerName');
  const roleEl = document.getElementById('footerRole');
  if (nameEl) nameEl.textContent = PROFILE_DATA.name;
  if (roleEl) roleEl.textContent = `${PROFILE_DATA.role} · ${PROFILE_DATA.primaryPositioning}`;
}
