import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
