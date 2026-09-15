/**
 * Case Study Dossier Modal System
 * Full visual storytelling drawer with 8-part narrative layout:
 * 01 Overview, 02 Challenge, 03 Strategy, 04 Execution,
 * 05 Creative Work, 06 Results, 07 Media Gallery, 08 Next Project.
 */

import { PROJECTS_DATA } from '../data/projects.js';
import { openLightbox } from './lightbox.js';

let activeProjectId = null;

export function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');

  if (!modal) return;

  if (backdrop) {
    backdrop.addEventListener('click', closeCaseStudy);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudy);
  }

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-active')) return;

    if (e.key === 'Escape') {
      closeCaseStudy();
    } else if (e.key === 'ArrowRight') {
      navigateToNextProject();
    } else if (e.key === 'ArrowLeft') {
      navigateToPrevProject();
    }
  });
}

/**
 * Open case study modal by project ID
 */
export function openCaseStudy(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  activeProjectId = projectId;
  const modal = document.getElementById('caseStudyModal');
  const content = document.getElementById('modalContent');
  const categoryTag = document.getElementById('modalCategoryTag');

  if (!modal || !content) return;

  if (categoryTag) {
    categoryTag.textContent = `${project.category.replace('-', ' ').toUpperCase()} // CASE STUDY`;
  }

  content.innerHTML = renderCaseStudyContent(project);
  wireModalGalleryEvents(content);

  modal.classList.add('is-active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  // Focus modal container
  modal.focus();

  // Scroll drawer content to top
  const scrollContainer = modal.querySelector('.drawer-content-scroll');
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}

/**
 * Close case study modal
 */
export function closeCaseStudy() {
  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;

  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  activeProjectId = null;
}

/**
 * Navigate to next project
 */
function navigateToNextProject() {
  if (!activeProjectId) return;
  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === activeProjectId);
  const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
  openCaseStudy(PROJECTS_DATA[nextIndex].id);
}

/**
 * Navigate to previous project
 */
function navigateToPrevProject() {
  if (!activeProjectId) return;
  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === activeProjectId);
  const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
  openCaseStudy(PROJECTS_DATA[prevIndex].id);
}

/**
 * Render complete 8-part case study storytelling template
 */
