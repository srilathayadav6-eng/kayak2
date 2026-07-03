# Product Requirements Document
## Kayak AI — Corporate Website & Admin CMS

**Version:** 1.0
**Status:** Draft for engineering kickoff
**Owner:** Kayak AI (Product/Founder)
**Prepared for:** Coding Agent / Development Team

---

## 1. Overview

### 1.1 Summary
Kayak AI is building an enterprise AI company with multiple products spanning newsrooms, education, media asset management, video editing, broadcast automation, and knowledge/RAG systems. This PRD defines the requirements for the **Kayak AI corporate website** — the flagship digital presence for the parent company and umbrella brand for all current and future products.

This is explicitly a **corporate/company website**, not a single-product landing page. It must communicate the breadth of the Kayak AI ecosystem while giving each product room to have its own dedicated, detailed page.

### 1.2 Problem Statement
Kayak AI currently lacks a unified web presence that:
- Positions it as a serious, enterprise-grade AI company (comparable to OpenAI, Anthropic, Stripe, Linear, Vercel, Notion in production quality)
- Houses multiple distinct products under one coherent brand architecture
- Supports non-technical content updates (blog, careers, case studies, press) without developer involvement
- Captures and routes leads (demo requests, contact, careers applications) into a structured backend

### 1.3 Goals
1. Establish credibility and enterprise trust within the first 5 seconds of landing (hero, visual polish, motion design)
2. Clearly communicate the product portfolio and how each product maps to a buyer's problem
3. Convert visitors into qualified leads via demo requests and contact forms
4. Give internal teams (marketing/ops) self-service control over content via an Admin CMS
5. Be fast, accessible, and SEO-optimized from day one — not retrofitted later
6. Be architected so new products can be added without redesigning the site

### 1.4 Non-Goals (Out of Scope for v1)
- Fully build product-embedded functionality (e.g., no live NewsForge rundown editor is embedded in the marketing site — only marketing/demo content)
- Payments/billing infrastructure (pricing pages link to "Request Demo," not self-serve checkout)
- Multi-language/i18n (English-only for v1; architecture should not block future i18n)
- Investors page content (placeholder route only, per spec)
- Native mobile apps

---

## 2. Target Users & Personas

| Persona | Description | Primary Needs |
|---|---|---|
| **Enterprise Buyer / Decision Maker** (news channel CTO, school administrator, government procurement officer) | Evaluating vendors for AI-driven media/education/automation tools | Credibility signals, case studies, security/compliance info, easy demo booking |
| **Technical Evaluator** (IT lead, systems integrator) | Assessing architecture, integrations (MOS/Vizrt), security | Deep product pages, architecture diagrams, security page, FAQs |
| **Journalist / Press** | Researching the company for coverage | Press releases, company story, leadership, statistics |
| **Job Candidate** | Evaluating Kayak AI as an employer | Careers page, culture, open roles, application flow |
| **Internal Marketing/Content Admin** | Publishes blogs, case studies, manages leads | Admin CMS with no-code content editing |

---

## 3. Information Architecture (Sitemap)

```
/                          Home
/about                     About
/products                  Products (index/grid)
/products/newsforge        NewsForge
/products/ai-tutor         AI Tutor
/products/mam               Media Asset Management
/products/ai-editing        AI Video Editing
/products/broadcast-suite   Broadcast Automation
/products/knowledge-ai      RAG & Knowledge Systems
/solutions                  Solutions (by industry index)
/solutions/[industry]       e.g. /solutions/news-channels
/enterprise-ai               Enterprise AI (RAG, LLMs, Agentic AI, etc.)
/careers                     Careers
/careers/[job-slug]          Job detail + apply
/blog                        Blog index
/blog/[slug]                 Blog post
/case-studies                Case studies index
/case-studies/[slug]         Case study detail
/contact                     Contact
/request-demo                Multi-step demo request form
/privacy | /terms | /cookies | /security
/investors                   Placeholder
/admin/*                     Admin CMS (auth-gated)
```

Each product page listed under `/products/*` is a first-class page, not a modal or tab — each needs its own metadata, OG image, and URL for SEO.

---

## 4. Functional Requirements by Page

### 4.1 Home
| Section | Requirement |
|---|---|
| Hero | H1: "Building the Future of Enterprise AI"; subhead per spec; two CTAs (Explore Products, Request Demo); animated AI particle-network background (canvas/WebGL, must respect `prefers-reduced-motion`) |
| Trusted By | Logo strip, CMS-editable, supports placeholder/future logos, grayscale-on-hover-color treatment |
| Company Overview | Who we are / Mission / Vision / Values — 4 short blocks, CMS-editable text |
| Products Preview | 6 cards (NewsForge, AI Tutor, MAM, AI Video Editing, Broadcast Automation, Knowledge AI) — each links to its dedicated page; icon + 1-line description + hover state |
| Industries | 7 industry chips/cards (Media, Education, Government, Corporate, Healthcare, Broadcast, Publishing) linking to `/solutions/[industry]` |
| Why Kayak | 6 value props (Enterprise Ready, AI First, Scalable, Secure, Indian Innovation, Global Vision) as icon+text grid |
| Latest News | 3 most recent blog posts, pulled dynamically from CMS |
| Footer | Sitemap links, social, legal links, newsletter signup |

