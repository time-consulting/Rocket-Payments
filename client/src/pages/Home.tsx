import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Sparkles, Cloud, TrendingUp, Zap, Star, CheckCircle, Rocket, Shield, Users } from "lucide-react";

import heroImage from "@assets/hero image rocket go_1761926380440.png";
import offerBanner from "@assets/offer banner rocket go device_1761930053366.png";
import costaLogo from "@assets/Costa-Coffee-Logo_1761930744749.jpg";
import treatzLogo from "@assets/Treatz.jpg_1761930744750.webp";
import cuppLogo from "@assets/ac9be535-cd26-4913-893c-607ef9c65ec9_1761930744747.jpeg";
import silverstoneLogo from "@assets/silverstone-uk-logo-vectorrwopeh_1761930744750.png";
import rocketGoImage from "@assets/rocket go device on stand - white bk_1761931715066.png";
import rocketPocketImage from "@assets/rocket pocket_1761931866361.png";
import rocketWiredImage from "@assets/generated_images/Countertop_terminal_with_touchscreen_aa8d26cb.png";
import tapToPayImage from "@assets/generated_images/Tap_to_pay_smartphone_e29cd7d7.png";
import qsrImage from "@assets/generated_images/Quick_service_restaurant_bc0bbd4b.png";
import fsrImage from "@assets/pocket - pub_1761934804766.png";
import dentalImage from "@assets/generated_images/Dental_office_payment_88d7359b.png";
import retailImage from "@assets/generated_images/Retail_store_checkout_665cbb72.png";
import eposIntegrationImage from "@assets/Gemini_Generated_Image_56kibq56kibq56ki (2)_1761934932850.png";
import testimonial1 from "@assets/generated_images/Business_owner_testimonial_1_a41a1226.png";
import testimonial2 from "@assets/generated_images/Restaurant_manager_testimonial_45d19cf6.png";
import testimonial3 from "@assets/generated_images/Retail_owner_testimonial_379ad525.png";

function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb,59,130,246),0.35),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--primary-rgb,59,130,246),0.3),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.2),transparent_60%)]" />
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

function CountUpStat({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center space-y-4">
      <div className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {count === end && suffix.includes('.') ? end : count}{suffix}
      </div>
      <p className="text-xl md:text-2xl font-bold">{label}</p>
    </div>
  );
}

