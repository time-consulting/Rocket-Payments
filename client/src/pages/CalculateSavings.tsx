import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import flowerShopImage from "@assets/Gemini_Generated_Image_od39gwod39gwod39_1762433958101.png";
import { SEO } from "@/components/SEO";

interface FormData {
  businessType: string;
  businessNeeds: string;
  turnover: string;
  currentProvider: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  postcode: string;
}

export default function CalculateSavings() {
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessType: "",
    businessNeeds: "",
    turnover: "",
    currentProvider: "",
    name: "",
    email: "",
    phone: "",
    companyName: "",
    postcode: "",
  });

  const businessTypes = [
    { icon: "🍽️", label: "Food & Drink", value: "food-drink" },
    { icon: "🏪", label: "Retail", value: "retail" },
    { icon: "🏥", label: "Clinic", value: "clinic" },
    { icon: "💇", label: "Salon", value: "salon" },
    { icon: "❓", label: "Other", value: "other" },
  ];

  const businessNeeds = [
    { icon: "🖥️", label: "One or more terminals", value: "terminals" },
    { icon: "🏪", label: "A complete POS system", value: "pos-system" },
    { icon: "🔄", label: "A combination", value: "combination" },
  ];

  const turnoverOptions = [
    { label: "Up to £10k", value: "up-to-10k" },
    { label: "Between £10k - £20k", value: "10k-20k" },
    { label: "Between £20k - £50k", value: "20k-50k" },
    { label: "Between £50k - £100k", value: "50k-100k" },
    { label: "Over £100k", value: "over-100k" },
  ];

  const providers = [
    { label: "Dojo", logo: "dojo", value: "dojo" },
    { label: "Sumup", logo: "sumup", value: "sumup" },
    { label: "Teya", logo: "teya", value: "teya" },
    { label: "Clover", logo: "clover", value: "clover" },
    { label: "Takepayments", logo: "takepayments", value: "takepayments" },
    { label: "MyPOS", logo: "mypos", value: "mypos" },
    { label: "Barclaycard", logo: "barclaycard", value: "barclaycard" },
    { label: "Worldpay", logo: "worldpay", value: "worldpay" },
    { label: "Tide", logo: "tide", value: "tide" },
    { label: "New to Payments", logo: "new", value: "new-to-payments" },
    { label: "Other", logo: "other", value: "other" },
  ];

  const handleSelection = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 300);
  };

  const handleBusinessInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send partial form data to GHL webhook (early lead capture)
    try {
      await fetch("/api/calculator-partial-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessType: formData.businessType,
          companyName: formData.companyName,
          postcode: formData.postcode,
          businessNeeds: formData.businessNeeds,
          monthlyTurnover: formData.turnover,
          currentProvider: formData.currentProvider,
          partial: true
        }),
      });
      console.log("📤 Partial form data sent to GHL (early lead capture)");
    } catch (error) {
      console.error("⚠️ Failed to send partial submission:", error);
      // Continue anyway - we don't want to block the user's progress
    }
    
    setTimeout(() => {
      setCurrentStep(6);
    }, 300);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setShowTick(true);
      setTimeout(() => {
        setCurrentStep(7);
        setIsLoading(false);
        setShowTick(false);
      }, 1500);
    }, 3000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setCurrentStep(8);
    }, 300);
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send the calculator data to backend which will push to GHL
      const response = await fetch("/api/calculator-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessType: formData.businessType,
          businessNeeds: formData.businessNeeds,
          monthlyTurnover: formData.turnover,
          currentProvider: formData.currentProvider,
          companyName: formData.companyName,
          postcode: formData.postcode,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        console.log("✅ Calculator submission successful!", result);
        console.log("📤 Webhook sent to GHL:", result.webhookSent);
        navigate("/thank-you");
      } else {
        console.error("❌ Submission failed:", result.error);
      }
    } catch (error) {
      console.error("❌ Error submitting calculator:", error);
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <div className="min-h-screen bg-background flex">
      <SEO
        title="Calculate Your Savings | Free Quote | Rocket Payments"
        description="Calculate your card processing savings with Rocket Payments. Free, no-obligation quote in minutes. Rates from 0.29% with transparent pricing."
        keywords="card payment savings calculator, compare card machine rates, payment processing quote, merchant services quote, card terminal comparison UK"
        canonical="https://rocketpayments.co.uk/calculate-savings"
      />
      {/* Left Side - Questions */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16">
        <div className="max-w-xl mx-auto w-full">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-4xl font-black">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Rocket
              </span>{" "}
              Payments
            </h1>
          </div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-32"
              >
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {!showTick ? (
                      <motion.div
                        key="loader"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                      >
                        <Loader2 className="w-16 h-16 text-primary animate-spin" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="tick"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <Check className="w-10 h-10 text-white" strokeWidth={3} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-xl font-semibold text-muted-foreground"
                >
                  Calculating your savings...
                </motion.p>
              </motion.div>
            ) : (
              <>
                {/* Question 1 - Business Type */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <h2 className="text-4xl lg:text-5xl font-black mb-3">
                      WHAT KIND OF BUSINESS ARE YOU IN?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Trusted by over 39,000 small and medium-sized businesses.
                      <br />
                      See your savings in just 2 minutes - no obligation.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {businessTypes.slice(0, 3).map((type) => (
                        <Card
                          key={type.value}
                          onClick={() => handleSelection("businessType", type.value)}
                          className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all text-center"
                          data-testid={`option-business-${type.value}`}
                        >
                          <div className="text-4xl mb-2">{type.icon}</div>
                          <div className="font-semibold text-sm">{type.label}</div>
                        </Card>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {businessTypes.slice(3).map((type) => (
                        <Card
                          key={type.value}
                          onClick={() => handleSelection("businessType", type.value)}
                          className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all text-center"
                          data-testid={`option-business-${type.value}`}
                        >
                          <div className="text-4xl mb-2">{type.icon}</div>
                          <div className="font-semibold text-sm">{type.label}</div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Question 2 - Business Needs */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <h2 className="text-4xl lg:text-5xl font-black mb-8">
                      WHAT DOES YOUR BUSINESS NEED TO THRIVE?
                    </h2>
                    <div className="space-y-4">
                      {businessNeeds.map((need) => (
                        <Card
                          key={need.value}
                          onClick={() => handleSelection("businessNeeds", need.value)}
                          className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all flex items-center gap-4"
                          data-testid={`option-need-${need.value}`}
                        >
                          <div className="text-4xl">{need.icon}</div>
                          <div className="font-semibold">{need.label}</div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Question 3 - Turnover */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <h2 className="text-4xl lg:text-5xl font-black mb-8">
                      WHAT'S YOUR BUSINESS'S APPROXIMATE MONTHLY CARD TURNOVER? (GBP)
                    </h2>
                    <div className="space-y-4">
                      {turnoverOptions.map((option) => (
                        <Card
                          key={option.value}
                          onClick={() => handleSelection("turnover", option.value)}
                          className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all"
                          data-testid={`option-turnover-${option.value}`}
                        >
                          <div className="font-semibold text-center">{option.label}</div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Question 4 - Current Provider */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                      WHICH PROVIDER ARE YOU CURRENTLY USING?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      If you have multiple providers, select the company that processes the majority of your payments.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                      {providers.map((provider) => (
                        <Card
                          key={provider.value}
                          onClick={() => handleSelection("currentProvider", provider.value)}
                          className="p-4 md:p-6 cursor-pointer hover-elevate active-elevate-2 transition-all text-center"
                          data-testid={`option-provider-${provider.value}`}
                        >
                          <div className="font-semibold text-xs md:text-sm">{provider.label}</div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Question 5 - Business Name & Postcode */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                      TELL US ABOUT YOUR BUSINESS
                    </h2>
                    <p className="text-sm text-muted-foreground mb-8">
                      We'll use this to check local average pricing for the most accurate savings calculation
                    </p>
                    <form onSubmit={handleBusinessInfoSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="Enter your company name"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full text-lg py-6"
                          required
                          data-testid="input-company"
                        />
                      </div>
                      <div>
                        <Input
                          type="text"
                          placeholder="Enter your company postcode"
                          value={formData.postcode}
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          className="w-full text-lg py-6"
                          required
                          data-testid="input-postcode"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full text-lg py-6 rounded-full"
                        data-testid="button-continue-business"
                      >
                        Continue
                      </Button>
                    </form>
                  </motion.div>
                )}

                {/* Question 6 - Personal Name */}
                {currentStep === 6 && (
                  <motion.div
                    key="step6"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                      WHAT'S YOUR NAME?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-8">
                      We'll personalize your savings report
                    </p>
                    <form onSubmit={handleNameSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-lg py-6"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full text-lg py-6 rounded-full"
                        data-testid="button-calculate"
                      >
                        Calculate My Savings
                      </Button>
                    </form>
                  </motion.div>
                )}

                {/* Question 7 - Email */}
                {currentStep === 7 && (
                  <motion.div
                    key="step7"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <h2 className="text-3xl lg:text-4xl font-black mb-4">
                      YOU CAN SAVE £<span className="blur-xl select-none">{Math.floor(Math.random() * 5000 + 2000)}</span> A YEAR
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Enter your email to receive your full savings breakdown
                    </p>
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-lg py-6"
                          required
                          data-testid="input-email"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full text-lg py-6 rounded-full"
                        data-testid="button-continue-email"
                      >
                        Continue
                      </Button>
                    </form>
                  </motion.div>
                )}

                {/* Question 8 - Phone Number */}
                {currentStep === 8 && (
                  <motion.div
                    key="step8"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <h2 className="text-3xl lg:text-4xl font-black mb-4">
                      LAST STEP - GET YOUR PERSONAL QUOTE
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Our payment specialists will call you to discuss your personalized savings plan
                    </p>
                    <form onSubmit={handlePhoneSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-lg py-6"
                          required
                          data-testid="input-phone"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full text-lg py-6 rounded-full"
                        data-testid="button-submit"
                      >
                        Get My Quote
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting, you agree to receive a no-pressure callback from Rocket Payments. You can decline the call at any time.
                      </p>
                    </form>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>

          {/* Progress indicator */}
          {!isLoading && currentStep <= 6 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`h-2 rounded-full transition-all ${
                    step === currentStep
                      ? "w-8 bg-primary"
                      : step < currentStep
                      ? "w-2 bg-primary/60"
                      : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10" />
        <img
          src={flowerShopImage}
          alt="Blooming Success - Flora's Flowers, London, UK"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-12 left-12 z-20 text-white">
          <h3 className="text-3xl font-black mb-2">BLOOMING SUCCESS!</h3>
          <p className="text-lg font-semibold">Flora's Flowers, London, UK</p>
        </div>
      </div>
    </div>
  );
}
