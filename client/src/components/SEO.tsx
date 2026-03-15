import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  keywords?: string;
  structuredData?: object | object[];
  breadcrumbs?: { name: string; url: string }[];
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rocket Payments",
  "url": "https://rocketpayments.co.uk",
  "logo": "https://rocketpayments.co.uk/logo.png",
  "description": "UK's leading card payment processing company offering low-cost merchant services, contactless payment terminals, and payment gateway solutions for businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressLocality": "London"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/rocket-payments",
    "https://twitter.com/rocketpayments"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "serviceType": [
    "Card Payment Processing",
    "Merchant Services",
    "Payment Gateway",
    "Contactless Payment Solutions",
    "EPOS Integration"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Rocket Payments",
  "image": "https://rocketpayments.co.uk/logo.png",
  "description": "Professional card payment processing, merchant services, and business funding for UK businesses. Low fees, fast setup, 99.99% uptime. Serving Kent, East Sussex, and all of South East England.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressRegion": "Kent",
    "addressLocality": "Maidstone"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.2724,
    "longitude": 0.5290
  },
  "url": "https://rocketpayments.co.uk",
  "priceRange": "££",
  "telephone": "+44-800-XXX-XXXX",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2847",
    "bestRating": "5"
  },
  "areaServed": [
    { "@type": "City", "name": "Maidstone" },
    { "@type": "City", "name": "Canterbury" },
    { "@type": "City", "name": "Tunbridge Wells" },
    { "@type": "City", "name": "Ashford" },
    { "@type": "City", "name": "Dover" },
    { "@type": "City", "name": "Folkestone" },
    { "@type": "City", "name": "Margate" },
    { "@type": "City", "name": "Ramsgate" },
    { "@type": "City", "name": "Gravesend" },
    { "@type": "City", "name": "Dartford" },
    { "@type": "City", "name": "Sevenoaks" },
    { "@type": "City", "name": "Tonbridge" },
    { "@type": "City", "name": "Brighton" },
    { "@type": "City", "name": "Eastbourne" },
    { "@type": "City", "name": "Hastings" },
    { "@type": "City", "name": "Lewes" },
    { "@type": "City", "name": "Bexhill" },
    { "@type": "City", "name": "Crowborough" },
    { "@type": "AdministrativeArea", "name": "Kent" },
    { "@type": "AdministrativeArea", "name": "East Sussex" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Payment Solutions & Business Funding",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Card Payment Processing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Funding & Merchant Cash Advance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Loans"
        }
      }
    ]
  }
};

export const serviceSchemas = {
  cardTerminal: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Card Payment Terminal",
    "description": "Professional card payment terminals for UK businesses. Accept contactless, chip & PIN, Apple Pay, and Google Pay. Low transaction fees from 0.5%. Similar quality to Dojo card machines at lower rates.",
    "brand": { "@type": "Brand", "name": "Rocket Payments" },
    "category": "Payment Processing Equipment",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "0",
      "description": "Free terminal with merchant account",
      "availability": "https://schema.org/InStock",
      "areaServed": ["Kent", "East Sussex", "United Kingdom"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1523"
    }
  },
  paymentGateway: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Rocket Payment Gateway",
    "description": "Secure online payment gateway for UK ecommerce businesses. PCI DSS compliant, 3D Secure, real-time fraud protection. Alternative to Dojo online payments.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "0",
      "description": "No monthly fees"
    }
  },
  merchantServices: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Merchant Services",
    "name": "UK Merchant Services",
    "description": "Complete merchant account services for UK businesses in Kent, East Sussex and nationwide. Accept all major credit and debit cards with competitive rates.",
    "provider": { "@type": "Organization", "name": "Rocket Payments" },
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "Kent" },
      { "@type": "AdministrativeArea", "name": "East Sussex" }
    ]
  },
  businessFunding: {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Business Funding & Merchant Cash Advance",
    "description": "Fast business funding and merchant cash advance for UK businesses. Get funding from £5,000 to £500,000 based on your card turnover. Quick approval, flexible repayments.",
    "provider": { "@type": "Organization", "name": "Rocket Payments" },
    "feesAndCommissionsSpecification": "Flexible repayment based on card turnover",
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "Kent" },
      { "@type": "AdministrativeArea", "name": "East Sussex" }
    ]
  },
  businessLoans: {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Business Loans UK",
    "description": "Unsecured business loans for UK small businesses. Quick approval, competitive rates. Funding from £5,000 to £500,000. Perfect for expansion, stock, or equipment.",
    "provider": { "@type": "Organization", "name": "Rocket Payments" },
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "Kent" },
      { "@type": "AdministrativeArea", "name": "East Sussex" }
    ]
  }
};

