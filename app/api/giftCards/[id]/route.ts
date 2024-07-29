import { getGiftCardsById } from "@/app/src/controllers/giftCards";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing id parameter" },
      { status: 400 }
    );
  }

  try {
    const giftCard = await getGiftCardsById(Number(id));
    return NextResponse.json(giftCard);
  } catch (error) {
    console.error("Error fetching gift card:", error);
    return NextResponse.error();
  }
}
