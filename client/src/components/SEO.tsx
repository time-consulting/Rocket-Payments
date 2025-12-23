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
  "description": "Professional card payment processing and merchant services for UK businesses. Low fees, fast setup, 99.99% uptime.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressLocality": "London"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "url": "https://rocketpayments.co.uk",
  "priceRange": "££",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2847",
    "bestRating": "5"
  }
};

export const serviceSchemas = {
  cardTerminal: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Card Payment Terminal",
    "description": "Professional card payment terminals for UK businesses. Accept contactless, chip & PIN, Apple Pay, and Google Pay. Low transaction fees from 0.5%.",
    "brand": { "@type": "Brand", "name": "Rocket Payments" },
    "category": "Payment Processing Equipment",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "0",
      "description": "Free terminal with merchant account"
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
    "description": "Secure online payment gateway for UK ecommerce businesses. PCI DSS compliant, 3D Secure, real-time fraud protection.",
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
    "description": "Complete merchant account services for UK businesses. Accept all major credit and debit cards with competitive rates.",
    "provider": { "@type": "Organization", "name": "Rocket Payments" },
    "areaServed": { "@type": "Country", "name": "United Kingdom" }
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
          "text": "Card payment processing fees in the UK typically range from 0.5% to 2.5% per transaction, depending on the provider and transaction type. Rocket Payments offers competitive rates starting from 0.5% for debit cards and 0.9% for credit cards, with no hidden fees."
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
          "text": "Contactless payment uses NFC (Near Field Communication) technology to process card payments without inserting or swiping. Customers simply tap their card, smartphone, or wearable on the terminal. In the UK, contactless payments up to £100 don't require a PIN, making transactions faster and more convenient."
        }
      },
      {
        "@type": "Question",
        "name": "Are payment processing fees tax deductible for UK businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, payment processing fees are a legitimate business expense and are tax deductible for UK businesses. You can claim these fees as an operating cost when calculating your taxable profits."
        }
      },
      {
        "@type": "Question",
        "name": "What is PCI DSS compliance and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PCI DSS (Payment Card Industry Data Security Standard) is a set of security standards designed to protect card data. All UK businesses accepting card payments must comply. Rocket Payments terminals and payment gateway are fully PCI DSS Level 1 certified, the highest security standard."
        }
      },
      {
        "@type": "Question",
        "name": "How long do card payment funds take to reach my account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With Rocket Payments, funds from card transactions are typically deposited into your business bank account within 1-2 working days. We offer next-day settlement for most UK businesses at no extra cost."
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
          "text": "Card machine fees in the UK vary by provider. Rocket Payments offers some of the lowest rates: 0.5% for UK debit cards, 0.9% for credit cards, and 1.5% for international cards. There are no monthly fees or hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cheapest card payment provider UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rocket Payments is one of the cheapest card payment providers in the UK, with rates starting from just 0.5% per transaction. Unlike competitors, we don't charge monthly fees, setup fees, or cancellation fees."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden fees with card payment processing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With Rocket Payments, there are no hidden fees. Our transparent pricing includes all transaction fees upfront. We don't charge for setup, monthly service, PCI compliance, or customer support."
        }
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
}: SEOProps) {
  const fullTitle = title.includes("Rocket Payments")
    ? title
    : `${title} | Rocket Payments`;

  const defaultKeywords = "card payment processing UK, merchant services UK, payment terminal, contactless payments, card machine UK, payment gateway, credit card processing, debit card payments, EPOS integration, low cost merchant account";

  const allStructuredData = structuredData 
    ? Array.isArray(structuredData) 
      ? [organizationSchema, localBusinessSchema, ...structuredData]
      : [organizationSchema, localBusinessSchema, structuredData]
    : [organizationSchema, localBusinessSchema];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Rocket Payments" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
      
      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
