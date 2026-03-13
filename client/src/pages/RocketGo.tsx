import { Link } from "wouter";
import { SEO, serviceSchemas, productFaqSchemas } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Shield, Wifi, Clock, CreditCard, TrendingUp, CheckCircle2, ArrowRight, Lock, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImage from "@assets/hero image rocket go_1761942966646.png";
import pubImage from "@assets/rocket go pub_1761942966648.png";
import outdoorImage from "@assets/tap rocket go_1761942966648.png";
import approvedImage from "@assets/terminal approved_1761942966648.png";
import rocketGoHero from "@assets/stock_images/Remove background project (1).png";

const CYCLE_MS = 3 * 24 * 60 * 60 * 1000;

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calc = () => {
      const epoch = new Date('2026-01-01T00:00:00').getTime();
      const elapsed = (Date.now() - epoch) % CYCLE_MS;
      const diff = CYCLE_MS - elapsed;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { v: timeLeft.days, label: 'days' },
    { v: timeLeft.hours, label: 'hrs' },
    { v: timeLeft.mins, label: 'min' },
    { v: timeLeft.secs, label: 'sec' },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {units.map(({ v, label }, i) => (
        <div key={label} className="flex items-center gap-2 md:gap-3">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-white tabular-nums leading-none">
              {String(v).padStart(2, '0')}
            </div>
            <div className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-wider mt-0.5">{label}</div>
          </div>
          {i < 3 && <span className="text-xl md:text-2xl font-black text-white/30 -mt-3">:</span>}
        </div>
      ))}
    </div>
  );
}

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

