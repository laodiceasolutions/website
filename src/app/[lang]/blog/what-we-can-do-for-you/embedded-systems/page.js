import { getDictionary } from "@/app/[lang]/dictionaries";
import EmbeddedSystemsClient from "./embedded.systems.client";

const applicationUrl = process.env.APPLICATION_URL;

export async function generateMetadata({ params }) {
  const { lang } = params;
  const en = await getDictionary('en');
  const tr = await getDictionary('tr');
  const dictionary = {
    en,
    tr
  }
  const metadata = {
    tr: {
      title: `Laodicea Solutions - ${dictionary.tr.landingPage.project.WCDFY['embedded-systems']}`,
      description: dictionary.tr.blog.WCDFY['embedded-systems'].summary,
      keywords: [
        "gömülü sistemler",
        "ürün tasarımı",
        "strateji geliştirme",
        "web uygulamaları",
        "mobil uygulamalar",
        "dijital dönüşüm"
      ],
      openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: applicationUrl,
        title: `Laodicea Solutions - ${dictionary.tr.landingPage.project.WCDFY['embedded-systems']}`,
        description: dictionary.tr.blog.WCDFY['embedded-systems'].summary,
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
        title: `Laodicea Solutions - ${dictionary.tr.landingPage.project.WCDFY['embedded-systems']}`,
        description: dictionary.tr.blog.WCDFY['embedded-systems'].summary,
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
      title: `Laodicea Solutions - ${dictionary.en.landingPage.project.WCDFY['embedded-systems']}`,
      description: dictionary.en.blog.WCDFY['embedded-systems'].summary,
      keywords: [
        "embedded systems",
        "product design",
        "ideation",
        "strategy",
        "web development",
        "mobile development",
        "digital transformation"
      ],
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: applicationUrl,
        title: `Laodicea Solutions - ${dictionary.en.landingPage.project.WCDFY['embedded-systems']}`,
        description: dictionary.en.blog.WCDFY['embedded-systems'].summary,
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
        title: `Laodicea Solutions - ${dictionary.en.landingPage.project.WCDFY['embedded-systems']}`,
        description: dictionary.en.blog.WCDFY['embedded-systems'].summary,
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

export default function Page(props) {
  return (<EmbeddedSystemsClient />)
}