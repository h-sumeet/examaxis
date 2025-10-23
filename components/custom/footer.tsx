import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Releases", href: "/releases" },
    { label: "Docs", href: "/docs" },
  ],
  community: [
    { label: "GitHub", href: "https://github.com" },
    { label: "Discord", href: "https://discord.com" },
    { label: "X", href: "https://x.com" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 py-4 lg:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Logo/Brand Column */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-orange-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-xl font-bold">Examaxis</span>
              </Link>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap gap-x-32 gap-y-8">
              {/* Resources Column */}
              <div>
                <h3 className="font-semibold mb-4 text-foreground">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Column */}
              <div>
                <h3 className="font-semibold mb-4 text-foreground">
                  Community
                </h3>
                <ul className="space-y-3">
                  {footerLinks.community.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Examaxis. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
