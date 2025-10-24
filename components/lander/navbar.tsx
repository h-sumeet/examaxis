"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/lander/theme-toggle";
import { useScrollDetection, useMobileMenu } from "@/lib/hooks/useNavSettings";
import { navigationLinks } from "@/constants/common";

export function Navbar() {
  const isScrolled = useScrollDetection(150);
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

          {/* Unified Navigation */}
          <div
            className={`${
              isMobileMenuOpen
                ? "absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-t border-border/10 flex flex-col px-4 pt-4 pb-6 space-y-2 md:space-y-0 md:static md:w-auto md:border-0 md:bg-transparent md:flex md:flex-row md:items-center md:space-x-1 md:px-0 md:pt-0 md:pb-0"
                : "hidden md:flex md:flex-row md:items-center md:space-x-1"
            } transition-all`}
          >
            {navigationLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMobileMenu}
                className="px-4 py-2 font-medium text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-md transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* Mobile Login Button */}
            <div className="md:hidden pt-4">
              <Button
                size="lg"
                className="w-full font-semibold"
                onClick={closeMobileMenu}
              >
                Log in
              </Button>
            </div>
          </div>

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
      </nav>
    </header>
  );
}