export const faqSchemas = {
  home: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is card payment processing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Card payment processing is the system that allows businesses to accept credit and debit card payments from customers. It involves securely transmitting transaction data between the merchant, the card network (Visa, Mastercard), and the customer's bank to authorize and complete purchases."
        }
      },
      {
        "@type": "Question",
        "name": "How much does card payment processing cost in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Card payment processing fees in the UK typically range from 0.5% to 2.5% per transaction, depending on the provider and transaction type. Rocket Payments offers competitive rates starting from 0.29% for debit cards and 0.9% for credit cards, with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best payment terminal for small business UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best payment terminal for UK small businesses is one that offers low fees, accepts contactless payments, and integrates with your EPOS system. Rocket Payments' Rocket Go portable terminal is ideal for small businesses, offering 4G connectivity, all-day battery life, and rates from 0.5%."
        }
      },
      {
        "@type": "Question",
        "name": "How do I set up a merchant account in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Setting up a merchant account in the UK is straightforward with Rocket Payments. Simply provide your business details, complete our online application, and get approved within 24-48 hours. We'll ship your payment terminal for free and you can start accepting cards immediately."
        }
      },
      {
        "@type": "Question",
        "name": "What is contactless payment and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contactless payment uses NFC (Near Field Communication) technology to process card payments without inserting or swiping. Customers simply tap their card, smartphone, or wearable on the terminal. In the UK, contactless payments up to £100 or above £2000 with fingerprint phone emabled and don't require a PIN, making transactions faster and more convenient."
        }
      },
      {
        "@type": "Question",
        "name": "Are payment processing fees tax deductible for UK businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, payment processing fees are a legitimate business expense and are part tax deductible for UK businesses. You can claim these fees as an operating cost when calculating your taxable profits."
        }
      },
      {
        "@type": "Question",
        "name": "What is PCI DSS compliance and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PCI DSS (Payment Card Industry Data Security Standard) is a set of security standards designed to protect card data. All UK businesses accepting card payments must comply. Rocket Payments terminals and payment gateway are upgraded to p2pe (point to point encryption) fully PCI DSS Level 1 certified, the highest security standard."
        }
      },
      {
        "@type": "Question",
        "name": "How long do card payment funds take to reach my account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With Rocket Payments, funds from card transactions are typically deposited into your business bank 6am 7 days a week with next day payments enabled. We offer next-day settlement as an optional service upgrade."
        }
      }
    ]
  },
  pricing: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much are card machine fees in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Card machine fees in the UK vary by provider. Rocket Payments offers some of the lowest rates: 0.29% for UK debit cards, 0.67% for credit cards, and 0.9% for international cards. There are options for no monthly fixed fees or hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cheapest card payment provider UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rocket Payments is one of the cheapest card payment providers in the UK, with rates starting from just 0.29% per transaction. Unlike competitors like Dojo, we don't charge monthly fees, setup fees, or cancellation fees."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden fees with card payment processing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With Rocket Payments, there are no hidden fees. Our transparent pricing includes all transaction fees upfront. We don't charge for setup, monthly service, PCI compliance, or customer support."
        }
      },
      {
        "@type": "Question",
        "name": "How does Rocket Payments compare to Dojo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rocket Payments offers similar premium card machines to Dojo but with lower transaction fees starting from 0.29% vs Dojo's higher rates. We also provide business funding options and have no monthly fees or contracts."
        }
      }
    ]
  },
  businessFunding: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a merchant cash advance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A merchant cash advance (MCA) is a type of business funding where you receive a lump sum upfront and repay it through a percentage of your daily card sales. Rocket Payments offers MCAs from £5,000 to £500,000 with flexible repayment based on your turnover."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a business loan with bad credit UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Rocket Payments offers merchant cash advances based on your card turnover rather than credit score. If you process regular card payments, you may qualify for business funding even with less-than-perfect credit."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get business funding in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With Rocket Payments, you can receive business funding within 24-48 hours of approval. We assess applications based on your card transaction history, making decisions fast."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best business loan for small business UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For UK small businesses that process card payments, a merchant cash advance from Rocket Payments is often the best option. Unlike traditional loans, repayments flex with your sales, and approval is based on turnover not credit history."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer business funding in Kent and East Sussex?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Rocket Payments serves businesses across Kent, East Sussex, and the entire UK. We provide card payment processing and business funding to businesses in Maidstone, Canterbury, Brighton, Eastbourne, Hastings, Tunbridge Wells, and all surrounding areas."
        }
      }
    ]
  }
};

