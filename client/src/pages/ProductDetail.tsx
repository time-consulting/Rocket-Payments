import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

import rocketGoImage from "@assets/generated_images/Rocket_Go_product_shot_ed6f0f19.png";
import rocketPocketImage from "@assets/generated_images/Rocket_Pocket_mobile_payment_3b62149f.png";
import rocketWiredImage from "@assets/generated_images/Rocket_Wired_countertop_terminal_57e8157c.png";
import tapToPayImage from "@assets/generated_images/Tap_to_Pay_iPhone_a1c38f15.png";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  const slug = params?.slug;

  const productData: Record<string, any> = {
    "rocket-go": {
      name: "Rocket Go",
      tagline: "High pace, face-to-face",
      description: "Our most versatile card machine for busy businesses. Take payments in seconds with lightning-fast processing, built-in 4G connectivity, and all-day battery life.",
      image: rocketGoImage,
      features: [
        "Lightning-fast payment processing",
        "Built-in 4G and Wi-Fi connectivity",
        "All-day battery life",
        "Contactless, chip & PIN",
        "Compact and portable",
        "Next-day settlement",
      ],
      specs: [
        { label: "Battery Life", value: "12+ hours" },
        { label: "Connectivity", value: "4G, Wi-Fi, Bluetooth" },
        { label: "Display", value: "4\" touchscreen" },
        { label: "Printer", value: "Built-in thermal printer" },
      ],
    },
    "rocket-pocket": {
      name: "Rocket Pocket",
      tagline: "In-the-pocket, on-the-go",
      description: "Perfect for tableside service and mobile businesses. Lightweight, portable, and powerful enough to handle your busiest days.",
      image: rocketPocketImage,
      features: [
        "Ultra-portable design",
        "4G connectivity built-in",
        "Long battery life",
        "Full payment acceptance",
        "Integrated receipt printer",
        "Weatherproof casing",
      ],
      specs: [
        { label: "Weight", value: "180g" },
        { label: "Battery", value: "8+ hours" },
        { label: "Connectivity", value: "4G, Wi-Fi" },
        { label: "Durability", value: "IP54 rated" },
      ],
    },
    "rocket-wired": {
      name: "Rocket Wired",
      tagline: "Wired in, switched on",
      description: "Reliable countertop solution for fixed checkout points. Never worry about charging – just plug in and process payments all day.",
      image: rocketWiredImage,
      features: [
        "No charging required",
        "Always-on reliability",
        "Perfect for kiosks",
        "Fast transaction speeds",
        "Seamless EPOS integration",
        "Compact countertop design",
      ],
      specs: [
        { label: "Power", value: "Wired (no battery)" },
        { label: "Connectivity", value: "Ethernet, Wi-Fi" },
        { label: "Display", value: "3.5\" touchscreen" },
        { label: "Integration", value: "450+ EPOS systems" },
      ],
    },
    "tap-to-pay": {
      name: "Tap to Pay on iPhone",
      tagline: "Fast payments, on tap",
      description: "Turn your iPhone into a payment terminal. No extra hardware needed – accept contactless payments with just your phone and our app.",
      image: tapToPayImage,
      features: [
        "No additional hardware",
        "iPhone compatibility",
        "Instant setup",
        "Secure payments",
        "Perfect for mobile businesses",
        "Low monthly cost",
      ],
      specs: [
        { label: "Requirements", value: "iPhone XS or later" },
        { label: "Setup Time", value: "Under 5 minutes" },
        { label: "Monthly Fee", value: "From £9.99" },
        { label: "Transaction Fee", value: "Same as standard" },
      ],
    },
  };

  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products">
            <Button>View All Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Card className="overflow-hidden">
            <div className="aspect-[4/5] bg-muted/30">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </Card>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                {product.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                Key Features
              </h3>
              <ul className="grid gap-2">
                {product.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/calculate-savings">
              <Button size="lg" className="mt-4" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.specs.map((spec: any, i: number) => (
              <div key={i} className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">{spec.label}</span>
                <span className="text-muted-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
