import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Rocket, Shield, Clock, CheckCircle, ChevronRight, PoundSterling, TrendingUp, Building2, User, Users, Plus, Trash2, ArrowRight, Lock, Banknote, ShoppingCart, Wrench, Target, HelpCircle } from "lucide-react";
import coffeeOwnerImage from "@assets/stock_images/happy_woman_business_37f99ae0.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ThemeToggle } from "@/components/ThemeToggle";

const shareholderSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  homeAddress: z.string().min(5, "Home address is required"),
});

const fundingFormSchema = z.object({
  directorFirstName: z.string().min(2, "First name is required"),
  directorLastName: z.string().min(2, "Last name is required"),
  directorEmail: z.string().email("Valid email is required"),
  directorPhone: z.string().min(10, "Valid phone number is required"),
  directorDob: z.string().min(1, "Date of birth is required"),
  directorAddress: z.string().min(5, "Home address is required"),
  limitedCompanyName: z.string().optional(),
  tradingName: z.string().min(2, "Trading name is required"),
  businessAddress: z.string().min(5, "Business address is required"),
  isDojoCustomer: z.string().min(1, "Please select an option"),
  monthlyRevenue: z.string().optional(),
  fundingAmount: z.string().optional(),
  fundingPurpose: z.string().optional(),
  shareholders: z.string().optional(),
  status: z.string().default("pending"),
});

type FundingFormData = z.infer<typeof fundingFormSchema>;
type Shareholder = z.infer<typeof shareholderSchema>;

const fundingAmounts = [
  { value: "5000", label: "£5,000" },
  { value: "10000", label: "£10,000" },
  { value: "25000", label: "£25,000" },
  { value: "50000", label: "£50,000" },
  { value: "100000", label: "£100,000" },
  { value: "250000", label: "£250,000+" },
];

const fundingGoals = [
  { value: "cashflow", label: "Stable Cashflow", description: "Cover expenses during quieter periods", icon: Banknote },
  { value: "growth", label: "Business Growth", description: "Renovations, new locations, or marketing", icon: TrendingUp },
  { value: "stock", label: "Stock & Inventory", description: "Bulk buying or seasonal preparation", icon: ShoppingCart },
  { value: "equipment", label: "Equipment", description: "New machinery or technology", icon: Wrench },
];

const fundingPurposes = [
  "Stock & Inventory",
  "Equipment & Machinery",
  "Expansion & Renovation",
  "Marketing & Advertising",
  "Cash Flow Management",
  "Staff & Hiring",
  "Other",
];

