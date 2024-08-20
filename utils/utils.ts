"use client";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const convertToSubCurrency = (amount: number, factor = 100) =>
  Math.round(amount * factor);

export const isProd = process.env.NEXT_PUBLIC_STRIPE_ENVIRONMENT === "prod";

export const publicUrl = isProd
  ? process.env.NEXT_PUBLIC_URL
  : "http://localhost:3000/";
