export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const isProd = process.env.NEXT_PUBLIC_STRIPE_ENVIRONMENT === "prod";

export const publicUrl = isProd
  ? process.env.NEXT_PUBLIC_URL
  : "http://localhost:3000/";
