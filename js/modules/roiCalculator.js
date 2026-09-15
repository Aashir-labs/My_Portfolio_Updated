/**
 * Interactive Meta Ads & Growth Campaign Estimator
 * Real-time predictive modeling for ad spend, projected reach, conversions,
 * estimated CPL, and full-funnel budget allocation.
 */

import { PROFILE_DATA } from '../data/profile.js';

export function initRoiCalculator() {
  const container = document.getElementById('roiCalculatorWidget');
  if (!container) return;

  renderCalculator(container);
  wireCalculatorEvents(container);
  updateCalculations();
}

function renderCalculator(container) {
  const industries = PROFILE_DATA.roiPresets?.industries || [
    { id: 'fitness', name: 'Fitness & Wellness' },
    { id: 'ecommerce', name: 'E-Commerce & Retail' },
    { id: 'b2b', name: 'B2B & Enterprise Tech' },
    { id: 'services', name: 'Local Professional Services' }
  ];

  container.innerHTML = `
    <div class="calculator-card">
      <div class="calculator-grid">
        <!-- Controls Column -->
        <div class="calc-controls-col">
          <div class="calc-header-badge">
            <span class="calc-badge-dot"></span>
            <span>Campaign Performance Estimator</span>
          </div>
          <h3 class="calc-title">Meta Ads &amp; Growth Estimator</h3>
          <p class="calc-intro">
            Estimate qualified leads, reach, and budget distribution based on real Meta ad campaign benchmarks.
          </p>

          <!-- Currency & Budget Control -->
          <div class="calc-field-group">
            <div class="calc-field-header">
              <label for="budgetSlider" class="calc-label">Monthly Ad Spend Allocation</label>
              <div class="calc-currency-toggle">
                <button type="button" class="curr-btn is-active" data-currency="PKR">PKR (Rs)</button>
                <button type="button" class="curr-btn" data-currency="USD">USD ($)</button>
              </div>
            </div>
            
            <div class="calc-slider-display">
              <span class="calc-display-symbol" id="budgetSymbol">Rs</span>
              <span class="calc-display-amount" id="budgetDisplay">200,000</span>
            </div>

            <input type="range" 
                   id="budgetSlider" 
                   class="calc-range-slider" 
                   min="50000" 
                   max="1000000" 
                   step="10000" 
                   value="200000" 
                   aria-label="Monthly Ad Spend Allocation" />
            
            <div class="calc-slider-bounds">
              <span id="budgetMinLabel">Rs 50K</span>
              <span id="budgetMaxLabel">Rs 1.0M+</span>
            </div>
          </div>

          <!-- Industry Selection -->
          <div class="calc-field-group">
            <label class="calc-label">Target Industry Sector</label>
            <div class="calc-industry-grid" role="radiogroup" aria-label="Target Industry Sector">
              ${industries.map((ind, idx) => `
                <button type="button" 
                        class="calc-industry-btn ${idx === 0 ? 'is-active' : ''}" 
                        data-industry="${ind.id}">
                  ${ind.name}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Campaign Objective -->
          <div class="calc-field-group">
            <label class="calc-label">Primary Campaign Objective</label>
            <div class="calc-goal-pills" role="radiogroup" aria-label="Primary Campaign Objective">
              <button type="button" class="calc-goal-btn is-active" data-goal="leads">
                🎯 Direct Qualified Leads
              </button>
              <button type="button" class="calc-goal-btn" data-goal="sales">
                🛒 E-Commerce Conversions
              </button>
              <button type="button" class="calc-goal-btn" data-goal="reach">
                ⚡ Brand Reach &amp; Discovery
              </button>
            </div>
          </div>
        </div>

        <!-- Real-Time Metrics & Funnel Column -->
        <div class="calc-results-col">
          <div class="results-kpi-deck">
            <!-- Metric 1: Projected Leads / Conversions -->
            <div class="calc-result-box highlight-box">
              <span class="calc-kpi-sub" id="outputPrimaryLabel">Projected Qualified Leads</span>
              <div class="calc-kpi-number" id="outputConversions">1,250 – 1,600</div>
              <span class="calc-kpi-caption">High-intent submissions via Instant Forms &amp; WhatsApp</span>
            </div>

            <!-- Metric 2: Estimated Reach & Impressions -->
            <div class="calc-result-box">
              <span class="calc-kpi-sub">Targeted Impressions</span>
              <div class="calc-kpi-number" id="outputImpressions">950K – 1.4M</div>
              <span class="calc-kpi-caption">Algorithmic feed, Explore &amp; Reels placement</span>
            </div>

            <!-- Metric 3: Target Unit Cost -->
            <div class="calc-result-box">
              <span class="calc-kpi-sub" id="outputUnitCostLabel">Estimated Cost Per Lead (CPL)</span>
              <div class="calc-kpi-number" id="outputUnitCost">Rs 118 – Rs 145</div>
              <span class="calc-kpi-caption">Optimized against historic agency benchmarks</span>
            </div>
          </div>

          <!-- Recommended 3-Tier Funnel Allocation -->
          <div class="calc-funnel-breakdown">
            <div class="funnel-breakdown-header">
              <h4 class="funnel-title">Recommended Full-Funnel Architecture</h4>
              <span class="funnel-badge">Budget Allocation</span>
            </div>

            <div class="funnel-progress-bar">
              <div class="funnel-bar-segment segment-tofu" style="width: 50%;" title="Top of Funnel: 50%"></div>
              <div class="funnel-bar-segment segment-mofu" style="width: 30%;" title="Middle of Funnel: 30%"></div>
              <div class="funnel-bar-segment segment-bofu" style="width: 20%;" title="Bottom of Funnel: 20%"></div>
            </div>

            <div class="funnel-legend-grid">
              <div class="funnel-legend-item">
                <span class="legend-dot dot-tofu"></span>
                <div class="legend-info">
                  <span class="legend-title">TOFU (50%) — <strong id="funnelTofuVal">Rs 100,000</strong></span>
                  <span class="legend-desc">Broad prospecting, video reels &amp; audience discovery</span>
                </div>
              </div>
              <div class="funnel-legend-item">
                <span class="legend-dot dot-mofu"></span>
                <div class="legend-info">
                  <span class="legend-title">MOFU (30%) — <strong id="funnelMofuVal">Rs 60,000</strong></span>
                  <span class="legend-desc">High-swipe educational carousels &amp; profile retargeting</span>
                </div>
              </div>
              <div class="funnel-legend-item">
                <span class="legend-dot dot-bofu"></span>
                <div class="legend-info">
                  <span class="legend-title">BOFU (20%) — <strong id="funnelBofuVal">Rs 40,000</strong></span>
                  <span class="legend-desc">Conversion Instant Forms, WhatsApp chat &amp; urgency offers</span>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA to Lock In Plan -->
          <div class="calc-cta-row">
            <button type="button" class="btn btn-primary btn-calc-apply" id="btnApplyRoiPlan">
              <span>Discuss This Campaign Plan</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </button>
            <span class="calc-guarantee-note">✓ Grounded in real campaign data &amp; verified lead costs</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

let currentCurrency = 'PKR';
let currentIndustry = 'fitness';
let currentGoal = 'leads';

function wireCalculatorEvents(container) {
  const slider = container.querySelector('#budgetSlider');
  const currencyBtns = container.querySelectorAll('.curr-btn');
  const industryBtns = container.querySelectorAll('.calc-industry-btn');
  const goalBtns = container.querySelectorAll('.calc-goal-btn');
  const applyBtn = container.querySelector('#btnApplyRoiPlan');

  if (slider) {
    slider.addEventListener('input', () => {
      updateCalculations();
    });
  }

  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newCurr = btn.getAttribute('data-currency');
      if (newCurr === currentCurrency) return;

      currentCurrency = newCurr;
      currencyBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const symbolEl = container.querySelector('#budgetSymbol');
      const minEl = container.querySelector('#budgetMinLabel');
      const maxEl = container.querySelector('#budgetMaxLabel');

      if (currentCurrency === 'USD') {
        slider.min = '300';
        slider.max = '6000';
        slider.step = '100';
        slider.value = '1000';
        if (symbolEl) symbolEl.textContent = '$';
        if (minEl) minEl.textContent = '$300';
        if (maxEl) maxEl.textContent = '$6,000+';
      } else {
        slider.min = '50000';
        slider.max = '1000000';
        slider.step = '10000';
        slider.value = '200000';
        if (symbolEl) symbolEl.textContent = 'Rs';
        if (minEl) minEl.textContent = 'Rs 50K';
        if (maxEl) maxEl.textContent = 'Rs 1.0M+';
      }

      updateCalculations();
    });
  });

  industryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      industryBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentIndustry = btn.getAttribute('data-industry');
      updateCalculations();
    });
  });

  goalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      goalBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentGoal = btn.getAttribute('data-goal');
      updateCalculations();
    });
  });

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const budgetVal = slider ? slider.value : '200000';
      const formattedBudget = `${currentCurrency === 'USD' ? '$' : 'Rs '}${parseInt(budgetVal, 10).toLocaleString()}`;
      
      // Pre-fill contact form if present
      const messageField = document.getElementById('contactMessage');
      const serviceField = document.getElementById('contactService');
      const budgetField = document.getElementById('contactBudget');

      if (serviceField) {
        serviceField.value = 'meta-ads';
      }
      if (budgetField) {
        budgetField.value = formattedBudget;
      }
      if (messageField) {
        messageField.value = `Hi Aashir, I would like to discuss deploying a Meta Ads campaign for my business in the ${currentIndustry} sector with a monthly budget around ${formattedBudget}. Primary objective: ${currentGoal}.`;
      }

      // Smooth scroll to contact
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        const formCard = document.querySelector('.contact-form-card');
        if (formCard) {
          formCard.classList.add('highlight-pulse');
          setTimeout(() => formCard.classList.remove('highlight-pulse'), 1600);
        }
      }
    });
  }
}

