/**
 * Executive Resume / One-Pager Dossier Modal Controller
 * Formatted executive profile summary with instant print / save PDF functionality.
 */

import { PROFILE_DATA } from '../data/profile.js';
import { EXPERIENCE_DATA } from '../data/experience.js';

export function initResumeModal() {
  const modal = document.getElementById('resumeModal');
  const backdrop = document.getElementById('resumeModalBackdrop');
  const closeBtn = document.getElementById('resumeModalClose');
  const triggerBtns = document.querySelectorAll('.js-open-resume');

  if (!modal) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeResumeModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeResumeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeResumeModal();
    }
  });
}

export function openResumeModal() {
  const modal = document.getElementById('resumeModal');
  const content = document.getElementById('resumeModalContent');
  if (!modal || !content) return;

  content.innerHTML = renderResumeContent();
  wireResumeModalActions(content);

  modal.classList.add('is-active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.focus();
}

export function closeResumeModal() {
  const modal = document.getElementById('resumeModal');
  if (!modal) return;

  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function renderResumeContent() {
  const res = PROFILE_DATA.resumeData;
  const exp = EXPERIENCE_DATA;

  return `
    <div class="resume-sheet">
      <!-- Top Action Bar -->
      <div class="resume-sheet-bar no-print">
        <div class="resume-sheet-badge">
          <span class="sheet-badge-dot"></span>
          <span>Curriculum Vitae · Aashir Ahmed</span>
        </div>
        <div class="resume-sheet-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="btnPrintResume">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      <!-- Resume Header -->
      <header class="resume-header">
        <div class="resume-title-block">
          <h1 class="resume-name">${PROFILE_DATA.name}</h1>
          <p class="resume-role">${PROFILE_DATA.role} · ${PROFILE_DATA.primaryPositioning}</p>
        </div>
        <div class="resume-contacts-block">
          <span>📍 ${PROFILE_DATA.location}</span>
          <span>✉️ <a href="mailto:${PROFILE_DATA.contact.channels[0].value}">${PROFILE_DATA.contact.channels[0].value}</a></span>
          <span>📞 <a href="tel:${PROFILE_DATA.contact.channels[1].value}">${PROFILE_DATA.contact.channels[1].value}</a></span>
          <span>🔗 <a href="https://${PROFILE_DATA.contact.channels[2].value}" target="_blank" rel="noopener">${PROFILE_DATA.contact.channels[2].value}</a></span>
        </div>
      </header>

      <!-- Executive Profile -->
      <section class="resume-section">
        <h2 class="resume-section-title">Executive Summary</h2>
        <p class="resume-summary-text">${res.summary}</p>
      </section>

      <!-- Core Competencies -->
      <section class="resume-section">
        <h2 class="resume-section-title">Core Competencies</h2>
        <div class="resume-skills-grid">
          ${res.coreCompetencies.map(c => `
            <div class="resume-skill-item">
              <span class="skill-bullet">◆</span>
              <span>${c}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Professional Career Trajectory -->
      <section class="resume-section">
        <h2 class="resume-section-title">Professional Experience</h2>
        <div class="resume-timeline-list">
          ${exp.map(job => `
            <article class="resume-job-card">
              <div class="resume-job-header">
                <div>
                  <h3 class="resume-job-title">${job.role}</h3>
                  <span class="resume-company">${job.company} · ${job.location}</span>
                </div>
                <span class="resume-period">${job.period}</span>
              </div>
              <p class="resume-job-overview">${job.overview}</p>
              <ul class="resume-bullet-list">
                ${job.responsibilities.slice(0, 3).map(r => `<li>${r}</li>`).join('')}
              </ul>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- Technical & Tool Stack -->
      <section class="resume-section">
        <h2 class="resume-section-title">Growth &amp; Creative Tech Stack</h2>
        <div class="resume-tech-matrix">
          ${res.technicalStack.map(stack => `
            <div class="resume-tech-row">
              <span class="tech-cat">${stack.category}:</span>
              <span class="tech-items">${stack.tools.join(', ')}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Education & Certifications Grid -->
      <div class="resume-two-col">
        <section class="resume-section">
          <h2 class="resume-section-title">Education</h2>
          ${res.education.map(edu => `
            <div class="resume-edu-item">
              <h4 class="edu-degree">${edu.degree}</h4>
              <span class="edu-inst">${edu.institution} (${edu.period})</span>
              <p class="edu-desc">${edu.details}</p>
            </div>
          `).join('')}
        </section>

        <section class="resume-section">
          <h2 class="resume-section-title">Certifications &amp; Languages</h2>
          <ul class="resume-bullet-list">
            ${res.certifications.map(cert => `<li>${cert}</li>`).join('')}
          </ul>
          <p class="resume-lang-note"><strong>Languages:</strong> ${res.languages.join(' · ')}</p>
        </section>
      </div>
    </div>
  `;
}

function wireResumeModalActions(container) {
  const printBtn = container.querySelector('#btnPrintResume');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
