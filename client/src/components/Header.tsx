import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket, ChevronDown, CreditCard, Cloud, TrendingUp, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("in-person");

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
        { name: "QR Codes", href: "/products/qr-codes", description: "Pay by scanning a code" },
      ],
    },
    {
      id: "growth",
      title: "Growth",
      icon: TrendingUp,
      products: [
        { name: "Business Insights", href: "/resources#insights", description: "Data and analytics for your business" },
        { name: "Integrations", href: "/resources#integrations", description: "Connect with 600+ EPOS systems" },
      ],
    },
  ];

  const navLinks = [
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
  ];

  const activeProducts = productCategories.find(cat => cat.id === activeCategory)?.products || [];

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
            <Button variant="ghost" className="font-medium">Help</Button>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" className="font-medium" data-testid="button-login">
              Login
            </Button>
            <Link href="/quote">
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
            <nav className="flex flex-col gap-2">
              {/* Mobile Products Section */}
              <div className="space-y-2">
                <div className="text-xs font-black uppercase text-muted-foreground tracking-wider px-3 py-2">Products</div>
                {productCategories.map((category) => (
                  <div key={category.title} className="space-y-1 pl-3">
                    <div className="text-xs font-semibold text-muted-foreground">{category.title}</div>
                    {category.products.map((product) => (
                      <Link key={product.href} href={product.href}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start font-medium text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                ))}
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
              <Button variant="ghost" className="w-full justify-start font-medium">Help</Button>
              <div className="border-t my-2" />
              <Button variant="ghost" className="w-full justify-start font-medium">Login</Button>
              <Link href="/quote">
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
