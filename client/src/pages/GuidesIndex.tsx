import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { pillarPages } from "@/data/pillarContent";
import { industryGuides } from "@/data/industryGuides";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock, TrendingUp, Zap, BarChart3, PiggyBank } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function GuidesIndex() {
  return (
    <>
      <SEO
        title="Business Payment Guides UK | Rocket Payments"
        description="Comprehensive guides to card payments, business funding, and payment processing in the UK. Expert advice for UK businesses from Rocket Payments."
        keywords="card payment guide, business funding guide, payment processing UK, merchant services guide, card machine guide"
        canonical="https://rocketpayments.co.uk/guides"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Expert Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="guides-title">
                Ultimate Guides for UK Businesses
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive, in-depth guides covering everything you need to know about card payments, 
                business funding, and growing your business in the UK.
              </p>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8">
                {pillarPages.map((guide, index) => (
                  <Link key={index} href={`/guides/${guide.slug}`}>
                    <Card className="hover-elevate cursor-pointer overflow-hidden">
                      <CardContent className="p-0">
                        <div className="md:flex">
                          <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                            <BookOpen className="h-16 w-16 text-primary" />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="px-2 py-1 bg-primary/10 rounded text-primary font-medium">
                                Ultimate Guide
                              </span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{guide.readTime}</span>
                              </div>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold mb-3">
                              {guide.title}
                            </h2>
                            <p className="text-muted-foreground mb-4">
                              {guide.metaDescription}
                            </p>
                            <div className="flex items-center text-primary font-medium">
                              <span>Read Full Guide</span>
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry & Trend Guides */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Industry Insights & Trends</h2>
              <p className="text-center text-muted-foreground mb-12">
                Expert guides on EPOS integration, reservations, data analytics, and hospitality trends
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {industryGuides.map((guide, index) => {
                  const categoryIcons = {
                    epos: Zap,
                    reservations: BookOpen,
                    intelligence: BarChart3,
                    funding: PiggyBank,
                    trends: TrendingUp
                  };
                  const CategoryIcon = categoryIcons[guide.category] || TrendingUp;
                  const categoryLabels = {
                    epos: "EPOS & Integrations",
                    reservations: "Reservations",
                    intelligence: "Data & Analytics",
                    funding: "Business Funding",
                    trends: "Industry Trends"
                  };
                  
                  return (
                    <Link key={index} href={`/guides/${guide.slug}`}>
                      <Card className="hover-elevate cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <CategoryIcon className="h-4 w-4 text-primary" />
                            <span>{categoryLabels[guide.category]}</span>
                          </div>
                          <h3 className="font-bold text-lg mb-2">{guide.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {guide.heroText}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">Looking for Something Specific?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/questions">
                  <Button variant="outline">Browse FAQs</Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline">Industry Guides</Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline">See Our Rates</Button>
                </Link>
                <Link href="/quote">
                  <Button>Get a Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of UK businesses already saving money with Rocket Payments
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
      </main>

      <Footer />
    </>
  );
}
