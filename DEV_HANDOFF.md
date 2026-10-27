# Fronthyre — Developer Handoff Specification

**Version:** 2.0 (High-Fidelity Design Prototype)
**Date:** September 2026
**Status:** Pre-launch design prototype — NOT production software

---

## 1. Page List

| Page | Route | Purpose |
|------|------|---------|
| Home | `/` | Hero, what Fronthyre is, modern frontend skills, Early Access CTA, buildathon promo |
| Buildathon | `/buildathon` | Event info, NitroStack registration redirect, FAQ, timeline, previous events |
| Early Access | `/early-access` | Form with privacy notice, consent, marketing consent, age eligibility |
| About | `/about` | What Fronthyre is, why frontend, who it's for, current status |
| Privacy Policy | `/privacy` | Legal content placeholder — subject to legal review |
| Terms of Use | `/terms` | Legal content placeholder — subject to legal review |
| Cookie Policy | `/cookie-policy` | Legal content placeholder — subject to legal review |
| Privacy Requests | `/privacy-requests` | Privacy rights info + placeholder contact details |
| Contact | `/contact` | General, privacy, and buildathon enquiry contacts |

---

## 2. User Journeys

### Journey 1: Developer joins Early Access
1. Lands on home page → sees "Frontend talent. Better opportunities." hero
2. Clicks "Join Early Access" → arrives at `/early-access`
3. Fills form (basic info, professional info, skills, career prefs, links, resume)
4. Reviews privacy notice, checks required consent + age eligibility
5. Optionally checks marketing consent
6. Submits → sees simulated success state

### Journey 2: Developer discovers NitroStack buildathon
1. Lands on home page → sees buildathon promo section
2. Clicks "Explore Buildathon" → arrives at `/buildathon`
3. Reads event info, timeline, FAQ
4. Clicks "Register on NitroStack" → redirected to external NitroStack registration
5. Optionally clicks "Join Fronthyre Early Access" → goes to `/early-access`

---

## 3. Component List

### Layout
- `Header.tsx` — Fixed nav with PRE-LAUNCH badge, mobile menu
- `Footer.tsx` — Navigation, legal links, buildathon note, prototype notice
- `Layout.tsx` — Wraps all pages with header/footer

### Home
- `Hero.tsx` — Headline "Frontend talent. Better opportunities." + CTAs
- `HeroVisual.tsx` — Decorative visual element
- `WhatFronthyreIs.tsx` — 4 cards: Frontend Talent, Modern Skills, Career Opportunities, Developer Community
- `ModernFrontendSkills.tsx` — Text-based skill chips + tech disclaimer
- `EarlyAccessCTA.tsx` — CTA section with benefits list
- `BuildathonPromo.tsx` — Buildathon preview with link to event page

### Form
- `EarlyAccessForm.tsx` — Full form with all sections, demo controls, validation
- `FormField.tsx` — Reusable input/select component
- `ResumeUploader.tsx` — Drag-drop file upload with states (no real storage)
- `SuccessState.tsx` — Simulated success confirmation

### UI
- `Badge.tsx`, `Button.tsx`, `Card.tsx`, `Container.tsx`, `FAQ.tsx`, `SectionHeading.tsx`, `SkillBadge.tsx`

---

## 4. Form Fields

### Basic Information
| Field | Type | Required |
|-------|------|----------|
| Full Name | text | Yes |
| Email | email | Yes |
| Mobile Number | tel | No |

### Professional Information
| Field | Type | Required |
|-------|------|----------|
| Current Role | text | No |
| Years of Experience | text (numeric) | No |
| Experience Level | select | No |

### Skills
| Field | Type | Required |
|-------|------|----------|
| Primary Skills | text | No |
| Secondary Skills | text | No |

### Career Preferences
| Field | Type | Required |
|-------|------|----------|
| Preferred Location | text | No |
| Work Preference | select | No |
| Job Search Status | select | No |
| Notice Period | select | No |

### Professional Links
| Field | Type | Required |
|-------|------|----------|
| LinkedIn | url | No |
| GitHub | url | No |
| Portfolio | url | No |

### Resume
| Field | Type | Required |
|-------|------|----------|
| Resume upload | file (PDF/DOC/DOCX, max 5MB) | No |

### Consent
| Field | Type | Required |
|-------|------|----------|
| Processing consent | checkbox | Yes |
| Marketing consent | checkbox | No (not pre-checked) |
| Age eligibility | checkbox | Yes |

---

## 5. Validation Rules

- **Full Name:** Must not be empty
- **Email:** Must not be empty; must match email regex
- **Consent:** Must be checked
- **Age eligibility:** Must be checked
- **Resume:** Max 5MB; PDF, DOC, DOCX only
- **Marketing consent:** Optional, not pre-checked

---

## 6. UX States

### Form States
1. Empty form
2. Filled form (demo data button)
3. Validation errors (required fields, invalid email)
4. Resume selected
5. Invalid resume file type
6. Oversized resume file
7. Resume removed
8. Required consent unchecked
9. Simulated submitting (loading spinner)
10. Simulated success
11. Simulated error (demo button)

### Buildathon Event States (configurable via `EVENT_CONFIG.eventStatus`)
1. Upcoming
2. Registration Open
3. Registration Closed
4. External registration CTA
5. Event completed

---

## 7. Legal / Privacy Placeholders

All legal pages use `[BRACKETS]` for unconfirmed details:

