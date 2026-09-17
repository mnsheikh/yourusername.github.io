/* =========================================================================
   ABD RC — Shared Navbar, Mega Menu, Mobile Menu, Footer, Search, Theme
   Injects into #site-header / #site-footer / #float-stack placeholders
   present on every page. Keeps navigation identical site-wide.
   ========================================================================= */
(function(){
  const I = (n,c) => window.ABD.icon(n,c);

  const NAV_SERVICES = window.ABD.services;

  function megaMenu(){
    const items = NAV_SERVICES.map(s => `
      <a class="mega-item" href="service-${s.slug}.html">
        <span class="ic">${I(s.icon)}</span>
        <span><strong>${s.name}</strong><span>${s.short.slice(0,54)}${s.short.length>54?'…':''}</span></span>
      </a>`).join('');
    return `
      <div class="mega">
        <div class="mega-grid">${items}</div>
        <div class="mega-feature">
          <div>
            <span class="eyebrow">Engineering</span>
            <h4>Custom RC &amp; UAV Engineering</h4>
            <p>From concept to flight-tested delivery — CAD, prototyping, CNC and composite fabrication under one roof.</p>
          </div>
          <a class="btn btn-outline btn-sm" href="service-engineering.html">Explore Engineering ${I('arrowRight')}</a>
        </div>
      </div>`;
  }

  function headerHTML(active){
    const link = (href,label,act) => `<a class="nav-link ${act===active?'active':''}" href="${href}">${label}</a>`;
    return `
    <div class="container nav-wrap">
      <a href="index.html" class="brand">
        <span class="brand-mark">${I('drone')}</span>
        <span><span>ABD RC</span><small>Engineering &bull; Innovation &bull; Flight</small></span>
      </a>
      <ul class="nav-main">
        <li>${link('index.html','Home','home')}</li>
        <li>${link('services.html','Services','services')}${megaMenu()}</li>
        <li>${link('service-engineering.html','Engineering','engineering')}</li>
        <li>${link('projects.html','Projects','projects')}</li>
        <li>${link('training.html','Training','training')}</li>
        <li>${link('parts-equipment.html','Products','products')}</li>
        <li>${link('about.html','About','about')}</li>
        <li>${link('contact.html','Contact','contact')}</li>
      </ul>
      <div class="nav-actions">
        <button class="icon-btn" id="search-open" aria-label="Search site">${I('search')}</button>
        <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">${I('moon')}</button>
        <a href="quote.html" class="btn btn-primary btn-sm">Request a Quote</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu"><span></span></button>
      </div>
    </div>`;
  }

  function mobilePanel(){
    const svcLinks = NAV_SERVICES.map(s=>`<a href="service-${s.slug}.html">${s.name}</a>`).join('');
    return `
    <div class="mobile-panel" id="mobile-panel">
      <button type="button" id="mobile-search-open" style="display:flex;align-items:center;gap:10px;padding:16px 4px;border-bottom:1px solid var(--border);font-size:1.05rem;font-weight:500;width:100%;text-align:left;color:var(--text-secondary);">${I('search')} Search the site</button>
      <a href="index.html">Home</a>
      <details>
        <summary class="mobile-group-toggle" style="padding:16px 4px;border-bottom:1px solid var(--border);cursor:pointer;font-size:1.05rem;font-weight:500;">Services ${I('chevronDown')}</summary>
        <div class="mobile-sub">
          <a href="services.html">All Services</a>
          ${svcLinks}
        </div>
      </details>
      <a href="service-engineering.html">Engineering</a>
      <a href="projects.html">Projects</a>
      <a href="training.html">Training</a>
      <a href="consultancy.html">Consultancy</a>
      <a href="parts-equipment.html">Products</a>
      <a href="gallery.html">Gallery</a>
      <a href="blog.html">Blog</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <div class="btn-group mt-2">
        <a href="quote.html" class="btn btn-primary btn-block">Request a Quote</a>
        <a href="book-service.html" class="btn btn-outline btn-block">Book a Service</a>
      </div>
    </div>`;
  }

  function footerHTML(){
    return `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="brand">
            <span class="brand-mark">${I('drone')}</span>
            <span><span>ABD RC</span><small>Engineering &bull; Innovation &bull; Flight</small></span>
          </a>
          <p>Professional RC aircraft, UAV, FPV, engineering, maintenance and training services — built for performance, reliability and innovation.</p>
          <div class="social-row">
            <a class="icon-btn" href="#" aria-label="Facebook (placeholder)">${I('facebook')}</a>
            <a class="icon-btn" href="#" aria-label="Instagram (placeholder)">${I('instagram')}</a>
            <a class="icon-btn" href="#" aria-label="YouTube (placeholder)">${I('youtube')}</a>
            <a class="icon-btn" href="#" aria-label="LinkedIn (placeholder)">${I('linkedin')}</a>
            <a class="icon-btn" href="#" aria-label="TikTok (placeholder)">${I('tiktok')}</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <a href="service-rc-aircraft.html">RC Aircraft</a>
          <a href="service-uav-drones.html">UAV &amp; Drones</a>
          <a href="service-fpv.html">FPV</a>
          <a href="service-helicopters.html">Helicopters</a>
          <a href="service-rc-cars.html">RC Cars</a>
          <a href="service-engineering.html">Engineering</a>
          <a href="service-repair-maintenance.html">Repair</a>
          <a href="training.html">Training</a>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <a href="about.html">About</a>
          <a href="projects.html">Projects</a>
          <a href="about.html#team">Team</a>
          <a href="careers.html">Careers</a>
          <a href="blog.html">Blog</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h5>Support</h5>
          <a href="faq.html">FAQ</a>
          <a href="quote.html">Request Quote</a>
          <a href="book-service.html">Book Service</a>
          <a href="portal-login.html">Customer Portal</a>
          <a href="contact.html">Technical Support</a>
        </div>
        <div class="footer-col">
          <h5>Stay Updated</h5>
          <p style="color:var(--text-muted);font-size:.86rem;">Subscribe for engineering notes, project features and training updates.</p>
          <form class="newsletter" id="newsletter-form">
            <input type="email" required placeholder="Email address" aria-label="Email address">
            <button class="btn btn-primary btn-sm" type="submit">Join</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="cur-year"></span> ABD RC. All rights reserved. [Registered business details placeholder]</span>
        <div class="footer-legal">
          <a href="legal-privacy.html">Privacy Policy</a>
          <a href="legal-terms.html">Terms &amp; Conditions</a>
          <a href="legal-cookies.html">Cookie Policy</a>
          <a href="legal-service-terms.html">Service Terms</a>
          <a href="legal-warranty.html">Warranty Policy</a>
        </div>
      </div>
    </div>`;
  }

  function floatStack(){
    return `
      <a class="fab fab-whatsapp" href="https://wa.me/10000000000" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I('whatsapp')}</a>
      <button class="fab fab-chat" id="chat-toggle" aria-label="Open ABD RC Tech Assistant">${I('chat')}<span class="ping">1</span></button>
    `;
  }

  function searchModal(){
    return `
    <div class="modal-overlay" id="search-modal">
      <div class="modal-box" style="max-width:640px;">
        <button class="modal-close" id="search-close">${I('close')}</button>
        <div class="modal-body">
          <div class="search-box" style="max-width:none;margin-bottom:18px;">
            ${I('search')}
            <input id="search-input" placeholder="Search services, products, projects, articles..." autocomplete="off">
          </div>
          <div id="search-results" style="display:flex;flex-direction:column;gap:6px;max-height:50vh;overflow-y:auto;"></div>
        </div>
      </div>
    </div>`;
  }

  function init(){
    const header = document.getElementById('site-header');
    const footer = document.getElementById('site-footer');
    const floats = document.getElementById('float-stack');
    const active = document.body.getAttribute('data-page') || '';

    if(header){
      header.innerHTML = headerHTML(active);
      document.body.insertAdjacentHTML('beforeend', mobilePanel());
    }
    if(footer) footer.innerHTML = footerHTML();
    if(floats) floats.innerHTML = floatStack();
    document.body.insertAdjacentHTML('beforeend', searchModal());

    const yr = document.getElementById('cur-year');
    if(yr) yr.textContent = new Date().getFullYear();

    /* Scroll state */
    const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 30);
    onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

    /* Mobile menu */
    const toggle = document.getElementById('nav-toggle');
    const panel = document.getElementById('mobile-panel');
    if(toggle && panel){
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        panel.classList.toggle('open');
        document.body.style.overflow = panel.classList.contains('open') ? 'hidden' : '';
      });
    }

    /* Theme toggle */
    const themeBtn = document.getElementById('theme-toggle');
    const applyTheme = (t) => {
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('abd-theme', t);
      if(themeBtn) themeBtn.innerHTML = I(t === 'light' ? 'sun' : 'moon');
    };
    applyTheme(localStorage.getItem('abd-theme') || 'dark');
    if(themeBtn){
      themeBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(cur);
      });
    }

    /* Search modal */
    const searchModalEl = document.getElementById('search-modal');
    const openSearch = () => { searchModalEl.classList.add('open'); document.getElementById('search-input').focus(); };
    const closeSearch = () => searchModalEl.classList.remove('open');
    document.getElementById('search-open')?.addEventListener('click', openSearch);
    document.getElementById('mobile-search-open')?.addEventListener('click', () => {
      panel?.classList.remove('open'); toggle?.classList.remove('open'); document.body.style.overflow = '';
      openSearch();
    });
    document.getElementById('search-close')?.addEventListener('click', closeSearch);
    searchModalEl.addEventListener('click', (e) => { if(e.target === searchModalEl) closeSearch(); });
    document.addEventListener('keydown', (e) => {
      if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); openSearch(); }
      if(e.key === 'Escape') closeSearch();
    });

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    function runSearch(q){
      q = q.trim().toLowerCase();
      if(!q){ searchResults.innerHTML = '<p class="text-muted" style="font-size:.85rem;">Try “UAV”, “FPV training”, “propeller”, or “carbon fiber”.</p>'; return; }
      const results = [];
      window.ABD.services.forEach(s => { if((s.name+s.short).toLowerCase().includes(q)) results.push({t:s.name,c:'Service',href:`service-${s.slug}.html`}); });
      window.ABD.projects.forEach(p => { if((p.name+p.category).toLowerCase().includes(q)) results.push({t:p.name,c:'Project · '+p.category,href:`projects.html`}); });
      window.ABD.products.forEach(p => { if((p.name+p.cat).toLowerCase().includes(q)) results.push({t:p.name,c:'Product · '+p.cat,href:`parts-equipment.html`}); });
      window.ABD.blog.forEach(b => { if((b.title+b.excerpt).toLowerCase().includes(q)) results.push({t:b.title,c:'Article',href:`blog-article.html?slug=${b.slug}`}); });
      searchResults.innerHTML = results.length ? results.slice(0,10).map(r=>`
        <a href="${r.href}" style="display:flex;justify-content:space-between;padding:12px 14px;border:1px solid var(--border);border-radius:10px;font-size:.88rem;">
          <span>${r.t}</span><span class="text-muted" style="font-size:.76rem;">${r.c}</span>
        </a>`).join('') : '<p class="text-muted" style="font-size:.85rem;">No results found.</p>';
    }
    searchInput?.addEventListener('input', (e) => runSearch(e.target.value));
    runSearch('');
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
