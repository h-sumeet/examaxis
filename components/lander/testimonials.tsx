"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectionHeader from "@/components/lander/section-header";
import type { TestimonialsProps } from "@/constants/testimonial";

export function Testimonials({
  heading,
  description,
  items,
}: TestimonialsProps) {
  return (
    <section className="py-10 lg:py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader title={heading} description={description} />

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto px-6 lg:px-8">
          {items.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              // hide items after the first 3 on small screens, show from md up
              className={`${
                index >= 3 ? "hidden md:block" : ""
              } hover:shadow-lg hover:border-orange-600 transition-all duration-300 mb-6 break-inside-avoid bg-transparent`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-linear-to-br from-orange-500 to-orange-700 text-white">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {testimonial.username}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  {testimonial.content}
                  {testimonial.emoji && ` ${testimonial.emoji}`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Fade Effect */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-background via-background/50 to-transparent pointer-events-none"></div> */}
    </section>
  );
}
