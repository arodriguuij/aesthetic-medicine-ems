import { Payment } from "@/app/types/payments.types";

let key;
if (process.env.NEXT_PUBLIC_STRIPE_ENVIRONMENT === "prod") {
  key = process.env.STRIPE_PRIVATE_KEY_PROD;
} else {
  key = process.env.STRIPE_PRIVATE_KEY;
}

const stripe = require("stripe")(key);

export const postPaymentService = async ({ amount }: Payment) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });

    return paymentIntent.client_secret;
  } catch (e: any) {
    return { error: e.message };
  }
};
