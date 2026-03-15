import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, faqSchemas, serviceSchemas } from "@/components/SEO";

const localKeywords = "card machine Kent, card machine East Sussex, payment terminal Maidstone, card payments Canterbury, card machine Tunbridge Wells, payment processing Brighton, merchant services Eastbourne, card reader Hastings, business funding Kent, business loans East Sussex, Dojo alternative UK";
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
import rocketGoHero from "@assets/stock_images/Remove background project (1).png";
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


const CYCLE_MS = 3 * 24 * 60 * 60 * 1000; // 3 days in ms

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calc = () => {
      // Rolling 3-day window: time remaining until next 3-day boundary from a fixed epoch
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
    <div ref={ref} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
      {showFree ? (
        <span className="inline-block animate-[scaleIn_0.5s_ease-out] bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">FREE</span>
      ) : (
        <span className="text-white/70">£{price.toLocaleString()}</span>
      )}
    </div>
  );
}

function AutoScrollProducts({ products }: { products: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const isRunningRef = useRef(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.3;
    const cardWidth = 340;
    const gap = 16;
    const itemWidth = cardWidth + gap;
    const totalWidth = itemWidth * products.length;
    
    const scroll = () => {
      if (!isRunningRef.current) return;
      
      scrollPositionRef.current += scrollSpeed;
      
      if (scrollPositionRef.current >= totalWidth) {
        scrollPositionRef.current = 0;
      }
      
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    const startAnimation = () => {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    const stopAnimation = () => {
      isRunningRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const handleMouseEnter = () => stopAnimation();
    const handleMouseLeave = () => startAnimation();

    isRunningRef.current = true;
    animationRef.current = requestAnimationFrame(scroll);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      stopAnimation();
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [products.length]);

  return (
    <div ref={scrollRef} className="flex gap-4 md:gap-6 overflow-x-scroll pb-8 px-6 md:px-8 scrollbar-hide">
      {[...products, ...products].map((product, index) => (
        <Link key={index} href={product.link}>
          <div 
            className="flex-shrink-0 w-[300px] md:w-[380px] h-[520px] md:h-[600px] rounded-[1.5rem] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" 
            style={{
              backgroundColor: product.cardBg,
              border: `3px solid ${product.borderColor}`
            }}
            data-testid={`card-product-${index % products.length}`}
          >
            <div className="h-full relative flex flex-col">
              {/* Top bar with product name and arrow */}
              <div className="flex items-center justify-between p-5">
                <span 
                  className="text-sm font-bold"
                  style={{ color: product.textMuted }}
                >
                  {product.name}
                </span>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${product.textColor}15` }}
                >
                  <ArrowRight className="w-4 h-4 -rotate-45" style={{ color: product.textColor }} />
                </div>
              </div>
              
              {/* Main content - headline and description */}
              <div className="px-5 space-y-3">
                <h3 
                  className="text-3xl md:text-4xl font-black leading-tight"
                  style={{ color: product.textColor }}
                >
                  {product.tagline}
                </h3>
                <p 
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: product.textMuted }}
                >
                  {product.description}
                </p>
              </div>
              
              {/* Product image at bottom - seamlessly integrated */}
              <div 
                className="flex-1 flex items-end justify-center mt-4 rounded-b-[1.3rem] overflow-hidden"
                style={{ backgroundColor: product.imageBg }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[240px] md:h-[300px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

const TOTAL_FRAMES = 120;

function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  // frameMap: sparse array where frameMap[i] = loaded Image for actual frame number
  const frameMapRef = useRef<Map<number, HTMLImageElement>>(new Map());
  // sorted list of actual frame numbers we're loading
  const frameIndicesRef = useRef<number[]>([]);
  const loadedCountRef = useRef(0);
  const totalToLoadRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const currentFrameRef = useRef(-1);
  const [textVisible, setTextVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [firstFrameDrawn, setFirstFrameDrawn] = useState(false);

  // Preload frames — mobile loads every 3rd frame (40 total), desktop loads all 120
  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 400);

    const isMobile = window.innerWidth < 768;
    const step = isMobile ? 3 : 1;

    // Build list of 1-based frame numbers to load
    const indices: number[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += step) indices.push(i);
    // Always include the last frame
    if (indices[indices.length - 1] !== TOTAL_FRAMES) indices.push(TOTAL_FRAMES);

    frameIndicesRef.current = indices;
    totalToLoadRef.current = indices.length;

    indices.forEach((frameNum) => {
      const img = new Image();
      const num = String(frameNum).padStart(4, '0');
      img.src = `/hero-frames/frame_${num}.jpg`;
      img.onload = () => {
        frameMapRef.current.set(frameNum, img);
        loadedCountRef.current++;
        if (loadedCountRef.current === totalToLoadRef.current) {
          setLoaded(true);
        }
        // Start showing canvas once first frame is ready
        if (loadedCountRef.current === 1) {
          drawFrame(0);
          setFirstFrameDrawn(true);
        }
      };
    });

    return () => clearTimeout(timer);
  }, []);

  function drawFrame(progressIndex: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Map progressIndex (0..indices.length-1) to nearest loaded frame number
    const indices = frameIndicesRef.current;
    if (indices.length === 0) return;
    const clampedIdx = Math.max(0, Math.min(indices.length - 1, progressIndex));
    const frameNum = indices[clampedIdx];

    if (currentFrameRef.current === frameNum) return;

    const img = frameMapRef.current.get(frameNum);
    if (!img) return;
    currentFrameRef.current = frameNum;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    // Cover-fit
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const iw = img.naturalWidth * scale;
    const ih = img.naturalHeight * scale;
    const ix = (w - iw) / 2;
    const iy = (h - ih) / 2;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, ix, iy, iw, ih);
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const scrub = () => {
      const rect = section.getBoundingClientRect();
      const sectionScrollHeight = section.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / sectionScrollHeight);
      setScrollProgress(progress);

      const indices = frameIndicesRef.current;
      if (indices.length === 0) return;
      const progressIndex = Math.round(progress * (indices.length - 1));

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(progressIndex));
    };

    window.addEventListener('scroll', scrub, { passive: true });
    scrub();

    return () => {
      window.removeEventListener('scroll', scrub);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Intro: visible at 0%, fully gone by 20%
  const introOpacity = Math.max(0, 1 - scrollProgress * 5);
  // Mid: fades in 35–50%, out 65–80%
  const midOpacity = scrollProgress > 0.35 && scrollProgress < 0.80
    ? scrollProgress < 0.50
      ? (scrollProgress - 0.35) / 0.15
      : scrollProgress > 0.65
        ? 1 - (scrollProgress - 0.65) / 0.15
        : 1
    : 0;
  // CTAs: fade in from 80%
  const ctaOpacity = scrollProgress > 0.80 ? (scrollProgress - 0.80) * 5 : 0;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh', background: 'linear-gradient(to bottom, #ffffff 85%, #0a0f1a 100%)' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">

        {/* Top edge gradient — nav blends in */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />

        {/* CANVAS — frame sequence drawn by scroll */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: '#ffffff' }}
        />

        {/* FRAME 1 PLACEHOLDER — preloaded img, sits under microload, visible once microload exits */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            opacity: firstFrameDrawn ? 0 : 1,
            transition: firstFrameDrawn ? 'opacity 0.6s ease' : 'none',
          }}
        >
          <img
            src="/hero-frames/frame_0001.jpg"
            className="w-full h-full object-contain"
            style={{ background: '#ffffff' }}
            alt="Rocket Payments card terminal for UK businesses"
            loading="eager"
            fetchPriority="high"
          />
        </div>


        {/* INTRO — headline top-left, fades out by 20% scroll */}
        <div
          className="absolute inset-x-0 top-0 z-10 flex flex-col pointer-events-none"
          style={{
            opacity: textVisible ? introOpacity : 0,
            transition: textVisible ? 'none' : 'opacity 0.8s ease',
          }}
        >
          {/* Top gradient so text sits above device */}
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/95 via-white/50 to-transparent pointer-events-none" />
          <div className="relative px-6 md:px-16 pt-24 md:pt-28 space-y-3 md:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-primary/20 shadow-md pointer-events-auto">
              <Sparkles className="h-3 w-3 text-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-black tracking-widest text-primary">UK'S #1 PAYMENTS PROVIDER</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-gray-900 drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]"
              data-testid="text-hero-headline"
            >
              Payment<br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Paradise
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl font-semibold text-gray-700 max-w-sm drop-shadow-[0_1px_8px_rgba(255,255,255,1)]">
              Fast, reliable payments with stellar support.<br className="hidden md:block" /> Join 110,000+ businesses.
            </p>
            {/* Scroll hint inline with text */}
            <div className="flex items-center gap-2 pt-1">
              <div className="w-px h-6 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
              <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">Scroll to reveal</span>
            </div>
          </div>
        </div>

        {/* SAVINGS CTA — bottom-right, fades with intro */}
        <div
          className="absolute top-24 md:top-28 right-6 md:right-12 z-20 pointer-events-none hidden sm:block"
          style={{ opacity: textVisible ? introOpacity : 0, transition: textVisible ? 'none' : 'opacity 0.8s ease' }}
        >
          <Link href="/calculate-savings" className="pointer-events-auto block group">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-4 md:p-5 w-56 md:w-64 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {/* Mini savings illustration */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black tracking-widest text-primary uppercase">Your savings</span>
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1 mb-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-400">Current fees</span>
                  <span className="text-sm font-bold text-gray-400 line-through">£3,200/yr</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-900 font-bold">With Rocket</span>
                  <span className="text-lg font-black text-primary">£1,840/yr</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-[57%] bg-gradient-to-r from-primary to-primary/60 rounded-full" />
                </div>
                <p className="text-[10px] text-gray-400 text-right">avg. 42% saving</p>
              </div>
              <div className="flex items-center justify-between bg-primary/10 rounded-xl px-3 py-2 group-hover:bg-primary/20 transition-colors">
                <span className="text-xs font-black text-primary">Calculate yours</span>
                <ArrowRight className="h-3.5 w-3.5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* MID-SCROLL HEADLINE — technology desire */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: midOpacity }}
        >
          <div className="text-center px-6 space-y-3">
            <p className="text-xs md:text-sm font-black tracking-[0.25em] text-primary uppercase drop-shadow-[0_1px_6px_rgba(255,255,255,1)]">Built for business</p>
            <h2 className="text-[2.5rem] sm:text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-gray-900 drop-shadow-[0_2px_16px_rgba(255,255,255,0.95)]">
              The engine<br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                behind every sale.
              </span>
            </h2>
            <p className="text-sm sm:text-sm md:text-lg font-semibold text-gray-700 pt-2 max-w-xs sm:max-w-sm mx-auto drop-shadow-[0_1px_8px_rgba(255,255,255,1)]">
              Enterprise-grade payment technology — engineered for speed, built to last.
            </p>
          </div>
        </div>

        {/* CTAs — fade in at 80%+ scroll */}
        <div
          className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center pointer-events-none"
          style={{
            opacity: ctaOpacity,
            paddingBottom: 'max(env(safe-area-inset-bottom), 1.5rem)',
          }}
        >
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
          <div className="relative text-center space-y-1 mb-5 px-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Ready to launch?</p>
            <p className="text-sm text-gray-500 font-medium">No fixed contracts. Switch for FREE.</p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 px-6 w-full max-w-sm sm:max-w-none sm:w-auto pointer-events-auto">
            <Link href="/calculate-savings" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full text-base px-8 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-primary/40"
                data-testid="button-hero-get-started"
              >
                Calculate Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-base px-8 py-5 rounded-full hover:scale-105 transition-all duration-300 border-gray-300 text-gray-800 bg-white/70 backdrop-blur-sm"
                data-testid="button-hero-view-products"
              >
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
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
      cardBg: "#2dd4bf",
      borderColor: "#5eead4",
      imageBg: "#f5f5f0",
      textColor: "#042f2e",
      textMuted: "#134e4a",
    },
    {
      name: "Rocket Pocket",
      tagline: "In-the-pocket, on-the-go",
      description: "Boost revenue and streamline service with our portable device.",
      image: rocketPocketImage,
      link: "/products/rocket-pocket",
      cardBg: "#2dd4bf",
      borderColor: "#5eead4",
      imageBg: "#e8e4dc",
      textColor: "#042f2e",
      textMuted: "#134e4a",
    },
    {
      name: "Rocket Wired",
      tagline: "Wired in, switched on",
      description: "Countertop and kiosk payments. No charging, no fuss.",
      image: rocketWiredImage,
      link: "/products/rocket-wired",
      cardBg: "#2dd4bf",
      borderColor: "#5eead4",
      imageBg: "#f5f5f0",
      textColor: "#042f2e",
      textMuted: "#134e4a",
    },
    {
      name: "Tap to Pay",
      tagline: "Fast payments, on tap",
      description: "Take contactless payments with an iPhone and our app.",
      image: tapToPayImage,
      link: "/products/tap-to-pay",
      cardBg: "#1a1a1a",
      borderColor: "#333333",
      imageBg: "#d4c4b0",
      textColor: "#ffffff",
      textMuted: "#a3a3a3",
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
    <>
      <SEO
        title="Card Payment Processing UK | Rocket Payments"
        description="Card payment processing from 0.5% with free terminals. UK merchant services, business funding & next-day deposits. Switch today — we cover exit fees."
        canonical="https://rocketpayments.co.uk"
        keywords={`card payment processing UK, merchant services UK, payment terminal, card machine UK, business funding UK, business loans UK, merchant cash advance, contactless payments UK, Dojo alternative, ${localKeywords}`}
        structuredData={[faqSchemas.home, faqSchemas.businessFunding, serviceSchemas.cardTerminal, serviceSchemas.merchantServices]}
      />
      {/* Scroll-Driven Video Hero — must be OUTSIDE overflow-hidden or sticky breaks */}
      <HeroSection />
      <div className="flex flex-col" style={{ overflowX: 'clip' }}>

      {/* 3D Bubble Section Divider */}
      <section className="relative pt-0 pb-0 bg-[#0a0f1a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        
        {/* Social proof + Switch for FREE — unified dark editorial section */}
        <div className="relative overflow-hidden bg-[#0a0f1a] mt-0">
          {/* Subtle teal glow orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
          {/* Fine grid overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-24 md:pb-32">

            {/* Stat row */}
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-16 md:mb-20">
              {[
                { num: '110,000+', label: 'Businesses trust us' },
                { num: '£3,000', label: 'Exit fee cover' },
                { num: '24/7', label: 'UK-based support' },
                { num: '0%', label: 'Fixed contracts' },
              ].map(({ num, label }) => (
                <div key={num} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white tabular-nums">{num}</div>
                  <div className="text-xs font-semibold text-white/40 tracking-wider uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Logo strip — white island so JPEG backgrounds disappear */}
            <div className="relative mb-16 md:mb-20 -mx-6 md:-mx-8">
              {/* Dark-to-white top fade */}
              <div className="h-10 bg-gradient-to-b from-[#0a0f1a] to-white pointer-events-none" />
              {/* White panel */}
              <div className="bg-white py-8 px-6 md:px-8">
                <p className="text-center text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-8">Trusted by leading businesses</p>
                {/* Contained carousel — max-width keeps 4 logos looking intentional */}
                <div className="relative max-w-2xl mx-auto">
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                  <div className="overflow-hidden">
                    <div className="logo-scroll flex gap-16 items-center py-1">
                      {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, i) => (
                        <div key={i} className="flex-shrink-0" style={{ mixBlendMode: 'multiply' }}>
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* White-to-dark bottom fade */}
              <div className="h-10 bg-gradient-to-b from-white to-[#0a0f1a] pointer-events-none" />
            </div>

            {/* Editorial "Switch for FREE" */}
            <div className="text-center">
              <p className="text-xs font-black tracking-[0.3em] text-primary uppercase mb-4">No contracts. No catch.</p>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-white mb-3">
                Switch
              </h2>
              <div className="flex items-baseline justify-center gap-4 mb-6">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white/30">for</span>
                <SwitchPriceAnimation />
              </div>
              <p className="text-base md:text-lg text-white/50 font-medium mb-10">
                We cover up to £3,000 of your exit fees. No risk, no excuses.
              </p>
              <Link href="/calculate-savings">
                <Button size="lg" className="text-base px-10 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(45,212,191,0.3)] hover:shadow-[0_0_60px_rgba(45,212,191,0.5)] hover:scale-105 transition-all duration-300">
                  Calculate Your Savings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Products — seamless dark→light reveal with 3D card entrance */}
      <section className="overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0a0f1a 0%, #0a0f1a 80px, #f5f5f7 80px, #f5f5f7 100%)', paddingBottom: '5rem' }}>

        {/* Header — slides up from dark into light */}
        <AnimatedSection>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-16 mb-10 md:mb-14 flex items-end justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.25em] text-primary uppercase mb-3">Our range</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-gray-900" data-testid="text-products-headline">
              The right device<br />
              <span className="text-gray-400 font-normal">for every business.</span>
            </h2>
          </div>
          <Link href="/products" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors group">
            View all
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        </AnimatedSection>

        {/* Snap-scroll card rail — each card flies up staggered */}
        <div
          className="flex gap-4 md:gap-5 overflow-x-auto pb-6 px-6 md:px-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollPaddingLeft: '1.5rem' }}
        >
          {products.map((product, index) => (
            <AnimatedSection key={index} delay={index * 80}>
            <Link href={product.link} className="flex-shrink-0 snap-start block" data-testid={`card-product-${index}`}>
              <div className="w-[300px] sm:w-[340px] md:w-[380px] rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                {/* Image — full bleed, tall */}
                <div
                  className="relative h-[300px] md:h-[340px] flex items-end justify-center overflow-hidden"
                  style={{ backgroundColor: product.imageBg }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[260px] md:h-[300px] w-auto object-contain transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
                </div>
                {/* Text */}
                <div className="p-6 space-y-1">
                  <p className="text-xs font-black tracking-[0.2em] text-primary uppercase">{product.name}</p>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">{product.tagline}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed pt-1">{product.description}</p>
                  <div className="pt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 group-hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
            </AnimatedSection>
          ))}
          {/* View all card */}
          <Link href="/products" className="flex-shrink-0 snap-start self-stretch">
            <div className="w-[200px] md:w-[240px] h-full min-h-[440px] rounded-[2rem] border-2 border-dashed border-gray-200 hover:border-primary/40 flex flex-col items-center justify-center gap-4 text-center px-8 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300">
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary -rotate-45 transition-colors duration-300" />
              </div>
              <div>
                <p className="text-sm font-black text-gray-900">View all</p>
                <p className="text-xs text-gray-400 mt-1">products</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile "View all" link */}
        <div className="md:hidden text-center mt-4 px-6 pb-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </section>

      {/* Offer Banner — full-bleed coded component */}
      <section className="relative overflow-hidden bg-[#0d3d2e]">
        {/* Background texture layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d2e] via-[#0d4433] to-[#092b1f] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 items-center min-h-[340px] md:min-h-[400px]">

            {/* Left — copy */}
            <div className="py-12 md:py-16 space-y-6 z-10">
              {/* Eyebrow with live dot */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-black text-primary tracking-widest uppercase">Limited time offer</span>
              </div>

              {/* Main headline */}
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

              {/* Countdown */}
              <div className="space-y-2">
                <p className="text-[10px] font-black tracking-[0.25em] text-white/30 uppercase">Offer ends in</p>
                <CountdownTimer />
              </div>

              {/* CTA */}
              <Link href="/products/rocket-go">
                <Button className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-5 rounded-full shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:shadow-[0_0_50px_rgba(45,212,191,0.6)] hover:scale-105 transition-all duration-300">
                  Get the deal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Right — device, scales across breakpoints */}
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
                      loading="lazy"
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
                      loading="lazy"
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
                      loading="lazy"
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
                    <img src={qsrImage} alt="Quick Service" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-0" />
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
                    <img src={cafeImage} alt="Café & Coffee" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-cafe" />
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
                    <img src={retailImage} alt="Retail" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-1" />
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
                    <img src={fsrImage} alt="Hospitality" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-2" />
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
                    <img src={petCareImage} alt="Pet Care" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-petcare" />
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
                    <img src={photographyImage} alt="Photography" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-photography" />
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
                    <img src={beautyImage} alt="Beauty" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-3" />
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
                    <img src={mechanicsImage} alt="Mechanics" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-4" />
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
                    <img src={taxiImage} alt="Taxis" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-5" />
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
                    <img src={footballImage} alt="Football Clubs" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-6" />
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
                    <img src={mobileTraderImage} alt="Mobile Trader" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-7" />
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
                    <img src={groceryImage} alt="Grocery Stores" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-testid="img-industry-8" />
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
                  alt="Rocket Payments EPOS integration with 450+ point of sale systems"
                  loading="lazy"
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

      {/* Why Rocket — Consultant Positioning */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Rocket Payments</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                We work for you.<br className="hidden md:block" /> Not the payment network.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Most businesses go direct to a provider and accept whatever rate they're given. We sit on your side of the table — analysing your bill, matching the right product to your business, and making sure you're not overpaying.
              </p>
            </div>

            {/* Mortgage broker analogy */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8 md:p-10 mb-12 max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                "Think of us like a mortgage broker — except for your card payments. We don't work for the bank. We work for your business."
              </p>
            </div>

            {/* Value pillars grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Bill Analysis",
                  desc: "We analyse your current processing statement line by line. Most businesses are overpaying by 40–60% without realising. We show you exactly where."
                },
                {
                  icon: Zap,
                  title: "Cashflow Matching",
                  desc: "Faster settlement means money in your account sooner. For businesses watching cashflow closely, next-day settlement can be the difference."
                },
                {
                  icon: Cloud,
                  title: "Multi-Network Signal",
                  desc: "Our devices carry a multi-network SIM — automatically switching between networks. Essential for outdoor markets, remote venues, and mobile businesses."
                },
                {
                  icon: Shield,
                  title: "P2PE Compliance — 2 Steps",
                  desc: "Point-to-point encryption means your annual compliance questionnaire shrinks from 300 questions to just 2. We handle the rest."
                },
                {
                  icon: Sparkles,
                  title: "Insight & Analytics",
                  desc: "Real-time transaction data, staff performance, and sales trends in a clean app. Know your business as well as your best accountant does."
                },
                {
                  icon: CheckCircle,
                  title: "Right Product, Right Business",
                  desc: "A market trader needs something different from a restaurant or a salon. We match device, rate structure, and integration to your specific operation."
                }
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-background rounded-xl border p-6 space-y-3 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/calculate-savings">
                <Button size="lg" className="rounded-full px-10 py-6 text-lg font-bold">
                  Get your free bill analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
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
                <Link href="/calculate-savings">
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
      </div>{/* end overflow-x:clip wrapper */}
    </>
  );
}
