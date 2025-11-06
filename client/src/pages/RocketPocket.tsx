import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Wifi, CreditCard, Lock, Zap, Cloud, ArrowRight, Check, Sparkles, Star, Clock, TrendingUp } from "lucide-react";

import heroImage from "@assets/pocket rocket_1761928695213.png";
import ordersPaymentsImage from "@assets/rocket pocket_1761931985667.png";
import stockTabsImage from "@assets/pocket 2_1761931985666.png";
import paymentsVideo from "@assets/payments_1761932474462.mp4";
import qrPaymentImage from "@assets/pocket Pay by QR_1761932960876.png";
import plainSailingImage from "@assets/Gemini_Generated_Image_56kibq56kibq56ki_1761932343908.png";
import qsrImage from "@assets/pocket - verticle restaurant_1761933636531.png";
import fsrImage from "@assets/pocket - vert pub_1761933756665.png";
import rocketGoImage from "@assets/Rocket Go_1761925244580.png";
import rocketWiredImage from "@assets/generated_images/Countertop_terminal_with_touchscreen_aa8d26cb.png";

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

function StickyImageSection({ 
  image, 
  title, 
  description, 
  features,
  reverse = false,
  videoSrc
}: { 
  image?: string;
  videoSrc?: string;
  title: string;
  description: string;
  features?: string[];
  reverse?: boolean;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start min-h-screen">
      <div className={`lg:sticky lg:top-32 ${reverse ? 'lg:order-2' : ''}`}>
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl w-full h-auto shadow-2xl"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="rounded-3xl w-full h-auto shadow-2xl hover:scale-[1.02] transition-transform duration-700"
          />
        )}
      </div>
      
      <div className={`space-y-8 py-32 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        {features && (
          <div className="space-y-4 pt-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-lg leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function RocketPocket() {
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
      {/* Epic Cinematic Hero */}
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
              <span className="text-sm font-black tracking-wide text-primary">ORDERS + PAYMENTS IN ONE</span>
            </div>

            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000"
              data-testid="text-hero-headline"
              style={{ transform: `translateY(${heroParallax}px)` }}
            >
              Rocket<br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Pocket
              </span>
            </h1>

            <p 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
            >
              The ultimate tableside powerhouse.<br />Cut queues. Boost revenue. Pure efficiency.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Link href="/calculate-savings">
                <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
                  Get started
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-20 animate-in fade-in zoom-in-95 duration-1000 delay-700">
            <img
              src={heroImage}
              alt="Rocket Pocket in action"
              className="rounded-3xl w-full max-w-5xl mx-auto shadow-2xl"
              style={{ transform: `translateY(${heroParallax * 0.3}px)` }}
            />
          </div>
        </div>
      </section>

      {/* Scrolling Stats Clock */}
      <section className="py-40 md:py-52 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                The numbers speak for themselves
              </h2>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    <CountUpNumber end={58} suffix="%" />
                  </div>
                  <p className="text-xl font-bold">Faster service</p>
                  <p className="text-base text-muted-foreground">Process payments and orders in seconds, not minutes</p>
                </div>

                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    <CountUpNumber end={2} />x
                  </div>
                  <p className="text-xl font-bold">More tables turned</p>
                  <p className="text-base text-muted-foreground">Serve more customers in the same time</p>
                </div>

                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    <CountUpNumber end={99} />.9%
                  </div>
                  <p className="text-xl font-bold">Uptime reliability</p>
                  <p className="text-base text-muted-foreground">Always on when you need it most</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky Scroll: Orders & Payments */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StickyImageSection
            image={ordersPaymentsImage}
            title="Orders. Payments. Easy."
            description="Forget endless trips to the till. Take orders and payments at the table and free your team to focus on creating great experiences."
            features={[
              "Send orders directly to the kitchen from anywhere",
              "Accept payments tableside in seconds",
              "No more queue bottlenecks at the till",
              "Staff stay where customers need them most"
            ]}
          />
        </div>
      </section>

      {/* Sticky Scroll: Stock Management */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StickyImageSection
            image={stockTabsImage}
            title="Keep tabs on stock"
            description="Get instant updates on out-of-stock products or menu items, with live data-sharing, and keep staff and customers in the know as they order."
            features={[
              "Real-time inventory updates across all devices",
              "Never disappoint customers with out-of-stock items",
              "Automatic menu synchronization",
              "Smart stock alerts when running low"
            ]}
            reverse
          />
        </div>
      </section>

      {/* Sticky Scroll: Instant Payments */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StickyImageSection
            videoSrc={paymentsVideo}
            title="No pay delays"
            description="Take payments instantly where your customers are so they can settle up without slowing down their day – and you can turn more tables."
            features={[
              "Accept all major cards and digital wallets",
              "Contactless payments up to any amount",
              "Split bills effortlessly at the table",
              "Digital receipts by email or QR code"
            ]}
          />
        </div>
      </section>

      {/* Sticky Scroll: POS Integration */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StickyImageSection
            image={plainSailingImage}
            title="Sync POS and payments"
            description="Serve more customers, cash up quicker, and make miskeying mistakes a thing of the past with seamless integration."
            features={[
              "Connects with 450+ EPOS systems",
              "Automatic order synchronization",
              "5-minute end-of-day reconciliation",
              "Eliminate manual entry errors"
            ]}
            reverse
          />
        </div>
      </section>

      {/* Feature Grid - Animated */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Built for hospitality excellence
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Every feature designed to make your business run smoother
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "8-hour battery", description: "All-day service without charging interruptions" },
              { icon: Wifi, title: "Dual connectivity", description: "Automatic switching between Wi-Fi and 4G" },
              { icon: CreditCard, title: "All payment types", description: "Cards, Apple Pay, Google Pay, Samsung Pay" },
              { icon: Lock, title: "Military-grade encryption", description: "Point-to-point security for every transaction" },
              { icon: Zap, title: "Lightning fast", description: "Process payments in under 2 seconds" },
              { icon: Cloud, title: "Cloud-based", description: "Real-time sync across all your devices" },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
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

      {/* Business Efficiency Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-12">
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Business efficiency<br />in your back pocket
                </h2>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-black">Receipts reduced</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed pl-15">
                      Cut down on customer wait time with a paperless experience that streamlines staff admin. Display the bill on screen and offer digital receipts by email or QR code.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-black">Secure, safe, strong</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed pl-15">
                      Rocket Pocket features secure data encryption ensuring your customer data is always safe. Plus, rely on instant fraud detection to protect you and your customers.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-black">Flexible payments, seamless service</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed pl-15">
                      Let customers pay however suits them best. Rocket Pocket accepts all major cards using contactless payments, as well as mobile wallets like Apple Pay and Google Pay.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <img
                src={qrPaymentImage}
                alt="Business efficiency"
                className="rounded-3xl w-full h-auto shadow-2xl hover:scale-[1.02] transition-transform duration-700"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industry Showcase - Cinematic */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Perfect for hospitality
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Designed for restaurants, bars, and cafés where every second counts
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection delay={0}>
              <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={qsrImage} 
                    alt="Quick-service restaurants" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-black">Quick-service restaurants</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Take orders at the counter or tableside, send them straight to the kitchen, and process payments all from one device.
                  </p>
                  <Link href="/industries">
                    <Button variant="outline" className="rounded-full group-hover:scale-105 transition-transform">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={fsrImage} 
                    alt="Full-service restaurants" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-black">Full-service restaurants</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Enhance tableside service with orders and payments in one sleek device. Split bills, add tips, and create memorable experiences.
                  </p>
                  <Link href="/industries">
                    <Button variant="outline" className="rounded-full group-hover:scale-105 transition-transform">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Products - Apple Style */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Explore the Rocket family
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection delay={0}>
              <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full">
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 p-12 flex items-center justify-center overflow-hidden">
                  <img 
                    src={rocketGoImage} 
                    alt="Rocket Go" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-black">Rocket Go</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Take ultra-fast, secure card payments anywhere. Portable, reliable, and with built-in Wi-Fi and 4G for truly mobile payments.
                  </p>
                  <Link href="/products/rocket-go">
                    <Button variant="outline" className="rounded-full group-hover:scale-105 transition-transform">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full">
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 p-12 flex items-center justify-center overflow-hidden">
                  <img 
                    src={rocketWiredImage} 
                    alt="Rocket Wired" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-black">Rocket Wired</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Our wired-in card machine for stationary countertop payments. No charging, no staff – just intuitive, integrated payments.
                  </p>
                  <Link href="/products/rocket-wired">
                    <Button variant="outline" className="rounded-full group-hover:scale-105 transition-transform">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedSection>
          </div>
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
                Ready to transform<br />your service?
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Get started with Rocket Pocket and see how one device can revolutionize the way you take orders and payments.
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
