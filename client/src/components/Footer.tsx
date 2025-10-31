import { Link } from "wouter";
import { Rocket } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Rocket Payments</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fast, reliable payment solutions built for your business success. Join thousands of businesses processing payments with confidence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/rocket-go" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-rocket-go">
                  Rocket Go
                </Link>
              </li>
              <li>
                <Link href="/products/rocket-pocket" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-rocket-pocket">
                  Rocket Pocket
                </Link>
              </li>
              <li>
                <Link href="/products/rocket-wired" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-rocket-wired">
                  Rocket Wired
                </Link>
              </li>
              <li>
                <Link href="/products/tap-to-pay" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-tap-to-pay">
                  Tap to Pay on iPhone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-resources">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-support">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-sm text-muted-foreground hover:text-foreground transition-colors block" data-testid="link-footer-compliance">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Rocket Payments. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              PCI DSS compliant. Secure payment processing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
