# Nestla Seller Concierge Landing Page

A responsive lead-generation experience for Nestla, a seller-concierge brand that guides homeowners through pricing, preparation, and the home-selling process.

## Repository scope

This repository contains the public marketing and conversion experience implemented as a React/Vite single-page application. It should be understood as the public landing-page implementation in this repository, not as documentation for any separate private application or later platform version.

## User journey

The page moves a prospective seller through a structured conversion funnel:

1. Introduce the seller-concierge value proposition.
2. Explain Nestla's approach and homeowner-focused service model.
3. Present services, differentiators, process steps, and supporting proof.
4. Show project and testimonial content.
5. Route the visitor to a free seller-review application.
6. Capture the lead through an embedded GoHighLevel form.

## Implemented sections

- Responsive navigation and hero experience
- Company and service positioning
- Statistics and feature sections
- Comparison and numbered-process components
- Founder-led lead magnet
- Project gallery and testimonials
- GoHighLevel seller-application form
- Reusable alternative landing-page sections retained for iteration
- Scroll-reveal interactions and responsive calls to action

## Technical implementation

- **Framework:** React 18, TypeScript, Vite
- **UI:** Tailwind CSS, shadcn/ui, Radix UI, Lucide icons
- **Forms and validation:** React Hook Form and Zod
- **Server state utilities:** TanStack Query
- **CRM capture:** Native GoHighLevel embedded form
- **Testing:** Vitest and React Testing Library
- **Quality:** ESLint and TypeScript

The page is split into reusable landing components so messaging, section order, and calls to action can be tested or adapted without rebuilding the entire experience.

## Local development

### Prerequisites

- Node.js 18 or newer
- npm

### Setup

~~~bash
git clone https://github.com/Patrick-beep-ui/nestla-project.git
cd nestla-project
npm install
npm run dev
~~~

## Available scripts

~~~bash
npm run dev        # Start the Vite development server
npm run build      # Create a production build
npm run preview    # Preview the production build
npm run lint       # Run ESLint
npm run test       # Run the Vitest suite
npm run test:watch # Run tests in watch mode
~~~

## Integration note

The seller-review form is loaded from GoHighLevel through its embed script and form URL. Replace the form identifier when adapting the project to another account or environment.

## Project context

This implementation combines frontend engineering with conversion-oriented website development: translating a business offer into a clear user journey, reusable components, responsive presentation, and a CRM-connected lead-capture endpoint.

