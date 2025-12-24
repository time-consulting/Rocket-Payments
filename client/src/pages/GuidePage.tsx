import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { getPillarBySlug, pillarPages } from "@/data/pillarContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = getPillarBySlug(slug || "");

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
    "dateModified": guide.lastUpdated,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rocketpayments.co.uk/guides/${guide.slug}`
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": guide.title,
    "description": guide.metaDescription,
    "step": guide.tableOfContents.map((item, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": item.title,
      "url": `https://rocketpayments.co.uk/guides/${guide.slug}#${item.id}`
    }))
  };

  return (
    <>
      <Helmet>
        <title>{guide.metaTitle}</title>
        <meta name="description" content={guide.metaDescription} />
        <meta name="keywords" content={guide.keywords} />
        <meta property="og:title" content={guide.metaTitle} />
        <meta property="og:description" content={guide.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://rocketpayments.co.uk/guides/${guide.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={guide.metaTitle} />
        <meta name="twitter:description" content={guide.metaDescription} />
        <link rel="canonical" href={`https://rocketpayments.co.uk/guides/${guide.slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/guides" className="hover:text-primary">Guides</Link>
                <ChevronRight className="h-4 w-4" />
                <span>Ultimate Guides</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6" data-testid="guide-title">
                {guide.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Updated: {guide.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{guide.readTime}</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                {guide.metaDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8 border-b bg-muted/30 sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-semibold">Table of Contents</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {guide.tableOfContents.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm px-3 py-1.5 rounded-full border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {index + 1}. {item.title}
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
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.subsections?.map((subsection, subIndex) => (
                    <div key={subIndex} className="mt-8 ml-4 pl-4 border-l-2 border-primary/20">
                      <h3 className="text-xl font-semibold mb-4">{subsection.title}</h3>
                      {subsection.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
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

        {/* Related Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guide.relatedLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <Card className="hover-elevate cursor-pointer h-full">
                      <CardContent className="p-4 flex items-center justify-between">
                        <span className="font-medium">{link.title}</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </CardContent>
                    </Card>
                  </Link>
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
                Join thousands of UK businesses already saving money with Rocket Payments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/free-terminal">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-get-free-terminal">
                    Get FREE Terminal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-get-quote">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">More Comprehensive Guides</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pillarPages
                  .filter(p => p.slug !== guide.slug)
                  .map((otherGuide, index) => (
                    <Link key={index} href={`/guides/${otherGuide.slug}`}>
                      <Card className="hover-elevate cursor-pointer h-full">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-2">{otherGuide.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {otherGuide.metaDescription.substring(0, 120)}...
                          </p>
                          <div className="flex items-center text-sm text-primary">
                            <span>Read guide</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
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
