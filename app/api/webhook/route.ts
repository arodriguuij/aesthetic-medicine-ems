import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

let key, webHookKey;
if (process.env.NEXT_PUBLIC_STRIPE_ENVIRONMENT === "prod") {
  key = process.env.STRIPE_PRIVATE_KEY_PROD;
  webHookKey = process.env.STRIPE_WEBHOOK_SECRET_KEY_PROD;
} else {
  key = process.env.STRIPE_PRIVATE_KEY;
  webHookKey = process.env.STRIPE_WEBHOOK_SECRET_KEY;
}

console.log({key, webHookKey})
const stripe = new Stripe(key!);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(payload, sig!, webHookKey!);

    console.log("Event", event?.type);
    // charge.succeeded
    // payment_intent.succeeded
    // payment_intent.created

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
