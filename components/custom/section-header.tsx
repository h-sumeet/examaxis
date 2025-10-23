import React from "react";

interface SectionHeaderProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function SectionHeader({
  title,
  description,
  children,
}: SectionHeaderProps) {
  return (
    <header className="mx-auto max-w-4xl flex flex-col text-center mb-8 md:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 md:mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
        {title}
      </h2>
      <p className="mx-auto lg:px-30 text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed">
        {description}
      </p>
      {children && <div className="mt-4">{children}</div>}
    </header>
  );
}
