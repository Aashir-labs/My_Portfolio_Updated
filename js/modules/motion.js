/**
 * Motion & Animation Controller
 * IntersectionObserver reveals, numeric stat counters, header scroll effects,
 * and custom magnetic cursor with prefers-reduced-motion compliance.
 */

export function initMotion() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initHeaderScroll();
  initRevealOnScroll(isReducedMotion);
  initStatCounters(isReducedMotion);

  if (!isReducedMotion) {
    initInteractiveCursor();
  }
}

/**
 * Header dynamic background and shrink on scroll
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * IntersectionObserver for fade-in & slide-up elements
 */
function initRevealOnScroll(isReducedMotion) {
  if (isReducedMotion) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-revealed');
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Animated numeric counter with easing
 */
function initStatCounters(isReducedMotion) {
  const counters = document.querySelectorAll('[data-counter-target]');
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);

        if (isReducedMotion || isNaN(target)) {
          el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
          obs.unobserve(el);
          return;
        }

        animateCount(el, target, prefix, suffix, decimals, 1600);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counters.forEach(c => counterObserver.observe(c));
}

function animateCount(el, target, prefix, suffix, decimals, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = easeProgress * target;

    el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

/**
 * Custom magnetic cursor with trailing ring
 */
function initInteractiveCursor() {
  // Disable on mobile/touch devices
  if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024) {
    return;
  }

  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  if (!cursorDot || !cursorRing) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    if (!isMoving) {
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
      isMoving = true;
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorRing.style.opacity = '0';
    isMoving = false;
  });

  // Smooth lerp for outer ring
  function renderCursorRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderCursorRing);
  }
  requestAnimationFrame(renderCursorRing);

  // Magnetic hover state for interactive elements
  const hoverTargets = document.querySelectorAll('a, button, [role="button"], .project-card, .filter-pill');
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursorRing.classList.add('is-hovering');
    });
    target.addEventListener('mouseleave', () => {
      cursorRing.classList.remove('is-hovering');
    });
  });
}
