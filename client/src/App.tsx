import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickCapture } from "@/components/QuickCapture";
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
          description="Rocket Payments is a UK-based payment solutions provider helping over 110,000 businesses accept card payments faster, cheaper, and more reliably."
          content={[
            "Rocket Payments was founded with a clear purpose: to give UK businesses access to enterprise-grade payment technology without the enterprise price tag. We believe every business — whether a sole trader at a market stall or a growing hospitality group — deserves payment infrastructure that works flawlessly, every time.",
            "Today, we serve over 110,000 businesses across the United Kingdom, processing more than 1.8 billion transactions every year. Our network maintains an industry-leading 99.99% uptime, meaning your business never misses a sale due to a technical failure.",
            "We offer a comprehensive range of payment solutions including portable card machines (Rocket Go, Rocket Pocket, Rocket Wired), Tap to Pay on iPhone, online payment links, integrated EPOS connectivity, and our Flex Funds revenue-based business finance product. Whether you need a single terminal for a mobile business or a full estate of integrated payment devices, we have a solution tailored to you.",
            "Our team is UK-based and available around the clock. We believe support isn't an afterthought — it's a core part of the product. Every customer gets a dedicated onboarding experience, and our support team is consistently rated 4.9 out of 5 by the businesses we work with.",
            "We're proud to be trusted by businesses in hospitality, retail, beauty, health, food service, events, and professional services. Our transparent pricing means no hidden fees, no surprise charges — just competitive transaction rates and straightforward monthly terms.",
            "Rocket Payments is a trading name registered in England and Wales. We are fully compliant with the Payment Card Industry Data Security Standard (PCI DSS Level 1) and operate in accordance with UK financial regulations. Our commitment to compliance protects not just your business, but every customer who pays through your terminal.",
            "If you'd like to find out more about who we are or explore a partnership opportunity, we'd love to hear from you. Use the button below to start a conversation with our team."
          ]}
        />
      </Route>
      <Route path="/support">
        <SimplePage
          title="Customer Support"
          description="Rocket Payments customer support is available 24/7. Get expert help with terminals, EPOS integration, account setup, and payment queries from our UK-based team."
          content={[
            "At Rocket Payments, we know that when something goes wrong with your payment setup, every minute counts. That's why our UK-based support team is available 24 hours a day, 7 days a week — by phone, email, or live chat. You'll always speak to a real person, not an automated system.",
            "Our team can help with a wide range of issues including: initial terminal setup and configuration, pairing your device to a new SIM or Wi-Fi network, integrating your card machine with compatible EPOS and till systems, troubleshooting declined transactions or connectivity issues, understanding your monthly statement, and assistance with PCI DSS compliance questionnaires.",
            "New to Rocket Payments? Our onboarding team will walk you through every step — from activating your terminal to processing your first transaction. Most customers are fully set up and taking payments within 24–48 hours of their terminal arriving.",
            "For EPOS integration support, we have specialist technicians trained in ICRTouch, Goodtill, Lightspeed, and over 40 other leading EPOS platforms. If your system isn't on our standard list, contact us and we'll assess compatibility for you.",
            "Experiencing an issue right now? The fastest way to get help is by calling our dedicated merchant support line or starting a live chat through our website. For non-urgent queries, email support typically responds within two business hours.",
            "We also maintain an online Help Centre with step-by-step guides, video walkthroughs, and answers to common questions about your terminal and account. Visit the Help Centre to self-serve answers at any time.",
            "Our support team is consistently rated 4.9 out of 5 by our merchants. We're proud of that score because it reflects our commitment to solving problems properly the first time, without passing you between departments."
          ]}
        />
      </Route>
      <Route path="/contact">
        <SimplePage
          title="Contact Us"
          description="Get in touch with Rocket Payments. Our UK-based team is ready to help you find the right payment solution, compare rates, or get a free quote."
          content={[
            "Whether you're ready to switch payment providers or just starting to explore your options, our team is here to help. We work with businesses of all sizes — from sole traders to multi-site operators — and we'll take the time to understand your specific needs before recommending a solution.",
            "The quickest way to get started is to complete our free savings calculator or request a quote directly. We'll review your current processing costs (if applicable) and show you exactly how much you could save by switching to Rocket Payments — with no obligation and no pushy sales pitch.",
            "For businesses that prefer to speak directly with someone, our sales team is available Monday to Friday, 9am to 6pm. You can also reach our general enquiries line seven days a week if you have a question that can't wait.",
            "If you're an existing merchant with a question about your account, billing, or terminal, please contact our dedicated merchant support team who are available 24/7 and can resolve most issues on the first call.",
            "Interested in becoming a partner or reseller? We have a structured partner programme that allows other businesses to refer or resell Rocket Payments solutions. Get in touch with our partnerships team to find out more about revenue share, training, and support resources.",
            "We aim to respond to all email and contact form enquiries within two business hours during working days. For urgent issues, phone and live chat are the fastest routes to a resolution.",
            "Our registered business address and full contact details are available on request. We look forward to hearing from you and helping your business take payments smarter."
          ]}
        />
      </Route>
      <Route path="/privacy">
        <SimplePage
          title="Privacy Policy"
          description="Rocket Payments Privacy Policy — how we collect, use, store, and protect your personal data in accordance with UK GDPR and the Data Protection Act 2018."
          content={[
            "Your privacy is important to us. This policy explains how Rocket Payments collects, uses, and protects personal data when you use our website, register for our services, or contact our team. We are committed to handling your information responsibly and in full compliance with UK GDPR and the Data Protection Act 2018.",
            "We collect personal data including your name, email address, phone number, business address, and payment or financial information when you register for an account, request a quote, apply for merchant services, or complete a contact form. We use this data to provide our payment processing services, manage your account, send you service-related communications, and improve our products.",
            "Payment card data entered through Rocket Payments terminals is handled exclusively within our PCI DSS Level 1 certified infrastructure. We do not store raw card numbers on our systems. All cardholder data is transmitted using strong TLS encryption, and our point-to-point encryption (P2PE) systems ensure card data is protected from the moment a card is tapped or inserted.",
            "We share data with third parties only where necessary to deliver our services — for example, with payment scheme operators (Visa, Mastercard), our acquiring bank partners, fraud prevention agencies, and regulated compliance bodies. We do not sell, rent, or trade your personal data with marketing companies or unrelated third parties.",
            "You have rights under UK GDPR including the right to access your personal data, correct inaccurate data, request deletion of your data (subject to our legal obligations), and object to certain types of processing. To exercise any of these rights, please contact our Data Protection Officer using the details provided below.",
            "We retain your data for as long as necessary to provide our services and meet our regulatory obligations. Merchant account data is typically retained for a minimum of six years following account closure in line with financial services regulations.",
            "Our website uses cookies to improve your browsing experience and collect anonymous analytics data. You can control cookie settings via your browser. For a full breakdown of the cookies we use, please refer to our Cookie Policy. This Privacy Policy was last updated in 2024 and will be reviewed annually or whenever material changes are made to our data practices."
          ]}
        />
      </Route>
      <Route path="/terms">
        <SimplePage
          title="Terms of Service"
          description="Rocket Payments Terms of Service — the legal agreement governing your use of our payment processing services, merchant account, and website."
          content={[
            "These Terms of Service govern your use of Rocket Payments' payment processing services, merchant account, card terminals, and associated software platforms. By applying for a Rocket Payments merchant account or using any of our services, you confirm that you have read, understood, and agree to be bound by these terms.",
            "Rocket Payments provides access to payment acceptance technology including physical card terminals, Tap to Pay on iOS and Android, online payment links, and gateway connectivity. Our services are available to businesses registered in the United Kingdom. We reserve the right to accept or decline any application for merchant services in accordance with our risk management policies and the requirements of our acquiring bank partners.",
            "All pricing, transaction fees, and monthly charges are set out in your individual merchant agreement. Rates may vary based on your business type, transaction volume, and the products selected. Any changes to pricing will be communicated to you with a minimum of 30 days' notice. Charges are applied monthly in arrears and invoiced to the payment method held on your account.",
            "You are responsible for maintaining the security of your account credentials, ensuring your terminals are used only for legitimate business transactions, and maintaining compliance with PCI DSS requirements applicable to your merchant level. Fraudulent use of our services, deliberate chargebacks, or breach of card scheme rules may result in suspension or termination of your account.",
            "Either party may terminate the merchant agreement by providing written notice in accordance with the notice period specified in your individual merchant contract. Early termination fees may apply if you exit your contract before the agreed minimum term. We will always aim to be fair and transparent in applying any exit charges.",
            "Rocket Payments' liability to you is limited to direct losses arising from our negligence or breach of contract. We are not liable for indirect losses, loss of profit, or loss of revenue. Nothing in these terms limits our liability for death, personal injury, or fraud caused by our negligence.",
            "These terms are governed by the laws of England and Wales. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts of England and Wales. For a full copy of our standard merchant terms and conditions, please contact our legal team or request a copy via your account manager."
          ]}
        />
      </Route>
      <Route path="/compliance">
        <SimplePage
          title="Compliance & Security"
          description="Rocket Payments is PCI DSS Level 1 certified. Learn how we protect your business and your customers through encryption, fraud monitoring, and regulatory compliance."
          content={[
            "Security and compliance are not optional extras at Rocket Payments — they are the foundation of everything we do. As a payment service provider operating in the UK financial services ecosystem, we are subject to rigorous regulatory standards and we go above and beyond the minimum requirements to protect the merchants and cardholders that trust us.",
            "Rocket Payments is certified to PCI DSS Level 1, the highest tier of the Payment Card Industry Data Security Standard. This certification is independently audited each year by a Qualified Security Assessor (QSA) and covers all aspects of our card data environment including our network infrastructure, application security, access management, and physical security controls.",
            "All card transactions processed through Rocket Payments terminals are protected by Point-to-Point Encryption (P2PE). This means cardholder data is encrypted at the point of interaction — the moment a card is tapped, inserted, or swiped — and can only be decrypted within our secure processing environment. This significantly reduces the scope of your PCI DSS compliance burden as a merchant.",
            "Our fraud monitoring systems operate in real time, analysing transaction patterns across our network to detect and block suspicious activity before it results in a chargeback or loss. We use machine learning models trained on millions of UK transactions to identify anomalies specific to your business type and region.",
            "All data in transit between terminals, our processing platform, and card schemes is protected using TLS 1.2 or higher. Data at rest is encrypted using AES-256. Access to our production systems is controlled through multi-factor authentication, role-based access controls, and comprehensive audit logging.",
            "We operate in compliance with the UK Financial Conduct Authority (FCA) regulatory framework for payment institutions. We are also registered with the Information Commissioner's Office (ICO) as a data controller and maintain full compliance with UK GDPR obligations regarding the processing of personal data.",
            "As a Rocket Payments merchant, you benefit from our compliance infrastructure without needing to maintain it yourself. We provide access to a PCI DSS Self-Assessment Questionnaire (SAQ) tool and our compliance team is available to help you complete your annual attestation. Our goal is to make compliance straightforward so you can focus on running your business."
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
