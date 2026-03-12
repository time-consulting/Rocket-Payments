import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, Smartphone, Code, CreditCard, Clock, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SEO, serviceSchemas } from "@/components/SEO";

import customerImage from "@assets/810x750 (1)_1761940740068.webp";
import encryptedImage from "@assets/810x750_1761940740068.webp";
import integrationsImage from "@assets/1080x708_1761940740069.webp";

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

export default function OnlinePayments() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Online Payments | Ecommerce Payment Gateway UK | Rocket Payments"
        description="Easy online payment integration for your website or app. Accept all major cards, Apple Pay & Google Pay. PCI compliant, fraud protected. 50+ partner integrations. No rebuild required."
        keywords="online payments UK, ecommerce payment gateway, payment integration, online card processing, WooCommerce payments, website payments, secure checkout"
        canonical="https://rocketpayments.co.uk/online-payments"
        structuredData={serviceSchemas.paymentGateway}
      />
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Easy online payments,<br />expertly delivered
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Easily integrate your website or app with our online payments. No rebuild, no stress. So you can focus less on reconciliation and more on what counts – creating memorable customer experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <Link href="/calculate-savings">
                <Button size="lg" className="text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reduce Admin Section */}
      <section className="py-32 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                  Reduce end-of-day admin
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Save time with simplified reconciliation. Consolidate your face-to-face and online payments – use our app to view and manage them all in one place.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-primary/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={customerImage}
                  alt="Reduce admin time"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Easy Integration Section */}
      <section className="py-32 md:py-40 bg-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={300}>
              <div className="space-y-6 lg:order-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                  Enjoy easy integration
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Keep your current website – and enhance your online experience. Get ready-made shopping cart plug-ins and integrate with over 50 partners for click and collect, online ordering, and ticketing solutions.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative group lg:order-1">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={integrationsImage}
                  alt="Easy integration with popular platforms"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Serve More Customers Section */}
      <section className="py-32 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                  Serve more customers
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Give your customers a smooth payment experience. Rely on Address Verification Services (AVS) to increase authorisation rates. Stay protected and prevent fraudulent transactions and chargebacks for your business with our behavioural analytics.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-primary/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={encryptedImage}
                  alt="Serve more customers securely"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-700"
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
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-center mb-16">
              Online payments designed for ease and innovation
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Keep your current setup",
                description: "We integrate with a range of partners, including Visisoft, Digitickets, and ICR Touch. From ticketing to click and collect solutions, keep your preferred supplier.",
                delay: 0
              },
              {
                icon: Code,
                title: "Save on dev costs, set up solo",
                description: "Take online payments with ease with ready-made plugins, like WooCommerce and PrestaShop for popular shopping carts. Easy to add to your app or website.",
                delay: 100
              },
              {
                icon: Lock,
                title: "Let our tech do the hard work",
                description: "We'll handle your transactions, fraud protection, and processing with online checkout. Customers get a smooth online payment experience on any device.",
                delay: 200
              },
              {
                icon: Smartphone,
                title: "Effortless payments, anywhere",
                description: "With mobile SDK, our API lets you embed secure payment functionalities into your app, so your customers can pay without leaving the app.",
                delay: 300
              },
              {
                icon: Clock,
                title: "Save time and customise",
                description: "Avoid building a checkout page from scratch by using our API. Build optimised payment journeys with semi-customisable options and components.",
                delay: 400
              },
              {
                icon: Zap,
                title: "Enhance your unique website",
                description: "Build optimised payment journeys with bespoke integration. Streamline checkout by removing redirects and take payments on your own branded page.",
                delay: 500
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={feature.delay}>
                <div className="group p-8 rounded-2xl hover-elevate transition-all duration-300 cursor-default space-y-4">
                  <div className="flex justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <feature.icon className="relative h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black">{feature.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
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
              More ways we boost your business
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CreditCard,
                title: "Accept all major payment types",
                description: "Ensure you capture every sale with multiple ways to pay. Process transactions from Mastercard, Visa, Amex, Discover, Diners Club, Apple Pay, and Google Pay.",
                delay: 0
              },
              {
                icon: Shield,
                title: "Award-winning customer support",
                description: "Rely on our stellar phone support and dedicated account management. We answer calls four times faster than competitors.",
                delay: 200
              },
              {
                icon: Lock,
                title: "PCI compliance and fraud protection",
                description: "Reduce fraud losses with around-the-clock protection. All our devices feature secure data encryption, which simplifies PCI compliance.",
                delay: 400
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={benefit.delay}>
                <Card className="p-8 space-y-4 hover-elevate transition-all duration-300 border-none shadow-lg">
                  <benefit.icon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-black">{benefit.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
              Switching made simple
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
              Sign up to Rocket Payments in just a few steps and enjoy a simple setup with no fixed contracts, an easy 2-step PCI compliance reporting process, and we could even cover your exit fees up to £3,000.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">*Subject to your annual card turnover.</p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Link href="/calculate-savings">
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
