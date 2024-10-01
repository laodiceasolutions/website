import PageClient from "./page.client";

const applicationUrl = process.env.APPLICATION_URL;

export function generateMetadata({ params }) {
  const { lang } = params;

  const metadata = {
    tr: {
      title: "Projeler",
      description: 'Projeler/Laodicea Solutions, küçük ve orta ölçekli işletmelere özel CRM, ERP ve finans çözümleri sunar.',
      keywords: [
        "laodicea solutions projects",
        "laodikya solution projeler",
        "denizli yazılım",
        "yazılım çözümleri",
        "projeler",
        "projelerimiz",
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
    },
    en: {
      title: 'Projects',
      description: 'Discover how our innovative solutions can transform your business',
      keywords: [
        "laodicea solutions projects",
        "laodikya solution projeler",
        "denizli yazılım",
        "yazılım çözümleri",
        "proje detayı",
        "project detail",
        "product design",
        "ideation",
        "strategy",
        "web development",
        "mobile development",
        "embedded systems",
        "digital transformation"
      ],
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: applicationUrl,
        title: 'Laodicea Solutions - What Can We Do For You?',
        description: 'Laodicea Solutions offers tailored solutions in product design, ideation & strategy, web and mobile development, and embedded systems to support your business’s digital transformation.',
        images: [
          {
            url: `${applicationUrl}/api/og?lang=en`,
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
        title: 'Laodicea Solutions - What Can We Do For You?',
        description: 'We offer digital solutions in product design, ideation & strategy, web and mobile development, and embedded systems.',
        image: `${applicationUrl}/api/og?lang=en`,
        creator: "@laodiceasoln",
      },
      robots: {
        index: true,
        follow: true,
      },
      canonical: applicationUrl,
    }
  };

  return metadata[lang] || metadata.tr;
}


export default async function Home() {

  return (<PageClient />);
}
