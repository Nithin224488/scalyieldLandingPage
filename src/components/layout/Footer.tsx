import { siteConfig, navLinks, services } from "@/data/content";
import Link from "next/link";
import { AnchorLink } from "@/components/ui/AnchorLink";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt={siteConfig.name} className="h-6 w-10" />

              <span className="text-lg font-bold text-slate-900">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              A focused performance marketing agency specializing in Meta Ads,
              conversion optimization, and full-funnel tracking for growing
              businesses.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <AnchorLink
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <span className="text-sm text-slate-500">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-slate-400 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
