/* ============================================================
   MAIN.JS — rendering & interactions
   Reads content from data.js and renders it into the page.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderExperience();
  renderServices();
  renderWorkFilters();
  renderProjects("all");

  setupCustomCursor();
  setupMobileNav();
  setupScrollNav();
  setupScrollReveal();
  setupModal();
});

/* ---------- PROFILE / HERO ---------- */
function renderProfile() {
  document.title = `${PROFILE.name} — ${PROFILE.roles}`;
  document.querySelectorAll("[data-profile-name]").forEach(el => el.textContent = PROFILE.name);
  document.querySelectorAll("[data-profile-roles]").forEach(el => el.textContent = PROFILE.roles);
  document.querySelectorAll("[data-profile-tagline]").forEach(el => el.textContent = PROFILE.tagline);
  document.querySelectorAll("[data-profile-photo]").forEach(el => el.src = PROFILE.photo);
  document.querySelectorAll("[data-profile-email]").forEach(el => {
    el.href = `mailto:${PROFILE.email}`;
    if (el.dataset.profileEmail === "text") el.textContent = `✉️ ${PROFILE.email}`;
  });
  document.querySelectorAll("[data-profile-whatsapp]").forEach(el => el.href = PROFILE.whatsapp);
  document.querySelectorAll("[data-profile-contra]").forEach(el => el.href = PROFILE.contra);
  document.querySelectorAll("[data-profile-location]").forEach(el => el.textContent = PROFILE.location);
}

/* ---------- EXPERIENCE ---------- */
function renderExperience() {
  const wrap = document.getElementById("exp-timeline");
  if (!wrap) return;

  wrap.innerHTML = EXPERIENCE.map((exp, i) => {
    const isCurrent = /present/i.test(exp.period);
    const resultsHtml = exp.results ? `
      <div class="exp-results">
        <p class="exp-results-label">Results</p>
        <div class="exp-results-grid">
          ${exp.results.map(r => `
            <div><div class="exp-rval">${r.value}</div><div class="exp-rlbl">${r.label}</div></div>
          `).join("")}
        </div>
      </div>` : "";

    return `
      <div class="exp-item${isCurrent ? " is-current" : ""}" style="transition-delay:${i * 0.08}s">
        <div class="exp-dot"></div>
        <div>
          <div class="exp-top">
            <span class="exp-role">${exp.role}</span>
            <span class="exp-company">${exp.company}</span>
            ${isCurrent ? `<span class="exp-current-badge">Current</span>` : ""}
          </div>
          <div class="exp-meta">
            <span>📅 ${exp.period}</span>
            <span>📍 ${exp.location}</span>
            <span>🏢 ${exp.type}</span>
          </div>
          <p class="exp-desc">${exp.description}</p>
          <ul class="exp-bullets">
            ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
          ${resultsHtml}
        </div>
      </div>
    `;
  }).join("");
}

/* ---------- SERVICES ---------- */
function renderServices() {
  const wrap = document.getElementById("svc-grid");
  if (!wrap) return;
  wrap.innerHTML = SERVICES.map((s, i) => `
    <div class="svc-card" style="transition-delay:${i * 0.08}s">
      <div class="svc-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>
  `).join("");
}

/* ---------- WORK: FILTERS ---------- */
let activeCategory = "all";

function renderWorkFilters() {
  const wrap = document.getElementById("work-filters");
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => `
    <button class="filter-btn${c.key === "all" ? " active" : ""}" data-cat="${c.key}">${c.label}</button>
  `).join("");

  wrap.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.cat;
      renderProjects(activeCategory);
    });
  });
}

