"use client";

import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Check if window is defined
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", () => setWidth(window.innerWidth));
      }
    };
  }, []);

  return width <= 768;
};

export default useIsMobile;
