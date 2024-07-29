import { getTreatmentsCorporalNames } from "@/app/src/controllers/treatments";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const treatmentsCorporalNames = await getTreatmentsCorporalNames();
    return NextResponse.json(treatmentsCorporalNames);
  } catch (error) {
    console.error("Error fetching corporal treatments names:", error);
    return NextResponse.error();
  }
}