function updateCalculations() {
  const slider = document.getElementById('budgetSlider');
  const budgetDisplay = document.getElementById('budgetDisplay');
  const outConversions = document.getElementById('outputConversions');
  const outImpressions = document.getElementById('outputImpressions');
  const outUnitCost = document.getElementById('outputUnitCost');
  const outPrimaryLabel = document.getElementById('outputPrimaryLabel');
  const outUnitCostLabel = document.getElementById('outputUnitCostLabel');

  const tofuVal = document.getElementById('funnelTofuVal');
  const mofuVal = document.getElementById('funnelMofuVal');
  const bofuVal = document.getElementById('funnelBofuVal');

  if (!slider) return;

  const budget = parseFloat(slider.value) || 200000;
  if (budgetDisplay) {
    budgetDisplay.textContent = budget.toLocaleString();
  }

  // Multipliers by industry
  const multipliers = {
    fitness: { cpmPkr: 140, cplPkr: 125, cvr: 0.08 },
    ecommerce: { cpmPkr: 160, cplPkr: 110, cvr: 0.05 },
    b2b: { cpmPkr: 220, cplPkr: 260, cvr: 0.035 },
    services: { cpmPkr: 150, cplPkr: 150, cvr: 0.065 }
  };

  const currentMult = multipliers[currentIndustry] || multipliers.fitness;
  const currSym = currentCurrency === 'USD' ? '$' : 'Rs ';
  const rateFactor = currentCurrency === 'USD' ? 280 : 1; // Approx PKR to USD scaling

  const effectiveBudgetPkr = budget * (currentCurrency === 'USD' ? rateFactor : 1);

  // Impressions calculation
  const impressions = (effectiveBudgetPkr / currentMult.cpmPkr) * 1000;
  const impMin = Math.round(impressions * 0.85);
  const impMax = Math.round(impressions * 1.25);

  const formatLargeNum = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${Math.round(num / 1000)}K`;
    return num.toLocaleString();
  };

  if (outImpressions) {
    outImpressions.textContent = `${formatLargeNum(impMin)} – ${formatLargeNum(impMax)}`;
  }

  // Conversions and Unit Cost based on Goal
  if (currentGoal === 'leads') {
    if (outPrimaryLabel) outPrimaryLabel.textContent = 'Projected Qualified Leads';
    if (outUnitCostLabel) outUnitCostLabel.textContent = 'Target Cost Per Lead (CPL)';

    const unitPkr = currentMult.cplPkr;
    const leads = Math.round(effectiveBudgetPkr / unitPkr);
    const leadsMin = Math.round(leads * 0.88);
    const leadsMax = Math.round(leads * 1.15);

    const cplMin = currentCurrency === 'USD' ? (unitPkr * 0.85 / rateFactor).toFixed(2) : Math.round(unitPkr * 0.88);
    const cplMax = currentCurrency === 'USD' ? (unitPkr * 1.15 / rateFactor).toFixed(2) : Math.round(unitPkr * 1.18);

    if (outConversions) outConversions.textContent = `${leadsMin.toLocaleString()} – ${leadsMax.toLocaleString()}`;
    if (outUnitCost) outUnitCost.textContent = `${currSym}${cplMin} – ${currSym}${cplMax}`;
  } else if (currentGoal === 'sales') {
    if (outPrimaryLabel) outPrimaryLabel.textContent = 'Projected E-Commerce Orders';
    if (outUnitCostLabel) outUnitCostLabel.textContent = 'Target Cost Per Acquisition (CPA)';

    const unitPkr = currentMult.cplPkr * 1.6;
    const sales = Math.round(effectiveBudgetPkr / unitPkr);
    const salesMin = Math.round(sales * 0.85);
    const salesMax = Math.round(sales * 1.18);

    const cpaMin = currentCurrency === 'USD' ? (unitPkr * 0.88 / rateFactor).toFixed(2) : Math.round(unitPkr * 0.9);
    const cpaMax = currentCurrency === 'USD' ? (unitPkr * 1.15 / rateFactor).toFixed(2) : Math.round(unitPkr * 1.2);

    if (outConversions) outConversions.textContent = `${salesMin.toLocaleString()} – ${salesMax.toLocaleString()}`;
    if (outUnitCost) outUnitCost.textContent = `${currSym}${cpaMin} – ${currSym}${cpaMax}`;
  } else {
    // Brand Reach & Discovery
    if (outPrimaryLabel) outPrimaryLabel.textContent = 'Projected Profile Engagements';
    if (outUnitCostLabel) outUnitCostLabel.textContent = 'Cost Per Thousand Reach (CPM)';

    const eng = Math.round(impressions * 0.045);
    const engMin = Math.round(eng * 0.85);
    const engMax = Math.round(eng * 1.2);

    const cpmVal = currentCurrency === 'USD' ? (currentMult.cpmPkr / rateFactor).toFixed(2) : currentMult.cpmPkr;

    if (outConversions) outConversions.textContent = `${formatLargeNum(engMin)} – ${formatLargeNum(engMax)}`;
    if (outUnitCost) outUnitCost.textContent = `${currSym}${cpmVal} Avg CPM`;
  }

  // Funnel Split
  const tofuAmount = Math.round(budget * 0.5);
  const mofuAmount = Math.round(budget * 0.3);
  const bofuAmount = Math.round(budget * 0.2);

  if (tofuVal) tofuVal.textContent = `${currSym}${tofuAmount.toLocaleString()}`;
  if (mofuVal) mofuVal.textContent = `${currSym}${mofuAmount.toLocaleString()}`;
  if (bofuVal) bofuVal.textContent = `${currSym}${bofuAmount.toLocaleString()}`;
}
