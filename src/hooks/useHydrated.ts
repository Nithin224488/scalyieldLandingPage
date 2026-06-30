"use client";

import { useEffect, useState } from "react";

/** True only after the client has mounted — avoids SSR/hydration mismatches from motion initial states. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
