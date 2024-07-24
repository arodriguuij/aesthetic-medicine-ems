"use client"

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