**Acceptance criteria:** All CTAs route correctly; particle background degrades gracefully on low-end devices (FPS throttle or static fallback); section order matches spec; content in every section is CMS-editable (not hardcoded).

### 4.2 About
- Company story (rich text, CMS-editable)
- Timeline component (year → milestone, CMS-manageable array)
- Mission / Vision statements
- Leadership team grid (photo, name, title, bio, LinkedIn link) — CMS-managed
- Culture section (text + image/video)
- Global expansion narrative
- Animated statistics counters (e.g., "X products," "X industries served") — values CMS-editable, animate on scroll into view

### 4.3 Products (index)
- Grid of all products (current + "Coming Soon" for future products)
- Each card: name, one-line value prop, icon, "Learn more" + "Request Demo" buttons
- Filter/tag by industry (optional v1.1)

### 4.4 Individual Product Pages (template used for NewsForge, AI Tutor, MAM, AI Editing, Broadcast Suite, Knowledge AI)
Each product page must support, via CMS:
- Overview/hero
- Feature list (icon + title + description, repeatable)
- Architecture section (image/diagram upload)
- Screenshots gallery
- Embedded video (URL field, e.g. YouTube/Vimeo embed)
- FAQ accordion (repeatable Q&A)
- "Request Demo" CTA (pre-fills product field in demo form)
- Pricing CTA (routes to `/request-demo` or `/contact` — no live pricing table in v1 unless specified later)

**NewsForge specifically** additionally needs module sub-sections: Editor, Rundown, MOS, PCR, MCR, Playout, Ingest, Archive, Automation, AI — implement as a repeatable "modules" component so this pattern is reusable for future products with sub-modules.

**AI Tutor specifically** needs audience-segmented content blocks: Students, Teachers, Parents, Schools, plus Learning Analytics, Homework, Assignments, AI Assistant features.

**MAM specifically** needs a feature grid: Metadata, Face Recognition, Speech Recognition, OCR, Search, Auto Tagging, Cloud, Archive.

### 4.5 Solutions (by industry)
- Index page listing all 7 industries
- Each industry detail page: challenges, how Kayak AI products solve them (cross-links to relevant product pages), relevant case studies pulled dynamically by industry tag

### 4.6 Enterprise AI
- Educational/positioning page explaining: RAG, LLMs, Automation, Knowledge Search, Workflow AI, Private AI, Agentic AI
- Each concept: short explainer block + how Kayak AI implements it + link to Knowledge AI product page

### 4.7 Careers
- Open positions list (filterable by department/location), sourced from CMS or ATS integration (define which — see Open Questions)
- Job detail page with description, requirements, Apply button → application form (name, email, resume upload, cover note)
- Culture, Benefits, Hiring Process sections (static/CMS-editable)

### 4.8 Blog
- Index with category filters (AI, Broadcast, Education, Technology, Updates), tag filters, search
- Post template: title, hero image, author, date, reading time, rich content body, tags, comments (see Open Questions on comments — likely a third-party embed rather than custom-built)
- RSS feed at `/blog/rss.xml`

### 4.9 Case Studies
- Index grid, filterable by industry
- Detail template: Challenge → Solution → Results/Metrics (animated stat counters) → Image gallery → related product link

### 4.10 Contact
- Google Maps embed (office location)
- Phone/email display
- Contact form with routing: Sales vs Support (dropdown or separate forms) → stored in Admin CMS as "Contact Requests" + emailed via SMTP

### 4.11 Request Demo
Multi-step form:
1. Company info (name, size/employees, industry)
2. Requirements (product interest, use case — free text or checklist)
3. Meeting time preference (integrates with Google Calendar for scheduling — see Open Questions on Calendly-style booking vs custom)
- Progress indicator across steps
- Submission stored as "Demo Requests" lead in Admin CMS + email notification

### 4.12 Legal Pages
Privacy, Terms, Cookies, Security — static CMS-editable rich-text pages. Security page additionally covers Encryption, Compliance, Infrastructure, Privacy in structured sections (not just prose — use icon+heading+description blocks for scannability).

### 4.13 Investors
Placeholder route with "Coming soon" messaging — must exist in nav-ready state but visually minimal.

---

## 5. Admin CMS Requirements

