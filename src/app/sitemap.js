import { absoluteUrl, isIndexingEnabled, SUPPORTED_LOCALES } from "@/lib/seo/site.mjs";
import { projects, whatCanDoWeDoOffers } from "@/utils/constants";

export default function sitemap() {
  if (!isIndexingEnabled()) return [];
  const paths = [];
  for (const locale of SUPPORTED_LOCALES) {
    paths.push(`/${locale}`, `/${locale}/blog`, `/${locale}/project`);
    projects.forEach((project) => paths.push(`/${locale}/project/${project.name}`));
    whatCanDoWeDoOffers.forEach((offer) => paths.push(`/${locale}/blog/what-we-can-do-for-you/${offer.name}`));
  }

  return paths.map((pathname) => ({
    url: absoluteUrl(pathname),
    changeFrequency: pathname.includes("/blog/") ? "monthly" : "yearly",
    priority: pathname.split("/").length <= 3 ? 1 : 0.8,
  }));
}
