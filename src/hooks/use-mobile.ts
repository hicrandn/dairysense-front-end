import { useState, useEffect } from "react";

// Tablet ve mobil için breakpoint
const TABLET_BREAKPOINT = 1024; // lg breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < TABLET_BREAKPOINT; // Tablet ve mobil için
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () =>
      setIsMobile(window.innerWidth < TABLET_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
