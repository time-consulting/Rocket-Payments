import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Shield, TrendingUp, CreditCard, Clock, CheckCircle2, Settings, Phone, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SEO, serviceSchemas } from "@/components/SEO";

import integrationChecklistImage from "@assets/filters_focal(532x546_533x547)_1761942642537.webp";
import takingsReportImage from "@assets/filters_focal(540x440_541x441)_1761942642538.webp";
import revenueGrowthImage from "@assets/filters_focal(549x440_550x441)_1761942642538.webp";

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

export default function Integrations() {
  return (
    <>
      <SEO
        title="EPOS Integrations | Connect Card Machine to Your Till System"
        description="Integrate Rocket card machines with 600+ EPOS systems. Quick setup, uninterrupted payments, and simplified cashing up. Works with your preferred EPOS provider."
        canonical="https://rocketpayments.co.uk/integrations"
        keywords="EPOS integration, card machine EPOS, payment terminal integration, integrated payments UK, connect card machine to till, EPOS compatible card reader"
        structuredData={serviceSchemas.merchantServices}
      />
      <div className="min-h-screen bg-background">
      {/* Cinematic Hero */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb,59,130,246),0.25),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--primary-rgb,59,130,246),0.2),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_60%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 shadow-xl animate-in fade-in slide-in-from-top-4 duration-700">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-black tracking-wide text-primary">INTEGRATED PAYMENTS</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter">
                Connect your card machine to your EPOS
              </h1>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-tight">
                Optimise service and improve accuracy with integrated payments
              </p>
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <Link href="/calculate-savings">
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Increase Efficiency Hero Image */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Increase efficiency, effortlessly
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Connect your Rocket card machine to your EPOS system in the cloud and say goodbye to entering transactions manually on your card machine.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-12 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
              <img
                src={integrationChecklistImage}
                alt="Integrated payments features"
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700 border border-border/50"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="text-center mt-16 max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                With an integrated payments experience, you can <span className="font-black text-foreground">increase staff efficiency</span> and <span className="font-black text-foreground">reduce mistakes</span> – and enjoy smoother end-of-day reconciliations. Plus, you can keep your current setup and work with your preferred supplier – with over <Link href="/epos-partners" className="font-black text-primary hover:underline">600 partners</Link>, you can choose the right solution for your business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Sections - Alternating Layout */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-40">
          {/* Set Up in Minutes */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-pulse" />
                  <span className="text-sm font-black text-blue-600 dark:text-blue-400">Quick Setup</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                  Set up in minutes
                </h2>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Connecting your card machine and EPOS only takes a <span className="font-black text-foreground">few minutes</span>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We'll send you your integration details, and your EPOS provider will help you get set up either on-site or remotely. So you'll be trading in no time.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={takingsReportImage}
                  alt="Quick integration setup"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700 border border-border/50"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Enjoy Uninterrupted Payments */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:order-1">
              <AnimatedSection delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img
                    src={revenueGrowthImage}
                    alt="Uninterrupted payment processing"
                    className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700 border border-border/50"
                  />
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:order-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                    <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-black text-green-600 dark:text-green-400">Always On</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                    Enjoy uninterrupted payments
                  </h2>
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Take secure payments from customers, <span className="font-black text-foreground">even when your EPOS system goes down</span>.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Easily switch between integrated and non-integrated modes in your Rocket card machine and ensure continuous cash-flow, with independent but integrated devices.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Protect your profits.<br />Optimise cashing up.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Streamline your operations and save valuable time
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <AnimatedSection delay={100}>
              <Card className="group relative p-10 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-xl overflow-hidden h-full bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-black">Protect your profits</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Just tap the amount into your EPOS, and the transaction is pushed directly to your card machine. You don't have to enter the amount on both devices.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group relative p-10 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-xl overflow-hidden h-full bg-gradient-to-br from-orange-500/10 to-orange-500/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-3xl font-black">Optimise cashing up</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Increase accuracy and save valuable time with integrated payments. Because payments are pushed from one device to the other, cash and card takings will automatically add up.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Simplify Payments - Feature Grid */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center mb-20">
              Simplify your payments
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Market-leading security",
                description: "Enjoy peace of mind and simplified PCI compliance with secure data encryption on all Rocket devices.",
                gradient: "from-blue-500/10 to-blue-500/5",
                iconBg: "bg-blue-500/10",
                iconColor: "text-blue-600 dark:text-blue-400",
                delay: 0
              },
              {
                icon: Zap,
                title: "Automatic software updates",
                description: "Integrated payments updates automatically so you'll get the latest features and improvements without lifting a finger.",
                gradient: "from-green-500/10 to-green-500/5",
                iconBg: "bg-green-500/10",
                iconColor: "text-green-600 dark:text-green-400",
                delay: 100
              },
              {
                icon: TrendingUp,
                title: "Scalable to your needs",
                description: "Choose the right setup for your business – connect as many card machines to as many EPOS systems as you like.",
                gradient: "from-purple-500/10 to-purple-500/5",
                iconBg: "bg-purple-500/10",
                iconColor: "text-purple-600 dark:text-purple-400",
                delay: 200
              },
              {
                icon: CheckCircle2,
                title: "Uninterrupted payments",
                description: "Switch to non-integrated mode in your settings if your EPOS system goes down. Then simply key in the transaction on your card machine.",
                gradient: "from-orange-500/10 to-orange-500/5",
                iconBg: "bg-orange-500/10",
                iconColor: "text-orange-600 dark:text-orange-400",
                delay: 300
              },
              {
                icon: Settings,
                title: "No additional hardware",
                description: "We're partnered with over 600 leading EPOS providers. View our EPOS partners for a complete list.",
                gradient: "from-pink-500/10 to-pink-500/5",
                iconBg: "bg-pink-500/10",
                iconColor: "text-pink-600 dark:text-pink-400",
                delay: 400
              },
              {
                icon: Phone,
                title: "7-day tech support",
                description: "We hope you'll never need us. But if you do, our technical experts are here to help – seven days a week, 8am to 11pm.",
                gradient: "from-cyan-500/10 to-cyan-500/5",
                iconBg: "bg-cyan-500/10",
                iconColor: "text-cyan-600 dark:text-cyan-400",
                delay: 500
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={feature.delay}>
                <Card className={`group relative p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-lg overflow-hidden h-full bg-gradient-to-br ${feature.gradient}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative space-y-5">
                    <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-black">{feature.title}</h3>
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

      {/* Testimonial Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <Card className="relative p-12 md:p-16 rounded-3xl border-none shadow-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-50" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl opacity-50" />
              <div className="relative">
                <Sparkles className="h-12 w-12 text-primary mb-8 animate-pulse" />
                <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
                  "Integrated payments has made running the restaurant an absolute joy. We're able to turn tables fast and cash up at the end of the day even faster. Our staff love it!"
                </blockquote>
                <p className="text-lg text-muted-foreground">— Restaurant Owner</p>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA - Cinematic */}
      <section className="relative py-40 md:py-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-primary-foreground tracking-tight">
                Get integrated payments
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Sign up now to enhance efficiency and reduce mistakes.
              </p>
              
              <div className="pt-8">
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
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
    </>
  );
}
