import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Sparkles, Star, Calendar, Users, TrendingUp, Shield, Clock, Zap } from "lucide-react";
import { SEO, serviceSchemas } from "@/components/SEO";

import googleBookingImage from "@assets/810x720 (1)_1761945989566.webp";
import protectTurnoverImage from "@assets/810x720_1761945989567.webp";
import afternoonTeaImage from "@assets/945x840_1761945989567.webp";
import managementTabletImage from "@assets/2400x1040_1761945989568.webp";
import experienceGroupImage from "@assets/experience group_1761946595997.png";
import chefCookingImage from "@assets/Gemini_Generated_Image_h0v6bch0v6bch0v6_1761946595998.png";
import pubGroupImage from "@assets/group in pub rocket pay_1761946595999.png";
import neonRestaurantImage from "@assets/neon restaurant rocket pay_1761946595999.png";
import googleReserveImage from "@assets/google reserve_1761946710952.png";
import videoCoverImage from "@assets/neon restaurant rocket pay_1762090991749.png";

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

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group">
      {!isPlaying ? (
        <>
          <img
            src={videoCoverImage}
            alt="Video thumbnail"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40">
            <button
              onClick={handlePlay}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
              aria-label="Play video"
              data-testid="button-play-video"
            >
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/ba11Tc1XbmM?autoplay=1&loop=1&playlist=ba11Tc1XbmM&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
          title="Rocket Bookings Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

function CountUpNumber({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
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

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Bookings() {
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
        title="Restaurant Booking System UK | Rocket Payments"
        description="Restaurant booking system with Google Reserve, deposit collection & no-show protection. Commission-free bookings. Start your free trial."
        keywords="restaurant booking system UK, hospitality reservations, Google Reserve, booking deposits, no-show protection, table booking system, hospitality payments"
        canonical="https://rocketpayments.co.uk/bookings"
        breadcrumbs={[{name:"Home",url:"https://rocketpayments.co.uk"},{name:"Bookings",url:"https://rocketpayments.co.uk/bookings"}]}
        structuredData={serviceSchemas.merchantServices}
      />
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
              <span className="text-sm font-black tracking-wide text-primary">COMMISSION-FREE BOOKINGS</span>
            </div>

            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000"
              data-testid="text-hero-headline"
              style={{ transform: `translateY(${heroParallax}px)` }}
            >
              Create<br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            <p 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
            >
              Not just tables. Unforgettable moments.<br />Up to 40% more bookings with Reserve with Google.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Link href="/quote">
                <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
                  Start 30-day free trial
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-20 animate-in fade-in zoom-in-95 duration-1000 delay-700">
            <img
              src={managementTabletImage}
              alt="Bookings management platform"
              loading="lazy"
              className="rounded-3xl w-full max-w-6xl mx-auto shadow-2xl"
              style={{ transform: `translateY(${heroParallax * 0.3}px)` }}
            />
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                See it in action
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Watch how Rocket Bookings transforms the dining experience
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <VideoPlayer />
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 md:py-40 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                The numbers don't lie
              </h2>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    <CountUpNumber end={40} suffix="%" />
                  </div>
                  <p className="text-xl font-bold">More bookings</p>
                  <p className="text-base text-muted-foreground">With commission-free Reserve with Google</p>
                </div>

                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    <CountUpNumber end={850} suffix="k+" />
                  </div>
                  <p className="text-xl font-bold">Active diners</p>
                  <p className="text-base text-muted-foreground">On the Rocket diner's booking app</p>
                </div>

                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    0<CountUpNumber end={0} />%
                  </div>
                  <p className="text-xl font-bold">Commission</p>
                  <p className="text-base text-muted-foreground">Keep 100% of your bookings revenue</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reserve with Google Showcase */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <Badge className="text-sm font-black px-6 py-2">RESERVE WITH GOOGLE</Badge>
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Get discovered.<br />Get booked.
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Customers can book directly from Google Search and Maps. No commission. No third-party fees. Just more diners.
                </p>
                <div className="space-y-4">
                  {[
                    "Show up in Google Search results when diners are looking",
                    "Let customers book without leaving Google",
                    "Increase visibility by up to 40%",
                    "Zero commission on all bookings"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl opacity-50" />
                <img
                  src={googleBookingImage}
                  alt="Book with Google"
                  loading="lazy"
                  className="relative rounded-3xl w-full h-auto shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Sell experiences, not just tables
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                From tasting menus to bottomless brunch. Create memorable moments that get customers booking.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <AnimatedSection delay={0}>
              <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={experienceGroupImage} 
                    alt="Fine dining experience" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-black">Chef's Table</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Exclusive tasting menus and intimate dining experiences that command premium pricing and create lasting memories.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={chefCookingImage} 
                    alt="Chef cooking experience" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-black">Live Cooking Shows</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Interactive culinary experiences where guests watch master chefs create stunning dishes before their eyes.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={pubGroupImage} 
                    alt="Pub quiz night" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-black">Events & Occasions</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Quiz nights, live music, comedy shows, and special celebrations that keep your venue buzzing with energy.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={neonRestaurantImage} 
                    alt="Premium dining experience" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-black">VIP Experiences</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Private dining rooms, sommelier-led wine tastings, and exclusive access to create unforgettable moments.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Everything you need to succeed
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Calendar, 
                title: "Effortless management", 
                description: "Handle walk-ins, online bookings, and reservations all in one place. Automatic table seating saves hours every week.",
                image: afternoonTeaImage
              },
              { 
                icon: Shield, 
                title: "Protect your turnover", 
                description: "Take booking deposits to secure customer funds automatically. Get covered even if they don't show up.",
                image: protectTurnoverImage
              },
              { 
                icon: TrendingUp, 
                title: "Boost visibility", 
                description: "Get discovered by 850,000+ diners on our app. Plus Reserve with Google for maximum exposure.",
                image: googleReserveImage
              },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-xl h-full">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Built for hospitality
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Guest profiles", description: "Track preferences, dietary restrictions, and visit history to offer personalized service" },
              { icon: Calendar, title: "Virtual waitlist", description: "Manage walk-ins with QR code check-in at the door" },
              { icon: Clock, title: "Automatic seating", description: "Save time with intelligent table allocation" },
              { icon: Star, title: "Personalized offers", description: "Export guest data to send targeted promotions" },
              { icon: Shield, title: "Deposit protection", description: "Secure funds upfront to protect against no-shows" },
              { icon: Zap, title: "Easy setup", description: "Single line of code integration with bespoke onboarding" },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <Card className="group relative p-10 rounded-3xl hover-elevate transition-all duration-700 cursor-default border-none shadow-xl h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Support when you need it
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Live chat team ready 8am to 11pm daily. 96% customer satisfaction score. We're here to help you succeed.
              </p>
              <div className="flex items-center justify-center gap-2 pt-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-3xl font-black">4.4</span>
              </div>
              <p className="text-lg text-muted-foreground">Excellent - 4.4 out of 5 based on 4,901 reviews</p>
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
                Start your free trial
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                30 days free. No commission. No credit card required. Join 110,000+ businesses using Rocket.
              </p>
              
              <div className="pt-8">
                <Link href="/quote">
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
