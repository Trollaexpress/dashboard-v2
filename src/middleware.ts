import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// middleware.ts
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get('accessToken')?.value; // Changed from access_token

  // Protected routes
  const protectedRoutes = ['/dashboard'];
  const authRoutes = ['/login'];

  // If trying to access protected route without auth
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If trying to access auth route while authenticated
  if (authRoutes.includes(pathname)) {
    if (accessToken) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}