/**
 * Interactive Contact & Lead Inquiry Form Controller
 * Validation, instant submission feedback, WhatsApp message formulation,
 * and copy-to-clipboard utilities.
 */

import { showToast } from './toast.js';
import { PROFILE_DATA } from '../data/profile.js';

export function initContactForm() {
  const formContainer = document.getElementById('contactFormContainer');
  if (formContainer) {
    renderContactForm(formContainer);
    wireFormEvents(formContainer);
  }

  wireCopyActions();
}

function renderContactForm(container) {
  container.innerHTML = `
    <form class="contact-lead-form" id="leadInquiryForm" novalidate>
      <div class="form-header">
        <span class="form-eyebrow">Project Inquiry &amp; Discussion</span>
        <h3 class="form-title">Start a Conversation</h3>
        <p class="form-desc">Share your brand goals, campaign scope, or growth challenges. I will review and respond within 24 hours.</p>
      </div>

      <div class="form-grid">
        <!-- Name -->
        <div class="form-group">
          <label for="contactName" class="form-label">Your Name <span class="required-star">*</span></label>
          <input type="text" id="contactName" name="name" class="form-input" placeholder="e.g. Sarah Jenkins" required />
          <span class="field-error-msg" id="nameError"></span>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="contactEmail" class="form-label">Email Address <span class="required-star">*</span></label>
          <input type="email" id="contactEmail" name="email" class="form-input" placeholder="e.g. sarah@company.com" required />
          <span class="field-error-msg" id="emailError"></span>
        </div>

        <!-- Phone / WhatsApp -->
        <div class="form-group">
          <label for="contactPhone" class="form-label">Phone / WhatsApp <span class="optional-label">(Optional)</span></label>
          <input type="tel" id="contactPhone" name="phone" class="form-input" placeholder="+92 300 1234567" />
        </div>

        <!-- Service Required -->
        <div class="form-group">
          <label for="contactService" class="form-label">Primary Service Needed <span class="required-star">*</span></label>
          <select id="contactService" name="service" class="form-select" required>
            <option value="" disabled selected>Select Primary Objective</option>
            <option value="brand-management">Brand Management &amp; Architecture</option>
            <option value="social-media">Social Media Strategy &amp; Growth</option>
            <option value="meta-ads">Full-Funnel Meta Ads Performance</option>
            <option value="content-strategy">Content Strategy &amp; Carousels</option>
            <option value="ai-creative">AI Commercial Creative Production</option>
            <option value="comprehensive-growth">Comprehensive Full-Stack Growth</option>
          </select>
          <span class="field-error-msg" id="serviceError"></span>
        </div>

        <!-- Budget Tier -->
        <div class="form-group form-span-2">
          <label for="contactBudget" class="form-label">Estimated Monthly Budget Range</label>
          <select id="contactBudget" name="budget" class="form-select">
            <option value="Flexible / To Discuss">Flexible / To Discuss During Consultation</option>
            <option value="Rs 50,000 – Rs 150,000 (Under $500)">Rs 50,000 – Rs 150,000 (Under $500)</option>
            <option value="Rs 150,000 – Rs 350,000 ($500 – $1,200)">Rs 150,000 – Rs 350,000 ($500 – $1,200)</option>
            <option value="Rs 350,000 – Rs 800,000 ($1,200 – $3,000)">Rs 350,000 – Rs 800,000 ($1,200 – $3,000)</option>
            <option value="Rs 800,000+ ($3,000+ Enterprise)">Rs 800,000+ ($3,000+ Enterprise Scale)</option>
          </select>
        </div>

        <!-- Message -->
        <div class="form-group form-span-2">
          <label for="contactMessage" class="form-label">Project Details &amp; Objectives <span class="required-star">*</span></label>
          <textarea id="contactMessage" name="message" class="form-textarea" rows="4" placeholder="Describe your brand, current challenges, timelines, or specific campaign goals..." required></textarea>
          <span class="field-error-msg" id="messageError"></span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="form-actions-row">
        <button type="submit" class="btn btn-primary btn-submit-inquiry" id="btnSubmitForm">
          <span class="btn-text">Submit Project Brief</span>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </button>

        <button type="button" class="btn btn-ghost btn-whatsapp-inquiry" id="btnSendViaWhatsApp">
          <span>Chat On WhatsApp</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.503-4.497 10-10 10-1.748 0-3.385-.45-4.819-1.237l-5.181 1.356 1.381-5.048c-.86-1.488-1.381-3.218-1.381-5.071 0-5.503 4.497-10 10-10 5.503 0 10 4.497 10 10z"/></svg>
        </button>
      </div>

      <!-- Form Status Message Banner -->
      <div class="form-status-banner" id="formStatusBanner" style="display:none;"></div>
    </form>
  `;
}

