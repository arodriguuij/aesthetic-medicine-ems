import { IPayment } from "@/app/src/controllers/payment";

let stripe;
if (process.env.NEXT_PUBLIC_DATA_BASE_ENVIRONMENT === "prod")
  stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY_PROD);
else stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

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
