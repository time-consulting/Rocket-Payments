import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { Check, ArrowRight, Phone, Clock, Shield, Zap, AlertTriangle, Users } from "lucide-react";
import dojoOfferBanner from "@assets/Gemini_Generated_Image_qzen41qzen41qzen_1769521621828.png";
import dojoLogo from "@assets/dojo_logo_1769521671077.png";
import rocketLogo from "@assets/rocket_payments_PNG_1769521713004.png";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name required"),
  mobile: z.string().min(10, "Valid mobile number required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  currentProvider: z.string().optional(),
  monthlyFees: z.string().optional(),
  industryType: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function DojoPartnerOffer() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const getTimeLeftInCycle = () => {
    const cycleDurationMs = 2.5 * 24 * 60 * 60 * 1000;
    const startDate = new Date('2026-01-01T00:00:00Z').getTime();
    const now = Date.now();
    const elapsed = (now - startDate) % cycleDurationMs;
    return Math.floor((cycleDurationMs - elapsed) / 1000);
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeftInCycle());
  const [spotsLeft, setSpotsLeft] = useState(5);
  const { toast } = useToast();

  // Spots countdown: 5 -> 4 -> 3 within first 45 seconds
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSpotsLeft(4);
    }, 15000); // 15 seconds

    const timer2 = setTimeout(() => {
      setSpotsLeft(3);
    }, 30000); // 30 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      mobile: "",
      email: "",
      currentProvider: "",
      monthlyFees: "",
      industryType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/dojo-partner-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Submission failed");
      }
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return getTimeLeftInCycle();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (days > 0) {
      return { days, hours, minutes, secs };
    }
    return { days: 0, hours, minutes, secs };
  };

  const time = formatTime(timeLeft);

  const onSubmit = (data: FormData) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      const cleanedData = {
        businessName: data.businessName,
        mobile: data.mobile,
        email: data.email || undefined,
        currentProvider: data.currentProvider || undefined,
        monthlyFees: data.monthlyFees || undefined,
        industryType: data.industryType || undefined,
      };
      mutation.mutate(cleanedData as FormData);
    }
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Thank You | Dojo Partner Offer | Rocket Payments"
          description="Your exclusive Dojo partner offer claim has been received."
          canonical="https://rocketpayments.co.uk/dojo-partner-offer"
        />
        <div className="min-h-screen bg-[#004d40] flex items-center justify-center p-4">
          <Card className="max-w-lg w-full p-8 text-center bg-white">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-black mb-4">We're Calling You Now!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              One of our Dojo specialists will call you within the next <span className="font-bold text-[#004d40]">5 minutes</span> to secure your exclusive offer.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-amber-800 font-medium">
                <Phone className="w-4 h-4 inline mr-2" />
                Keep your phone nearby - we'll call from a UK number
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Can't wait? Call us now: <a href="tel:03301234567" className="font-bold text-[#004d40]">0330 123 4567</a>
            </p>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Dojo Partner Offer | Free Card Machine | Rocket Payments"
        description="Claim your FREE Dojo card machine through our exclusive partnership. Limited spots available. No monthly fees, rates from 0.99%. Call back within 5 minutes."
        canonical="https://rocketpayments.co.uk/dojo-partner-offer"
        keywords="Dojo card machine, free Dojo terminal, Dojo partner offer, Dojo payment terminal free, join Dojo, Dojo rates, Dojo alternative"
      />
      <div className="min-h-screen bg-[#004d40]">
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 text-center z-50 animate-pulse">
          <AlertTriangle className="w-4 h-4 inline mr-2" />
          <span className="font-bold">URGENT:</span> Only {spotsLeft} spots left at this price! Offer expires in {time.days}d {time.hours}h {time.minutes}m
        </div>

        <div className="pt-14 pb-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8 pt-6">
              <img src={dojoLogo} alt="Dojo" className="h-8 md:h-10" />
              <span className="text-white text-2xl font-light">×</span>
              <img src={rocketLogo} alt="Rocket Payments" className="h-10 md:h-12" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 text-white">
                <div className="inline-block">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider animate-pulse">
                    Exclusive Partner Offer
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none">
                  Get Your Dojo Machine for{" "}
                  <span className="text-[#00d4aa]">£0</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/80">
                  Through our <span className="font-bold text-white">exclusive partnership</span>, claim a premium Dojo terminal worth £179 - completely FREE.
                </p>

                <div className="space-y-3">
                  {[
                    "FREE Dojo card machine (worth £179)",
                    "No monthly terminal fees",
                    "Rates from just 0.29%",
                    "Next-day delivery available",
                    "24/7 UK support included",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00d4aa] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#004d40]" />
                      </div>
                      <span className="font-medium text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <img
                  src={dojoOfferBanner}
                  alt="Dojo card machine offer - get your terminal for £0"
                  className="rounded-2xl shadow-2xl mt-6"
                  data-testid="img-dojo-offer"
                />
              </div>

              <div className="lg:pl-8">
                <Card className="p-6 md:p-8 bg-white shadow-2xl border-4 border-[#00d4aa]">
                  <div className="text-center mb-6">
                    <div className="bg-red-100 text-red-700 rounded-lg p-3 mb-4 animate-pulse">
                      <Clock className="w-5 h-5 inline mr-2" />
                      <span className="font-bold">Offer expires in: </span>
                      <span className="font-mono font-black">{time.days}d {time.hours}h {time.minutes}m {time.secs}s</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#004d40]">
                      Get Your FREE Dojo Machine
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      We'll call you back in under 5 minutes
                    </p>
                  </div>

                  <div className="flex justify-between mb-6">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`flex-1 h-2 rounded-full mx-1 transition-all ${
                          s <= step ? "bg-[#00d4aa]" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      {step === 1 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                          <h3 className="text-lg font-black text-[#004d40]">Step 1: Your Details</h3>
                          <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold">Business Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your Business Name"
                                    className="h-14 text-lg border-2 focus:border-[#00d4aa]"
                                    data-testid="input-business-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold">Mobile Number *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="07XXX XXXXXX"
                                    type="tel"
                                    className="h-14 text-lg border-2 focus:border-[#00d4aa]"
                                    data-testid="input-mobile"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                          <h3 className="text-lg font-black text-[#004d40]">Step 2: Current Provider</h3>
                          <FormField
                            control={form.control}
                            name="currentProvider"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold">Who's Your Current Provider?</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    value={field.value || ""}
                                    placeholder="e.g., Worldpay, SumUp, Zettle"
                                    className="h-14 text-lg border-2 focus:border-[#00d4aa]"
                                    data-testid="input-provider"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="monthlyFees"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold">Approximate Monthly Fees</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                                  <FormControl>
                                    <SelectTrigger className="h-14 text-lg border-2" data-testid="select-monthly-fees">
                                      <SelectValue placeholder="Select range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="under-25">Under £25</SelectItem>
                                    <SelectItem value="25-50">£25 - £50</SelectItem>
                                    <SelectItem value="50-100">£50 - £100</SelectItem>
                                    <SelectItem value="over-100">Over £100</SelectItem>
                                    <SelectItem value="not-sure">Not sure</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                          <h3 className="text-lg font-black text-[#004d40]">Step 3: Final Details</h3>
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold">Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    value={field.value || ""}
                                    type="email"
                                    placeholder="your@email.com"
                                    className="h-14 text-lg border-2 focus:border-[#00d4aa]"
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="industryType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold">Industry Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                                  <FormControl>
                                    <SelectTrigger className="h-14 text-lg border-2" data-testid="select-industry">
                                      <SelectValue placeholder="Select your industry" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="restaurant">Restaurant / Café</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                    <SelectItem value="healthcare">Healthcare / Dental</SelectItem>
                                    <SelectItem value="mobile">Mobile / Market Trader</SelectItem>
                                    <SelectItem value="services">Professional Services</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      <div className="flex gap-3 pt-2">
                        {step > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            onClick={() => setStep(step - 1)}
                            className="flex-1 h-14"
                            data-testid="button-back"
                          >
                            Back
                          </Button>
                        )}
                        <Button
                          type="submit"
                          size="lg"
                          className={`${step === 1 ? 'w-full' : 'flex-1'} h-16 text-xl font-black bg-[#00d4aa] hover:bg-[#00b894] text-[#004d40] shadow-xl`}
                          disabled={mutation.isPending}
                          data-testid="button-claim-offer"
                        >
                          {mutation.isPending ? (
                            "Securing Your Spot..."
                          ) : step === 3 ? (
                            <>
                              <Phone className="mr-2 h-6 w-6" />
                              Call Me Back Now
                            </>
                          ) : (
                            <>
                              Continue
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </div>

                      <p className="text-center text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 inline mr-1" />
                        Your details are secure & never shared
                      </p>
                    </form>
                  </Form>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                      <Users className="w-4 h-4" />
                      <span><span className="font-bold text-[#004d40]">47 businesses</span> claimed this offer today</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-green-500" /> No credit check
                      </span>
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-green-500" /> No obligation
                      </span>
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-green-500" /> 5 min call
                      </span>
                    </div>
                  </div>
                </Card>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center text-white">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-black text-[#00d4aa]">£0</div>
                    <div className="text-xs opacity-80">Terminal Cost</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-black text-[#00d4aa]">0.29%</div>
                    <div className="text-xs opacity-80">From Per Transaction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-black text-[#00d4aa]">24hr</div>
                    <div className="text-xs opacity-80">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center text-[#004d40] mb-12">
              Why Businesses Choose This Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast Setup",
                  description: "Most businesses are taking payments within 24 hours of signing up",
                },
                {
                  icon: Shield,
                  title: "UK-Based Support",
                  description: "Real humans available 24/7 to help with any questions",
                },
                {
                  icon: Clock,
                  title: "Next-Day Settlement",
                  description: "Get your money faster with next-day fund transfers",
                },
                {
                  icon: Check,
                  title: "No Lock-In Contracts",
                  description: "Leave anytime - we're confident you'll want to stay",
                },
              ].map((feature, i) => (
                <Card key={i} className="p-6 border-2 border-[#004d40]/10 hover:border-[#00d4aa] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#004d40]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#004d40]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#004d40] mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="h-16 px-12 text-xl font-black bg-[#004d40] hover:bg-[#003830] shadow-xl"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                data-testid="button-claim-bottom"
              >
                Claim Your FREE Terminal Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Limited to {spotsLeft} more businesses today
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#003830] py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-500/20 border-2 border-red-400 rounded-2xl p-6 md:p-8 text-center">
              <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                This Offer Won't Last
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Due to high demand, we can only offer {spotsLeft} more free terminals at this price. 
                Once they're gone, the price goes back to £179.
              </p>
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-black bg-white text-[#004d40] hover:bg-gray-100 shadow-xl"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                data-testid="button-urgency-claim"
              >
                <Phone className="mr-2 h-5 w-5" />
                Secure My Free Terminal
              </Button>
            </div>
          </div>
        </section>

        <footer className="bg-[#002820] py-8 px-4 text-center text-white/60 text-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src={dojoLogo} alt="Dojo" className="h-6 opacity-60" />
              <span>×</span>
              <img src={rocketLogo} alt="Rocket Payments" className="h-8 opacity-60" />
            </div>
            <p>
              Exclusive partnership offer from Rocket Payments. Terminal subject to credit approval. 
              Rates from 0.29% depending on business type and volume.
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} Rocket Payments. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
