export interface IndustryGuide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  category: "epos" | "reservations" | "intelligence" | "funding" | "trends";
  heroText: string;
  sections: {
    id: string;
    title: string;
    content: string[];
    callout?: {
      stat: string;
      text: string;
    };
  }[];
  faqSchema: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

export const industryGuides: IndustryGuide[] = [
  // Google Reserve Guide
  {
    slug: "google-reserve-restaurant-bookings-uk",
    title: "Google Reserve: Increase Restaurant Reservations by 40%",
    metaTitle: "Google Reserve for Restaurants UK | 40% More Bookings | Rocket Payments",
    metaDescription: "Learn how Google Reserve increases restaurant bookings by up to 40%. Set up Reserve with Google to let customers book directly from Google Search and Maps.",
    keywords: "Google Reserve UK, Reserve with Google restaurants, Google booking restaurant, increase restaurant reservations, Google Maps booking",
    category: "reservations",
    heroText: "Let customers book your restaurant directly from Google Search and Maps. Studies show restaurants using Google Reserve see up to 40% more reservations.",
    sections: [
      {
        id: "what-is-google-reserve",
        title: "What is Google Reserve?",
        content: [
          "Google Reserve (also called Reserve with Google) allows customers to book tables at your restaurant directly from Google Search results, Google Maps, and Google Assistant. When someone searches for 'restaurants near me' or finds your business on Maps, they can book instantly without leaving Google.",
          "This 'book now' button appears prominently in your Google Business Profile, removing friction from the booking process. Instead of calling your restaurant or navigating to a separate website, customers complete their reservation in just a few taps.",
          "Google Reserve integrates with leading reservation platforms like Rocket Bookings, ensuring bookings flow directly into your existing system. There's no double-booking risk and no manual entry required."
        ],
        callout: {
          stat: "40%",
          text: "Average increase in reservations for restaurants using Google Reserve"
        }
      },
      {
        id: "why-restaurants-need-google-reserve",
        title: "Why Every UK Restaurant Needs Google Reserve",
        content: [
          "Over 90% of diners now research restaurants online before visiting, and Google is their starting point. If a competitor offers instant booking while you require a phone call, you're losing customers.",
          "The data is compelling: restaurants implementing Google Reserve typically see booking increases of 25-40%. The reason is simple - you're capturing customers at the moment of highest intent, when they're actively searching for somewhere to eat.",
          "Mobile bookings have grown exponentially. When someone searches 'Italian restaurant Brighton' on their phone, they want to book immediately. Google Reserve delivers this frictionless experience.",
          "Voice search is accelerating adoption further. 'Hey Google, book me a table at [your restaurant] for 7pm tonight' only works if you're connected to Reserve. As voice assistants become mainstream, this channel will become essential."
        ]
      },
      {
        id: "how-to-set-up-google-reserve",
        title: "How to Set Up Google Reserve for Your Restaurant",
        content: [
          "Setting up Google Reserve requires connecting your reservation system to Google's platform through an approved booking partner. Rocket Bookings is a Google Reserve partner, making setup straightforward.",
          "Step 1: Ensure your Google Business Profile is claimed, verified, and complete with accurate information including address, phone, hours, and photos.",
          "Step 2: Sign up with a Google Reserve partner like Rocket Bookings. The integration connects your booking diary directly to Google.",
          "Step 3: Configure your availability, party sizes, and booking rules within your reservation system. These sync automatically to Google.",
          "Step 4: Once connected, the 'Book a table' button appears on your Google Business Profile within a few days. Monitor bookings through your normal reservation dashboard."
        ]
      },
      {
        id: "google-reserve-best-practices",
        title: "Maximising Bookings with Google Reserve",
        content: [
          "Keep your Google Business Profile updated with current menus, photos, and special offers. Profiles with more content rank higher and convert better.",
          "Respond to all Google reviews, positive and negative. This improves your visibility and shows potential diners you care about customer experience.",
          "Ensure your booking availability is generous. If Google shows 'no tables available' too often, customers stop trying. Consider extending your booking window or adding more available slots.",
          "Use Google Posts to promote special events, seasonal menus, and offers. These appear in your Business Profile and can drive additional bookings.",
          "Track your Google Reserve bookings separately to measure impact. Most restaurants see a significant increase within the first month of activation."
        ]
      }
    ],
    faqSchema: [
      {
        question: "How much does Google Reserve cost for restaurants?",
        answer: "Google Reserve itself is free - Google doesn't charge restaurants or customers for bookings. However, you need a reservation system that integrates with Google Reserve, such as Rocket Bookings. Costs vary by provider but are typically included in your booking system subscription."
      },
      {
        question: "How much can Google Reserve increase restaurant bookings?",
        answer: "Studies show restaurants using Google Reserve see booking increases of 25-40% on average. The exact increase depends on your location, cuisine type, and how optimised your Google Business Profile is."
      },
      {
        question: "How do I add book a table button to Google?",
        answer: "To add a booking button to your Google listing, you need to connect your restaurant to a Google Reserve partner like Rocket Bookings. Once connected, the book button appears automatically on your Google Business Profile, Maps, and Search results."
      },
      {
        question: "Does Google Reserve work with my existing booking system?",
        answer: "Google Reserve works through approved partners. Rocket Bookings integrates with Google Reserve, so bookings from Google flow directly into your existing diary alongside phone and website bookings."
      }
    ],
    ctaText: "Set Up Google Reserve",
    ctaLink: "/bookings"
  },
  // Experience Economy Guide
  {
    slug: "experience-dining-restaurant-trends-uk",
    title: "Experience-Based Dining: Why It Outperforms Standard Restaurants",
    metaTitle: "Experience Dining Trends UK 2025 | Restaurant Growth Strategy | Rocket Payments",
    metaDescription: "Discover why experience-based restaurants outperform traditional dining. Learn how to transform your restaurant into a destination venue that commands premium prices.",
    keywords: "experience dining UK, restaurant experience economy, immersive dining, destination restaurant, experiential hospitality",
    category: "trends",
    heroText: "In the experience economy, diners pay for memorable moments, not just meals. Restaurants offering experiences consistently outperform standard venues on revenue, reviews, and repeat visits.",
    sections: [
      {
        id: "experience-economy-explained",
        title: "The Rise of Experience-Based Dining",
        content: [
          "The experience economy has fundamentally changed how consumers value dining out. Post-pandemic, people increasingly prioritise memorable experiences over material purchases. For restaurants, this means the meal itself is just one part of the value proposition.",
          "Experience-based restaurants - from immersive theatrical dining to chef's table concepts, tasting menus with stories, and interactive cooking experiences - consistently outperform traditional restaurants on key metrics.",
          "Data shows experiential restaurants achieve 30-50% higher average transaction values, stronger social media engagement (driving organic marketing), higher review scores, and crucially, better customer loyalty and repeat visit rates.",
          "This isn't limited to fine dining. Casual restaurants incorporating interactive elements, themed environments, or unique service concepts are capturing the experience-seeking market across all price points."
        ],
        callout: {
          stat: "30-50%",
          text: "Higher average spend at experience-focused restaurants vs standard dining"
        }
      },
      {
        id: "types-of-experience-dining",
        title: "Types of Experience Dining Concepts",
        content: [
          "Immersive/Theatrical Dining: Restaurants like London's Gingerline or The Murdér Express combine dining with theatrical performances, transforming meals into memorable events.",
          "Chef's Table & Open Kitchen: Watching food preparation creates connection and justifies premium pricing. Even casual restaurants can incorporate visible cooking areas.",
          "Tasting Menu Journeys: Multi-course experiences with storytelling - each dish connected by theme, origin, or narrative - transform dinner into an journey.",
          "Interactive Concepts: DIY elements (Korean BBQ, fondue, build-your-own dishes) engage diners and create shareable moments.",
          "Themed Environments: From nostalgic 80s diners to futuristic concepts, strong theming differentiates venues and creates Instagram-worthy moments that drive organic marketing.",
          "Private & Exclusive: Pop-ups, secret locations, and limited-availability concepts create urgency and exclusivity that command premiums."
        ]
      },
      {
        id: "implementing-experience-strategy",
        title: "How to Add Experience Elements to Your Restaurant",
        content: [
          "Start by auditing your current customer journey from booking to departure. Identify touchpoints where you can add surprise, delight, or engagement.",
          "Consider your booking process: Can you build anticipation with pre-arrival communications, menu previews, or personalised touches based on the occasion they're celebrating?",
          "Evaluate your service style: Could staff share stories about dishes, suppliers, or techniques? Knowledge sharing elevates perceived value.",
          "Assess your space: Are there opportunities for theatrical presentation, interactive elements, or photo-worthy moments? Even small changes can create shareable experiences.",
          "Review your menu structure: Could you offer a 'journey' option - a tasting menu or sharing experience that tells a story?",
          "Technology can enhance experience: tableside ordering, interactive menus, post-visit content sharing, and personalised return offers all contribute to the experiential journey."
        ]
      },
      {
        id: "measuring-experience-success",
        title: "Measuring Experience ROI",
        content: [
          "Track average transaction values before and after implementing experience elements. Experience-focused restaurants typically see 20-40% increases.",
          "Monitor social media mentions and tagged photos. Experiential dining drives organic marketing worth thousands in advertising value.",
          "Measure repeat visit rates. Experiences create emotional connections that drive loyalty far more effectively than discounts.",
          "Analyse review sentiment. Experience-focused restaurants consistently achieve higher ratings because diners remember how they felt, not just what they ate.",
          "Use data tools like Rocket Intelligence to benchmark performance against local competitors and identify which experience elements drive the best results."
        ]
      }
    ],
    faqSchema: [
      {
        question: "What is experience-based dining?",
        answer: "Experience-based dining goes beyond serving food to create memorable, engaging moments. This includes immersive themes, theatrical service, interactive elements, chef's tables, tasting journeys, and any concept where the experience is as important as the meal itself."
      },
      {
        question: "Do experience restaurants make more money?",
        answer: "Yes, experience-focused restaurants typically achieve 30-50% higher average transaction values, better review scores, increased social media visibility (free marketing), and higher customer loyalty and repeat visit rates compared to traditional restaurants."
      },
      {
        question: "How can I make my restaurant more experiential?",
        answer: "Start with small changes: train staff to share stories about dishes, add surprising presentation elements, create photo-worthy moments, offer tasting options or sharing experiences, and build anticipation through your booking and communication process."
      }
    ],
    ctaText: "Grow Your Restaurant",
    ctaLink: "/bookings"
  },
  // Rocket Intelligence Guide
  {
    slug: "rocket-intelligence-restaurant-data-insights",
    title: "Rocket Intelligence: Data-Driven Restaurant Growth",
    metaTitle: "Rocket Intelligence App | Restaurant Data & Analytics UK | Rocket Payments",
    metaDescription: "Discover how Rocket Intelligence helps restaurants grow 87% faster with data insights. Compare performance vs local competitors, track new vs returning customers.",
    keywords: "restaurant analytics UK, hospitality data insights, restaurant performance data, Dojo intelligence, competitor benchmarking restaurants",
    category: "intelligence",
    heroText: "Businesses that use data to drive decisions are 87% more likely to grow. Rocket Intelligence puts powerful analytics in your pocket - compare your performance against local competitors, understand customer behaviour, and identify growth opportunities.",
    sections: [
      {
        id: "what-is-rocket-intelligence",
        title: "What is Rocket Intelligence?",
        content: [
          "Rocket Intelligence is a powerful analytics app that transforms your payment data into actionable business insights. Available on iOS and Android, it gives restaurant and hospitality owners real-time visibility into their performance.",
          "Unlike basic payment reports that show what happened, Rocket Intelligence helps you understand why it happened and what to do about it. It's the difference between seeing you were quiet last Tuesday and understanding that a local event drew customers to competitors.",
          "The app connects to your Rocket Payments terminal, automatically analysing transaction patterns, customer behaviour, and market trends. No manual data entry, no complex spreadsheets - just clear insights on your phone.",
          "Powered by aggregated, anonymised data from thousands of UK hospitality businesses, Rocket Intelligence shows how you compare to similar venues in your area - something previously only available to large chains with dedicated analytics teams."
        ],
        callout: {
          stat: "87%",
          text: "Businesses using data insights are more likely to achieve growth targets"
        }
      },
      {
        id: "key-features",
        title: "Key Features of Rocket Intelligence",
        content: [
          "Local Competitor Benchmarking: See how your revenue, transaction values, and customer patterns compare to similar businesses in your area. Understand if you're winning or losing local market share.",
          "New vs Returning Customer Analysis: Track the balance between acquiring new customers and retaining existing ones. High new customer rates with poor retention signals service issues; declining new customers might indicate marketing problems.",
          "Peak Time Optimisation: Identify your busiest periods and understand capacity utilisation. Are you maximising revenue during peaks? Could you shift demand to quieter periods with promotions?",
          "Transaction Trend Analysis: Spot patterns in average spend, transaction frequency, and payment methods. Understand seasonal variations and the impact of menu changes or price adjustments.",
          "Real-Time Alerts: Get notified of significant changes - unusual quiet periods, transaction spikes, or emerging trends - so you can respond quickly.",
          "Growth Opportunity Identification: The app highlights specific areas where you're underperforming versus benchmarks, with suggestions for improvement."
        ]
      },
      {
        id: "using-data-for-growth",
        title: "How to Use Data to Grow Your Restaurant",
        content: [
          "Start with your local benchmark report. If competitors are outperforming you on specific days or times, investigate what they're doing differently. Are they running promotions? Better marketed?",
          "Analyse your new customer rate. If it's declining, your visibility or marketing may need attention. If it's healthy but repeat visits are low, focus on customer experience and loyalty initiatives.",
          "Examine your average transaction value trends. If spending is declining, consider menu engineering, upselling training, or premium additions. If it's growing, ensure you're maintaining value perception.",
          "Use peak time data to optimise staffing and reduce costs during quiet periods. Consider dynamic pricing or promotions to shift demand.",
          "Track the impact of changes. When you introduce a new menu, promotion, or operational change, use the data to measure actual impact rather than relying on gut feel."
        ]
      },
      {
        id: "data-driven-success-stories",
        title: "The Data-Driven Advantage",
        content: [
          "Research consistently shows that data-driven businesses outperform those relying on intuition. A Harvard Business Review study found companies using data for decisions are 5% more productive and 6% more profitable.",
          "In hospitality specifically, operators using analytics report 15-25% improvements in key metrics within the first year. They identify waste faster, spot opportunities earlier, and make more confident decisions.",
          "The competitive advantage is significant. While your competitors guess at what's working, you'll know. While they react to problems after the damage is done, you'll see warning signs early.",
          "Rocket Intelligence democratises the kind of analytics previously available only to large chains. Independent restaurants can now compete with data-driven insights that level the playing field."
        ]
      }
    ],
    faqSchema: [
      {
        question: "What is Rocket Intelligence?",
        answer: "Rocket Intelligence is a mobile analytics app that connects to your Rocket Payments terminal to provide business insights. It shows how you compare to local competitors, analyses customer behaviour (new vs returning), identifies peak times, and highlights growth opportunities."
      },
      {
        question: "How does Rocket Intelligence compare me to competitors?",
        answer: "Rocket Intelligence uses aggregated, anonymised data from thousands of UK hospitality businesses to create local benchmarks. It compares your performance on metrics like revenue, transaction values, and customer patterns to similar venues in your area, showing where you're winning or losing market share."
      },
      {
        question: "Do I need special equipment for Rocket Intelligence?",
        answer: "No special equipment is needed. Rocket Intelligence works with your existing Rocket Payments terminal. Simply download the app on iOS or Android, connect it to your Rocket account, and you'll start seeing insights based on your transaction data."
      },
      {
        question: "Can data really help my restaurant grow?",
        answer: "Yes - studies show businesses using data to drive decisions are 87% more likely to achieve growth targets. Data helps you identify what's working, spot problems early, understand customer behaviour, and make confident decisions rather than relying on guesswork."
      }
    ],
    ctaText: "Get Rocket Intelligence",
    ctaLink: "/quote"
  },
  // Business Funding Industry Trends
  {
    slug: "business-funding-hospitality-growth-trends",
    title: "Business Funding: How Smart Investment Drives Restaurant Growth",
    metaTitle: "Business Funding for Restaurants UK 2025 | Growth Finance | Rocket Payments",
    metaDescription: "Learn how business funding drives restaurant growth. Discover trends in hospitality finance, when to invest, and how Rocket Funding supports UK restaurants.",
    keywords: "restaurant business funding UK, hospitality finance, merchant cash advance restaurants, business growth funding, restaurant investment",
    category: "funding",
    heroText: "Strategic investment at the right time separates thriving restaurants from struggling ones. Discover how business funding fuels growth and why Rocket Funding is designed for hospitality success.",
    sections: [
      {
        id: "funding-landscape-2025",
        title: "The Business Funding Landscape for UK Hospitality 2025",
        content: [
          "The hospitality funding landscape has evolved significantly. Traditional bank lending to restaurants remains challenging - banks often see hospitality as high-risk, leading to lengthy applications, high rejection rates, and inflexible terms.",
          "Alternative finance has filled this gap. Merchant cash advances, revenue-based financing, and hospitality-specialist lenders now provide over 60% of small business funding in the UK food service sector.",
          "The key trend is speed and flexibility. Modern hospitality businesses can't wait 6-8 weeks for bank decisions. Opportunities - new sites, equipment, renovations - require fast access to capital.",
          "Post-pandemic, funders have become more sophisticated about hospitality. They understand seasonality, the importance of location, and the variability of trading. This means better-suited products and higher approval rates for quality operators."
        ],
        callout: {
          stat: "60%+",
          text: "Of UK hospitality funding now comes from alternative finance providers"
        }
      },
      {
        id: "when-to-invest",
        title: "When Should Restaurants Invest in Growth?",
        content: [
          "Expansion Timing: When you're consistently turning away customers or hitting capacity during peak times, it's time to consider a second site or venue expansion. Funding allows you to capitalise on proven demand.",
          "Equipment & Efficiency: Outdated equipment costs money in energy, repairs, and inefficiency. Modern kitchen equipment, EPOS systems, and payment terminals pay back through savings and improved service speed.",
          "Marketing Pushes: Launching a new menu, seasonal campaign, or delivery service requires upfront investment. Funded marketing during quiet periods can transform your trading pattern.",
          "Opportunity Windows: Sometimes the right opportunity appears unexpectedly - a competitor closes, a prime site becomes available, or a key staff member wants to launch a concept with you. Access to fast funding means you can act.",
          "Renovation & Refresh: Customer expectations evolve. A venue refresh every 3-5 years maintains appeal and commands premium pricing. Funding spreads this cost across future revenue."
        ]
      },
      {
        id: "rocket-funding-difference",
        title: "How Rocket Funding Works for Hospitality",
        content: [
          "Rocket Funding is a merchant cash advance designed specifically for hospitality businesses. Unlike bank loans with fixed monthly payments, you repay a small percentage of each card transaction - paying more when busy, less when quiet.",
          "Because we process your card payments, we see your real trading performance. This means faster decisions (often 24-48 hours), higher approval rates, and amounts based on your actual revenue rather than projections.",
          "Funding amounts range from £5,000 to £500,000, typically 50-150% of your monthly card turnover. There are no fixed terms - you repay automatically through trading until the agreed amount is complete.",
          "For hospitality, this flexible repayment is crucial. January's quiet period doesn't create cash flow pressure because repayments automatically reduce. Summer's boom doesn't mean you're paying the same fixed amount as winter.",
          "There's no impact on your credit score from the application, no security or personal guarantees required, and you keep full control of your business."
        ]
      },
      {
        id: "funding-success-factors",
        title: "Making Funded Growth Successful",
        content: [
          "Have a clear purpose: The most successful funded investments have specific goals - 'increase capacity by 30%', 'reduce kitchen costs by £1,000/month', 'capture £50k additional revenue from events'. Vague plans lead to poor returns.",
          "Calculate the payback: Before investing, model the expected return. If new equipment saves £500/month, a £6,000 investment pays back in a year. If a marketing push should generate £10,000 additional revenue, funding £3,000 makes sense.",
          "Time it right: Invest before you need the capacity or capability. Fund your summer terrace in March, not July. Start your Christmas marketing in October, not December.",
          "Track the impact: Use Rocket Intelligence to measure the results of funded investments. Did the renovation increase average spend? Did the marketing grow new customer acquisition? Data proves what works for future decisions.",
          "Build a relationship: Successful businesses use funding strategically over time. Your first funding builds track record for larger amounts later. Start conservatively, demonstrate success, scale up."
        ]
      }
    ],
    faqSchema: [
      {
        question: "What is Rocket Funding?",
        answer: "Rocket Funding is a merchant cash advance for hospitality businesses. You receive a lump sum upfront and repay automatically through a small percentage of your card transactions. Repayments flex with your revenue - pay more when busy, less when quiet."
      },
      {
        question: "How much funding can restaurants get?",
        answer: "Rocket Funding provides £5,000 to £500,000 based on your card payment history. Typically, you can access 50-150% of your monthly card turnover. Because we process your payments, we can make fast decisions based on actual trading."
      },
      {
        question: "Is business funding good for restaurants?",
        answer: "Yes, when used strategically. Funding for expansion, equipment, renovation, or marketing can drive significant growth. The key is having a clear purpose and expected return. Hospitality-specific funding like Rocket Funding is designed for the industry's cash flow patterns."
      },
      {
        question: "How quickly can I get restaurant funding?",
        answer: "Rocket Funding decisions are typically made within 24-48 hours, with funds transferred shortly after. Because we base decisions on your card payment history with us, there's minimal paperwork and no lengthy bank processes."
      }
    ],
    ctaText: "Apply for Rocket Funding",
    ctaLink: "/business-funding"
  },
  // EPOS Integration Guide
  {
    slug: "epos-integration-payment-terminals-guide",
    title: "Complete Guide to EPOS & Payment Terminal Integration",
    metaTitle: "EPOS Integration Guide UK 2025 | Payment Terminal Setup | Rocket Payments",
    metaDescription: "Learn how EPOS integration with payment terminals improves efficiency and reduces errors. Guide to connecting your till system with Rocket Payments card machines.",
    keywords: "EPOS integration UK, payment terminal integration, connect till to card machine, integrated payments hospitality, EPOS card machine setup",
    category: "epos",
    heroText: "Integrated payments connect your EPOS till to your card terminal, eliminating manual entry, reducing errors, and speeding up service. Learn how to set up integration with Rocket Payments.",
    sections: [
      {
        id: "what-is-epos-integration",
        title: "What is EPOS Payment Integration?",
        content: [
          "EPOS payment integration connects your till system directly to your card terminal. When you complete a sale on your EPOS, the payment amount automatically transfers to the card machine - no manual keying required.",
          "The customer taps or inserts their card, and the payment result (approved or declined) returns to your EPOS. Your sales and payments automatically match, simplifying end-of-day reconciliation.",
          "Integration works through secure cloud connections. Your EPOS communicates with your Rocket Payments terminal via WiFi or internet, with encrypted data ensuring security.",
          "This is different from a standalone terminal where staff manually enter amounts on the card machine. Manual entry creates opportunities for errors - transposed digits, forgotten items, or fraudulent adjustments."
        ],
        callout: {
          stat: "600+",
          text: "EPOS systems integrate with Rocket Payments terminals"
        }
      },
      {
        id: "benefits-of-integration",
        title: "Benefits of Integrated Payments",
        content: [
          "Error Reduction: Manual amount entry is error-prone. Staff under pressure transpose digits or forget items. Integration eliminates these errors by pushing exact amounts from till to terminal.",
          "Speed of Service: Integrated payments are 15-20 seconds faster per transaction. Over hundreds of daily transactions, this significantly improves service speed and customer satisfaction.",
          "Simplified Reconciliation: At end of day, card totals on your EPOS exactly match your terminal totals. No more hunting for discrepancies between systems.",
          "Fraud Prevention: Manual terminals create opportunities for staff to charge customers differently than the till amount. Integration removes this risk.",
          "Better Reporting: Integrated systems provide unified reports showing sales, payments, and reconciliation in one place. Management visibility improves.",
          "Staff Efficiency: Staff focus on customer service rather than managing two separate systems. Training is simpler when there's only one workflow."
        ]
      },
      {
        id: "how-integration-works",
        title: "How to Set Up EPOS Integration",
        content: [
          "Rocket Payments integrates with 600+ EPOS systems including ICR Touch, Goodtill, Power EPOS, 3S POS, Tevalis, Zonal, and many more. Check your current system is supported.",
          "When you sign up with Rocket Payments, we provide your integration credentials - a unique identifier that connects your terminal to your EPOS provider's platform.",
          "Your EPOS provider configures the integration on their side. This typically involves entering your Rocket integration ID into their system settings.",
          "Once configured, integration is automatic. Transactions flow from EPOS to terminal and results flow back. Most integrations are 'semi-integrated' - the amount transfers automatically, but the card terminal still handles payment independently.",
          "Testing is straightforward: process a small test transaction to confirm amounts transfer correctly and results return to your EPOS.",
          "Setup typically takes less than an hour. Your EPOS provider may do this remotely or during an on-site visit. Rocket Payments support is available to help with any integration questions."
        ]
      },
      {
        id: "choosing-right-epos",
        title: "Choosing an EPOS for Integration",
        content: [
          "If you're choosing a new EPOS, consider integration compatibility as a key factor. Rocket Payments integrates with 600+ systems, but some integrate more seamlessly than others.",
          "Look for EPOS providers that don't lock you into their own payment processing. Some systems make it difficult or expensive to use third-party payment providers like Rocket.",
          "Consider your specific sector: ICR Touch excels in wet-led venues, Goodtill suits casual dining, Tevalis serves larger operations, and Zonal is strong across hospitality.",
          "Think about your complete needs: EPOS, reservations, kitchen display, online ordering. Some providers offer complete suites (Zonal, Tevalis) while others focus specifically on point of sale.",
          "Check the integration type: 'fully integrated' solutions handle everything including receipts and reporting in one system, while 'semi-integrated' solutions push amounts to an independent terminal. Both work well; full integration offers the most seamless experience."
        ]
      }
    ],
    faqSchema: [
      {
        question: "What is EPOS integration?",
        answer: "EPOS integration connects your till system to your card payment terminal. When you complete a sale on your EPOS, the amount automatically transfers to the card machine. The customer pays, and the result returns to your EPOS - no manual amount entry required."
      },
      {
        question: "Which EPOS systems work with Rocket Payments?",
        answer: "Rocket Payments integrates with 600+ EPOS systems including ICR Touch, Goodtill, Power EPOS, 3S POS, WRS Solutions, Tevalis, Zonal, Lightspeed, and many more. Contact us to confirm your specific system."
      },
      {
        question: "How long does EPOS integration setup take?",
        answer: "Most EPOS integrations are set up within an hour. Rocket Payments provides your integration credentials, and your EPOS provider configures the connection. It can be done remotely in most cases."
      },
      {
        question: "Does integration cost extra?",
        answer: "Rocket Payments doesn't charge extra for EPOS integration. It's included as a standard feature. Your EPOS provider may have their own setup fees depending on their policies."
      }
    ],
    ctaText: "Get Integrated Payments",
    ctaLink: "/integrations"
  }
];

export const getGuideBySlug = (slug: string): IndustryGuide | undefined => {
  return industryGuides.find(g => g.slug === slug);
};

export const getGuidesByCategory = (category: IndustryGuide["category"]): IndustryGuide[] => {
  return industryGuides.filter(g => g.category === category);
};

export const getAllGuideSlugs = (): string[] => {
  return industryGuides.map(g => g.slug);
};
