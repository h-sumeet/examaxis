import type { ReactNode } from "react";
import { metadata } from "@/utils/metadata";
import "@/styles/globals.css";
import { figtree, robotoMono } from "@/lib/font";
import Providers from "@/components/custom/Providers";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none">
      <body
        className={`${figtree.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
