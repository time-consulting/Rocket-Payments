import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, CreditCard, BarChart3, Settings, FileText, ArrowRight, Zap, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import hubPhonesImage from "@assets/2400x1118_1761941919387.png";
import insightPhoneImage from "@assets/hero_1761941919388.webp";
import manageUsersImage from "@assets/Gemini_Generated_Image_ms12d6ms12d6ms12_1761941962461.png";
import paymentVideo from "@assets/payments_1761941962462.mp4";

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

export default function Sidekick() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Apple-Style Hero */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full border border-primary/20 animate-in fade-in slide-in-from-top-4 duration-700">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-black tracking-wide text-primary">INTRODUCING</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tighter">
              Sidekick
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground max-w-4xl mx-auto leading-tight">
              Your powerful new digital business partner
            </p>
            
            <div className="pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Link href="/calculate-savings">
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
                >
                  Join Rocket
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Hero Image */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img
                src={hubPhonesImage}
                alt="Sidekick Hub Interface"
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Business Made Effortless */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8">
              Business made effortless
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
              From real-time insights that transform your understanding of your business, to managing day-to-day refunds, reconciliation, payments, and more, Sidekick makes running a business smoother and simpler – even across multiple locations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Take Any Payment with Video */}
      <section className="py-32 md:py-40 bg-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <CreditCard className="h-4 w-4 text-primary" />
                  <span className="text-sm font-black text-primary">All Payments</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                  Take any payment
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Face-to-face. Online. Remote. Take and manage payments all in one place.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 hover:scale-[1.02] transition-transform duration-700">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                    className={`w-full h-auto transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <source src={paymentVideo} type="video/mp4" />
                  </video>
                  {!videoLoaded && (
                    <div className="absolute inset-0 bg-muted/50 animate-pulse" />
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Understand Your Business */}
      <section className="py-32 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:order-1">
              <AnimatedSection delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img
                    src={insightPhoneImage}
                    alt="Business insights and analytics"
                    className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:order-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                    <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-black text-blue-600 dark:text-blue-400">Real-Time Insights</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                    Understand your business better
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Monitor your business performance in real-time, and use it to make the right calls to run your business from anywhere.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Effortless Admin */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                  <Settings className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-black text-green-600 dark:text-green-400">Simplified Management</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                  Effortless admin
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Manage everything – refunds, reconciliation, payments, and more – on one easy-to-use app.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={manageUsersImage}
                  alt="Effortless admin management"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center mb-8">
              Everything you need to manage your business
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              {
                icon: CreditCard,
                title: "Payments",
                description: "Create and send payment links, and accept phone payments securely, manage pre-authorised payments, and process refunds remotely.",
                gradient: "from-orange-500/10 to-orange-500/5",
                iconBg: "bg-orange-500/10",
                iconColor: "text-orange-600 dark:text-orange-400",
                delay: 0
              },
              {
                icon: FileText,
                title: "Reporting",
                description: "See real-time transactions, transfer statuses and history, and easily access taking reports and CSV files.",
                gradient: "from-blue-500/10 to-blue-500/5",
                iconBg: "bg-blue-500/10",
                iconColor: "text-blue-600 dark:text-blue-400",
                delay: 100
              },
              {
                icon: Zap,
                title: "Devices",
                description: "Easily order and return card machines and update supervisor codes.",
                gradient: "from-purple-500/10 to-purple-500/5",
                iconBg: "bg-purple-500/10",
                iconColor: "text-purple-600 dark:text-purple-400",
                delay: 200
              },
              {
                icon: Shield,
                title: "Accounts",
                description: "Take care of PCI compliance, view bills, and access the funding and credit you need to boost business.",
                gradient: "from-green-500/10 to-green-500/5",
                iconBg: "bg-green-500/10",
                iconColor: "text-green-600 dark:text-green-400",
                delay: 300
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={feature.delay}>
                <Card className={`group relative p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-xl overflow-hidden h-full bg-gradient-to-br ${feature.gradient}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative space-y-6">
                    <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-black">{feature.title}</h3>
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

      {/* Final CTA - Apple Style */}
      <section className="relative py-40 md:py-52 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-primary-foreground tracking-tight">
                Switching made simple
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto">
                Sign up to Rocket Payments in just a few steps and enjoy a simple setup, an easy 2-step PCI compliance reporting process, and we could even cover your exit fees up to £3,000.
              </p>
              
              <p className="text-lg text-primary-foreground/70">
                *Subject to your annual card turnover.
              </p>
              
              <div className="pt-8">
                <Link href="/calculate-savings">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    Join Rocket
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
