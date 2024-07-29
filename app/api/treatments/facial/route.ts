import { getTreatmentsFacial } from '@/app/src/controllers/treatments';
import { corsMiddleware } from '@/app/src/middleware/cors';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const treatmentsFacial = await getTreatmentsFacial();
    return NextResponse.json(treatmentsFacial);
  } catch (error) {
    console.error('Error fetching facial treatments:', error);
    return NextResponse.error();
  }
}
