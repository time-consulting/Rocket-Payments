# Rocket Payments Design Guidelines

## Design Approach
**Reference-Based Approach**: Modeled after Dojo.tech's design system - a modern, clean payment processing platform aesthetic. The design emphasizes trust, speed, and simplicity with generous whitespace, clear hierarchy, and professional polish suitable for B2B payment solutions.

## Color System

**Brand Colors** (Based on Dojo.tech):
- **Primary (Teal)**: HSL(180, 75%, 35%) - Bright teal/turquoise used for CTAs, links, and primary branding
- **Primary Hover**: HSL(180, 75%, 30%) - Darker teal for hover states
- **Accent (Yellow/Gold)**: HSL(45, 100%, 55%) - Warm yellow for highlights and secondary accents
- **Background**: Pure white (#FFFFFF) for main backgrounds
- **Muted Background**: HSL(210, 20%, 98%) - Very light gray for alternating sections
- **Text Primary**: HSL(220, 15%, 15%) - Near black for main text
- **Text Secondary**: HSL(220, 10%, 45%) - Medium gray for supporting text
- **Text Tertiary**: HSL(220, 8%, 60%) - Light gray for captions

**Dark Mode Colors**:
- Background: HSL(220, 15%, 10%) - Deep charcoal
- Foreground: HSL(0, 0%, 98%) - Off-white text
- Primary: HSL(180, 75%, 45%) - Brighter teal for dark backgrounds
- Muted: HSL(220, 15%, 18%) - Lighter charcoal for cards

**Usage Guidelines**:
- Use teal primary for all CTAs, important buttons, and key interactive elements
- Yellow accent sparingly for highlights and attention-grabbing elements
- Maintain clean white backgrounds with subtle gray sections for variety
- Ensure sufficient contrast between text and backgrounds (WCAG AA minimum)

## Typography System

**Font Stack**: 
- Primary: Inter or similar modern sans-serif via Google Fonts
- Fallback: system-ui, -apple-system, sans-serif

**Type Scale & Hierarchy**:
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- Section Headlines: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Body Large: text-lg md:text-xl, font-normal, leading-relaxed
- Body Standard: text-base md:text-lg, leading-relaxed
- Small Text/Captions: text-sm, font-medium
- Stats/Numbers: text-4xl md:text-5xl, font-bold, tabular-nums

## Layout System

**Spacing Primitives**: Consistent use of Tailwind units - 4, 6, 8, 12, 16, 20, 24, 32 for margins, padding, and gaps. Section padding: py-16 md:py-24 lg:py-32

**Container Strategy**:
- Max-width wrapper: max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl

**Grid Layouts**:
- Industry cards: grid-cols-1 md:grid-cols-2 gap-8
- Product showcase: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
- Feature highlights: grid-cols-1 md:grid-cols-3 gap-8
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

## Component Library

**Navigation Header**:
- Sticky header with logo left, navigation center, CTA button right
- Navigation items: Products, Industries, Enterprise, Resources, Pricing
- Mobile: Hamburger menu with full-screen overlay navigation
- Secondary row with trust badge (e.g., "Join 110,000+ businesses")

**Hero Section** (Full viewport 90vh):
- Large hero image (right-aligned or background) showing payment terminal in use
- Headline + supporting text left-aligned
- Two CTAs: Primary "Get Started" + Secondary "View Products" with glass-morphism backgrounds (backdrop-blur-md bg-white/10)
- Partner logo strip below hero (6-8 recognizable brand logos, grayscale, grid layout)

**Industry Solution Cards**:
- Large image (16:9 aspect ratio) with rounded corners (rounded-2xl)
- Industry name as headline
- 2-3 line description
- "Learn more" link with arrow icon
- Alternating left-right image-text layout on desktop

**Product Showcase Cards**:
- Product image prominent (3:4 aspect ratio)
- Product name heading
- Tagline/category label
- Key benefit bullet points
- Arrow link to product page
- Subtle hover lift effect (translate-y-1)

**Statistics Banner**:
- Three columns with icon, large number, supporting text
- Icons from Heroicons (cloud, trending-up, lightning)
- Format: Icon top, stat number bold, description below

**Testimonial Cards**:
- Customer photo (rounded-full, 80x80px)
- Customer name + business name
- Star rating display (5 stars)
- Quote text in larger font
- Card with subtle shadow and rounded corners

**CTA Sections**:
- Full-width sections with contrasting treatment
- Headline + supporting paragraph
- Primary CTA button
- Optional: Feature list or trust indicators

**Footer**:
- Four-column layout: Company, Products, Resources, Legal
- Newsletter signup form
- Social media links (icon row)
- Payment security badges
- Copyright and compliance text
- Trustpilot widget integration

## Page Structure

**Homepage Sections** (in order):
1. Hero with CTAs and partner logos
2. Value proposition section (3-column features)
3. Industry solutions showcase (4-6 industries)
4. Enterprise integration highlight
5. Product grid (4 main products)
6. Statistics/social proof banner
7. Customer testimonials (6 reviews)
8. Success stories cards (3 case studies)
9. Switching/Getting started CTA
10. FAQ accordion (6-8 questions)

**Product Pages** (one per device type):
- Hero with product image and specs
- Feature highlights grid
- Integration capabilities
- Pricing information
- Customer reviews specific to product
- Related products suggestions

**Industry Pages**:
- Industry-specific hero
- Pain points addressed
- Product recommendations for industry
- Case study from that vertical
- Industry-specific FAQ

## Images

**Required Images**:
- Hero: Large lifestyle shot of payment terminal being used in retail/restaurant setting (1920x1080)
- Industry cards: 6-8 contextual photos per industry (cafes, retail stores, dental offices, etc.) (800x600)
- Product photos: Clean product shots on neutral background for each device (600x800)
- Testimonial avatars: Circular customer photos (160x160)
- Success story headers: Business environment photos (1180x960)
- Feature sections: Contextual business imagery showing integrations, bookings, analytics (800x600)

All images should have rounded corners (rounded-xl to rounded-2xl) and subtle shadows for depth.

## Interactions

**Button States**: All buttons include subtle shadow, rounded-full or rounded-lg edges, and scale slightly on hover (hover:scale-105 transition-transform)

**Card Interactions**: Subtle shadow lift on hover, smooth transitions

**Navigation**: Smooth scroll behavior, sticky header with shadow appearing on scroll

**Accordion FAQ**: Smooth expand/collapse with chevron rotation

**Animations**: Minimal, purposeful - fade-in on scroll for section entries, no distracting motion

## Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation fully supported
- Focus states clearly visible with ring offset
- Semantic HTML structure throughout
- Alt text for all images
- Sufficient contrast ratios (AA compliant minimum)