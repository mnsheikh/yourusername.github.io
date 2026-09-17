/* =========================================================================
   ABD RC — Lightweight inline icon set (no external dependency)
   Feather-style line icons, 24x24 viewBox, stroke=currentColor.
   Usage: ABD.icon('plane')  -> returns SVG markup string
   ========================================================================= */
(function(){
  const S = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  const wrap = (inner) => `<svg viewBox="0 0 24 24" ${S} xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  const set = {
    plane: `<path d="M2 15l19-7-9 12-2-7-8-2z"/><path d="M12 12l3-3"/>`,
    drone: `<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="M7.6 7.6L10.5 10.5M16.4 7.6L13.5 10.5M7.6 16.4L10.5 13.5M16.4 16.4L13.5 13.5"/><rect x="10" y="10" width="4" height="4" rx="1"/>`,
    fpv: `<rect x="3" y="9" width="18" height="9" rx="2"/><path d="M8 9V6a4 4 0 018 0v3"/><circle cx="8" cy="13.5" r="1.4"/><circle cx="16" cy="13.5" r="1.4"/>`,
    heli: `<circle cx="12" cy="13" r="4"/><path d="M2 6h20M12 6v3"/><path d="M9 17l-3 4M15 17l3 4"/>`,
    car: `<path d="M4 16V11l2-5h12l2 5v5"/><path d="M2 16h20"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/>`,
    engineering: `<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.2 2.2M17.6 17.6l2.2 2.2M2 12h3M19 12h3M4.2 19.8l2.2-2.2M17.6 6.4l2.2-2.2"/>`,
    manufacturing: `<path d="M3 19h18M4 19V9l5 3V9l5 3V9l4 2.5V19"/>`,
    repair: `<path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/>`,
    electronics: `<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 4V2M15 4V2M9 22v-2M15 22v-2M4 9H2M4 15H2M22 9h-2M22 15h-2"/><circle cx="12" cy="12" r="3"/>`,
    test: `<path d="M9 2v6l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V2"/><path d="M8.5 15h7"/>`,
    check: `<polyline points="20 6 9 17 4 12"/>`,
    arrowRight: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
    chevronDown: `<polyline points="6 9 12 15 18 9"/>`,
    close: `<path d="M18 6L6 18M6 6l12 12"/>`,
    plus: `<path d="M12 5v14M5 12h14"/>`,
    search: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>`,
    menu: `<path d="M3 6h18M3 12h18M3 18h18"/>`,
    star: `<polygon points="12 2 15 9 22 9.3 16.7 14 18.5 21 12 17.2 5.5 21 7.3 14 2 9.3 9 9"/>`,
    upload: `<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3"/>`,
    file: `<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6"/>`,
    trash: `<path d="M3 6h18M8 6V4h8v2M6 6l1 14a1 1 0 001 1h8a1 1 0 001-1l1-14"/>`,
    phone: `<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.2 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.5 2.9.6a2 2 0 011.7 2z"/>`,
    mail: `<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7L22 6"/>`,
    mapPin: `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/>`,
    clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>`,
    whatsapp: `<path d="M4 20l1.4-4.1A8 8 0 1112 20a8 8 0 01-4-1.1L4 20z"/><path d="M8.5 9.5c.2 3 2.5 5.3 5.5 5.5" stroke-dasharray="0"/>`,
    chat: `<path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`,
    send: `<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>`,
    sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,
    moon: `<path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>`,
    user: `<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>`,
    users: `<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.6 3.1-6 7-6s7 2.4 7 6"/><circle cx="17.5" cy="8.5" r="2.8"/><path d="M16 14.2c2.6.6 4.5 2.6 4.5 5.8"/>`,
    briefcase: `<rect x="2" y="7" width="20" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>`,
    grid: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`,
    folder: `<path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>`,
    tool: `<path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/>`,
    calendar: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>`,
    message: `<path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`,
    trending: `<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>`,
    dollar: `<path d="M12 2v20M17 7a4 4 0 00-4-3H10a3.5 3.5 0 000 7h4a3.5 3.5 0 010 7h-3a4 4 0 01-4-3"/>`,
    graduation: `<path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>`,
    shield: `<path d="M12 2l8 3v6c0 5-3.4 8.8-8 11-4.6-2.2-8-6-8-11V5z"/>`,
    package: `<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>`,
    facebook: `<path d="M15 3h-2a5 5 0 00-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3z"/>`,
    instagram: `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>`,
    youtube: `<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l6 3-6 3z" fill="currentColor" stroke="none"/>`,
    linkedin: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4.5a2.5 2.5 0 015 0V17M11 10v7"/>`,
    tiktok: `<path d="M14 3v10.5a3.5 3.5 0 11-3-3.46M14 3a5 5 0 005 5"/>`,
    building: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1"/>`,
    globe: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>`,
    layers: `<polygon points="12 2 21 7 12 12 3 7"/><polyline points="3 12 12 17 21 12"/><polyline points="3 17 12 22 21 17"/>`,
    settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/>`,
    logout: `<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>`,
    bell: `<path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/>`,
    filter: `<polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/>`,
    download: `<path d="M12 4v12M7 11l5 5 5-5"/><path d="M4 20h16"/>`,
    eye: `<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>`,
    zap: `<polygon points="13 2 3 14 11 14 9 22 21 10 13 10 13 2"/>`
  };

  window.ABD = window.ABD || {};
  window.ABD.icon = function(name, cls){
    const inner = set[name] || set.zap;
    const svg = wrap(inner);
    return cls ? svg.replace('<svg ', `<svg class="${cls}" `) : svg;
  };

  /* Reusable "photography placeholder" tile — swap for a real <img> when
     official ABD RC photography is available. Keeps a consistent, on-brand
     look (grid + icon) instead of a broken image state. */
  window.ABD.mediaPlaceholder = function(iconName, label){
    return `<div class="media-ph" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
      <span class="media-ph-icon">${window.ABD.icon(iconName)}</span>
      ${label ? `<span style="position:absolute;bottom:10px;left:10px;font-family:var(--font-mono);font-size:.62rem;color:var(--text-muted);letter-spacing:.04em;">${label}</span>` : ''}
    </div>`;
  };
})();
