"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, MouseEvent } from "react";

type AnchorLinkProps = ComponentProps<typeof Link>;

const HEADER_OFFSET = 96;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}

export function AnchorLink({ href, onClick, ...props }: AnchorLinkProps) {
  const pathname = usePathname();
  const hrefStr = typeof href === "string" ? href : "";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const hashIndex = hrefStr.indexOf("#");
    if (hashIndex === -1) return;

    const pathPart = hrefStr.slice(0, hashIndex) || "/";
    const hash = hrefStr.slice(hashIndex + 1);
    if (!hash) return;

    const onHomePage = pathPart === "/" && pathname === "/";

    if (onHomePage) {
      event.preventDefault();
      window.history.pushState(null, "", `#${hash}`);
      scrollToId(hash);
    }
  }

  return <Link href={href} onClick={handleClick} scroll={false} {...props} />;
}
