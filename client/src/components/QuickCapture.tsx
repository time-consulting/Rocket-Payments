import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, X, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type Step = "closed" | "email" | "businessName" | "mobile" | "complete";

export function QuickCapture() {
  const [step, setStep] = useState<Step>("closed");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mobile, setMobile] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const { toast } = useToast();

  const registerMutation = useMutation({
    mutationFn: async (data: { email: string; businessName?: string; mobile?: string; completionStep: string }) => {
      const response = await apiRequest("POST", "/api/register-interest", data);
      return response.json();
    },
    onError: (error: any) => {
      console.error("Registration error:", error);
    },
  });

  const handleEmailSubmit = async () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }
    
    await registerMutation.mutateAsync({
      email,
      completionStep: "email",
    });
    
    setStep("businessName");
  };

  const handleBusinessNameSubmit = async () => {
    if (!businessName.trim()) {
      toast({
        title: "Please enter your business name",
        variant: "destructive",
      });
      return;
    }
    
    await registerMutation.mutateAsync({
      email,
      businessName,
      completionStep: "businessName",
    });
    
    setStep("mobile");
  };

  const handleMobileSubmit = async () => {
    if (!mobile.trim()) {
      toast({
        title: "Please enter your mobile number",
        variant: "destructive",
      });
      return;
    }
    
    await registerMutation.mutateAsync({
      email,
      businessName,
      mobile,
      completionStep: "complete",
    });
    
    setStep("complete");
    
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent, submitFn: () => void) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitFn();
    }
  };

  if (!isVisible) return null;

  if (step === "closed") {
    return (
      <div className="w-full bg-primary/5 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3">
          <span className="text-sm text-muted-foreground">Interested in better rates?</span>
          <Button
            size="sm"
            variant="ghost"
            className="text-primary font-bold hover:bg-primary/10"
            onClick={() => setStep("email")}
            data-testid="button-register-interest"
          >
            Register Interest
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-primary/20 animate-in slide-in-from-top duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4">
          {step === "email" && (
            <div className="flex items-center gap-3 flex-wrap justify-center animate-in fade-in duration-200">
              <span className="text-sm font-bold text-foreground">What's your email?</span>
              <div className="flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="you@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleEmailSubmit)}
                  className="h-9 w-64 text-sm"
                  autoFocus
                  data-testid="input-quick-email"
                />
                <Button
                  size="sm"
                  onClick={handleEmailSubmit}
                  disabled={registerMutation.isPending}
                  className="h-9 px-4"
                  data-testid="button-quick-email-submit"
                >
                  {registerMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Next
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === "businessName" && (
            <div className="flex items-center gap-3 flex-wrap justify-center animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">{email}</span>
              </div>
              <span className="text-sm font-bold text-foreground">Business name?</span>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Your Business Ltd"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleBusinessNameSubmit)}
                  className="h-9 w-52 text-sm"
                  autoFocus
                  data-testid="input-quick-business"
                />
                <Button
                  size="sm"
                  onClick={handleBusinessNameSubmit}
                  disabled={registerMutation.isPending}
                  className="h-9 px-4"
                  data-testid="button-quick-business-submit"
                >
                  {registerMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Next
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === "mobile" && (
            <div className="flex items-center gap-3 flex-wrap justify-center animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">{businessName}</span>
              </div>
              <span className="text-sm font-bold text-foreground">Mobile number?</span>
              <div className="flex items-center gap-2">
                <Input
                  type="tel"
                  placeholder="07XXX XXXXXX"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleMobileSubmit)}
                  className="h-9 w-44 text-sm"
                  autoFocus
                  data-testid="input-quick-mobile"
                />
                <Button
                  size="sm"
                  onClick={handleMobileSubmit}
                  disabled={registerMutation.isPending}
                  className="h-9 px-4"
                  data-testid="button-quick-mobile-submit"
                >
                  {registerMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Done
                      <Check className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === "complete" && (
            <div className="flex items-center gap-3 animate-in fade-in duration-200">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                Thanks! We'll be in touch soon.
              </span>
            </div>
          )}

          {step !== "complete" && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 ml-2"
              onClick={handleClose}
              data-testid="button-quick-close"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
