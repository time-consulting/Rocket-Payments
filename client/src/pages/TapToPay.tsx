import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Smartphone, CreditCard, Lock, Download, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImage from "@assets/tap to pay hero_1761939459439.webp";
import watchImage from "@assets/tap to pay watch_1761939459439.webp";
import cardTapImage from "@assets/2400x1040_1761939495759.webp";

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

function FloatingImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`transition-transform duration-200 ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}

export default function TapToPay() {
  return (
    <div className="min-h-screen bg-background">
      {/* Headline Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-16 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000" 
            data-testid="text-hero-headline"
          >
            Tap to Pay<br />on iPhone
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Your iPhone is all you need to accept contactless payments.
          </p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={heroImage}
                  alt="Tap to Pay on iPhone"
                  className="relative w-full max-w-5xl h-auto object-contain rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* No Hardware Needed Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
              No card reader.<br />No extra hardware.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Just download the app, sign in, and start accepting contactless payments with your iPhone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Watch Payment Feature */}
      <section className="py-20 md:py-32 bg-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-center mb-16">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={watchImage}
                  alt="Accept payments from Apple Watch"
                  className="relative w-full max-w-2xl h-auto rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                Accept all contactless payments
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Contactless cards, Apple Pay, Google Pay, and all major mobile wallets. Every tap, chip, and swipe works seamlessly.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Card Tap Feature */}
      <section className="py-32 md:py-40 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-center mb-16">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 to-primary/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={cardTapImage}
                  alt="Contactless card payment"
                  className="relative w-full max-w-4xl h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                Fast. Secure. Simple.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Built on Apple's secure platform with end-to-end encryption. Card data never touches your device.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <AnimatedSection delay={0}>
              <div className="space-y-4 text-center group cursor-default">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Smartphone className="relative h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black">No hardware</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Your iPhone is all you need to accept payments anywhere.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="space-y-4 text-center group cursor-default">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Download className="relative h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black">5-minute setup</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Download the app and start accepting payments instantly.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="space-y-4 text-center group cursor-default">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Lock className="relative h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black">Secure by design</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Built on Apple's trusted payment technology.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-12">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
              Perfect for businesses<br />on the move
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 pt-8 text-left">
            <AnimatedSection delay={100}>
              <div className="space-y-3 p-6 rounded-2xl hover-elevate transition-all duration-300 cursor-default">
                <h3 className="text-xl font-black">Market stalls</h3>
                <p className="text-base text-muted-foreground">
                  Accept payments at farmers markets and outdoor events.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="space-y-3 p-6 rounded-2xl hover-elevate transition-all duration-300 cursor-default">
                <h3 className="text-xl font-black">Pop-up shops</h3>
                <p className="text-base text-muted-foreground">
                  Take your store anywhere without heavy equipment.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="space-y-3 p-6 rounded-2xl hover-elevate transition-all duration-300 cursor-default">
                <h3 className="text-xl font-black">Deliveries</h3>
                <p className="text-base text-muted-foreground">
                  Process payments on the spot during deliveries.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-12">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
              What you need
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 pt-8 text-left max-w-2xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="space-y-2 p-6 rounded-2xl hover-elevate transition-all duration-300">
                <h3 className="text-lg font-black">iPhone XS or later</h3>
                <p className="text-base text-muted-foreground">
                  With NFC capability
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="space-y-2 p-6 rounded-2xl hover-elevate transition-all duration-300">
                <h3 className="text-lg font-black">iOS 15.5+</h3>
                <p className="text-base text-muted-foreground">
                  Keep your iPhone updated
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="space-y-2 p-6 rounded-2xl hover-elevate transition-all duration-300">
                <h3 className="text-lg font-black">Rocket Payments app</h3>
                <p className="text-base text-muted-foreground">
                  Free from the App Store
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="space-y-2 p-6 rounded-2xl hover-elevate transition-all duration-300">
                <h3 className="text-lg font-black">Internet connection</h3>
                <p className="text-base text-muted-foreground">
                  Wi-Fi or cellular data
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
              Get started today
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Download the app. Sign in. Start accepting payments.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Link href="/quote">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" 
                data-testid="button-cta-get-started"
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
