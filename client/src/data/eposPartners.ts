export interface EposPartner {
  name: string;
  slug: string;
  description: string;
  category: "hospitality" | "retail" | "multi-sector";
  features: string[];
  website?: string;
  bestFor: string[];
  logoPlaceholder?: string;
}

export const eposPartners: EposPartner[] = [
  // User-confirmed partners
  {
    name: "ICR Touch",
    slug: "icr-touch",
    description: "UK market leader with 150,000+ installations. Comprehensive hospitality EPOS suite including TouchPoint, PocketTouch mobile ordering, and TouchKitchen display systems.",
    category: "hospitality",
    features: ["TouchPoint EPOS", "PocketTouch mobile ordering", "TouchKitchen displays", "TouchOffice Web reporting", "TouchReservation bookings", "ByTable customer ordering"],
    website: "icrtouch.com",
    bestFor: ["Pubs & Bars", "Restaurants", "Hotels", "Stadiums", "Member Clubs", "Education"]
  },
  {
    name: "Goodtill",
    slug: "goodtill",
    description: "iPad-based EPOS system powering 1,400+ hospitality venues including theatres, nightclubs, and sports stadiums. Now part of SumUp ecosystem.",
    category: "hospitality",
    features: ["iPad EPOS", "Table & tab management", "Stock management", "Kitchen Display Screen", "Online ordering", "Loyalty programs"],
    website: "thegoodtill.com",
    bestFor: ["Cafés", "Coffee Shops", "Bars", "Pop-ups", "Food Trucks"]
  },
  {
    name: "Power EPOS",
    slug: "power-epos",
    description: "Versatile EPOS solutions for hospitality and retail businesses across the UK. Flexible integration with leading payment processors.",
    category: "multi-sector",
    features: ["Multi-site management", "Real-time reporting", "Stock control", "Customer loyalty", "Delivery integration"],
    bestFor: ["Restaurants", "Retail", "Multi-site operations"]
  },
  {
    name: "3S POS",
    slug: "3s-pos",
    description: "Specialist hospitality EPOS provider focused on restaurants, hotels, and quick service establishments with comprehensive management tools.",
    category: "hospitality",
    features: ["Restaurant management", "Hotel PMS integration", "QSR solutions", "Delivery management", "Staff scheduling"],
    bestFor: ["Hotels", "Restaurants", "QSR", "Fast Food"]
  },
  {
    name: "WRS Solutions",
    slug: "wrs-solutions",
    description: "Comprehensive EPOS and business management solutions tailored for the UK hospitality sector with focus on wet-led venues.",
    category: "hospitality",
    features: ["Wet-led venue specialist", "Real-time stock", "GP management", "Multi-site reporting", "Staff management"],
    bestFor: ["Pubs", "Bars", "Nightclubs", "Wet-led venues"]
  },
  {
    name: "Gardiff",
    slug: "gardiff",
    description: "UK-based EPOS provider offering tailored solutions for hospitality businesses with comprehensive integration capabilities.",
    category: "hospitality",
    features: ["Custom EPOS builds", "Payment integration", "Reporting & analytics", "Multi-site support"],
    bestFor: ["Hospitality", "Restaurants", "Bars"]
  },
  {
    name: "Revalidation",
    slug: "revalidation",
    description: "Specialist EPOS solutions with strong focus on compliance and data management for hospitality and healthcare sectors.",
    category: "multi-sector",
    features: ["Compliance focused", "Data management", "Reporting tools", "Integration APIs"],
    bestFor: ["Healthcare", "Hospitality", "Compliance-focused businesses"]
  },
  // Additional UK EPOS partners that integrate with third-party payments
  {
    name: "Tevalis",
    slug: "tevalis",
    description: "Enterprise hospitality EPOS system used by major UK brands. Powerful multi-site management and advanced analytics.",
    category: "hospitality",
    features: ["Enterprise EPOS", "Multi-site management", "Advanced analytics", "Loyalty integration", "Delivery apps", "Kitchen management"],
    website: "tevalis.com",
    bestFor: ["Restaurant chains", "Hotels", "Large venues", "Enterprise hospitality"]
  },
  {
    name: "Zonal",
    slug: "zonal",
    description: "Award-winning EPOS with 200+ integrations. Voted Best EPOS 2024. Powers 16,000+ hospitality venues across the UK.",
    category: "hospitality",
    features: ["200+ integrations", "Aztec platform", "Loyalty & marketing", "Workforce management", "Kitchen display", "Online ordering"],
    website: "zonal.co.uk",
    bestFor: ["Pubs", "Restaurants", "Hotels", "QSR", "Leisure venues"]
  },
  {
    name: "Lightspeed Restaurant",
    slug: "lightspeed-restaurant",
    description: "Cloud-based restaurant EPOS with advanced table management, multi-location support, and powerful reporting.",
    category: "hospitality",
    features: ["Cloud-based", "Table management", "Floor plans", "Menu engineering", "Delivery integration", "Advanced reporting"],
    website: "lightspeedhq.com",
    bestFor: ["Fine dining", "Casual dining", "Multi-location restaurants"]
  },
  {
    name: "Epos Now",
    slug: "epos-now",
    description: "Norwich-based EPOS with 100+ app integrations. Flexible system supporting any third-party payment processor.",
    category: "multi-sector",
    features: ["100+ app integrations", "Kitchen Display", "Delivery app integration", "Inventory management", "Employee management"],
    website: "eposnow.com",
    bestFor: ["Restaurants", "Retail", "Hospitality", "Multi-sector"]
  },
  {
    name: "Pointone",
    slug: "pointone",
    description: "Trusted by major UK hospitality groups including Stonegate and M&B. Robust, scalable EPOS for wet-led venues.",
    category: "hospitality",
    features: ["Wet-led specialist", "Enterprise scale", "Real-time reporting", "Stock management", "Promotional tools"],
    bestFor: ["Pub groups", "Nightclubs", "Large operators"]
  },
  {
    name: "Redcat",
    slug: "redcat",
    description: "Australian-origin EPOS expanding in UK market. Strong QSR and drive-thru focus with advanced ordering systems.",
    category: "hospitality",
    features: ["QSR specialist", "Drive-thru integration", "Self-service kiosks", "Mobile ordering", "Loyalty programs"],
    website: "redcatht.com",
    bestFor: ["QSR", "Fast food", "Drive-thru", "Takeaways"]
  },
  {
    name: "Comtrex",
    slug: "comtrex",
    description: "Specialist EPOS for independent and small chain restaurants. User-friendly with comprehensive support.",
    category: "hospitality",
    features: ["Restaurant focused", "Easy to use", "Training included", "Support packages", "Menu management"],
    bestFor: ["Independent restaurants", "Small chains", "New venues"]
  },
  {
    name: "TouchBistro",
    slug: "touchbistro",
    description: "iPad restaurant EPOS with strong table management and payment processor flexibility. Designed by hospitality people.",
    category: "hospitality",
    features: ["iPad-based", "Table management", "Staff scheduling", "Inventory", "Reporting", "Customer facing display"],
    website: "touchbistro.com",
    bestFor: ["Full-service restaurants", "Cafés", "Bars"]
  },
  {
    name: "Lolly",
    slug: "lolly",
    description: "Modern cloud-based EPOS built for UK hospitality. Stylish hardware and intuitive software.",
    category: "hospitality",
    features: ["Cloud-based", "Modern design", "Quick service", "Table service", "Reporting dashboard"],
    website: "itslolly.com",
    bestFor: ["Cafés", "Coffee shops", "Quick service", "Bars"]
  },
  {
    name: "Tabology",
    slug: "tabology",
    description: "Mobile-first EPOS designed for bars and nightclubs. Strong tab management and speed-focused.",
    category: "hospitality",
    features: ["Mobile ordering", "Tab management", "Speed optimized", "Stock alerts", "Real-time reporting"],
    website: "tabology.com",
    bestFor: ["Bars", "Nightclubs", "Festivals", "Events"]
  },
  {
    name: "Micros (Oracle)",
    slug: "micros-oracle",
    description: "Enterprise EPOS from Oracle used by major hotel chains and restaurant groups worldwide. Comprehensive suite.",
    category: "hospitality",
    features: ["Enterprise scale", "Hotel PMS integration", "Global deployment", "Advanced analytics", "Multi-currency"],
    bestFor: ["Hotel chains", "Large restaurant groups", "International brands"]
  },
  {
    name: "Samtouch",
    slug: "samtouch",
    description: "UK-developed EPOS with 25+ years in hospitality. Reliable hardware and flexible software configuration.",
    category: "hospitality",
    features: ["UK developed", "Reliable hardware", "Flexible configuration", "Training & support", "Multi-site"],
    website: "samtouch.co.uk",
    bestFor: ["Pubs", "Restaurants", "Hotels", "Leisure"]
  },
  {
    name: "ePOS Hybrid",
    slug: "epos-hybrid",
    description: "Hybrid EPOS combining cloud flexibility with local reliability. Strong UK support network.",
    category: "multi-sector",
    features: ["Hybrid cloud/local", "Offline capable", "Real-time sync", "Multi-site", "Comprehensive reporting"],
    bestFor: ["Retail", "Hospitality", "Multi-site operations"]
  },
  {
    name: "Kobas",
    slug: "kobas",
    description: "All-in-one hospitality management platform. EPOS, HR, reservations, and stock in one system.",
    category: "hospitality",
    features: ["All-in-one platform", "HR management", "Reservations", "Stock control", "Workforce scheduling", "EPoS"],
    website: "kobas.co.uk",
    bestFor: ["Restaurant groups", "Multi-site hospitality", "Growing businesses"]
  },
  {
    name: "Revel Systems",
    slug: "revel-systems",
    description: "iPad-based cloud POS with strong US heritage, expanding in UK. Feature-rich enterprise solution.",
    category: "multi-sector",
    features: ["iPad-based", "Enterprise features", "CRM", "Inventory", "Delivery management", "API integrations"],
    website: "revelsystems.com",
    bestFor: ["QSR chains", "Retail", "Multi-location businesses"]
  },
  {
    name: "TISSL",
    slug: "tissl",
    description: "UK hospitality EPOS specialists with focus on pubs, restaurants and hotels. Strong training and support.",
    category: "hospitality",
    features: ["Hospitality focused", "Training included", "24/7 support", "Stock management", "Reporting"],
    website: "tissl.co.uk",
    bestFor: ["Pubs", "Restaurants", "Hotels", "Golf clubs"]
  },
  {
    name: "Aloha (NCR)",
    slug: "aloha-ncr",
    description: "Enterprise restaurant EPOS from NCR. Industry standard for many chain restaurants and hotels.",
    category: "hospitality",
    features: ["Enterprise grade", "Labour scheduling", "Inventory", "Analytics", "Multi-site management"],
    bestFor: ["Chain restaurants", "Hotels", "Enterprise hospitality"]
  },
  {
    name: "Access Hospitality",
    slug: "access-hospitality",
    description: "Comprehensive hospitality platform including EPOS, reservations, workforce, and property management.",
    category: "hospitality",
    features: ["Full hospitality suite", "Procure Wizard", "Workforce", "Reservations", "Property management"],
    website: "theaccessgroup.com",
    bestFor: ["Hotels", "Restaurant groups", "Managed houses"]
  },
  {
    name: "Orderbird",
    slug: "orderbird",
    description: "iPad EPOS designed for independent restaurants and cafés. German-origin expanding across Europe.",
    category: "hospitality",
    features: ["iPad-based", "Simple pricing", "Quick setup", "Offline mode", "Reporting"],
    website: "orderbird.com",
    bestFor: ["Cafés", "Small restaurants", "Independents"]
  },
  {
    name: "Grafterr",
    slug: "grafterr",
    description: "UK restaurant EPOS with strong delivery integration. Third-party app management and kitchen display.",
    category: "hospitality",
    features: ["Delivery integration", "Third-party app management", "Kitchen display", "Reporting", "Menu management"],
    website: "grafterr.com",
    bestFor: ["Delivery-focused restaurants", "Dark kitchens", "Multi-brand venues"]
  },
  {
    name: "Aures",
    slug: "aures",
    description: "French EPOS hardware manufacturer with strong UK presence. Robust terminals for high-volume environments.",
    category: "multi-sector",
    features: ["Robust hardware", "High-volume", "Multi-sector", "Integration ready"],
    website: "aures.com",
    bestFor: ["High-volume venues", "Retail", "Hospitality"]
  },
  {
    name: "POSist",
    slug: "posist",
    description: "Cloud-native restaurant platform with strong analytics and multi-brand support. Growing UK presence.",
    category: "hospitality",
    features: ["Cloud-native", "Multi-brand", "Analytics", "Kitchen automation", "CRM"],
    website: "posist.com",
    bestFor: ["Multi-brand restaurants", "Cloud kitchens", "Growing chains"]
  },
  {
    name: "Sapaad",
    slug: "sapaad",
    description: "Cloud POS designed for quick service and delivery. Strong in Middle East, expanding to UK.",
    category: "hospitality",
    features: ["QSR focused", "Delivery management", "Cloud-based", "Multi-outlet", "Real-time sync"],
    website: "sapaad.com",
    bestFor: ["QSR", "Delivery restaurants", "Multi-outlet"]
  },
  {
    name: "Clover",
    slug: "clover",
    description: "All-in-one POS system from Fiserv. Hardware and software bundle with growing UK market share.",
    category: "multi-sector",
    features: ["All-in-one", "App marketplace", "Inventory", "Employee management", "Reporting"],
    website: "clover.com",
    bestFor: ["SME restaurants", "Retail", "Service businesses"]
  },
  {
    name: "Squirrel Systems",
    slug: "squirrel-systems",
    description: "Enterprise hospitality EPOS with 35+ years experience. Strong in hotels and large-scale venues.",
    category: "hospitality",
    features: ["Enterprise scale", "Hotel integration", "Central management", "Analytics"],
    website: "squirrelsystems.com",
    bestFor: ["Hotels", "Resorts", "Large venues", "Convention centres"]
  }
];

export const getPartnerBySlug = (slug: string): EposPartner | undefined => {
  return eposPartners.find(p => p.slug === slug);
};

export const getPartnersByCategory = (category: "hospitality" | "retail" | "multi-sector"): EposPartner[] => {
  return eposPartners.filter(p => p.category === category);
};

export const getFeaturedPartners = (): EposPartner[] => {
  const featured = ["icr-touch", "goodtill", "power-epos", "3s-pos", "wrs-solutions", "gardiff", "tevalis", "zonal"];
  return eposPartners.filter(p => featured.includes(p.slug));
};
