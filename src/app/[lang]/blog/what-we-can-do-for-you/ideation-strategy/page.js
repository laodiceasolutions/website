import JsonLd from "@/components/json-ld";
import { getBlogArticle } from "@/lib/content/blog.mjs";
import { blogPostingJsonLd, localizedMetadata } from "@/lib/seo/site.mjs";
import { getDictionary } from "../../../dictionaries";
import IdeationStrategyClient from "./page.ideation.strategy.client";

const slug = "ideation-strategy";
const articleConfig = getBlogArticle(slug);

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const article = dictionary.blog.WCDFY[slug];
  return localizedMetadata({ locale: lang, suffix: `blog/what-we-can-do-for-you/${slug}`, title: article.title, description: article.summary, type: "article" });
}

export default async function Page({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const article = dictionary.blog.WCDFY[slug];
  return <><JsonLd data={blogPostingJsonLd({ locale: lang, title: article.title, description: article.summary, ...articleConfig })} /><IdeationStrategyClient /></>;
}
