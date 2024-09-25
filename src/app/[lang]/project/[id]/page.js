import { projects } from "@/utils/constants";
import { notFound } from "next/navigation";
import PageClient from "./page.client";
import { getDictionary } from "../../dictionaries";

const applicationUrl = process.env.APPLICATION_URL;

export async function generateMetadata({ params }) {
  const { lang, id } = params;

  const project = projects.find((pr) => pr.name == id);
  const en = await getDictionary('en');
  const tr = await getDictionary('tr');
  const dictionary = {
    en,
    tr
  }

  const metadata = {
    tr: {
      title: `Laodicea Solutions - ${dictionary[lang].landingPage.project[project.name]}`,
      description: dictionary[lang].landingPage?.project[`${project.name}_Detail`],
      keywords: [
        project.name,
        "laodicea solutions projects",
        "laodikya solution projeler",
        "denizli yazılım",
        "yazılım çözümleri",
        "proje detayı",
        "project detail",
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
        title: `Laodicea Solutions - ${dictionary[lang].landingPage?.project[project.name]}`,
        description: dictionary[lang].landingPage?.project[`${project.name}_Detail`],
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
        title: `Laodicea Solutions - ${dictionary[lang].landingPage?.project[project.name]}`,
        description: dictionary[lang].landingPage?.project[`${project.name}_Detail`],
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
      title: `Laodicea Solutions - ${dictionary[lang].landingPage?.project[project.name]}`,
      description: dictionary[lang].landingPage?.project[`${project.name}_Detail`],
      keywords: [
        project.name,
        "laodicea solutions projects",
        "laodikya solution projeler",
        "denizli yazılım",
        "yazılım çözümleri",
        "proje detayı",
        "project detail",
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
        title: `Laodicea Solutions - ${dictionary[lang].landingPage?.project[project.name]}`,
        description: dictionary[lang].landingPage?.project[`${project.name}_Detail`],
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
        title: `Laodicea Solutions - ${dictionary[lang].landingPage?.project[project.name]}`,
        description: dictionary[lang].landingPage?.project[`${project.name}_Detail`],
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
  const { params: {
    id
  } } = props;
  const project = projects.find((pr) => pr.name === id);
  if (!project) {
    return notFound();
  }

  return (
    <PageClient project={project} />
  )
}