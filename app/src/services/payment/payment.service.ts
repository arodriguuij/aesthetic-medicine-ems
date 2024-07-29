import { IPayment } from "@/app/src/controllers/payment";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

export const postPaymentService = async ({
  paymentMethodId,
  amount,
}: IPayment) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: paymentMethodId,
      confirmation_method: "manual",
      confirm: true,
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (e: any) {
    return { error: e.message };
  }
};
