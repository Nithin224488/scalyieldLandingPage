/**
 * Public tracking IDs (safe to commit — visible in browser HTML anyway).
 * Env vars override these when set at build time.
 */
export const publicTrackingIds = {
  metaPixelId: "1498620344773299",
  ga4MeasurementId: "G-G-K3D0PRGKRR",
  gtmId: "",
} as const;

export function resolveTrackingIds() {
  const metaPixelId =
    process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || publicTrackingIds.metaPixelId;
  const ga4MeasurementId =
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() ||
    publicTrackingIds.ga4MeasurementId;
  const gtmId =
    process.env.NEXT_PUBLIC_GTM_ID?.trim() || publicTrackingIds.gtmId || "";

  return { metaPixelId, ga4MeasurementId, gtmId };
}
