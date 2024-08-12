import { getCalendar } from "@/app/src/controllers/calendar";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const branches = await getCalendar();
    return NextResponse.json(branches);
  } catch (error) {
    console.error("Error fetching calendar:", error);
    return NextResponse.error();
  }
}
