/* =========================================================================
   ABD RC — Shared renderer for the 10 individual service detail pages.
   Reads data-slug from <body> and fills #service-items / #related-services.
   ========================================================================= */
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const slug = document.body.getAttribute('data-slug');
    const svc = window.ABD.services.find(s => s.slug === slug);
    if(!svc) return;

    const itemsWrap = document.getElementById('service-items');
    if(itemsWrap){
      itemsWrap.innerHTML = svc.items.map(item => `
        <div class="svc-row">
          <span class="ic">${window.ABD.icon('check')}</span>
          <div><h4>${item}</h4></div>
        </div>`).join('');
    }

    const related = document.getElementById('related-services');
    if(related){
      related.innerHTML = window.ABD.services.filter(s => s.slug !== slug).slice(0,3).map(s => `
        <div class="card reveal">
          <div class="ic">${window.ABD.icon(s.icon)}</div>
          <h3>${s.name}</h3>
          <p>${s.short}</p>
          <a class="card-link" href="service-${s.slug}.html">Learn More ${window.ABD.icon('arrowRight')}</a>
        </div>`).join('');
      if(window.initReveal) window.initReveal();
    }
  });
})();
