import { Email } from "@/services/mails/mails.types";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { NextResponse } from "next/server";

export const sendMail = async ({ email, message }: Email) => {
  // resend declaration with API key as parameter
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    // resend function handler for executing email sending
    // returning data and error state to indicate success and failure respecfully
    const { data, error } = await resend.emails.send({
      from: `EMS Medicina Estetica <emsmedicinaestetica.com>`, //Title of our Email, here, our email will indicate Imam - Portfolio and the <info@eimaam.dev> will be the sending address. NB: `eimaam.dev` replace with your registered domain
      to: "socorrista92re@gmail.com", // email receiver, // in case where you are sending onboarding emails, this field will be dynamic, it will be the email of the User
      subject: "Message from Portfolio",
      react: EmailTemplate({ email, message }), //using our custom react component to render email content/body
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
