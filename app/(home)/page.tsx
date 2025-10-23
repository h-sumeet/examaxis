import { Navbar } from "@/components/custom/navbar";
import { Hero } from "@/components/custom/hero";
import { LogoLoop } from "@/components/custom/logo-loop";
import { Features } from "@/components/custom/features";
import { Testimonials } from "@/components/custom/testimonials";
import { GrowthChat } from "@/components/custom/growth-chat";
import { FAQ } from "@/components/custom/faq";
import { CTA } from "@/components/custom/cta";
import { Footer } from "@/components/custom/footer";
import { logos } from "@/constants/logo";
import { features } from "@/constants/features";
import { testimonials } from "@/constants/testimonial";
import { faqs } from "@/constants/faq";
import { indicators } from "@/constants/stats";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col min-h-screen items-center">
        <div
          className="bg-background 
        bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(249,115,22,0.4)_0%,rgba(249,115,22,0.25)_40%,transparent_80%)] 
        dark:bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(249,115,22,0.25)_0%,rgba(249,115,22,0.15)_40%,transparent_80%)]"
        >
          <Navbar />
          <Hero />
        </div>
      </div>

      <LogoLoop {...logos} />
      <Features {...features} />
      <Testimonials {...testimonials} />
      <GrowthChat />
      <FAQ {...faqs} />
      <CTA {...indicators} />
      <Footer />
    </div>
  );
}
