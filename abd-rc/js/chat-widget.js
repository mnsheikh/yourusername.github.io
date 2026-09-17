/* =========================================================================
   ABD RC TECH ASSISTANT — Frontend chat widget UI
   -------------------------------------------------------------------------
   This ships a complete, working UI with a small rule-based responder so
   the assistant is useful out of the box. To connect a real AI backend:

   1. Replace `getBotReply(userText)` below with a fetch() call to your
      inference endpoint, e.g.:

        async function getBotReply(userText){
          const res = await fetch('/api/assistant', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ message: userText, history })
          });
          const data = await res.json();
          return data.reply;
        }

   2. Keep the same render/typing-indicator flow — only the reply source
      changes. `history` (array of {role, text}) is already tracked below.
   ========================================================================= */
(function(){
  const I = (n) => window.ABD.icon(n);

  const GREETING = "Hi, I'm the ABD RC Tech Assistant. I can help you choose a service, understand components, get a quote, or book training. What are you working on?";

  const SUGGESTIONS = [
    "Help me choose a motor",
    "I need a quote for a custom UAV",
    "What training courses do you offer?",
    "My aircraft won't hold range — help",
    "Book a repair service"
  ];

  const history = [];

  function widgetHTML(){
    return `
    <div class="chat-window" id="chat-window" role="dialog" aria-label="ABD RC Tech Assistant">
      <div class="chat-head">
        <div class="av">${I('zap')}</div>
        <div>
          <strong>ABD RC Tech Assistant</strong>
          <span>Online · Typically replies instantly</span>
        </div>
        <button id="chat-close" aria-label="Close chat">${I('close')}</button>
      </div>
      <div class="chat-body" id="chat-body"></div>
      <div class="chat-suggestions" id="chat-suggestions"></div>
      <form class="chat-input" id="chat-form">
        <input id="chat-text" placeholder="Ask about services, parts, quotes..." autocomplete="off">
        <button type="submit" aria-label="Send">${I('send')}</button>
      </form>
    </div>`;
  }

  function addMsg(text, who){
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = 'msg ' + (who === 'user' ? 'msg-user' : 'msg-bot');
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    history.push({ role: who, text });
  }

  function showTyping(){
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = 'msg msg-bot';
    div.id = 'typing-indicator';
    div.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }
  function hideTyping(){ document.getElementById('typing-indicator')?.remove(); }

  /* ---------------- Rule-based responder (replace with API call for real AI) ---------------- */
  function getBotReply(textRaw){
    const t = textRaw.toLowerCase();

    if(/motor|kv|propeller|prop\b/.test(t))
      return "Motor and propeller choice depends on your airframe weight and mission. As a rule: lower-KV motors suit larger, slower props (sport/scale aircraft); higher-KV suits smaller, faster props (FPV/racing). Want me to route this to our Consultancy team, or check our Motor Selection article in the Knowledge Center?";

    if(/battery|lipo|charge/.test(t))
      return "For LiPo batteries: match voltage (S count) and capacity (mAh) to your power system, and never exceed your ESC's continuous current rating. See our LiPo Safety guide in the Blog, or ask for a battery diagnostic via Book a Service.";

    if(/quote|price|cost|budget/.test(t))
      return "I can start a project quote for you right now — head to Request a Quote and our team will follow up with a detailed proposal, usually within 1–2 business days.";

    if(/train|course|learn|certif/.test(t))
      return "We run four programs: RC Aircraft Beginner, Advanced RC Aircraft, FPV Pilot, and UAV Operator. Want to see the curriculum and book a seat? Visit the Training page.";

    if(/repair|crash|broken|fix|wing|fuselage/.test(t))
      return "Sorry to hear that. We handle crash repair, structural rebuilds and electronics replacement. You can book a repair directly — go to Book a Service and select 'Repair & Maintenance'.";

    if(/uav|drone|mapping|inspection|agri/.test(t))
      return "For UAV platforms we cover multirotor, fixed-wing, VTOL and hybrid builds, plus payload and autopilot integration. Tell me your mission (mapping, inspection, agriculture) and I can point you to the right starting spec.";

    if(/fpv|goggles|vtx|freestyle|racing/.test(t))
      return "FPV builds, electronics tuning and pilot training are all under FPV Services. Racing, freestyle or long-range — which are you building toward?";

    if(/range|link|signal|lost|failsafe/.test(t))
      return "Range and link issues are usually antenna placement, damage, or interference — rarely raw transmitter power. I'd recommend a Radio-System Troubleshooting booking so we can bench-test the full chain.";

    if(/contact|human|agent|talk to (a|an) (person|engineer)/.test(t))
      return "Of course — you can reach the team directly on the Contact page, or request a callback there. Would you like me to open it for you?";

    if(/hello|hi there|^hi$|hey/.test(t))
      return GREETING;

    return "Good question — for a precise, engineer-reviewed answer I'd recommend either our Consultancy service or a direct message via Contact. In the meantime, browse Services or the Knowledge Center for related guides. (This assistant is a demo UI — connect it to a live AI backend for open-ended answers.)";
  }

  function send(text){
    if(!text.trim()) return;
    addMsg(text, 'user');
    document.getElementById('chat-text').value = '';
    showTyping();
    setTimeout(() => {
      hideTyping();
      addMsg(getBotReply(text), 'bot');
    }, 700 + Math.random() * 500);
  }

  function renderSuggestions(){
    const wrap = document.getElementById('chat-suggestions');
    wrap.innerHTML = SUGGESTIONS.map(s => `<button type="button" class="chip">${s}</button>`).join('');
    wrap.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => send(chip.textContent));
    });
  }

  function init(){
    const stack = document.getElementById('float-stack');
    if(!stack) return;
    document.body.insertAdjacentHTML('beforeend', widgetHTML());

    const win = document.getElementById('chat-window');
    let opened = false;
    const openChat = () => {
      win.classList.add('open');
      document.getElementById('chat-toggle')?.querySelector('.ping')?.remove();
      if(!opened){ addMsg(GREETING, 'bot'); renderSuggestions(); opened = true; }
    };

    document.addEventListener('click', (e) => {
      if(e.target.closest('#chat-toggle')) openChat();
      if(e.target.closest('#chat-close')) win.classList.remove('open');
    });

    document.getElementById('chat-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      send(document.getElementById('chat-text').value);
    });

    /* Wire up but wait for #chat-toggle to exist (injected by components.js) */
    document.addEventListener('click', function delegate(e){
      const btn = e.target.closest('#chat-toggle');
      if(btn) openChat();
    });
  }

  /* Wait until components.js has injected #float-stack content */
  const boot = () => setTimeout(init, 50);
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
