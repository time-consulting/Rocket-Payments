import { useRoute, Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, Smartphone, MapPin, HelpCircle } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { getCompetitorPostBySlug, getAllCompetitorPosts } from "@/data/competitorPosts";
import { getBookingsPostBySlug, getAllBookingsPosts } from "@/data/bookingsPosts";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  if (!slug) {
    return <NotFound />;
  }

  const post = getPostBySlug(slug) || getCompetitorPostBySlug(slug) || getBookingsPostBySlug(slug);
  
  if (!post) {
    return <NotFound />;
  }

  const allPosts = [...blogPosts, ...getAllCompetitorPosts(), ...getAllBookingsPosts()];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
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
      "@id": `https://rocketpayments.co.uk/blog/${post.slug}`
    }
  };

  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug)
    .filter(p => p.tapToPayFree === post.tapToPayFree || p.industry === post.industry)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        canonical={`https://rocketpayments.co.uk/blog/${post.slug}`}
        ogType="article"
        structuredData={[faqStructuredData, articleStructuredData]}
      />

      <div className="min-h-screen bg-background">
        <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6" data-testid="button-back">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Guides
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" data-testid="badge-industry">
                  {post.industry}
                </Badge>
                {post.tapToPayFree && (
                  <Badge variant="outline" className="border-primary/30 bg-primary/10" data-testid="badge-tap-to-pay">
                    <Smartphone className="w-3 h-3 mr-1" />
                    FREE Tap to Pay
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight" data-testid="text-title">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground" data-testid="text-excerpt">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {post.content.map((paragraph, index) => (
                    <p key={index} className="text-foreground/80 leading-relaxed mb-6" data-testid={`text-content-${index}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2" data-testid="text-benefits-title">
                      <Check className="w-5 h-5 text-primary" />
                      Key Benefits for {post.industry}
                    </h2>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {post.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2" data-testid={`text-benefit-${index}`}>
                          <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2" data-testid="text-local-title">
                      <MapPin className="w-5 h-5 text-primary" />
                      Serving {post.industry} in Kent & East Sussex
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Rocket Payments serves {post.industry.toLowerCase()} across the South East including:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.localAreas.map((area, index) => (
                        <Badge key={index} variant="outline" data-testid={`badge-area-${index}`}>
                          {area}
                        </Badge>
                      ))}
                      <Badge variant="outline">& all UK</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2" data-testid="text-faq-title">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                      {post.faqSchema.map((faq, index) => (
                        <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0" data-testid={`faq-${index}`}>
                          <h3 className="font-semibold mb-2">{faq.question}</h3>
                          <p className="text-muted-foreground text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <Card className="sticky top-24 border-primary/20 bg-gradient-to-b from-primary/10 to-background">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4" data-testid="text-cta-title">
                      {post.tapToPayFree ? "Get FREE Tap to Pay" : "Get a Quote Today"}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {post.tapToPayFree ? "No hardware to buy" : "Free terminal available"}
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        No monthly fees
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        Rates from 0.29%
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        Next-day payments
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        Lower than Dojo rates
                      </li>
                    </ul>
                    <Link href={post.tapToPayFree ? "/products/tap-to-pay" : "/free-terminal"}>
                      <Button className="w-full mb-3" data-testid="button-primary-cta">
                        {post.tapToPayFree ? "Get Started FREE" : "Claim Free Terminal"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/quote">
                      <Button variant="outline" className="w-full" data-testid="button-secondary-cta">
                        Get Custom Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {relatedPosts.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4" data-testid="text-related-title">Related Guides</h3>
                      <div className="space-y-3">
                        {relatedPosts.map((related) => (
                          <Link key={related.slug} href={`/blog/${related.slug}`}>
                            <div className="p-3 rounded-md hover-elevate cursor-pointer border border-border" data-testid={`link-related-${related.slug}`}>
                              <p className="font-medium text-sm mb-1">{related.industry}</p>
                              <p className="text-xs text-muted-foreground line-clamp-2">{related.excerpt}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-bottom-cta">
                Ready to Accept Card Payments?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of UK {post.industry.toLowerCase()} saving money with Rocket Payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/free-terminal">
                  <Button size="lg" data-testid="button-bottom-free">
                    Get FREE Terminal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/calculate-savings">
                  <Button size="lg" variant="outline" data-testid="button-bottom-calculate">
                    Calculate Your Savings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
