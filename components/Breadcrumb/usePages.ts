"use client";

import { usePathname } from "next/navigation";

const usePages = () => {
  const location = usePathname();

  const splitString = location.split("/").filter((part) => part !== "");

  const pages = splitString.map((part, index) => {
    const isLast = index === splitString.length - 1;
    const href = "/" + splitString.slice(0, index + 1).join("/");

    return {
      name: part,
      href: href,
      current: isLast,
    };
  });

  return pages;
};

export default usePages;
