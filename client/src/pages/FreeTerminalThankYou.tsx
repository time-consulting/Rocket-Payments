import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Check, ArrowRight, Phone, Mail, Rocket } from "lucide-react";

export default function FreeTerminalThankYou() {
  const [confettiVisible, setConfettiVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setConfettiVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // LinkedIn Insight Tag for conversion tracking
  useEffect(() => {
    // Set partner ID
    const partnerId = "8332114";
    (window as any)._linkedin_partner_id = partnerId;
    (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
    (window as any)._linkedin_data_partner_ids.push(partnerId);

    // Load LinkedIn tracking script
    if (!(window as any).lintrk) {
      (window as any).lintrk = function(a: any, b: any) {
        (window as any).lintrk.q.push([a, b]);
      };
      (window as any).lintrk.q = [];
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Create noscript fallback image
    const noscriptImg = document.createElement("img");
    noscriptImg.height = 1;
    noscriptImg.width = 1;
    noscriptImg.style.display = "none";
    noscriptImg.alt = "";
    noscriptImg.src = "https://px.ads.linkedin.com/collect/?pid=8332114&fmt=gif";
    document.body.appendChild(noscriptImg);

    return () => {
      // Cleanup on unmount
      if (noscriptImg.parentNode) {
        noscriptImg.parentNode.removeChild(noscriptImg);
      }
    };
  }, []);

  return (
    <>
      <SEO
        title="Thank You - Your Free Terminal is Reserved"
        description="Your free card machine worth £189 has been reserved. Our team will call you within the hour to complete your application."
        canonical="https://rocketpayments.co.uk/free-terminal-thank-you"
        noIndex={true}
      />
      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background flex items-center justify-center px-4 py-20">
      {confettiVisible && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                backgroundColor: ['#2DD4BF', '#10B981', '#14B8A6', '#06B6D4', '#22D3EE'][Math.floor(Math.random() * 5)],
                animation: `fall ${2 + Math.random() * 2}s ease-out forwards`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>

      <div className="max-w-2xl w-full">
        <Card className="p-12 text-center bg-card/90 backdrop-blur shadow-2xl border-2 border-primary/20">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <Check className="w-12 h-12 text-primary-foreground" />
          </div>

          <h1 className="text-5xl lg:text-6xl font-black mb-6" data-testid="text-free-terminal-thank-you">
            Your Free Terminal is Reserved!
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Amazing choice! Our team will call you within the next hour to confirm your free terminal and get you set up with better rates.
          </p>

          <div className="bg-primary/10 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold mb-4">What happens next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-bold">We'll call you within the hour</p>
                  <p className="text-sm text-muted-foreground">A payment specialist will verify your business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <p className="font-bold">Instant approval for most businesses</p>
                  <p className="text-sm text-muted-foreground">90% of businesses are approved same day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <p className="font-bold">Free terminal delivered in 24 hours</p>
                  <p className="text-sm text-muted-foreground">Start accepting payments tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full mb-8">
            <span className="font-bold">
              Your FREE terminal worth £189 is reserved!
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/">
              <Button size="lg" className="rounded-full font-black px-8" data-testid="button-back-home">
                <Rocket className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="rounded-full font-bold px-8" data-testid="button-view-products">
                View Our Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground mb-3">Need to speak to us sooner?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="tel:08001234567" className="flex items-center gap-2 text-primary hover:underline" data-testid="link-phone">
                <Phone className="w-4 h-4" />
                0800 123 4567
              </a>
              <a href="mailto:hello@rocketpayments.co.uk" className="flex items-center gap-2 text-primary hover:underline" data-testid="link-email">
                <Mail className="w-4 h-4" />
                hello@rocketpayments.co.uk
              </a>
            </div>
          </div>
        </Card>
      </div>
      </div>
    </>
  );
}
