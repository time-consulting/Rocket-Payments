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
import { ArrowRight, Sparkles, Cloud, TrendingUp, Zap, Star, CheckCircle, Rocket, Shield, Users, Calendar } from "lucide-react";

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
import fundingSuccessImage from "@assets/expansion french bistro funding_1761948535093.png";
import bookingsImage from "@assets/neon restaurant rocket pay_1761946595999.png";
import mechanicsImage from "@assets/generated_images/Mechanics_garage_payment_b1430d76.png";
import taxiImage from "@assets/generated_images/Classic_London_black_taxi_694b8f2a.png";
import footballImage from "@assets/generated_images/Football_club_stadium_payment_55ec1db0.png";
import groceryImage from "@assets/generated_images/Grocery_supermarket_interior_20624bf4.png";
import beautyImage from "@assets/hair salon_1761948535094.png";
import mobileTraderImage from "@assets/Gemini_Generated_Image_3z8le13z8le13z8l_1762090062033.png";
import petCareImage from "@assets/generated_images/Pet_care_veterinary_clinic_c4916c50.png";
import photographyImage from "@assets/generated_images/Photography_studio_workspace_ea798d9e.png";
import cafeImage from "@assets/generated_images/Cozy_café_coffee_shop_87bbf65d.png";

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

function SwitchPriceAnimation() {
  const [showFree, setShowFree] = useState(false);
  const [price, setPrice] = useState(3000);
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
    const duration = 1200;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeInCubic = progress * progress * progress;
      const currentPrice = Math.floor(3000 - (3000 * easeInCubic));
      setPrice(currentPrice);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setShowFree(true);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div ref={ref} className="text-6xl md:text-8xl font-black">
      {showFree ? (
        <span className="inline-block animate-[scaleIn_0.5s_ease-out]">FREE</span>
      ) : (
        <span>£{price.toLocaleString()}</span>
      )}
    </div>
  );
}

