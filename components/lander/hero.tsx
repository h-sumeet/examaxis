import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <main className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="relative w-full max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-primary dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-500/20">
            <Sparkles className="w-4 h-4" />
            95% Success Rate
          </div>

        {/* Main Content */}
        <div className="text-center space-y-8 ">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-semibold leading-snug">
            <span>Advance your Career</span>
            <br />
            <span>with Cloud Certification</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The future of IT exam preparation is here. Unlock your potential
            with <br />
            smarter study guides and practice questions.
          </p>

          {/* CTA Button */}
          <Button size="lg" className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
            <Link href="/exams" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
