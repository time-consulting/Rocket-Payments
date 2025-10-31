import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Wifi, CreditCard, Lock, Zap, Cloud, Users, Cog, ArrowRight, ArrowUpRight, Star } from "lucide-react";

import heroImage from "@assets/generated_images/Rocket_Go_hero_image_acb02dd3.png";
import securityImage from "@assets/generated_images/Payment_security_protection_image_9f385671.png";
import plainSailingImage from "@assets/generated_images/Plain_sailing_easy_payments_95d92f6c.png";
import qsrImage from "@assets/generated_images/QSR_industry_payment_terminal_ea6adaa9.png";
import fsrImage from "@assets/generated_images/Full_service_restaurant_payment_d2377dfa.png";
import rocketPocketImage from "@assets/generated_images/Compact_pocket_payment_terminal_c76d8801.png";
import rocketWiredImage from "@assets/generated_images/Countertop_terminal_with_touchscreen_aa8d26cb.png";

export default function RocketGo() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]" data-testid="text-hero-headline">
                On-the-move payments. On-point tech.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Take ultra-fast, secure card payments, anywhere. Portable, reliable, and with built-in Wi-Fi and 4G, the Rocket Go card machine helps your business capture every sale.
              </p>
              <Link href="/quote">
                <Button size="lg" className="text-base px-8" data-testid="button-hero-get-started">
                  Get started
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Rocket Go in action"
                className="rounded-2xl w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Key Benefits */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 space-y-4">
              <Clock className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">High-pace payments, face-to-face impressions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Take your efficiency to new heights and speed up service with blazing fast transaction speeds – 58% faster than market average*.
              </p>
              <p className="text-xs text-muted-foreground italic">*In an independent research study with Savanta 2023.</p>
            </Card>

            <Card className="p-8 space-y-4">
              <Wifi className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Reliable tech, dependable service</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Capture every sale with our always-on platform and automatic Wi-Fi and 4G connectivity.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <CreditCard className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Intuitive design, adaptable device</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Easy to use for staff and customers, Rocket Go accepts all major types of card payments.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <Lock className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Secure transactions, simple compliance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Encrypted transactions, strong customer authentication, simplified PCI compliance. We've got you covered.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Create more time to shine
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Help staff give their best to customers with Rocket Go's market-leading transaction speeds, time-saving bill-splitting and tipping features, and seamless EPOS integrations.
          </p>
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-black text-primary">58%</div>
              <p className="text-base font-semibold">Serve more customers with transactions 58% faster than market average*.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-black text-primary">#1</div>
              <p className="text-base font-semibold">We're Britain's #1 SME payments provider.*</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Your payments, protected
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Keep transactions and customer data safe. Featuring point-to-point encryption and strong customer authentication, Rocket Go has your security needs baked in. Plus, simplify your PCI compliance reporting with a simple two-step process.
              </p>
            </div>
            <div className="relative">
              <img
                src={securityImage}
                alt="Payment security"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plain Sailing Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Make payments plain-sailing
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With our intuitive card machine, upskilling staff is super easy and the payments process is effortless for customers. Truly portable, the lightweight Rocket Go can be used anywhere in your business – and beyond. So you can keep service smooth, customers smiling, and business booming.
              </p>
              <Link href="/quote">
                <Button size="lg" className="text-base px-8">
                  Get started
                </Button>
              </Link>
            </div>
            <div className="relative lg:order-1">
              <img
                src={plainSailingImage}
                alt="Easy payments"
                className="rounded-2xl w-full h-auto"
              />
            </div>
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
              <span className="text-2xl font-black">4.4</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">Our customers say</h2>
            <p className="text-lg text-muted-foreground">Excellent - 4.4 out of 5 based on 4,901 reviews</p>
            <p className="text-base font-semibold text-primary">Join over 110,000 global businesses now using Rocket.</p>
          </div>
        </div>
      </section>

      {/* One Machine All Benefits */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              One machine. All the benefits.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover all the ways Rocket Go can help your business thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4">
              <Cog className="h-16 w-16 text-primary" />
              <h3 className="text-xl font-black">Automate admin</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rocket Go integrates with over 600 EPOS systems, so you can streamline service, cash up quicker, and reduce miskeying errors.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <Zap className="h-16 w-16 text-primary" />
              <h3 className="text-xl font-black">Keep connected</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serve more customers faster and boost business with high-speed transactions, an easy-to-use interface, and dual Wi-Fi and 4G connectivity.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <Users className="h-16 w-16 text-primary" />
              <h3 className="text-xl font-black">Streamline service</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Keep service smooth and customers satisfied with Rocket Go. Super easy to use, customers can pay effortlessly – and you can onboard staff quickly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Take All Payments */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Take all payments
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let customers pay however suits them and help staff take payment seamlessly. Rocket Go accepts all major cards, contactless payments, and mobile wallets like Apple Pay and Google Pay. And with its durable design, you can count on this card machine in the busiest and most demanding environments.
          </p>
          <Link href="/quote">
            <Button size="lg" className="text-base px-8">
              Get started
            </Button>
          </Link>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Tech specs
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the lowdown on the Rocket Go card machine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-3">
              <Wifi className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Dual connectivity</h3>
              <p className="text-sm text-muted-foreground">Connects automatically to Wi-Fi or any available 4G network.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <CreditCard className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">On-the-go receipts</h3>
              <p className="text-sm text-muted-foreground">Print receipts on the go with a built-in, fast thermal printer.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Cloud className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Portable and user friendly</h3>
              <p className="text-sm text-muted-foreground">Truly mobile: measures just 175.7 x 78 x 57 mm and weighs 458g. Easy to use: 5-inch HD touchscreen.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Long-lasting battery life</h3>
              <p className="text-sm text-muted-foreground">Keep taking payments with a 10-hour, long-lasting Li-ion battery, 5250mAH, 3.7V.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Cog className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Integrated payments</h3>
              <p className="text-sm text-muted-foreground">Connect to your EPOS with over 400 integrations, supported through your existing Connect Cloud integration.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Lock className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Secure payments</h3>
              <p className="text-sm text-muted-foreground">Point-to-point encryption protects customer card data, and your income.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <CreditCard className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Card and contactless</h3>
              <p className="text-sm text-muted-foreground">Accepts payments with Chip & PIN, NFC contactless, and magnetic stripe.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Cloud className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Accessories</h3>
              <p className="text-sm text-muted-foreground">Complete your setup with a silicone case, stand, and receipt rolls.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              A card machine for every industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Powerful, portable, and versatile, Rocket Go is the perfect solution for every type of business – in any sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all">
              <Link href="/industries">
                <div className="relative aspect-[3/4]">
                  <img src={qsrImage} alt="Quick-service restaurants" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Quick-service restaurants</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Power through queues, speed up service, track payments across locations, and reduce your running costs.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn more
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all">
              <Link href="/industries">
                <div className="relative aspect-[3/4]">
                  <img src={fsrImage} alt="Full-service restaurants" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Full-service restaurants</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Streamline your front of house, integrate your payments and EPOS, and simplify your end-of-day reconciliation.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn more
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* More Products */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              More Rocket payments products
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our range of payments products for even more ways to optimise your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all">
              <Link href="/products/rocket-pocket">
                <div className="relative aspect-video bg-muted/30 p-8">
                  <img src={rocketPocketImage} alt="Rocket Pocket" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Rocket Pocket</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Boost revenue and streamline service with our portable device for orders and payments. Connect with your EPOS system in the cloud, take orders on the move, and accept payments, wherever.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn more
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all">
              <Link href="/products/rocket-wired">
                <div className="relative aspect-video bg-muted/30 p-8">
                  <img src={rocketWiredImage} alt="Rocket Wired" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Rocket Wired</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our new wired-in card machine for stationary countertop payments and kiosks lets you free up valuable counter space and reduce device damage. No charging, no staff – just intuitive, integrated payments.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn more
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Switching made simple
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/90">
            Sign up to Rocket in just a few steps and enjoy a simple setup, an easy 2-step PCI compliance reporting process, and we could even cover your exit fees up to £3,000.*
          </p>
          <p className="text-sm text-primary-foreground/80 italic">
            *Subject to your annual card turnover. See our Help Centre for more info.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Get started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
