import { sendMail } from "@/app/src/controllers/mail";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { DataFormContact } from "@/app/types/emails.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const body: DataFormContact = await req.json();

    // Check if the required fields are present
    if (
      !body.userName ||
      !body.phoneNumber ||
      !body.awareness ||
      !body.message ||
      !body.email
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendMail(body);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.error();
  }
}
