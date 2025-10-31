import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Shield, Clock, Award, Sparkles, TrendingUp, Users, Lock, Zap, Star, Check, ArrowRight } from "lucide-react";

const quoteFormSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
  monthlyVolume: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
}

export default function Quote() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      monthlyVolume: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: QuoteFormData) => {
      return await apiRequest("POST", "/api/quote", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Request submitted!",
        description: "We'll be in touch within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb,59,130,246),0.3),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--primary-rgb,59,130,246),0.2),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <Card className="max-w-3xl w-full relative border-primary/20 shadow-2xl animate-in zoom-in-95 duration-700">
          <div className="pt-16 pb-16 px-8 text-center space-y-8">
            <div className="flex justify-center animate-in zoom-in-95 duration-1000">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse" />
                <div className="relative rounded-full bg-gradient-to-br from-primary to-primary/70 p-8 shadow-2xl">
                  <CheckCircle className="h-20 w-20 text-primary-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" data-testid="text-success-headline">
                You're all set!
              </h2>
              <p className="text-2xl text-muted-foreground max-w-xl mx-auto">
                We've received your information and our team is already reviewing your request.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              {[
                { icon: Clock, title: "Within 24 hours", desc: "You'll hear from us" },
                { icon: Award, title: "Custom quote", desc: "Tailored to your needs" },
                { icon: Sparkles, title: "Zero obligation", desc: "No commitment required" },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-black text-lg">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
              <Button 
                size="lg"
                onClick={() => window.location.href = "/"} 
                data-testid="button-return-home"
                className="text-lg px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Return to Homepage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Epic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb,59,130,246),0.15),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_50%)] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 shadow-lg animate-in fade-in slide-in-from-top-4 duration-700">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-black tracking-wide text-primary">GET YOUR CUSTOM QUOTE IN 24 HOURS</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000" data-testid="text-quote-headline">
              Start your journey with<br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Rocket Payments
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Join 110,000+ businesses processing payments with confidence. Get a personalized quote tailored to your needs—no obligation, completely free.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Trust Indicators - Left Side */}
            <div className="lg:col-span-1 space-y-6">
              <AnimatedSection>
                <div className="space-y-6">
                  <h3 className="text-2xl font-black">Why businesses trust us</h3>
                  
                  {[
                    { icon: Shield, title: "Secure & Encrypted", desc: "Bank-level security for all your data" },
                    { icon: Clock, title: "24-hour response", desc: "Get your quote within one business day" },
                    { icon: Award, title: "No commitment", desc: "Free quote with zero obligation" },
                    { icon: TrendingUp, title: "99.99% uptime", desc: "Industry-leading reliability" },
                    { icon: Users, title: "110k+ businesses", desc: "Trusted by companies like yours" },
                    { icon: Lock, title: "PCI DSS certified", desc: "Highest security standards" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 animate-in fade-in slide-in-from-left-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-black">{item.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed">
                      "Switching to Rocket was the best decision. Setup took 48 hours and we've had zero downtime."
                    </p>
                    <p className="text-xs font-bold">— Sarah M., Restaurant Owner</p>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Main Form - Center/Right */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={300}>
                <Card className={`relative border-2 shadow-2xl transition-all duration-500 ${
                  focusedField ? 'border-primary/50 shadow-primary/20' : 'border-border'
                }`}>
                  {/* Glowing effect when form is active */}
                  {focusedField && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 blur-xl opacity-50 animate-pulse" />
                  )}
                  
                  <div className="relative bg-card rounded-3xl p-8 md:p-10">
                    <div className="mb-8 space-y-3">
                      <h2 className="text-3xl md:text-4xl font-black">Request your free quote</h2>
                      <p className="text-base text-muted-foreground">
                        Fill in your details below and we'll create a payment solution perfectly tailored to your business.
                      </p>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-black">Business Name *</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Input 
                                      placeholder="Your Business Ltd" 
                                      {...field} 
                                      data-testid="input-business-name"
                                      onFocus={() => setFocusedField('businessName')}
                                      onBlur={() => setFocusedField(null)}
                                      className={`h-12 text-base transition-all duration-300 ${
                                        focusedField === 'businessName' ? 'ring-2 ring-primary/20 border-primary' : ''
                                      }`}
                                    />
                                    {field.value && (
                                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary animate-in zoom-in-95" />
                                    )}
                                  </div>
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
                                <FormLabel className="text-base font-black">Contact Name *</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Input 
                                      placeholder="John Smith" 
                                      {...field} 
                                      data-testid="input-contact-name"
                                      onFocus={() => setFocusedField('contactName')}
                                      onBlur={() => setFocusedField(null)}
                                      className={`h-12 text-base transition-all duration-300 ${
                                        focusedField === 'contactName' ? 'ring-2 ring-primary/20 border-primary' : ''
                                      }`}
                                    />
                                    {field.value && (
                                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary animate-in zoom-in-95" />
                                    )}
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-black">Email Address *</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Input 
                                      type="email" 
                                      placeholder="john@business.com" 
                                      {...field} 
                                      data-testid="input-email"
                                      onFocus={() => setFocusedField('email')}
                                      onBlur={() => setFocusedField(null)}
                                      className={`h-12 text-base transition-all duration-300 ${
                                        focusedField === 'email' ? 'ring-2 ring-primary/20 border-primary' : ''
                                      }`}
                                    />
                                    {field.value && field.value.includes('@') && (
                                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary animate-in zoom-in-95" />
                                    )}
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-black">Phone Number *</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Input 
                                      type="tel" 
                                      placeholder="+44 20 1234 5678" 
                                      {...field} 
                                      data-testid="input-phone"
                                      onFocus={() => setFocusedField('phone')}
                                      onBlur={() => setFocusedField(null)}
                                      className={`h-12 text-base transition-all duration-300 ${
                                        focusedField === 'phone' ? 'ring-2 ring-primary/20 border-primary' : ''
                                      }`}
                                    />
                                    {field.value && (
                                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary animate-in zoom-in-95" />
                                    )}
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="businessType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-black">Business Type *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger 
                                      data-testid="select-business-type"
                                      onFocus={() => setFocusedField('businessType')}
                                      onBlur={() => setFocusedField(null)}
                                      className={`h-12 text-base transition-all duration-300 ${
                                        focusedField === 'businessType' ? 'ring-2 ring-primary/20 border-primary' : ''
                                      }`}
                                    >
                                      <SelectValue placeholder="Select your industry" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="quick-service-restaurant">Quick-Service Restaurant</SelectItem>
                                    <SelectItem value="full-service-restaurant">Full-Service Restaurant</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                    <SelectItem value="dental">Dental & Healthcare</SelectItem>
                                    <SelectItem value="hospitality">Hospitality</SelectItem>
                                    <SelectItem value="professional-services">Professional Services</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="monthlyVolume"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-black">Monthly Volume (Optional)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger 
                                      data-testid="select-monthly-volume"
                                      onFocus={() => setFocusedField('monthlyVolume')}
                                      onBlur={() => setFocusedField(null)}
                                      className={`h-12 text-base transition-all duration-300 ${
                                        focusedField === 'monthlyVolume' ? 'ring-2 ring-primary/20 border-primary' : ''
                                      }`}
                                    >
                                      <SelectValue placeholder="Select volume range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="under-5k">Under £5,000</SelectItem>
                                    <SelectItem value="5k-25k">£5,000 - £25,000</SelectItem>
                                    <SelectItem value="25k-100k">£25,000 - £100,000</SelectItem>
                                    <SelectItem value="100k-500k">£100,000 - £500,000</SelectItem>
                                    <SelectItem value="over-500k">Over £500,000</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-black">Additional Information (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your specific needs or any questions you have..."
                                  className={`resize-none min-h-[120px] text-base transition-all duration-300 ${
                                    focusedField === 'message' ? 'ring-2 ring-primary/20 border-primary' : ''
                                  }`}
                                  {...field}
                                  data-testid="textarea-message"
                                  onFocus={() => setFocusedField('message')}
                                  onBlur={() => setFocusedField(null)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="pt-6">
                          <Button
                            type="submit"
                            size="lg"
                            disabled={mutation.isPending}
                            data-testid="button-submit-quote"
                            className="w-full text-xl py-7 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                          >
                            {!mutation.isPending && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                            )}
                            <span className="relative flex items-center justify-center gap-3">
                              {mutation.isPending ? (
                                <>
                                  <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                  Submitting your request...
                                </>
                              ) : (
                                <>
                                  <Zap className="h-6 w-6" />
                                  Get My Free Quote
                                  <ArrowRight className="h-6 w-6" />
                                </>
                              )}
                            </span>
                          </Button>

                          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Lock className="h-4 w-4" />
                              <span>Secure & encrypted</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>24hr response</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4" />
                              <span>No obligation</span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </Form>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom Trust Banner */}
          <AnimatedSection delay={800}>
            <div className="mt-20 grid md:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: "24hrs", desc: "Response time" },
                { icon: Shield, title: "No", desc: "Fixed contracts" },
                { icon: Award, title: "£3,000", desc: "Exit fee coverage" },
                { icon: Users, title: "110k+", desc: "Happy businesses" },
              ].map((item, i) => (
                <Card key={i} className="p-8 text-center space-y-3 hover-elevate transition-all duration-500 cursor-default border-primary/10 shadow-lg">
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-primary">{item.title}</div>
                  <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
