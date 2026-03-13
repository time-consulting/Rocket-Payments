import { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickCapture } from "@/components/QuickCapture";
import { Rocket } from "lucide-react";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import RocketGo from "@/pages/RocketGo";
import RocketPocket from "@/pages/RocketPocket";
import RocketWired from "@/pages/RocketWired";
import TapToPay from "@/pages/TapToPay";
import OnlinePayments from "@/pages/OnlinePayments";
import PaymentLinks from "@/pages/PaymentLinks";
import FlexFunds from "@/pages/FlexFunds";
import Sidekick from "@/pages/Sidekick";
import Integrations from "@/pages/Integrations";
import Bookings from "@/pages/Bookings";
import BusinessFunding from "@/pages/BusinessFunding";
import Quote from "@/pages/Quote";
import Industries from "@/pages/Industries";
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import SimplePage from "@/pages/SimplePage";
import FreeTerminal from "@/pages/FreeTerminal";
import Champion from "@/pages/Champion";
import CalculateSavings from "@/pages/CalculateSavings";
import ThankYou from "@/pages/ThankYou";
import FreeTerminalThankYou from "@/pages/FreeTerminalThankYou";
import NotFound from "@/pages/not-found";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import LocationPage from "@/pages/LocationPage";
import GuidePage from "@/pages/GuidePage";
import GuidesIndex from "@/pages/GuidesIndex";
import QAPage from "@/pages/QAPage";
import QuestionsIndex from "@/pages/QuestionsIndex";
import IndustryGuidePage from "@/pages/IndustryGuidePage";
import EposPartnersPage from "@/pages/EposPartnersPage";
import FundingApply from "@/pages/FundingApply";
import DojoPartnerOffer from "@/pages/DojoPartnerOffer";
import BillUpload from "@/pages/BillUpload";

function SplashScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade after 1.6s brand moment
    const fadeTimer = setTimeout(() => setFading(true), 1600);
    // Unmount after fade completes
    const doneTimer = setTimeout(() => onDone(), 1600 + 700);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: '#0a0f1a',
        opacity: fading ? 0 : 1,
        transition: fading ? 'opacity 0.7s ease' : 'none',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.18) 0%, transparent 65%)' }} />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)' }} />

      {/* Core content */}
      <div className="relative flex flex-col items-center gap-5 text-center px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Rocket className="h-10 w-10 text-primary" />
          <span className="text-2xl font-black text-white tracking-[0.2em] uppercase">Rocket</span>
        </div>

        {/* Hero copy */}
        <div className="space-y-0.5 mt-1">
          <p className="text-5xl sm:text-6xl font-black text-white leading-[0.9] tracking-tighter">
            Payment
          </p>
          <p
            className="text-5xl sm:text-6xl font-black leading-[0.9] tracking-tighter"
            style={{ background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Paradise.
          </p>
        </div>

        {/* Subline */}
        <p className="text-xs text-white/35 font-semibold tracking-[0.25em] uppercase mt-1">
          The engine behind every sale
        </p>

        {/* Pulsing dots */}
        <div className="flex items-center gap-2 mt-3">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary/70"
              style={{ animation: 'pulse 1.4s ease-in-out infinite', animationDelay: `${i * 0.22}s` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-10 px-8">
        {[
          { num: '110,000+', label: 'Businesses' },
          { num: '0.29%', label: 'From' },
          { num: '24/7', label: 'Support' },
        ].map(({ num, label }) => (
          <div key={num} className="text-center">
            <div className="text-sm font-black text-white/60 tabular-nums">{num}</div>
            <div className="text-[9px] font-bold text-white/25 uppercase tracking-widest mt-0.5">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/rocket-go" component={RocketGo} />
      <Route path="/products/rocket-pocket" component={RocketPocket} />
      <Route path="/products/rocket-wired" component={RocketWired} />
      <Route path="/products/tap-to-pay" component={TapToPay} />
      <Route path="/products/online-payments" component={OnlinePayments} />
      <Route path="/products/payment-links" component={PaymentLinks} />
      <Route path="/products/flex-funds" component={FlexFunds} />
      <Route path="/products/sidekick" component={Sidekick} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/epos-partners" component={EposPartnersPage} />
      <Route path="/products/:slug" component={ProductDetail} />
      <Route path="/bookings" component={Bookings} />
      <Route path="/business-funding" component={BusinessFunding} />
      <Route path="/industries" component={Industries} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/resources" component={Resources} />
      <Route path="/quote" component={Quote} />
      <Route path="/free-terminal" component={FreeTerminal} />
      <Route path="/champion" component={Champion} />
      <Route path="/calculate-savings" component={CalculateSavings} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/free-terminal-thank-you" component={FreeTerminalThankYou} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/guides" component={GuidesIndex} />
      <Route path="/guides/:slug" component={GuidePage} />
      <Route path="/questions" component={QuestionsIndex} />
      <Route path="/questions/:slug" component={QAPage} />
      <Route path="/upload-bill" component={BillUpload} />
      <Route path="/:slug">{(params) => {
        const locationSlugs = ["card-machines-maidstone", "card-machines-canterbury", "card-machines-tunbridge-wells", "card-machines-ashford", "card-machines-dover", "card-machines-folkestone", "card-machines-margate", "card-machines-ramsgate", "card-machines-gravesend", "card-machines-dartford", "card-machines-sevenoaks", "card-machines-tonbridge", "card-machines-brighton", "card-machines-eastbourne", "card-machines-hastings", "card-machines-lewes", "card-machines-bexhill", "card-machines-crowborough"];
        if (locationSlugs.includes(params.slug || "")) {
          return <LocationPage />;
        }
        return <NotFound />;
      }}</Route>
      <Route path="/about">
        <SimplePage
          title="About Rocket Payments"
          description="We're on a mission to make payment processing fast, reliable, and accessible for businesses of all sizes."
          content={[
            "Rocket Payments was founded with a simple mission: to provide businesses with payment solutions that just work. No complexity, no downtime, no surprises.",
            "Today, we serve over 110,000 businesses globally, processing 1.8 billion transactions every year with industry-leading 99.99% uptime.",
            "Our team is committed to innovation, reliability, and exceptional customer support. We're here to help your business succeed."
          ]}
        />
      </Route>
      <Route path="/support">
        <SimplePage
          title="Customer Support"
          description="We're here to help you succeed. Get in touch with our award-winning support team."
          content={[
            "Our UK-based support team is available 24/7 to help you with any questions or issues.",
            "Whether you need help setting up your terminal, integrating with your EPOS system, or troubleshooting an issue, we're here for you.",
            "Contact us via phone, email, or live chat for fast, friendly assistance."
          ]}
        />
      </Route>
      <Route path="/contact">
        <SimplePage
          title="Contact Us"
          description="Get in touch with our team to learn more about Rocket Payments."
          content={[
            "Ready to upgrade your payment processing? We'd love to hear from you.",
            "Fill out our quote form to get started, or reach out to our sales team for a personalized demo.",
            "We typically respond within 24 hours and can have you up and running within 48 hours."
          ]}
        />
      </Route>
      <Route path="/privacy">
        <SimplePage
          title="Privacy Policy"
          description="Your privacy and data security are our top priorities."
          content={[
            "At Rocket Payments, we take your privacy seriously. We collect and process only the information necessary to provide our payment services.",
            "All payment data is encrypted end-to-end and we maintain full PCI DSS Level 1 compliance.",
            "We never sell your data to third parties. For more detailed information about how we handle your data, please contact our privacy team."
          ]}
        />
      </Route>
      <Route path="/terms">
        <SimplePage
          title="Terms of Service"
          description="Please read these terms carefully before using our services."
          content={[
            "By using Rocket Payments services, you agree to these terms and conditions.",
            "We provide payment processing services subject to availability and compliance with applicable regulations.",
            "For complete terms and conditions, including pricing, fees, and termination policies, please contact our legal team."
          ]}
        />
      </Route>
      <Route path="/compliance">
        <SimplePage
          title="Compliance & Security"
          description="We maintain the highest standards of security and regulatory compliance."
          content={[
            "Rocket Payments is PCI DSS Level 1 certified, the highest level of payment security certification.",
            "We employ point-to-point encryption, instant fraud detection, and continuous monitoring to protect your business and your customers.",
            "Our systems are regularly audited and we maintain compliance with all relevant financial regulations."
          ]}
        />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function QuickCaptureWrapper() {
  const [location] = useLocation();
  const excludedPages = ["/free-terminal-thank-you", "/thank-you", "/calculate-savings", "/funding-apply", "/dojo-partner-offer", "/upload-bill"];
  
  if (excludedPages.includes(location)) {
    return null;
  }
  
  return <QuickCapture />;
}

function StandalonePage({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          {children}
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function App() {
  const [location] = useLocation();
  // Only show splash once per browser session — skip on return visits to protect Core Web Vitals
  const [splashDone, setSplashDone] = useState(() => {
    try { return !!sessionStorage.getItem('rp_splash_done'); } catch { return false; }
  });

  const handleSplashDone = () => {
    try { sessionStorage.setItem('rp_splash_done', '1'); } catch {}
    setSplashDone(true);
  };
  
  const standalonePages = ["/funding-apply", "/dojo-partner-offer"];
  
  if (standalonePages.includes(location)) {
    return (
      <StandalonePage>
        <Switch>
          <Route path="/funding-apply" component={FundingApply} />
          <Route path="/dojo-partner-offer" component={DojoPartnerOffer} />
        </Switch>
      </StandalonePage>
    );
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          {!splashDone && <SplashScreen onDone={handleSplashDone} />}
          <div className="flex flex-col min-h-screen">
            <Header />
            <QuickCaptureWrapper />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
