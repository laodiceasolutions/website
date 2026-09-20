import BlogPageClient from "./blog.page.client";
import JsonLd from "@/components/json-ld";
import { PAGE_METADATA } from "@/lib/content/pages.mjs";
import { localizedMetadata, webPageJsonLd } from "@/lib/seo/site.mjs";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return localizedMetadata({ locale: lang, suffix: "blog", ...PAGE_METADATA.blog[lang] });
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <><JsonLd data={webPageJsonLd({ locale: lang, suffix: "blog", ...PAGE_METADATA.blog[lang] })} /><BlogPageClient /></>;
}
