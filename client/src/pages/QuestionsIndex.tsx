import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { qaPages, getAllCategories, getQAByCategory } from "@/data/qaContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, HelpCircle, Search, CreditCard, PiggyBank, Settings, Cpu, BarChart3 } from "lucide-react";
import { Footer } from "@/components/Footer";

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Card Machines": <CreditCard className="h-5 w-5" />,
  "Fees & Pricing": <PiggyBank className="h-5 w-5" />,
  "Setup & Getting Started": <Settings className="h-5 w-5" />,
  "Business Funding": <BarChart3 className="h-5 w-5" />,
  "Technical": <Cpu className="h-5 w-5" />,
  "Comparisons": <Search className="h-5 w-5" />,
  "Payments & Settlements": <CreditCard className="h-5 w-5" />,
};

export default function QuestionsIndex() {
  const categories = getAllCategories();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qaPages.slice(0, 20).map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.shortAnswer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Card Payments & Business Funding UK | Rocket Payments</title>
        <meta name="description" content="Find answers to common questions about card machines, payment processing, fees, and business funding in the UK. Expert answers from Rocket Payments." />
        <meta name="keywords" content="card machine FAQ, payment processing questions, card payment help, business funding FAQ, merchant services questions" />
        <meta property="og:title" content="Frequently Asked Questions | Card Payments & Business Funding UK | Rocket Payments" />
        <meta property="og:description" content="Find answers to common questions about card machines, payment processing, fees, and business funding in the UK." />
        <link rel="canonical" href="https://rocketpayments.co.uk/questions" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <HelpCircle className="h-5 w-5" />
                <span className="font-medium">Help Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="questions-title">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about card payments, fees, 
                business funding, and getting started with Rocket Payments.
              </p>
            </div>
          </div>
        </section>

        {/* Questions by Category */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {categories.map((category, catIndex) => {
                const categoryQuestions = getQAByCategory(category);
                return (
                  <div key={catIndex} className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {categoryIcons[category] || <HelpCircle className="h-5 w-5" />}
                      </div>
                      <h2 className="text-2xl font-bold">{category}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {categoryQuestions.map((qa, index) => (
                        <Link key={index} href={`/questions/${qa.slug}`}>
                          <Card className="hover-elevate cursor-pointer h-full">
                            <CardContent className="p-4">
                              <h3 className="font-medium mb-2">{qa.question}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {qa.shortAnswer.substring(0, 100)}...
                              </p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Most Popular Questions</h2>
              <div className="space-y-4">
                {qaPages.slice(0, 6).map((qa, index) => (
                  <Link key={index} href={`/questions/${qa.slug}`}>
                    <Card className="hover-elevate cursor-pointer">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="font-medium">{qa.question}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-lg opacity-90 mb-6">
                    Our UK-based team is here to help. Get in touch for personalized assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/quote">
                      <Button variant="secondary" size="lg" data-testid="button-contact-team">
                        Contact Our Team
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/guides">
                      <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-read-guides">
                        Read Our Guides
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/guides">
                  <Button variant="outline">Ultimate Guides</Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline">Industry Articles</Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline">See Our Rates</Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline">Our Products</Button>
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
