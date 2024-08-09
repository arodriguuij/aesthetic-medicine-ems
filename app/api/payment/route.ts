import { postPayment } from "@/app/src/controllers/payment";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const { amount } = await req.json();

    const newGiftCards = await postPayment({ amount });

    return NextResponse.json(newGiftCards, { status: 201 });
  } catch (error) {
    console.error("Error adding gift card:", error);
    return NextResponse.error();
  }
}
