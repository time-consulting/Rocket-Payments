import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import qsrImage from "@assets/generated_images/Quick_service_restaurant_bc0bbd4b.png";
import fsrImage from "@assets/generated_images/Full_service_restaurant_eb7f483a.png";
import dentalImage from "@assets/generated_images/Dental_office_payment_88d7359b.png";
import retailImage from "@assets/generated_images/Retail_store_checkout_665cbb72.png";

export default function Industries() {
  const industries = [
    {
      title: "Quick-Service Restaurants",
      description: "Power through queues, speed up service, track payments across locations, and reduce your running costs with our fast payment solutions.",
      benefits: [
        "Process payments 58% faster than average",
        "Reduce queue times during peak hours",
        "Track sales across multiple locations",
        "Integrate with major QSR EPOS systems",
      ],
      image: qsrImage,
    },
    {
      title: "Full-Service Restaurants",
      description: "Streamline your front of house, integrate your payments and EPOS, and simplify your end-of-day reconciliation.",
      benefits: [
        "Tableside payment processing",
        "Seamless EPOS integration",
        "5-minute end-of-day reconciliation",
        "Split bill capabilities",
      ],
      image: fsrImage,
    },
    {
      title: "Dental & Healthcare",
      description: "Streamline payments, offer patients more ways to pay, and simplify reconciliation with integrated healthcare-specific solutions.",
      benefits: [
        "PCI DSS compliant",
        "Patient payment plans",
        "Insurance claim integration",
        "Secure data handling",
      ],
      image: dentalImage,
    },
    {
      title: "Retail",
      description: "Fast checkout experiences, inventory integration, and comprehensive reporting for modern retail operations.",
      benefits: [
        "Lightning-fast checkout",
        "Inventory management integration",
        "Multi-location reporting",
        "Gift card support",
      ],
      image: retailImage,
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="text-industries-page-headline">
            Payment solutions for every industry
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand that different businesses have different needs. Our payment solutions are tailored to help your industry thrive.
          </p>
        </div>

        <div className="space-y-24">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`industry-${index}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold">{industry.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Key Benefits
                  </h3>
                  <ul className="grid gap-2">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/quote">
                  <Button size="lg" data-testid={`button-get-started-${index}`}>
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary text-primary-foreground rounded-2xl p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Don't see your industry listed?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We work with businesses across all sectors. Contact us to discuss how we can tailor our payment solutions to your specific needs.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary" className="mt-4">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
