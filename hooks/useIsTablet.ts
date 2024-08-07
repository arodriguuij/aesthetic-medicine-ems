"use client";

import { useEffect, useState } from "react";

const useIsTablet = () => {
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

  return width <= 1024;
};

export default useIsTablet;
