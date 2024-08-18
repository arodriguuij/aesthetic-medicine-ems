import { Email } from "@/services/mails/mails.types";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import RecipeMail from "@/emails";
import { GiftCardFormGet } from "@/app/types/giftCards.types";

export const sendMailReceipt = async (giftCard: GiftCardFormGet) => {
  // resend declaration with API key as parameter
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    // resend function handler for executing email sending
    // returning data and error state to indicate success and failure respecfully
    const { data, error } = await resend.emails.send({
      from: `EMS Medicina Estética <noreply@medicinaesteticaems.com>`, //Title of our Email, here, our email will indicate Imam - Portfolio and the <info@eimaam.dev> will be the sending address. NB: `eimaam.dev` replace with your registered domain
      to: giftCard.email, // email receiver, // in case where you are sending onboarding emails, this field will be dynamic, it will be the email of the User
      subject: "Recibo tarjeta de regalo EMS",
      react: RecipeMail(giftCard), //using our custom react component to render email content/body
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
};

export const sendMail = async ({ email, message }: Email) => {
  // resend declaration with API key as parameter
  /* const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    // resend function handler for executing email sending
    // returning data and error state to indicate success and failure respecfully
    const { data, error } = await resend.emails.send({
      from: `EMS Medicina Estetica <noreply@medicinaesteticaems.com>`, //Title of our Email, here, our email will indicate Imam - Portfolio and the <info@eimaam.dev> will be the sending address. NB: `eimaam.dev` replace with your registered domain
      to: "socorrista92re@gmail.com", // email receiver, // in case where you are sending onboarding emails, this field will be dynamic, it will be the email of the User
      subject: "Message from Portfolio",
      react: RecipeMail({ email, message }), //using our custom react component to render email content/body
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  } */
};
