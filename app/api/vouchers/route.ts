import { checkVoucher } from "@/app/src/controllers/vouchers";
import { corsMiddleware } from "@/app/src/middleware/cors";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const { voucher } = (await req.json()) as { voucher: string };
    const isValid = await checkVoucher(voucher);

    return NextResponse.json(isValid, { status: 200 });
  } catch (error) {
    console.error("Error checking the voucher:", error);
    return NextResponse.error();
  }
}