export const productFaqSchemas = {
  cardMachine: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get a free card machine in the UK?",
        "acceptedAnswer": { "@type": "Answer", "text": "With Rocket Payments you get a free card machine when you sign up for a merchant account. There are no upfront costs, no monthly rental fees, and no long-term contracts. Simply apply online, get approved within 24 hours, and your terminal ships free next day." }
      },
      {
        "@type": "Question",
        "name": "What card machine is better than Dojo?",
        "acceptedAnswer": { "@type": "Answer", "text": "Rocket Go and Rocket Pocket offer comparable hardware to Dojo card machines but with lower transaction fees starting from 0.29%, no monthly fees, and no exit fees. Rocket Payments also covers up to £3,000 of exit fees if you switch from another provider." }
      },
      {
        "@type": "Question",
        "name": "Does the Rocket Go card machine work without WiFi?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Rocket Go uses 4G connectivity built-in so it works anywhere with a mobile signal — outdoor markets, festivals, events, and pop-ups. It also connects to WiFi when available for faster speeds." }
      },
      {
        "@type": "Question",
        "name": "How long does the Rocket Go battery last?",
        "acceptedAnswer": { "@type": "Answer", "text": "Rocket Go has an all-day battery designed to last a full business day of heavy use. The device can process hundreds of transactions on a single charge." }
      },
      {
        "@type": "Question",
        "name": "Can I accept Apple Pay and Google Pay with Rocket Payments?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. All Rocket Payments terminals accept Apple Pay, Google Pay, Samsung Pay, and all contactless-enabled cards as standard. There are no extra fees for digital wallet payments." }
      },
      {
        "@type": "Question",
        "name": "When do card payment funds arrive in my account?",
        "acceptedAnswer": { "@type": "Answer", "text": "Rocket Payments offers next-day settlement. Funds from card transactions taken today are deposited into your business bank account by 6am the following morning, 7 days a week including weekends and bank holidays." }
      },
      {
        "@type": "Question",
        "name": "Is there a monthly fee for a Rocket Payments card machine?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Rocket Payments charges no monthly fee for the card machine. You only pay a small percentage per transaction. This makes it far more cost-effective than providers who charge £20-£40 per month in rental fees." }
      }
    ]
  },
  businessFundingFaq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much business funding can I get from Rocket Payments?",
        "acceptedAnswer": { "@type": "Answer", "text": "Rocket Payments offers business funding from £5,000 to £500,000 through its Flex Funds merchant cash advance product. The amount you qualify for is based on your average monthly card turnover." }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get business funding?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most Rocket Payments Flex Funds applications are approved within 24 hours and funded within 48 hours of approval. This is significantly faster than traditional bank loans which can take weeks or months." }
      },
      {
        "@type": "Question",
        "name": "Do I need good credit to get a merchant cash advance?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Rocket Payments Flex Funds is based on your card processing turnover, not your credit score. If your business processes regular card payments, you may qualify even with less-than-perfect credit history." }
      },
      {
        "@type": "Question",
        "name": "How does repayment work for a merchant cash advance?",
        "acceptedAnswer": { "@type": "Answer", "text": "Repayments are automatically taken as a small fixed percentage of your daily card sales. When sales are high you repay more, when sales are slow you repay less. There are no fixed monthly payments and no risk of missed payment fees." }
      }
    ]
  },
  tapToPayFaq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use my iPhone as a card machine in the UK?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. With Rocket Payments' Tap to Pay on iPhone feature, you can accept contactless card payments, Apple Pay, and Google Pay directly on your iPhone — no card reader or extra hardware needed. Requires iPhone XS or later running iOS 16+." }
      },
      {
        "@type": "Question",
        "name": "Is Tap to Pay on iPhone secure?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Tap to Pay on iPhone uses the same secure NFC chip and encryption as traditional card terminals. Cardholder data is never stored on the device. It is fully PCI DSS compliant." }
      },
      {
        "@type": "Question",
        "name": "What is the transaction limit for contactless payments in the UK?",
        "acceptedAnswer": { "@type": "Answer", "text": "The standard contactless limit in the UK is £100 per transaction for physical cards. However, there is no limit for Apple Pay, Google Pay, or Samsung Pay when the customer authenticates with Face ID, Touch ID, or PIN." }
      }
    ]
  }
};

