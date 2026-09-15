/**
 * Global Toast Notification Controller
 * Lightweight, accessible feedback toasts with auto-dismissal.
 */

let toastContainer = null;

function ensureContainer() {
  if (!toastContainer) {
    toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.className = 'toast-container';
      toastContainer.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastContainer);
    }
  }
  return toastContainer;
}

/**
 * Show a toast notification
 * @param {string} message - Message text
 * @param {string} type - 'success' | 'info' | 'warning'
 * @param {number} duration - milliseconds
 */
export function showToast(message, type = 'success', duration = 3200) {
  const container = ensureContainer();

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  
  const icon = type === 'success' 
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" aria-label="Dismiss">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger reveal animation
  requestAnimationFrame(() => {
    toast.classList.add('is-visible');
  });

  const closeBtn = toast.querySelector('.toast-close');
  const dismiss = () => {
    toast.classList.remove('is-visible');
    toast.classList.add('is-hiding');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 300);
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', dismiss);
  }

  const timer = setTimeout(dismiss, duration);
  toast.addEventListener('mouseenter', () => clearTimeout(timer));
}