export default function RocketGo() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Rocket Go � Portable 4G Card Machine UK"
        description="The Rocket Go portable card machine. 4G connectivity, all-day battery, next-day settlements. From 0.29%. Free terminal � no monthly fees, no contracts."
        canonical="https://rocketpayments.co.uk/products/rocket-go"
        breadcrumbs={[{name:"Home",url:"https://rocketpayments.co.uk"},{name:"Products",url:"https://rocketpayments.co.uk/products"},{name:"Rocket Go",url:"https://rocketpayments.co.uk/products/rocket-go"}]}
        breadcrumbs={[{name:"Home",url:"https://rocketpayments.co.uk"},{name:"Products",url:"https://rocketpayments.co.uk/products"},{name:"Rocket Go",url:"https://rocketpayments.co.uk/products/rocket-go"}]}
        structuredData={[productFaqSchemas.cardMachine, serviceSchemas.cardTerminal, {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Rocket Go Portable Card Machine",
          "description": "4G portable card machine for UK businesses. Accept all major cards, Apple Pay, Google Pay. Next-day settlements. Free terminal with merchant account.",
          "brand": { "@type": "Brand", "name": "Rocket Payments" },
          "category": "Payment Terminal",
          "offers": { "@type": "Offer", "priceCurrency": "GBP", "price": "0", "availability": "https://schema.org/InStock" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1247" }
        }]}
      />
      {/* Epic Cinematic Hero */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/15" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb,59,130,246),0.3),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--primary-rgb,59,130,246),0.25),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.15),transparent_60%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 shadow-xl animate-in fade-in slide-in-from-top-4 duration-700">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-black tracking-wide text-primary">ROCKET GO</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter max-w-5xl mx-auto">
              On-the-move payments.<br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">On-point tech.</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground leading-tight max-w-4xl mx-auto">
              Take ultra-fast, secure card payments, anywhere. Portable, reliable, and with built-in Wi-Fi and 4G.
            </p>
            
            <div className="pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <Link href="/calculate-savings">
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
                  data-testid="button-hero-get-started"
                >
                  Get started
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image - Full Width Cinematic */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="relative group">
              <div className="absolute -inset-12 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
              <img
                src={heroImage}
                alt="Rocket Go in action at coffee shop"
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.01] transition-transform duration-700"
                data-testid="img-hero"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "High-pace payments, face-to-face impressions",
                description: "Take your efficiency to new heights with transaction speeds 58% faster than market average.",
                gradient: "from-orange-500/10 to-orange-500/5",
                iconBg: "bg-orange-500/10",
                iconColor: "text-orange-600 dark:text-orange-400",
                delay: 0
              },
              {
                icon: Wifi,
                title: "Reliable tech, dependable service",
                description: "Capture every sale with our always-on platform and automatic Wi-Fi and 4G connectivity.",
                gradient: "from-blue-500/10 to-blue-500/5",
                iconBg: "bg-blue-500/10",
                iconColor: "text-blue-600 dark:text-blue-400",
                delay: 100
              },
              {
                icon: CreditCard,
                title: "Intuitive design, adaptable device",
                description: "Easy to use for staff and customers, Rocket Go accepts all major types of card payments.",
                gradient: "from-green-500/10 to-green-500/5",
                iconBg: "bg-green-500/10",
                iconColor: "text-green-600 dark:text-green-400",
                delay: 200
              },
              {
                icon: Lock,
                title: "Secure transactions, simple compliance",
                description: "Encrypted transactions, strong customer authentication, simplified PCI compliance.",
                gradient: "from-purple-500/10 to-purple-500/5",
                iconBg: "bg-purple-500/10",
                iconColor: "text-purple-600 dark:text-purple-400",
                delay: 300
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={feature.delay}>
                <Card className={`group relative p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-xl overflow-hidden h-full bg-gradient-to-br ${feature.gradient}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative space-y-5">
                    <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-black leading-tight">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="relative overflow-hidden rounded-3xl mx-6 md:mx-8 my-16 max-w-7xl lg:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d2e] via-[#0d4433] to-[#092b1f] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 items-center min-h-[340px] md:min-h-[400px]">

            {/* Left — copy */}
            <div className="py-12 md:py-16 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-black text-primary tracking-widest uppercase">Limited time offer</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg md:text-xl font-bold text-white/30 line-through">Was £189</span>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight">
                  <span className="text-white/50">Terminal</span><br />
                  <span className="text-white/50 text-3xl sm:text-4xl font-bold">now </span>
                  <span className="text-primary">£0</span>
                </h2>
                <div className="mt-4 space-y-2 max-w-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm md:text-base text-white/60 font-medium">£0/month — no device rental fees, ever</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm md:text-base text-white/60 font-medium">Free next-day delivery. No hidden fees.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black tracking-[0.25em] text-white/30 uppercase">Offer ends in</p>
                <CountdownTimer />
              </div>
              <Link href="/calculate-savings">
                <Button className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-5 rounded-full shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:shadow-[0_0_50px_rgba(45,212,191,0.6)] hover:scale-105 transition-all duration-300">
                  Get the deal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Right — device */}
            <div className="relative flex items-end justify-center md:justify-end pb-8 md:pb-0 md:h-full">
              <img
                src={rocketGoHero}
                alt="Rocket Go card machine"
                className="h-[220px] sm:h-[260px] md:h-[460px] w-auto object-contain md:absolute md:right-0 md:bottom-0"
                style={{ transform: 'translateX(3%)' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section - Bold & Impactful */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight" data-testid="text-hero-headline">
                Create more time to shine
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Help staff give their best to customers with Rocket Go's market-leading transaction speeds, time-saving bill-splitting and tipping features, and seamless EPOS integrations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <AnimatedSection delay={100}>
              <Card className="relative p-16 rounded-3xl border-none shadow-2xl overflow-hidden bg-gradient-to-br from-primary/15 via-primary/10 to-background">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl opacity-50" />
                <div className="relative text-center space-y-6">
                  <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    58%
                  </div>
                  <p className="text-2xl font-black">Faster than market average</p>
                  <p className="text-lg text-muted-foreground">
                    Serve more customers with lightning-fast transactions
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="relative p-16 rounded-3xl border-none shadow-2xl overflow-hidden bg-gradient-to-br from-green-500/15 via-green-500/10 to-background">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-green-500/30 to-transparent rounded-full blur-3xl opacity-50" />
                <div className="relative text-center space-y-6">
                  <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">
                    #1
                  </div>
                  <p className="text-2xl font-black">Britain's #1 SME payments provider</p>
                  <p className="text-lg text-muted-foreground">
                    Trusted by over 110,000 businesses
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Security Section with Approved Image */}
      <section className="py-32 md:py-40 bg-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                  <Shield className="h-4 w-4 text-green-600 dark:text-green-400 animate-pulse" />
                  <span className="text-sm font-black text-green-600 dark:text-green-400">Secure & Protected</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                  Your payments, protected
                </h2>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Keep transactions and customer data safe. Featuring <span className="font-black text-foreground">point-to-point encryption</span> and <span className="font-black text-foreground">strong customer authentication</span>, Rocket Go has your security needs baked in.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Plus, simplify your PCI compliance reporting with a simple two-step process.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={approvedImage}
                  alt="Secure payment approved"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portable & Effortless Section */}
      <section className="py-32 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:order-1">
              <AnimatedSection delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-orange-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img
                    src={outdoorImage}
                    alt="Portable payments outdoors"
                    className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:order-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20">
                    <Zap className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-sm font-black text-orange-600 dark:text-orange-400">Truly Portable</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                    Make payments plain-sailing
                  </h2>
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      With our intuitive card machine, upskilling staff is super easy and the payments process is <span className="font-black text-foreground">effortless for customers</span>.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Truly portable, the lightweight Rocket Go can be used anywhere in your business – and beyond. So you can keep service smooth, customers smiling, and business booming.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* EPOS Integration Section with Pub Image */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                  <Settings className="h-4 w-4 text-purple-600 dark:text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="text-sm font-black text-purple-600 dark:text-purple-400">Seamless Integration</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                  One machine. All the benefits.
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">Automate admin</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Rocket Go integrates with over 600 EPOS systems, so you can streamline service, cash up quicker, and reduce miskeying errors.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">Keep connected</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Serve more customers faster with high-speed transactions, easy-to-use interface, and dual Wi-Fi and 4G connectivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={pubImage}
                  alt="Rocket Go with EPOS integration"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tech Specs - Feature Grid */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-20">
              Tech specs
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wifi,
                title: "Dual connectivity",
                description: "Connects automatically to Wi-Fi or any available 4G network.",
                color: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-500/10"
              },
              {
                icon: Clock,
                title: "Long-lasting battery",
                description: "10-hour battery life with 5250mAH Li-ion battery.",
                color: "text-green-600 dark:text-green-400",
                bg: "bg-green-500/10"
              },
              {
                icon: CreditCard,
                title: "Card and contactless",
                description: "Accepts Chip & PIN, NFC contactless, and magnetic stripe.",
                color: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-500/10"
              },
              {
                icon: Lock,
                title: "Secure payments",
                description: "Point-to-point encryption protects customer card data.",
                color: "text-orange-600 dark:text-orange-400",
                bg: "bg-orange-500/10"
              }
            ].map((spec, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-lg h-full">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl ${spec.bg} flex items-center justify-center`}>
                      <spec.icon className={`h-6 w-6 ${spec.color}`} />
                    </div>
                    <h3 className="text-lg font-black">{spec.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Free Terminal Offer — matches homepage */}
      <section className="relative py-0 overflow-hidden bg-[#0a0f1a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(16,185,129,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(16,185,129,0.08),transparent_60%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 items-center min-h-[340px] md:min-h-[400px]">
            {/* Left — copy */}
            <div className="py-12 md:py-16 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-black text-primary tracking-widest uppercase">Limited time offer</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg md:text-xl font-bold text-white/30 line-through">Was £189</span>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight">
                  <span className="text-white/50">Terminal</span><br />
                  <span className="text-white/50 text-3xl sm:text-4xl font-bold">now </span>
                  <span className="text-primary">£0</span>
                </h2>
                <div className="mt-4 space-y-2 max-w-sm">
                  {[
                    "£0/month — no device rental fees, ever",
                    "Free next-day delivery. No hidden fees.",
                    "Multi-network 4G SIM included",
                    "Next-day settlement as standard",
                  ].map(line => (
                    <div key={line} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-sm md:text-base text-white/60 font-medium">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black tracking-[0.25em] text-white/30 uppercase">Offer ends in</p>
                <CountdownTimer />
              </div>
              <Link href="/calculate-savings">
                <Button className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-5 rounded-full shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:shadow-[0_0_50px_rgba(45,212,191,0.6)] hover:scale-105 transition-all duration-300">
                  Get the deal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            {/* Right — device */}
            <div className="relative flex items-end justify-center md:justify-end pb-8 md:pb-0 md:h-full">
              <img
                src={rocketGoHero}
                alt="Rocket Go card machine — free with merchant account"
                className="h-[220px] sm:h-[260px] md:h-[460px] w-auto object-contain md:absolute md:right-0 md:bottom-0"
                style={{ transform: 'translateX(3%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Epic Cinematic */}
      <section className="relative py-40 md:py-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-primary-foreground tracking-tight">
                Ready to accelerate your business?
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Join over 110,000 businesses using Rocket Payments. Get started today.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/calculate-savings">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    Get started
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    View pricing
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
