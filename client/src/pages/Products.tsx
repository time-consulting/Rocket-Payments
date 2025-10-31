import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import rocketGoImage from "@assets/generated_images/Rocket_Go_product_shot_ed6f0f19.png";
import rocketPocketImage from "@assets/generated_images/Rocket_Pocket_mobile_payment_3b62149f.png";
import rocketWiredImage from "@assets/generated_images/Rocket_Wired_countertop_terminal_57e8157c.png";
import tapToPayImage from "@assets/generated_images/Tap_to_Pay_iPhone_a1c38f15.png";

export default function Products() {
  const products = [
    {
      name: "Rocket Go",
      tagline: "High pace, face-to-face",
      description: "Our most versatile card machine for busy businesses. Take payments in seconds with lightning-fast processing, built-in 4G connectivity, and all-day battery life.",
      features: [
        "Lightning-fast payment processing",
        "Built-in 4G and Wi-Fi connectivity",
        "All-day battery life",
        "Contactless, chip & PIN",
        "Compact and portable",
        "Next-day settlement",
      ],
      image: rocketGoImage,
      link: "/products/rocket-go",
    },
    {
      name: "Rocket Pocket",
      tagline: "In-the-pocket, on-the-go",
      description: "Perfect for tableside service and mobile businesses. Lightweight, portable, and powerful enough to handle your busiest days.",
      features: [
        "Ultra-portable design",
        "4G connectivity built-in",
        "Long battery life",
        "Full payment acceptance",
        "Integrated receipt printer",
        "Weatherproof casing",
      ],
      image: rocketPocketImage,
      link: "/products/rocket-pocket",
    },
    {
      name: "Rocket Wired",
      tagline: "Wired in, switched on",
      description: "Reliable countertop solution for fixed checkout points. Never worry about charging – just plug in and process payments all day.",
      features: [
        "No charging required",
        "Always-on reliability",
        "Perfect for kiosks",
        "Fast transaction speeds",
        "Seamless EPOS integration",
        "Compact countertop design",
      ],
      image: rocketWiredImage,
      link: "/products/rocket-wired",
    },
    {
      name: "Tap to Pay on iPhone",
      tagline: "Fast payments, on tap",
      description: "Turn your iPhone into a payment terminal. No extra hardware needed – accept contactless payments with just your phone and our app.",
      features: [
        "No additional hardware",
        "iPhone compatibility",
        "Instant setup",
        "Secure payments",
        "Perfect for mobile businesses",
        "Low monthly cost",
      ],
      image: tapToPayImage,
      link: "/products/tap-to-pay",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="text-products-page-headline">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect payment solution for your business. All our products come with 99.99% uptime, next-day settlement, and award-winning support.
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`product-${index}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/5] bg-muted/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {product.tagline}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold">{product.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Key Features
                  </h3>
                  <ul className="grid gap-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/quote">
                    <Button size="lg" data-testid={`button-get-started-${index}`}>
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={product.link}>
                    <Button size="lg" variant="outline" data-testid={`button-learn-more-${index}`}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary text-primary-foreground rounded-2xl p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Not sure which product is right for you?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Our team can help you choose the perfect payment solution for your business needs.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary" className="mt-4">
              Talk to Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
