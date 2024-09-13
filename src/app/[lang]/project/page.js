import PageClient from "./page.client";

const applicationUrl = process.env.APPLICATION_URL;


export const metadata = {
  title: 'Laodicea Solutions - Dijital Dönüşümünüzü Gerçekleştiriyoruz!',
  description: 'Projeler/Laodicea Solutions, küçük ve orta ölçekli işletmelere özel CRM, ERP ve finans çözümleri sunar. İş operasyonlarınızı özelleştirilmiş yazılım çözümlerimizle dönüştürün.',
  keywords: [
    "crm",
    "erp",
    "mobil uygulama",
    "web uygulamaları",
    "gömülü sistemler",
    "muhasebe yazılımları",
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
  canonical: applicationUrl, // Kanonik URL
};

export default async function Home() {

  return (<PageClient />);
}
