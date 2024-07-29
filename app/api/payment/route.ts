import { postPaymentById } from '@/app/src/controllers/payment';
import { corsMiddleware } from '@/app/src/middleware/cors';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const body = await req.json();
    const paymentResponse = await postPaymentById(body);
    return NextResponse.json(paymentResponse, { status: 201 });
  } catch (error) {
    console.error('Error processing payment:', error);
    return NextResponse.error();
  }
}
