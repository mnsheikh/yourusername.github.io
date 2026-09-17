/* =========================================================================
   ABD RC — Gallery: category filter + masonry render + lightbox
   ========================================================================= */
(function(){
  function render(list){
    const grid = document.getElementById('gallery-grid');
    if(!grid) return;
    grid.innerHTML = list.map((g,i) => `
      <div class="masonry-item reveal in" style="height:${g.h}px;" data-index="${i}" data-cat="${g.cat}">
        ${window.ABD.mediaPlaceholder(g.icon)}
        <div class="cap"><b>${g.title}</b><span>${labelFor(g.cat)}</span></div>
      </div>`).join('');
  }

  function labelFor(cat){
    const map = { aircraft:"RC Aircraft", workshop:"Workshop", uav:"UAV Operations", electronics:"Electronics",
      manufacturing:"Manufacturing", "flight-testing":"Flight Testing", fpv:"FPV", training:"Training",
      "rc-cars":"RC Cars", helicopters:"RC Helicopters" };
    return map[cat] || cat;
  }

  let current = window.ABD.gallery;

  function initFilters(){
    const bar = document.getElementById('gallery-filters');
    if(!bar) return;
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if(!btn) return;
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      current = cat === 'all' ? window.ABD.gallery : window.ABD.gallery.filter(g => g.cat === cat);
      render(current);
    });
  }

  function initLightbox(){
    const lb = document.getElementById('lightbox');
    if(!lb) return;
    let idx = 0;
    function open(i){
      idx = i;
      const item = current[idx];
      lb.querySelector('.lb-media').innerHTML = window.ABD.mediaPlaceholder(item.icon);
      lb.querySelector('.lb-caption').textContent = `${item.title} — ${labelFor(item.cat)}`;
      lb.classList.add('open');
    }
    function close(){ lb.classList.remove('open'); }
    function nav(dir){ idx = (idx + dir + current.length) % current.length; open(idx); }

    document.getElementById('gallery-grid')?.addEventListener('click', (e) => {
      const item = e.target.closest('.masonry-item');
      if(item) open(Number(item.dataset.index));
    });
    lb.querySelector('.lb-close').addEventListener('click', close);
    lb.querySelector('.lb-prev').addEventListener('click', () => nav(-1));
    lb.querySelector('.lb-next').addEventListener('click', () => nav(1));
    lb.addEventListener('click', (e) => { if(e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if(!lb.classList.contains('open')) return;
      if(e.key === 'Escape') close();
      if(e.key === 'ArrowRight') nav(1);
      if(e.key === 'ArrowLeft') nav(-1);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('gallery-grid')) return;
    render(current);
    initFilters();
    initLightbox();
  });
})();
