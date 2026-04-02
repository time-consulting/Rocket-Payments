import { useLocation, Link } from "wouter";
import { SEO } from "@/components/SEO";
import { getGuideBySlug, industryGuides } from "@/data/industryGuides";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, TrendingUp, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function IndustryGuidePage() {
  const [pathname] = useLocation();
  const slug = pathname.replace("/guides/", "");
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Guide Not Found</h1>
          <Link href="/guides">
            <Button>View All Guides</Button>
          </Link>
        </div>
      </div>
    );
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Rocket Payments"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rocket Payments",
      "url": "https://rocketpayments.co.uk"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rocketpayments.co.uk/guides/${guide.slug}`
    }
  };

  const categoryLabels = {
    epos: "EPOS & Integrations",
    reservations: "Reservations & Bookings",
    intelligence: "Data & Analytics",
    funding: "Business Funding",
    trends: "Industry Trends"
  };

  return (
    <>
      <SEO
        title={guide.metaTitle}
        description={guide.metaDescription}
        canonical={`https://rocketpayments.co.uk/guides/${guide.slug}`}
        keywords={guide.keywords}
        ogType="article"
        structuredData={[faqSchema, articleSchema]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/guides" className="hover:text-primary">Guides</Link>
                <ChevronRight className="h-4 w-4" />
                <span>{categoryLabels[guide.category]}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6" data-testid="industry-guide-title">
                {guide.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {guide.heroText}
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-semibold">In This Guide</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {guide.sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm px-3 py-1.5 rounded-full border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-16 scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.title}</h2>
                  
                  {section.callout && (
                    <Card className="mb-8 border-primary/20 bg-primary/5">
                      <CardContent className="p-6 flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl font-bold text-primary">{section.callout.stat}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-medium">{section.callout.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {guide.faqSchema.map((faq, index) => (
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
                Ready to Get Started?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                {guide.ctaText} - join thousands of UK businesses growing with Rocket Payments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={guide.ctaLink}>
                  <Button size="lg" variant="secondary" data-testid="button-guide-cta">
                    {guide.ctaText}
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

        {/* Related Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {industryGuides
                  .filter(g => g.slug !== guide.slug)
                  .slice(0, 4)
                  .map((relatedGuide, index) => (
                    <Link key={index} href={`/guides/${relatedGuide.slug}`}>
                      <Card className="hover-elevate cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            <span>{categoryLabels[relatedGuide.category]}</span>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{relatedGuide.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedGuide.heroText.substring(0, 100)}...
                          </p>
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
