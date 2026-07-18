"use client";

import { siteConfig, navLinks } from "@/data/content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { AnchorLink } from "@/components/ui/AnchorLink";
import Link from "next/link";
import LeadFormPopup from "../sections/LeadFormPopup";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={`/scalyieldLandingPage/logo.png`}
              alt={siteConfig.name}
              className="h-6 w-10"
            />
            <span className="text-lg font-bold tracking-tight text-slate-900">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <AnchorLink
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {link.label}
              </AnchorLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <AnchorLink href="/#contact">
              <Button
                size="sm"
                className="cursor-pointer"
                onClick={() => setOpen(true)}
              >
                Get Free Strategy Call
              </Button>
            </AnchorLink>
          </div>

          <button
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {isMobileOpen && (
          <div className="border-t border-slate-200/60 bg-white/95 px-4 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <AnchorLink
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </AnchorLink>
              ))}
              <AnchorLink
                href="/#contact"
                onClick={() => setIsMobileOpen(false)}
              >
                <Button
                  onClick={() => setOpen(true)}
                  className="w-full cursor-pointer"
                  size="sm"
                >
                  Get Free Strategy Call
                </Button>
              </AnchorLink>
            </div>
          </div>
        )}
      </header>
      <LeadFormPopup open={open} onClose={() => setOpen(!open)} />
    </>
  );
}
