/**
 * Fullscreen Media Lightbox Module
 * Displays high-resolution photography, ad creatives, and videos with captions.
 */

export function initLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxClose');

  if (!lightbox) return;

  if (backdrop) {
    backdrop.addEventListener('click', closeLightbox);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
      closeLightbox();
    }
  });
}

/**
 * Open Lightbox with specified media src and caption
 */
export function openLightbox(src, caption = '') {
  const lightbox = document.getElementById('imageLightbox');
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');

  if (!lightbox || !imgEl) return;

  imgEl.src = src;
  imgEl.alt = caption;
  if (captionEl) {
    captionEl.textContent = caption;
  }

  lightbox.classList.add('is-active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
}

/**
 * Close Lightbox
 */
export function closeLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  const imgEl = document.getElementById('lightboxImg');

  if (!lightbox) return;

  lightbox.classList.remove('is-active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');

  if (imgEl) {
    imgEl.src = '';
  }
}
