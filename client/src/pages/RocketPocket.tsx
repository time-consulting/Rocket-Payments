import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Wifi, CreditCard, Lock, Zap, Cloud, Users, Cog, ArrowRight, ArrowUpRight, Star } from "lucide-react";

import heroImage from "@assets/pocket rocket_1761928695213.png";
import ordersPaymentsImage from "@assets/rocket pocket_1761931985667.png";
import stockTabsImage from "@assets/pocket 2_1761931985666.png";
import paymentsVideo from "@assets/payments_1761932474462.mp4";
import securityImage from "@assets/generated_images/Payment_security_protection_image_9f385671.png";
import plainSailingImage from "@assets/Gemini_Generated_Image_56kibq56kibq56ki_1761932343908.png";
import qsrImage from "@assets/generated_images/QSR_industry_payment_terminal_ea6adaa9.png";
import fsrImage from "@assets/generated_images/Full_service_restaurant_payment_d2377dfa.png";
import rocketGoImage from "@assets/Rocket Go_1761925244580.png";
import rocketWiredImage from "@assets/generated_images/Countertop_terminal_with_touchscreen_aa8d26cb.png";

export default function RocketPocket() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] uppercase" data-testid="text-hero-headline">
                In-the-pocket, on-the-go
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Boost revenue and streamline service with our portable device for orders and payments. Connect with your EPOS system in the cloud, take orders on the move, and accept payments, wherever.
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
                alt="Rocket Pocket in action"
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
              <ShoppingCart className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Take orders and payments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Streamline service with one device for both orders and payments. Connect to your EPOS system for seamless operations.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <Wifi className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Always connected</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built-in Wi-Fi and 4G connectivity means you can take orders and payments anywhere in your business.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <CreditCard className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Truly portable</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Compact, lightweight design fits in your pocket. Take it tableside, curbside, or anywhere your business needs you.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <Lock className="h-16 w-16 text-foreground" />
              <h3 className="text-xl font-black">Secure and compliant</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Point-to-point encryption, PCI DSS compliance, and fraud protection keep your business and customers safe.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Orders. Payments. Easy. */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Orders. Payments. Easy.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Forget endless trips to the till. Take orders and payments at the table and free your team to focus on creating great experiences.
              </p>
            </div>
            <div className="relative">
              <img
                src={ordersPaymentsImage}
                alt="Orders and payments simplified"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keep tabs on stock */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Keep tabs on stock
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get instant updates on out-of-stock products or menu items, with live data-sharing, and keep staff and customers in the know as they order.
              </p>
            </div>
            <div className="relative lg:order-1">
              <img
                src={stockTabsImage}
                alt="Real-time stock updates"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* No pay delays */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                No pay delays
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Take payments instantly where your customers are so they can settle up without slowing down their day – and you can turn more tables.
              </p>
            </div>
            <div className="relative">
              <video
                src={paymentsVideo}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sync POS and payments */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Sync POS and payments
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Serve more customers, cash up quicker, and make miskeying mistakes a thing of the past with seamless integration.
              </p>
              <Link href="/quote">
                <Button size="lg" className="text-base px-8 rounded-full">
                  Get a quote
                </Button>
              </Link>
            </div>
            <div className="relative lg:order-1">
              <img
                src={plainSailingImage}
                alt="Seamless POS integration"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business efficiency in your back pocket */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Business efficiency in your back pocket
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-black">Receipts reduced</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cut down on customer wait time with a paperless experience that streamlines staff admin. Display the bill on screen and offer digital receipts by email or QR code.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-black">Secure, safe, strong</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rocket Pocket features secure data encryption ensuring your customer data is always safe. Plus, rely on instant fraud detection to protect you and your customers.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-black">Flexible payments, seamless service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Let customers pay however suits them best. Rocket Pocket accepts all major cards using contactless payments, as well as mobile wallets like Apple Pay and Google Pay. So staff can take payments, seamlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={securityImage}
                alt="Business efficiency"
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

      {/* Tech Specs */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Tech specs
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the lowdown on the Rocket Pocket card machine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 space-y-3">
              <Wifi className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Dual connectivity</h3>
              <p className="text-sm text-muted-foreground">Connects automatically to Wi-Fi or any available 4G network.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <ShoppingCart className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Lightweight and portable</h3>
              <p className="text-sm text-muted-foreground">Dimensions: 170mm x 70mm x 14.7mm, weight: 143 grams</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Cloud className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Easy to use – and see</h3>
              <p className="text-sm text-muted-foreground">Screen size and resolution: 4.95" (480x960), PPI (Pixel Per Inch) 217</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Long-lasting battery life</h3>
              <p className="text-sm text-muted-foreground">8-hour Li-ion battery, 3500mAh / 3.8V</p>
            </Card>

            <Card className="p-6 space-y-3">
              <CreditCard className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Integrated payments</h3>
              <p className="text-sm text-muted-foreground">Connect to your EPOS with cloud-based integrations.</p>
            </Card>

            <Card className="p-6 space-y-3">
              <Lock className="h-10 w-10 text-primary" />
              <h3 className="text-base font-black">Secure payments</h3>
              <p className="text-sm text-muted-foreground">Point-to-point encryption protects customer card data, and your income.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Perfect for hospitality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rocket Pocket is designed specifically for restaurants, bars, and cafes where tableside service matters.
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
                    Take orders at the counter or tableside, send them straight to the kitchen, and process payments all from one device.
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
                    Enhance tableside service with orders and payments in one sleek device. Split bills, add tips, and create memorable experiences.
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
              <Link href="/products/rocket-go">
                <div className="relative aspect-video bg-muted/30 p-8">
                  <img src={rocketGoImage} alt="Rocket Go" className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-black">Rocket Go</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Take ultra-fast, secure card payments anywhere. Portable, reliable, and with built-in Wi-Fi and 4G for truly mobile payments.
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
                    Our wired-in card machine for stationary countertop payments. No charging, no staff – just intuitive, integrated payments.
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
            Ready to transform your service?
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/90">
            Get started with Rocket Pocket and see how one device can revolutionize the way you take orders and payments.
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
