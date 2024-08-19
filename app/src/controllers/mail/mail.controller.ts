import { Resend } from "resend";
import { NextResponse } from "next/server";
import RecipeMail from "@/emails";
import { GiftCardFormWithDiscountAppliedGet } from "@/lib/card/cardSlide";
import { DataFormContact } from "@/app/types/emails.types";
import ContactMail from "@/emails/ContactMail";

export const sendMailReceipt = async (
  giftCard: GiftCardFormWithDiscountAppliedGet
) => {
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

export const sendMail = async ({
  userName,
  phoneNumber,
  email,
  awareness,
  message,
}: DataFormContact) => {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: `EMS Medicina Estética <noreply@medicinaesteticaems.com>`, //Title of our Email, here, our email will indicate Imam - Portfolio and the <info@eimaam.dev> will be the sending address. NB: `eimaam.dev` replace with your registered domain
      to: "clinicamedicoesteticaems@gmail.com", // email receiver, // in case where you are sending onboarding emails, this field will be dynamic, it will be the email of the User
      //to: "socorrista92re@gmail.com", // email receiver, // in case where you are sending onboarding emails, this field will be dynamic, it will be the email of the User
      subject: "Consulta médica web",
      react: ContactMail({
        userName,
        phoneNumber,
        email,
        awareness,
        message,
      }),
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
