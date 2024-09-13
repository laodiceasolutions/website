import { ApplicationProvider } from "@/context/applicationContext";
import { getDictionary } from "./dictionaries";

const applicationUrl = process.env.APPLICATION_URL;

export function generateMetadata({ params }) {
  const { lang } = params;

  const metadata = {
    tr: {
      title: 'Laodicea Solutions - Dijital Dönüşümünüzü Gerçekleştiriyoruz!',
      description: 'Laodicea Solutions, küçük ve orta ölçekli işletmelere özel CRM, ERP ve finans çözümleri sunar. İş operasyonlarınızı özelleştirilmiş yazılım çözümlerimizle dönüştürün.',
      keywords: [
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
        url: applicationUrl,
        title: 'Laodicea Solutions - Dijital Dönüşümünüzü Gerçekleştiriyoruz!',
        description: 'Laodicea Solutions, işletmelere büyümeleri ve operasyonlarını kolaylaştırmaları için özelleştirilmiş CRM, ERP ve finans çözümleri sunar.',
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
        title: 'Laodicea Solutions - Dijital Dönüşümünüzü Gerçekleştiriyoruz!',
        description: 'Her ölçekteki işletmeler için özelleştirilmiş CRM, ERP ve finans yazılım çözümleri.',
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
      title: 'Laodicea Solutions - Empowering Your Digital Transformation!',
      description: 'Laodicea Solutions provides tailored CRM, ERP, and finance solutions for small and medium-sized businesses. Transform your business operations with our customized software solutions.',
      keywords: [
        "digital transformation",
        "crm",
        "erp",
        "accounting software",
        "web applications",
        "mobile applications"
      ],
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: applicationUrl,
        title: 'Laodicea Solutions - Empowering Your Digital Transformation!',
        description: 'Laodicea Solutions offers tailored CRM, ERP, and finance solutions to help businesses grow and simplify their operations.',
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
        title: 'Laodicea Solutions - Empowering Your Digital Transformation!',
        description: 'Tailored CRM, ERP, and finance software solutions for businesses of all sizes.',
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

export default async function Home({ children, params: { lang } }) {

  const dict = await getDictionary(lang);
  return (
    <ApplicationProvider dictionary={dict}>
      {children}
    </ApplicationProvider>

  );
}