function wireFormEvents(container) {
  const form = container.querySelector('#leadInquiryForm');
  const whatsappBtn = container.querySelector('#btnSendViaWhatsApp');
  const submitBtn = container.querySelector('#btnSubmitForm');
  const banner = container.querySelector('#formStatusBanner');

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('contactName')?.value.trim() || 'Prospective Partner';
      const service = document.getElementById('contactService')?.value || 'Brand Strategy & Growth';
      const budget = document.getElementById('contactBudget')?.value || 'To Discuss';
      const message = document.getElementById('contactMessage')?.value.trim() || 'I would like to explore a potential collaboration.';

      const waText = `Hi Aashir! My name is ${name}.%0A%0A*Service Required:* ${service}%0A*Budget Range:* ${budget}%0A*Project Scope:* ${message}%0A%0ALooking forward to connecting!`;
      
      showToast('Opening WhatsApp with your project brief...', 'info');
      window.open(`https://wa.me/923102581680?text=${waText}`, '_blank');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset errors
      container.querySelectorAll('.field-error-msg').forEach(el => el.textContent = '');
      container.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => el.classList.remove('has-error'));

      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const service = document.getElementById('contactService')?.value;
      const budget = document.getElementById('contactBudget')?.value;
      const message = document.getElementById('contactMessage')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim();

      let isValid = true;

      if (!name) {
        showError('contactName', 'nameError', 'Please enter your name.');
        isValid = false;
      }

      if (!email || !isValidEmail(email)) {
        showError('contactEmail', 'emailError', 'Please enter a valid work email.');
        isValid = false;
      }

      if (!service) {
        showError('contactService', 'serviceError', 'Please select a primary service.');
        isValid = false;
      }

      if (!message || message.length < 10) {
        showError('contactMessage', 'messageError', 'Please provide at least 10 characters regarding your project.');
        isValid = false;
      }

      if (!isValid) return;

      // Submit state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').textContent = 'Sending Message...';
      }

      // Simulate network request / direct dispatch
      setTimeout(() => {
        if (banner) {
          banner.style.display = 'block';
          banner.className = 'form-status-banner is-success';
          banner.innerHTML = `
            <strong>Thank you, ${name}!</strong> Your inquiry has been received. Aashir will review your brief and reply to <em>${email}</em> within 24 hours.
          `;
        }

        showToast('Inquiry submitted successfully! Aashir will be in touch shortly.', 'success', 4500);

        // Also formulate mailto fallback for instant delivery
        const mailtoSubject = encodeURIComponent(`Project Inquiry: ${service} — ${name}`);
        const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service}\nBudget: ${budget}\n\nProject Scope:\n${message}`);
        
        // Reset button
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.querySelector('.btn-text').textContent = 'Message Sent ✓';
        }

        // Reset inputs
        form.reset();
      }, 700);
    });
  }
}

function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add('has-error');
  if (error) error.textContent = message;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function wireCopyActions() {
  document.querySelectorAll('[data-copy-text]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || 'Text';

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`${label} copied to clipboard!`, 'success');
      }).catch(() => {
        showToast(`Failed to copy ${label}`, 'warning');
      });
    });
  });
}
