// app/.well-known/acme-challenge/[...token]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { token } = params;
  console.log("token", params);
  
  const tokenString = Array.isArray(token) ? token.join('/') : token;
  console.log('ACME Challenge requested for token:', tokenString);

  // In real ACME, this should be the keyAuthorization:
  // `${token}.${accountThumbprint}`
  const keyAuthorization = `${tokenString}`;

  return new NextResponse(keyAuthorization, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    },
  });
}
