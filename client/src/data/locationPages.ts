export interface LocationPage {
  slug: string;
  town: string;
  county: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroHeadline: string;
  heroSubheadline: string;
  localBusinesses: string[];
  testimonial: {
    quote: string;
    name: string;
    business: string;
    location: string;
  };
  nearbyAreas: string[];
  faqSchema: {
    question: string;
    answer: string;
  }[];
}

export const locationPages: LocationPage[] = [
  {
    slug: "card-machines-maidstone",
    town: "Maidstone",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Maidstone | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Maidstone, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Local support for Maidstone businesses. Next-day setup available.",
    keywords: "card machine Maidstone, payment terminal Maidstone, card reader Maidstone Kent, Maidstone card payments, business card machine Maidstone, PDQ machine Maidstone, contactless payment Maidstone, Dojo alternative Maidstone",
    heroHeadline: "Card Machines for Maidstone Businesses",
    heroSubheadline: "The county town of Kent deserves the best payment solutions. Get FREE Tap to Pay or premium terminals with rates from just 0.29%.",
    localBusinesses: ["Maidstone high street shops", "Fremlin Walk retailers", "Royal Star Arcade businesses", "Week Street cafes", "Maidstone market traders", "County Hall area offices"],
    testimonial: {
      quote: "Switched from Dojo to Rocket Payments and cut our fees by 40%. The local support in Kent is brilliant.",
      name: "Sarah T.",
      business: "The Coffee Corner",
      location: "Week Street, Maidstone"
    },
    nearbyAreas: ["Bearsted", "Loose", "Tovil", "Barming", "Allington", "Aylesford"],
    faqSchema: [
      {
        question: "Where can I get a card machine in Maidstone?",
        answer: "Rocket Payments offers card machines for Maidstone businesses with FREE Tap to Pay or premium terminals. We provide local support across Kent with next-day setup available. Call us or apply online for same-day approval."
      },
      {
        question: "What is the cheapest card machine provider in Maidstone?",
        answer: "Rocket Payments offers the lowest card machine rates in Maidstone, starting from just 0.29% per transaction. Unlike Dojo and other providers, we have no monthly fees, no setup costs, and no hidden charges."
      },
      {
        question: "Can I get same-day card machine setup in Maidstone?",
        answer: "Yes! Rocket Payments offers same-day approval and next-day delivery for Maidstone businesses. For Tap to Pay, you can start accepting payments within hours of signing up."
      }
    ]
  },
  {
    slug: "card-machines-canterbury",
    town: "Canterbury",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Canterbury | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Canterbury, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Cathedral city businesses. Local Kent support.",
    keywords: "card machine Canterbury, payment terminal Canterbury, card reader Canterbury Kent, Canterbury card payments, business card machine Canterbury, PDQ machine Canterbury, contactless payment Canterbury, Dojo alternative Canterbury",
    heroHeadline: "Card Machines for Canterbury Businesses",
    heroSubheadline: "From the historic high street to modern retail parks, Canterbury businesses trust Rocket Payments for reliable card processing.",
    localBusinesses: ["Canterbury High Street shops", "Whitefriars shopping centre", "Cathedral Quarter businesses", "St Dunstan's Street traders", "Canterbury market stalls", "University area cafes"],
    testimonial: {
      quote: "As a busy tourist city, we need fast, reliable payments. Rocket Payments handles thousands of transactions smoothly every week.",
      name: "James M.",
      business: "Canterbury Gifts",
      location: "High Street, Canterbury"
    },
    nearbyAreas: ["Herne Bay", "Whitstable", "Faversham", "Sturry", "Chartham", "Bridge"],
    faqSchema: [
      {
        question: "What card machine is best for Canterbury shops?",
        answer: "Canterbury shops benefit from Rocket Payments' range of terminals. For busy high street retailers, we recommend Rocket Go for portability. For cafes and restaurants, Tap to Pay offers a free, flexible solution."
      },
      {
        question: "Do Canterbury market traders need special card machines?",
        answer: "Rocket Payments' FREE Tap to Pay is perfect for Canterbury market traders. No hardware to buy, works on your iPhone, and has the lowest rates from 0.29%. Great for weekend markets and pop-up stalls."
      },
      {
        question: "How quickly can I get a card machine in Canterbury?",
        answer: "Rocket Payments offers next-day delivery to Canterbury addresses. For Tap to Pay, you can start accepting payments the same day you apply. We're local to Kent so support is always nearby."
      }
    ]
  },
  {
    slug: "card-machines-tunbridge-wells",
    town: "Tunbridge Wells",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Tunbridge Wells | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Tunbridge Wells, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Royal Tunbridge Wells businesses.",
    keywords: "card machine Tunbridge Wells, payment terminal Tunbridge Wells, card reader Tunbridge Wells Kent, Tunbridge Wells card payments, PDQ machine Tunbridge Wells, contactless payment Tunbridge Wells, Dojo alternative Tunbridge Wells",
    heroHeadline: "Card Machines for Tunbridge Wells Businesses",
    heroSubheadline: "Royal Tunbridge Wells businesses deserve premium payment solutions. Get the lowest rates from 0.29% with local Kent support.",
    localBusinesses: ["The Pantiles boutiques", "Royal Victoria Place retailers", "Camden Road shops", "High Street businesses", "Tunbridge Wells spa businesses", "Mount Pleasant traders"],
    testimonial: {
      quote: "The Pantiles visitors expect seamless payments. Rocket Payments delivers every time with lightning-fast transactions.",
      name: "Emma R.",
      business: "Pantiles Antiques",
      location: "The Pantiles, Tunbridge Wells"
    },
    nearbyAreas: ["Southborough", "Pembury", "Paddock Wood", "Tonbridge", "Crowborough", "Wadhurst"],
    faqSchema: [
      {
        question: "What card machines do Tunbridge Wells boutiques use?",
        answer: "Many Tunbridge Wells boutiques choose Rocket Payments for our premium service and low rates. The Rocket Pocket is popular for its sleek design, while Tap to Pay is FREE and perfect for smaller shops."
      },
      {
        question: "Are there card machine providers local to Tunbridge Wells?",
        answer: "Rocket Payments serves Tunbridge Wells and all of Kent with local support. Unlike national providers, we understand local businesses and offer personalised service with next-day setup."
      },
      {
        question: "What are the cheapest card payment rates in Tunbridge Wells?",
        answer: "Rocket Payments offers Tunbridge Wells businesses the lowest rates from 0.29% for debit cards. No monthly fees, no setup costs. We're consistently cheaper than Dojo, SumUp, and other providers."
      }
    ]
  },
  {
    slug: "card-machines-ashford",
    town: "Ashford",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Ashford | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Ashford, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Ashford Designer Outlet & local businesses.",
    keywords: "card machine Ashford, payment terminal Ashford, card reader Ashford Kent, Ashford card payments, PDQ machine Ashford, contactless payment Ashford, Dojo alternative Ashford, Ashford Designer Outlet payments",
    heroHeadline: "Card Machines for Ashford Businesses",
    heroSubheadline: "From the Designer Outlet to local high street shops, Ashford businesses choose Rocket Payments for reliable, low-cost card processing.",
    localBusinesses: ["Ashford Designer Outlet stores", "County Square retailers", "High Street shops", "Ashford International businesses", "Eureka Entertainment Park", "Chart Road industrial units"],
    testimonial: {
      quote: "We process hundreds of transactions daily at the outlet. Rocket Payments handles the volume perfectly with the lowest fees we've found.",
      name: "Michael D.",
      business: "Designer Brands Ltd",
      location: "Ashford Designer Outlet"
    },
    nearbyAreas: ["Tenterden", "Wye", "Kennington", "Willesborough", "Great Chart", "Mersham"],
    faqSchema: [
      {
        question: "What card machines do Ashford Designer Outlet shops use?",
        answer: "Many Ashford Designer Outlet stores use Rocket Payments for our high-volume processing and low rates from 0.29%. Our terminals handle busy retail environments perfectly with fast, reliable transactions."
      },
      {
        question: "Can I get a card machine for my Ashford business quickly?",
        answer: "Yes! Rocket Payments offers same-day approval and next-day delivery to Ashford businesses. We're local to Kent so you'll have your terminal ready to go within 24-48 hours."
      },
      {
        question: "What is the best payment provider for Ashford shops?",
        answer: "Rocket Payments is the best choice for Ashford shops with rates from 0.29%, no monthly fees, and local Kent support. We serve businesses from the Designer Outlet to independent high street traders."
      }
    ]
  },
  {
    slug: "card-machines-dover",
    town: "Dover",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Dover | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Dover, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for port businesses, tourist shops & Dover town centre.",
    keywords: "card machine Dover, payment terminal Dover, card reader Dover Kent, Dover card payments, PDQ machine Dover, contactless payment Dover, Dojo alternative Dover, Dover port business payments",
    heroHeadline: "Card Machines for Dover Businesses",
    heroSubheadline: "Gateway to Europe deserves gateway-level payment solutions. Rocket Payments serves Dover businesses with the lowest rates and fastest payments.",
    localBusinesses: ["Dover town centre shops", "Port area businesses", "Biggin Street traders", "Dover Castle area", "St James retail park", "Cruise terminal businesses"],
    testimonial: {
      quote: "International tourists mean international cards. Rocket Payments handles all card types with competitive rates for foreign transactions.",
      name: "Lisa P.",
      business: "White Cliffs Souvenirs",
      location: "Dover Town Centre"
    },
    nearbyAreas: ["Deal", "Folkestone", "Sandwich", "Whitfield", "Temple Ewell", "River"],
    faqSchema: [
      {
        question: "What card machines work best for Dover tourist businesses?",
        answer: "Dover tourist businesses benefit from Rocket Payments' competitive international card rates at just 0.9%. Our terminals accept all major cards including European and global payment methods."
      },
      {
        question: "Can Dover port businesses get card machines?",
        answer: "Yes! Rocket Payments serves Dover port area businesses with reliable terminals and competitive rates. We understand the fast-paced environment and provide quick, dependable payment processing."
      },
      {
        question: "What are card machine rates in Dover?",
        answer: "Rocket Payments offers Dover businesses rates from 0.29% for UK debit cards, 0.67% for credit cards, and 0.9% for international cards. No monthly fees or hidden charges."
      }
    ]
  },
  {
    slug: "card-machines-folkestone",
    town: "Folkestone",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Folkestone | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Folkestone, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Creative Quarter & Harbour Arm businesses.",
    keywords: "card machine Folkestone, payment terminal Folkestone, card reader Folkestone Kent, Folkestone card payments, PDQ machine Folkestone, contactless payment Folkestone, Creative Quarter payments, Harbour Arm card machine",
    heroHeadline: "Card Machines for Folkestone Businesses",
    heroSubheadline: "From the Creative Quarter to the Harbour Arm, Folkestone's vibrant businesses choose Rocket Payments for reliable, affordable card processing.",
    localBusinesses: ["Creative Quarter galleries", "Harbour Arm restaurants", "Sandgate Road shops", "Folkestone town centre", "The Leas businesses", "Tontine Street traders"],
    testimonial: {
      quote: "The Creative Quarter attracts card-paying visitors. Rocket Payments' FREE Tap to Pay is perfect for our gallery - no hardware cluttering our space.",
      name: "Rachel K.",
      business: "Gallery 24",
      location: "Creative Quarter, Folkestone"
    },
    nearbyAreas: ["Hythe", "Sandgate", "Cheriton", "Hawkinge", "Capel-le-Ferne", "Lyminge"],
    faqSchema: [
      {
        question: "What card machines do Folkestone Harbour Arm businesses use?",
        answer: "Many Folkestone Harbour Arm restaurants and bars use Rocket Payments for our portable terminals and low rates. The Rocket Go is perfect for outdoor dining, while Tap to Pay works great for food stalls."
      },
      {
        question: "Are there card machine providers in Folkestone?",
        answer: "Rocket Payments serves Folkestone with local Kent support. We offer same-day approval, next-day delivery, and the lowest rates from 0.29%. Perfect for Creative Quarter businesses and beyond."
      },
      {
        question: "What is the best payment solution for Folkestone galleries?",
        answer: "Folkestone galleries love Rocket Payments' FREE Tap to Pay - no visible hardware, just use your iPhone. For higher-value art sales, our full terminals offer seamless processing with low fees."
      }
    ]
  },
  {
    slug: "card-machines-margate",
    town: "Margate",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Margate | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Margate, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Old Town, Turner Contemporary area & seafront businesses.",
    keywords: "card machine Margate, payment terminal Margate, card reader Margate Kent, Margate card payments, PDQ machine Margate, contactless payment Margate, Margate Old Town payments, Turner Contemporary card machine",
    heroHeadline: "Card Machines for Margate Businesses",
    heroSubheadline: "Margate's creative renaissance deserves modern payment solutions. Get FREE Tap to Pay or premium terminals from Rocket Payments.",
    localBusinesses: ["Margate Old Town shops", "Turner Contemporary area", "Dreamland businesses", "Harbour Arm cafes", "High Street retailers", "Cliftonville traders"],
    testimonial: {
      quote: "Margate's artsy visitors expect modern payments. Rocket Payments lets us focus on creativity, not clunky card machines.",
      name: "Tom H.",
      business: "Vintage & Modern",
      location: "Old Town, Margate"
    },
    nearbyAreas: ["Broadstairs", "Ramsgate", "Westgate-on-Sea", "Birchington", "Cliftonville", "Westbrook"],
    faqSchema: [
      {
        question: "What card machines do Margate Old Town shops use?",
        answer: "Margate Old Town's independent shops love Rocket Payments' FREE Tap to Pay for its simplicity and zero costs. For busier retailers, the Rocket Pocket offers a compact, stylish terminal."
      },
      {
        question: "Can Margate seafront businesses get card machines?",
        answer: "Yes! Rocket Payments serves Margate seafront businesses with portable terminals perfect for outdoor trading. The Rocket Go works brilliantly for beach cafes and seaside kiosks."
      },
      {
        question: "What are the cheapest card payment rates in Margate?",
        answer: "Rocket Payments offers Margate businesses the lowest rates from 0.29% for debit cards. No monthly fees, no hidden charges. We're cheaper than Dojo, Square, and SumUp."
      }
    ]
  },
  {
    slug: "card-machines-ramsgate",
    town: "Ramsgate",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Ramsgate | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Ramsgate, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Royal Harbour & Ramsgate town centre businesses.",
    keywords: "card machine Ramsgate, payment terminal Ramsgate, card reader Ramsgate Kent, Ramsgate card payments, PDQ machine Ramsgate, contactless payment Ramsgate, Royal Harbour payments, Dojo alternative Ramsgate",
    heroHeadline: "Card Machines for Ramsgate Businesses",
    heroSubheadline: "Royal Harbour town deserves royal treatment. Rocket Payments delivers the lowest rates and best service for Ramsgate businesses.",
    localBusinesses: ["Royal Harbour restaurants", "Ramsgate High Street", "Harbour Street cafes", "Addington Street shops", "Ramsgate marina", "King Street traders"],
    testimonial: {
      quote: "Our harbourside restaurant is always busy. Rocket Payments keeps up with our pace and the fees are the lowest we've ever paid.",
      name: "Chris B.",
      business: "The Harbour Kitchen",
      location: "Royal Harbour, Ramsgate"
    },
    nearbyAreas: ["Broadstairs", "Margate", "Minster", "Pegwell Bay", "St Lawrence", "Sandwich"],
    faqSchema: [
      {
        question: "What card machines do Ramsgate harbour restaurants use?",
        answer: "Ramsgate harbour restaurants choose Rocket Payments for our portable terminals and low rates. The Rocket Go is perfect for table-side payments, while Tap to Pay works great for quick-service cafes."
      },
      {
        question: "Can I get a card machine for my Ramsgate business today?",
        answer: "Rocket Payments offers same-day approval for Ramsgate businesses. Tap to Pay lets you accept payments within hours, while physical terminals arrive next-day with our Kent-based delivery."
      },
      {
        question: "What is the best payment provider in Ramsgate?",
        answer: "Rocket Payments is Ramsgate's preferred card machine provider with rates from 0.29%, no monthly fees, and local Kent support. We serve businesses from the Royal Harbour to the town centre."
      }
    ]
  },
  {
    slug: "card-machines-gravesend",
    town: "Gravesend",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Gravesend | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Gravesend, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Gravesend town centre & riverside businesses.",
    keywords: "card machine Gravesend, payment terminal Gravesend, card reader Gravesend Kent, Gravesend card payments, PDQ machine Gravesend, contactless payment Gravesend, Dojo alternative Gravesend",
    heroHeadline: "Card Machines for Gravesend Businesses",
    heroSubheadline: "Historic Gravesend meets modern payment technology. Get the lowest rates from 0.29% with local Kent support from Rocket Payments.",
    localBusinesses: ["Gravesend town centre shops", "St George's shopping centre", "Windmill Street traders", "Riverside businesses", "New Road retailers", "Northfleet businesses"],
    testimonial: {
      quote: "Switching from our old provider to Rocket Payments saved us hundreds every month. The setup was quick and painless.",
      name: "Priya S.",
      business: "Gravesend Fashion",
      location: "High Street, Gravesend"
    },
    nearbyAreas: ["Northfleet", "Swanscombe", "Dartford", "Strood", "Meopham", "Cobham"],
    faqSchema: [
      {
        question: "Where can I get a card machine in Gravesend?",
        answer: "Rocket Payments offers card machines for Gravesend businesses with FREE Tap to Pay or premium terminals. We're local to Kent with next-day delivery and same-day approval available."
      },
      {
        question: "What is the cheapest card machine provider in Gravesend?",
        answer: "Rocket Payments offers Gravesend businesses the lowest rates from 0.29% with no monthly fees. We're consistently cheaper than Dojo, Square, SumUp, and Worldpay."
      },
      {
        question: "Can Gravesend market traders get card machines?",
        answer: "Yes! Gravesend market traders love Rocket Payments' FREE Tap to Pay - no hardware to buy, works on your iPhone, and rates from just 0.29% per transaction."
      }
    ]
  },
  {
    slug: "card-machines-dartford",
    town: "Dartford",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Dartford | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Dartford, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Bluewater area, town centre & Dartford businesses.",
    keywords: "card machine Dartford, payment terminal Dartford, card reader Dartford Kent, Dartford card payments, PDQ machine Dartford, contactless payment Dartford, Bluewater payments, Dojo alternative Dartford",
    heroHeadline: "Card Machines for Dartford Businesses",
    heroSubheadline: "Gateway to Kent businesses deserve gateway payment solutions. Rocket Payments offers Dartford the lowest rates and fastest setup.",
    localBusinesses: ["Dartford town centre", "Orchards shopping centre", "Bluewater area businesses", "Temple Hill retail park", "High Street shops", "Dartford business park"],
    testimonial: {
      quote: "We needed a reliable system for our busy Dartford shop. Rocket Payments delivered with great rates and brilliant support.",
      name: "Kevin O.",
      business: "Tech & More",
      location: "Dartford Town Centre"
    },
    nearbyAreas: ["Bexleyheath", "Gravesend", "Swanley", "Crayford", "Stone", "Greenhithe"],
    faqSchema: [
      {
        question: "What card machines do Dartford shops use?",
        answer: "Dartford shops choose Rocket Payments for our low rates from 0.29% and reliable terminals. From Bluewater area retailers to town centre independents, we serve all Dartford businesses."
      },
      {
        question: "Can I get a card machine near Bluewater?",
        answer: "Rocket Payments serves Dartford and the Bluewater area with same-day approval and next-day delivery. We're local to Kent so support is always nearby for your business."
      },
      {
        question: "What are card machine rates in Dartford?",
        answer: "Rocket Payments offers Dartford businesses rates from 0.29% for debit cards, 0.67% for credit cards. No monthly fees, no setup costs, no hidden charges."
      }
    ]
  },
  {
    slug: "card-machines-sevenoaks",
    town: "Sevenoaks",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Sevenoaks | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Sevenoaks, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Sevenoaks High Street & surrounding businesses.",
    keywords: "card machine Sevenoaks, payment terminal Sevenoaks, card reader Sevenoaks Kent, Sevenoaks card payments, PDQ machine Sevenoaks, contactless payment Sevenoaks, Dojo alternative Sevenoaks",
    heroHeadline: "Card Machines for Sevenoaks Businesses",
    heroSubheadline: "Affluent Sevenoaks deserves premium payment solutions. Rocket Payments delivers the lowest rates with exceptional service.",
    localBusinesses: ["Sevenoaks High Street", "London Road shops", "Bligh's Meadow", "Sevenoaks town centre", "Westerham Road businesses", "Seal & Riverhead traders"],
    testimonial: {
      quote: "Our Sevenoaks clientele expect seamless service. Rocket Payments delivers with fast transactions and professional-looking terminals.",
      name: "Victoria L.",
      business: "Sevenoaks Interiors",
      location: "High Street, Sevenoaks"
    },
    nearbyAreas: ["Westerham", "Otford", "Kemsing", "Seal", "Borough Green", "Riverhead"],
    faqSchema: [
      {
        question: "What card machines do Sevenoaks boutiques use?",
        answer: "Sevenoaks boutiques prefer Rocket Payments for our premium service and competitive rates. The Rocket Pocket is popular for its elegant design, while Tap to Pay offers a free, modern option."
      },
      {
        question: "Are there local card machine providers in Sevenoaks?",
        answer: "Rocket Payments serves Sevenoaks with local Kent support. We offer same-day approval, next-day delivery, and the lowest rates from 0.29%. Perfect for high-end retailers."
      },
      {
        question: "What are the best card payment rates in Sevenoaks?",
        answer: "Rocket Payments offers Sevenoaks businesses the best rates from 0.29% for debit cards. No monthly fees, no setup costs. Significantly cheaper than Dojo and other providers."
      }
    ]
  },
  {
    slug: "card-machines-tonbridge",
    town: "Tonbridge",
    county: "Kent",
    region: "South East England",
    metaTitle: "Card Machines Tonbridge | Payment Terminals Kent | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Tonbridge, Kent. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Tonbridge High Street & castle area businesses.",
    keywords: "card machine Tonbridge, payment terminal Tonbridge, card reader Tonbridge Kent, Tonbridge card payments, PDQ machine Tonbridge, contactless payment Tonbridge, Dojo alternative Tonbridge",
    heroHeadline: "Card Machines for Tonbridge Businesses",
    heroSubheadline: "Historic market town meets modern payments. Rocket Payments offers Tonbridge businesses the lowest rates and fastest setup.",
    localBusinesses: ["Tonbridge High Street", "Castle area shops", "Botany area businesses", "Angel Centre retailers", "Hadlow Road traders", "Pembury Road shops"],
    testimonial: {
      quote: "We've been in Tonbridge for 30 years. Rocket Payments is the best card machine provider we've ever used - reliable and affordable.",
      name: "Robert M.",
      business: "Tonbridge Books",
      location: "High Street, Tonbridge"
    },
    nearbyAreas: ["Tunbridge Wells", "Paddock Wood", "Hadlow", "Hildenborough", "Shipbourne", "East Peckham"],
    faqSchema: [
      {
        question: "What card machines do Tonbridge shops use?",
        answer: "Tonbridge shops choose Rocket Payments for our low rates from 0.29% and local Kent support. From High Street independents to Angel Centre retailers, we serve all Tonbridge businesses."
      },
      {
        question: "Can I get a card machine for my Tonbridge market stall?",
        answer: "Yes! Rocket Payments' FREE Tap to Pay is perfect for Tonbridge market traders. No hardware to buy, works on your iPhone, and rates from just 0.29% per transaction."
      },
      {
        question: "What is the cheapest payment provider in Tonbridge?",
        answer: "Rocket Payments offers Tonbridge businesses the cheapest rates from 0.29% with no monthly fees. We're consistently cheaper than Dojo, Square, SumUp, and Worldpay."
      }
    ]
  },
  {
    slug: "card-machines-brighton",
    town: "Brighton",
    county: "East Sussex",
    region: "South East England",
    metaTitle: "Card Machines Brighton | Payment Terminals East Sussex | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Brighton, East Sussex. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Brighton Lanes, seafront & North Laine businesses.",
    keywords: "card machine Brighton, payment terminal Brighton, card reader Brighton East Sussex, Brighton card payments, PDQ machine Brighton, contactless payment Brighton, Brighton Lanes payments, North Laine card machine, Dojo alternative Brighton",
    heroHeadline: "Card Machines for Brighton Businesses",
    heroSubheadline: "Vibrant Brighton deserves vibrant payment solutions. Get FREE Tap to Pay or premium terminals from Rocket Payments.",
    localBusinesses: ["Brighton Lanes shops", "North Laine boutiques", "Churchill Square retailers", "Seafront businesses", "Kemp Town traders", "London Road shops"],
    testimonial: {
      quote: "Brighton's busy tourist trade needs fast payments. Rocket Payments handles our peak summer rush perfectly with the lowest fees anywhere.",
      name: "Alex W.",
      business: "Brighton Beach Bar",
      location: "Brighton Seafront"
    },
    nearbyAreas: ["Hove", "Rottingdean", "Saltdean", "Patcham", "Woodingdean", "Peacehaven"],
    faqSchema: [
      {
        question: "What card machines do Brighton Lanes shops use?",
        answer: "Brighton Lanes shops love Rocket Payments for our compact terminals and low rates. The Rocket Pocket fits perfectly in small boutiques, while FREE Tap to Pay works great for market-style traders."
      },
      {
        question: "Can Brighton seafront businesses get card machines?",
        answer: "Yes! Rocket Payments serves Brighton seafront businesses with portable, weatherproof-ready terminals. The Rocket Go is perfect for beach bars, cafes, and outdoor dining."
      },
      {
        question: "What are the cheapest card payment rates in Brighton?",
        answer: "Rocket Payments offers Brighton businesses the lowest rates from 0.29% for debit cards. No monthly fees, no setup costs. We're cheaper than Dojo, Square, and SumUp."
      }
    ]
  },
  {
    slug: "card-machines-eastbourne",
    town: "Eastbourne",
    county: "East Sussex",
    region: "South East England",
    metaTitle: "Card Machines Eastbourne | Payment Terminals East Sussex | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Eastbourne, East Sussex. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Eastbourne town centre & seafront businesses.",
    keywords: "card machine Eastbourne, payment terminal Eastbourne, card reader Eastbourne East Sussex, Eastbourne card payments, PDQ machine Eastbourne, contactless payment Eastbourne, Dojo alternative Eastbourne",
    heroHeadline: "Card Machines for Eastbourne Businesses",
    heroSubheadline: "Sunshine coast businesses deserve sunny payment solutions. Rocket Payments offers Eastbourne the lowest rates and best service.",
    localBusinesses: ["Eastbourne town centre", "Beacon shopping centre", "Seafront businesses", "Little Chelsea traders", "South Street shops", "Sovereign Harbour retailers"],
    testimonial: {
      quote: "Our seaside hotel processes hundreds of payments daily. Rocket Payments is reliable, fast, and incredibly cost-effective.",
      name: "Helen T.",
      business: "Grand Eastbourne Hotel",
      location: "Eastbourne Seafront"
    },
    nearbyAreas: ["Polegate", "Willingdon", "Pevensey", "Hampden Park", "Langney", "Stone Cross"],
    faqSchema: [
      {
        question: "What card machines do Eastbourne hotels use?",
        answer: "Eastbourne hotels choose Rocket Payments for our reliable terminals and low rates from 0.29%. We handle high-volume processing perfectly for busy hospitality businesses."
      },
      {
        question: "Can Eastbourne seafront businesses get card machines?",
        answer: "Yes! Rocket Payments serves Eastbourne seafront with portable terminals perfect for outdoor trading. The Rocket Go is ideal for beach cafes, ice cream kiosks, and seaside attractions."
      },
      {
        question: "What is the best payment provider in Eastbourne?",
        answer: "Rocket Payments is Eastbourne's preferred card machine provider with rates from 0.29%, no monthly fees, and local support. We serve businesses from the town centre to Sovereign Harbour."
      }
    ]
  },
  {
    slug: "card-machines-hastings",
    town: "Hastings",
    county: "East Sussex",
    region: "South East England",
    metaTitle: "Card Machines Hastings | Payment Terminals East Sussex | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Hastings, East Sussex. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Old Town, seafront & St Leonards businesses.",
    keywords: "card machine Hastings, payment terminal Hastings, card reader Hastings East Sussex, Hastings card payments, PDQ machine Hastings, contactless payment Hastings, Hastings Old Town payments, Dojo alternative Hastings",
    heroHeadline: "Card Machines for Hastings Businesses",
    heroSubheadline: "Historic Hastings meets modern payment technology. Get FREE Tap to Pay or premium terminals from Rocket Payments.",
    localBusinesses: ["Hastings Old Town shops", "George Street traders", "Priory Meadow retailers", "St Leonards businesses", "Seafront cafes", "Robertson Street shops"],
    testimonial: {
      quote: "Hastings Old Town's independent shops need affordable payment solutions. Rocket Payments delivers with FREE Tap to Pay and brilliant rates.",
      name: "Jenny C.",
      business: "Old Town Antiques",
      location: "George Street, Hastings"
    },
    nearbyAreas: ["St Leonards-on-Sea", "Bexhill", "Battle", "Ore", "Fairlight", "Westfield"],
    faqSchema: [
      {
        question: "What card machines do Hastings Old Town shops use?",
        answer: "Hastings Old Town's independent shops love Rocket Payments' FREE Tap to Pay for its zero costs and simplicity. For busier shops, the Rocket Go offers portable, reliable processing."
      },
      {
        question: "Can Hastings seafront businesses get card machines?",
        answer: "Yes! Rocket Payments serves Hastings seafront with portable terminals perfect for outdoor trading. We understand the seasonal nature of coastal businesses and offer flexible solutions."
      },
      {
        question: "What are card machine rates in Hastings?",
        answer: "Rocket Payments offers Hastings businesses rates from 0.29% for debit cards, 0.67% for credit cards. No monthly fees, no setup costs, no hidden charges."
      }
    ]
  },
  {
    slug: "card-machines-lewes",
    town: "Lewes",
    county: "East Sussex",
    region: "South East England",
    metaTitle: "Card Machines Lewes | Payment Terminals East Sussex | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Lewes, East Sussex. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Lewes High Street & independent businesses.",
    keywords: "card machine Lewes, payment terminal Lewes, card reader Lewes East Sussex, Lewes card payments, PDQ machine Lewes, contactless payment Lewes, Dojo alternative Lewes",
    heroHeadline: "Card Machines for Lewes Businesses",
    heroSubheadline: "Historic county town meets modern payments. Rocket Payments offers Lewes businesses the lowest rates and exceptional service.",
    localBusinesses: ["Lewes High Street", "Cliffe High Street shops", "Castle area businesses", "School Hill traders", "Lewes antique shops", "South Street retailers"],
    testimonial: {
      quote: "Lewes attracts discerning visitors who expect professional service. Rocket Payments helps us deliver with sleek terminals and fast transactions.",
      name: "David G.",
      business: "Lewes Antiques",
      location: "Cliffe High Street, Lewes"
    },
    nearbyAreas: ["Brighton", "Newhaven", "Ringmer", "Seaford", "Plumpton", "Ditchling"],
    faqSchema: [
      {
        question: "What card machines do Lewes independent shops use?",
        answer: "Lewes independent shops prefer Rocket Payments for our competitive rates and premium service. The Rocket Pocket is popular for its elegant design, perfect for the town's boutique retailers."
      },
      {
        question: "Can Lewes antique shops get card machines?",
        answer: "Yes! Rocket Payments is ideal for Lewes antique shops, handling higher-value transactions with low fees from 0.29%. Our terminals are professional and discrete."
      },
      {
        question: "What are the cheapest payment rates in Lewes?",
        answer: "Rocket Payments offers Lewes businesses the lowest rates from 0.29% for debit cards. No monthly fees, no setup costs. We're cheaper than Dojo and other major providers."
      }
    ]
  },
  {
    slug: "card-machines-bexhill",
    town: "Bexhill-on-Sea",
    county: "East Sussex",
    region: "South East England",
    metaTitle: "Card Machines Bexhill | Payment Terminals East Sussex | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Bexhill-on-Sea, East Sussex. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Bexhill town centre & De La Warr area.",
    keywords: "card machine Bexhill, payment terminal Bexhill, card reader Bexhill East Sussex, Bexhill card payments, PDQ machine Bexhill, contactless payment Bexhill, De La Warr Pavilion payments, Dojo alternative Bexhill",
    heroHeadline: "Card Machines for Bexhill Businesses",
    heroSubheadline: "Birthplace of British motorsport deserves fast payment solutions. Rocket Payments offers Bexhill the lowest rates and best service.",
    localBusinesses: ["Bexhill town centre", "De La Warr Pavilion area", "Sackville Road shops", "Western Parade businesses", "Devonshire Road traders", "Little Common shops"],
    testimonial: {
      quote: "Our cafe near De La Warr gets busy with visitors. Rocket Payments handles the rush perfectly with fast transactions and great rates.",
      name: "Paul F.",
      business: "The Pavilion Cafe",
      location: "Bexhill Seafront"
    },
    nearbyAreas: ["Hastings", "St Leonards", "Cooden", "Little Common", "Sidley", "Ninfield"],
    faqSchema: [
      {
        question: "What card machines do Bexhill businesses use?",
        answer: "Bexhill businesses choose Rocket Payments for our low rates from 0.29% and reliable service. From De La Warr area cafes to town centre shops, we serve all Bexhill traders."
      },
      {
        question: "Can Bexhill seafront businesses get card machines?",
        answer: "Yes! Rocket Payments serves Bexhill seafront with portable terminals perfect for outdoor trading. The Rocket Go is ideal for beach cafes and seaside businesses."
      },
      {
        question: "What is the cheapest payment provider in Bexhill?",
        answer: "Rocket Payments offers Bexhill businesses the cheapest rates from 0.29% with no monthly fees. We're consistently cheaper than Dojo, Square, SumUp, and Worldpay."
      }
    ]
  },
  {
    slug: "card-machines-crowborough",
    town: "Crowborough",
    county: "East Sussex",
    region: "South East England",
    metaTitle: "Card Machines Crowborough | Payment Terminals East Sussex | From 0.29% | Rocket Payments",
    metaDescription: "Best card machines in Crowborough, East Sussex. FREE Tap to Pay, no monthly fees, rates from 0.29%. Perfect for Crowborough High Street & Ashdown Forest area.",
    keywords: "card machine Crowborough, payment terminal Crowborough, card reader Crowborough East Sussex, Crowborough card payments, PDQ machine Crowborough, contactless payment Crowborough, Dojo alternative Crowborough",
    heroHeadline: "Card Machines for Crowborough Businesses",
    heroSubheadline: "Gateway to Ashdown Forest deserves exceptional payment solutions. Rocket Payments offers Crowborough the lowest rates.",
    localBusinesses: ["Crowborough High Street", "Broadway shops", "Ashdown Forest area", "Jarvis Brook traders", "Rotherfield businesses", "Beacon Road shops"],
    testimonial: {
      quote: "Our Crowborough boutique needed a reliable, affordable solution. Rocket Payments delivered with great service and the lowest fees.",
      name: "Caroline S.",
      business: "The Style Studio",
      location: "High Street, Crowborough"
    },
    nearbyAreas: ["Tunbridge Wells", "Uckfield", "Heathfield", "Rotherfield", "Wadhurst", "Mayfield"],
    faqSchema: [
      {
        question: "What card machines do Crowborough shops use?",
        answer: "Crowborough shops choose Rocket Payments for our competitive rates from 0.29% and excellent service. We're popular with High Street independents and Ashdown Forest area businesses."
      },
      {
        question: "Can I get a card machine for my Crowborough business?",
        answer: "Yes! Rocket Payments offers Crowborough businesses same-day approval and next-day delivery. Choose from FREE Tap to Pay or our premium terminal range."
      },
      {
        question: "What are card payment rates in Crowborough?",
        answer: "Rocket Payments offers Crowborough businesses rates from 0.29% for debit cards, 0.67% for credit cards. No monthly fees, no setup costs, no hidden charges."
      }
    ]
  }
];

export const getLocationBySlug = (slug: string): LocationPage | undefined => {
  return locationPages.find(location => location.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return locationPages.map(location => location.slug);
};
