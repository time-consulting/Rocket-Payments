import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "1.5%",
      period: "per transaction",
      description: "Perfect for small businesses just getting started",
      popular: false,
      features: [
        "No monthly fees",
        "Next-day settlement",
        "All major card types accepted",
        "Built-in 4G connectivity",
        "Email support",
        "Basic reporting",
      ],
    },
    {
      name: "Growth",
      price: "1.2%",
      period: "per transaction",
      description: "For growing businesses with higher volumes",
      popular: true,
      features: [
        "£15/month terminal rental",
        "Next-day settlement",
        "All card types + AMEX",
        "Built-in 4G + Wi-Fi",
        "Priority phone support",
        "Advanced reporting",
        "EPOS integration",
        "Multiple terminals",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large operations",
      popular: false,
      features: [
        "Volume-based pricing",
        "Same-day settlement option",
        "All card types included",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations",
        "Advanced analytics",
        "API access",
        "Multi-location management",
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="text-pricing-headline">
            Simple, transparent pricing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the plan that's right for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="mb-4">{plan.description}</CardDescription>
                <div className="space-y-1">
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quote">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    data-testid={`button-get-started-${index}`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">What's included</h3>
            <ul className="space-y-3">
              {[
                "99.99% uptime guarantee",
                "PCI DSS Level 1 compliant",
                "Next-day settlement as standard",
                "No setup fees",
                "No exit fees (we cover up to £3,000)",
                "Free card machine delivery",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Transaction fees explained</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Our transaction fees are charged as a percentage of each sale. There are no additional per-transaction charges or hidden fees.
              </p>
              <p>
                All major debit and credit cards are included at the same rate. AMEX is available on Growth and Enterprise plans.
              </p>
              <p>
                We offer volume-based pricing for businesses processing over £50,000 per month. Contact us for a custom quote.
              </p>
            </div>
          </Card>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need a custom solution?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We understand that every business is unique. Our team can create a tailored pricing plan based on your specific requirements.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary" className="mt-4">
              Request Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
