import { getBranchesHome } from "@/app/src/controllers/branchesHome";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const branches = await getBranchesHome();
    return NextResponse.json(branches);
  } catch (error) {
    console.error("Error fetching branches Home:", error);
    return NextResponse.error();
  }
}
