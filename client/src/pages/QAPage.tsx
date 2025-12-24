import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { getQABySlug, qaPages, getQAByCategory } from "@/data/qaContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, HelpCircle, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function QAPage() {
  const { slug } = useParams<{ slug: string }>();
  const qa = getQABySlug(slug || "");

  if (!qa) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Question Not Found</h1>
          <Link href="/questions">
            <Button>View All Questions</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedQAs = qa.relatedQuestions
    .map(slug => getQABySlug(slug))
    .filter(Boolean);

  const categoryQAs = getQAByCategory(qa.category)
    .filter(q => q.slug !== qa.slug)
    .slice(0, 4);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.shortAnswer + " " + qa.detailedAnswer.join(" ")
      }
    }]
  };

  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": qa.question,
      "text": qa.question,
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.shortAnswer,
        "upvoteCount": 127,
        "url": `https://rocketpayments.co.uk/questions/${qa.slug}`
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{qa.metaTitle}</title>
        <meta name="description" content={qa.metaDescription} />
        <meta name="keywords" content={qa.keywords} />
        <meta property="og:title" content={qa.metaTitle} />
        <meta property="og:description" content={qa.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://rocketpayments.co.uk/questions/${qa.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={qa.metaTitle} />
        <meta name="twitter:description" content={qa.metaDescription} />
        <link rel="canonical" href={`https://rocketpayments.co.uk/questions/${qa.slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(qaSchema)}</script>
      </Helmet>

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/questions" className="hover:text-primary">Questions</Link>
              <ChevronRight className="h-4 w-4" />
              <span>{qa.category}</span>
            </div>
          </div>
        </section>

        {/* Main Question & Answer */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Question */}
              <div className="flex items-start gap-4 mb-8">
                <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold" data-testid="qa-question">
                  {qa.question}
                </h1>
              </div>

              {/* Short Answer (Featured Snippet Optimized) */}
              <Card className="mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h2 className="font-semibold text-lg mb-3">Quick Answer</h2>
                  <p className="text-lg">{qa.shortAnswer}</p>
                </CardContent>
              </Card>

              {/* Detailed Answer */}
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-xl font-semibold mb-4">Detailed Explanation</h2>
                {qa.detailedAnswer.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <Card className="bg-primary text-primary-foreground mb-8">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="font-medium text-lg">{qa.ctaText}</p>
                  <Link href={qa.ctaLink}>
                    <Button variant="secondary" data-testid="button-qa-cta">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Questions */}
        {relatedQAs.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Related Questions</h2>
                <div className="space-y-4">
                  {relatedQAs.map((relatedQa, index) => (
                    relatedQa && (
                      <Link key={index} href={`/questions/${relatedQa.slug}`}>
                        <Card className="hover-elevate cursor-pointer">
                          <CardContent className="p-4 flex items-center justify-between">
                            <span className="font-medium">{relatedQa.question}</span>
                            <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* More from Category */}
        {categoryQAs.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">More About {qa.category}</h2>
                <div className="space-y-4">
                  {categoryQAs.map((catQa, index) => (
                    <Link key={index} href={`/questions/${catQa.slug}`}>
                      <Card className="hover-elevate cursor-pointer">
                        <CardContent className="p-4 flex items-center justify-between">
                          <span className="font-medium">{catQa.question}</span>
                          <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Browse All Questions CTA */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Browse our complete FAQ or get in touch with our team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/questions">
                  <Button variant="outline" data-testid="button-browse-questions">
                    Browse All Questions
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button data-testid="button-contact-us">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
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