export function SEO({
  title,
  description,
  canonical,
  ogImage = "https://rocketpayments.co.uk/og-image.png",
  ogType = "website",
  noIndex = false,
  keywords,
  structuredData,
  breadcrumbs,
}: SEOProps) {
  const fullTitle = title.includes("Rocket Payments")
    ? title
    : `${title} | Rocket Payments`;

  // Auto-generate canonical URL if not explicitly provided
  const canonicalUrl = canonical || (typeof window !== 'undefined' 
    ? `https://rocketpayments.co.uk${window.location.pathname.replace(/\/$/, '') || '/'}`
    : undefined);

  const defaultKeywords = "card payment processing UK, merchant services UK, payment terminal, card machine UK, contactless payments, business funding UK, business loans UK, merchant cash advance, Dojo alternative, card machine Kent, card machine East Sussex, payment terminal Maidstone, card payments Canterbury, business funding Brighton, Tunbridge Wells card machine, Ashford payment processing, Dover merchant services, Hastings card payments, Eastbourne business funding";

  // Auto-generate breadcrumbs from URL path if not explicitly provided
  const autoBreadcrumbs = (() => {
    if (breadcrumbs && breadcrumbs.length > 0) return breadcrumbs;
    if (typeof window === 'undefined') return null;
    const path = window.location.pathname;
    if (path === '/' || path === '') return null;
    const segments = path.split('/').filter(Boolean);
    const items: Array<{name: string; url: string}> = [
      { name: 'Home', url: 'https://rocketpayments.co.uk/' }
    ];
    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      items.push({ name, url: `https://rocketpayments.co.uk${currentPath}` });
    });
    return items;
  })();

  const breadcrumbSchema = autoBreadcrumbs && autoBreadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": autoBreadcrumbs.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  const allStructuredData = structuredData 
    ? Array.isArray(structuredData) 
      ? [localBusinessSchema, ...structuredData]
      : [localBusinessSchema, structuredData]
    : [localBusinessSchema];

  const finalStructuredData = breadcrumbSchema ? [...allStructuredData, breadcrumbSchema] : allStructuredData;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {canonicalUrl && <link rel="alternate" hrefLang="en-GB" href={canonicalUrl} />}
      {canonicalUrl && <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - Rocket Payments`} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Rocket Payments" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RocketPayments" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${fullTitle} - Rocket Payments`} />
      
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
      
      {finalStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
