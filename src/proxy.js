import { NextResponse } from "next/server";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/seo/site.mjs";

export function proxy(request) {
  const firstSegment = request.nextUrl.pathname.split("/").filter(Boolean)[0];
  const locale = SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : DEFAULT_LOCALE;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-locale", locale);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
