# Rocket Payments

## Overview

Rocket Payments is a modern payment processing platform marketing website built with React and Express. The application showcases payment terminal products, industry solutions, pricing plans, and allows potential customers to request quotes. The site is designed with a clean, trust-focused aesthetic inspired by modern fintech platforms like Dojo.tech, emphasizing speed, reliability, and simplicity.

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