import { getAreas } from "@/app/src/controllers/areas";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const areas = await getAreas();
    return NextResponse.json(areas);
  } catch (error) {
    console.error("Error fetching areas:", error);
    return NextResponse.error();
  }
}
