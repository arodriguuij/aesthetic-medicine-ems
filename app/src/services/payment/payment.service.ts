import { Payment } from "@/app/types/payments.types";
import { stripePrivateKey } from "@/utils/utils";

const stripe = require("stripe")(stripePrivateKey);

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
