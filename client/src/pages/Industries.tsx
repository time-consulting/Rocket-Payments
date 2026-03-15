import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Check, Zap, Coffee, ShoppingBag, Wrench } from "lucide-react";

import qsrImage from "@assets/generated_images/Quick_service_restaurant_bc0bbd4b.png";
import fsrImage from "@assets/generated_images/Full_service_restaurant_eb7f483a.png";
import dentalImage from "@assets/generated_images/Dental_office_payment_88d7359b.png";
import retailImage from "@assets/generated_images/Retail_store_checkout_665cbb72.png";

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

export default function Industries() {
  const serviceIndustries = [
    { name: "Hairdressers & Barbers", products: ["Rocket Go", "Tap to Pay"], icon: "✂️" },
    { name: "Beauty Salons", products: ["Rocket Go", "Rocket Pocket"], icon: "💅" },
    { name: "Cleaning Services", products: ["Rocket Go", "Tap to Pay"], icon: "🧹" },
    { name: "Repairs & Refurbishing", products: ["Rocket Go", "Rocket Wired"], icon: "🔧" },
    { name: "Locksmiths", products: ["Rocket Go", "Tap to Pay"], icon: "🔑" },
    { name: "Mechanics / Car Parts", products: ["Rocket Go", "Rocket Wired"], icon: "🚗" },
    { name: "Pet Care / Veterinary", products: ["Rocket Go", "Rocket Pocket"], icon: "🐾" },
    { name: "Taxis & Private Hire", products: ["Rocket Go", "Tap to Pay"], icon: "🚕" },
    { name: "Photography Studios", products: ["Rocket Go", "Tap to Pay"], icon: "📸" },
  ];

  const hospitalityIndustries = [
    { name: "Café / Coffee Shop", products: ["Rocket Go", "Rocket Pocket"], icon: "☕", image: qsrImage },
    { name: "Fast Food & Takeaways", products: ["Rocket Go", "Rocket Wired"], icon: "🍔", image: qsrImage },
    { name: "Drinking Places", products: ["Rocket Go", "Tap to Pay"], icon: "🍺" },
    { name: "Restaurants", products: ["Rocket Pocket", "Rocket Go"], icon: "🍽️", image: fsrImage },
    { name: "Attractions", products: ["Rocket Go", "Rocket Wired"], icon: "🎡" },
    { name: "Catering", products: ["Rocket Go", "Rocket Pocket"], icon: "🎪" },
    { name: "Sports & Leisure", products: ["Rocket Go", "Tap to Pay"], icon: "⚽" },
  ];

  const retailIndustries = [
    { name: "Groceries", products: ["Rocket Wired", "Rocket Go"], icon: "🛒", image: retailImage },
    { name: "Clothing & Accessories", products: ["Rocket Go", "Rocket Pocket"], icon: "👔", image: retailImage },
    { name: "Art & Crafts", products: ["Rocket Go", "Tap to Pay"], icon: "🎨" },
    { name: "Homeware", products: ["Rocket Go", "Rocket Wired"], icon: "🏠" },
    { name: "Pharmaceuticals", products: ["Rocket Wired", "Rocket Go"], icon: "💊", image: dentalImage },
    { name: "Electronics", products: ["Rocket Go", "Rocket Wired"], icon: "📱" },
    { name: "Hardware & DIY", products: ["Rocket Wired", "Rocket Go"], icon: "🔨" },
    { name: "Tobacco & Vaping", products: ["Rocket Wired", "Rocket Go"], icon: "🚬" },
    { name: "Miscellaneous Retail", products: ["Rocket Go", "Tap to Pay"], icon: "🏪" },
  ];

  const featuredIndustries = [
    {
      title: "Hospitality & Food Service",
      description: "Lightning-fast payments for busy restaurants, cafés, and bars. Process payments 58% faster during peak hours.",
      image: fsrImage,
      stats: "58% faster",
      products: ["Rocket Pocket", "Rocket Go"],
      gradient: "from-orange-500/15 to-orange-500/5",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      title: "Retail & Commerce",
      description: "Seamless checkout experiences with inventory integration. Reduce queue times and boost customer satisfaction.",
      image: retailImage,
      stats: "99.99% uptime",
      products: ["Rocket Wired", "Rocket Go"],
      gradient: "from-blue-500/15 to-blue-500/5",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Healthcare & Wellness",
      description: "Secure, compliant payment processing for dental practices, beauty salons, and veterinary clinics.",
      image: dentalImage,
      stats: "PCI compliant",
      products: ["Rocket Go", "Rocket Pocket"],
      gradient: "from-green-500/15 to-green-500/5",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-600 dark:text-green-400"
    },
  ];

  return (
    <>
      <SEO
        title="Industry Payment Solutions UK | Rocket Payments"
        description="Payment solutions for restaurants, retail, healthcare & services. Rates from 0.5%, free terminals & EPOS integration. Get a quote today."
        canonical="https://rocketpayments.co.uk/industries"
        keywords="restaurant payment Kent, retail card machine East Sussex, cafe card payment Brighton, pub card terminal Maidstone, salon payment Canterbury, takeaway card reader Hastings, small business payments Tunbridge Wells, EPOS integration Kent, Dojo alternative restaurant, business funding hospitality UK"
      />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Epic Cinematic Hero */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/15" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb,59,130,246),0.3),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--primary-rgb,59,130,246),0.25),transparent_40%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 shadow-xl">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-black tracking-wide text-primary">EVERY INDUSTRY. EVERY SECTOR.</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter max-w-5xl mx-auto" data-testid="text-industries-page-headline">
              Payment solutions<br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">built for your business</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground leading-tight max-w-4xl mx-auto">
              From coffee shops to car mechanics. From retail to restaurants. We've got you covered.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4 justify-center">
              <Link href="/calculate-savings">
                <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
                  Get started
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="text-xl px-12 py-7 rounded-full hover:scale-105 transition-all duration-300">
                  View products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Industry Showcases */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Trusted across industries
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Purpose-built payment solutions for every sector
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredIndustries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className={`group relative rounded-3xl overflow-hidden hover-elevate transition-all duration-700 cursor-default border-none shadow-2xl h-full bg-gradient-to-br ${industry.gradient}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className={`inline-flex px-4 py-2 rounded-full ${industry.iconBg}`}>
                      <span className={`text-sm font-black ${industry.iconColor}`}>{industry.stats}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black">{industry.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{industry.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {industry.products.map((product, i) => (
                        <Badge key={i} variant="secondary" className="text-sm font-bold">{product}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Industries */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black">Services</h2>
                <p className="text-lg text-muted-foreground">Mobile payments for on-the-go businesses</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceIndustries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <Card className="group p-6 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-lg h-full">
                  <div className="space-y-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <h3 className="text-xl font-black">{industry.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((product, i) => (
                        <Badge key={i} variant="outline" className="text-xs font-semibold">{product}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Industries */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Coffee className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black">Hospitality</h2>
                <p className="text-lg text-muted-foreground">Fast payments for busy food & drink businesses</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalityIndustries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <Card className="group p-6 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-lg h-full">
                  <div className="space-y-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <h3 className="text-xl font-black">{industry.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((product, i) => (
                        <Badge key={i} variant="outline" className="text-xs font-semibold">{product}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Industries */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black">Retail</h2>
                <p className="text-lg text-muted-foreground">Reliable checkout solutions for every store</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retailIndustries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <Card className="group p-6 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-lg h-full">
                  <div className="space-y-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <h3 className="text-xl font-black">{industry.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((product, i) => (
                        <Badge key={i} variant="outline" className="text-xs font-semibold">{product}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rocket - Benefits Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Why businesses choose Rocket
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "450+ EPOS integrations", description: "Connect seamlessly with your existing systems" },
              { title: "99.99% uptime", description: "Always-on reliability for your business" },
              { title: "58% faster payments", description: "Speed up service during peak hours" },
              { title: "Award-winning support", description: "Expert help whenever you need it" },
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group relative p-8 rounded-3xl hover-elevate transition-all duration-500 cursor-default border-none shadow-xl overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-black">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
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
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-primary-foreground tracking-tight">
                Ready for your industry?
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Join 110,000+ businesses across every sector. Get started in minutes.
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
    </>
  );
}
