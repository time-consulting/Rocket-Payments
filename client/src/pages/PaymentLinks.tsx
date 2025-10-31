import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Lock, CheckCircle, CreditCard, Shield, MessageSquare, Zap, ArrowRight, Mail, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import shareLinksImage from "@assets/810x720_1761941137171.webp";
import phoneScreenImage from "@assets/tap to pay watch_1761941137172.webp";

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

export default function PaymentLinks() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-in fade-in slide-in-from-top-4 duration-700">
                <Send className="h-4 w-4 text-primary" />
                <span className="text-sm font-black text-primary">Remote Payments</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Send a link,<br />secure your payment
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Quick, simple, and secure. Take payments from your customers wherever they are – just share a unique link.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <Link href="/quote">
                <Button size="lg" className="text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Share Links Section with Image */}
      <section className="py-32 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                  Share unique links, instantly
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Send your link the way that works for you – using social media, messaging apps, or email. Your customer can pay with a card or digital wallet.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">Email</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                    <Send className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">SMS</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={shareLinksImage}
                  alt="Share payment links via messaging apps"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Phone Screen Section */}
      <section className="py-32 md:py-40 bg-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={300} className="lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 to-primary/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={phoneScreenImage}
                  alt="Payment link interface on mobile"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:order-2">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                  Get paid in a few simple steps
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  In just a few clicks, you can create a payment link, share with a customer, and land them on a secure checkout page.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-sm font-black text-primary-foreground">1</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base leading-relaxed">Create a payment link in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-sm font-black text-primary-foreground">2</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base leading-relaxed">Share via your preferred channel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-sm font-black text-primary-foreground">3</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base leading-relaxed">Customer pays securely</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sell Online CTA Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
              <CreditCard className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
              Sell online at no extra cost
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Get started in the world of ecommerce, effortlessly. Payment links are an easy way to take online payments without investing in a website.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-center mb-4">
              Your link to getting paid
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Discover how payment links work for you
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Clear transaction breakdowns",
                description: "Manage all your payments from one place. See your payment links alongside all your transactions in your Rocket account feed.",
                delay: 0
              },
              {
                icon: Lock,
                title: "Reduce the risk of fraud",
                description: "All payments you accept are authenticated using Strong Customer Authentication, protecting you and your business from fraudulent payments.",
                delay: 100
              },
              {
                icon: Zap,
                title: "Create links to suit your needs",
                description: "Add info to each link, edit its value, insert comments or transaction descriptions. And if something goes wrong, just cancel the link.",
                delay: 200
              },
              {
                icon: MessageSquare,
                title: "Reach your customers, wherever",
                description: "Create payment links from your phone or laptop with ease – no need for your card machine.",
                delay: 300
              },
              {
                icon: CreditCard,
                title: "Hold funds in advance",
                description: "If your business takes reservations, you could benefit from pre-authorised transactions. It's a way of holding a balance in advance – like a deposit.",
                delay: 400
              },
              {
                icon: CheckCircle,
                title: "Personalise your payment link",
                description: "Add your business logo to payment links – it's a great way to build trust and increase brand recognition.",
                delay: 500
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={feature.delay}>
                <Card className="group p-8 rounded-2xl hover-elevate transition-all duration-300 cursor-default space-y-4 border-none shadow-lg h-full">
                  <div className="flex justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-black">{feature.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-center mb-16">
              More reasons to rely on our payments
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Get help when you need it",
                description: "Our technical support team is here to help 24/7 – 90% of issues are fixed in minutes. Speak to account support every day from 8am to 11pm.",
                delay: 0
              },
              {
                icon: Lock,
                title: "Simplify PCI compliance",
                description: "All Rocket devices feature secure data encryption which simplifies PCI compliance. Plus, reduce fraud losses with around-the-clock protection.",
                delay: 200
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={benefit.delay}>
                <div className="group p-8 rounded-2xl hover-elevate transition-all duration-300 space-y-4 bg-gradient-to-br from-muted/50 to-background border border-border">
                  <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-black">{benefit.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-16">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-center">
              How to create payment links
            </h2>
          </AnimatedSection>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />
            
            <div className="space-y-8">
              <AnimatedSection delay={100}>
                <div className="flex gap-6 items-start p-8 rounded-2xl hover-elevate transition-all duration-300 bg-card border border-border shadow-lg">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-black text-primary-foreground">1</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-black mb-2">Log in to your account</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Access your Rocket account and navigate to "Payment links" in the "Account" section.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="flex gap-6 items-start p-8 rounded-2xl hover-elevate transition-all duration-300 bg-card border border-border shadow-lg">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-black text-primary-foreground">2</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-black mb-2">Create your link</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Click 'Create a payment link' and add the desired payment amount and description.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex gap-6 items-start p-8 rounded-2xl hover-elevate transition-all duration-300 bg-card border border-border shadow-lg">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-black text-primary-foreground">3</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-black mb-2">Share and get paid</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      A custom URL will be created for you to share via WhatsApp, social media, or text message.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10 relative z-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
              Switching made simple
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
              Switching payments providers has never been easier. Sign up to Rocket Payments in just a few steps and enjoy a simple setup, an easy 2-step PCI compliance reporting process – and we could even cover your exit fees up to £3,000.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">*Subject to your annual card turnover.</p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Link href="/quote">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
