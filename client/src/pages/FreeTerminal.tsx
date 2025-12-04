import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertFreeTerminalLeadSchema } from "@shared/schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { Check, ArrowRight, Sparkles, Shield, TrendingDown, Zap, Clock, DollarSign } from "lucide-react";
import offerBanner from "@assets/Untitled_-_2025-12-04T163007.261_1764865824511.png";
import rocketGoPub from "@assets/rocket go pub_1762112531205.png";
import rocketGoHero from "@assets/hero image rocket go_1762112582495.png";
import rocketGoAuthorised from "@assets/rocket go authorised_1762112584527.png";
import terminalApproved from "@assets/terminal approved_1762112584541.png";
import tapRocketGo from "@assets/tap rocket go_1762112584552.png";
import rocketGoDevice from "@assets/rocket go device on stand - white bk_1762112603039.png";
import rocketGoHerop from "@assets/rocket_Go_device_1764776227168.png";
import costaLogo from "@assets/Costa-Coffee-Logo_1761930744749.jpg";
import treatzLogo from "@assets/Treatz.jpg_1761930744750.webp";
import cuppLogo from "@assets/ac9be535-cd26-4913-893c-607ef9c65ec9_1761930744747.jpeg";
import silverstoneLogo from "@assets/silverstone-uk-logo-vectorrwopeh_1761930744750.png";
import { Signal, MonitorSmartphone, BatteryFull } from "lucide-react";

const formSchema = insertFreeTerminalLeadSchema.extend({
  businessName: z.string().min(2, "Business name required"),
  mobile: z.string().min(10, "Valid mobile number required"),
});

type FormData = z.infer<typeof formSchema>;

