# Rocket Payments

## Overview
Rocket Payments is a comprehensive payment processing platform marketing website built with React and Express. Its primary purpose is to showcase payment terminal products, industry-specific solutions, and transparent pricing plans. The platform enables potential customers to request quotes, aiming to be a trusted, modern fintech solution emphasizing speed, reliability, and simplicity. The project includes extensive SEO content targeting competitor comparisons, industry-specific guides, and local search optimization for the UK market, particularly Kent and East Sussex.

## User Preferences
Preferred communication style: Simple, everyday language.

## Recent Changes (January 2026)

**Standalone Funding Application Funnel**
- Created new standalone funding application page at `/funding-apply` with no main site navigation
- Multi-step form capturing: Director info, Business info, Shareholder info
- Large clickable funding amount cards for easy selection (£5k-£250k+)
- Trust badges and explainers: "No hard credit search", "Just a quote"
- Dojo/Rocket customer check question for eligibility
- Clear next steps after submission (Open Banking link, 3 pricing offers, funds in 24hrs)
- Database table `funding_applications` stores all applications
- GHL webhook integration sends leads automatically
- Designed as email/SMS campaign landing page (standalone, no site navigation)

**EPOS Partners & Industry Guides (December 2025)**
- EPOS Partners page (`/epos-partners`) with 30+ verified UK partners
- Industry insight guides for Google Reserve, Experience Economy, Rocket Intelligence
- Internal linking between guides and integrations

## System Architecture

### Frontend Architecture
The frontend is built with React and TypeScript, using Vite for fast builds and HMR. Wouter handles client-side routing, favoring a lightweight approach. The design system leverages Tailwind CSS for utility-first styling, with custom configurations for theming (light/dark mode) and a responsive-first approach. UI components are built using Radix UI primitives and styled with shadcn/ui patterns. State management primarily uses TanStack React Query for server state and data fetching, alongside React Hook Form with Zod for form handling.

### Backend Architecture
The backend is an Express.js server developed with TypeScript, utilizing an ESM module system. It provides RESTful APIs, notably for a quote request system. A data layer abstraction with an `IStorage` interface is implemented, currently using in-memory storage but designed for easy migration to PostgreSQL with Drizzle ORM. Development uses `tsx` for TypeScript execution and `esbuild` for production builds.

### Data Storage Solutions
Currently, quote requests are stored in-memory. The future architecture is designed around PostgreSQL, with Drizzle ORM configured. The schema (`quote_requests` table) is defined with fields like `businessName`, `contactName`, `email`, and `monthlyVolume`, ensuring type safety through Zod schemas generated from the Drizzle schema.

### UI/UX Decisions
The platform features a clean, trust-focused aesthetic inspired by modern fintech platforms. It supports light/dark mode theming and adheres to a responsive-first design across mobile, tablet, and desktop breakpoints. The UI components follow shadcn/ui's "new-york" style, ensuring consistency and accessibility. The website incorporates a "Quick Register Interest Form" for lead capture across main pages.

### Technical Implementations
- **SEO Component:** A comprehensive SEO component (`SEO.tsx`) manages Open Graph, Twitter Cards, and JSON-LD structured data (Organization, LocalBusiness, Service, FAQ schemas) for optimal search engine and answer engine optimization.
- **Content Management:** Dedicated data files (`eposPartners.ts`, `industryGuides.ts`, `competitorPosts.ts`, `bookingsPosts.ts`) manage various content types, feeding into dynamic page generation for industry guides, blog posts, and competitor comparisons.
- **Form Validation:** React Hook Form with Zod for robust client-side and server-side form validation.
- **Module System:** Consistent use of ESM throughout the application.

### Feature Specifications
- **Payment Processing Showcase:** Displays payment terminals (Rocket Go, Pocket, Wired, Tap to Pay), industry solutions, and pricing.
- **Quote Request System:** Allows potential customers to request quotes via a multi-step form with partial completion support.
- **EPOS Partners Integration:** Lists over 30 verified UK EPOS integration partners, categorized by sector.
- **Industry Guides & Blog:** Features a wide range of industry insights, competitor comparisons, and specific guides (e.g., EPOS integration, restaurant reservation systems).
- **SEO & AEO Optimization:** Extensive use of structured data, targeted keywords (primary, local, competitor, long-tail), and an XML sitemap for enhanced search visibility.
- **Local SEO:** Focuses on Kent and East Sussex with location-specific keywords and LocalBusiness schemas.
- **Responsive Design:** Ensures optimal viewing and interaction across all devices.
- **Dark Mode:** User-toggleable theme for enhanced accessibility and preference.

## External Dependencies

### UI Component Libraries
- **Radix UI:** Primitives for accessible, unstyled components.
- **shadcn/ui:** Configuration and styling patterns.
- **Lucide React:** Iconography.
- **embla-carousel-react:** Carousel functionality.
- **cmdk:** Command palette patterns.

### Form Handling & Validation
- **react-hook-form:** Form state management.
- **@hookform/resolvers:** Validation integration.
- **Zod:** Runtime type validation and schema definition.
- **drizzle-zod:** Auto-generating Zod schemas from database schema.

### Data Fetching & State
- **TanStack React Query (v5):** Asynchronous state management and data fetching.

### Build & Development Tools
- **Vite:** Frontend build tool with React plugin for fast builds and HMR.
- **esbuild:** Production server bundling.
- **TypeScript:** Language with strict mode.
- **PostCSS, Tailwind CSS, autoprefixer:** Styling toolchain.

### Database & ORM
- **Drizzle ORM:** Object-Relational Mapper for PostgreSQL.
- **@neondatabase/serverless:** Serverless PostgreSQL connections.

### Utilities
- **date-fns:** Date manipulation.
- **clsx, tailwind-merge (via cn utility):** CSS class management.
- **class-variance-authority:** Variant-based component APIs.
- **nanoid:** Unique ID generation.

### Integrations
- **Go High Level:** CRM system for lead management (via webhook for complete form submissions).