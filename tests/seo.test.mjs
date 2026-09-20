import assert from "node:assert/strict";
import test from "node:test";
import { BLOG_ARTICLES } from "../src/lib/content/blog.mjs";
import {
  SITE_ORIGIN,
  absoluteUrl,
  blogPostingJsonLd,
  isIndexingEnabled,
  localizedMetadata,
  normalizeCanonicalOrigin,
  organizationJsonLd,
} from "../src/lib/seo/site.mjs";

function metadata() {
  return localizedMetadata({ locale: "en", suffix: "blog", title: "Blog", description: "Description" });
}

test("canonical origin is normalized and rejects unsafe values", () => {
  assert.equal(normalizeCanonicalOrigin(undefined), "https://www.laodiceasolutions.com");
  assert.equal(normalizeCanonicalOrigin("https://example.com/path/"), "https://example.com");
  assert.throws(() => normalizeCanonicalOrigin("not-a-url"));
  assert.throws(() => normalizeCanonicalOrigin("file:///tmp/site"));
});

test("indexing is disabled unless explicitly enabled", () => {
  const previous = process.env.SITE_INDEXING_ENABLED;
  delete process.env.SITE_INDEXING_ENABLED;
  assert.equal(isIndexingEnabled(), false);
  assert.deepEqual(metadata().robots, { index: false, follow: false });
  process.env.SITE_INDEXING_ENABLED = "true";
  assert.equal(isIndexingEnabled(), true);
  assert.deepEqual(metadata().robots, { index: true, follow: true });
  if (previous === undefined) delete process.env.SITE_INDEXING_ENABLED;
  else process.env.SITE_INDEXING_ENABLED = previous;
});

test("localized metadata is self-canonical and declares both languages", () => {
  const result = metadata();
  assert.equal(result.alternates.canonical, "/en/blog");
  assert.equal(result.alternates.languages.tr, "/tr/blog");
  assert.equal(result.alternates.languages.en, "/en/blog");
  assert.equal(result.alternates.languages["x-default"], "/tr/blog");
  assert.equal(result.openGraph.url, "/en/blog");
  assert.deepEqual(result.twitter.images, ["/api/og?lang=en"]);
});

test("organization schema uses one verified identity and no invented search action", () => {
  const schema = organizationJsonLd();
  assert.equal(SITE_ORIGIN, "https://www.laodiceasolutions.com");
  assert.equal(absoluteUrl("/tr"), `${SITE_ORIGIN}/tr`);
  assert.equal(JSON.stringify(schema).includes("SearchAction"), false);
  assert.equal(JSON.stringify(schema).includes("999-99-999"), false);
});

test("article schema connects WebPage and BlogPosting nodes", () => {
  const article = BLOG_ARTICLES["embedded-systems"];
  const schema = blogPostingJsonLd({ locale: "en", title: "Embedded Systems", description: "Description", ...article });
  const webpage = schema["@graph"].find((node) => node["@type"] === "WebPage");
  const posting = schema["@graph"].find((node) => node["@type"] === "BlogPosting");
  assert.ok(webpage);
  assert.ok(posting);
  assert.equal(posting.mainEntityOfPage["@id"], webpage["@id"]);
  assert.equal(posting.datePublished, article.datePublished);
  assert.equal(posting.image[0], absoluteUrl(article.image));
});
