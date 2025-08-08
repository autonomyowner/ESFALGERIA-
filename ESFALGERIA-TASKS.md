### ESFALGERIA — Task Breakdown

This plan splits the PRD into clear, actionable tasks. Order is optimized for fast MVP delivery and mobile performance.

## Phase 0 — Repo & Tooling
- [x] Initialize Vite + React + TypeScript project `ESFALGERIA`
- [x] Install Tailwind CSS with RTL support
- [x] Configure fonts (Tajawal/Cairo) and global styles
- [ ] Add basic CI (lint/typecheck/build) and Prettier
- [x] Setup environment variables scaffolding: `VITE_OWNER_NAME`, `VITE_COUNTRY_CODE`, `VITE_WHATSAPP_NUMBER`

## Phase 1 — Design System
- [x] Tailwind theme tokens (colors, gradients, shadows)
- [x] Global layout with `dir="rtl"` and `lang="ar-DZ"`
- [x] Reusable components:
  - [x] `Button` (primary/secondary, gold accent, asChild)
  - [x] `Card` (glass/gradient borders)
  - [x] `Section` (containers with gradient backgrounds)
  - [x] `IconBadge` (trust badges)
  - [x] `Accordion` (for FAQ with ARIA)
- [x] Sticky mobile CTA bar

## Phase 2 — Navigation & Routing
- [x] Header with logo `ESFALGERIA` and nav links (Trading/Boosting/Sell/Rewards/FAQ)
- [x] Footer with contact (WhatsApp, owner name) and policy links
- [x] Client routing for pages: `/`, `/trading`, `/boosting`, `/sell`, `/rewards`, `/faq`

## Phase 3 — Landing Page (Mobile-first)
- [x] Hero section with animated premium gradient and primary CTAs
- [x] Trust badges (delivery speed, safety, support)
- [x] Services overview cards (Trading/Boosting/Sell/Rewards)
- [x] Featured CTA: “اطلب الآن” (opens WhatsApp)

## Phase 4 — Coin Selector & WhatsApp Flow
- [x] Amount selector: slider + preset buttons (100K, 250K, 500K, 1M)
- [x] Platform selector: PlayStation / Xbox / PC
- [x] Delivery method selector: Comfort Trade / Player Auction
- [x] Price estimation (static JSON mapping)
- [x] Generate WhatsApp deep link with prefilled Arabic message
- [x] Sticky bottom bar CTA on mobile (reflects current selection)

## Phase 5 — Pages
- [x] Trading page: details, process steps, CTA to WhatsApp
- [x] Boosting page: tiers/goals, safety note, CTA
- [x] Sell page: steps to sell to us, rates table (static), CTA
- [x] Rewards page: explain program, how to claim, CTA
- [x] FAQ page: accordions, concise copy

## Phase 6 — SEO & Performance
- [x] Arabic meta tags per route; Open Graph image
- [ ] Preload fonts; optimize images
- [ ] Lighthouse pass (mobile) target LCP < 2.5s

## Phase 7 — Policies & Trust
- [x] Terms and Refund static pages
- [x] Trust statements on delivery safety

## Phase 8 — Analytics & Deploy
- [ ] (Removed per request)

## Phase 9 — Content Finalization (Arabic)
- [x] Finalize Arabic copy for all sections
- [x] Review RTL spacing and typography

## Optional Enhancements
- [ ] Micro-animations (button shimmer, gradient motion)
- [ ] Floating WhatsApp button
- [ ] Price auto-refresh via remote JSON (future)

## Acceptance Criteria (MVP)
- [ ] Mobile-first responsive design
- [ ] WhatsApp order flow without sign-in
- [ ] Arabic RTL throughout
- [ ] Pages live: Trading, Boosting, Sell, Rewards, FAQ
- [ ] Theme matches premium black/silver/gold gradients


