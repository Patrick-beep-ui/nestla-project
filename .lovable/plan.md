

# Nestla — High-Converting Landing Page

A dark-themed, single-page landing site inspired by Scale AI's layout and design patterns, fully adapted to Nestla's brand identity (colors, typography, tone).

---

## Design Foundation
- **Dark theme** with `#141414` background, white/light text, and Nestla blue accents (`#59BFFF`, `#ABDFFF`)
- **Typography**: Manrope SemiBold for headings, Inter for body — both loaded via Google Fonts, with `-2%` letter spacing
- **Generous whitespace** and large section padding, mirroring the Scale AI spacious feel
- Subtle fade-in and scale animations on scroll for each section

---

## Sections (top to bottom)

### 1. Navigation Bar
- Nestla logo (text-based) on the left
- Minimal nav links (Services, About, Results)
- Primary CTA button: "Get in Touch →" styled with the brand blue

### 2. Hero Section
- Large bold headline communicating Nestla's value proposition
- Supporting subheadline describing who they serve and the outcomes they deliver
- Primary CTA button ("Request a Consultation →") + secondary text link
- Decorative abstract gradient shape on the right side using brand blues, similar to Scale AI's hero visual treatment

### 3. Trust Bar / Logos
- A row of placeholder partner/client logos with a "Trusted by leading organizations" label
- Subtle muted style, horizontal scroll on mobile

### 4. Value Proposition — Key Benefits
- Section label + bold heading (e.g., "Why Nestla")
- 3 benefit cards in a grid, each with an icon, title, and short description
- Clean card styling with subtle borders on dark background

### 5. Services Overview
- Two large feature cards side by side (like Scale AI's "Public Sector" / "Enterprise" layout)
- Each card has a category label, heading, description, and a decorative placeholder visual
- Cards use slightly lighter dark background with border accent

### 6. Social Proof / Testimonials
- Section heading with label
- 2–3 testimonial cards with quote text, person name, title, and company
- Clean card layout with avatar placeholders

### 7. Lead Capture CTA Section
- Full-width section with a compelling closing headline
- Inline lead form: Name, Email, Company, Message fields
- Submit button in brand blue
- Client-side validation with Zod
- Toast notification on successful submission (form data not sent anywhere — placeholder behavior)

### 8. Footer
- Nestla logo, copyright, and placeholder links (Privacy, Terms, Contact)
- Simple, minimal dark footer

---

## Responsive Design
- All sections fully responsive, stacking to single-column on mobile
- Navigation collapses to a hamburger menu on small screens
- Form and cards adapt gracefully to narrow viewports

## Animations
- Fade-in-up animations as sections enter viewport
- Hover scale effects on CTA buttons and cards
- Smooth transitions throughout

