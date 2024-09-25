import { Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

const poppins = Inter({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] });
const applicationUrl = process.env.APPLICATION_URL;

export const metadata = {
  title: 'Laodicea Solutions - Dijital Dönüşümünüzü Gerçekleştiriyoruz!',
  description: 'Küçük ve orta ölçekli işletmelere özel CRM, ERP ve finans çözümleri sunar. İş operasyonlarınızı özelleştirilmiş yazılım çözümlerimizle dönüştürün.',
  keywords: [
    "laodicea solutions",
    "laodikya solution",
    "denizli yazılım",
    "yazılım çözümleri",
    "dijital dönüşüm",
    "crm",
    "erp",
    "muhasebe yazılımları",
    "web uygulamaları",
    "mobil uygulamalar"
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: applicationUrl, // Web sitenizin URL'si
    title: 'Laodicea Solutions - Dijital Dönüşümünüzü Gerçekleştiriyoruz!',
    description: 'Laodicea Solutions, işletmelere büyümeleri ve operasyonlarını kolaylaştırmaları için özelleştirilmiş CRM, ERP ve finans çözümleri sunar.',
    images: [
      {
        url: `${applicationUrl}/api/og`, // Open Graph resim URL'si
        width: 1200,
        height: 630,
        alt: 'Laodicea Solutions Logo',
      },
    ],
    site_name: 'Laodicea Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@laodiceasoln',
    title: 'Laodicea Solutions - Dijital Dönüşümünüzü Gerçekleştiriyoruz!',
    description: 'Her ölçekteki işletmeler için özelleştirilmiş CRM, ERP ve finans yazılım çözümleri.',
    image: `${applicationUrl}/api/og`, // Open Graph resminin aynısı
    creator: "@laodiceasoln",

  },
  robots: {
    index: true,
    follow: true,
  },
  canonical: `${applicationUrl}/tr/project`, // Kanonik URL
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#60CE70' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      {process.env.NODE_ENV === "production" && (
        <>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        </>
      )}
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
