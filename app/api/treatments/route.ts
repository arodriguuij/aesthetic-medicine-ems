import { getTreatments } from "@/app/src/controllers/treatments";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);
  
  try {
    const treatments = await getTreatments();
    return NextResponse.json(treatments);
  } catch (error) {
    console.error("Error fetching treatments:", error);
    return NextResponse.error();
  }
}
