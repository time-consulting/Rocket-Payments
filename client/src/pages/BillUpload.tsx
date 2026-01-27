import { useState, useRef } from "react";
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
  AlertCircle,
  Sparkles
} from "lucide-react";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name required"),
  contactName: z.string().min(2, "Your name required"),
  mobile: z.string().min(10, "Valid mobile number required"),
  email: z.string().email("Valid email required"),
  industryType: z.string().optional(),
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
      
      setTimeout(() => {
        setStep(2);
      }, 500);
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
    mutation.mutate(data);
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Thank You | Bill Comparison | Rocket Payments"
          description="Your bill has been uploaded. We'll analyse it and get back to you with your savings."
          canonical="https://rocketpayments.co.uk/upload-bill"
        />
        <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-blue-700 flex items-center justify-center p-4">
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
                "We analyse your current rates line by line",
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
        title="Upload Your Bill | See Your Exact Savings | Rocket Payments"
        description="Upload your payment processing bill for a free like-for-like comparison. See exactly how much you could save."
        canonical="https://rocketpayments.co.uk/upload-bill"
        keywords="payment processing comparison, merchant services comparison, card processing rates comparison"
      />
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-blue-700">
        <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white py-2.5 px-4 text-center z-50">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-bold text-sm">LIMITED TIME: Free bill analysis - usually £149</span>
          </div>
        </div>

        <div className="pt-16 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 pt-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-white font-medium text-sm">Average savings: £4,200/year</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Stop Overpaying for{" "}
                <span className="text-amber-300">Card Processing</span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Upload your bill. Get your exact savings in 2 hours. It's that simple.
              </p>
            </div>

            <Card className="p-6 md:p-8 bg-white shadow-2xl max-w-xl mx-auto">
              {step === 1 ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-black mb-2">
                      Upload Your Highest Bill
                    </h2>
                    <p className="text-muted-foreground">
                      The higher the bill, the better rates we can get you
                    </p>
                  </div>

                  <div 
                    className={`relative border-3 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
                      uploadedFile 
                        ? "border-green-500 bg-green-50" 
                        : "border-primary/50 hover:border-primary hover:bg-primary/5"
                    }`}
                    onClick={() => !isUploading && fileInputRef.current?.click()}
                    style={{ borderWidth: '3px' }}
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
                      <div className="py-6">
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="font-bold text-lg">Uploading your bill...</p>
                        <p className="text-muted-foreground text-sm mt-1">This won't take long</p>
                      </div>
                    ) : uploadedFile ? (
                      <div className="py-4">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                          <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <p className="font-bold text-lg text-green-700 mb-1">{uploadedFile.name}</p>
                        <p className="text-green-600">Bill uploaded successfully!</p>
                      </div>
                    ) : (
                      <div className="py-4">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Upload className="w-10 h-10 text-primary" />
                        </div>
                        <p className="font-black text-xl mb-2">
                          Click to Upload Your Bill
                        </p>
                        <p className="text-muted-foreground mb-4">
                          PDF, JPG or PNG (max 10MB)
                        </p>
                        <Button size="lg" className="h-14 px-8 text-lg font-bold">
                          <Upload className="mr-2 h-5 w-5" />
                          Choose File
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-amber-800 text-sm">
                          Pro tip: Upload your highest month
                        </p>
                        <p className="text-amber-700 text-sm mt-1">
                          Higher processing volume = better rates we can negotiate for you. Find your busiest month from the last 6 months.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3" /> 100% Secure
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 2hr Response
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-3 h-3" /> No Obligation
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-black mb-1">
                      Bill Uploaded!
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Now tell us where to send your savings quote
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                            <FormLabel className="font-semibold">Industry (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12" data-testid="select-industry">
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="restaurant">Restaurant / Cafe</SelectItem>
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

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-lg font-bold"
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? (
                          "Submitting..."
                        ) : (
                          <>
                            <PoundSterling className="mr-2 h-5 w-5" />
                            Get My Savings Quote
                          </>
                        )}
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        <Shield className="w-3 h-3 inline mr-1" />
                        Your details are secure & never shared with third parties
                      </p>
                    </form>
                  </Form>
                </div>
              )}
            </Card>

            <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: Upload,
                  title: "1. Upload Bill",
                  desc: "Takes 10 seconds"
                },
                {
                  icon: Zap,
                  title: "2. We Analyse",
                  desc: "Find hidden fees"
                },
                {
                  icon: PoundSterling,
                  title: "3. Get Savings",
                  desc: "Exact quote in 2hrs"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-white/70 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm">
                Trusted by 2,500+ UK businesses | Average savings £4,200/year
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
