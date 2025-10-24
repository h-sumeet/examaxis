import Image from "next/image";
import SectionHeader from "@/components/lander/section-header";
import type { LogoSectionProps } from "@/constants/logo";

export function LogoLoop({
  heading,
  description,
  items,
}: LogoSectionProps) {
  return (
    <section className="pb-10 lg:pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader title={heading} description={description} />

        <div className="max-w-5xl mx-auto">
          {/* All logos in one line */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-34">
            {items.map((logo, index) => (
              <Image
                key={`logo-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto flex-none grayscale opacity-50 dark:invert dark:brightness-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
