import { useState, useEffect, useRef } from "react";
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
import { 
  Check, 
  ArrowRight, 
  Upload, 
  Shield, 
  TrendingDown, 
  Clock, 
  FileText, 
  Zap, 
  PoundSterling,
  Users,
  Star,
  ChevronDown
} from "lucide-react";
import rocketLogo from "@assets/rocket_payments_PNG_1769521713004.png";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name required"),
  contactName: z.string().min(2, "Your name required"),
  mobile: z.string().min(10, "Valid mobile number required"),
  email: z.string().email("Valid email required"),
  industryType: z.string().min(1, "Please select your industry"),
  currentProvider: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function BillUpload() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedFilePath, setUploadedFilePath] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      mobile: "",
      email: "",
      industryType: "",
      currentProvider: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/bill-comparison-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          uploadedFilePath,
          uploadedFileName: uploadedFile?.name || null,
        }),
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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or image file (JPG, PNG)",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      const urlResponse = await fetch("/api/uploads/request-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: file.name,
          size: file.size,
          contentType: file.type,
        }),
      });

      if (!urlResponse.ok) throw new Error("Failed to get upload URL");
      
      const { uploadURL, objectPath } = await urlResponse.json();

      const uploadResponse = await fetch(uploadURL, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if (!uploadResponse.ok) throw new Error("Failed to upload file");

      setUploadedFile(file);
      setUploadedFilePath(objectPath);
      toast({
        title: "Bill uploaded successfully!",
        description: "We'll analyse this to find your savings.",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Please try again or contact us for help.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = (data: FormData) => {
    if (step === 1) {
      if (!uploadedFile) {
        toast({
          title: "Please upload your bill",
          description: "We need your bill to calculate your exact savings.",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else {
      mutation.mutate(data);
    }
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Thank You | Bill Comparison | Rocket Payments"
          description="Your bill has been uploaded. We'll analyse it and get back to you with your savings."
          canonical="https://rocketpayments.co.uk/upload-bill"
        />
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center p-4">
          <Card className="max-w-lg w-full p-8 text-center bg-white">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-black mb-4">Your Savings Are Being Calculated!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Our team is analysing your bill right now. We'll call you within <span className="font-bold text-primary">2 hours</span> with your personalised savings quote.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium flex items-center justify-center gap-2">
                <PoundSterling className="w-5 h-5" />
                Most businesses save £2,000 - £8,000 per year
              </p>
            </div>
            <div className="space-y-3 text-left mb-6">
              <h3 className="font-bold text-center mb-4">What Happens Next:</h3>
              {[
                "We'll analyse your current rates line by line",
                "Calculate your exact savings potential",
                "Call you with 3 tailored rate options",
                "No obligation - just honest numbers"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Can't wait? Call us now: <a href="tel:03301234567" className="font-bold text-primary">0330 123 4567</a>
            </p>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Upload Your Bill | Get Your Exact Savings | Rocket Payments"
        description="Upload your payment processing bill for a free like-for-like comparison. See exactly how much you could save with transparent, honest rates."
        canonical="https://rocketpayments.co.uk/upload-bill"
        keywords="payment processing comparison, merchant services comparison, card processing rates comparison, payment bill analysis"
      />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <img src={rocketLogo} alt="Rocket Payments" className="h-12" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8 text-white">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-6">
                    <TrendingDown className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium text-sm">Average savings: £4,200/year</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                    Discover Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                      Hidden Savings
                    </span>
                  </h1>
                  
                  <p className="text-xl text-white/80 mb-8">
                    Upload your highest monthly bill and we'll show you <span className="font-bold text-white">exactly</span> how much you're overpaying. No guessing, no gimmicks - just honest numbers.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    Why Upload Your Highest Bill?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Higher Volume = Better Rates",
                        desc: "The more you process, the better rates we can negotiate for you"
                      },
                      {
                        title: "Like-for-Like Comparison",
                        desc: "We'll match every line item so you see real savings"
                      },
                      {
                        title: "No Hidden Fees Exposed",
                        desc: "We'll identify all those sneaky charges you're paying"
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-white/60 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-[#16213e] flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-white/70">
                      Trusted by <span className="font-bold text-white">2,500+</span> UK businesses
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="p-6 md:p-8 bg-white shadow-2xl border-0">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                      {step === 1 ? "Upload Your Bill" : "Your Contact Details"}
                    </h2>
                    <p className="text-muted-foreground">
                      {step === 1 
                        ? "Just your highest bill from the last 6 months" 
                        : "Where should we send your savings quote?"
                      }
                    </p>
                  </div>

                  <div className="flex gap-2 mb-6">
                    {[1, 2].map((s) => (
                      <div
                        key={s}
                        className={`flex-1 h-2 rounded-full transition-all ${
                          s <= step ? "bg-primary" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      {step === 1 && (
                        <div className="space-y-5 animate-in fade-in slide-in-from-right duration-300">
                          <div 
                            className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                              uploadedFile 
                                ? "border-green-500 bg-green-50" 
                                : "border-gray-300 hover:border-primary hover:bg-primary/5"
                            }`}
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={handleFileChange}
                              className="hidden"
                              data-testid="input-file-upload"
                            />
                            
                            {isUploading ? (
                              <div className="py-4">
                                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                                <p className="font-medium text-gray-700">Uploading your bill...</p>
                              </div>
                            ) : uploadedFile ? (
                              <div className="py-2">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                  <Check className="w-8 h-8 text-green-600" />
                                </div>
                                <p className="font-bold text-green-700 mb-1">{uploadedFile.name}</p>
                                <p className="text-sm text-green-600">Bill uploaded successfully</p>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="mt-3 text-gray-500"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setUploadedFile(null);
                                    setUploadedFilePath(null);
                                  }}
                                >
                                  Upload different file
                                </Button>
                              </div>
                            ) : (
                              <div className="py-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                  <Upload className="w-8 h-8 text-primary" />
                                </div>
                                <p className="font-bold text-gray-900 mb-1">
                                  Click to upload your bill
                                </p>
                                <p className="text-sm text-muted-foreground mb-3">
                                  PDF, JPG or PNG (max 10MB)
                                </p>
                                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                  <Shield className="w-3 h-3" />
                                  <span>Securely encrypted & confidential</span>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <div className="flex gap-3">
                              <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-medium text-amber-800 text-sm">
                                  What bill should I upload?
                                </p>
                                <p className="text-amber-700 text-sm mt-1">
                                  Your merchant statement showing card transaction fees - ideally your highest month from the last 6 months. This helps us get you the best rates.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                          <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">Business Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your Business Name"
                                    className="h-12"
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
                            name="contactName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">Your Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Full Name"
                                    className="h-12"
                                    data-testid="input-contact-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="mobile"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="font-semibold">Mobile *</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="07XXX XXXXXX"
                                      type="tel"
                                      className="h-12"
                                      data-testid="input-mobile"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="font-semibold">Email *</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      placeholder="you@business.com"
                                      className="h-12"
                                      data-testid="input-email"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="industryType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">Industry *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-12" data-testid="select-industry">
                                      <SelectValue placeholder="Select your industry" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="restaurant">Restaurant / Café</SelectItem>
                                    <SelectItem value="pub-bar">Pub / Bar</SelectItem>
                                    <SelectItem value="hotel">Hotel / B&B</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                    <SelectItem value="salon">Salon / Spa</SelectItem>
                                    <SelectItem value="healthcare">Healthcare / Dental</SelectItem>
                                    <SelectItem value="trades">Trades / Services</SelectItem>
                                    <SelectItem value="mobile">Mobile / Market Trader</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="currentProvider"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">Current Provider (Optional)</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., Worldpay, Barclaycard, SumUp"
                                    className="h-12"
                                    data-testid="input-current-provider"
                                    {...field}
                                  />
                                </FormControl>
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
                          className={`${step === 1 ? 'w-full' : 'flex-1'} h-14 text-lg font-bold`}
                          disabled={mutation.isPending || (step === 1 && !uploadedFile)}
                          data-testid="button-continue"
                        >
                          {mutation.isPending ? (
                            "Submitting..."
                          ) : step === 2 ? (
                            <>
                              <PoundSterling className="mr-2 h-5 w-5" />
                              Get My Savings Quote
                            </>
                          ) : (
                            <>
                              Continue
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                        <span className="flex items-center gap-1">
                          <Shield className="w-3 h-3" /> 100% Confidential
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Response in 2 hours
                        </span>
                      </div>
                    </form>
                  </Form>
                </Card>

                <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <PoundSterling className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white">
                      <p className="font-bold text-lg mb-1">
                        "We saved £6,400 in our first year"
                      </p>
                      <p className="text-white/70 text-sm">
                        The Spotted Dog, Tunbridge Wells - Switched from Worldpay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pb-12">
              <h2 className="text-3xl font-black text-center text-white mb-10">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Upload,
                    step: "1",
                    title: "Upload Your Bill",
                    desc: "Just snap a photo or upload a PDF of your merchant statement"
                  },
                  {
                    icon: TrendingDown,
                    step: "2", 
                    title: "We Analyse Every Fee",
                    desc: "Our team reviews every charge and finds where you're overpaying"
                  },
                  {
                    icon: PoundSterling,
                    step: "3",
                    title: "Get Your Savings",
                    desc: "Receive a detailed comparison showing your exact savings"
                  }
                ].map((item, i) => (
                  <Card key={i} className="p-6 bg-white/5 backdrop-blur-sm border-white/10 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