export default function Home() {
  const partnerLogos = [
    { name: "Costa Coffee", logo: costaLogo },
    { name: "Treatz", logo: treatzLogo },
    { name: "CUPP", logo: cuppLogo },
    { name: "Silverstone", logo: silverstoneLogo },
  ];

  const products = [
    {
      name: "Rocket Go",
      tagline: "High pace, face-to-face",
      description: "58% faster transactions. Take payments anywhere.",
      image: rocketGoImage,
      link: "/products/rocket-go",
      gradient: "from-orange-500/15 to-orange-500/5",
      icon: Zap,
    },
    {
      name: "Rocket Pocket",
      tagline: "Orders and payments, unified",
      description: "Streamline service with one powerful device.",
      image: rocketPocketImage,
      link: "/products/rocket-pocket",
      gradient: "from-blue-500/15 to-blue-500/5",
      icon: Rocket,
    },
    {
      name: "Rocket Wired",
      tagline: "Wired in, switched on",
      description: "Countertop perfection. No charging needed.",
      image: rocketWiredImage,
      link: "/products/rocket-wired",
      gradient: "from-green-500/15 to-green-500/5",
      icon: Cloud,
    },
    {
      name: "Tap to Pay",
      tagline: "iPhone as your terminal",
      description: "Accept payments with just an iPhone.",
      image: tapToPayImage,
      link: "/products/tap-to-pay",
      gradient: "from-purple-500/15 to-purple-500/5",
      icon: Star,
    },
  ];

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      business: "Corner Bakery",
      image: testimonial1,
      rating: 5,
      text: "Switching to Rocket Payments was the best decision for our business. The setup was incredibly smooth, and the card machines are lightning fast.",
    },
    {
      name: "Sarah Mitchell",
      business: "The Golden Lotus Restaurant",
      image: testimonial2,
      rating: 5,
      text: "The integration with our POS system has been flawless. End-of-day reconciliation that used to take 30 minutes now takes 5.",
    },
    {
      name: "James Chen",
      business: "Tech Haven Electronics",
      image: testimonial3,
      rating: 5,
      text: "As a small retail business, reliability is everything. Rocket Payments delivers 99.99% uptime, and their portable terminals work perfectly.",
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Epic Full-Screen Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParallaxHero />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 shadow-xl animate-in fade-in slide-in-from-top-4 duration-700">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-black tracking-wide text-primary">UK'S #1 PAYMENTS PROVIDER</span>
              </div>
              
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter" data-testid="text-hero-headline">
                  Payment<br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Paradise</span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground leading-tight max-w-2xl">
                  Fast, reliable payments with stellar support. Join 110,000+ businesses.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <Link href="/quote">
                  <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50" data-testid="button-hero-get-started">
                    Get Started
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300" data-testid="button-hero-view-products">
                    View Products
                  </Button>
                </Link>
              </div>

              {/* Trusted By Logos */}
              <div className="pt-8 space-y-4 animate-in fade-in duration-1000 delay-300">
                <p className="text-sm font-black text-muted-foreground tracking-wide">TRUSTED BY</p>
                <div className="flex flex-wrap gap-8 items-center">
                  {partnerLogos.map((partner, i) => (
                    <div key={i} className="hover:scale-110 transition-transform duration-300">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-400">
              <div className="absolute -inset-12 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-3xl opacity-70 animate-pulse" />
              <img
                src={heroImage}
                alt="Payment terminal in action"
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Banner - Cinematic */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <AnimatedSection delay={0}>
              <CountUpStat end={99.99} suffix="%" label="Uptime Guarantee" />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <CountUpStat end={110000} suffix="+" label="Businesses Powered" />
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <CountUpStat end={450} suffix="+" label="EPOS Integrations" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products - Apple-Style Showcase */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" data-testid="text-products-headline">
                The latest.
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">
                Take a look at what's new right now.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Link href={product.link}>
                  <Card className={`group relative p-10 md:p-12 rounded-3xl hover-elevate transition-all duration-700 cursor-pointer border-none shadow-2xl overflow-hidden min-h-[600px] flex flex-col bg-gradient-to-br ${product.gradient}`}>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative space-y-6 z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <product.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-4xl md:text-5xl font-black mb-3">{product.name}</h3>
                        <p className="text-xl font-bold text-muted-foreground mb-2">{product.tagline}</p>
                        <p className="text-base text-muted-foreground">{product.description}</p>
                      </div>
                    </div>

                    <div className="relative mt-auto pt-8 flex items-end justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-72 w-auto object-contain group-hover:scale-105 transition-transform duration-700"
                        data-testid={`img-product-${index}`}
                      />
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div className="text-center mt-16">
              <Link href="/products">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-full">
                  View all products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Offer Banner - Cinematic */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="relative group overflow-hidden rounded-3xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Link href="/products/rocket-go">
                <img 
                  src={offerBanner} 
                  alt="Limited time offer - £79 card machine"
                  className="relative w-full h-auto hover:scale-[1.02] transition-transform duration-700 shadow-2xl cursor-pointer"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Value Props - Interactive Cards */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" data-testid="text-value-prop-headline">
                Why Rocket Payments?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to deliver standout payment experiences
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: "450+ EPOS integrations", color: "text-green-600 dark:text-green-400", bg: "bg-green-500/10", delay: 0 },
              { icon: Shield, title: "99.99% uptime", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10", delay: 100 },
              { icon: Users, title: "Award-winning support", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10", delay: 200 },
              { icon: TrendingUp, title: "Powerful insights", color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10", delay: 300 },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={feature.delay}>
                <Card className="group relative p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-xl overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative space-y-5">
                    <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-black">{feature.title}</h3>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries - Full-Width Cinematic */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" data-testid="text-industries-headline">
                Tailored for your industry
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quick-Service", image: qsrImage, delay: 0 },
              { title: "Full-Service", image: fsrImage, delay: 100 },
              { title: "Dental", image: dentalImage, delay: 200 },
              { title: "Retail", image: retailImage, delay: 300 },
            ].map((industry, index) => (
              <AnimatedSection key={index} delay={industry.delay}>
                <Link href="/industries">
                  <div className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-pointer shadow-xl">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        data-testid={`img-industry-${index}`}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                      <h3 className="text-3xl font-black text-white">{industry.title}</h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* EPOS Integration - Epic Split */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                  <Cloud className="h-4 w-4 text-purple-600 dark:text-purple-400 animate-pulse" />
                  <span className="text-sm font-black text-purple-600 dark:text-purple-400">Seamless Integration</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                  Make your day-to-day more plug-and-play
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  We integrate with over <span className="font-black text-foreground">450 EPOS systems</span> – that's more than any other payments provider.
                </p>
                <Link href="/integrations">
                  <Button size="lg" className="text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300">
                    Explore integrations
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={eposIntegrationImage}
                  alt="EPOS integrations"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials - Cinematic Cards */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-4xl font-black">4.8</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" data-testid="text-testimonials-headline">
                Loved by thousands
              </h2>
              <p className="text-xl text-muted-foreground">Based on 4,800+ verified reviews</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="group relative p-10 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-xl overflow-hidden h-full bg-gradient-to-br from-primary/5 to-background">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative space-y-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-base leading-relaxed font-medium">{testimonial.text}</p>
                    <div className="flex gap-4 items-center pt-4 border-t">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-base">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final Epic CTA */}
      <section className="relative py-40 md:py-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-primary-foreground tracking-tight" data-testid="text-cta-headline">
                Ready to transform your payments?
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Join 110,000+ businesses. Setup in minutes. No fixed contracts. Switch for FREE.
              </p>
              
              <div className="pt-8">
                <Link href="/quote">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
                    data-testid="button-cta-get-started"
                  >
                    Get started now
                    <ArrowRight className="ml-2 h-6 w-6" />
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
