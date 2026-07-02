"use client";

import { forwardRef, useCallback, useState } from "react";
import type { CountryCode } from "@/data/country-codes";
import { defaultCountryDial } from "@/data/country-codes";

const INDIA_ONLY: CountryCode[] = [
  { iso: "IN", name: "India", dial: "91", flag: "🇮🇳" },
];

interface CountryCodeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  id?: string;
}

export const CountryCodeSelect = forwardRef<HTMLSelectElement, CountryCodeSelectProps>(
  function CountryCodeSelect(
    { id = "countryCode", defaultValue = defaultCountryDial, onFocus, onMouseDown, ...props },
    ref,
  ) {
    const [countries, setCountries] = useState<CountryCode[]>(INDIA_ONLY);
    const [loaded, setLoaded] = useState(false);

    const loadAllCountries = useCallback(() => {
      if (loaded) return;
      import("@/data/country-codes").then((mod) => {
        setCountries(mod.countryCodes);
        setLoaded(true);
      });
    }, [loaded]);

    return (
      <select
        {...props}
        id={id}
        ref={ref}
        aria-label="Country code"
        defaultValue={defaultValue}
        className="w-[7.5rem] shrink-0 px-2"
        onFocus={(e) => {
          loadAllCountries();
          onFocus?.(e);
        }}
        onMouseDown={(e) => {
          loadAllCountries();
          onMouseDown?.(e);
        }}
      >
        {countries.map((country) => (
          <option key={`${country.iso}-${country.dial}`} value={country.dial}>
            {country.flag} +{country.dial}
          </option>
        ))}
      </select>
    );
  },
);
