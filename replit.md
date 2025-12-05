# Rocket Payments

## Overview

Rocket Payments is a complete payment processing platform marketing website built with React and Express. The application showcases payment terminal products, industry solutions, pricing plans, and allows potential customers to request quotes. The site is designed with a clean, trust-focused aesthetic inspired by modern fintech platforms like Dojo.tech, emphasizing speed, reliability, and simplicity.

## Recent Changes (December 5, 2025)

**Quick Register Interest Form Added**
- Created QuickCapture component (`client/src/components/QuickCapture.tsx`) for quick lead capture
- Thin bar format appearing below header on all main pages
- One question at a time flow: Email → Name → Mobile
- Partial completion support - each step saves to database immediately
- Data stored in PostgreSQL `interest_registrations` table with name field
- Webhook only sends to Go High Level when ALL data is complete (including phone)
- Complete data includes firstName, lastName (split from name), email, and phone
- Excluded from thank-you and calculate-savings pages only

## Recent Changes (December 4, 2025)

**SEO Infrastructure Implemented**
- Added comprehensive Open Graph meta tags for social sharing (og:title, og:description, og:image, og:url)
- Added Twitter Card meta tags for Twitter sharing previews
- Installed react-helmet-async for page-specific meta tag management
- Created reusable SEO component (`client/src/components/SEO.tsx`) for page-level SEO
- Added unique titles and descriptions to all key pages (Home, Products, Quote, Industries, Pricing, FreeTerminal, FreeTerminalThankYou)
- Added JSON-LD structured data for LocalBusiness schema
- Enhanced image alt text across FreeTerminal and Home pages for accessibility and SEO
- Added noIndex meta tag for thank-you pages to prevent indexing

## Recent Changes (October 31, 2025)

**Complete Website MVP Delivered**
- Implemented comprehensive multi-page website structure with Home, Products, Quote, Industries, Pricing, Resources, and product detail pages
- Generated 12+ AI placeholder images for hero sections, products (Rocket Go, Pocket, Wired, Tap to Pay), industries (restaurants, dental, retail), and testimonials
- Built responsive Header with navigation and Footer with comprehensive sitemap
- Fixed all navigation routing - every link now resolves to proper pages (no 404s)

**Home Page Sections Completed**
- Hero section with CTAs and partner logos
- Statistics banner (99.99% uptime, 1.8bn transactions, 58% faster speed)
- Value proposition with 4 key benefits
- Industries showcase with alternating left-right image/text layout (4 industries: QSR, FSR, Dental, Retail)
- Enterprise integration highlight (450+ EPOS integrations)
- Products grid showcasing all 4 products
- Testimonials section with 3 customer reviews and star ratings
- Success stories cards with metrics and achievements
- Switching CTA section
- FAQ accordion with 6 common questions

**Backend & Functionality**
- Quote form API with Zod validation and in-memory storage
- Theme toggle for light/dark mode support
- Responsive design across all breakpoints
- End-to-end testing passed - all navigation routes, form submission, and theme toggle verified

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React with TypeScript using Vite as the build tool
- Client-side routing implemented with Wouter (lightweight alternative to React Router)
- Component-based architecture with shadcn/ui components for consistent UI patterns

**Design System**
- Tailwind CSS for utility-first styling with custom configuration
- Custom design tokens defined in CSS variables for theming (light/dark mode support)
- Typography based on Inter font family with systematic scale
- Responsive-first approach with mobile, tablet, and desktop breakpoints
- Component library following shadcn/ui "new-york" style variant

**State Management**
- TanStack React Query (v5) for server state management and data fetching
- React Hook Form with Zod validation for form handling
- Local storage for theme persistence
- No global state management library (Redux/Zustand) - relies on React Query cache

**UI Component Strategy**
- Radix UI primitives for accessible, unstyled components
- Custom styled components in `client/src/components/ui/` directory
- Reusable page components for marketing content
- Path aliases configured for clean imports (@/, @shared/, @assets/)

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API server
- ESM module system throughout the application
- Development mode uses tsx for TypeScript execution
- Production builds with esbuild for fast compilation

**API Structure**
- RESTful endpoints under `/api` prefix
- Quote request system with POST `/api/quote` and GET `/api/quotes`
- JSON request/response format
- Custom request logging middleware for API endpoints

**Data Layer Abstraction**
- Storage interface pattern (`IStorage`) for data persistence
- Currently implemented with in-memory storage (`MemStorage`)
- Designed for easy migration to database persistence
- Drizzle ORM configured for PostgreSQL (schema defined but not actively used)

**Development Setup**
- Vite dev server integrated with Express in development
- HMR (Hot Module Replacement) enabled
- Server-side rendering preparation via Vite middleware mode
- Custom error overlays and dev tooling from Replit plugins

### Data Storage Solutions

**Current Implementation**
- In-memory storage using JavaScript Map for quote requests
- UUID generation for unique identifiers
- No persistence between server restarts

**Future Database Architecture**
- Drizzle ORM configured for PostgreSQL via Neon serverless driver
- Schema defined in `shared/schema.ts` with quote_requests table
- Migration system setup with drizzle-kit
- Connection ready via DATABASE_URL environment variable

**Schema Design**
- Quote requests table with fields: id, businessName, contactName, email, phone, businessType, monthlyVolume, message, createdAt
- Type safety with Zod schemas generated from Drizzle schema
- Shared types between client and server via `shared/` directory

### External Dependencies

**UI Component Libraries**
- Radix UI complete suite (30+ primitive components)
- shadcn/ui configuration and styling patterns
- Lucide React for iconography
- embla-carousel-react for carousel functionality
- cmdk for command palette patterns

**Form Handling & Validation**
- react-hook-form for form state management
- @hookform/resolvers for validation integration
- Zod for runtime type validation and schema definition
- drizzle-zod for auto-generating Zod schemas from database schema

**Data Fetching & State**
- TanStack React Query for async state management
- Custom query client configuration with optimized defaults
- Credential-based fetching for session support

**Build & Development Tools**
- Vite with React plugin for fast builds and HMR
- esbuild for production server bundling
- TypeScript with strict mode enabled
- PostCSS with Tailwind CSS and autoprefixer
- Replit-specific plugins for development experience (cartographer, dev-banner, runtime-error-modal)

**Database & ORM**
- Drizzle ORM with PostgreSQL dialect
- @neondatabase/serverless for serverless Postgres connections
- connect-pg-simple for session storage (configured but not actively used)

**Utilities**
- date-fns for date manipulation
- clsx and tailwind-merge (via cn utility) for className management
- class-variance-authority for variant-based component APIs
- nanoid for unique ID generation

**Asset Management**
- Static images stored in `attached_assets/generated_images/` directory
- Vite alias configuration for `@assets` path
- Pre-generated product and marketing images