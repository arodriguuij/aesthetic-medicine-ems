"use client";

import { useEffect, useState } from "react";

const useScrollToTop = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null as any;
  }
  return window.scrollTo({ top: 0, behavior: "smooth" });
};

export default useScrollToTop;
