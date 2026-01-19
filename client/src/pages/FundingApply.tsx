import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Rocket, Shield, Clock, CheckCircle, ChevronRight, PoundSterling, TrendingUp, Building2, User, Users, Plus, Trash2, ArrowRight, Sparkles, Lock, Phone, Mail } from "lucide-react";
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
  { value: "5000-10000", label: "£5,000 - £10,000", icon: "💷" },
  { value: "10000-25000", label: "£10,000 - £25,000", icon: "💷💷" },
  { value: "25000-50000", label: "£25,000 - £50,000", icon: "💷💷💷" },
  { value: "50000-100000", label: "£50,000 - £100,000", icon: "💷💷💷💷" },
  { value: "100000-250000", label: "£100,000 - £250,000", icon: "💷💷💷💷💷" },
  { value: "250000+", label: "£250,000+", icon: "💷💷💷💷💷💷" },
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
        fundingAmount: selectedAmount,
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

  const goToNextStep = () => {
    if (step === 0 && !selectedAmount) {
      toast({
        title: "Please select a funding amount",
        description: "Choose how much funding you're looking for to continue.",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex flex-col">
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Rocket className="h-10 w-10 text-primary" />
            <span className="text-2xl font-black text-foreground">ROCKET FUNDING</span>
          </div>
          <ThemeToggle />
        </header>

        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-8">
            <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-black">Application Submitted!</h1>
              <p className="text-xl text-muted-foreground">
                Thank you for your funding application. Here's what happens next:
              </p>
            </div>

            <div className="space-y-6 text-left">
              <div className="flex gap-4 items-start p-4 bg-muted/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Secure Open Banking Link</h3>
                  <p className="text-muted-foreground">We'll send you a secure link via Email, SMS or WhatsApp to verify your business finances. This is completely safe and doesn't affect your credit score.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-muted/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Receive 3 Pricing Offers</h3>
                  <p className="text-muted-foreground">Once verified, you'll receive up to 3 competitive funding offers to choose from. Remember, at this stage it's still just a quote with no obligation.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-muted/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Funds in 24 Hours</h3>
                  <p className="text-muted-foreground">If you're happy with an offer, simply select it and funds can be in your account as fast as 24 hours. It's that simple.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                <Lock className="h-5 w-5" />
                <span className="font-semibold">No hard credit search performed</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions? Call us on <a href="tel:08001234567" className="text-primary font-semibold hover:underline">0800 123 4567</a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex flex-col">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Rocket className="h-10 w-10 text-primary" />
          <span className="text-2xl font-black text-foreground">ROCKET FUNDING</span>
        </div>
        <ThemeToggle />
      </header>

      <div className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
        {step === 0 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                <Shield className="h-4 w-4" />
                No Hard Credit Search
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Get a Funding Quote in Minutes
              </h1>
              <p className="text-xl text-muted-foreground">
                Unlock up to <span className="text-primary font-bold">£500,000</span> for your business. Fast, flexible funding with no hidden fees.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
                <Clock className="h-6 w-6 text-primary" />
                <span className="font-semibold">2-minute application</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
                <Shield className="h-6 w-6 text-green-500" />
                <span className="font-semibold">Soft credit check only</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="font-semibold">Funds in 24 hours</span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center">How much funding are you looking for?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {fundingAmounts.map((amount) => (
                  <Card
                    key={amount.value}
                    className={`p-6 cursor-pointer transition-all duration-300 hover-elevate ${
                      selectedAmount === amount.value
                        ? "ring-2 ring-primary bg-primary/5"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedAmount(amount.value)}
                    data-testid={`card-amount-${amount.value}`}
                  >
                    <div className="text-center space-y-2">
                      <div className="text-2xl">{amount.icon}</div>
                      <div className="font-bold text-lg">{amount.label}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex gap-4">
                <Sparkles className="h-6 w-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-700 dark:text-amber-400">This is just a quote</h3>
                  <p className="text-amber-600 dark:text-amber-300 text-sm mt-1">
                    Getting a quote doesn't commit you to anything. We'll provide multiple options and you decide what works best for your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button
                size="lg"
                className="text-lg px-10 py-6 rounded-full"
                onClick={goToNextStep}
                data-testid="button-continue-step-0"
              >
                Continue
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">Step 1 of 4</span>
                <span>Director Information</span>
              </div>
              <h2 className="text-3xl font-black">Tell us about yourself</h2>
              <p className="text-muted-foreground">As a company director, we need some basic details to get you a quote.</p>
            </div>

            <Form {...form}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="directorFirstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} data-testid="input-director-first-name" />
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
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Smith" {...field} data-testid="input-director-last-name" />
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
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@business.com" {...field} data-testid="input-director-email" />
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
                        <FormLabel>Mobile Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="07700 900000" {...field} data-testid="input-director-phone" />
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
                      <FormLabel>Date of Birth *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} data-testid="input-director-dob" />
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
                      <FormLabel>Home Address *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your full home address including postcode" {...field} data-testid="input-director-address" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(0)} data-testid="button-back-step-1">
                    Back
                  </Button>
                  <Button
                    type="button"
                    className="flex-1"
                    onClick={async () => {
                      const valid = await form.trigger(["directorFirstName", "directorLastName", "directorEmail", "directorPhone", "directorDob", "directorAddress"]);
                      if (valid) setStep(2);
                    }}
                    data-testid="button-continue-step-1"
                  >
                    Continue
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">Step 2 of 4</span>
                <span>Business Information</span>
              </div>
              <h2 className="text-3xl font-black">Tell us about your business</h2>
              <p className="text-muted-foreground">We need a few details about your company to find the best funding options.</p>
            </div>

            <Form {...form}>
              <form className="space-y-6">
                <FormField
                  control={form.control}
                  name="limitedCompanyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Limited Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company name or 'Sole Trader' if not limited" {...field} data-testid="input-company-name" />
                      </FormControl>
                      <p className="text-xs text-muted-foreground mt-1">Leave blank or write "Sole Trader" if you're not a limited company</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tradingName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trading Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your business trading name" {...field} data-testid="input-trading-name" />
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
                      <FormLabel>Business Address *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your full business address including postcode" {...field} data-testid="input-business-address" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isDojoCustomer"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel>Are you currently a Dojo or Rocket Payments customer? *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="dojo-yes" data-testid="radio-dojo-yes" />
                            <Label htmlFor="dojo-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="dojo-no" data-testid="radio-dojo-no" />
                            <Label htmlFor="dojo-no">No</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="not-sure" id="dojo-not-sure" data-testid="radio-dojo-not-sure" />
                            <Label htmlFor="dojo-not-sure">Not Sure</Label>
                          </div>
                        </RadioGroup>
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
                          <SelectTrigger data-testid="select-monthly-revenue">
                            <SelectValue placeholder="Select monthly revenue" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0-5000">Under £5,000</SelectItem>
                          <SelectItem value="5000-10000">£5,000 - £10,000</SelectItem>
                          <SelectItem value="10000-25000">£10,000 - £25,000</SelectItem>
                          <SelectItem value="25000-50000">£25,000 - £50,000</SelectItem>
                          <SelectItem value="50000-100000">£50,000 - £100,000</SelectItem>
                          <SelectItem value="100000+">£100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fundingPurpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What will the funding be used for?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-funding-purpose">
                            <SelectValue placeholder="Select funding purpose" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {fundingPurposes.map((purpose) => (
                            <SelectItem key={purpose} value={purpose}>{purpose}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} data-testid="button-back-step-2">
                    Back
                  </Button>
                  <Button
                    type="button"
                    className="flex-1"
                    onClick={async () => {
                      const valid = await form.trigger(["tradingName", "businessAddress", "isDojoCustomer"]);
                      if (valid) setStep(3);
                    }}
                    data-testid="button-continue-step-2"
                  >
                    Continue
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">Step 3 of 4</span>
                <span>Shareholders (Optional)</span>
              </div>
              <h2 className="text-3xl font-black">Any other shareholders?</h2>
              <p className="text-muted-foreground">If your business has other shareholders with 25%+ ownership, please add their details. Skip if not applicable.</p>
            </div>

            <div className="space-y-6">
              {shareholders.map((shareholder, index) => (
                <Card key={index} className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Shareholder {index + 1}
                    </h3>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeShareholder(index)}
                      data-testid={`button-remove-shareholder-${index}`}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input
                        value={shareholder.fullName}
                        onChange={(e) => updateShareholder(index, "fullName", e.target.value)}
                        placeholder="Full legal name"
                        data-testid={`input-shareholder-${index}-name`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Date of Birth *</Label>
                      <Input
                        type="date"
                        value={shareholder.dateOfBirth}
                        onChange={(e) => updateShareholder(index, "dateOfBirth", e.target.value)}
                        data-testid={`input-shareholder-${index}-dob`}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        value={shareholder.email}
                        onChange={(e) => updateShareholder(index, "email", e.target.value)}
                        placeholder="email@example.com"
                        data-testid={`input-shareholder-${index}-email`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone *</Label>
                      <Input
                        type="tel"
                        value={shareholder.phone}
                        onChange={(e) => updateShareholder(index, "phone", e.target.value)}
                        placeholder="07700 900000"
                        data-testid={`input-shareholder-${index}-phone`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Home Address *</Label>
                    <Textarea
                      value={shareholder.homeAddress}
                      onChange={(e) => updateShareholder(index, "homeAddress", e.target.value)}
                      placeholder="Full home address including postcode"
                      data-testid={`input-shareholder-${index}-address`}
                    />
                  </div>
                </Card>
              ))}

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={addShareholder}
                data-testid="button-add-shareholder"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Shareholder
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => setStep(2)} data-testid="button-back-step-3">
                Back
              </Button>
              <Button
                type="button"
                className="flex-1"
                onClick={() => setStep(4)}
                data-testid="button-continue-step-3"
              >
                {shareholders.length === 0 ? "Skip & Continue" : "Continue"}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">Step 4 of 4</span>
                <span>Review & Submit</span>
              </div>
              <h2 className="text-3xl font-black">Review your application</h2>
              <p className="text-muted-foreground">Please check your details before submitting.</p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <PoundSterling className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Funding Amount</h3>
                </div>
                <p className="text-xl font-semibold">
                  {fundingAmounts.find(a => a.value === selectedAmount)?.label || "Not selected"}
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Director Details</h3>
                </div>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{form.watch("directorFirstName")} {form.watch("directorLastName")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">{form.watch("directorEmail")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-medium">{form.watch("directorPhone")}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Business Details</h3>
                </div>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trading Name:</span>
                    <span className="font-medium">{form.watch("tradingName")}</span>
                  </div>
                  {form.watch("limitedCompanyName") && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{form.watch("limitedCompanyName")}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dojo/Rocket Customer:</span>
                    <span className="font-medium capitalize">{form.watch("isDojoCustomer")}</span>
                  </div>
                </div>
              </Card>

              {shareholders.length > 0 && (
                <Card className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-bold">Shareholders ({shareholders.length})</h3>
                  </div>
                  <div className="space-y-2">
                    {shareholders.map((sh, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{sh.fullName}</span>
                        <span className="font-medium">{sh.email}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <div className="flex gap-4">
                <Lock className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-green-700 dark:text-green-400">Your data is secure</h3>
                  <p className="text-green-600 dark:text-green-300 text-sm mt-1">
                    We use bank-level encryption to protect your information. This application does NOT affect your credit score.
                  </p>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(3)} data-testid="button-back-step-4">
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 text-lg py-6"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit-application"
                  >
                    {submitMutation.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {step > 0 && step < 5 && (
          <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-4">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{Math.round((step / 4) * 100)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