function AutoScrollProducts({ products }: { products: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    const cardWidth = 340;
    const gap = 16;
    const itemWidth = cardWidth + gap;
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= itemWidth * products.length) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [products.length]);

  return (
    <div ref={scrollRef} className="flex gap-4 md:gap-6 overflow-x-scroll pb-8 px-6 md:px-8 scrollbar-hide">
      {[...products, ...products].map((product, index) => (
        <Link key={index} href={product.link}>
          <div 
            className="flex-shrink-0 w-[340px] md:w-[420px] h-[500px] md:h-[580px] rounded-[2rem] overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]" 
            data-testid={`card-product-${index % products.length}`}
          >
            <div className={`h-full relative ${(index % products.length) % 2 === 0 ? 'bg-foreground text-background' : 'bg-muted/50 text-foreground'}`}>
              <div className="absolute top-8 left-8 right-8 z-10 space-y-2">
                <h3 className="text-3xl md:text-4xl font-black">{product.name}</h3>
                <p className="text-lg md:text-xl font-semibold opacity-90">{product.tagline}</p>
                <p className={`text-sm ${(index % products.length) % 2 === 0 ? 'text-background/70' : 'text-muted-foreground'}`}>{product.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[65%] flex items-end justify-center pb-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
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
      description: "Serve more customers, faster. Take payments in seconds.",
      image: rocketGoImage,
      link: "/products/rocket-go",
    },
    {
      name: "Rocket Pocket",
      tagline: "In-the-pocket, on-the-go",
      description: "Boost revenue and streamline service with our portable device.",
      image: rocketPocketImage,
      link: "/products/rocket-pocket",
    },
    {
      name: "Rocket Wired",
      tagline: "Wired in, switched on",
      description: "Countertop and kiosk payments. No charging, no fuss.",
      image: rocketWiredImage,
      link: "/products/rocket-wired",
    },
    {
      name: "Tap to Pay",
      tagline: "Fast payments, on tap",
      description: "Take contactless payments with an iPhone and our app.",
      image: tapToPayImage,
      link: "/products/tap-to-pay",
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
                <Link href="/calculate-savings">
                  <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50" data-testid="button-hero-get-started">
                    Calculate Savings
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300" data-testid="button-hero-view-products">
                    View Products
                  </Button>
                </Link>
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
      </section>

      {/* 3D Bubble Section Divider */}
      <section className="relative -mt-20 md:-mt-32 pb-16 md:pb-24 bg-background z-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-[3rem] p-12 md:p-20 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] border-2 border-primary-foreground/10 backdrop-blur-sm overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
              
              <div className="relative text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] text-primary-foreground">
                    Switch for
                  </h2>
                  <SwitchPriceAnimation />
                  <p className="text-xl md:text-2xl font-bold text-primary-foreground/95">
                    £3,000 cover towards your exit fees
                  </p>
                </div>
                <Link href="/calculate-savings">
                  <Button size="lg" variant="secondary" className="text-lg px-12 py-7 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Calculate Your Savings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By - 3D Card */}
      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-8">
          {/* Trusted By - 3D Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-stone-900 dark:to-stone-800 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-stone-700">
              <p className="text-center text-xs font-black text-muted-foreground tracking-wider mb-6">TRUSTED BY LEADING BUSINESSES</p>
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-stone-900 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-stone-900 to-transparent z-10" />
                <div className="logo-scroll flex gap-12 items-center py-2">
                  {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, i) => (
                    <div key={i} className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products - Apple-Style Auto-Scroll */}
      <section className="py-20 md:py-32 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-12 px-6 md:px-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" data-testid="text-products-headline">
              The latest. <span className="text-muted-foreground font-normal">Take a look at what's new right now.</span>
            </h2>
          </div>

          <div className="relative">
            <AutoScrollProducts products={products} />
          </div>
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

      {/* Why Rocket Payments - Cinematic Showcase */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-muted/20 via-background to-muted/10 overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary animate-float" />
          <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-primary/60 animate-float-delayed" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-primary animate-float" />
          <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full bg-primary/40 animate-float-delayed" />
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(-30px) translateX(10px); opacity: 0.8; }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
            50% { transform: translateY(-40px) translateX(-10px); opacity: 0.6; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite 2s;
          }
        `}</style>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          {/* Emotional Header */}
          <AnimatedSection>
            <div className="text-center space-y-8 mb-24">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-black text-primary">BUILT FOR GROWTH</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95]" data-testid="text-value-prop-headline">
                Trust. Security.<br />Reliability. Growth.
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Every tool designed to accelerate your business, protect your customers, and unlock your potential.
              </p>
            </div>
          </AnimatedSection>

          {/* Product Showcase Grid */}
          <div className="space-y-32">
            {/* Rocket Pocket - Portable Freedom */}
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={rocketPocketImage}
                      alt="Rocket Pocket"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                      style={{ transformStyle: 'preserve-3d' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
                
                <div className="space-y-6 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                    <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-black text-purple-600 dark:text-purple-400">Portable Power</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    Freedom to<br />trade anywhere
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    <span className="font-black text-foreground">Rocket Pocket</span> puts enterprise-grade payment processing in your pocket. All-day battery. Built-in printer. Weatherproof design. Take payments from the beach to the market, the stadium to the street.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Badge className="px-4 py-2">All-day battery</Badge>
                    <Badge className="px-4 py-2">Weatherproof</Badge>
                    <Badge className="px-4 py-2">Built-in printer</Badge>
                  </div>
                  <Link href="/products/rocket-pocket">
                    <Button size="lg" className="mt-6 text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300">
                      Explore Rocket Pocket
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Business Funding - Fuel Growth */}
            <AnimatedSection delay={200}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 lg:pr-8 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-black text-green-600 dark:text-green-400">Growth Accelerator</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    Fuel your<br />next chapter
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    <span className="font-black text-foreground">Business Funding</span> that moves at your speed. Get approved in 24 hours, funded in 48. Flexible repayment through your daily sales. No credit score impact. £1bn+ enabled for businesses like yours.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="space-y-1">
                      <div className="text-3xl font-black text-primary">24hrs</div>
                      <div className="text-sm text-muted-foreground">Approval time</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-black text-primary">£1bn+</div>
                      <div className="text-sm text-muted-foreground">Funding enabled</div>
                    </div>
                  </div>
                  <Link href="/business-funding">
                    <Button size="lg" className="mt-6 text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300">
                      Learn about funding
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="relative group perspective-1000 lg:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={fundingSuccessImage}
                      alt="Business Funding Success"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                      style={{ transformStyle: 'preserve-3d' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bookings - Fill Every Seat */}
            <AnimatedSection delay={400}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={bookingsImage}
                      alt="Bookings & Reservations"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                      style={{ transformStyle: 'preserve-3d' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>

                <div className="space-y-6 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20">
                    <Calendar className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-sm font-black text-orange-600 dark:text-orange-400">Maximize Revenue</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    Fill every seat,<br />every service
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    <span className="font-black text-foreground">Rocket Bookings</span> integrates with Reserve with Google. Customers book directly from Search and Maps. Automated reminders reduce no-shows by 40%. 24/7 availability drives revenue while you sleep.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Badge className="px-4 py-2">Reserve with Google</Badge>
                    <Badge className="px-4 py-2">-40% no-shows</Badge>
                    <Badge className="px-4 py-2">24/7 bookings</Badge>
                  </div>
                  <Link href="/bookings">
                    <Button size="lg" className="mt-6 text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300">
                      Explore bookings
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industries - Organic Tree Branch Layout */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden">
        <style>{`
          @keyframes wave-float {
            0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
            50% { transform: translateY(-12px) rotate(var(--rotation)); }
          }
          .industry-card {
            animation: wave-float 6s ease-in-out infinite;
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .industry-card:hover {
            transform: translateY(-20px) rotate(0deg) scale(1.05) !important;
            z-index: 50;
          }
        `}</style>


        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-black text-primary">INDUSTRY SOLUTIONS</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" data-testid="text-industries-headline">
                Tailored for your industry
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Specialized payment solutions designed for the unique needs of your sector
              </p>
            </div>
          </AnimatedSection>

          {/* Symmetrical Grid - 4x3 Layout */}
          <div className="relative min-h-[900px] md:min-h-[1100px]">
            {/* Row 1 - Top Row */}
            {/* Position 1 - Quick Service */}
            <div 
              className="industry-card absolute top-0 left-[5%] w-56 md:w-64"
              style={{ '--rotation': '-8deg', animationDelay: '0s' } as React.CSSProperties}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={qsrImage} alt="Quick Service" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-0" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Quick Service</h3>
                    <p className="text-sm text-white/80">Fast-casual dining</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 2 - Café */}
            <div 
              className="industry-card absolute top-0 left-[30%] w-56 md:w-64"
              style={{ '--rotation': '6deg', animationDelay: '0.2s' } as React.CSSProperties}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={cafeImage} alt="Café & Coffee" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-cafe" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Café & Coffee</h3>
                    <p className="text-sm text-white/80">Coffee shops</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 3 - Retail */}
            <div 
              className="industry-card absolute top-0 right-[30%] w-56 md:w-64"
              style={{ '--rotation': '-6deg', animationDelay: '0.4s' } as React.CSSProperties}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={retailImage} alt="Retail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-1" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Retail</h3>
                    <p className="text-sm text-white/80">Shops & boutiques</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 4 - Hospitality */}
            <div 
              className="industry-card absolute top-0 right-[5%] w-56 md:w-64"
              style={{ '--rotation': '8deg', animationDelay: '0.6s' } as React.CSSProperties}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={fsrImage} alt="Hospitality" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-2" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Hospitality</h3>
                    <p className="text-sm text-white/80">Bars & restaurants</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Row 2 - Middle Row */}
            {/* Position 5 - Pet Care */}
            <div 
              className="industry-card absolute top-[280px] md:top-[340px] left-[5%] w-56 md:w-64"
              style={{ '--rotation': '7deg', animationDelay: '0.8s' } as React.CSSProperties}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={petCareImage} alt="Pet Care" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-petcare" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Pet Care</h3>
                    <p className="text-sm text-white/80">Veterinary & grooming</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 6 - Photography */}
            <div 
              className="industry-card absolute top-[280px] md:top-[340px] left-[30%] w-56 md:w-64"
              style={{ '--rotation': '-7deg', animationDelay: '1s' } as React.CSSProperties}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={photographyImage} alt="Photography" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-photography" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Photography</h3>
                    <p className="text-sm text-white/80">Studios & events</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 7 - Beauty */}
            <div 
              className="industry-card absolute top-[280px] md:top-[340px] right-[30%] w-56 md:w-64"
              style={{ '--rotation': '7deg', animationDelay: '1.2s' } as React.CSSProperties}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={beautyImage} alt="Beauty" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-3" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Beauty</h3>
                    <p className="text-sm text-white/80">Salons & spas</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 8 - Mechanics */}
            <div 
              className="industry-card absolute top-[280px] md:top-[340px] right-[5%] w-56 md:w-64"
              style={{ '--rotation': '-8deg', animationDelay: '1.4s' } as React.CSSProperties}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={mechanicsImage} alt="Mechanics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-4" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Mechanics</h3>
                    <p className="text-sm text-white/80">Auto repair shops</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Row 3 - Bottom Row */}
            {/* Position 9 - Taxis */}
            <div 
              className="industry-card absolute top-[560px] md:top-[680px] left-[5%] w-56 md:w-64"
              style={{ '--rotation': '-6deg', animationDelay: '1.6s' } as React.CSSProperties}
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={taxiImage} alt="Taxis" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-5" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Taxis</h3>
                    <p className="text-sm text-white/80">Cabs & ride services</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 10 - Football Clubs */}
            <div 
              className="industry-card absolute top-[560px] md:top-[680px] left-[30%] w-56 md:w-64"
              style={{ '--rotation': '8deg', animationDelay: '1.8s' } as React.CSSProperties}
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={footballImage} alt="Football Clubs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-6" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Football Clubs</h3>
                    <p className="text-sm text-white/80">Stadiums & venues</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 11 - Mobile Trader */}
            <div 
              className="industry-card absolute top-[560px] md:top-[680px] right-[30%] w-56 md:w-64"
              style={{ '--rotation': '-8deg', animationDelay: '2s' } as React.CSSProperties}
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={mobileTraderImage} alt="Mobile Trader" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-7" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Mobile Trader</h3>
                    <p className="text-sm text-white/80">Markets & pop-ups</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Position 12 - Grocery Stores */}
            <div 
              className="industry-card absolute top-[560px] md:top-[680px] right-[5%] w-56 md:w-64"
              style={{ '--rotation': '6deg', animationDelay: '2.2s' } as React.CSSProperties}
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-gradient-to-b from-primary/40 to-primary/80" />
              <Link href="/industries">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={groceryImage} alt="Grocery Stores" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-8" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Grocery Stores</h3>
                    <p className="text-sm text-white/80">Supermarkets & delis</p>
                  </div>
                </div>
              </Link>
            </div>
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
