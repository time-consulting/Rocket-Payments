import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SimplePageProps {
  title: string;
  description: string;
  content?: string[];
}

export default function SimplePage({ title, description, content }: SimplePageProps) {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        {content && content.length > 0 && (
          <div className="prose prose-lg max-w-none space-y-6">
            {content.map((paragraph, index) => (
              <p key={index} className="text-base text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/calculate-savings">
            <Button size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
