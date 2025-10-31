import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { CheckCircle } from "lucide-react";

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

export default function Quote() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <Card className="max-w-2xl w-full">
          <CardContent className="pt-12 pb-12 text-center space-y-6">
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-6">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold" data-testid="text-success-headline">Thank you for your request!</h2>
              <p className="text-lg text-muted-foreground">
                We've received your information and a member of our team will be in touch within 24 hours.
              </p>
            </div>
            <div className="pt-4">
              <Button onClick={() => window.location.href = "/"} data-testid="button-return-home">
                Return to Homepage
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-quote-headline">
            Get started with Rocket Payments
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete the form below and we'll get back to you within 24 hours with a custom quote tailored to your business needs.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Request a Quote</CardTitle>
            <CardDescription>
              Tell us about your business and we'll create a payment solution that works for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Business Ltd" {...field} data-testid="input-business-name" />
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
                        <FormLabel>Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} data-testid="input-contact-name" />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@business.com" {...field} data-testid="input-email" />
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+44 20 1234 5678" {...field} data-testid="input-phone" />
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
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-business-type">
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
                        <FormLabel>Estimated Monthly Volume (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-monthly-volume">
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
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your specific needs or any questions you have..."
                          className="resize-none min-h-[120px]"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={mutation.isPending}
                    data-testid="button-submit-quote"
                  >
                    {mutation.isPending ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-primary">24hrs</div>
            <p className="text-sm text-muted-foreground">Response time</p>
          </Card>
          <Card className="p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-primary">No</div>
            <p className="text-sm text-muted-foreground">Fixed contracts</p>
          </Card>
          <Card className="p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-primary">£3,000</div>
            <p className="text-sm text-muted-foreground">Exit fee coverage</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
