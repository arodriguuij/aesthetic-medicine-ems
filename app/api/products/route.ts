import { getProducts } from '@/app/src/controllers/products';
import { corsMiddleware } from '@/app/src/middleware/cors';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  await corsMiddleware(req, res);

  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.error();
  }
}