/* ---------- WORK: PROJECT GRID ---------- */
function renderProjects(category) {
  const grid = document.getElementById("work-grid");
  if (!grid) return;

  const filtered = category === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="work-empty">No projects in this category yet — check back soon.</p>`;
    return;
  }

  const catLabel = key => (CATEGORIES.find(c => c.key === key) || {}).label || key;

  grid.innerHTML = filtered.map((p, i) => `
    <div class="project-card" data-id="${p.id}" style="transition-delay:${i * 0.06}s">
      <div class="project-thumb">
        <span class="project-cat-tag">${catLabel(p.category)}</span>
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-client">${p.client}</p>
        <p class="project-desc">${p.shortDescription}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-foot">
          <span>${p.year}</span>
          <span class="project-view">View Case Study →</span>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openCaseStudy(card.dataset.id));
    // re-observe for reveal animation
    revealObserver && revealObserver.observe(card);
  });
}

/* ---------- CASE STUDY MODAL ---------- */
function setupModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeCaseStudy();
  });
  document.getElementById("modal-close").addEventListener("click", closeCaseStudy);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCaseStudy();
  });
}

function openCaseStudy(id) {
  const p = PROJECTS.find(proj => proj.id === id);
  if (!p) return;

  const catLabel = key => (CATEGORIES.find(c => c.key === key) || {}).label || key;

  const galleryHtml = p.gallery && p.gallery.length ? `
    <div class="case-gallery${p.gallery.length === 1 ? " single" : ""}">
      ${p.gallery.map(img => `<div class="case-img"><img src="${img}" alt="${p.title}"></div>`).join("")}
    </div>` : "";

  const videoHtml = p.video ? `
    <div class="case-video"><video src="${p.video}" controls></video></div>` : "";

  const resultsHtml = p.results ? `
    <p class="case-section-label">Results</p>
    <div class="case-results-grid">
      ${p.results.map(r => `<div class="case-rcard"><div class="case-rval">${r.value}</div><div class="case-rlbl">${r.label}</div></div>`).join("")}
    </div>` : "";

  document.getElementById("modal-body").innerHTML = `
    <p class="modal-cat">${catLabel(p.category)}</p>
    <h3 class="modal-title">${p.title}</h3>
    <div class="modal-meta">
      <div class="modal-meta-item"><div class="lbl">Client</div><div class="val">${p.client}</div></div>
      <div class="modal-meta-item"><div class="lbl">Industry</div><div class="val">${p.industry}</div></div>
      <div class="modal-meta-item"><div class="lbl">My Role</div><div class="val">${p.role}</div></div>
      <div class="modal-meta-item"><div class="lbl">Year</div><div class="val">${p.year}</div></div>
    </div>
    ${galleryHtml}
    ${videoHtml}
    <p class="case-section-label">The Challenge</p>
    <p class="case-text">${p.challenge}</p>
    <p class="case-section-label">Strategy</p>
    <p class="case-text">${p.strategy}</p>
    <p class="case-section-label">Execution</p>
    <p class="case-text">${p.execution}</p>
    <p class="case-section-label">Creative Work</p>
    <p class="case-text">${p.creativeWork}</p>
    ${resultsHtml}
  `;

  document.getElementById("modal-overlay").classList.add("open");
  document.body.classList.add("modal-open");
}

function closeCaseStudy() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.classList.remove("modal-open");
}

/* ---------- MOBILE NAV ---------- */
function setupMobileNav() {
  const burger = document.getElementById("nav-burger");
  const menu = document.getElementById("mobile-menu");
  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      menu.classList.remove("open");
    });
  });
}

/* ---------- SCROLLED NAV STATE ---------- */
function setupScrollNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
}

/* ---------- SCROLL REVEAL ---------- */
let revealObserver;
function setupScrollReveal() {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("vis");
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".reveal, .exp-item, .svc-card, .project-card").forEach(el => revealObserver.observe(el));
}

/* ---------- CUSTOM CURSOR (desktop / fine-pointer only) ---------- */
function setupCustomCursor() {
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (!isFinePointer) return;

  document.body.classList.add("has-custom-cursor");
  const cur = document.getElementById("cursor");
  const ring = document.getElementById("ring");
  if (!cur || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + "px"; cur.style.top = my + "px";
  });
  (function animate() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + "px"; ring.style.top = ry + "px";
    requestAnimationFrame(animate);
  })();
}
