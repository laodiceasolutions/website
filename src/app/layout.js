import { headers } from "next/headers";
import { Inter } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/json-ld";
import { Toaster } from "@/components/ui/toaster";
import { isIndexingEnabled, SITE_ORIGIN, organizationJsonLd } from "@/lib/seo/site.mjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: { default: "Laodicea Solutions", template: "%s | Laodicea Solutions" },
  description:
    "İşletmeler için özelleştirilmiş CRM, ERP, finans, web, mobil ve gömülü sistem çözümleri.",
  robots: {
    index: isIndexingEnabled(),
    follow: isIndexingEnabled(),
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#24A556" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-site-locale") || "tr";
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <a className="skip-link" href="#main-content">
          {locale === "en" ? "Skip to main content" : "Ana içeriğe geç"}
        </a>
        <JsonLd data={organizationJsonLd()} />
        {children}
        <Toaster locale={locale} />
        {gtmId ? (
          <>
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                className="hidden"
                title="Google Tag Manager"
              />
            </noscript>
          </>
        ) : null}
      </body>
    </html>
  );
}
