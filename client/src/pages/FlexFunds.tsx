import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, DollarSign, TrendingUp, Clock, Shield, CheckCircle2, ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import performanceImage from "@assets/1080x656 (1)_1761941488556.webp";
import approvedImage from "@assets/1080x656_1761941488556.webp";
import advanceAmountImage from "@assets/1080x978_1761941488557.webp";
import availableCapitalImage from "@assets/1080x980 (1)_1761941488557.webp";

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

export default function FlexFunds() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(var(--primary-rgb,59,130,246),0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 animate-in fade-in slide-in-from-top-4 duration-700 shadow-lg">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-black text-primary">Flex Funds</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.02] tracking-tight">
                Flex Funds
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground leading-tight">
                Keep your business moving with an always-on financial safety net
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Get fast, flexible access to cash when you need it most.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <Link href="/calculate-savings">
                <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50">
                  Get started
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Cards */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Quick approval & access",
                description: "Get approved fast with a 90% acceptance rate. Access your funds from week one.",
                gradient: "from-orange-500/10 to-orange-500/5",
                iconBg: "bg-orange-500/10",
                iconColor: "text-orange-600 dark:text-orange-400",
                delay: 0
              },
              {
                icon: DollarSign,
                title: "Fee-free portion, clear pricing",
                description: "Get part of your first advance fee free and enjoy clear, upfront pricing.",
                gradient: "from-green-500/10 to-green-500/5",
                iconBg: "bg-green-500/10",
                iconColor: "text-green-600 dark:text-green-400",
                delay: 100
              },
              {
                icon: RefreshCw,
                title: "Always-on funds",
                description: "Get ongoing access to funds – your available balance replenishes with every payment.",
                gradient: "from-blue-500/10 to-blue-500/5",
                iconBg: "bg-blue-500/10",
                iconColor: "text-blue-600 dark:text-blue-400",
                delay: 200
              },
              {
                icon: TrendingUp,
                title: "Revenue-based payments",
                description: "Automatic payments are tied to your daily sales – no fixed monthly amounts.",
                gradient: "from-purple-500/10 to-purple-500/5",
                iconBg: "bg-purple-500/10",
                iconColor: "text-purple-600 dark:text-purple-400",
                delay: 300
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={benefit.delay}>
                <Card className={`group relative p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-xl overflow-hidden h-full bg-gradient-to-br ${benefit.gradient}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative space-y-4">
                    <div className={`w-16 h-16 rounded-2xl ${benefit.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-black">{benefit.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Get Funds from Week One */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-black text-primary">Fast Access</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                  Get your funds from week one
                </h2>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Apply and get approved in minutes. Our partner, Liberis, approves <span className="font-black text-foreground">90% of merchants</span> that apply.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Access funds – up to <span className="font-black text-foreground">twice your monthly sales</span> – after just one week of transacting with us.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Quick to unlock and simple to manage, it's funding that's there whenever opportunity – or the unexpected – arrives.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                <img
                  src={advanceAmountImage}
                  alt="Choose your advance amount"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700 border border-border/50"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clear Pricing Section */}
      <section className="py-32 md:py-40 bg-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:order-1">
              <AnimatedSection delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img
                    src={approvedImage}
                    alt="Fee-free portion and clear pricing"
                    className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-700 border border-border/50"
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:order-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-black text-green-600 dark:text-green-400">Transparent Pricing</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                    Get a fee-free portion, enjoy clear pricing
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Make the most of your first advance with a <span className="font-black text-foreground">totally fee-free portion</span>, and then enjoy clear, upfront pricing on the rest.
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Plus, only pay for what you use – not on the full approved balance.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Pay, Replenish, Repeat */}
      <section className="py-32 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <RefreshCw className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="text-sm font-black text-blue-600 dark:text-blue-400">Continuous Access</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                  Pay, replenish, repeat
                </h2>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Every payment you make restores your available balance, giving you <span className="font-black text-foreground">constant access to extra cash</span>.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Rocket Flex Funds is designed so you can draw again and again, without reapplying.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={availableCapitalImage}
                  alt="Available capital refreshes automatically"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700 border border-border/50"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pay As You Earn */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:order-1">
              <AnimatedSection delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img
                    src={performanceImage}
                    alt="Performance-based payments"
                    className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-700 border border-border/50"
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:order-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                    <TrendingUp className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-black text-purple-600 dark:text-purple-400">Flexible Payments</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                    Pay as you earn every day
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Your automatic payments flex in line with your daily sales – so you <span className="font-black text-foreground">pay less when it's quiet</span>, and <span className="font-black text-foreground">more when business is booming</span>.
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      No fixed monthly payments. It's a smarter, stress-free way to manage cashflow that works with you.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                How it works
              </h2>
              <p className="text-xl text-muted-foreground">Get funding in 6 simple steps</p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Sign up when you join",
                description: "Your Payments Consultant can apply for Flex Funds on your behalf when you join Rocket.",
                delay: 0,
                color: "from-red-500/20 to-orange-500/20"
              },
              {
                number: "2",
                title: "Get approved in minutes",
                description: "90% of merchants with a card transaction history are approved by our partner Liberis.",
                delay: 100,
                color: "from-orange-500/20 to-yellow-500/20"
              },
              {
                number: "3",
                title: "Choose your split %",
                description: "Decide how much you pay as a fixed percentage of your daily sales.",
                delay: 200,
                color: "from-yellow-500/20 to-green-500/20"
              },
              {
                number: "4",
                title: "Sign your contract",
                description: "Once you've accepted your offer, Liberis will share your contract with you to sign.",
                delay: 300,
                color: "from-green-500/20 to-blue-500/20"
              },
              {
                number: "5",
                title: "Receive your funding",
                description: "After 7 days of transacting with Rocket, you'll receive your first drawdown in your bank account.",
                delay: 400,
                color: "from-blue-500/20 to-purple-500/20"
              },
              {
                number: "6",
                title: "Make payment, refresh balance",
                description: "Every day you'll automatically pay a fixed percentage. With every payment, your balance replenishes.",
                delay: 500,
                color: "from-purple-500/20 to-pink-500/20"
              }
            ].map((step) => (
              <AnimatedSection key={step.number} delay={step.delay}>
                <Card className={`group relative p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-lg overflow-hidden h-full bg-gradient-to-br ${step.color}`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl font-black text-primary-foreground">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_40%)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10">
          <AnimatedSection>
            <Sparkles className="h-16 w-16 text-primary-foreground mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
              Ready to get your financial safety net?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
              Let us know you're interested and we'll get in touch.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Link href="/calculate-savings">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                Get started
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