export default function FundingApply() {
  const [step, setStep] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [shareholders, setShareholders] = useState<Shareholder[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FundingFormData>({
    resolver: zodResolver(fundingFormSchema),
    defaultValues: {
      directorFirstName: "",
      directorLastName: "",
      directorEmail: "",
      directorPhone: "",
      directorDob: "",
      directorAddress: "",
      limitedCompanyName: "",
      tradingName: "",
      businessAddress: "",
      isDojoCustomer: "",
      monthlyRevenue: "",
      fundingAmount: "",
      fundingPurpose: "",
      shareholders: "",
      status: "pending",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FundingFormData) => {
      return apiRequest("POST", "/api/funding-application", {
        ...data,
        fundingAmount: selectedAmount || customAmount,
        fundingPurpose: selectedGoal,
        shareholders: JSON.stringify(shareholders),
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const addShareholder = () => {
    setShareholders([...shareholders, {
      fullName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      homeAddress: "",
    }]);
  };

  const removeShareholder = (index: number) => {
    setShareholders(shareholders.filter((_, i) => i !== index));
  };

  const updateShareholder = (index: number, field: keyof Shareholder, value: string) => {
    const updated = [...shareholders];
    updated[index] = { ...updated[index], [field]: value };
    setShareholders(updated);
  };

  const onSubmit = (data: FundingFormData) => {
    submitMutation.mutate(data);
  };

  const canProceedFromStep0 = selectedAmount || customAmount;
  const canProceedFromStep1 = selectedGoal && form.watch("isDojoCustomer");

  const goToNextStep = () => {
    if (step === 0 && !canProceedFromStep0) {
      toast({
        title: "Please select a funding amount",
        description: "Choose how much funding you're looking for to continue.",
        variant: "destructive",
      });
      return;
    }
    if (step === 1 && !canProceedFromStep1) {
      toast({
        title: "Please complete all questions",
        description: "Select your funding goal and answer the Dojo question.",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const totalSteps = 5;
  const progressPercent = Math.round((step / (totalSteps - 1)) * 100);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex flex-col">
        <header className="p-4 md:p-6 flex justify-between items-center border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-xl font-black text-foreground">ROCKET FUNDING</span>
          </div>
          <ThemeToggle />
        </header>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-8">
            <div className="w-20 h-20 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-black">Application Submitted!</h1>
              <p className="text-lg text-muted-foreground">
                Thank you for your funding application. Here's what happens next:
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex gap-4 items-start p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <h3 className="font-bold">Secure Open Banking Link</h3>
                  <p className="text-sm text-muted-foreground">We'll send you a secure link via Email, SMS or WhatsApp to verify your business finances.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <h3 className="font-bold">Receive 3 Pricing Offers</h3>
                  <p className="text-sm text-muted-foreground">You'll receive up to 3 competitive funding offers to choose from.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <h3 className="font-bold">Funds in 24 Hours</h3>
                  <p className="text-sm text-muted-foreground">Select an offer and funds can be in your account as fast as 24 hours.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">No hard credit search performed</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex flex-col">
      <header className="p-4 md:p-6 flex justify-between items-center border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Rocket className="h-8 w-8 text-primary" />
          <span className="text-xl font-black text-foreground">ROCKET FUNDING</span>
        </div>
        <div className="flex items-center gap-4">
          {step > 0 && (
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Step {step} of {totalSteps - 1}</span>
              <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-1">
        {step === 0 && (
          <div className="animate-in fade-in duration-500">
            <div className="grid lg:grid-cols-2 min-h-[calc(100vh-73px)]">
              <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                    <Shield className="h-3 w-3" />
                    Trusted by 10,000+ UK Businesses
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                    Funding that <span className="text-primary">understands</span> you.
                  </h1>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    Turn quiet months into breathing room and busy months into expansion. Capital that works as hard as you do.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div>
                      <div className="text-2xl md:text-3xl font-black text-primary">24h</div>
                      <div className="text-sm text-muted-foreground">Fast Decisions</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-black text-primary">0%</div>
                      <div className="text-sm text-muted-foreground">Equity Taken</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-black text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Approval Rate</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-xl font-bold">How much funding are you looking for?</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {fundingAmounts.map((amount) => (
                        <button
                          key={amount.value}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount.value);
                            setCustomAmount("");
                          }}
                          className={`py-3 px-4 rounded-xl border-2 text-center font-semibold transition-all ${
                            selectedAmount === amount.value
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-primary/50"
                          }`}
                          data-testid={`button-amount-${amount.value}`}
                        >
                          {amount.label}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">£</div>
                      <Input 
                        type="text"
                        placeholder="Or enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value.replace(/[^0-9]/g, ''));
                          setSelectedAmount("");
                        }}
                        className="pl-8 py-6 text-lg"
                        data-testid="input-custom-amount"
                      />
                    </div>

                    <Button
                      size="lg"
                      className="w-full py-6 text-lg rounded-xl"
                      onClick={goToNextStep}
                      disabled={!canProceedFromStep0}
                      data-testid="button-continue-step-0"
                    >
                      Check Eligibility
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                <div className="relative max-w-md">
                  <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-700 rounded-xl shadow-lg p-4 z-10">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">Funded</div>
                        <div className="text-xl font-black text-green-600">£50,000</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative">
                      <img 
                        src={coffeeOwnerImage} 
                        alt="Sarah, happy coffee shop owner who received funding"
                        className="w-full aspect-[4/5] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex -space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                          </div>
                          <span className="text-xs text-white/80">Joined this week</span>
                        </div>
                        <p className="text-white text-lg font-medium italic leading-snug">
                          "The funding helped us renovate our second location just in time for the summer rush."
                        </p>
                        <p className="text-white/90 text-sm font-semibold mt-2">— Sarah, Coffee House Owner</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-700 rounded-xl shadow-lg p-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Same day payout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="p-6 md:p-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
              <button 
                onClick={() => setStep(0)} 
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
                data-testid="button-back-step-1"
              >
                <ChevronRight className="h-4 w-4 rotate-180" /> Back
              </button>
              <h2 className="text-3xl font-black mb-2">What's the main goal for this funding?</h2>
              <p className="text-muted-foreground">This helps us find the best options for you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {fundingGoals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <button
                    key={goal.value}
                    type="button"
                    onClick={() => setSelectedGoal(goal.value)}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      selectedGoal === goal.value
                        ? "border-primary bg-primary/5"
                        : "border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-primary/50"
                    }`}
                    data-testid={`button-goal-${goal.value}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      selectedGoal === goal.value ? "bg-primary/20" : "bg-slate-100 dark:bg-slate-700"
                    }`}>
                      <Icon className={`h-6 w-6 ${selectedGoal === goal.value ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{goal.label}</h3>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </button>
                );
              })}
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Do you currently use a Dojo card machine?</h3>
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="isDojoCustomer"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => field.onChange("yes")}
                            className={`p-5 rounded-xl border-2 text-center transition-all ${
                              field.value === "yes"
                                ? "border-primary bg-primary/5"
                                : "border-slate-200 dark:border-slate-600 hover:border-primary/50"
                            }`}
                            data-testid="button-dojo-yes"
                          >
                            <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 ${
                              field.value === "yes" ? "bg-primary/20" : "bg-slate-100 dark:bg-slate-700"
                            }`}>
                              <CheckCircle className={`h-5 w-5 ${field.value === "yes" ? "text-primary" : "text-muted-foreground"}`} />
                            </div>
                            <span className="font-semibold">Yes, I do</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => field.onChange("no")}
                            className={`p-5 rounded-xl border-2 text-center transition-all ${
                              field.value === "no"
                                ? "border-primary bg-primary/5"
                                : "border-slate-200 dark:border-slate-600 hover:border-primary/50"
                            }`}
                            data-testid="button-dojo-no"
                          >
                            <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 ${
                              field.value === "no" ? "bg-primary/20" : "bg-slate-100 dark:bg-slate-700"
                            }`}>
                              <HelpCircle className={`h-5 w-5 ${field.value === "no" ? "text-primary" : "text-muted-foreground"}`} />
                            </div>
                            <span className="font-semibold">No, not yet</span>
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
            </div>

            <Button
              size="lg"
              className="w-full py-6 text-lg rounded-xl"
              onClick={goToNextStep}
              disabled={!canProceedFromStep1}
              data-testid="button-continue-step-1"
            >
              Continue
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <Lock className="h-4 w-4" />
              No hard credit search - this is just a quote
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="p-6 md:p-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
              <button 
                onClick={() => setStep(1)} 
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
                data-testid="button-back-step-2"
              >
                <ChevronRight className="h-4 w-4 rotate-180" /> Back
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                Step 2 of 4 - Director Details
              </div>
              <h2 className="text-3xl font-black mb-2">Tell us about yourself</h2>
              <p className="text-muted-foreground">As a company director, we need some basic details.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border p-6 mb-8">
              <Form {...form}>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="directorFirstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" className="py-5" {...field} data-testid="input-director-first-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="directorLastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith" className="py-5" {...field} data-testid="input-director-last-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="directorEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@business.com" className="py-5" {...field} data-testid="input-director-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="directorPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="07700 900000" className="py-5" {...field} data-testid="input-director-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="directorDob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" className="py-5" {...field} data-testid="input-director-dob" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="directorAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Home Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your full home address including postcode" className="min-h-[80px]" {...field} data-testid="input-director-address" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>

            <Button
              size="lg"
              className="w-full py-6 text-lg rounded-xl"
              onClick={async () => {
                const valid = await form.trigger(["directorFirstName", "directorLastName", "directorEmail", "directorPhone", "directorDob", "directorAddress"]);
                if (valid) setStep(3);
              }}
              data-testid="button-continue-step-2"
            >
              Continue
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="p-6 md:p-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
              <button 
                onClick={() => setStep(2)} 
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
                data-testid="button-back-step-3"
              >
                <ChevronRight className="h-4 w-4 rotate-180" /> Back
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                Step 3 of 4 - Business Details
              </div>
              <h2 className="text-3xl font-black mb-2">Tell us about your business</h2>
              <p className="text-muted-foreground">A few details about your company to find the best options.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border p-6 mb-8">
              <Form {...form}>
                <form className="space-y-5">
                  <FormField
                    control={form.control}
                    name="limitedCompanyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Limited Company Name (if applicable)</FormLabel>
                        <FormControl>
                          <Input placeholder="Leave blank if sole trader" className="py-5" {...field} data-testid="input-company-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tradingName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trading Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your business trading name" className="py-5" {...field} data-testid="input-trading-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your full business address including postcode" className="min-h-[80px]" {...field} data-testid="input-business-address" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="monthlyRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Approximate Monthly Revenue</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="py-5" data-testid="select-monthly-revenue">
                              <SelectValue placeholder="Select monthly revenue" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-5k">Under £5,000</SelectItem>
                            <SelectItem value="5k-10k">£5,000 - £10,000</SelectItem>
                            <SelectItem value="10k-25k">£10,000 - £25,000</SelectItem>
                            <SelectItem value="25k-50k">£25,000 - £50,000</SelectItem>
                            <SelectItem value="50k-100k">£50,000 - £100,000</SelectItem>
                            <SelectItem value="over-100k">Over £100,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>

            <Button
              size="lg"
              className="w-full py-6 text-lg rounded-xl"
              onClick={async () => {
                const valid = await form.trigger(["tradingName", "businessAddress"]);
                if (valid) setStep(4);
              }}
              data-testid="button-continue-step-3"
            >
              Continue
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {step === 4 && (
          <div className="p-6 md:p-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
              <button 
                onClick={() => setStep(3)} 
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
                data-testid="button-back-step-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" /> Back
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                Step 4 of 4 - Additional Shareholders (Optional)
              </div>
              <h2 className="text-3xl font-black mb-2">Any other shareholders?</h2>
              <p className="text-muted-foreground">Add shareholders with 25%+ ownership, or skip if not applicable.</p>
            </div>

            <div className="space-y-4 mb-8">
              {shareholders.map((shareholder, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Shareholder {index + 1}
                    </h3>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeShareholder(index)}
                      className="text-destructive hover:text-destructive"
                      data-testid={`button-remove-shareholder-${index}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input
                        value={shareholder.fullName}
                        onChange={(e) => updateShareholder(index, "fullName", e.target.value)}
                        placeholder="Full legal name"
                        className="py-5"
                        data-testid={`input-shareholder-${index}-name`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Date of Birth</Label>
                      <Input
                        type="date"
                        value={shareholder.dateOfBirth}
                        onChange={(e) => updateShareholder(index, "dateOfBirth", e.target.value)}
                        className="py-5"
                        data-testid={`input-shareholder-${index}-dob`}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        value={shareholder.email}
                        onChange={(e) => updateShareholder(index, "email", e.target.value)}
                        placeholder="email@example.com"
                        className="py-5"
                        data-testid={`input-shareholder-${index}-email`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input
                        type="tel"
                        value={shareholder.phone}
                        onChange={(e) => updateShareholder(index, "phone", e.target.value)}
                        placeholder="07700 900000"
                        className="py-5"
                        data-testid={`input-shareholder-${index}-phone`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Home Address</Label>
                    <Textarea
                      value={shareholder.homeAddress}
                      onChange={(e) => updateShareholder(index, "homeAddress", e.target.value)}
                      placeholder="Full home address including postcode"
                      className="min-h-[80px]"
                      data-testid={`input-shareholder-${index}-address`}
                    />
                  </div>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                className="w-full py-5"
                onClick={addShareholder}
                data-testid="button-add-shareholder"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Shareholder
              </Button>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-8">
              <div className="flex gap-3">
                <Lock className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-green-800 dark:text-green-300">Your data is secure</h3>
                  <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                    We use bank-level encryption. This application does NOT affect your credit score.
                  </p>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-6 text-lg rounded-xl"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-application"
                >
                  {submitMutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      {shareholders.length === 0 ? "Skip & Submit Application" : "Submit Application"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}
