import { getBranches } from "@/app/src/controllers/branches";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const areas = await getBranches();
    return NextResponse.json(areas);
  } catch (error) {
    console.error("Error fetching branches:", error);
    return NextResponse.error();
  }
}
