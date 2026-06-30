"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  contactFormSchema,
  type ContactFormData,
  industries,
  adSpendRanges,
  revenueRanges,
} from "@/lib/form-schema";
import {
  getTrackingParams,
  fireMetaLeadEvent,
  fireGA4LeadEvent,
  submitToWebhook,
} from "@/lib/tracking";
import { generateEventId } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Loader2, Send } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tracking = getTrackingParams(params);
    const eventId = generateEventId();

    Object.entries(tracking).forEach(([key, value]) => {
      if (value) setValue(key as keyof ContactFormData, value);
    });
    setValue("event_id", eventId);
    setValue("landingPageUrl", window.location.href);
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    const eventId = data.event_id || generateEventId();

    try {
      const success = await submitToWebhook({
        ...data,
        event_id: eventId,
        submittedAt: new Date().toISOString(),
      });

      if (!success) {
        setSubmitError("Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      fireMetaLeadEvent(eventId);
      fireGA4LeadEvent(eventId);

      router.push("/thank-you");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-slate-50/50">
      <SectionHeading
        badge="Get Started"
        title="Book Your Free Strategy Call"
        subtitle="Tell us about your business and we'll create a custom growth plan for you."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8"
        noValidate
      >
        {/* Hidden tracking fields */}
        <input type="hidden" {...register("fbclid")} />
        <input type="hidden" {...register("fbp")} />
        <input type="hidden" {...register("fbc")} />
        <input type="hidden" {...register("utm_source")} />
        <input type="hidden" {...register("utm_medium")} />
        <input type="hidden" {...register("utm_campaign")} />
        <input type="hidden" {...register("utm_content")} />
        <input type="hidden" {...register("utm_term")} />
        <input type="hidden" {...register("referrer")} />
        <input type="hidden" {...register("landingPageUrl")} />
        <input type="hidden" {...register("event_id")} />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name *
            </label>
            <input id="name" className={inputClass} placeholder="Your full name" {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email *
            </label>
            <input
              id="email"
              type="email"
              className={inputClass}
              placeholder="you@company.com"
              {...register("email")}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone *
            </label>
            <input
              id="phone"
              type="tel"
              className={inputClass}
              placeholder="+91 98765 43210"
              {...register("phone")}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="businessName" className={labelClass}>
              Business Name *
            </label>
            <input
              id="businessName"
              className={inputClass}
              placeholder="Your company name"
              {...register("businessName")}
            />
            {errors.businessName && (
              <p className="mt-1 text-xs text-red-500">{errors.businessName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="website" className={labelClass}>
            Website
          </label>
          <input
            id="website"
            type="url"
            className={inputClass}
            placeholder="https://yourwebsite.com"
            {...register("website")}
          />
          {errors.website && <p className="mt-1 text-xs text-red-500">{errors.website.message}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="industry" className={labelClass}>
              Industry *
            </label>
            <select id="industry" className={inputClass} defaultValue="" {...register("industry")}>
              <option value="" disabled>
                Select industry
              </option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
            {errors.industry && (
              <p className="mt-1 text-xs text-red-500">{errors.industry.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="monthlyAdSpend" className={labelClass}>
              Monthly Ad Spend *
            </label>
            <select
              id="monthlyAdSpend"
              className={inputClass}
              defaultValue=""
              {...register("monthlyAdSpend")}
            >
              <option value="" disabled>
                Select range
              </option>
              {adSpendRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.monthlyAdSpend && (
              <p className="mt-1 text-xs text-red-500">{errors.monthlyAdSpend.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="monthlyRevenue" className={labelClass}>
              Monthly Revenue *
            </label>
            <select
              id="monthlyRevenue"
              className={inputClass}
              defaultValue=""
              {...register("monthlyRevenue")}
            >
              <option value="" disabled>
                Select range
              </option>
              {revenueRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.monthlyRevenue && (
              <p className="mt-1 text-xs text-red-500">{errors.monthlyRevenue.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="biggestChallenge" className={labelClass}>
            Biggest Marketing Challenge *
          </label>
          <textarea
            id="biggestChallenge"
            rows={4}
            className={inputClass}
            placeholder="Tell us about your biggest marketing challenge..."
            {...register("biggestChallenge")}
          />
          {errors.biggestChallenge && (
            <p className="mt-1 text-xs text-red-500">{errors.biggestChallenge.message}</p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <input
            id="privacyAgreed"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
            {...register("privacyAgreed")}
          />
          <label htmlFor="privacyAgreed" className="text-sm text-slate-600">
            I agree to the{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Privacy Policy
            </a>
            . *
          </label>
        </div>
        {errors.privacyAgreed && (
          <p className="text-xs text-red-500">{errors.privacyAgreed.message}</p>
        )}

        {/* Cloudflare Turnstile placeholder */}
        <div
          id="turnstile-widget"
          className="flex min-h-[65px] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-xs text-slate-400"
        >
          Cloudflare Turnstile widget — add site key in .env
        </div>

        {submitError && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{submitError}</p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Book My Free Strategy Call
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Section>
  );
}
