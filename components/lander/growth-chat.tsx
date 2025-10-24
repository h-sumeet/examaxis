"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export function GrowthChat() {
  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="lg:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center md:text-left">
              We're still Growing our Question base
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're continuously expanding our question bank with high-quality
              exam preparation materials. New questions and detailed
              explanations are added daily to help you succeed in your
              certification journey.
            </p>
            <p className="text-muted-foreground text-lg">
              Have a specific certification in mind?{" "}
              <Link
                href="/contact"
                className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-4 transition-colors"
              >
                Let us know
              </Link>{" "}
              and we'll prioritize adding more questions for your target
              certification!
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="font-semibold"
                asChild
              >
                <Link href="/contact">Request a Certification</Link>
              </Button>
            </div>
          </div>

          {/* Right Chart Visualization with Grid Pattern */}
          <div className="relative h-96">
            <GridPattern
              width={40}
              height={40}
              x={-1}
              y={-1}
              strokeDasharray={"4 2"}
              className={cn(
                "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
                "stroke-orange-500/20"
              )}
            />

            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <path
                  d="M 15 260 
                     C 40 255, 50 248, 70 240
                     C 90 232, 100 218, 120 205
                     C 140 192, 160 185, 180 165
                     C 200 145, 210 130, 230 115
                     C 250 100, 270 85, 290 80
                     C 310 75, 330 75, 340 72
                     C 350 69, 365 55, 380 30
                     C 385 22, 388 15, 390 10"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
