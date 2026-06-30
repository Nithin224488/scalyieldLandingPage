import { createHash } from "crypto";

export interface MetaLeadEventInput {
  event_id: string;
  email: string;
  phone: string;
  countryCode?: string;
  name: string;
  landingPageUrl?: string;
  fbp?: string;
  fbc?: string;
  clientIp?: string;
  userAgent?: string;
}

interface MetaCapiResponse {
  events_received?: number;
  messages?: string[];
  fbtrace_id?: string;
  error?: {
    message: string;
    type: string;
    code: number;
  };
}

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

/** Meta requires lowercase + trimmed email before hashing. */
export function hashEmail(email: string): string {
  return sha256(email.trim().toLowerCase());
}

/**
 * Meta requires digits only with country code (no +, spaces, or leading zeros).
 */
export function hashPhone(phone: string, countryCode?: string): string {
  const local = phone.replace(/\D/g, "");

  if (countryCode) {
    const dial = countryCode.replace(/\D/g, "");
    return sha256(`${dial}${local}`);
  }

  let digits = local;
  if (digits.length === 10 && /^[6-9]/.test(digits)) {
    digits = `91${digits}`;
  }

  return sha256(digits);
}

/** First name only — lowercase a-z characters before hashing. */
export function hashFirstName(name: string): string {
  const first = name.trim().split(/\s+/)[0]?.toLowerCase().replace(/[^a-z]/g, "") ?? "";
  return first ? sha256(first) : "";
}

export async function sendMetaLeadEvent(input: MetaLeadEventInput): Promise<MetaCapiResponse> {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;

  if (!accessToken || !pixelId) {
    throw new Error("Meta CAPI credentials are not configured");
  }

  const userData: Record<string, string | string[]> = {
    em: [hashEmail(input.email)],
    ph: [hashPhone(input.phone, input.countryCode)],
  };

  const hashedFirstName = hashFirstName(input.name);
  if (hashedFirstName) {
    userData.fn = [hashedFirstName];
  }

  if (input.fbp) userData.fbp = input.fbp;
  if (input.fbc) userData.fbc = input.fbc;
  if (input.clientIp) userData.client_ip_address = input.clientIp;
  if (input.userAgent) userData.client_user_agent = input.userAgent;

  const eventPayload = {
    event_name: "Lead",
    event_time: Math.floor(Date.now() / 1000),
    event_id: input.event_id,
    event_source_url: input.landingPageUrl,
    action_source: "website",
    user_data: userData,
  };

  const params = new URLSearchParams({ access_token: accessToken });
  if (testEventCode) {
    params.set("test_event_code", testEventCode);
  }

  const url = `https://graph.facebook.com/v21.0/${pixelId}/events?${params}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [eventPayload] }),
  });

  const result = (await response.json()) as MetaCapiResponse;

  if (!response.ok || result.error) {
    throw new Error(result.error?.message ?? `Meta CAPI request failed (${response.status})`);
  }

  return result;
}
