import { getDictionary } from "@/app/[lang]/dictionaries";
import ProductDesignClient from "./page.product.design";

const applicationUrl = process.env.APPLICATION_URL;

export async function generateMetadata({ params }) {
  const { lang } = params;
  const en = await getDictionary('en');
  const tr = await getDictionary('tr');
  const dictionary = {
    en,
    tr
  }
  const title = `Laodicea Solutions - ${dictionary[lang ?? 'tr'].landingPage.project.WCDFY['product-design']}`;
  const description = dictionary[lang ?? 'tr'].blog.WCDFY['product-design'].summary;
  const metadata = {
    tr: {
      title,
      description,
      keywords: [
        "ürün tasarımı",
        "gömülü sistemler",
        "strateji geliştirme",
        "web uygulamaları",
        "mobil uygulamalar",
        "dijital dönüşüm",
        "laodicea solutions projects",
        "laodikya solution projeler",
        "denizli yazılım",
        "yazılım çözümleri",
        "proje detayı",
        "project detail",
        "ürünlerimiz",
        "yapabileceklerimiz"
      ],
      openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: applicationUrl,
        title,
        description,
        images: [
          {
            url: `${applicationUrl}/api/og`,
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
        title,
        description,
        image: `${applicationUrl}/api/og`,
        creator: "@laodiceasoln",
      },
      robots: {
        index: true,
        follow: true,
      },
      canonical: applicationUrl,
    },
    en: {
      title,
      description,
      keywords: [
        "product design",
        "embedded systems",
        "ideation",
        "strategy",
        "web development",
        "mobile development",
        "digital transformation",
        "laodicea solutions projects",
        "laodikya solution projeler",
        "products",
        "what can we do for you",
      ],
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: applicationUrl,
        title,
        description,
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
        title,
        description,
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

export default function Page(params) {

  return (
    <ProductDesignClient />
  )
}