export default function FreeTerminal() {
  const [, navigate] = useLocation();
  const [step, setStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(Math.floor(5.2 * 60 * 60));
  const [monthlyFees, setMonthlyFees] = useState(100);
  const { toast } = useToast();

  const partnerLogos = [
    { name: "Costa Coffee", logo: costaLogo },
    { name: "Treatz", logo: treatzLogo },
    { name: "CUPP", logo: cuppLogo },
    { name: "Silverstone", logo: silverstoneLogo },
  ];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      mobile: "",
      currentProvider: "",
      monthlyFees: "",
      email: "",
      industryType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/free-terminal-lead", {
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
      navigate("/free-terminal-thank-you");
    },
    onError: (error: Error) => {
      console.error("Free terminal submission error:", error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const calculateSavings = (monthlyFees: number) => {
    const monthlySavings = monthlyFees * 0.33;
    const annualSavings = monthlySavings * 12;
    return Math.round(annualSavings);
  };

  const onSubmit = (data: FormData) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Remove empty strings from optional fields
      const cleanedData = {
        businessName: data.businessName,
        mobile: data.mobile,
        currentProvider: data.currentProvider || undefined,
        monthlyFees: data.monthlyFees || undefined,
        email: data.email || undefined,
        industryType: data.industryType || undefined,
      };
      mutation.mutate(cleanedData as FormData);
    }
  };

  return (
    <>
      <SEO
        title="Free Card Machine Worth £189 - Claim Your Free Terminal"
        description="Get a FREE premium card machine worth £189 when you switch to Rocket Payments. No monthly fees, better rates, next-day delivery. Limited time offer ends 14th December."
        canonical="https://rocketpayments.co.uk/free-terminal"
      />
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
        {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      {/* Hero Section */}
      <section className="relative py-10 lg:py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-4 lg:space-y-8 relative z-10">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-full text-xs lg:text-sm font-black uppercase tracking-wider animate-pulse">
                  Limited Time Offer • Ends 14th December
                </span>
              </div>

              <h1 className="text-4xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="block">FREE card machine</span>
                <span className="block text-primary">Worth £189</span>
              </h1>

              <p className="text-lg lg:text-2xl text-muted-foreground font-medium">
                Get a premium card machine worth <span className="line-through">£189</span> absolutely{" "}
                <span className="text-primary font-black">FREE</span> when you try today.
              </p>

              <div className="flex flex-col gap-3 lg:gap-4 text-sm lg:text-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">£0 monthly fees. Forever.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">Better rates than your current provider</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">£3,000 towards your exit costs</span>
                </div>
              </div>

              <Button
                size="lg"
                className="text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 rounded-full font-black shadow-2xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-claim"
              >
                Claim Your Free Terminal
                <ArrowRight className="ml-2 h-5 lg:h-6 w-5 lg:w-6" />
              </Button>
            </div>

            {/* Right: Banner Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
              <img
                src={offerBanner}
                alt="Free card machine offer"
                className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
                data-testid="img-offer-banner"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Calculator Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-6">
            Calculate Your <span className="text-primary">Savings</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Our customers typically save 33% on their payment processing costs
          </p>

          <Card className="p-8 bg-card/80 backdrop-blur shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <label className="text-lg font-bold mb-3 block">
                  Your Current Monthly Fees
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-black text-muted-foreground">
                    £
                  </span>
                  <Input
                    type="number"
                    placeholder="100"
                    value={monthlyFees || ""}
                    onChange={(e) => setMonthlyFees(parseFloat(e.target.value) || 0)}
                    className="text-3xl font-bold h-20 pl-12"
                    data-testid="input-monthly-fees"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">What you currently pay per month</p>
              </div>

              <div className="text-center md:text-left">
                <div className="text-sm font-bold text-muted-foreground mb-2">Your Annual Saving</div>
                <div className="text-6xl font-black text-primary mb-4" data-testid="text-savings">
                  £{calculateSavings(monthlyFees).toLocaleString()}
                </div>
                <p className="text-muted-foreground">saved every year by switching to Rocket Payments</p>
              </div>
            </div>
          </Card>

          {/* Subtle social proof */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 opacity-70">
            {[
              { name: "James T.", text: "Saved £2k/year" },
              { name: "Sarah M.", text: "Setup in 24hrs" },
              { name: "Mike R.", text: "Best rates ever" },
            ].map((review, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium">{review.name}</span>
                <span>"{review.text}"</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-full font-black shadow-xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-request-callback"
            >
              Request Callback
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* On-the-move payments Section */}
      <section className="py-24 px-4" style={{ backgroundColor: '#efeee9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                On-the-move payments
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Thanks to our transaction speeds, the average business serves up to 48 more customers a day, based on a survey with 700. That's a lot of orders.
              </p>
              <Button
                size="lg"
                className="text-lg px-10 py-7 rounded-full font-black shadow-xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-claim-offer"
              >
                Claim offer
              </Button>
            </div>

            {/* Right: Terminal Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                <img
                  src={rocketGoHerop}
                  alt="Rocket Go Terminal"
                  className="relative w-full max-w-md hover:scale-[1.02] transition-transform duration-700"
                  data-testid="img-rocket-go-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Stack Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black text-center mb-4">
            The Complete Package
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Everything you need to save money and upgrade your payments
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Free Premium Terminal",
                value: "Save £189",
                description: "Worth £189, yours for £0 when you switch today",
              },
              {
                icon: DollarSign,
                title: "Zero Monthly Fees",
                value: "£0/month",
                description: "No rental. No contracts. No hidden charges.",
              },
              {
                icon: TrendingDown,
                title: "Better Transaction Rates",
                value: "Save More",
                description: "Lower fees on every transaction you process",
              },
              {
                icon: Shield,
                title: "12-Month Price Lock",
                value: "Guaranteed",
                description: "Your rates won't increase for a full year",
              },
              {
                icon: Zap,
                title: "Exit Cost Coverage",
                value: "Up to £3,000",
                description: "We'll cover your cancellation fees from your old provider",
              },
              {
                icon: Clock,
                title: "Setup in 24 Hours",
                value: "Lightning Fast",
                description: "Get up and running faster than any competitor",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300 bg-card/50 backdrop-blur"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-1">{benefit.title}</h3>
                    <div className="text-2xl font-black text-primary mb-2">{benefit.value}</div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Terminal Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black text-center mb-4">
            Built for <span className="text-primary">Performance</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            The Rocket Go delivers everything your business needs
          </p>

          {/* Terminal Features Grid - 4G, EPOS, Battery */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={rocketGoDevice}
                  alt="Rocket Go with 4G connectivity"
                  className="w-full h-80 object-contain bg-gradient-to-br from-muted/30 to-muted/10 p-8 hover:scale-105 transition-transform duration-700"
                  data-testid="img-feature-4g"
                />
              </div>
              <h3 className="text-3xl font-black mb-1">4G</h3>
              <p className="text-xl font-bold text-primary mb-3">Never lose sales again</p>
              <p className="text-muted-foreground text-lg">
                Always accept payments with 4G connectivity. Even if your Wi-Fi goes down, you can still make payments using a mobile signal.
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={tapRocketGo}
                  alt="EPOS integration with Rocket Payments"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  data-testid="img-feature-epos"
                />
              </div>
              <h3 className="text-3xl font-black mb-1">EPOS Integration</h3>
              <p className="text-xl font-bold text-primary mb-3">Serve more customers every hour</p>
              <p className="text-muted-foreground text-lg">
                Fewer errors. Faster transactions. With simple, seamless integration, you'll be switched over and ready to serve in no time.
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={rocketGoPub}
                  alt="10-hour battery life terminal"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  data-testid="img-feature-battery"
                />
              </div>
              <h3 className="text-3xl font-black mb-1">10-Hour Battery</h3>
              <p className="text-xl font-bold text-primary mb-3">Work the whole day without charging</p>
              <p className="text-muted-foreground text-lg">
                Serve more customers with 10-hour battery life. Finally say goodbye to endless recharging with your powerful, portable device.
              </p>
            </div>
          </div>

          {/* Quick Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <Signal className="w-5 h-5 text-primary" />
              <span className="font-bold">4G Built-in</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <MonitorSmartphone className="w-5 h-5 text-primary" />
              <span className="font-bold">EPOS Integration</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <BatteryFull className="w-5 h-5 text-primary" />
              <span className="font-bold">10hr Battery Life</span>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-xl px-12 py-8 rounded-full font-black shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-showcase-claim"
            >
              Yes, I Want This Terminal
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Free terminal offer subject to qualification
            </p>
          </div>
        </div>
      </section>
      {/* Claim Form Section */}
      <section id="claim-form" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-7xl font-black mb-4">
              Claim Your <span className="text-primary">Free</span> Terminal
            </h2>
            <p className="text-xl text-muted-foreground">
              Takes 60 seconds • We'll verify your business and call you back today
            </p>
          </div>

          {step < 4 ? (
            <Card className="p-8 bg-card/80 backdrop-blur shadow-2xl">
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-2 rounded-full mx-1 transition-all ${
                      s <= step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
                      <h3 className="text-2xl font-black">Step 1: Your Business</h3>
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-bold">Business Name *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Your Business Ltd"
                                className="text-lg h-14"
                                data-testid="input-business-name"
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
                            <FormLabel className="text-lg font-bold">Mobile Number *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="07XXX XXXXXX"
                                type="tel"
                                className="text-lg h-14"
                                data-testid="input-mobile"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
                      <h3 className="text-2xl font-black">Step 2: Current Provider</h3>
                      <FormField
                        control={form.control}
                        name="currentProvider"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-bold">Who's Your Current Provider?</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                value={field.value || ""}
                                placeholder="e.g., Worldpay, SumUp, Dojo"
                                className="text-lg h-14"
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
                            <FormLabel className="text-lg font-bold">Approximate Monthly Fees</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                              <FormControl>
                                <SelectTrigger className="text-lg h-14" data-testid="select-monthly-fees">
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
                    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
                      <h3 className="text-2xl font-black">Step 3: Final Details (Optional)</h3>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-bold">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                value={field.value || ""}
                                type="email"
                                placeholder="your@email.com"
                                className="text-lg h-14"
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
                            <FormLabel className="text-lg font-bold">Industry Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                              <FormControl>
                                <SelectTrigger className="text-lg h-14" data-testid="select-industry">
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

                  <div className="flex gap-4">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setStep(step - 1)}
                        className="flex-1 text-lg h-14"
                        data-testid="button-back"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 text-lg h-14 font-black"
                      disabled={mutation.isPending}
                      data-testid="button-next"
                    >
                      {mutation.isPending
                        ? "Submitting..."
                        : step === 3
                        ? "Claim My Free Terminal"
                        : "Continue"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </Form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                * Subject to business verification. Most businesses qualify instantly.
              </p>
            </Card>
          ) : (
            <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-black mb-4">You're All Set! 🎉</h3>
              <p className="text-xl text-muted-foreground mb-6">
                We'll call you within the next hour to confirm your free terminal and better rates.
              </p>
              <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
                <span className="font-bold text-primary">
                  Your terminal is reserved for the next 24 hours
                </span>
              </div>
            </Card>
          )}
        </div>
      </section>
      {/* What Happens Next Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-12">
            Here's how <span className="text-primary">switching</span> works
          </h2>

          <div className="space-y-6">
            {[
              { step: 1, text: "Send your details" },
              { step: 2, text: "We beat your rate" },
              { step: 3, text: "Delivered tomorrow" },
              { step: 4, text: "We cover buy-out if needed" },
              { step: 5, text: "You keep more from every sale" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-primary-foreground">{item.step}</span>
                </div>
                <p className="text-xl lg:text-2xl font-bold">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-xl px-12 py-8 rounded-full font-black shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-start-switching"
            >
              Start Switching Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
      {/* Sticky CTA Bar (Mobile) */}
      {step < 4 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t p-4 md:hidden z-50 shadow-2xl">
          <Button
            className="w-full font-black text-lg h-14 rounded-full"
            onClick={() => document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-sticky-claim"
          >
            Claim Free Terminal • Ends 14th December
          </Button>
        </div>
      )}
      </div>
    </>
  );
}
