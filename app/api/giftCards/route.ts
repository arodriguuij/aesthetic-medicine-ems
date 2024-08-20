import { addGiftCards, getGetGiftCards } from "@/app/src/controllers/giftCards";
import { sendMailReceipt } from "@/app/src/controllers/mail";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { GiftCardFormWithDiscountApplied } from "@/lib/card/cardSlide";
import { isProd } from "@/utils/utils";
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
    const body = (await req.json()) as GiftCardFormWithDiscountApplied;
    const newGiftCard = await addGiftCards(body);
    await sendMailReceipt(newGiftCard);
    isProd &&
      (await sendMailReceipt({
        ...newGiftCard,
        email: "clinicamedicoesteticaems@gmail.com",
      }));

    return NextResponse.json(newGiftCard, { status: 201 });
  } catch (error) {
    console.error("Error adding gift card:", error);
    return NextResponse.error();
  }
}
