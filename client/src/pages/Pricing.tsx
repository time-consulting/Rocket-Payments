import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO, faqSchemas } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles, Zap, Shield, Star, Crown, Diamond } from "lucide-react";

import offerBanner from "@assets/offer banner rocket go device_1761944758924.png";
import switchBanner from "@assets/switch for free banner_1761944758924.png";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
}

export default function Pricing() {
  const plans = [
    {
      name: "Fix",
      subtitle: "Simple, flat-fee pricing",
      price: "£39.99",
      period: "per month",
      description: "For small businesses with annual card turnover below £100k",
      popular: false,
      icon: Star,
      gradient: "from-blue-500/15 to-blue-500/5",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
      features: [
        "Covers transactions up to £3,999 per month",
        "1% flat rate on transactions over £4k/month",
        "Includes AMEX card payments",
        "12-month price locked plan",
        "No hidden fees",
        "Next-day payments by default",
      ],
    },
    {
      name: "Flex",
      subtitle: "Custom pricing for growth",
      price: "Custom",
      period: "pricing",
      description: "For growing businesses that need greater flexibility",
      popular: true,
      icon: Zap,
      gradient: "from-primary/20 to-primary/5",
      iconBg: "bg-primary/15",
      iconColor: "text-primary",
      features: [
        "Negotiable debit & credit card rates",
        "Pricing tailored to your card turnover",
        "Choose 30-day rolling or 12-month plan",
        "Includes AMEX payments",
        "Advanced reporting & analytics",
        "Priority customer support",
      ],
    },
    {
      name: "Pro",
      subtitle: "Bespoke enterprise solution",
      price: "Bespoke",
      period: "deal",
      description: "For complex, scaling businesses with £1M+ annual turnover",
      popular: false,
      icon: Crown,
      gradient: "from-purple-500/15 to-purple-500/5",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600 dark:text-purple-400",
      features: [
        "Fully customized pricing structure",
        "Reduced fees for high volumes",
        "Tailored setup & onboarding",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations available",
      ],
    },
  ];

  const hardwareOptions = [
    {
      title: "Pay Monthly",
      price: "From £15",
      period: "per month",
      description: "Spread the cost with a 30-day rolling fee",
      note: "For businesses with £100k+ annual card turnover",
      icon: Zap,
    },
    {
      title: "Pay Once",
      price: "From £79",
      period: "one-time",
      description: "Single upfront payment with no ongoing costs",
      note: "Get a £100 discount when you pay upfront",
      icon: Diamond,
      popular: true,
    },
    {
      title: "Hardware-Free",
      price: "£0",
      period: "hardware cost",
      description: "Take contactless payments with an iPhone and our app",
      note: "No extra hardware needed",
      icon: Star,
    },
  ];

  const includedFeatures = [
    { category: "Payment Processing", items: [
      "Always-on payment system with 99.99% uptime",
      "Easy 2-step PCI compliance reporting",
      "EPOS and card machine integration",
      "Data breach protection",
      "Point-to-point encryption on all devices",
    ]},
    { category: "Back Office Management", items: [
      "Real-time transactions in the app",
      "Transaction breakdowns, trends, and data",
      "Easy end-of-day reconciliation",
      "Next-day payments including weekends",
      "Transfer notifications",
      "Manage card machines in the app",
    ]},
    { category: "Customer Support", items: [
      "UK account support 8am to 6pm",
      "UK tech support 8am to 11pm",
      "90% of queries resolved immediately",
      "Online help centre",
      "Mobile app and web app",
    ]},
  ];

  return (
    <>
      <SEO
        title="Card Machine Pricing UK | Rocket Payments"
        description="Card machine fees from 0.5% — cheaper than Dojo. No hidden charges, free terminal offer & next-day deposits. Compare our transparent pricing."
        canonical="https://rocketpayments.co.uk/pricing"
        breadcrumbs={[{name:"Home",url:"https://rocketpayments.co.uk"},{name:"Pricing",url:"https://rocketpayments.co.uk/pricing"}]}
        keywords="card payment fees UK, card machine fees, merchant account fees UK, cheapest card payment provider UK, Dojo alternative, Dojo vs Rocket Payments, payment processing costs Kent, merchant services East Sussex, card transaction fees, compare Dojo rates, best card machine deal UK"
        structuredData={[faqSchemas.pricing, faqSchemas.businessFunding]}
      />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Luxurious Hero */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/15" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb,59,130,246),0.35),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--primary-rgb,59,130,246),0.3),transparent_40%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 shadow-xl animate-in fade-in slide-in-from-top-4 duration-700">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-black tracking-wide text-primary">FLEXIBLE PRICING FOR EVERY BUSINESS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter max-w-5xl mx-auto" data-testid="text-pricing-headline">
              Pricing that works<br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">for your business</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground leading-tight max-w-4xl mx-auto">
              From small businesses to scaling enterprises. Transparent, flexible, fair.
            </p>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Banners */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="relative group overflow-hidden rounded-3xl">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={offerBanner}
                  alt="Limited time offer - £79 card machine"
                  className="relative w-full h-auto hover:scale-[1.02] transition-transform duration-700 shadow-2xl"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative group overflow-hidden rounded-3xl">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={switchBanner}
                  alt="Switch for FREE - £3,000 towards exit fees"
                  className="relative w-full h-auto hover:scale-[1.02] transition-transform duration-700 shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Premium Pricing Plans */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Plans for all business types
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Choose the perfect plan for your business size and needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className={`group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full bg-gradient-to-br ${plan.gradient} ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="px-6 py-2 text-sm font-black bg-primary text-primary-foreground shadow-xl">
                        MOST POPULAR
                      </Badge>
                    </div>
                  )}
                  
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative p-10 space-y-8">
                    <div className="space-y-4">
                      <div className={`w-16 h-16 rounded-2xl ${plan.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <plan.icon className={`h-8 w-8 ${plan.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black mb-2">{plan.name}</h3>
                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">{plan.subtitle}</p>
                      </div>
                      <div className="pt-4">
                        <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {plan.price}
                        </div>
                        <div className="text-lg text-muted-foreground font-semibold mt-1">{plan.period}</div>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-base leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/calculate-savings">
                      <Button 
                        size="lg" 
                        className="w-full text-lg py-6 rounded-full hover:scale-105 transition-all duration-300"
                        variant={plan.popular ? "default" : "outline"}
                        data-testid={`button-get-started-${index}`}
                      >
                        Contact sales
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Options */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Hardware that works for you
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Choose from a range of device plans with next-day delivery
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {hardwareOptions.map((option, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className={`group relative p-10 rounded-3xl hover-elevate transition-all duration-700 cursor-default border-none shadow-xl h-full ${option.popular ? 'ring-2 ring-primary bg-gradient-to-br from-primary/10 to-primary/5' : ''}`}>
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-2 text-xs font-black bg-gradient-to-r from-primary to-primary/80">
                        BEST VALUE
                      </Badge>
                    </div>
                  )}
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <option.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2">{option.title}</h3>
                      <div className="text-4xl font-black text-primary mb-2">{option.price}</div>
                      <p className="text-sm text-muted-foreground font-semibold">{option.period}</p>
                    </div>
                    <p className="text-base leading-relaxed">{option.description}</p>
                    <p className="text-sm text-muted-foreground italic">{option.note}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Luxury Grid */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                What's included
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for fast, reliable payments - all for one monthly fee
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {includedFeatures.map((section, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="group relative p-10 rounded-3xl hover-elevate transition-all duration-700 cursor-default border-none shadow-xl h-full bg-gradient-to-br from-muted/30 to-background">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative space-y-6">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-black">{section.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final Luxury CTA */}
      <section className="relative py-40 md:py-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-primary-foreground tracking-tight">
                Get started today
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Power your business with our market-leading payment solutions. Get a personalised quote from our team.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/calculate-savings">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    Contact sales
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    View products
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      </div>
    </>
  );
}
