import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket, ChevronDown, CreditCard, Cloud, TrendingUp, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import costaLogo from "@assets/Costa-Coffee-Logo_1761930744749.jpg";
import treatzLogo from "@assets/Treatz.jpg_1761930744750.webp";
import cuppLogo from "@assets/ac9be535-cd26-4913-893c-607ef9c65ec9_1761930744747.jpeg";
import silverstoneLogo from "@assets/silverstone-uk-logo-vectorrwopeh_1761930744750.png";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("in-person");
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  
  const isLandingPage = location === "/free-terminal";
  
  const partnerLogos = [
    { name: "Costa Coffee", logo: costaLogo },
    { name: "Treatz", logo: treatzLogo },
    { name: "CUPP", logo: cuppLogo },
    { name: "Silverstone", logo: silverstoneLogo },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    {
      id: "in-person",
      title: "In-person payments",
      icon: CreditCard,
      products: [
        { name: "Rocket Go", href: "/products/rocket-go", description: "Fast, portable payments on 4G" },
        { name: "Rocket Pocket", href: "/products/rocket-pocket", description: "Orders and payments in one device" },
        { name: "Tap to Pay on iPhone", href: "/products/tap-to-pay", description: "Take payments with an iPhone" },
        { name: "Rocket Wired", href: "/products/rocket-wired", description: "Wired countertop card machine" },
      ],
    },
    {
      id: "remote",
      title: "Remote payments",
      icon: Cloud,
      products: [
        { name: "Payment Links", href: "/products/payment-links", description: "Send a link, secure your payment" },
        { name: "Online Payments", href: "/products/online-payments", description: "Smooth online checkout experiences" },
      ],
    },
    {
      id: "growth",
      title: "Growth",
      icon: TrendingUp,
      products: [
        { name: "Flex Funds", href: "/products/flex-funds", description: "Fast, flexible access to cash" },
        { name: "Sidekick", href: "/products/sidekick", description: "Your digital business partner" },
        { name: "Integrations", href: "/integrations", description: "Connect with 600+ EPOS systems" },
      ],
    },
  ];

  const navLinks = [
    { label: "Bookings", href: "/bookings" },
    { label: "Business Funding", href: "/business-funding" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Guides", href: "/blog" },
  ];

  const activeProducts = productCategories.find(cat => cat.id === activeCategory)?.products || [];

  const scrollToClaimForm = () => {
    document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
  };

  // Landing page focused header (for /free-terminal)
  if (isLandingPage) {
    return (
      <header className="sticky top-0 z-50 w-full py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Desktop: Landing page header with logos - thicker padding */}
          <div className="hidden md:flex items-center justify-between bg-card border border-border rounded-full px-8 py-5 shadow-lg gap-6">
            <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-lg px-2 py-1 -ml-2 transition-transform flex-shrink-0" data-testid="link-home">
              <Rocket className="h-9 w-9 text-primary" />
              <span className="text-2xl font-black text-foreground">ROCKET</span>
            </Link>

            {/* Scrolling Trusted Logos */}
            <div className="flex-1 overflow-hidden mx-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-muted-foreground tracking-wider whitespace-nowrap">TRUSTED BY</span>
                <div className="flex-1 overflow-hidden">
                  <div className="logo-scroll flex gap-10 items-center">
                    {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, i) => (
                      <div key={i} className="flex-shrink-0">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="h-8 w-auto object-contain opacity-60"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <ThemeToggle />
              <Button 
                variant="default" 
                size="lg"
                className="rounded-full font-black text-base px-8" 
                onClick={scrollToClaimForm}
                data-testid="button-claim-offer"
              >
                Claim offer
              </Button>
            </div>
          </div>

          {/* Mobile: Landing page header - thicker */}
          <div className="flex md:hidden flex-col gap-3 bg-card border border-border rounded-3xl px-4 py-3 shadow-lg">
            {/* Top row: Logo, Theme, Button */}
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" data-testid="link-home">
                <Rocket className="h-7 w-7 text-primary" />
                <span className="text-lg font-black text-foreground">ROCKET</span>
              </Link>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button 
                  variant="default" 
                  className="rounded-full font-black px-6" 
                  onClick={scrollToClaimForm}
                  data-testid="button-mobile-claim-offer"
                >
                  Claim offer
                </Button>
              </div>
            </div>

            {/* Bottom row: Scrolling logos */}
            <div className="overflow-hidden">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black text-muted-foreground tracking-wider whitespace-nowrap">TRUSTED BY</span>
                <div className="flex-1 overflow-hidden">
                  <div className="logo-scroll flex gap-8 items-center">
                    {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, i) => (
                      <div key={i} className="flex-shrink-0">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="h-5 w-auto object-contain opacity-60"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Desktop: White rounded pill container */}
        <div className="hidden md:flex items-center justify-between bg-card border border-border rounded-full px-6 py-3 shadow-md">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-lg px-2 py-1 -ml-2 transition-transform" data-testid="link-home">
            <Rocket className="h-7 w-7 text-primary" />
            <span className="text-xl font-black text-foreground">ROCKET</span>
          </Link>

          <nav className="flex items-center gap-1 relative">
            {/* Products Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Button
                variant="ghost"
                className="font-medium"
                data-testid="link-products"
              >
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </Button>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-card border border-border rounded-3xl shadow-2xl overflow-hidden" style={{ width: '920px' }}>
                    <div className="flex">
                      {/* Left Sidebar - Categories */}
                      <div className="w-64 bg-muted/30 p-6 space-y-2">
                        {productCategories.map((category) => {
                          const Icon = category.icon;
                          const isActive = activeCategory === category.id;
                          return (
                            <button
                              key={category.id}
                              onMouseEnter={() => setActiveCategory(category.id)}
                              className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${
                                isActive 
                                  ? 'bg-primary text-primary-foreground shadow-md' 
                                  : 'hover-elevate'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon className={`h-5 w-5 ${isActive ? 'text-primary-foreground' : 'text-foreground'}`} />
                                <span className={`font-black text-sm ${isActive ? 'text-primary-foreground' : 'text-foreground'}`}>
                                  {category.title}
                                </span>
                              </div>
                              {isActive && <ArrowUpRight className="h-5 w-5 text-primary-foreground" />}
                            </button>
                          );
                        })}
                      </div>

                      {/* Main Content Area */}
                      <div className="flex-1 p-8 flex gap-8">
                        {/* Product List */}
                        <div className="flex-1 space-y-1">
                          {activeProducts.map((product) => (
                            <Link key={product.href} href={product.href}>
                              <div
                                className="p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
                                onClick={() => setIsProductsOpen(false)}
                              >
                                <div className="font-black text-base mb-1">{product.name}</div>
                                <div className="text-sm text-muted-foreground">{product.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Promotional Card */}
                        <div className="w-72">
                          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-6 space-y-4 border border-primary/20">
                            <div className="aspect-[2/1] bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                              <div className="text-center">
                                <Rocket className="h-16 w-16 text-primary mx-auto mb-2" />
                                <div className="text-xs font-semibold text-muted-foreground">Payment Solutions</div>
                              </div>
                            </div>
                            <h3 className="text-lg font-black leading-tight">Welcome to Payment Paradise</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Deliver standout experiences at scale with fast, effortless in-person, online, and mobile payments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`font-medium ${
                    location === link.href ? "bg-accent" : ""
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/calculate-savings">
              <Button variant="default" className="rounded-full font-medium" data-testid="button-get-started">
                Get started
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile: Simple header */}
        <div className="flex md:hidden items-center justify-between bg-card border border-border rounded-full px-4 py-2 shadow-md">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-lg font-black text-foreground">ROCKET</span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 mx-6">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-4">
            <nav className="flex flex-col gap-3">
              {/* Mobile Products Section - Stacked Categories */}
              <div className="space-y-2">
                <div className="text-xs font-black uppercase text-muted-foreground tracking-wider px-3 py-2">Products</div>
                {productCategories.map((category) => {
                  const Icon = category.icon;
                  const isExpanded = expandedMobileCategory === category.id;
                  
                  return (
                    <div key={category.id} className="space-y-1">
                      <button
                        onClick={() => setExpandedMobileCategory(isExpanded ? null : category.id)}
                        className={`w-full p-4 rounded-xl transition-all flex items-center justify-between ${
                          isExpanded 
                            ? 'bg-primary text-primary-foreground shadow-md' 
                            : 'bg-muted/30 hover-elevate'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`h-5 w-5 ${isExpanded ? 'text-primary-foreground' : 'text-foreground'}`} />
                          <span className={`font-black text-sm ${isExpanded ? 'text-primary-foreground' : 'text-foreground'}`}>
                            {category.title}
                          </span>
                        </div>
                        <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180 text-primary-foreground' : 'text-foreground'}`} />
                      </button>
                      
                      {isExpanded && (
                        <div className="pl-4 pt-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                          {category.products.map((product) => (
                            <Link key={product.href} href={product.href}>
                              <div
                                className="p-3 rounded-lg hover-elevate active-elevate-2 transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="font-bold text-sm">{product.name}</div>
                                <div className="text-xs text-muted-foreground">{product.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="border-t my-2" />
              
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              
              <div className="border-t my-2" />
              
              <Link href="/calculate-savings">
                <Button
                  variant="default"
                  className="w-full mt-2 rounded-full font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-get-started"
                >
                  Get started
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
