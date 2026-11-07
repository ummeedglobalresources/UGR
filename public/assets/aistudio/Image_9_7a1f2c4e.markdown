---
name: Global Horizon
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#43474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#74777e'
  outline-variant: '#c3c6ce'
  surface-tint: '#49607c'
  primary: '#001428'
  on-primary: '#ffffff'
  primary-container: '#0f2942'
  on-primary-container: '#7991af'
  inverse-primary: '#b0c9e8'
  secondary: '#ae302a'
  on-secondary: '#ffffff'
  secondary-container: '#fc695d'
  on-secondary-container: '#690005'
  tertiary: '#1f1000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b2200'
  on-tertiary-container: '#c97e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#b0c9e8'
  on-primary-fixed: '#011d35'
  on-primary-fixed-variant: '#314863'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#8c1615'
  tertiary-fixed: '#ffddb9'
  tertiary-fixed-dim: '#ffb963'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#663e00'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-trust, energetic, and internationally oriented digital presence for cross-border manpower recruitment and overseas career mobility. The design narrative balances institutional reliability with personal aspiration: deep marine blues communicate corporate credibility, compliance, and cross-continental stability, while sunrise coral-crimson and golden amber inject momentum, optimism ("Ummeed"), and warmth.

The target audience spans international enterprise recruiters across GCC, Europe, and Asia-Pacific, as well as job seekers ranging from specialized white-collar engineers and healthcare staff to skilled technical and blue-collar personnel. The UI style fuses **Corporate Modern** with **High-Contrast Precision**: sharp visual hierarchy, crisp typographic cadence, structured data density for compliance documentation, and high-visibility status tags for talent pipelines.

## Colors

The color palette is derived directly from the global mobility brand mark:
- **Primary Navy (`#0F2942`)**: Anchors global authority, institutional integrity, enterprise navigation headers, primary typography, and trust badges.
- **Secondary Sunrise Coral (`#E85A4F`)**: Powers primary conversion points, active application states, critical notifications, and high-priority candidate matches.
- **Tertiary Amber Gold (`#FFA41B`)**: Denotes premium visa processing tiers, verified partner credentials, and highlighted career streams.
- **Surface & Neutrals**: Light, high-clarity background surfaces (`#F8FAFC` base, `#FFFFFF` cards, `#E2E8F0` borders) supported by deep slate neutral text (`#334155` body, `#64748B` captions).

## Typography

The type system blends the energetic structural confidence of **Plus Jakarta Sans** for headlines with the pragmatic clarity of **Inter** for dense transactional tables, job specs, and visa compliance checklists. Headings employ tight letter-spacing to present an authoritative corporate tone, while body text prioritizes legible line heights to accommodate dual-language interfaces and international regulatory briefs.

## Layout & Spacing

A 12-column responsive fluid grid governs desktop and tablet layouts (1440px maximum container width), transitioning to an adaptable 4-column layout on mobile devices. 

- **Desktop (≥ 1024px)**: Outer margins set to `margin` (3rem) with 24px column gutters, supporting side-by-side job matching feeds, compliance progress steppers, and corporate client statistics.
- **Tablet (768px – 1023px)**: 8-column layout with 2rem margins.
- **Mobile (< 768px)**: 4 columns with `margin-mobile` (1.25rem) and full-width card reflows.

The spacing rhythm strictly leverages an 8px spatial multiplier (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px) to balance operational dashboards with spacious promotional portals.

## Elevation & Depth

Visual hierarchy relies on crisp surface layering combined with ambient tinted shadows rather than heavy skeuomorphic effects:
- **Level 0 (Base Canvas)**: Crisp background tinted in `#F4F6F9`.
- **Level 1 (Cards & Data Panels)**: Pure White `#FFFFFF` surfaces paired with a micro-stroke (`1px solid #E2E8F0`) and an ambient navy-tinted shadow: `0 2px 8px -2px rgba(15, 41, 66, 0.06), 0 1px 3px rgba(15, 41, 66, 0.04)`.
- **Level 2 (Interactive Cards & Popovers)**: Elevated state upon card hover or contextual filter menus: `0 12px 24px -6px rgba(15, 41, 66, 0.12), 0 4px 8px -2px rgba(15, 41, 66, 0.06)`.
- **Level 3 (Modals & International Application Drawers)**: High-altitude focal overlay with dark backdrop scrim (`rgba(15, 41, 66, 0.6)`), floating with `0 24px 48px -12px rgba(15, 41, 66, 0.25)`.

## Shapes

The design system adopts a balanced **Rounded (Level 2)** geometry:
- Standard interactive elements (input fields, buttons, regular cards) utilize `0.5rem` (8px) border radii.
- Feature modules and segmented hiring stream blocks scale up to `rounded-lg` (`1rem` / 16px).
- Status chips, qualification badges, and floating tags utilize pill styling (`rounded-full`) to contrast sharply against rectangular data tables and corporate forms.

## Components

### Buttons
- **Primary Action**: Deep Sunrise Coral (`#E85A4F`) solid fill with white text, bold font-weight, subtle coral hover darkening (`#D44A3F`), and a focus ring tinted at `#E85A4F`.
- **Secondary (Corporate)**: Deep Navy Blue (`#0F2942`) background, crisp white typography, suited for enterprise partner queries and employer portal logins.
- **Tertiary / Outlined**: 1.5px border in `#0F2942` with transparent background and navy text for role specs and filter downloads.

### Stream Badges & Chips
- **White-Collar Hiring Badge**: Light slate-blue tint (`#EFF6FF`) with deep navy text (`#0F2942`) and a fine `1px solid #BFDBFE` border.
- **Blue-Collar / Technical Stream Badge**: Warm amber tint (`#FFFBEB`) with dark ochre text (`#B45309`) and a `1px solid #FDE68A` border.
- **Deployment Status Chips**: Pill-shaped indicators with pulsating status dots (e.g., green for Visa Approved, amber for Medical Clearance, navy for Under Review).

### Input Fields & Selects
- Inputs feature a 1px border (`#CBD5E1`), 8px border radius, and pure white background.
- Focus state reveals an authoritative 2px primary navy border (`#0F2942`) accompanied by an ambient subtle glow. Country-code selectors and passport input prefixes are visually segmented with slate grey background fills (`#F1F5F9`).

### Checkboxes & Radio Controls
- Rounded-sm (4px) checkboxes and full circular radios with high-contrast `#0F2942` fills when selected, accompanied by crisp white iconography.

### Cards
- **Opportunity / Vacancy Cards**: Structured with clean category headers, salary range pill badges, destination flags, and primary action links. Cards rest on Level 1 elevation and transition smoothly to Level 2 on hover with a 2px top accent line colored according to the hiring stream (Coral or Gold).
- **Compliance & Employer Trust Cards**: Incorporate verified seal iconography, regional office stamps (Hyderabad headquarters / Gulf liaison points), and ISO accreditation data.