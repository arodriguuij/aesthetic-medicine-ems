import { IPayment } from "@/app/src/controllers/payment";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

export const postPaymentService = async ({ amount }: IPayment) => {
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
