import { NextRequest, NextResponse } from 'next/server';

export async function corsMiddleware(req: NextRequest, res: NextResponse) {
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Enviar una respuesta OPTIONS preflight si el método es OPTIONS
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204 });
  }

  return res;
}
