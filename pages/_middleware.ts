// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const host = req.headers.get('host');
  const { pathname } = req.nextUrl;

  if (host === 'chivel.tk' || 'localhost:3000') {
    return NextResponse.next();
  }

  if (host?.includes('localhost:3000')) {
    if (host.includes('.')) {
      // return NextResponse.rewrite(`/auth/login`);
      console.log(host?.split('.')[0]);
      return NextResponse.rewrite(`/_sites/${host?.split('.')[0]}`);
    }
    return NextResponse.next();
  }
  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  const subdomain = host?.split('.')[0];

  if (
    !pathname.includes('.') && // exclude all files in the public folder
    !pathname.startsWith('/api') // exclude all API routes
  ) {
    return NextResponse.rewrite(`/_sites/${subdomain}`);
  }
}