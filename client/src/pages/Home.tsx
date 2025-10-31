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
import { ArrowRight, Cloud, TrendingUp, Zap, Star, CheckCircle } from "lucide-react";

import heroImage from "@assets/generated_images/Hero_payment_terminal_coffee_shop_07c7ebb4.png";
import rocketGoImage from "@assets/generated_images/Rocket_Go_product_shot_ed6f0f19.png";
import rocketPocketImage from "@assets/generated_images/Rocket_Pocket_mobile_payment_3b62149f.png";
import rocketWiredImage from "@assets/generated_images/Rocket_Wired_countertop_terminal_57e8157c.png";
import tapToPayImage from "@assets/generated_images/Tap_to_Pay_iPhone_a1c38f15.png";
import qsrImage from "@assets/generated_images/Quick_service_restaurant_bc0bbd4b.png";
import fsrImage from "@assets/generated_images/Full_service_restaurant_eb7f483a.png";
import dentalImage from "@assets/generated_images/Dental_office_payment_88d7359b.png";
import retailImage from "@assets/generated_images/Retail_store_checkout_665cbb72.png";
import testimonial1 from "@assets/generated_images/Business_owner_testimonial_1_a41a1226.png";
import testimonial2 from "@assets/generated_images/Restaurant_manager_testimonial_45d19cf6.png";
import testimonial3 from "@assets/generated_images/Retail_owner_testimonial_379ad525.png";

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
      name: "Sarah Mitchell",
      business: "Café Velocity",
      image: testimonial1,
      rating: 5,
      text: "Switching to Rocket Payments was the best decision for our business. The setup was incredibly smooth, and the card machines are lightning fast. Our customers love the quick checkout, and we've seen a noticeable increase in throughput during our morning rush.",
    },
    {
      name: "James Chen",
      business: "The Golden Lotus Restaurant",
      image: testimonial2,
      rating: 5,
      text: "The integration with our POS system has been flawless. End-of-day reconciliation that used to take 30 minutes now takes 5. The support team is phenomenal – they helped us get set up in less than 24 hours. Highly recommend!",
    },
    {
      name: "Emma Thompson",
      business: "Urban Threads Boutique",
      image: testimonial3,
      rating: 5,
      text: "As a small retail business, reliability is everything. Rocket Payments delivers 99.99% uptime, and their portable terminals let us take payments anywhere in the store. The difference in customer experience has been remarkable.",
    },
  ];

  const faqs = [
    {
      question: "What is Rocket Payments?",
      answer: "Rocket Payments is a payment provider offering robust, flexible, and secure card machines for small businesses and enterprises. Get ready to take contactless debit and credit card payments via Apple Pay, Google Pay, and Samsung Pay – often within 24 hours of signing up.",
    },
    {
      question: "Why choose Rocket Payments card machines?",
      answer: "Our card machines come with built-in 4G connectivity, so if your Wi-Fi drops out, you can continue accepting contactless payments without interruption. Plus, we offer industry-leading 99.99% uptime and next-day settlement.",
    },
    {
      question: "Are Rocket Payments card machines secure?",
      answer: "Absolutely. Protecting your profits and your customers' card data is paramount. Our card machines come with point-to-point encryption built-in, instant fraud detection, and full PCI DSS compliance. It's first-class payment security.",
    },
    {
      question: "How fast do I get my takings?",
      answer: "Payments you take with your card machine arrive in your bank account the next business day. No waiting, no delays – just fast, reliable settlement.",
    },
    {
      question: "Can I integrate with my existing EPOS system?",
      answer: "Yes! We integrate with over 450 EPOS systems – more than any other payments provider. Connected systems mean fewer errors, quicker service, and easier reconciliation.",
    },
    {
      question: "What support is available?",
      answer: "We offer award-winning customer support with UK-based teams available to help you. From setup to troubleshooting, we're here to ensure your payments run smoothly.",
    },
  ];

  const partnerLogos = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"];

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
                <Badge variant="secondary" className="text-sm font-medium" data-testid="badge-hero-claim">
                  Join 110,000+ global businesses
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" data-testid="text-hero-headline">
                  Payment solutions built for your success
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Fast, reliable payments with hard-working tech and stellar customer support. Get started today and experience the difference.
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
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-60">
                  {partnerLogos.map((partner, i) => (
                    <div key={i} className="h-8 bg-muted/50 rounded flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src={heroImage}
                alt="Payment terminal in use"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-3" data-testid="stat-uptime">
              <Cloud className="h-12 w-12" />
              <div className="text-4xl md:text-5xl font-bold tabular-nums">99.99%</div>
              <p className="text-base text-primary-foreground/90">Industry-leading uptime. Take payments anytime.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3" data-testid="stat-volume">
              <TrendingUp className="h-12 w-12" />
              <div className="text-4xl md:text-5xl font-bold tabular-nums">1.8bn</div>
              <p className="text-base text-primary-foreground/90">Transactions processed every year.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3" data-testid="stat-speed">
              <Zap className="h-12 w-12" />
              <div className="text-4xl md:text-5xl font-bold tabular-nums">58%</div>
              <p className="text-base text-primary-foreground/90">Faster than market average payment speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-value-prop-headline">
            Welcome to Payment Paradise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Deliver standout experiences at scale with fast, effortless in-person, online, and mobile payments.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            {[
              { icon: CheckCircle, text: "More than 450 EPOS integrations" },
              { icon: Cloud, text: "Industry-leading 99.99% uptime" },
              { icon: Star, text: "Award-winning customer support" },
              { icon: TrendingUp, text: "Powerful customer insights tools" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-center">
                <item.icon className="h-10 w-10 text-primary" />
                <p className="text-base font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Alternating Layout */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-industries-headline">
              Payments tailored for your industry
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how our first-class payments platform can help your business thrive.
            </p>
          </div>

          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center" data-testid={`industry-section-${index}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold">{industry.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{industry.description}</p>
                    <Link href={industry.link}>
                      <Button variant="default" data-testid={`button-learn-more-${index}`}>
                        Learn more
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Integration Highlight */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
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
            <div className="bg-muted/50 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary">450+</div>
                <p className="text-xl font-semibold">EPOS Integrations</p>
                <p className="text-muted-foreground">More than any other provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-products-headline">
              Our products
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our range of hard-working hardware for the right solution for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link key={index} href={product.link}>
                <Card className="h-full overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group cursor-pointer" data-testid={`card-product-${index}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-muted/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1 flex-1">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-sm font-medium text-primary">{product.tagline}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.8</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-testimonials-headline">
              Our customers say
            </h2>
            <p className="text-lg text-muted-foreground">Based on 4,800+ reviews</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4" data-testid={`card-testimonial-${index}`}>
                <div className="flex gap-4 items-start">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    <div className="flex gap-0.5 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Success stories</h2>
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
              <Card key={index} className="overflow-hidden hover-elevate transition-all group cursor-pointer" data-testid={`card-success-story-${index}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{story.metric}</div>
                    <p className="font-semibold">{story.achievement}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{story.company}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{story.description}</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto group-hover:translate-x-1 transition-transform">
                    Read story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-cta-headline">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-faq-headline">
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
