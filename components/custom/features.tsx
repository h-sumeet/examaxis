import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/custom/section-header";
import type { FeaturesSectionProps } from "@/constants/features";

export function Features({
  heading,
  description,
  items,
}: FeaturesSectionProps) {
  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title={heading} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 lg:px-8">
          {items.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border border-accent bg-transparent dark:bg-card rounded-md hover:bg-orange-700/10 hover:border-orange-600 dark:hover:bg-orange-600/10 transition-all duration-300"
              >
                <CardContent className="m-4">
                  <div className="">
                    <Icon
                      className="w-10 h-10 text-orange-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-orange-600 mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
