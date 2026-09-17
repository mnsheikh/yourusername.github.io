/* =========================================================================
   ABD RC — Core interactivity: reveal animations, counters, FAQ, tabs
   ========================================================================= */
(function(){

  /* ---------- Scroll reveal ---------- */
  function initReveal(){
    const els = document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){ els.forEach(el=>el.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Animated counters ---------- */
  function initCounters(){
    const counters = document.querySelectorAll('[data-counter]');
    if(!counters.length) return;
    const animate = (el) => {
      const target = parseFloat(el.getAttribute('data-counter'));
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1400;
      const start = performance.now();
      function tick(now){
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };
    if(!('IntersectionObserver' in window)){ counters.forEach(animate); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ animate(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => io.observe(el));
  }

  /* ---------- FAQ accordion (delegated, works for dynamically-rendered items) ---------- */
  function initFaq(){
    document.addEventListener('click', (e) => {
      const q = e.target.closest('.faq-q');
      if(!q) return;
      const item = q.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item.open').forEach(other => {
        if(other !== item){ other.classList.remove('open'); other.querySelector('.faq-a').style.maxHeight = null; }
      });
      item.classList.toggle('open', !isOpen);
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
    });
  }

  /* ---------- Tabs (dashboard / service pages) ---------- */
  function initTabs(){
    document.querySelectorAll('.tabs').forEach(tabBar => {
      const group = tabBar.getAttribute('data-tabs');
      tabBar.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          tabBar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const target = btn.getAttribute('data-tab');
          document.querySelectorAll(`.tab-panel[data-group="${group}"]`).forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-tab') === target);
          });
        });
      });
    });
  }

  /* ---------- Newsletter mock submit ---------- */
  function initNewsletter(){
    const form = document.getElementById('newsletter-form');
    if(!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      btn.disabled = true;
      form.querySelector('input').value = '';
      /* Integration point: POST to /api/newsletter/subscribe */
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3000);
    });
  }

  /* ---------- Active nav highlight fallback for pages without data-page ---------- */
  function markYear(){
    document.querySelectorAll('#cur-year').forEach(el => el.textContent = new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initCounters();
    initFaq();
    initTabs();
    initNewsletter();
    markYear();
  });

  /* Components.js injects header/footer asynchronously-safe (sync in practice),
     but run reveal/counters again shortly after in case content was added late. */
  window.addEventListener('load', () => { initReveal(); initCounters(); });
})();
