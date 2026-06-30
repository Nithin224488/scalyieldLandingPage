import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessName: z.string().min(2, "Business name is required"),
  website: z.string().url("Please enter a valid URL").or(z.literal("")),
  industry: z.string().min(1, "Please select an industry"),
  monthlyAdSpend: z.string().min(1, "Please select your ad spend range"),
  monthlyRevenue: z.string().min(1, "Please select your revenue range"),
  biggestChallenge: z.string().min(10, "Please describe your challenge"),
  privacyAgreed: z.literal(true, {
    message: "You must agree to the Privacy Policy",
  }),
  // Hidden tracking fields
  fbclid: z.string().optional(),
  fbp: z.string().optional(),
  fbc: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
  referrer: z.string().optional(),
  landingPageUrl: z.string().optional(),
  event_id: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const industries = [
  "E-commerce",
  "SaaS / Technology",
  "Local Services",
  "Healthcare",
  "Real Estate",
  "Education",
  "Finance",
  "Other",
] as const;

export const adSpendRanges = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹10,00,000",
  "₹10,00,000+",
] as const;

export const revenueRanges = [
  "Under ₹5,00,000",
  "₹5,00,000 – ₹25,00,000",
  "₹25,00,000 – ₹1,00,00,000",
  "₹1,00,00,000+",
] as const;
