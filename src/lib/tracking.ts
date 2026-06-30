export interface TrackingParams {
  fbclid?: string;
  fbp?: string;
  fbc?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landingPageUrl?: string;
  event_id?: string;
}

export function getTrackingParams(searchParams: URLSearchParams): TrackingParams {
  return {
    fbclid: searchParams.get("fbclid") ?? undefined,
    fbp: getCookie("_fbp") ?? undefined,
    fbc: getCookie("_fbc") ?? searchParams.get("fbclid")
      ? `fb.1.${Date.now()}.${searchParams.get("fbclid")}`
      : undefined,
    utm_source: searchParams.get("utm_source") ?? undefined,
    utm_medium: searchParams.get("utm_medium") ?? undefined,
    utm_campaign: searchParams.get("utm_campaign") ?? undefined,
    utm_content: searchParams.get("utm_content") ?? undefined,
    utm_term: searchParams.get("utm_term") ?? undefined,
    referrer: typeof document !== "undefined" ? document.referrer : undefined,
    landingPageUrl: typeof window !== "undefined" ? window.location.href : undefined,
  };
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export function fireMetaLeadEvent(eventId: string) {
  if (typeof window === "undefined") return;
  const win = window as unknown as { fbq?: (...args: unknown[]) => void };
  if (win.fbq) {
    win.fbq("track", "Lead", {}, { eventID: eventId });
  }
}

export function fireGA4LeadEvent(eventId: string) {
  if (typeof window === "undefined") return;
  const win = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (win.gtag) {
    win.gtag("event", "generate_lead", { event_id: eventId });
  }
}

export async function submitToWebhook(data: Record<string, unknown>): Promise<boolean> {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl || webhookUrl.includes("YOUR_SCRIPT_ID")) {
    console.warn("Webhook URL not configured. Form data:", data);
    return true;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.type === "opaque" || response.ok;
  } catch (error) {
    console.error("Webhook submission failed:", error);
    return false;
  }
}
