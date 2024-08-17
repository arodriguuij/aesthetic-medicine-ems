import { addGiftCards, getGetGiftCards } from "@/app/src/controllers/giftCards";
import { sendMailReceipt } from "@/app/src/controllers/mail";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { GiftCardForm } from "@/app/types/giftCards.types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const giftCards = await getGetGiftCards();
    return NextResponse.json(giftCards);
  } catch (error) {
    console.error("Error fetching gift cards:", error);
    return NextResponse.error();
  }
}

export async function POST(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const body = (await req.json()) as GiftCardForm;
    const newGiftCard = await addGiftCards(body);
    const emailResponse = await sendMailReceipt(newGiftCard);
    console.log({ newGiftCard, emailResponse });

    return NextResponse.json(newGiftCard, { status: 201 });
  } catch (error) {
    console.error("Error adding gift card:", error);
    return NextResponse.error();
  }
}
