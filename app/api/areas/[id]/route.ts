import { getAreasById } from "@/app/src/controllers/areas";
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
    const area = await getAreasById(Number(id));
    return NextResponse.json(area);
  } catch (error) {
    console.error("Error fetching area:", error);
    return NextResponse.error();
  }
}
