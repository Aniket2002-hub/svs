// app/.well-known/acme-challenge/[...token]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { token } = params;
  console.log("token",token)
  const tokenString = Array.isArray(token) ? token.join('/') : token;

  console.log('ACME Challenge requested for token:', tokenString);

  // Replace with your actual ACME key-authorization string
  // const keyAuthorization = "your-token.key-thumbprint";

  return new NextResponse( {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    },
  });
}