### 5.1 Authentication & Access
- Email/password auth (consider NextAuth or similar) with role-based access control
- Roles (minimum): **Super Admin**, **Editor**, **Sales/Leads viewer**
- Session management, password reset flow

### 5.2 Modules
| Module | CRUD Scope |
|---|---|
| Blogs | Create/edit/delete posts, categories, tags, featured image, SEO fields, publish/draft status, scheduled publishing |
| Products | Edit all product-page content described in §4.4 |
| Pages | Edit static/structured content on Home, About, Enterprise AI, Solutions |
| Jobs | Post/edit/close job listings; view applicants |
| Leads (Contact Requests, Demo Requests) | View, filter, status (New/Contacted/Qualified/Closed), export CSV, assign owner |
| Case Studies | Create/edit with structured fields (challenge/solution/results/metrics/images) |
| Media Library | Upload/manage images/videos, used across all modules (avoid duplicate uploads) |
| SEO | Per-page title/description/OG image/canonical override; sitemap regeneration trigger |
| Redirects | Simple from→to URL redirect manager (301) |
| Menus | Manage nav + footer menu items/order without code deploys |
| Users | Manage admin users and roles |
| Analytics dashboard | Summary view — page views, top content, lead conversion (can pull from GA4 API or be a simple internal counter for v1) |

### 5.3 Non-negotiable CMS principle
**Every** section listed as "CMS-editable" in §4 must be editable without a code deploy. If a section is hardcoded in v1, it must be flagged explicitly as technical debt with a ticket — not silently shipped as static.

---

## 6. Technical Requirements

### 6.1 Stack (as specified)
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, TailwindCSS, Framer Motion, GSAP, Three.js (used sparingly — hero particles only), ShadCN UI
- **Backend:** Next.js API routes, PostgreSQL, Prisma ORM
- **CMS:** Custom-built admin dashboard (not a third-party headless CMS, per spec — confirm this decision, see Open Questions)

### 6.2 Data Model (high-level entities)
```
User (admin)          — id, email, passwordHash, role, createdAt
Product                — id, slug, name, tagline, heroContent, order, status
ProductFeature         — id, productId, title, description, icon
ProductModule          — id, productId, title, description, order (for NewsForge-style sub-modules)
FAQItem                — id, productId, question, answer, order
BlogPost               — id, slug, title, body, excerpt, category, tags[], authorId, status, publishedAt, seoMeta
CaseStudy              — id, slug, title, industry, challenge, solution, results[], metrics[], images[]
Job                     — id, slug, title, department, location, description, status
JobApplication          — id, jobId, name, email, resumeUrl, coverNote, submittedAt
Lead (Contact)          — id, name, email, message, type(sales/support), status, createdAt
DemoRequest             — id, companyName, employees, industry, productInterest, requirements, preferredTime, status, createdAt
Industry                — id, slug, name, description
MediaAsset              — id, url, type, altText, uploadedBy
Redirect                — id, fromPath, toPath, statusCode
Menu / MenuItem          — id, label, url, order, parentId
```
This is a starting schema — Prisma migrations should be iteratively refined during implementation.

### 6.3 Performance Targets (Lighthouse)
- Performance: >95
- Accessibility: >95
- SEO: 100
- Best Practices: >95
- CLS: <0.1
- Implementation notes: lazy-load below-fold sections, `next/image` for all images, edge rendering where applicable, defer non-critical JS (GSAP/Three.js chunks)

### 6.4 SEO
- Dynamic per-page metadata (title/description) driven by CMS SEO fields
- OpenGraph + Twitter Card tags
- JSON-LD structured data (Organization, Product, JobPosting, Article/BlogPosting, BreadcrumbList schemas)
- Auto-generated `sitemap.xml` and `robots.txt`
- RSS feed for blog
- Canonical URLs on all pages

### 6.5 Security
- Rate limiting on all public forms (contact, demo, job application) to prevent spam/abuse
- CSRF protection on form submissions
- CSP headers, secure headers (HSTS, X-Frame-Options, etc.)
- Server-side input validation (not just client-side) on all forms
- Bot/spam protection on forms (e.g., hCaptcha/reCAPTCHA or honeypot fields)
- Encrypted storage for sensitive fields (resumes, contact PII) — align with the claims made on the public `/security` page

### 6.6 Accessibility
- WCAG 2.1 AA target
- Full keyboard navigation across nav, forms, modals, command palette
- Screen-reader-tested landmark structure and ARIA labeling
- Visible focus states on all interactive elements
- Color contrast audited against dark-mode + glassmorphism design (this combination is a known contrast risk — flag for design review)
- Respect `prefers-reduced-motion` for all animation (particles, scroll reveals, parallax)

