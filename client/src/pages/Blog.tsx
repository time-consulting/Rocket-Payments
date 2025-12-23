import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, CreditCard, Building2, Truck, Scissors, Car, Coffee, ShoppingBag, Sparkles, Wrench, Beer, Pizza } from "lucide-react";
import { blogPosts, getTapToPayPosts } from "@/data/blogPosts";

const industryIcons: Record<string, any> = {
  "Barbers & Barbershops": Scissors,
  "Hair Salons & Stylists": Sparkles,
  "Taxi & Private Hire": Car,
  "Food Trucks & Street Food": Truck,
  "Market Traders & Craft Fairs": ShoppingBag,
  "Personal Trainers & Fitness": Building2,
  "Restaurants & Cafes": Coffee,
  "Retail & Gift Shops": ShoppingBag,
  "Mobile Beauty & Therapists": Sparkles,
  "Tradespeople & Builders": Wrench,
  "Pubs & Bars": Beer,
  "Takeaways & Delivery": Pizza,
};

export default function Blog() {
  const tapToPayPosts = getTapToPayPosts();
  const otherPosts = blogPosts.filter(post => !post.tapToPayFree);

  return (
    <>
      <SEO
        title="Card Machine Guides by Industry UK | FREE Tap to Pay | Rocket Payments Blog"
        description="Expert guides on card machines for every UK industry. FREE Tap to Pay for barbers, salons, taxi drivers. Lower fees than Dojo. Serving Kent, East Sussex & nationwide."
        canonical="https://rocketpayments.co.uk/blog"
        keywords="card machine UK, card payment by industry, Tap to Pay free, card machine barbers, card machine salon, card machine taxi, Dojo alternative, payment terminal Kent, card reader East Sussex"
      />
      <div className="min-h-screen bg-background">
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm" data-testid="badge-hero">
                <Smartphone className="w-4 h-4 mr-2" />
                Industry Guides
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight" data-testid="text-hero-title">
                Card Machines for
                <span className="text-primary block">Every UK Business</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-description">
                Expert guides on choosing the right card payment solution for your industry. 
                FREE Tap to Pay for mobile businesses. Lower fees than Dojo.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10">
                <Smartphone className="w-4 h-4 mr-2" />
                No Hardware Costs
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-section-tap-to-pay">
                FREE Tap to Pay Industries
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These mobile industries benefit most from our FREE Tap to Pay solution. 
                No card machine to buy, no monthly fees - just your iPhone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tapToPayPosts.map((post) => {
                const Icon = industryIcons[post.industry] || CreditCard;
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full hover-elevate cursor-pointer border-primary/20 bg-card/80 backdrop-blur" data-testid={`card-blog-${post.slug}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2 text-xs">
                              FREE Tap to Pay
                            </Badge>
                            <h3 className="font-bold text-lg leading-tight">{post.industry}</h3>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <CreditCard className="w-4 h-4 mr-2" />
                Terminal Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-section-terminals">
                Card Machine Guides by Industry
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive guides for businesses that need traditional card terminals. 
                Lower fees than Dojo, EPOS integration, and next-day deposits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => {
                const Icon = industryIcons[post.industry] || CreditCard;
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full hover-elevate cursor-pointer" data-testid={`card-blog-${post.slug}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-foreground/70" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">
                              Lower Than Dojo
                            </Badge>
                            <h3 className="font-bold text-lg leading-tight">{post.industry}</h3>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-section-cta">
                Ready to Switch to Rocket Payments?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of UK businesses saving money on card processing. 
                Lower fees than Dojo, FREE Tap to Pay for mobile businesses, and next-day deposits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/free-terminal">
                  <Button size="lg" className="w-full sm:w-auto" data-testid="button-free-terminal">
                    Get FREE Card Machine
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-pricing">
                    Compare Our Rates
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
