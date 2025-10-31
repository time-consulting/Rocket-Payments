import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Zap, CreditCard, Lock, Cloud, Users, Wifi, Download, ArrowRight, ArrowUpRight, Star } from "lucide-react";

import heroImage from "@assets/generated_images/Tap_to_Pay_hero_image_1ae282a1.png";
import securityImage from "@assets/generated_images/Payment_security_protection_image_9f385671.png";
import plainSailingImage from "@assets/generated_images/Plain_sailing_easy_payments_95d92f6c.png";
import qsrImage from "@assets/generated_images/QSR_industry_payment_terminal_ea6adaa9.png";
import fsrImage from "@assets/generated_images/Full_service_restaurant_payment_d2377dfa.png";
import rocketGoImage from "@assets/Rocket Go_1761925244580.png";
import rocketPocketImage from "@assets/generated_images/Rocket_Pocket_hero_image_88ba9b26.png";

export default function TapToPay() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] uppercase" data-testid="text-hero-headline">
                Fast payments, on tap
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Turn your iPhone into a payment terminal. Accept contactless payments with just your phone and our app. No extra hardware needed.
              </p>
              <Link href="/quote">
                <Button size="lg" variant="secondary" className="text-base px-8 rounded-full" data-testid="button-hero-get-started">
                  Get started
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Tap to Pay on iPhone"
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
              <Smartphone className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">No extra hardware</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your iPhone is all you need. Download the app and start accepting payments immediately.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <Zap className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Lightning fast setup</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Be ready to take payments in minutes. Simply download, sign in, and start accepting cards.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <CreditCard className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">All contactless payments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Accept contactless cards, Apple Pay, Google Pay, and all major mobile wallets.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <Lock className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Secure and private</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built on Apple's secure technology with end-to-end encryption and zero card data stored on your device.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            The simplest way to accept payments
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            No card readers. No dongles. No extra equipment. Just tap your iPhone and you're ready to take payments anywhere.
          </p>
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-black text-primary">0</div>
              <p className="text-base font-semibold">Zero hardware costs—use the phone you already have.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-black text-primary">5min</div>
              <p className="text-base font-semibold">Get set up in under 5 minutes and start taking payments.</p>
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
                Built on Apple's secure platform
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tap to Pay on iPhone uses the same secure technology as Apple Pay. Every transaction is encrypted, and card data never touches your device. It's payment security you can trust.
              </p>
            </div>
            <div className="relative">
              <img
                src={securityImage}
                alt="Secure payments"
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
                Perfect for mobile businesses
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Market stalls, pop-ups, deliveries, or any business on the move. With Tap to Pay on iPhone, you can accept payments wherever your business takes you—no bulky equipment required.
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
                alt="Mobile payments"
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

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to start accepting payments on your iPhone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 text-center">
              <div className="flex justify-center">
                <Download className="h-16 w-16 text-primary" />
              </div>
              <div className="text-3xl font-black text-primary">1</div>
              <h3 className="text-xl font-black">Download the app</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get the Rocket Payments app from the App Store. It's free and takes seconds to download.
              </p>
            </Card>

            <Card className="p-8 space-y-4 text-center">
              <div className="flex justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <div className="text-3xl font-black text-primary">2</div>
              <h3 className="text-xl font-black">Sign in to your account</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Log in with your Rocket Payments account or create a new one in minutes.
              </p>
            </Card>

            <Card className="p-8 space-y-4 text-center">
              <div className="flex justify-center">
                <CreditCard className="h-16 w-16 text-primary" />
              </div>
              <div className="text-3xl font-black text-primary">3</div>
              <h3 className="text-xl font-black">Start accepting payments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enter the amount, let your customer tap their card or phone, and you're done.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              What you need
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple requirements to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-3">
              <Smartphone className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">iPhone XS or later</h3>
              <p className="text-sm text-muted-foreground">Works on iPhone XS and newer models with NFC capability.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Cloud className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">iOS 15.5 or later</h3>
              <p className="text-sm text-muted-foreground">Keep your iPhone updated to the latest iOS version.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Wifi className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Internet connection</h3>
              <p className="text-sm text-muted-foreground">Wi-Fi or cellular data to process transactions.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Download className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Rocket Payments app</h3>
              <p className="text-sm text-muted-foreground">Free app available on the App Store.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <CreditCard className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Contactless only</h3>
              <p className="text-sm text-muted-foreground">Accepts contactless cards and mobile wallets.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Lock className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Secure technology</h3>
              <p className="text-sm text-muted-foreground">Built on Apple's secure payment platform.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Instant setup</h3>
              <p className="text-sm text-muted-foreground">Be ready to take payments in under 5 minutes.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">No training needed</h3>
              <p className="text-sm text-muted-foreground">So simple, anyone can use it right away.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Perfect for businesses on the move
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From market stalls to pop-up shops, deliveries to events—Tap to Pay is ideal for any business that needs flexible payment options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all">
              <Link href="/industries">
                <div className="relative aspect-[3/4]">
                  <img src={qsrImage} alt="Quick-service restaurants" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Food trucks & pop-ups</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Accept payments anywhere you set up shop. No bulky equipment to carry or set up.
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
                  <img src={fsrImage} alt="Retail" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Markets & events</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Take payments at farmers markets, craft fairs, or special events with just your phone.
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
      <section className="py-20 md:py-32 bg-muted/30">
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
              <Link href="/products/rocket-go">
                <div className="relative aspect-video bg-muted/30 p-8">
                  <img src={rocketGoImage} alt="Rocket Go" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Rocket Go</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Portable payment terminal with built-in printer, dual connectivity, and all-day battery life.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn more
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all">
              <Link href="/products/rocket-pocket">
                <div className="relative aspect-video bg-muted/30 p-8">
                  <img src={rocketPocketImage} alt="Rocket Pocket" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Rocket Pocket</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Handheld device for both orders and payments. Perfect for tableside service in restaurants and cafes.
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
            Start taking payments today
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/90">
            Download the app and be ready to accept payments in minutes. No hardware, no hassle, no commitment.
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
