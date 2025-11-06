import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Award, 
  CreditCard,
  Smartphone,
  Wifi,
  Battery,
  Calendar,
  Users,
  BarChart3,
  Globe,
  Check,
  Star,
  Wallet
} from "lucide-react";

import rocketGoPubImage from "@assets/rocket go pub_1762086661512.png";
import tapRocketGoImage from "@assets/tap rocket go_1762086661514.png";
import pocketPubImage from "@assets/pocket - pub_1762086638111.png";
import rocketPocketImage from "@assets/rocket pocket_1762086638112.png";
import terminalApprovedImage from "@assets/terminal approved_1762086661514.png";
import tapToPayWatchImage from "@assets/tap to pay watch_1762086702786.webp";
import fundingApprovedImage from "@assets/1080x1074_1762086864419.webp";
import bistroExpansionImage from "@assets/expansion french bistro funding_1762086864420.png";
import marketTraderImage from "@assets/Gemini_Generated_Image_3z8le13z8le13z8l_1762086864421.png";
import bookingAppImage from "@assets/810x720 (1)_1762086982600.webp";
import tabletBookingImage from "@assets/810x720_1762086982613.webp";
import calendarManagementImage from "@assets/2400x1040_1762086982614.webp";
import experienceGroupImage from "@assets/experience group_1762086982614.png";
import chefCookingImage from "@assets/Gemini_Generated_Image_h0v6bch0v6bch0v6_1762086982615.png";
import neonRestaurantImage from "@assets/neon restaurant rocket pay_1762086982615.png";
import costaLogo from "@assets/Costa-Coffee-Logo_1761930744749.jpg";
import treatzLogo from "@assets/Treatz.jpg_1761930744750.webp";
import cuppLogo from "@assets/ac9be535-cd26-4913-893c-607ef9c65ec9_1761930744747.jpeg";
import silverstoneLogo from "@assets/silverstone-uk-logo-vectorrwopeh_1761930744750.png";

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
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CountUpNumber({ end, duration = 2000, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out cubic for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function Products() {
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
      {/* Epic Hero Section */}
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
              <span className="text-sm font-black tracking-wide text-primary">COMPLETE PAYMENT ECOSYSTEM</span>
            </div>

            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000"
              data-testid="text-products-page-headline"
              style={{ transform: `translateY(${heroParallax}px)` }}
            >
              Your Complete<br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Payment Powerhouse
              </span>
            </h1>

            <p 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
            >
              Purposefully designed. Powered by innovation.<br />Built with superpowers for your business.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Link href="/calculate-savings">
                <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
                  Get started
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "110k+", label: "Businesses powered" },
                { value: "P2PE", label: "Encrypted security" },
                { value: "1.8bn", label: "Transactions annually" },
                { value: "450+", label: "Integrations" },
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

      {/* Payment Devices Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        {/* Trusted By Logos */}
        <div className="mb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium">Trusted by leading brands</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/20 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex gap-16 animate-scroll">
              {[
                { name: "Costa Coffee", logo: costaLogo },
                { name: "Treatz", logo: treatzLogo },
                { name: "CUPP", logo: cuppLogo },
                { name: "Silverstone", logo: silverstoneLogo },
                { name: "Costa Coffee", logo: costaLogo },
                { name: "Treatz", logo: treatzLogo },
                { name: "CUPP", logo: cuppLogo },
                { name: "Silverstone", logo: silverstoneLogo },
                { name: "Costa Coffee", logo: costaLogo },
                { name: "Treatz", logo: treatzLogo },
                { name: "CUPP", logo: cuppLogo },
                { name: "Silverstone", logo: silverstoneLogo },
              ].map((partner, i) => (
                <div key={i} className="flex-shrink-0">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            width: fit-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <Badge className="text-sm font-black px-6 py-2">PAYMENT DEVICES</Badge>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Hardware that moves<br />at the speed of business
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Four devices. Infinite possibilities. From countertop to pocket, we've engineered the perfect terminal for every moment.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <AnimatedSection>
              <CarouselImages
                images={[
                  { src: rocketGoPubImage, alt: "Rocket Go terminal in pub setting" },
                  { src: rocketPocketImage, alt: "Rocket Pocket device product shot" },
                  { src: tapRocketGoImage, alt: "Rocket Go at food truck" },
                  { src: pocketPubImage, alt: "Rocket Pocket in use at bar" },
                  { src: terminalApprovedImage, alt: "Payment approved on terminal" },
                  { src: tapToPayWatchImage, alt: "Tap to Pay on iPhone with Apple Watch" },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-10">
                {[
                  {
                    icon: Zap,
                    name: "Rocket Go",
                    tagline: "High pace, face-to-face",
                    desc: "Lightning-fast processing with built-in 4G, all-day battery, and compact design. Perfect for businesses that never stop.",
                    link: "/products/rocket-go"
                  },
                  {
                    icon: Smartphone,
                    name: "Rocket Pocket",
                    tagline: "In-the-pocket, on-the-go",
                    desc: "Ultra-portable with integrated receipt printer and weatherproof casing. Take payments anywhere your business takes you.",
                    link: "/products/rocket-pocket"
                  },
                  {
                    icon: CreditCard,
                    name: "Rocket Wired",
                    tagline: "Wired in, switched on",
                    desc: "Always-on reliability for fixed checkouts. No charging needed, seamless EPOS integration, lightning-fast transactions.",
                    link: "/products/rocket-wired"
                  },
                  {
                    icon: Wifi,
                    name: "Tap to Pay on iPhone",
                    tagline: "Fast payments, on tap",
                    desc: "Turn your iPhone into a payment terminal. No extra hardware, instant setup, perfect for mobile businesses.",
                    link: "/products/tap-to-pay"
                  },
                ].map((device, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer" onClick={() => window.location.href = device.link}>
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <device.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-black">{device.name}</h3>
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <p className="text-sm font-bold text-primary">{device.tagline}</p>
                      <p className="text-base text-muted-foreground leading-relaxed">{device.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={600}>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Battery, label: "All-day battery life" },
                { icon: Wifi, label: "Built-in connectivity" },
                { icon: Shield, label: "Bank-level security" },
                { icon: Clock, label: "Next-day settlement" },
              ].map((feature, i) => (
                <Card key={i} className="p-6 text-center space-y-3 hover-elevate transition-all duration-500 cursor-default border-primary/10 shadow-lg">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-black">{feature.label}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Business Funding Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={300}>
              <div className="space-y-8 lg:order-2">
                <Badge className="text-sm font-black px-6 py-2">BUSINESS FUNDING</Badge>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  Fuel your growth<br />on your terms
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Fast, flexible funding when opportunity knocks. Get approved in 24 hours, receive funds in 48, and repay through daily sales. No credit score impact.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Zap, label: "24-48hr funding", desc: "Lightning-fast approval" },
                    { icon: Wallet, label: "£1bn+ enabled", desc: "Trusted by 20k+ businesses" },
                    { icon: TrendingUp, label: "Flexible repayment", desc: "Pay as you earn" },
                    { icon: Shield, label: "0% credit impact", desc: "Soft search only" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-black text-base">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link href="/business-funding">
                    <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                      Learn about funding
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <CarouselImages
                images={[
                  { src: fundingApprovedImage, alt: "Business owner receiving funding approval notification" },
                  { src: bistroExpansionImage, alt: "Restaurant owner expanding bistro with funding" },
                  { src: marketTraderImage, alt: "Market trader thriving at Christmas market" },
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bookings & Reservations Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <CarouselImages
                images={[
                  { src: bookingAppImage, alt: "Restaurant booking app on phone" },
                  { src: experienceGroupImage, alt: "Chef serving guests at table" },
                  { src: calendarManagementImage, alt: "Booking calendar management on tablet" },
                  { src: tabletBookingImage, alt: "Staff managing bookings on tablet" },
                  { src: chefCookingImage, alt: "Chef cooking in professional kitchen" },
                  { src: neonRestaurantImage, alt: "Premium dining experience" },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-8">
                <Badge className="text-sm font-black px-6 py-2">BOOKINGS & RESERVATIONS</Badge>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  Fill every seat,<br />every service
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Integrated booking system with Reserve with Google. Let customers book directly from Search and Maps. Automated reminders reduce no-shows by 40%.
                </p>
                <div className="space-y-4">
                  {[
                    "Reserve with Google integration",
                    "Online booking portal",
                    "Automated SMS & email reminders",
                    "Calendar synchronization",
                    "40% reduction in no-shows",
                    "24/7 booking availability"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link href="/bookings">
                    <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
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

      {/* Reporting & Analytics Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={300}>
              <div className="space-y-8 lg:order-2">
                <Badge className="text-sm font-black px-6 py-2">REPORTING & ANALYTICS</Badge>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  Data that drives<br />decisions
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Real-time insights into every transaction. Track sales, analyze trends, and make data-driven decisions with our powerful reporting dashboard.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: BarChart3, label: "Real-time analytics", desc: "Live transaction tracking" },
                    { icon: TrendingUp, label: "Sales trends", desc: "Spot patterns instantly" },
                    { icon: Globe, label: "Multi-location", desc: "Consolidated reporting" },
                    { icon: Award, label: "Custom reports", desc: "Export anything, anytime" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-black text-base">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black">Today's Performance</h3>
                      <Badge className="bg-primary/10 text-primary border-primary/20">Live</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-6 space-y-2 bg-card/80 backdrop-blur-sm">
                        <p className="text-sm text-muted-foreground">Revenue</p>
                        <div className="text-3xl font-black">
                          £<CountUpNumber end={12} duration={2000} />k
                        </div>
                        <p className="text-sm text-primary font-bold">
                          +<CountUpNumber end={23} duration={1800} />%
                        </p>
                      </Card>
                      
                      <Card className="p-6 space-y-2 bg-card/80 backdrop-blur-sm">
                        <p className="text-sm text-muted-foreground">Transactions</p>
                        <div className="text-3xl font-black">
                          <CountUpNumber end={342} duration={2000} />
                        </div>
                        <p className="text-sm text-primary font-bold">
                          +<CountUpNumber end={18} duration={1800} />%
                        </p>
                      </Card>
                    </div>

                    <Card className="p-6 bg-card/80 backdrop-blur-sm">
                      <div className="space-y-4">
                        <p className="text-sm font-black">Top Products</p>
                        {["Signature Dish", "House Special", "Premium Service"].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <span className="text-sm">{item}</span>
                            </div>
                            <span className="text-sm font-bold">£{Math.floor(Math.random() * 500 + 200)}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>Updates in real-time</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-12">
              <Badge className="text-sm font-black px-6 py-2">INTEGRATIONS</Badge>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Works with the tools<br />you already love
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Seamlessly integrate with 450+ platforms. From accounting to inventory management, we connect to your entire tech stack.
              </p>

              <div className="grid md:grid-cols-4 gap-6 pt-8">
                {[
                  { icon: Users, label: "EPOS Systems", count: "450+" },
                  { icon: Shield, label: "P2PE Security", count: "Secure" },
                  { icon: Globe, label: "Online Platforms", count: "200+" },
                  { icon: Wallet, label: "Business Funding", count: "Fast" },
                ].map((category, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <Card className="p-8 text-center space-y-4 hover-elevate transition-all duration-500 cursor-default border-primary/10 shadow-lg h-full">
                      <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                          <category.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-primary">{category.count}</div>
                        <p className="text-base font-black">{category.label}</p>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="relative py-32 md:py-40 bg-background overflow-hidden">
        {/* Animated Background Graphics */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="absolute left-0 top-1/4 w-1/3 h-1/2" viewBox="0 0 400 300">
            <path
              d="M 0,250 Q 100,200 200,150 T 400,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary animate-[dash_3s_ease-in-out_infinite]"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{ animation: 'dash 4s ease-in-out infinite' }}
            />
          </svg>
          <svg className="absolute right-0 top-1/3 w-1/3 h-1/2" viewBox="0 0 400 300">
            <path
              d="M 0,200 Q 100,120 200,100 T 400,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{ animation: 'dash 5s ease-in-out infinite 0.5s' }}
            />
          </svg>
        </div>

        <style>{`
          @keyframes dash {
            0% { stroke-dashoffset: 1000; opacity: 0; }
            10% { opacity: 1; }
            50% { stroke-dashoffset: 0; opacity: 1; }
            90% { opacity: 0.5; }
            100% { stroke-dashoffset: -1000; opacity: 0; }
          }
        `}</style>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-16">
              {/* Header */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-black text-primary">ENTERPRISE-GRADE SECURITY</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  Built for reliability.<br />Engineered for trust.
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Every transaction secured by military-grade encryption. Every system backed by 24/7 monitoring. Every business protected by PCI Level 1 compliance.
                </p>
              </div>

              {/* Security Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <AnimatedSection delay={100}>
                  <Card className="p-8 space-y-6 text-left border-primary/10 hover-elevate h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black">Point-to-Point Encryption</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Advanced P2PE security ensures payment data is encrypted from the moment of card tap to final authorization. Zero exposure, maximum protection.
                      </p>
                      <div className="pt-2">
                        <Badge variant="outline" className="text-xs font-bold">PCI DSS Level 1</Badge>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <Card className="p-8 space-y-6 text-left border-primary/10 hover-elevate h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black">99.99% Uptime Guarantee</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Redundant systems across multiple data centers. Real-time failover protection. Your business never stops, even when the unexpected happens.
                      </p>
                      <div className="pt-2 flex items-center gap-2">
                        <div className="flex -space-x-1">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-75" />
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150" />
                        </div>
                        <span className="text-xs text-primary font-bold">Live monitoring</span>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                  <Card className="p-8 space-y-6 text-left border-primary/10 hover-elevate h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Award className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black">Trusted by 110,000+</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        From corner shops to restaurant chains, businesses trust us with 1.8 billion transactions annually. Your payments are in expert hands.
                      </p>
                      <div className="pt-2 flex gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-black text-primary">4.9</div>
                          <div className="flex gap-0.5 justify-center">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                        <div className="border-l pl-4">
                          <div className="text-xs text-muted-foreground">Average rating</div>
                          <div className="text-xs font-bold">from 12k+ reviews</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
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
                Build your payment<br />powerhouse today
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Every tool you need to accept payments, grow revenue, and scale your business. All in one seamless platform.
              </p>
              
              <div className="pt-8">
                <Link href="/calculate-savings">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    Get started now
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>

              <p className="text-lg text-primary-foreground/80">
                Join 110,000+ businesses • 24-hour setup • Zero commitment
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