- `[LEGAL ENTITY NAME — TO BE CONFIRMED]`
- `[PRIVACY CONTACT — TO BE CONFIRMED]`
- `[GRIEVANCE OFFICER — TO BE CONFIRMED]`
- `[GOVERNING LAW / JURISDICTION — TO BE CONFIRMED BY LEGAL COUNSEL]`
- `[RETENTION PERIOD — TO BE CONFIRMED BY LEGAL ADVISOR]`
- `[GENERAL ENQUIRIES — TO BE CONFIRMED]`
- `[PRIVACY / DATA ENQUIRIES — TO BE CONFIRMED]`
- `[BUILDATHON / EVENT ENQUIRIES — TO BE CONFIRMED]`

All legal pages display "Legal Content Placeholder" badge.

---

## 8. External NitroStack Link

- **Location:** `src/config/event.ts` → `EVENT_CONFIG.registrationUrl`
- **Current value:** `https://nitrostack.dev` (placeholder)
- **Usage:** Buildathon page "Register on NitroStack" buttons
- **Behavior:** Opens external URL in same tab
- **Note:** Fronthyre does not collect NitroStack registration information

---

## 9. Event Information Configuration

All event data is in `src/config/event.ts`:

- Event name, dates (October 10–12, 2026), duration, mode
- About description
- Why participate cards (6 items)
- Who should join tags (7 items)
- What you can build cards (4 items)
- How it works steps (6 steps)
- Timeline (3 days)
- Fronthyre role vs NitroStack role
- Previous event stats (1,764 registrations, 441 teams, 168 projects, 800+ builders, 58 MCP apps)
- FAQ (7 items)

---

## 10. Future Backend Requirements

For production, the developer (Ahmad) will need to build:

1. **Database** — Supabase tables for Early Access registrations
2. **Secure form API** — Server-side validation, rate limiting
3. **Private resume storage** — Supabase Storage with authorized access only
4. **Email service** — Transactional emails for Early Access confirmation
5. **Analytics** — Privacy-conscious, high-level events only (no PII)
6. **Auth** — Admin access for managing Early Access data
7. **Privacy request system** — Access, correction, deletion workflows
8. **Consent logging** — Record consent timestamps and versions
9. **Marketing consent management** — Opt-in/opt-out tracking

---

## 11. Data Fields for Production Collection

Same fields as the form (Section 4), plus:
- `consent_timestamp` — When consent was given
- `consent_version` — Which privacy policy version
- `marketing_consent_timestamp` — When marketing consent was given/withdrawn
- `age_confirmed` — Boolean
- `created_at` / `updated_at` — Timestamps
- `status` — active / withdrawn / deleted

**NOT collected:** Aadhaar, PAN, passport, date of birth, bank details, password, financial info, sensitive personal data.

---

## 12. Resume Handling Requirements

- Private object storage (Supabase Storage, private bucket)
- Authorized access only (no public URLs)
- Max 5MB, PDF/DOC/DOCX
- Not publicly listed or searchable
- Deletion cascades to storage objects
- No AI training on resumes
- No recruiter data sharing without explicit consent

---

## 13. Accessibility

- Semantic HTML (form labels, fieldsets, section headings)
- Keyboard navigation (focus states, Enter/Space on drop zone)
- ARIA labels and roles (alert for errors, button for upload)
- Sufficient color contrast (dark theme with white text)
- Mobile-friendly touch targets
- No horizontal scrolling at any breakpoint

---

## 14. Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| 375px | iPhone SE / small mobile |
| 390px | iPhone 14 |
| 414px | iPhone 14 Pro Max |
| 768px | iPad portrait |
| 1024px | iPad landscape / small desktop |
| 1280px | Standard desktop |
| 1440px | Large desktop |

Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).

---

## 15. Design System

- **Background:** Dark near-black (`fr-bg`)
- **Cards:** Slightly elevated dark (`fr-card`, `fr-elevated`)
- **Text:** White primary (`fr-text`), muted secondary (`fr-secondary`, `fr-muted`)
- **Accent:** Cyan/blue (`fr-accent`)
- **Borders:** Subtle (`fr-border`, `fr-border-hover`)
- **Warning:** Amber for draft/placeholder notices (`fr-warning`)
- **Error:** Red for form errors (`fr-error`)
- **Success:** Emerald for success states (`fr-success`)
- **Typography:** Bold headings, mono for labels/eyebrows
- **Spacing:** 8px system
- **Patterns:** Grid pattern, dot pattern with fade masks
- **Animations:** Fade-in, fade-in-up, scale-in, draw (SVG), slide-down

---

## 16. Known Prototype Limitations

1. **No backend** — All submissions are simulated locally
2. **No data storage** — No information is transmitted or stored
3. **No real auth** — No user accounts or sessions
4. **No real resume upload** — File state is local only
5. **No analytics/tracking** — No cookies, pixels, or tracking scripts
6. **Legal pages are placeholders** — All legal content is placeholder text
7. **Contact details are placeholders** — All `[BRACKETS]` content is unconfirmed
8. **NitroStack URL is placeholder** — `https://nitrostack.dev` needs confirmation
9. **No public candidate data** — No profiles, directories, or resume listings
10. **No employer/recruiter features** — Not built (future scope)
11. **Event details pending** — Prizes, judges, mentors, exact schedule TBD by NitroStack
12. **Technology names are descriptive** — No third-party logos or branding used

---

## 17. Brand Safety Notes

- Fronthyre is technology-neutral — React, TypeScript, etc. are skill references only
- No third-party technology logos used as Fronthyre branding
- No "official", "partner", "endorsed by" claims without confirmation
- Fronthyre × NitroStack is a "Community Collaboration" — not a formal partnership
- No guarantees of jobs, interviews, placements, or recruiter contact
- No public candidate profiles or resume listings
- No fake testimonials, company logos, user counts, or statistics (except labeled previous-event data)
