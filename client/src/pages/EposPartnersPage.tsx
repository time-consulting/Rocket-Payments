import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { eposPartners, getFeaturedPartners } from "@/data/eposPartners";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Check, Building2, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function EposPartnersPage() {
  const featuredPartners = getFeaturedPartners();
  const hospitalityPartners = eposPartners.filter(p => p.category === "hospitality");
  const otherPartners = eposPartners.filter(p => p.category !== "hospitality");

  return (
    <>
      <Helmet>
        <title>EPOS Partners | 600+ Integrations | Rocket Payments</title>
        <meta name="description" content="Rocket Payments integrates with 600+ EPOS systems including ICR Touch, Goodtill, Power EPOS, Tevalis, Zonal. Connect your till to your card machine." />
        <meta name="keywords" content="EPOS integration UK, card machine EPOS, integrated payments, ICR Touch integration, Goodtill integration, hospitality EPOS" />
        <meta property="og:title" content="EPOS Partners | 600+ Integrations | Rocket Payments" />
        <meta property="og:description" content="Rocket Payments integrates with 600+ EPOS systems. Connect your till to your card machine for faster service and fewer errors." />
        <link rel="canonical" href="https://rocketpayments.co.uk/epos-partners" />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-primary">600+ INTEGRATIONS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="epos-partners-title">
                Connect Your EPOS to Rocket Payments
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Integrate your existing till system with your card terminal for faster service, 
                fewer errors, and simplified reconciliation. We work with all major UK EPOS providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/integrations">
                  <Button size="lg" data-testid="button-learn-integration">
                    Learn About Integration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="lg" variant="outline" data-testid="button-get-quote">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Featured Integration Partners</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                These leading EPOS providers integrate seamlessly with Rocket Payments terminals
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredPartners.map((partner, index) => (
                  <Card key={index} className="hover-elevate cursor-default">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Building2 className="h-8 w-8 text-primary" />
                        <h3 className="font-bold text-lg">{partner.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {partner.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {partner.bestFor.slice(0, 2).map((industry, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Hospitality Partners */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Hospitality EPOS Partners</h2>
              <p className="text-center text-muted-foreground mb-12">
                EPOS systems designed for restaurants, pubs, bars, hotels, and hospitality venues
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitalityPartners.map((partner, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg">{partner.name}</h3>
                        {partner.website && (
                          <a 
                            href={`https://${partner.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {partner.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {partner.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {partner.bestFor.slice(0, 3).map((industry, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Sector Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Multi-Sector EPOS Partners</h2>
              <p className="text-center text-muted-foreground mb-12">
                Versatile EPOS systems serving hospitality, retail, and other sectors
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPartners.map((partner, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg">{partner.name}</h3>
                        {partner.website && (
                          <a 
                            href={`https://${partner.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {partner.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {partner.bestFor.slice(0, 3).map((industry, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Integrate Your EPOS?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3">Faster Service</h3>
                    <p className="text-muted-foreground">
                      Amounts transfer automatically from till to terminal - no manual keying. 
                      Each transaction is 15-20 seconds faster.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3">Fewer Errors</h3>
                    <p className="text-muted-foreground">
                      Eliminate transposed digits and forgotten items. Integration ensures 
                      the exact amount is charged every time.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3">Easy Reconciliation</h3>
                    <p className="text-muted-foreground">
                      Card totals on your EPOS match your terminal exactly. 
                      End-of-day cashing up becomes a 5-minute task.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3">Fraud Prevention</h3>
                    <p className="text-muted-foreground">
                      Remove opportunities for staff to charge different amounts. 
                      Integration ensures transparency and accountability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Connect Your EPOS?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Get integrated payments with Rocket Payments - setup takes less than an hour
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/free-terminal">
                  <Button size="lg" variant="secondary" data-testid="button-get-free-terminal">
                    Get FREE Terminal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-get-quote">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Don't See Your EPOS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Don't See Your EPOS?</h2>
              <p className="text-muted-foreground mb-6">
                We integrate with 600+ systems - this page shows our most popular partners. 
                Contact us to confirm compatibility with your specific EPOS system.
              </p>
              <Link href="/quote">
                <Button variant="outline">
                  Check Your EPOS Compatibility
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