### 6.7 Integrations
- Google Analytics (GA4)
- Google Search Console verification
- Microsoft Clarity
- LinkedIn Insight Tag, Meta Pixel
- SMTP for transactional emails (contact/demo/job confirmations + internal notifications)
- Google Calendar integration for demo scheduling
- CRM-ready lead export/webhook (specific CRM TBD — build as a generic webhook/export first)

### 6.8 UI Component Library (shared, reusable)
Navbar w/ mega menu · Product cards · Animated statistic counters · Timeline · Testimonials · Pricing cards (CTA-only, no checkout) · Feature sections · FAQ accordion · Blog cards · Newsletter signup · Contact form · Footer · Cookie consent banner · Site search · Command palette (⌘K) · Theme switcher (dark mode default; confirm if light mode is required — spec emphasizes dark mode primarily)

---

## 7. Design Direction

- **Aesthetic:** Modern, minimal, premium, dark-mode-first, glassmorphism, enterprise-grade — referencing OpenAI, Apple, Stripe, Linear, Vercel, Anthropic
- **Explicitly avoid:** flashy gradients, decorative clutter, generic stock-template look
- **Motion:** Page transitions, text reveal on scroll, scroll-triggered animations, mouse parallax (subtle), card hover states, background particles (hero only), section fade-ins, animated counters, video reveal — all must be performance-budgeted, not blanket-applied
- **Recommendation:** Run this through a dedicated visual design pass (typography system, color tokens, spacing scale) before implementation begins — see the frontend-design skill/process for establishing distinctive design tokens rather than defaulting to generic Tailwind spacing.

---

## 8. Success Metrics (KPIs)

| Metric | Target (suggested — confirm with stakeholders) |
|---|---|
| Demo request submissions/month | Baseline TBD post-launch, track MoM growth |
| Contact form conversion rate | Track and benchmark after 1 month live |
| Organic search impressions/clicks (Search Console) | Growth trend month-over-month |
| Lighthouse scores (all 4 categories) | Meet §6.3 targets at launch and in CI |
| Page load (LCP) | <2.5s on 4G |
| Admin CMS content publish time | Non-technical staff can publish a blog post in <10 minutes without dev help |

---

## 9. Phased Delivery Plan (Suggested)

**Phase 1 — Foundation (Weeks 1–3)**
Design system/tokens, Next.js scaffold, Prisma schema, auth, base layout (Navbar/Footer), Home page, About page.

**Phase 2 — Product Ecosystem (Weeks 3–6)**
Product index + all 6 dedicated product pages (template-driven), Solutions pages, Enterprise AI page.

**Phase 3 — Content & Lead Systems (Weeks 6–8)**
Blog, Case Studies, Careers + application flow, Contact, Request Demo multi-step form, SMTP integration.

**Phase 4 — Admin CMS (Weeks 6–9, parallel to Phase 3)**
Full admin dashboard: all modules in §5, RBAC, media library.

**Phase 5 — Polish, SEO, Performance, Security (Weeks 9–11)**
Animation pass, Lighthouse tuning, JSON-LD/sitemaps, security headers/rate limiting, accessibility audit, legal pages.

**Phase 6 — QA & Launch (Week 12)**
Cross-device QA, content population, staging review, production deploy.

*(Timeline is illustrative — validate against actual team size/velocity.)*

---

## 10. Open Questions / Decisions Needed

1. **CMS approach:** Confirm fully custom-built admin dashboard vs. using a headless CMS (e.g., Sanity, Payload, Strapi) for faster delivery — spec implies custom-built, but this significantly affects timeline.
2. **Careers/ATS:** Store applications in-house (per data model above) or integrate a third-party ATS (Greenhouse, Lever)?
3. **Blog comments:** Build custom commenting or use a third-party embed (e.g., Giscus, Disqus)? Custom comments carry moderation/spam overhead.
4. **Demo scheduling:** Custom Google Calendar integration vs. embedding a scheduling tool (Calendly)?
5. **CRM target:** Which CRM (if any) should leads sync to, and is a webhook/CSV export sufficient for v1?
6. **Light mode:** Spec emphasizes dark mode — is light mode required for v1 or dark-only with a placeholder theme switcher?
7. **Hosting/infra:** Target deployment platform (Vercel is implied by Next.js edge rendering mention) — confirm.
8. **Localization:** Confirm English-only is acceptable for v1 given "Global Vision" positioning on the Home page.
9. **Compliance claims:** The `/security` page will state encryption/compliance claims — confirm what's actually true/certified before publishing, to avoid overstating security posture.

---

## 11. Deliverables (per original spec)

- Fully responsive site (desktop/tablet/mobile)
- Pixel-perfect UI matching approved design system
- Complete Admin CMS (all modules in §5)
- SEO-ready architecture (§6.4)
- Enterprise-grade, modular, documented codebase
- Production-ready deployment
- Documentation: folder structure, component library, CMS user guide
- Architecture that supports adding new Kayak AI products without redesign