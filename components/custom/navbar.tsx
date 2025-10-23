"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { useScrollDetection, useMobileMenu } from "@/hooks/use-navbar";

// Navigation links configuration
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Providers" },
  { href: "/how-we-work", label: "Topics" },
  { href: "/pricing", label: "Trending" },
  { href: "/faqs", label: "Pricing" },
] as const;

export function Navbar() {
  const isScrolled = useScrollDetection(10);
  const {
    isOpen: isMobileMenuOpen,
    toggle: toggleMobileMenu,
    close: closeMobileMenu,
    menuRef,
  } = useMobileMenu();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
      ref={menuRef}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Examaxis Logo" width={32} height={32} />
            <span className="text-2xl font-bold text-foreground">Examaxis</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1"
            aria-label="Primary navigation"
          >
            {navigationLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 font-medium text-foreground/70 hover:text-foreground transition-colors rounded-md"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button size="md" className="font-semibold px-6 cursor-pointer">
              Log in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/10 bg-background/95 backdrop-blur-lg">
            <nav
              className="px-4 pt-4 pb-6 space-y-2"
              aria-label="Mobile navigation"
            >
              {navigationLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full font-semibold"
                  onClick={closeMobileMenu}
                >
                  Log in
                </Button>
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
