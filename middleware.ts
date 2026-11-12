import { NextResponse, type NextRequest } from 'next/server';

const locales = ['it', 'en'];

/** Chi arriva su "/" viene mandato a /it o /en in base alla lingua del browser (o alla scelta salvata). */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;
  const saved = req.cookies.get('lang')?.value;
  const accept = req.headers.get('accept-language') || '';
  const pref = saved && locales.includes(saved) ? saved : accept.toLowerCase().startsWith('it') || !/^en/.test(accept.toLowerCase()) ? 'it' : 'en';
  const url = req.nextUrl.clone();
  url.pathname = `/${pref}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|img|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)'],
};
