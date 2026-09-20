import JsonLd from "@/components/json-ld";
import { PAGE_METADATA } from "@/lib/content/pages.mjs";
import { localizedMetadata, webPageJsonLd } from "@/lib/seo/site.mjs";
import PageClient from "./page.client";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return localizedMetadata({ locale: lang, suffix: "project", ...PAGE_METADATA.projects[lang] });
}

export default async function ProjectIndexPage({ params }) {
  const { lang } = await params;
  return <><JsonLd data={webPageJsonLd({ locale: lang, suffix: "project", ...PAGE_METADATA.projects[lang] })} /><PageClient /></>;
}
