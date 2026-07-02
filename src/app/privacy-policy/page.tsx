import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects, uses, and protects your personal information.`,
  robots: { index: true, follow: true },
};

const lastUpdated = "June 30, 2026";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-primary">Legal</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 space-y-10">
            <Section title="Introduction">
              <p>
                {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) operates this website and provides performance
                marketing services. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our
                website or submit our contact form.
              </p>
              <p>
                By using this website or submitting your information, you agree
                to the practices described in this policy. If you do not agree,
                please do not use our website or submit your personal data.
              </p>
            </Section>

            <Section title="Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-800">Contact details:</strong>{" "}
                  name, email address, phone number (including country code),
                  and business name
                </li>
                <li>
                  <strong className="text-slate-800">Business details:</strong>{" "}
                  website URL, industry, monthly ad spend range, monthly revenue
                  range, and your stated marketing challenges
                </li>
                <li>
                  <strong className="text-slate-800">
                    Marketing attribution data:
                  </strong>{" "}
                  UTM parameters (source, medium, campaign, content, term),
                  referrer URL, landing page URL, Facebook click ID (fbclid),
                  and Meta browser cookies (_fbp, _fbc)
                </li>
                <li>
                  <strong className="text-slate-800">Technical data:</strong> IP
                  address, browser type, device information, and pages visited —
                  collected automatically through analytics and security tools
                </li>
                <li>
                  <strong className="text-slate-800">Form metadata:</strong>{" "}
                  submission timestamp and a unique event ID used for conversion
                  tracking deduplication
                </li>
              </ul>
            </Section>

            <Section title="Purpose of Collection">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-800">
                    Responding to inquiries:
                  </strong>{" "}
                  to contact you about your free strategy call or ads audit
                  request
                </li>
                <li>
                  <strong className="text-slate-800">Service delivery:</strong>{" "}
                  to understand your business needs, prepare audits, and provide
                  marketing services if you become a client
                </li>
                <li>
                  <strong className="text-slate-800">
                    Marketing and advertising:
                  </strong>{" "}
                  to measure ad performance, attribute leads to campaigns, and
                  improve our own advertising effectiveness
                </li>
                <li>
                  <strong className="text-slate-800">
                    Website improvement:
                  </strong>{" "}
                  to analyze how visitors use our site and improve content,
                  usability, and conversion rates
                </li>
                <li>
                  <strong className="text-slate-800">
                    Security and fraud prevention:
                  </strong>{" "}
                  to protect our website and forms from spam, bots, and abuse
                </li>
                <li>
                  <strong className="text-slate-800">Legal compliance:</strong>{" "}
                  to comply with applicable laws and respond to lawful requests
                </li>
              </ul>
            </Section>

            <Section title="Analytics and Tracking">
              <p>
                We use analytics and advertising technologies to understand
                website traffic and measure the effectiveness of our marketing
                campaigns. This includes:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Recording page views and user interactions on our website
                  through Google Analytics 4
                </li>
                <li>
                  Tracking form submissions and lead conversions through Meta
                  Pixel (browser-side) and Meta Conversion API (server-side)
                </li>
                <li>
                  Capturing campaign attribution data (UTM parameters, fbclid,
                  referrer) to understand which ads or channels brought you to
                  our site
                </li>
                <li>
                  Using a shared event ID across browser and server events so
                  Meta can deduplicate conversion data accurately
                </li>
              </ul>
              <p>
                Where required by law, we rely on your consent for non-essential
                tracking. You can manage cookie preferences through your browser
                settings and, where available, opt-out tools provided by
                analytics platforms.
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Cookies are small text files stored on your device when you
                visit our website. We and our third-party partners use cookies
                and similar technologies for:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-800">
                    Essential operation:
                  </strong>{" "}
                  basic site functionality and security (e.g., Cloudflare
                  Turnstile bot protection)
                </li>
                <li>
                  <strong className="text-slate-800">Analytics:</strong>{" "}
                  understanding how visitors interact with our site (Google
                  Analytics 4)
                </li>
                <li>
                  <strong className="text-slate-800">Advertising:</strong>{" "}
                  measuring ad performance and attributing conversions (Meta
                  Pixel cookies such as _fbp and _fbc)
                </li>
              </ul>
              <p>
                You can control or delete cookies through your browser settings.
                Disabling cookies may affect certain features of the website. To
                learn more about Meta&apos;s use of data, visit{" "}
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  className="font-medium text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta&apos;s Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="Third-Party Services">
              <p>
                We use the following third-party services to operate our
                website, capture leads, and measure marketing performance. Each
                service may process your data according to its own privacy
                policy:
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong className="text-slate-800">Meta Pixel</strong> —
                  browser-side tracking for page views and lead events.
                  Provider: Meta Platforms, Inc.{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    className="font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong className="text-slate-800">
                    Meta Conversion API (CAPI)
                  </strong>{" "}
                  — server-side transmission of lead conversion events to Meta,
                  including hashed contact information (email, phone, name) for
                  attribution and ad optimization. Provider: Meta Platforms,
                  Inc.
                </li>
                <li>
                  <strong className="text-slate-800">Google Analytics 4</strong>{" "}
                  — website analytics and event tracking. Provider: Google LLC.{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong className="text-slate-800">Google Tag Manager</strong>{" "}
                  — tag management platform used to deploy analytics and
                  marketing scripts. Provider: Google LLC.
                </li>
                <li>
                  <strong className="text-slate-800">Google Sheets</strong> —
                  cloud spreadsheet service used to store and organize lead form
                  submissions. Provider: Google LLC.
                </li>
                <li>
                  <strong className="text-slate-800">Google Apps Script</strong>{" "}
                  — automation service that receives form submissions via
                  webhook and writes data to Google Sheets. Provider: Google
                  LLC.
                </li>
                <li>
                  <strong className="text-slate-800">
                    Cloudflare Turnstile
                  </strong>{" "}
                  — bot protection and spam prevention on our contact form.
                  Provider: Cloudflare, Inc.{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    className="font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <p>
                When you submit our contact form, your data may be transmitted
                to Google Apps Script and stored in Google Sheets. Lead events
                may also be sent to Meta via the Conversion API from our
                servers. We encourage you to review each provider&apos;s privacy
                policy for details on how they handle your data.
              </p>
            </Section>

            <Section title="Data Security">
              <p>
                We implement reasonable technical and organizational measures to
                protect your personal information, including:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  HTTPS encryption for data transmitted between your browser and
                  our website
                </li>
                <li>
                  Server-side storage of sensitive API credentials (not exposed
                  to the browser)
                </li>
                <li>
                  Hashing of personal identifiers (email, phone, name) before
                  transmission to Meta CAPI
                </li>
                <li>
                  Bot protection on our contact form via Cloudflare Turnstile
                </li>
                <li>
                  Access controls limiting who can view lead data in our
                  internal systems
                </li>
              </ul>
              <p>
                No method of transmission over the internet or electronic
                storage is 100% secure. While we strive to protect your
                information, we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain your personal information for as long as necessary to
                respond to your inquiry, deliver services, comply with legal
                obligations, and resolve disputes. Lead data stored in Google
                Sheets is kept for the duration of our business relationship and
                a reasonable period thereafter, unless you request deletion.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-800">Access:</strong> request a
                  copy of the personal data we hold about you
                </li>
                <li>
                  <strong className="text-slate-800">Correction:</strong>{" "}
                  request correction of inaccurate or incomplete data
                </li>
                <li>
                  <strong className="text-slate-800">Deletion:</strong> request
                  deletion of your personal data, subject to legal retention
                  requirements
                </li>
                <li>
                  <strong className="text-slate-800">
                    Withdrawal of consent:
                  </strong>{" "}
                  withdraw consent for marketing communications at any time
                </li>
                <li>
                  <strong className="text-slate-800">
                    Opt-out of tracking:
                  </strong>{" "}
                  use browser settings, ad platform opt-outs, or contact us to
                  limit certain tracking activities
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details
                below. We will respond within a reasonable timeframe as required
                by applicable law.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p>
                Our website and services are not directed to individuals under
                the age of 18. We do not knowingly collect personal information
                from children. If you believe we have collected data from a
                minor, please contact us and we will delete it promptly.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &quot;Last
                updated&quot; date. We encourage you to review this policy
                periodically. Continued use of our website after changes
                constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your data rights, contact us at:
              </p>
              <ul className="list-none space-y-1 pl-0">
                <li>
                  <strong className="text-slate-800">{siteConfig.name}</strong>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>
            </Section>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:underline"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
