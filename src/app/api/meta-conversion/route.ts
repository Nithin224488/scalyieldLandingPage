import { sendMetaLeadEvent } from "@/lib/meta-capi";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const capiRequestSchema = z.object({
  event_id: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(4),
  countryCode: z.string().optional(),
  name: z.string().min(2),
  landingPageUrl: z.string().optional(),
  fbp: z.string().optional(),
  fbc: z.string().optional(),
});

function isCapiConfigured(): boolean {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;
  return Boolean(
    token &&
      pixelId &&
      !token.includes("your-meta") &&
      !pixelId.includes("XXXX"),
  );
}

export async function POST(request: NextRequest) {
  if (!isCapiConfigured()) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const body = await request.json();
    const data = capiRequestSchema.parse(body);

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    const result = await sendMetaLeadEvent({
      ...data,
      clientIp,
      userAgent,
    });

    return NextResponse.json({ ok: true, events_received: result.events_received });
  } catch (error) {
    console.error("Meta CAPI error:", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
