/* =========================================================================
   ABD RC — Form behaviors: multi-step quote wizard, booking, contact,
   file-upload UI, radio-card selection. All submissions are mocked
   client-side (see `mockSubmit`) — each form has a clearly marked
   integration point for a real backend/API.
   ========================================================================= */
(function(){

  function genRef(prefix){
    return prefix + '-' + Math.random().toString(36).slice(2,6).toUpperCase() + Date.now().toString().slice(-4);
  }

  /* ---------------- Multi-step wizard (Request a Quote) ---------------- */
  function initStepper(formId){
    const form = document.getElementById(formId);
    if(!form) return;
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const nodes = Array.from(document.querySelectorAll(`#${formId}-stepper .step-node`));
    const prog = document.querySelector(`#${formId}-stepper .prog`);
    let current = 0;

    function render(){
      steps.forEach((s,i) => s.classList.toggle('active', i === current));
      nodes.forEach((n,i) => {
        n.classList.toggle('active', i === current);
        n.classList.toggle('done', i < current);
      });
      if(prog) prog.style.width = (current / (nodes.length - 1) * 100) + '%';
      form.querySelector('.form-nav [data-action="back"]').style.visibility = current === 0 ? 'hidden' : 'visible';
      const nextBtn = form.querySelector('.form-nav [data-action="next"]');
      const submitBtn = form.querySelector('.form-nav [data-action="submit"]');
      if(nextBtn) nextBtn.classList.toggle('hidden', current === steps.length - 1);
      if(submitBtn) submitBtn.classList.toggle('hidden', current !== steps.length - 1);
    }

    function validateStep(){
      const required = steps[current].querySelectorAll('[required]');
      for(const field of required){
        if(!field.value || (field.type === 'checkbox' && !field.checked)){
          field.focus();
          field.style.borderColor = 'var(--danger)';
          return false;
        }
        field.style.borderColor = '';
      }
      return true;
    }

    form.addEventListener('click', (e) => {
      if(e.target.closest('[data-action="next"]')){
        e.preventDefault();
        if(!validateStep()) return;
        current = Math.min(current + 1, steps.length - 1);
        render();
        form.closest('.panel,.card,section')?.scrollIntoView({behavior:'smooth', block:'start'});
      }
      if(e.target.closest('[data-action="back"]')){
        e.preventDefault();
        current = Math.max(current - 1, 0);
        render();
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if(!validateStep()) return;
      mockSubmit(form, 'PRJ');
    });

    render();
  }

  /* ---------------- Generic single-step forms (booking, contact) ---------------- */
  function initSimpleForm(formId, prefix){
    const form = document.getElementById(formId);
    if(!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      mockSubmit(form, prefix);
    });
  }

  /* Integration point: replace this with a real fetch() to your backend/CRM.
     Example:
       await fetch('/api/quotes', { method:'POST', body: new FormData(form) }); */
  function mockSubmit(form, prefix){
    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Submitting...';
    btn.disabled = true;
    setTimeout(() => {
      const ref = genRef(prefix);
      const wrap = form.closest('.form-wrap') || form.parentElement;
      const success = form.parentElement.querySelector('.success-box') || document.getElementById(form.dataset.successTarget || '');
      form.style.display = 'none';
      if(success){
        success.classList.remove('hidden');
        const refEl = success.querySelector('.ref-code');
        if(refEl) refEl.textContent = ref;
      }
      btn.textContent = original;
      btn.disabled = false;
    }, 900);
  }

  /* ---------------- Radio card selection ---------------- */
  function initRadioCards(){
    document.querySelectorAll('.radio-card').forEach(card => {
      const input = card.querySelector('input');
      const sync = () => card.classList.toggle('checked', input.checked);
      input?.addEventListener('change', () => {
        document.querySelectorAll(`.radio-card input[name="${input.name}"]`).forEach(i => i.closest('.radio-card').classList.remove('checked'));
        sync();
      });
      sync();
    });
  }

  /* ---------------- File upload UI ---------------- */
  function initFileDrop(dropId, listId, inputId){
    const drop = document.getElementById(dropId);
    const list = document.getElementById(listId);
    const input = document.getElementById(inputId);
    if(!drop || !input) return;
    const files = [];

    function renderList(){
      list.innerHTML = files.map((f,i) => `<li><span>${f.name} <span class="text-muted">(${(f.size/1024).toFixed(0)} KB)</span></span><button type="button" data-i="${i}" aria-label="Remove file">${window.ABD.icon('close')}</button></li>`).join('');
    }
    function addFiles(fileList){
      Array.from(fileList).forEach(f => files.push(f));
      renderList();
    }

    drop.addEventListener('click', () => input.click());
    drop.addEventListener('dragover', (e) => { e.preventDefault(); drop.classList.add('drag'); });
    drop.addEventListener('dragleave', () => drop.classList.remove('drag'));
    drop.addEventListener('drop', (e) => {
      e.preventDefault(); drop.classList.remove('drag');
      addFiles(e.dataTransfer.files);
    });
    input.addEventListener('change', () => addFiles(input.files));
    list.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-i]');
      if(!btn) return;
      files.splice(Number(btn.dataset.i), 1);
      renderList();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initStepper('quote-form');
    initStepper('booking-wizard');
    initSimpleForm('contact-form', 'MSG');
    initSimpleForm('booking-form', 'BKG');
    initSimpleForm('careers-form', 'APP');
    initSimpleForm('product-inquiry-form', 'INQ');
    initSimpleForm('portal-login-form', 'LOGIN');
    initRadioCards();
    initFileDrop('file-drop', 'file-list', 'file-input');
  });
})();
