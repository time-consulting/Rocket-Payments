import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, ArrowUpRight, Cloud, TrendingUp, Zap, Star, CheckCircle } from "lucide-react";

import heroImage from "@assets/hero image rocket go_1761926380440.png";
import offerBanner from "@assets/offer banner rocket go device_1761930053366.png";
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
    <div ref={ref} className="text-6xl md:text-8xl font-black">
      {showFree ? (
        <span className="inline-block animate-[scaleIn_0.5s_ease-out]">FREE</span>
      ) : (
        <span>£{price.toLocaleString()}</span>
      )}
    </div>
  );
}

function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
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
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-6xl font-bold text-primary">
      {count}+
    </div>
  );
}

function AnimatedFeatureCard({ icon: Icon, text, delay }: { icon: any; text: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center gap-4 text-center p-6 rounded-2xl hover-elevate transition-all duration-300 hover:scale-105">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300">
            <Icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>
        <p className="text-base font-semibold transition-colors duration-300 group-hover:text-primary">{text}</p>
      </div>
    </div>
  );
}

function AutoScrollProducts({ products }: { products: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    const cardWidth = 340;
    const gap = 16;
    const itemWidth = cardWidth + gap;
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= itemWidth * products.length) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [products.length]);

  return (
    <div ref={scrollRef} className="flex gap-4 md:gap-6 overflow-x-scroll pb-8 px-6 md:px-8 scrollbar-hide">
      {[...products, ...products].map((product, index) => (
        <Link key={index} href={product.link}>
          <div 
            className="flex-shrink-0 w-[340px] md:w-[420px] h-[500px] md:h-[580px] rounded-[2rem] overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]" 
            data-testid={`card-product-${index % products.length}`}
          >
            <div className={`h-full relative ${(index % products.length) % 2 === 0 ? 'bg-foreground text-background' : 'bg-muted/50 text-foreground'}`}>
              <div className="absolute top-8 left-8 right-8 z-10 space-y-2">
                <h3 className="text-3xl md:text-4xl font-black">{product.name}</h3>
                <p className="text-lg md:text-xl font-semibold opacity-90">{product.tagline}</p>
                <p className={`text-sm ${(index % products.length) % 2 === 0 ? 'text-background/70' : 'text-muted-foreground'}`}>{product.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[65%] flex items-end justify-center pb-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function AutoScrollTestimonials({ testimonials }: { testimonials: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.3;
    const cardWidth = 380;
    const gap = 24;
    const itemWidth = cardWidth + gap;
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= itemWidth * testimonials.length) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [testimonials.length]);

  return (
    <div ref={scrollRef} className="flex gap-6 overflow-x-scroll pb-8 scrollbar-hide">
      {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
        <Card
          key={index}
          className="flex-shrink-0 w-[380px] p-8 space-y-6 hover-elevate transition-all duration-300 hover:scale-[1.02] bg-background border-none shadow-lg"
          data-testid={`card-testimonial-${index % testimonials.length}`}
        >
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
              <p className="text-sm text-muted-foreground font-medium">{testimonial.business}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Home() {
  const industries = [
    {
      title: "Quick-service restaurants",
      description: "Power through queues, speed up service, track payments across locations, and reduce your running costs.",
      image: qsrImage,
      link: "/industries",
    },
    {
      title: "Full-service restaurants",
      description: "Streamline your front of house, integrate your payments and EPOS, and simplify your end-of-day reconciliation.",
      image: fsrImage,
      link: "/industries",
    },
    {
      title: "Dental & Healthcare",
      description: "Streamline payments, offer patients more ways to pay, and simplify reconciliation with integrated solutions.",
      image: dentalImage,
      link: "/industries",
    },
    {
      title: "Retail",
      description: "Fast checkout experiences, inventory integration, and comprehensive reporting for modern retail operations.",
      image: retailImage,
      link: "/industries",
    },
  ];

  const products = [
    {
      name: "Rocket Go",
      tagline: "High pace, face-to-face",
      description: "Serve more customers, faster. Take payments in seconds with our fast, versatile card machine.",
      image: rocketGoImage,
      link: "/products/rocket-go",
    },
    {
      name: "Rocket Pocket",
      tagline: "In-the-pocket, on-the-go",
      description: "Boost revenue and streamline service with our portable device for orders and payments.",
      image: rocketPocketImage,
      link: "/products/rocket-pocket",
    },
    {
      name: "Rocket Wired",
      tagline: "Wired in, switched on",
      description: "Stationary countertop and kiosk payments. No charging, no fuss – just easy, integrated payments.",
      image: rocketWiredImage,
      link: "/products/rocket-wired",
    },
    {
      name: "Tap to Pay on iPhone",
      tagline: "Fast payments, on tap",
      description: "Take contactless payments with an iPhone and our app. No extra hardware needed.",
      image: tapToPayImage,
      link: "/products/tap-to-pay",
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
    {
      name: "David Williams",
      business: "Café Velocity",
      image: testimonial1,
      rating: 5,
      text: "The customer support is outstanding. When we had questions during setup, they walked us through everything patiently.",
    },
    {
      name: "Emma Thompson",
      business: "The Green Garden Spa",
      image: testimonial2,
      rating: 5,
      text: "Our clients love the contactless payment options. It's made checkout so much faster and more convenient for everyone.",
    },
    {
      name: "Ryan Murphy",
      business: "Metro Fitness Club",
      image: testimonial3,
      rating: 5,
      text: "We process hundreds of transactions daily. The speed and reliability of Rocket Payments has been game-changing for our business.",
    },
    {
      name: "Michael Torres",
      business: "Bloom Flower Studio",
      image: testimonial1,
      rating: 5,
      text: "Easy setup, beautiful hardware, and the reporting features help us understand our sales patterns better than ever before.",
    },
    {
      name: "Olivia Park",
      business: "Urban Threads Boutique",
      image: testimonial2,
      rating: 5,
      text: "The mobile payment terminal is perfect for our personal trainers. They can take payments anywhere in the gym.",
    },
  ];

  const faqs = [
    {
      question: "What is Rocket Payments?",
      answer: "Rocket Payments is a payment provider providing small business and enterprise card machines that are robust, flexible and secure. If you sign up today, you could be ready to take contactless debit and credit card payments by tomorrow. You'll be able to take payments via Apple Pay, Google Pay and Samsung Pay too.",
    },
    {
      question: "Why choose a Rocket Payments card machine?",
      answer: "Rocket Payments card machines come with built-in 4G connectivity, so if your Wi-Fi drops out, you can continue accepting contactless payments.",
    },
    {
      question: "Are Rocket Payments card machines secure?",
      answer: "We know protecting your profits and your customers' card data is paramount. That's why Rocket Payments card machines come with point-to-point encryption built-in as well as instant fraud detection. It's first-class payment security, so you don't have to worry.",
    },
  ];

  const partnerLogos = [
    { name: "Costa Coffee", logo: costaLogo },
    { name: "Treatz", logo: treatzLogo },
    { name: "CUPP", logo: cuppLogo },
    { name: "Silverstone", logo: silverstoneLogo },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight uppercase" data-testid="text-hero-headline">
                  Join the UK's #1 payments provider
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal">
                  Put your business success first with our fast, reliable payments, hard-working tech, and stellar customer support.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/quote">
                  <Button size="lg" className="text-base px-8" data-testid="button-hero-get-started">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="text-base px-8" data-testid="button-hero-view-products">
                    View Products
                  </Button>
                </Link>
              </div>

              {/* Partner Logos */}
              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">Trusted by leading businesses</p>
                <div className="relative overflow-hidden">
                  <div className="logo-scroll flex gap-12 items-center">
                    {[...partnerLogos, ...partnerLogos].map((partner, i) => (
                      <div key={i} className="flex-shrink-0">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={heroImage}
                  alt="Barista serving coffee with Rocket Payments terminal"
                  className="w-full h-auto object-cover"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switch for FREE Banner */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1]">
                Switch for
              </h2>
              <SwitchPriceAnimation />
              <p className="text-lg md:text-xl font-bold text-primary-foreground/90">
                £3,000 cover towards your exit fees
              </p>
            </div>
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="text-base px-8 rounded-full">
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-12 px-6 md:px-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" data-testid="text-products-headline">
              The latest. <span className="text-muted-foreground font-normal">Take a look at what's new right now.</span>
            </h2>
          </div>

          <div className="relative">
            <AutoScrollProducts products={products} />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" data-testid="text-value-prop-headline">
            Welcome to Payment Paradise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Deliver standout experiences at scale with fast, effortless in-person, online, and mobile payments.
          </p>
          
          {/* Offer Banner */}
          <div className="py-8">
            <Link href="/products/rocket-go">
              <img 
                src={offerBanner} 
                alt="Limited time offer - Get your card machine for just £79" 
                className="w-full rounded-[2rem] shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            {[
              { icon: CheckCircle, text: "More than 450 EPOS integrations" },
              { icon: Cloud, text: "Industry-leading 99.99% uptime" },
              { icon: Star, text: "Award-winning customer support" },
              { icon: TrendingUp, text: "Powerful customer insights tools" },
            ].map((item, i) => (
              <AnimatedFeatureCard key={i} icon={item.icon} text={item.text} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - 3 Column Grid */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" data-testid="text-industries-headline">
              Payments tailored for your industry
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.slice(0, 3).map((industry, index) => (
              <div 
                key={index} 
                className="group"
                data-testid={`industry-card-${index}`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black leading-tight">{industry.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/industries" className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline">
              Learn more
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Integration Highlight */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Make your day-to-day more plug-and-play
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Increase efficiency by integrating your payments and EPOS. We integrate with over 450 EPOS systems – that's more than any other payments provider. Connected systems means fewer errors, quicker service, and easy cashing up. It's a win-win-win.
              </p>
              <Link href="/industries">
                <Button size="lg">
                  Explore integrations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden hover-elevate transition-all">
              <img
                src={eposIntegrationImage}
                alt="EPOS integration - 450+ providers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 px-6 md:px-8 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-3xl font-black">4.8</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" data-testid="text-testimonials-headline">
              What our customers say
            </h2>
            <p className="text-lg text-muted-foreground">Based on 4,800+ verified reviews</p>
          </div>

          <div className="relative px-6 md:px-8">
            <AutoScrollTestimonials testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">Success stories</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore real stories and industry insights from our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Velocity Coffee Chains",
                metric: "35%",
                achievement: "Increase in transaction speed",
                description: "Bespoke solutions to supercharge efficiency and drive growth across 50+ locations.",
                image: qsrImage,
              },
              {
                company: "Gourmet Restaurant Group",
                metric: "90%",
                achievement: "Faster reconciliation",
                description: "Transforming customer experience with integrated payments and seamless EPOS connection.",
                image: fsrImage,
              },
              {
                company: "Urban Retail Collective",
                metric: "99.99%",
                achievement: "Uptime achieved",
                description: "Discover the power of smart, swift payment solutions across multiple retail locations.",
                image: retailImage,
              },
            ].map((story, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-elevate transition-all group cursor-pointer border-none shadow-lg" 
                data-testid={`card-success-story-${index}`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                    <ArrowUpRight className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 flex items-center">
                    <h3 className="font-bold text-base">{story.company}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" data-testid="text-cta-headline">
            Switching made simple
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90">
            Sign up to Rocket Payments in just a few steps and enjoy a simple setup with no fixed contracts, an easy 2-step PCI compliance reporting process, and we could even cover your exit fees up to £3,000.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-cta-get-started">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-primary-foreground/70">Subject to your annual card turnover.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" data-testid="text-faq-headline">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6" data-testid={`accordion-faq-${index}`}>
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
