import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Resources() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Guides & Tutorials",
      description: "Step-by-step guides to help you get the most out of Rocket Payments",
      items: [
        "Getting started with your first payment terminal",
        "Integrating with your EPOS system",
        "Understanding PCI compliance made simple",
        "Maximizing uptime and reliability",
      ],
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Technical documentation and API references",
      items: [
        "API documentation",
        "Integration guides",
        "Security best practices",
        "Troubleshooting common issues",
      ],
    },
    {
      icon: HelpCircle,
      title: "Support",
      description: "Get help when you need it",
      items: [
        "24/7 customer support",
        "Live chat assistance",
        "Phone support",
        "Email support",
      ],
    },
    {
      icon: Phone,
      title: "Contact Sales",
      description: "Speak with our team about your needs",
      items: [
        "Request a demo",
        "Get a custom quote",
        "Enterprise solutions",
        "Partnership opportunities",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Resources & Support | Rocket Payments Help Centre"
        description="Guides, documentation and support for Rocket Payments. Get started with your card machine, integrate with EPOS systems, and access 24/7 technical support."
        canonical="https://rocketpayments.co.uk/resources"
        keywords="payment terminal support, card machine help, EPOS integration guide, Rocket Payments support, payment processing help"
      />
      <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="text-resources-headline">
            Resources & Support
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to succeed with Rocket Payments. From getting started guides to technical documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resourceCategories.map((category, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-resource-${index}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center space-y-4">
            <div className="text-3xl font-bold text-primary">99.99%</div>
            <div className="space-y-2">
              <h3 className="font-semibold">Guaranteed Uptime</h3>
              <p className="text-sm text-muted-foreground">
                Industry-leading reliability for your business
              </p>
            </div>
          </Card>

          <Card className="p-6 text-center space-y-4">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="space-y-2">
              <h3 className="font-semibold">Support Available</h3>
              <p className="text-sm text-muted-foreground">
                Get help whenever you need it
              </p>
            </div>
          </Card>

          <Card className="p-6 text-center space-y-4">
            <div className="text-3xl font-bold text-primary">450+</div>
            <div className="space-y-2">
              <h3 className="font-semibold">EPOS Integrations</h3>
              <p className="text-sm text-muted-foreground">
                More than any other provider
              </p>
            </div>
          </Card>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Still have questions?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Our team is here to help. Get in touch and we'll answer any questions you have about Rocket Payments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/calculate-savings">
              <Button size="lg" variant="secondary">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              Browse FAQ
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
