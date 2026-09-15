/**
 * Theme Accent Switcher Controller
 * Enables luxury color theme switching with localStorage persistence.
 */

import { showToast } from './toast.js';

export const THEMES = [
  { id: 'azure', name: 'Azure', color: '#38bdf8' },
  { id: 'emerald', name: 'Emerald', color: '#10b981' },
  { id: 'violet', name: 'Violet', color: '#a855f7' },
  { id: 'amber', name: 'Champagne', color: '#f59e0b' }
];

const STORAGE_KEY = 'aashir_portfolio_theme';

export function initThemeSwitcher() {
  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'azure';
  applyTheme(savedTheme, false);

  const container = document.getElementById('themeSwitcher');
  if (!container) return;

  container.innerHTML = `
    <div class="theme-picker-pill" role="group" aria-label="Select accent theme">
      ${THEMES.map(theme => `
        <button class="theme-swatch-btn ${theme.id === savedTheme ? 'is-active' : ''}" 
                data-theme-id="${theme.id}" 
                title="Switch to ${theme.name} Accent"
                aria-label="${theme.name} Accent"
                aria-pressed="${theme.id === savedTheme}">
          <span class="swatch-dot" style="background-color: ${theme.color};"></span>
        </button>
      `).join('')}
    </div>
  `;

  const buttons = container.querySelectorAll('.theme-swatch-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const themeId = btn.getAttribute('data-theme-id');
      applyTheme(themeId, true);

      buttons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
    });
  });
}

export function applyTheme(themeId, notify = false) {
  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
  document.documentElement.setAttribute('data-theme', theme.id);
  localStorage.setItem(STORAGE_KEY, theme.id);

  if (notify) {
    showToast(`Accent theme updated to ${theme.name}`, 'info', 2000);
  }
}
