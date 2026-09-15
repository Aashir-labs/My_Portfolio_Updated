/**
 * Quick Dock, Scroll Progress, Karachi Live Clock & Card Tilt Physics
 */

export function initQuickDock() {
  initScrollProgress();
  initLiveClock();
  initBackToTop();
  initCardTilt();
}

/**
 * Top viewport scroll progress indicator
 */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${scrollPercent}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/**
 * Live Karachi Time & Availability Clock
 */
function initLiveClock() {
  const clockEls = document.querySelectorAll('.js-live-karachi-time');
  if (!clockEls.length) return;

  const updateClock = () => {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Karachi',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEls.forEach(el => {
        el.textContent = `${timeStr} PKT`;
      });
    } catch (e) {
      // Fallback
      clockEls.forEach(el => {
        el.textContent = 'Karachi PK (UTC+5)';
      });
    }
  };

  updateClock();
  setInterval(updateClock, 30000);
}

/**
 * Floating Back-to-Top Button & Quick Dock
 */
function initBackToTop() {
  const dock = document.getElementById('floatingQuickDock');
  const backToTopBtn = document.getElementById('btnBackToTop');
  if (!dock) return;

  const handleScroll = () => {
    if (window.scrollY > 350) {
      dock.classList.add('is-visible');
    } else {
      dock.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * Subtle 3D Card Tilt Physics
 */
function initCardTilt() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion || window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  const cards = document.querySelectorAll('.project-card, .meta-kpi-card, .service-editorial-card, .testimonial-editorial-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle tilt max 5 degrees
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
