import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  console.log(`Request to ${pathname}`);

  return NextResponse.next(); // Continue the request
}