function renderCaseStudyContent(project) {
  const cs = project.caseStudy || {};
  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return `
    <article class="case-study-dossier">
      <!-- 01 // OVERVIEW & HERO -->
      <header class="cs-hero-section">
        <div class="cs-eyebrow-strip">
          <span class="cs-badge">${project.category.replace('-', ' ').toUpperCase()}</span>
          <span class="cs-divider">/</span>
          <span class="cs-year">${project.year}</span>
          <span class="cs-divider">/</span>
          <span class="cs-role">${project.role}</span>
        </div>

        <h2 class="cs-main-title">${project.title}</h2>
        <p class="cs-lead-summary">${project.description || project.shortDescription}</p>

        <div class="cs-meta-matrix">
          <div class="cs-meta-col">
            <span class="cs-meta-label">Client / Entity</span>
            <span class="cs-meta-value">${project.client}</span>
          </div>
          <div class="cs-meta-col">
            <span class="cs-meta-label">Industry</span>
            <span class="cs-meta-value">${project.industry}</span>
          </div>
          <div class="cs-meta-col">
            <span class="cs-meta-label">Role</span>
            <span class="cs-meta-value">${project.role}</span>
          </div>
          <div class="cs-meta-col">
            <span class="cs-meta-label">Tags</span>
            <div class="cs-tag-cluster">
              ${project.tags.map(t => `<span class="cs-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="cs-primary-image-stage">
          <img src="${project.thumbnail}" alt="${project.title}" class="cs-featured-media" loading="eager" />
        </div>
      </header>

      <!-- 02 // THE CHALLENGE -->
      <section class="cs-section">
        <div class="cs-section-header">
          <span class="cs-sec-num">02</span>
          <h3 class="cs-sec-heading">The Strategic Challenge</h3>
        </div>
        <div class="cs-sec-body">
          <p>${cs.challenge || "Specific project challenge details will be detailed as cycles conclude."}</p>
        </div>
      </section>

      <!-- 03 // STRATEGIC APPROACH -->
      <section class="cs-section">
        <div class="cs-section-header">
          <span class="cs-sec-num">03</span>
          <h3 class="cs-sec-heading">Strategic Methodology</h3>
        </div>
        <div class="cs-sec-body">
          <p>${cs.strategy || "Formulated research-backed distribution, creative messaging hooks, and targeted media architecture."}</p>
        </div>
      </section>

      <!-- 04 // EXECUTION & OPERATIONS -->
      <section class="cs-section">
        <div class="cs-section-header">
          <span class="cs-sec-num">04</span>
          <h3 class="cs-sec-heading">Operational Execution</h3>
        </div>
        <div class="cs-sec-body">
          <p>${cs.execution || "Coordinated multi-channel production calendars, asset scheduling, and iterative testing loops."}</p>
        </div>
      </section>

      <!-- 05 // CREATIVE WORK & VISUAL DIRECTION -->
      <section class="cs-section">
        <div class="cs-section-header">
          <span class="cs-sec-num">05</span>
          <h3 class="cs-sec-heading">Creative Direction & Collateral</h3>
        </div>
        <div class="cs-sec-body">
          <p>${cs.creativeWork || "High-contrast visual messaging, multi-format carousels, video hooks, and conversion-focused assets."}</p>
        </div>
      </section>

      <!-- 06 // VERIFIED RESULTS -->
      <section class="cs-section cs-results-section">
        <div class="cs-section-header">
          <span class="cs-sec-num">06</span>
          <h3 class="cs-sec-heading">Documented Impact & Metrics</h3>
        </div>
        <div class="cs-kpi-grid">
          ${(project.results || []).map(r => `
            <div class="cs-kpi-card">
              <span class="cs-kpi-value">${r.value}</span>
              <span class="cs-kpi-label">${r.label}</span>
            </div>
          `).join('')}
        </div>
        ${cs.additionalInfo ? `<p class="cs-verification-note">✓ ${cs.additionalInfo}</p>` : ''}
      </section>

      <!-- 07 // MEDIA GALLERY & ASSET PREVIEW -->
      ${(cs.gallery && cs.gallery.length) || project.video ? `
        <section class="cs-section">
          <div class="cs-section-header">
            <span class="cs-sec-num">07</span>
            <h3 class="cs-sec-heading">Visual Asset Showcase</h3>
          </div>
          ${project.video ? `
            <div class="cs-video-wrap">
              <video src="${project.video}" controls playsinline preload="metadata" class="cs-project-video"></video>
            </div>
          ` : ''}
          <div class="cs-gallery-grid">
            ${(cs.gallery || []).map((imgUrl, i) => `
              <div class="cs-gallery-item" data-src="${imgUrl}" data-caption="${project.title} — Asset ${i + 1}">
                <img src="${imgUrl}" alt="${project.title} Asset" loading="lazy" />
                <div class="cs-gallery-hover-overlay">
                  <span class="cs-expand-icon">⤢</span>
                  <span>Expand View</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- 08 // NEXT PROJECT -->
      <footer class="cs-next-footer">
        <div class="cs-next-label">08 // NEXT PROJECT CASE STUDY</div>
        <button class="cs-next-btn" id="modalNextProjectBtn" data-next-id="${nextProject.id}">
          <div class="cs-next-info">
            <span class="cs-next-cat">${nextProject.category.replace('-', ' ').toUpperCase()}</span>
            <span class="cs-next-title">${nextProject.title}</span>
          </div>
          <span class="cs-next-arrow">→</span>
        </button>
      </footer>
    </article>
  `;
}

/**
 * Wire gallery click events inside the modal to open full lightbox
 */
function wireModalGalleryEvents(container) {
  const galleryItems = container.querySelectorAll('.cs-gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');
      const caption = item.getAttribute('data-caption') || '';
      openLightbox(src, caption);
    });
  });

  const nextBtn = container.querySelector('#modalNextProjectBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextId = nextBtn.getAttribute('data-next-id');
      if (nextId) openCaseStudy(nextId);
    });
  }
}
