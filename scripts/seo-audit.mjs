import assert from "node:assert/strict";
import { isIndexingEnabled, localizedMetadata, SITE_ORIGIN, SUPPORTED_LOCALES } from "../src/lib/seo/site.mjs";

assert.match(SITE_ORIGIN, /^https:\/\/www\./);
for (const locale of SUPPORTED_LOCALES) {
  const metadata = localizedMetadata({ locale, title: "Audit", description: "Audit description" });
  assert.equal(metadata.alternates.canonical, `/${locale}`);
  assert.ok(metadata.alternates.languages.tr);
  assert.ok(metadata.alternates.languages.en);
  assert.equal(metadata.robots.index, isIndexingEnabled());
  assert.equal(metadata.robots.follow, isIndexingEnabled());
}

console.log("SEO configuration audit passed.");
