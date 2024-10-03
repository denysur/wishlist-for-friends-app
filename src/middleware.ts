import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

// taken from
// https://locize.com/blog/next-app-dir-i18n/
export function middleware(request: NextRequest) {
  let locale;
  const localeFromCookie = request.cookies.has(cookieName)
    ? request.cookies.get(cookieName)?.value
    : undefined;

  if (localeFromCookie) locale = acceptLanguage.get(localeFromCookie);
  if (!locale)
    locale = acceptLanguage.get(request.headers.get("Accept-Language"));
  if (!locale) locale = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !request.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${locale}${request.nextUrl.pathname}`, request.url)
    );
  }

  if (request.headers.has("referer")) {
    const localeInPathName = languages.find((l) =>
      request.nextUrl.pathname.startsWith(`/${l}`)
    );

    const response = NextResponse.next();
    if (localeInPathName && localeFromCookie !== localeInPathName)
      response.cookies.set(cookieName, localeInPathName);
    return response;
  }

  return NextResponse.next();
}
