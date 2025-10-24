import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/lander/section-header";
import type { FAQSectionProps } from "@/constants/faq";

export function FAQ({ heading, description, items }: FAQSectionProps) {
  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title={heading} description={description} />
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl px-6 lg:px-8"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium lg:text-lg">{item.question}</div>
              </AccordionTrigger>
              <AccordionContent className="">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
