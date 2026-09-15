/**
 * Testimonials & Executive Endorsements Controller
 * Renders verified endorsements with client roles, project tags, and trust indicators.
 */

import { PROFILE_DATA } from '../data/profile.js';

export function initTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container || !PROFILE_DATA.testimonials) return;

  container.innerHTML = PROFILE_DATA.testimonials.map(t => `
    <article class="testimonial-editorial-card reveal-on-scroll">
      <div class="test-quote-mark" aria-hidden="true">“</div>
      <blockquote class="test-quote-text">
        ${t.quote}
      </blockquote>

      <div class="test-author-row">
        <div class="test-avatar-monogram" aria-hidden="true">${t.initials}</div>
        <div class="test-author-info">
          <div class="test-author-name-row">
            <span class="test-author-name">${t.author}</span>
            ${t.verified ? `<span class="test-verified-badge" title="Verified Professional Engagement">✓ Verified Partner</span>` : ''}
          </div>
          <span class="test-author-role">${t.role} · <strong class="test-company-highlight">${t.company}</strong></span>
          <span class="test-project-tag">Project: ${t.project}</span>
        </div>
      </div>
    </article>
  `).join('');
}
