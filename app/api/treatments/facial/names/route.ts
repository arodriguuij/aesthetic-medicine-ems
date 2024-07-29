import { getTreatmentsFacialNames } from "@/app/src/controllers/treatments";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const treatmentsFacialNames = await getTreatmentsFacialNames();
    return NextResponse.json(treatmentsFacialNames);
  } catch (error) {
    console.error("Error fetching facial treatments names:", error);
    return NextResponse.error();
  }
}
