import { getDictionary } from "./[lang]/dictionaries";
import PageClient from "./page.client";

const applicationUrl = process.env.APPLICATION_URL;

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#60CE70' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.laodiceasolutions.com/",
      "url": "https://www.laodiceasolutions.com/",
      "name": "Laodikya Solutions Küçük ve orta ölçekli işletmelere özel CRM, ERP ve finans çözümleri sunar.",
      "isPartOf": {
        "@id": "https://laodiceasolutions.com/en",
        "url": "https://laodiceasolutions.com/en",
      },
      "about": {
        "@id": "https://www.laodiceasolutions.com/tr#about"
      },
      "primaryImageOfPage": {
        "@id": `${applicationUrl}/api/og`
      },
      "image": {
        "@id": `${applicationUrl}/api/og`
      },
      "thumbnailUrl": `${applicationUrl}/api/og`,
      "datePublished": "2024-09-01T08:43:48+00:00",
      "dateModified": "2024-09-01T13:45:39+00:00",
      "description": "Laodikya Solutions Küçük ve orta ölçekli işletmelere özel CRM, ERP ve finans çözümleri sunar.",
      "breadcrumb": {
        "@id": "https://www.laodiceasolutions.com/#breadcrumb"
      },
      "inLanguage": "tr",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://www.laodiceasolutions.com/"
          ]
        }
      ]
    },
    {
      "@type": "ImageObject",
      "inLanguage": "tr",
      "@id": `${applicationUrl}/api/og`,
      "url": `${applicationUrl}/api/og`,
      "contentUrl": `${applicationUrl}/api/og`,
      width: 1200,
      height: 630,
    },
    {
      "@type": "WebSite",
      "@id": "https://www.laodiceasolutions.com/tr",
      "url": "https://www.laodiceasolutions.com/tr",
      "name": "Laodice Solutions",
      "description": "Küçük ve orta ölçekli işletmelere özel CRM, ERP ve finans çözümleri sunar.",
      "publisher": {
        "@id": "https://www.laodiceasolutions.com/en"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.laodiceasolutions.com/?s={search_term_string}"
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            "valueRequired": true,
            "valueName": "search_term_string"
          }
        }
      ],
      "inLanguage": "tr"
    },
    {
      "@type": "Organization",
      "@id": "https://www.laodiceasolutions.com/#contactUs",
      "name": "Laodicea Solutions",
      "url": "https://www.laodiceasolutions.com/en",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "tr",
        "@id": `${applicationUrl}/api/og`,
        "url": `${applicationUrl}/api/og?lang=en`,
        "contentUrl": `${applicationUrl}/api/og?lang=en`,
        width: 1200,
        height: 630,
        "caption": "LaodiceSolutions"
      },
      "image": {
        "@id": `${applicationUrl}/api/og?lang=en`
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61563294767615",
        "https://www.instagram.com/laodiceasoln",
        "https://x.com/laodiceasoln",
        "https://github.com/laodiceasolutions",
      ]
    }
  ]
}

export default async function Home() {
  const trDictionary = await getDictionary('tr');
  return (<PageClient dict={trDictionary} />)
}
