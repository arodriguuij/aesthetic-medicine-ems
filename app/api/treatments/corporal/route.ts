import { getTreatmentsCorporal } from '@/app/src/controllers/treatments';
import { corsMiddleware } from '@/app/src/middleware/cors';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const treatmentsCorporal = await getTreatmentsCorporal();
    return NextResponse.json(treatmentsCorporal);
  } catch (error) {
    console.error('Error fetching corporal treatments:', error);
    return NextResponse.error();
  }
}
