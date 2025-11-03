import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Trophy, 
  Crown, 
  Star, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  Globe
} from "lucide-react";

import championHero from "@assets/champion - GO_1762164001426.png";
import championAlt from "@assets/The Innovator Pocket_1762164754335.png";
import rocketGoDevice from "@assets/rocket go device on stand - white bk_1761931715066.png";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name required"),
  contactName: z.string().min(2, "Your name required"),
  mobile: z.string().min(10, "Valid mobile number required"),
  email: z.string().email("Valid email required"),
});

type FormData = z.infer<typeof formSchema>;

// Animated counter component
function AnimatedCounter({ target, suffix = "", duration = 2000, isVisible }: { target: number; suffix?: string; duration?: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;
    
    hasAnimatedRef.current = true;
    const startTime = Date.now();
    const endTime = startTime + duration;
    const isDecimal = target < 10;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = target * easeOut;
      
      // For decimal numbers, keep one decimal place, otherwise use whole numbers
      setCount(isDecimal ? Math.round(currentValue * 10) / 10 : Math.floor(currentValue));

      if (now >= endTime) {
        setCount(target);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <>{count}{suffix}</>;
}

export default function Champion() {
  const [step, setStep] = useState(1);
  const [unveiled, setUnveiled] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const bannerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      mobile: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest("/api/free-terminal-lead", "POST", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/free-terminal-leads"] });
      setStep(3);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setUnveiled(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
      setScrollY(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Confetti cannon on banner scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !showConfetti) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        }
      },
      { threshold: 0.5 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, [showConfetti]);

  // Track visible sections for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('[data-animate]');
      
      // Check which sections are already visible on mount
      const initialVisibleSections = new Set<string>();
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 1.5 && rect.bottom > 0;
        if (isVisible && section.id) {
          initialVisibleSections.add(section.id);
        }
        observer.observe(section);
      });
      
      if (initialVisibleSections.size > 0) {
        setVisibleSections(initialVisibleSections);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const onSubmit = (data: FormData) => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      mutation.mutate(data);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-stone-50 to-amber-50/30 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200/30 dark:bg-stone-800/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 transition-all duration-150 shadow-lg shadow-amber-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll-following particle trail */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/60 rounded-full"
            style={{
              left: `${20 + (i * 5)}%`,
              top: `${Math.min(scrollY / 20 + i * 30, window.innerHeight - 50)}px`,
              transform: `translateY(${Math.sin(scrollY / 100 + i) * 20}px)`,
              opacity: Math.max(0, 1 - (scrollY / 2000)),
              transition: 'all 0.3s ease-out',
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-60 left-1/2 w-1 h-1 bg-amber-300/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Epic Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.15),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {/* Crown badge */}
            <div className="flex justify-center mb-6">
              <Badge className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-400 px-6 py-2 text-lg">
                <Crown className="w-5 h-5 mr-2" />
                The Undisputed Champion
              </Badge>
            </div>

            <h1 className="text-7xl lg:text-9xl font-black mb-6 bg-gradient-to-b from-amber-900 via-amber-700 to-yellow-600 bg-clip-text text-transparent dark:from-amber-100 dark:via-amber-300 dark:to-yellow-500">
              THE CHAMPION
            </h1>
            
            <p className="text-2xl lg:text-3xl font-bold text-stone-700 dark:text-stone-300 mb-8 max-w-4xl mx-auto">
              The Payment Terminal That Conquered The Industry
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Trophy, text: "#1 Rated Terminal" },
                { icon: Star, text: "99.99% Uptime" },
                { icon: Zap, text: "58% Faster" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-amber-100/80 dark:bg-amber-950/50 px-4 py-2 rounded-full border border-amber-300 dark:border-amber-700">
                  <item.icon className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                  <span className="font-bold text-stone-800 dark:text-stone-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Champion Image with Unveiling Effect + Parallax */}
          <div 
            className="relative max-w-5xl mx-auto mb-16"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 blur-3xl animate-pulse" />
            
            {/* Hero Image */}
            <div 
              className="relative"
              style={{
                transform: `translateY(${-scrollY * 0.05}px)`,
              }}
            >
              <img
                src={championHero}
                alt="The Champion Terminal"
                className={`relative w-full rounded-3xl shadow-2xl transition-all duration-2000 ${
                  unveiled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                data-testid="img-champion-hero"
              />
              
              {/* Smoke/Fabric Overlay - Clears from center outward */}
              <div 
                className={`absolute inset-0 rounded-3xl overflow-hidden pointer-events-none transition-opacity duration-1500 ${
                  unveiled ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {/* Multiple layers of smoke for depth */}
                <div className={`absolute inset-0 bg-gradient-radial from-stone-900/95 via-stone-800/85 to-transparent transition-all duration-2000 ${
                  unveiled ? 'scale-[3] opacity-0' : 'scale-100 opacity-100'
                }`} />
                <div className={`absolute inset-0 bg-gradient-radial from-amber-900/60 via-yellow-900/40 to-transparent transition-all duration-1800 delay-200 ${
                  unveiled ? 'scale-[2.5] opacity-0' : 'scale-100 opacity-100'
                }`} />
                <div className={`absolute inset-0 bg-gradient-radial from-stone-700/70 via-stone-600/50 to-transparent transition-all duration-1600 delay-400 ${
                  unveiled ? 'scale-[2] opacity-0' : 'scale-100 opacity-100'
                }`} />
                
                {/* Particle sweep effect */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-amber-400/60 rounded-full transition-all duration-1500 ${
                      unveiled ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      transitionDelay: `${i * 50}ms`,
                      transform: unveiled ? `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(0)` : 'translate(0, 0) scale(1)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Laurel wreath stats with animated counters */}
          <div 
            ref={statsRef}
            id="stats-section"
            data-animate
            className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              { value: 1.8, suffix: "bn", label: "Transactions Processed", icon: TrendingUp },
              { value: 120, suffix: "k", label: "Businesses Trust Us", icon: Users },
              { value: 450, suffix: "+", label: "EPOS Integrations", icon: Globe },
              { value: 3000, suffix: "", label: "Exit Cost Coverage", icon: Shield, prefix: "£" },
            ].map((stat, i) => (
              <Card 
                key={i} 
                className="p-6 text-center bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-stone-900/50 dark:to-amber-950/50 border-amber-200 dark:border-amber-800 hover-elevate transform transition-all duration-500 hover:scale-105 group"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-amber-600 dark:text-amber-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                <div className="text-4xl font-black text-amber-900 dark:text-amber-100 mb-1">
                  {stat.prefix || ""}
                  <AnimatedCounter 
                    target={stat.value} 
                    suffix={stat.suffix}
                    duration={2000}
                    isVisible={visibleSections.has("stats-section")}
                  />
                </div>
                <div className="text-sm font-semibold text-stone-600 dark:text-stone-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Victory Banner */}
      <section ref={bannerRef} className="py-12 px-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        {/* Confetti Cannon Effect */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(60)].map((_, i) => {
              const startX = Math.random() * 100;
              const horizontalMove = (Math.random() - 0.5) * 300;
              const duration = 1000 + Math.random() * 1000;
              const delay = i * 15;
              const colors = ['bg-amber-400', 'bg-yellow-300', 'bg-amber-200', 'bg-yellow-500', 'bg-white', 'bg-amber-600'];
              const color = colors[Math.floor(Math.random() * colors.length)];
              const size = 8 + Math.floor(Math.random() * 8);
              
              return (
                <div
                  key={i}
                  className={`absolute ${color} rounded-full shadow-lg`}
                  style={{
                    left: `${startX}%`,
                    bottom: '0%',
                    width: `${size}px`,
                    height: `${size}px`,
                    animation: `confettiFall ${duration}ms ease-out ${delay}ms forwards`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: 0,
                    // @ts-ignore
                    '--confetti-x': `${horizontalMove}px`,
                  }}
                />
              );
            })}
          </div>
        )}
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Award className={`w-16 h-16 text-white transition-transform duration-500 ${showConfetti ? 'scale-125 rotate-12' : ''}`} />
          </div>
          <h2 className={`text-5xl lg:text-7xl font-black mb-4 transition-all duration-500 relative ${showConfetti ? 'scale-110' : ''}`}>
            <span className="text-white">VICTOR OMNIUM</span>
            <span className="absolute inset-0 shimmer-text">VICTOR OMNIUM</span>
          </h2>
          <p className="text-2xl font-bold text-amber-100">Victory For All Who Choose Excellence</p>
        </div>
      </section>

      {/* Why The Champion Reigns Supreme */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black text-center mb-4 text-stone-900 dark:text-stone-100">
            Why The Champion <span className="text-amber-600 dark:text-amber-400">Reigns Supreme</span>
          </h2>
          <p className="text-xl text-center text-stone-600 dark:text-stone-400 mb-16 max-w-3xl mx-auto">
            Not all terminals are created equal. Here's why the Rocket Go stands alone at the top.
          </p>

          <div 
            id="features-section"
            data-animate
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {[
              {
                icon: Zap,
                title: "Lightning Speed Processing",
                description: "58% faster than competitors. Every millisecond matters when customers are waiting.",
                stat: "0.8s avg",
              },
              {
                icon: Shield,
                title: "Fortress-Grade Security",
                description: "Military-level encryption protects every transaction. Your customers' trust is priceless.",
                stat: "Bank-level",
              },
              {
                icon: TrendingUp,
                title: "Unbeatable Uptime",
                description: "99.99% reliability means you never miss a sale. The champion never sleeps.",
                stat: "99.99%",
              },
              {
                icon: Trophy,
                title: "Industry-Leading Rates",
                description: "Save 33% on processing fees. Champions help you win, not drain your profits.",
                stat: "Save 33%",
              },
            ].map((feature, i) => (
              <Card 
                key={i} 
                className={`p-8 bg-gradient-to-br from-white to-amber-50/30 dark:from-stone-900 dark:to-amber-950/30 border-2 border-amber-200 dark:border-amber-800 hover-elevate card-3d ${visibleSections.has("features-section") ? 'light-sweep' : ''}`}
                style={{
                  animation: visibleSections.has("features-section") ? `staggerFadeIn 0.6s ease-out ${i * 150}ms forwards` : 'none',
                  opacity: visibleSections.has("features-section") ? 1 : 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-black text-stone-900 dark:text-stone-100">{feature.title}</h3>
                      <Badge className="bg-amber-600 text-white font-bold">{feature.stat}</Badge>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Product showcase */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/10 via-yellow-300/10 to-amber-400/10 blur-2xl" />
            <img
              src={championAlt}
              alt="The Innovator - Rocket Go terminal on champion pedestal with Roman columns and VICTOR OMNIUM banners"
              className="relative w-full rounded-3xl shadow-2xl"
              data-testid="img-champion-alt"
            />
          </div>
        </div>
      </section>

      {/* The Champion's Arsenal */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50/50 to-stone-50 dark:from-stone-950 dark:to-stone-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black text-center mb-16 text-stone-900 dark:text-stone-100">
            The Champion's <span className="text-amber-600 dark:text-amber-400">Arsenal</span>
          </h2>

          <div 
            id="arsenal-section"
            data-animate
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Free Premium Terminal",
                value: "£189",
                description: "Worth £189. Yours for £0. Champions reward loyalty.",
                icon: Trophy,
              },
              {
                title: "Zero Monthly Fees",
                value: "£0/mo",
                description: "No rental. No contracts. No surrender to hidden fees.",
                icon: Crown,
              },
              {
                title: "Exit Cost Coverage",
                value: "£3,000",
                description: "We'll cover up to £3,000 of your old provider's exit fees.",
                icon: Shield,
              },
              {
                title: "12-Month Price Lock",
                value: "Guaranteed",
                description: "Your rates won't change. A champion's word is iron.",
                icon: CheckCircle,
              },
              {
                title: "450+ Integrations",
                value: "Seamless",
                description: "Works with any EPOS system. Champions adapt to you.",
                icon: Sparkles,
              },
              {
                title: "48-Hour Setup",
                value: "Lightning",
                description: "Fastest deployment in the industry. Victory waits for no one.",
                icon: Zap,
              },
            ].map((benefit, i) => (
              <Card 
                key={i} 
                className={`p-6 text-center bg-white/80 dark:bg-stone-900/80 backdrop-blur border-2 border-amber-200 dark:border-amber-800 hover-elevate card-3d ${visibleSections.has("arsenal-section") ? 'light-sweep' : ''}`}
                style={{
                  animation: visibleSections.has("arsenal-section") ? `staggerFadeIn 0.6s ease-out ${i * 100}ms forwards` : 'none',
                  opacity: visibleSections.has("arsenal-section") ? 1 : 0,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black mb-2 text-stone-900 dark:text-stone-100">{benefit.title}</h3>
                <div className="text-3xl font-black text-amber-600 dark:text-amber-400 mb-3">{benefit.value}</div>
                <p className="text-sm text-stone-600 dark:text-stone-400">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join The Champions */}
      <section id="claim-form" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-yellow-50/30 to-amber-100/30 dark:from-amber-950/30 dark:via-stone-900 dark:to-amber-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.2),transparent_60%)]" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-4 text-stone-900 dark:text-stone-100">
              Join The <span className="text-amber-600 dark:text-amber-400">Champions</span>
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 mb-4">
              Claim your throne. Get the champion terminal today.
            </p>
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
              Takes 60 seconds • We'll call you back today
            </p>
          </div>

          {step < 3 ? (
            <Card className="p-8 bg-white/90 dark:bg-stone-900/90 backdrop-blur shadow-2xl border-2 border-amber-200 dark:border-amber-800">
              <div className="flex justify-between mb-8">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-3 rounded-full mx-1 transition-all ${
                      s <= step ? "bg-gradient-to-r from-amber-500 to-yellow-600" : "bg-stone-200 dark:bg-stone-700"
                    }`}
                  />
                ))}
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
                      <h3 className="text-2xl font-black text-stone-900 dark:text-stone-100">Step 1: Your Details</h3>
                      
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-bold">Business Name *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Your Business Ltd"
                                className="text-lg h-14 border-2 border-amber-200 dark:border-amber-800 focus:border-amber-500"
                                data-testid="input-business-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-bold">Your Name *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="John Smith"
                                className="text-lg h-14 border-2 border-amber-200 dark:border-amber-800 focus:border-amber-500"
                                data-testid="input-contact-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
                      <h3 className="text-2xl font-black text-stone-900 dark:text-stone-100">Step 2: Contact Info</h3>
                      
                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-bold">Mobile Number *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="07XXX XXXXXX"
                                type="tel"
                                className="text-lg h-14 border-2 border-amber-200 dark:border-amber-800 focus:border-amber-500"
                                data-testid="input-mobile"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-bold">Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="you@business.com"
                                type="email"
                                className="text-lg h-14 border-2 border-amber-200 dark:border-amber-800 focus:border-amber-500"
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-xl py-8 rounded-full font-black shadow-2xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white border-2 border-amber-400"
                    disabled={mutation.isPending}
                    data-testid="button-submit"
                  >
                    {mutation.isPending ? "Processing..." : step === 1 ? "Continue" : "Claim Your Champion"}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>

                  {step > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep(step - 1)}
                      className="w-full"
                      data-testid="button-back"
                    >
                      Back
                    </Button>
                  )}
                </form>
              </Form>

              <p className="text-xs text-center text-stone-500 dark:text-stone-400 mt-6">
                Free terminal offer subject to qualification
              </p>
            </Card>
          ) : (
            <Card className="p-12 text-center bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 border-2 border-amber-300 dark:border-amber-700">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-4 text-stone-900 dark:text-stone-100">Welcome, Champion!</h3>
              <p className="text-xl text-stone-600 dark:text-stone-400 mb-6">
                Your journey to payment excellence begins now.
              </p>
              <p className="text-lg font-semibold text-amber-700 dark:text-amber-400">
                We'll call you within 24 hours to set up your champion terminal.
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* Final Glory Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            The Choice Of Champions
          </h2>
          <p className="text-xl text-amber-100">
            Join 50,000+ businesses who chose excellence. Choose the champion.
          </p>
        </div>
      </section>
    </div>
  );
}
