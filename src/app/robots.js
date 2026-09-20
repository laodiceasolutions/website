import { isIndexingEnabled, SITE_ORIGIN } from "@/lib/seo/site.mjs";

export default function robots() {
  if (!isIndexingEnabled()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
