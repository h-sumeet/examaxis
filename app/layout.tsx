import type { Metadata } from "next";
import "@/styles/globals.css";
import { figtree, robotoMono } from "@/lib/font";
import Providers from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "Examaxis",
  description: "This website provides all the information about IT exams and certifications.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  verification: {
    google: "DdZU7HlLUvJT-FHvgpixByHGZldt23FAeWksTrKTPkM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
