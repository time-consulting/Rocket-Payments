import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Sparkles, Star, Clock, Wallet, TrendingUp, Shield, Zap, Heart } from "lucide-react";
import { SEO, serviceSchemas, faqSchemas } from "@/components/SEO";

import balanceImage from "@assets/1080x680_1761948535089.webp";
import hairSalonCustomerImage from "@assets/1080x900_1761948535091.webp";
import expansionBistroImage from "@assets/expansion french bistro funding_1761948535093.png";
import christmasMarketImage from "@assets/Gemini_Generated_Image_3z8le13z8le13z8l_1761948535093.png";
import constructionOwnerImage from "@assets/Gemini_Generated_Image_wsdztcwsdztcwsdz_1761948535093.png";
import bakerTeamImage from "@assets/group photo staff_1761948535094.png";
import hairStylistImage from "@assets/hair salon_1761948535094.png";
import handshakeImage from "@assets/shake_1761948535094.png";
import cafeLadyImage from "@assets/Gemini_Generated_Image_fyzifdfyzifdfyzi_1762450466875.png";

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

function CountUpNumber({ end, duration = 2000, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
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
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function CarouselImages({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  const getImageStyle = (index: number) => {
    const position = (index - currentIndex + images.length) % images.length;
    
    if (position === 0) {
      return {
        transform: 'translateY(0%) translateX(0%) rotateX(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
      };
    } else if (position === 1) {
      return {
        transform: 'translateY(8%) translateX(5%) rotateX(-5deg) scale(0.95)',
        opacity: 0.8,
        zIndex: 20,
      };
    } else if (position === 2) {
      return {
        transform: 'translateY(16%) translateX(10%) rotateX(-10deg) scale(0.9)',
        opacity: 0.5,
        zIndex: 10,
      };
    } else if (position === images.length - 1) {
      return {
        transform: 'translateY(-100%) translateX(-20%) rotateX(20deg) scale(0.8)',
        opacity: 0,
        zIndex: 5,
      };
    } else {
      return {
        transform: 'translateY(-120%) rotateX(30deg) scale(0.7)',
        opacity: 0,
        zIndex: 0,
      };
    }
  };

  return (
    <div ref={ref} className="relative h-[500px] md:h-[600px] perspective-1000">
      <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
        {images.map((image, index) => {
          const style = getImageStyle(index);
          return (
            <div
              key={index}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out"
              style={{
                ...style,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function BusinessFunding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroParallax = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="Business Funding UK | Rocket Payments"
        description="Business funding from £5,000 to £500,000. Approved in 24 hours, funds in 48. No credit score impact. Repay through daily card sales."
        keywords="business funding UK, merchant cash advance, small business loan, fast business finance, flexible business funding, revenue based finance UK, cash advance for business"
        canonical="https://rocketpayments.co.uk/business-funding"
        breadcrumbs={[{name:"Home",url:"https://rocketpayments.co.uk"},{name:"Business Funding",url:"https://rocketpayments.co.uk/business-funding"}]}
        structuredData={[serviceSchemas.businessFunding, faqSchemas.businessFunding]}
      />
      {/* Epic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb,59,130,246),0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--primary-rgb,59,130,246),0.3),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-32">
          <div className="text-center space-y-12">
            <div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 shadow-xl animate-in fade-in slide-in-from-top-4 duration-700"
            >
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-black tracking-wide text-primary">FUNDS IN 24-48 HOURS</span>
            </div>

            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000"
              data-testid="text-hero-headline"
              style={{ transform: `translateY(${heroParallax}px)` }}
            >
              Fuel Your<br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Success Story
              </span>
            </h1>

            <p 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
            >
              Fast, flexible funding on your terms.<br />Grow when opportunity knocks.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Link href="/quote">
                <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
                  Apply now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "£1bn+", label: "Funding enabled" },
                { value: "20k+", label: "Businesses funded" },
                { value: "24-48hr", label: "Fast approval" },
                { value: "0%", label: "Credit score impact" },
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2 animate-in fade-in zoom-in-95 duration-1000" style={{ animationDelay: `${700 + i * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-black text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story 1: The Expansion */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <CarouselImages
                images={[
                  { src: expansionBistroImage, alt: "Restaurant expansion" },
                  { src: bakerTeamImage, alt: "Growing team" },
                  { src: handshakeImage, alt: "Business partnership" },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-8">
                <Badge className="text-sm font-black px-6 py-2">SUCCESS STORY</Badge>
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  From dream to grand opening
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  When Sophie's bistro became the hottest spot in town, she needed to expand fast. With £75,000 in funding within 48 hours, she opened her second location and doubled her revenue.
                </p>
                <div className="space-y-4">
                  {[
                    "Approved in 24 hours",
                    "Funds in account within 48 hours",
                    "Repaid through daily card sales",
                    "No personal guarantees required"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Story 2: Winter Survival */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={300}>
              <div className="space-y-8 lg:order-2">
                <Badge className="text-sm font-black px-6 py-2">SUCCESS STORY</Badge>
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Thriving through the quiet season
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Market trader James used £15,000 to stock up for Christmas. The funding paid for itself in weeks, and he sailed through the slow winter months with confidence.
                </p>
                <div className="space-y-4">
                  {[
                    "Flexible repayments based on daily sales",
                    "Pay more on busy days, less on quiet ones",
                    "Average repayment period: 6-9 months",
                    "One fixed fee agreed upfront"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <CarouselImages
                images={[
                  { src: christmasMarketImage, alt: "Market trader" },
                  { src: balanceImage, alt: "Outstanding balance" },
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Story 3: The Glow-Up */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <CarouselImages
                images={[
                  { src: hairSalonCustomerImage, alt: "Salon customer" },
                  { src: hairStylistImage, alt: "Hair stylist at work" },
                  { src: cafeLadyImage, alt: "Cafe business owner" },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-8">
                <Badge className="text-sm font-black px-6 py-2">SUCCESS STORY</Badge>
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Reinvest and reinvent
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Maya's salon was good. With £30,000 funding, she transformed it into extraordinary. New equipment, premium products, and three additional stylists later—her waiting list is now 6 weeks long.
                </p>
                <div className="space-y-4">
                  {[
                    "Funds below £10k available within minutes",
                    "Use for equipment, stock, or staffing",
                    "Renew for higher amounts as you grow",
                    "Great renewal rates for repeat customers"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Story 4: The Builder */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={300}>
              <div className="space-y-8 lg:order-2">
                <Badge className="text-sm font-black px-6 py-2">SUCCESS STORY</Badge>
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Built on solid foundations
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Construction firm owner Marcus needed £120,000 to take on three major contracts simultaneously. The funding arrived in 48 hours, he delivered all projects on time, and his business grew 200% that year.
                </p>
                <div className="space-y-4">
                  {[
                    "Large amounts available for established businesses",
                    "Quick approval for time-sensitive opportunities",
                    "Repayment scales with your project income",
                    "Access repeat funding as you grow"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <CarouselImages
                images={[
                  { src: constructionOwnerImage, alt: "Construction business owner" },
                  { src: handshakeImage, alt: "Sealing the deal" },
                  { src: balanceImage, alt: "Funding balance" },
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Story 5: The Baker's Dream */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <CarouselImages
                images={[
                  { src: bakerTeamImage, alt: "Bakery team" },
                  { src: expansionBistroImage, alt: "New bakery location" },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-8">
                <Badge className="text-sm font-black px-6 py-2">SUCCESS STORY</Badge>
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Rising to the occasion
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Artisan bakery owner Elena secured £45,000 to purchase a new industrial oven and hire four additional bakers. Within months, she was supplying five local restaurants and her retail sales tripled.
                </p>
                <div className="space-y-4">
                  {[
                    "Invest in equipment that pays for itself",
                    "Hire the team you need to scale",
                    "Flexible terms that match your growth",
                    "Simple application, fast decision"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Fast funding, your way
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Simple, transparent, and tailored to your business rhythm
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Apply with ease",
                description: "Just a few taps via app or online. Get your funding within hours of approval. Soft search only—no credit score impact.",
              },
              {
                icon: Wallet,
                title: "Get funds in a flash",
                description: "Funds below £10k can be accessed within minutes. Larger amounts typically arrive in 24-48 hours. Use immediately for whatever your business needs.",
              },
              {
                icon: TrendingUp,
                title: "Repay on your terms",
                description: "Your loan is repaid as a fixed percentage of daily card sales. Busy day? Pay more. Quiet day? Pay less. It's that flexible.",
              },
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="group relative p-10 rounded-3xl hover-elevate transition-all duration-700 cursor-default border-none shadow-xl h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Join 20,000+ businesses we've funded
              </h2>

              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    £<CountUpNumber end={1} />bn+
                  </div>
                  <p className="text-xl font-bold">Total funding enabled</p>
                  <p className="text-base text-muted-foreground">We've helped businesses access over a billion pounds in growth capital</p>
                </div>

                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    <CountUpNumber end={20} />k+
                  </div>
                  <p className="text-xl font-bold">Businesses funded</p>
                  <p className="text-base text-muted-foreground">Thousands of UK businesses trust us for flexible funding</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Why businesses choose Rocket Funding
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning fast", description: "Apply in minutes. Get approved within hours. Access funds the same or next day." },
              { icon: Shield, title: "No credit impact", description: "Soft search only means your credit score stays protected throughout the process." },
              { icon: TrendingUp, title: "Flexible repayments", description: "Pay as a percentage of daily sales. More on good days, less on quiet ones." },
              { icon: Heart, title: "No hidden fees", description: "One fixed fee agreed upfront. No APR, no surprise charges, no complications." },
              { icon: Wallet, title: "Scale as you grow", description: "Access higher funding amounts with great renewal rates as your business succeeds." },
              { icon: Clock, title: "Typical 6-9 month term", description: "Realistic repayment timelines based on your actual card turnover and sales." },
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <Card className="group relative p-10 rounded-3xl hover-elevate transition-all duration-700 cursor-default border-none shadow-xl h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black">{benefit.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Common questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                q: "How much can I borrow?",
                a: "Typically 0.8-1 times your average monthly card turnover. You'll get a personalized quote once you apply based on your revenue and business history."
              },
              {
                q: "How quickly can I get the funds?",
                a: "Funds below £10k can be accessed within minutes of approval. Larger amounts typically arrive within 24-48 hours."
              },
              {
                q: "Will this affect my credit score?",
                a: "No. We only perform a soft search that won't impact your credit score—it simply shows a Financial Services Advisor performed a search."
              },
              {
                q: "How do repayments work?",
                a: "You repay through a fixed percentage of your daily card sales. The percentage is agreed upfront, so you pay more on busy days and less on quiet ones."
              },
              {
                q: "What's the maximum repayment period?",
                a: "Up to one year, with typical repayment within 6-9 months depending on your turnover and funding amount."
              },
              {
                q: "Are there interest charges?",
                a: "There's one fixed fee agreed upfront before you take the funding. No APR, no hidden charges, no surprises."
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-lg">
                  <h3 className="text-xl font-black mb-4">{faq.q}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Epic Final CTA */}
      <section className="relative py-40 md:py-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-primary-foreground tracking-tight">
                Ready to grow?
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Apply in minutes. Get approved in hours. Access funds within 24-48 hours. Start your success story today.
              </p>
              
              <div className="pt-8">
                <Link href="/quote">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    Apply for funding now
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>

              <p className="text-lg text-primary-foreground/80">
                Soft search only • No credit score impact • Join 20,000+ funded businesses
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
