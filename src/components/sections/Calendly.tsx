"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

interface CalendlyProps {
  name?: string;
  email?: string;
  message?: string;
}

export default function Calendly({
  name = "",
  email = "",
  message = "",
}: CalendlyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (
        e.origin === "https://calendly.com" &&
        e.data.event === "calendly.event_scheduled"
      ) {
        router.push("/thank-you");
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, [router]);

  const url =
    `https://calendly.com/nithinatwork96/30min` +
    `?name=${encodeURIComponent(name)}` +
    `&email=${encodeURIComponent(email)}` +
    `&a1=${encodeURIComponent(message)}` +
    `&hide_event_type_details=1` +
    `&hide_gdpr_banner=1`;

  useEffect(() => {
    if (!window.Calendly || !containerRef.current) return;

    // Remove previous widget if reopening the popup
    containerRef.current.innerHTML = "";

    window.Calendly.initInlineWidget({
      url,
      parentElement: containerRef.current,
    });
  }, [url]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Calendly && containerRef.current) {
            containerRef.current.innerHTML = "";

            window.Calendly.initInlineWidget({
              url,
              parentElement: containerRef.current,
            });
          }
        }}
      />

      <div
        ref={containerRef}
        className="h-full w-full"
        style={{ minHeight: "500px" }}
      />
    </>
  );
}
