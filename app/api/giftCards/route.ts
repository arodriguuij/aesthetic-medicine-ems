import { addGiftCards, getGetGiftCards } from "@/app/src/controllers/giftCards";
import { corsMiddleware } from "@/app/src/middleware/cors";
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
    const body = await req.json();
    const newGiftCard = await addGiftCards(body);
    return NextResponse.json(newGiftCard, { status: 201 });
  } catch (error) {
    console.error("Error adding gift card:", error);
    return NextResponse.error();
  }
}