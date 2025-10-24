import { Navbar } from "@/components/lander/navbar";
import { Hero } from "@/components/lander/hero";
import { LogoLoop } from "@/components/lander/logo-loop";
import { Features } from "@/components/lander/features";
import { Testimonials } from "@/components/lander/testimonials";
import { GrowthChat } from "@/components/lander/growth-chat";
import { FAQ } from "@/components/lander/faq";
import { CTA } from "@/components/lander/cta";
import { Footer } from "@/components/lander/footer";
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
