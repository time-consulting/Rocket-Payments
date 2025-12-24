import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { getLocationBySlug, locationPages } from "@/data/locationPages";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin, Phone, Star, ArrowRight, Building2, Clock, Shield, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function LocationPage() {
  const [pathname] = useLocation();
  const slug = pathname.replace("/", "");
  const location = getLocationBySlug(slug);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
          <Link href="/blog">
            <Button>View All Locations</Button>
          </Link>
        </div>
      </div>
    );
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rocket Payments",
    "description": `Card machines and payment terminals for ${location.town} businesses. Rates from 0.29%, no monthly fees.`,
    "url": `https://rocketpayments.co.uk/${location.slug}`,
    "telephone": "+44-800-123-4567",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.town,
      "addressRegion": location.county,
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": location.town
    },
    "priceRange": "From 0.29%",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Card Machines ${location.town}`,
    "description": location.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Rocket Payments"
    },
    "areaServed": {
      "@type": "City",
      "name": location.town
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Payment Terminal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FREE Tap to Pay"
          },
          "price": "0",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Card Terminal Rental"
          },
          "price": "0",
          "priceCurrency": "GBP",
          "description": "No monthly fees"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <meta name="keywords" content={location.keywords} />
        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://rocketpayments.co.uk/${location.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={location.metaTitle} />
        <meta name="twitter:description" content={location.metaDescription} />
        <link rel="canonical" href={`https://rocketpayments.co.uk/${location.slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">{location.town}, {location.county}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="location-title">
                {location.heroHeadline}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {location.heroSubheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/free-terminal">
                  <Button size="lg" className="w-full sm:w-auto" data-testid="button-get-free-terminal">
                    Get FREE Terminal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-get-quote">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">PCI DSS Level 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">Next-Day Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">From 0.29%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Local Businesses We Serve */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                {location.town} Businesses We Serve
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {location.localBusinesses.map((business, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{business}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Why {location.town} Businesses Choose Rocket Payments
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Join hundreds of local businesses already saving money on card payments
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">FREE Tap to Pay</h3>
                      <p className="text-muted-foreground">No hardware costs - use your iPhone to accept payments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Lowest Rates from 0.29%</h3>
                      <p className="text-muted-foreground">Significantly cheaper than Dojo, Square, and SumUp</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">No Monthly Fees</h3>
                      <p className="text-muted-foreground">Zero hidden charges, setup costs, or cancellation fees</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Next-Day Payments</h3>
                      <p className="text-muted-foreground">Funds in your account by 6am, 7 days a week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Local {location.county} Support</h3>
                      <p className="text-muted-foreground">UK-based team with local knowledge and fast response</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">600+ EPOS Integrations</h3>
                      <p className="text-muted-foreground">Works with your existing till and booking systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-xl mb-6 italic">
                    "{location.testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{location.testimonial.name}</p>
                    <p className="text-muted-foreground">{location.testimonial.business}</p>
                    <p className="text-sm text-muted-foreground">{location.testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Also Serving Nearby Areas
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Rocket Payments provides card machines to businesses throughout {location.county}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {location.nearbyAreas.map((area, index) => (
                  <span key={index} className="px-4 py-2 bg-background rounded-full border text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions About Card Machines in {location.town}
              </h2>
              <div className="space-y-6">
                {location.faqSchema.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started in {location.town}?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join hundreds of {location.town} businesses already saving money with Rocket Payments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/free-terminal">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-cta-free-terminal">
                    Get FREE Terminal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-cta-quote">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Card Machines in Other {location.county} Towns
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locationPages
                  .filter(loc => loc.county === location.county && loc.slug !== location.slug)
                  .slice(0, 8)
                  .map((loc, index) => (
                    <Link key={index} href={`/${loc.slug}`}>
                      <Card className="hover-elevate cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <span className="font-medium">{loc.town}</span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
