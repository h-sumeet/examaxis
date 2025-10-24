import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import SectionHeader from "@/components/lander/section-header";
import { cn } from "@/lib/utils";
import type { StatsSectionProps } from "@/constants/stats";

export function CTA({ stats }: StatsSectionProps) {
  return (
    <section className="relative py-10 lg:py-20 overflow-hidden">
      {/* Grid Pattern Background */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[-webkit-mask-image:radial-gradient(600px_at_center,white,transparent)]",
          "mask-[radial-gradient(600px_at_center,white,transparent)]",
          "stroke-orange-500/30"
        )}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-500/20">
            <Sparkles className="w-4 h-4" />
            95% Success Rate
          </div>

          <SectionHeader
            title="Join Thousands of Certified Professionals"
            description="Start your certification journey today with our comprehensive question bank. 
            Access thousands of practice questions, detailed explanations, and realistic mock tests 
            for all major IT certifications."
          />

          {/* CTA Button */}
          <Button
            size="lg"
            className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            asChild
          >
            <Link href="/exams" className="flex items-center gap-2">
              Explore All Exam Topics
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {stats.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {indicator.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/80 pointer-events-none"></div>
    </section>
  );
}
