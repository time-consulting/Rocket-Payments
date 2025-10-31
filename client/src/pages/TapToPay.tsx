import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Smartphone, CreditCard, Lock, Download, ArrowRight } from "lucide-react";

import heroImage from "@assets/tap to pay hero_1761939459439.webp";
import watchImage from "@assets/tap to pay watch_1761939459439.webp";
import cardTapImage from "@assets/2400x1040_1761939495759.webp";

export default function TapToPay() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Width */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={heroImage}
            alt="Tap to Pay on iPhone"
            className="w-full max-w-5xl h-auto object-contain px-6"
            data-testid="img-hero"
          />
        </div>
        <div className="relative z-10 text-center px-6 md:px-8 pt-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6" data-testid="text-hero-headline">
            Tap to Pay<br />on iPhone
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Your iPhone is all you need to accept contactless payments.
          </p>
        </div>
      </section>

      {/* No Hardware Needed Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
            No card reader.<br />No extra hardware.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Just download the app, sign in, and start accepting contactless payments with your iPhone.
          </p>
        </div>
      </section>

      {/* Watch Payment Feature */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center mb-16">
            <img
              src={watchImage}
              alt="Accept payments from Apple Watch"
              className="w-full max-w-2xl h-auto rounded-3xl"
            />
          </div>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
              Accept all contactless payments
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Contactless cards, Apple Pay, Google Pay, and all major mobile wallets. Every tap, chip, and swipe works seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Card Tap Feature */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center mb-16">
            <img
              src={cardTapImage}
              alt="Contactless card payment"
              className="w-full max-w-4xl h-auto rounded-3xl"
            />
          </div>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
              Fast. Secure. Simple.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Built on Apple's secure platform with end-to-end encryption. Card data never touches your device.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Smartphone className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">No hardware</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Your iPhone is all you need to accept payments anywhere.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Download className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">5-minute setup</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Download the app and start accepting payments instantly.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Lock className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Secure by design</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Built on Apple's trusted payment technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
            Perfect for businesses<br />on the move
          </h2>
          <div className="grid md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="space-y-3">
              <h3 className="text-xl font-black">Market stalls</h3>
              <p className="text-base text-muted-foreground">
                Accept payments at farmers markets and outdoor events.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-black">Pop-up shops</h3>
              <p className="text-base text-muted-foreground">
                Take your store anywhere without heavy equipment.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-black">Deliveries</h3>
              <p className="text-base text-muted-foreground">
                Process payments on the spot during deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
            What you need
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 pt-8 text-left max-w-2xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-lg font-black">iPhone XS or later</h3>
              <p className="text-base text-muted-foreground">
                With NFC capability
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-black">iOS 15.5+</h3>
              <p className="text-base text-muted-foreground">
                Keep your iPhone updated
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-black">Rocket Payments app</h3>
              <p className="text-base text-muted-foreground">
                Free from the App Store
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-black">Internet connection</h3>
              <p className="text-base text-muted-foreground">
                Wi-Fi or cellular data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
            Get started today
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Download the app. Sign in. Start accepting payments.
          </p>
          <Link href="/quote">
            <Button size="lg" className="text-lg px-10 py-6 rounded-full" data-testid="button-cta-get-started">
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
