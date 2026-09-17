# ABD RC — Website

Professional RC aircraft, UAV, FPV, engineering, manufacturing, repair, training and consultancy services website for **ABD RC**.

Live target domain: `abdrc.wuaze.com`

## Tech stack

Dependency-free static site: semantic HTML5 + a custom CSS design system + vanilla JavaScript (no build step, no framework, no external runtime dependency). This was a deliberate choice: the site needs to deploy on plain static hosting (GitHub Pages / wuaze.com / any shared host) with nothing more than uploading files — no `npm run build`, no Node server, no CI pipeline required.

```
abd-rc/
├── index.html                  Home
├── about.html
├── services.html                Services overview
├── service-*.html               10 individual service pages
├── training.html
├── consultancy.html
├── parts-equipment.html         Product catalog + inquiry workflow
├── projects.html                Portfolio with detail modal
├── gallery.html                 Masonry gallery + lightbox
├── blog.html / blog-article.html  Knowledge Center (data-driven)
├── testimonials.html
├── faq.html
├── contact.html
├── quote.html                   Multi-step "Request a Quote" wizard
├── book-service.html            Service booking form
├── careers.html
├── portal-login.html / portal-dashboard.html   Customer portal (demo UI, mock data)
├── admin-dashboard.html         Admin dashboard (demo UI, mock data)
├── legal-*.html                 Privacy, Terms, Cookies, Service Terms, Warranty
├── 404.html
├── sitemap.xml, robots.txt
├── css/style.css                Design system (tokens, components, responsive rules)
├── js/
│   ├── icons.js                 Inline SVG icon set + media-placeholder helper
│   ├── data.js                  All sample content (services, projects, products, blog, testimonials, FAQ, team, gallery)
│   ├── components.js            Navbar, mega menu, mobile nav, footer, search, theme toggle
│   ├── main.js                  Scroll reveal, counters, FAQ accordion, tabs
│   ├── forms.js                 Multi-step wizard logic, file upload UI, mock submission
│   ├── gallery.js                Gallery filter + lightbox
│   ├── chat-widget.js           "ABD RC Tech Assistant" chat UI
│   └── service-page.js          Shared renderer for the 10 service detail pages
└── images/favicon.svg
```

The existing personal portfolio at the repository root (`index.html.html`) was left untouched — this project lives entirely under `/abd-rc/`.

## Running locally

No build step. From the `abd-rc/` folder:

```bash
python3 -m http.server 8080
# or: npx http-server -p 8080
```

Then open `http://localhost:8080/index.html`.

## Deployment

**Any static host works** — copy the contents of `abd-rc/` to the host's public root.

- **GitHub Pages**: if this repo is served from the root, move/copy `abd-rc/*` to the repo root (or configure Pages to serve from a subdirectory, which GitHub Pages does not natively support — so for a clean `abdrc.wuaze.com`-style root deploy, the contents of `abd-rc/` should be the root of whatever host serves that domain).
- **wuaze.com / any shared/FTP host**: upload the contents of `abd-rc/` (not the folder itself) to the host's `public_html`/root directory via FTP or the host's file manager.
- **Any other static host** (Netlify, Cloudflare Pages, Vercel static, S3, etc.): set the publish directory to `abd-rc/` with no build command.

No environment variables or server-side services are required for the site to render.

## Backend / API integration points

This is a fully-designed **frontend**. Every workflow that would need a backend in production is implemented as a complete UI with mock/local behavior and a clearly marked integration point in the code:

| Feature | File | What to connect |
|---|---|---|
| Request a Quote | `js/forms.js` → `mockSubmit()` | POST form data (+ files) to your CRM/email API |
| Book a Service | `js/forms.js` → `mockSubmit()` | POST booking to your scheduling backend |
| Contact form | `js/forms.js` → `mockSubmit()` | POST to email/CRM endpoint |
| Careers application | `js/forms.js` → `mockSubmit()` | POST to applicant-tracking endpoint |
| Product inquiry | `parts-equipment.html` inline script | POST selected parts + contact info |
| Newsletter | `js/components.js` → footer form handler | POST to your email marketing provider |
| ABD RC Tech Assistant | `js/chat-widget.js` → `getBotReply()` | Replace with a `fetch()` call to an LLM/AI backend (example included in the file's header comment) |
| Customer Portal | `portal-login.html`, `portal-dashboard.html` | Replace mock login + static tables with real auth (e.g. session/JWT) and API-backed data |
| Admin Dashboard | `admin-dashboard.html` | Replace static tables/KPIs with API-backed data from your CRM/database |
| Global search | `js/components.js` → `runSearch()` | Currently searches the local `ABD.*` data arrays; swap for a real search API if content grows beyond the static dataset |

All sample business content (services, 10 sample projects, 24 sample products, 11 blog articles, 6 demo testimonials, FAQ, 9 demo team profiles, 20 gallery entries) lives in **`js/data.js`** — edit that single file to update copy across the entire site.

## Content that must be supplied by ABD RC before launch

Clearly marked with `[placeholder]` in the code — replace before going live:

- Real phone number, email address and business address (`contact.html`, footer)
- WhatsApp number (`js/components.js` → `floatStack()`, currently `https://wa.me/10000000000`)
- Real Google Maps embed (`contact.html`)
- Real social media URLs (`js/components.js` → `footerHTML()`)
- Real team photos/bios (currently demo profiles, clearly tagged, in `js/data.js` → `ABD.team`)
- Real testimonials (currently demo/placeholder, clearly tagged, in `js/data.js` → `ABD.testimonials`)
- Real project photography and gallery photography (currently on-brand SVG/gradient placeholders generated by `ABD.mediaPlaceholder()` in `js/icons.js` — replace with `<img>` tags once official photography is available)
- Legal page specifics: business registration details, jurisdiction, retention periods, effective dates (`legal-*.html`)
- Favicon/logo refinement if a real brand mark is designed (`images/favicon.svg`)

## SEO

- Unique `<title>` and meta description per page
- Open Graph tags on primary pages
- `Organization` JSON-LD on the homepage, `FAQPage` JSON-LD on `faq.html`
- `sitemap.xml` and `robots.txt` (portal/admin pages excluded from indexing via `noindex` + `robots.txt`)
- Semantic headings, skip-link, `aria-label`s on icon-only controls

## Notes on the customer portal & admin dashboard

Both are complete, realistic UIs (sidebar navigation, KPI cards, hand-drawn SVG charts, data tables, tabs) populated with **mock data** so the experience can be demoed end-to-end. Neither includes real authentication — `portal-login.html`'s login/signup forms simply redirect to the dashboard for demonstration purposes. Do not deploy the portal or admin dashboard publicly without adding real authentication and API-backed data.
