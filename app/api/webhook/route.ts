import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const isProd = process.env.NEXT_PUBLIC_STRIPE_ENVIRONMENT === "prod";

const stripePrivateKey = isProd
  ? process.env.STRIPE_PRIVATE_KEY_PROD
  : process.env.STRIPE_PRIVATE_KEY;

const stripeWebhookKey = isProd
  ? process.env.STRIPE_WEBHOOK_SECRET_KEY_PROD
  : process.env.STRIPE_WEBHOOK_SECRET_KEY;

const stripe = new Stripe(stripePrivateKey!);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      stripeWebhookKey!
    );

    console.log(
      res?.data?.object?.billing_details?.email, // email
      res?.data?.object?.amount, // amount
      JSON.stringify(res), // payment info
      res?.type, // type
      String(timeString), // time
      String(dateTime), // date
      res?.data?.object?.receipt_email, // email
      res?.data?.object?.receipt_url, // url
      JSON.stringify(res?.data?.object?.payment_method_details), // Payment method details
      JSON.stringify(res?.data?.object?.billing_details), // Billing details
      res?.data?.object?.currency // Currency
    );

    return NextResponse.json({
      status: "sucess",
      event: event.type,
      response: res,
    });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}
