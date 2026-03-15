import { Link } from "wouter";
import { SEO, serviceSchemas } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Zap, Lock, Clock, CreditCard, Shield, ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import deviceSideImage from "@assets/A35 side_1761940331053.png";
import deviceFrontImage from "@assets/A35_1761940331054.png";

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

export default function RocketWired() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Rocket Wired � Countertop Card Machine UK"
        description="Rocket Wired countertop card machine for high-volume businesses. Fast transaction speeds, EPOS integration, all-day reliability. From 0.29% with no monthly fees."
        canonical="https://rocketpayments.co.uk/products/rocket-wired"
        breadcrumbs={[{name:"Home",url:"https://rocketpayments.co.uk"},{name:"Products",url:"https://rocketpayments.co.uk/products"},{name:"Rocket Wired",url:"https://rocketpayments.co.uk/products/rocket-wired"}]}
        structuredData={[serviceSchemas.cardTerminal, {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Rocket Wired Countertop Card Machine",
          "description": "Reliable countertop card machine for UK businesses. Wired connection for maximum uptime. Accepts all cards, contactless, Apple Pay and Google Pay. Free with merchant account.",
          "brand": { "@type": "Brand", "name": "Rocket Payments" },
          "category": "Payment Terminal",
          "offers": { "@type": "Offer", "priceCurrency": "GBP", "price": "0", "availability": "https://schema.org/InStock" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "621" }
        }]}
      />
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                  Wired for speed.<br />Built for success.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Fast, secure, and always reliable – the Rocket Wired countertop card machine powers enhanced efficiency at fixed locations with seamless integrated payments.
                </p>
              </div>
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <Link href="/calculate-savings">
                  <Button size="lg" className="text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={deviceSideImage}
                  alt="Rocket Wired Payment Terminal"
                  loading="lazy"
                  className="relative w-full h-auto rounded-3xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep Payments Flowing Section */}
      <section className="py-32 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                  Keep payments flowing and customers smiling
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Take fast, integrated payments at fixed locations with Rocket Wired. Pair this countertop payment terminal with a payment kiosk or securely tether it to the counter for quick, reliable, and frictionless transactions.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-primary/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={deviceFrontImage}
                  alt="Rocket Wired Interface"
                  loading="lazy"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Save Space Section */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
              Save space, stay secure
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Free up valuable counter space with no bulky charging bases. Rocket Wired connects directly to power and its tethered design ensures your countertop card machine stays put, secure, and protected from damage or theft.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Customer Control Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
              Hand back control to your customers
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Reduce staffing costs and enhance convenience. Kiosk mode in the Rocket Pay app shows customers precisely what they need to see at self-service payment terminals, keeping transactions simple. Meanwhile, back-office features are restricted, keeping your end-of-day reconciliation on-track.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-center mb-16">
              More ways Rocket Wired can help your business
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Rely on 99.99% uptime",
                description: "Our payments are always on, so your business never slows down.",
                delay: 0
              },
              {
                icon: Zap,
                title: "Get started easily",
                description: "Setup and onboarding is smooth and hassle-free. Enjoy next-working day delivery, no set-up fee, and exceptional customer support.",
                delay: 100
              },
              {
                icon: CreditCard,
                title: "Access your cash, when you need it",
                description: "With options for next-day settlement, keep your cash flow consistent so you can pay staff and suppliers with no delays.",
                delay: 200
              },
              {
                icon: Shield,
                title: "We've got you covered",
                description: "Count on us for the help you need, with account support Monday to Friday, 8am to 6pm. Plus, enjoy 7-day tech support and remote assistance.",
                delay: 300
              },
              {
                icon: Lock,
                title: "Secure transactions, simple compliance",
                description: "Encrypted transactions, strong customer authentication, simplified PCI compliance. We've got you covered.",
                delay: 400
              },
              {
                icon: Check,
                title: "Integrated payments",
                description: "Connect seamlessly with your EPOS system for unified operations and streamlined workflow.",
                delay: 500
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={benefit.delay}>
                <div className="group p-8 rounded-2xl hover-elevate transition-all duration-300 cursor-default space-y-4">
                  <div className="flex justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <benefit.icon className="relative h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black">{benefit.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-center mb-16">
              Tech specs
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Wifi,
                title: "Dual connectivity",
                description: "Connects via Wi-Fi or Ethernet connection.",
                delay: 0
              },
              {
                icon: Zap,
                title: "Wired-in solution",
                description: "Rocket Wired is connected directly to mains power. No battery or charging needed.",
                delay: 100
              },
              {
                icon: Shield,
                title: "Integrated payments",
                description: "Connect to your EPOS with integrations supported through your existing Connect Cloud integration.",
                delay: 200
              },
              {
                icon: Lock,
                title: "Secure payments",
                description: "End-to-end encryption and PCI DSS Level 1 compliance for maximum security.",
                delay: 300
              },
              {
                icon: CreditCard,
                title: "Card and contactless",
                description: "Accepts payments with Chip & PIN, NFC contactless, and magnetic stripe.",
                delay: 400
              }
            ].map((spec, index) => (
              <AnimatedSection key={index} delay={spec.delay}>
                <Card className="p-6 space-y-4 hover-elevate transition-all duration-300 border-none shadow-lg">
                  <spec.icon className="h-10 w-10 text-primary" />
                  <h3 className="text-lg font-black">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {spec.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
              Switching made simple
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
              Sign up to Rocket Payments in just a few steps and enjoy a simple setup with no fixed contracts, an easy 2-step PCI compliance reporting process, and we could even cover your exit fees up to £3,000.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">*Subject to your annual card turnover.</p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Link href="/calculate-savings">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
