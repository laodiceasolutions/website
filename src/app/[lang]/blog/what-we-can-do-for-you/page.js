import BlogPageClient from "../blog.page.client";

const applicationUrl = process.env.APPLICATION_URL;

export function generateMetadata({ params }) {
  const { lang } = params;

  const metadata = {
    tr: {
      title: 'Laodicea Solutions - Sizin İçin Neler Yapabiliriz?',
      description: 'Laodicea Solutions, ürün tasarımı, strateji geliştirme, web ve mobil uygulamalar ile gömülü sistemler alanında işletmenizin dijital dönüşümüne destek sağlar.',
      keywords: [
        "ürün tasarımı",
        "strateji geliştirme",
        "web uygulamaları",
        "mobil uygulamalar",
        "gömülü sistemler",
        "dijital dönüşüm"
      ],
      openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: applicationUrl,
        title: 'Laodicea Solutions - Sizin İçin Neler Yapabiliriz?',
        description: 'Laodicea Solutions, işletmenizin dijital dönüşümüne destek olmak için ürün tasarımı, strateji geliştirme, web ve mobil uygulamalar ile gömülü sistemler alanında çözümler sunar.',
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
        title: 'Laodicea Solutions - Sizin İçin Neler Yapabiliriz?',
        description: 'Ürün tasarımı, strateji geliştirme, web ve mobil uygulamalar ile gömülü sistemler alanında dijital çözümler sunuyoruz.',
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
      title: 'Laodicea Solutions - What Can We Do For You?',
      description: 'Laodicea Solutions supports your business’s digital transformation through product design, ideation & strategy, web and mobile development, and embedded systems.',
      keywords: [
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

export default function Page(params) {
  return (<BlogPageClient />)
}