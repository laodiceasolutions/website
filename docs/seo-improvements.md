# SEO improvements

## Problems fixed

- Replaced unsupported and incorrect canonical metadata with route-specific self-canonicals.
- Added Turkish, English, and `x-default` language alternates.
- Standardized the canonical host as HTTPS `www` and redirected the apex host and `/` entry route.
- Added page-specific titles, descriptions, Open Graph metadata, and Twitter/X cards without keyword stuffing.
- Added a metadata base, favicon declarations, manifest discovery, and optional Google/Bing verification values.
- Added a robots metadata route and generated sitemap containing only canonical public pages.
- Added a safe staging policy: pages are `noindex,nofollow`, crawling is disallowed, and sitemap entries are suppressed unless indexing is explicitly enabled.
- Replaced duplicated or misleading client-side JSON-LD with server-rendered Organization, WebSite, WebPage, and BlogPosting graphs.
- Removed the nonexistent site-search action and placeholder contact information from structured data.
- Connected BlogPosting records to their corresponding WebPage nodes and synchronized visible publication dates with schema dates.
- Corrected SEO-relevant landmarks, headings, list structure, link text, and image semantics while retaining the visual hierarchy.
- Promoted the hero image to an optimized, responsive, priority-loaded Next.js image while retaining the established typography through self-hosted `next/font` output.
- Consolidated duplicate blog-index content onto `/{locale}/blog` with permanent localized redirects.
- Corrected favicon and manifest declarations so every advertised asset resolves from a public route.
- Marked test and placeholder article routes as non-indexable and made invalid locales/content slugs return 404.

## Files changed

- SEO configuration and helpers: `src/lib/seo/site.mjs`, `src/lib/seo/redirects.mjs`, `src/components/json-ld.jsx`, `src/proxy.js`.
- Crawl infrastructure: `src/app/robots.js`, `src/app/sitemap.js`, `next.config.mjs`.
- Metadata and structured data: root/localized layouts and localized landing, blog, article, service, and project pages under `src/app`.
- Shared public content facts: `src/lib/content/pages.mjs` and `src/lib/content/blog.mjs`.
- Performance and semantics: existing landing, navigation, project, footer, and article components.
- Verification: `tests/*.test.mjs`, `tests/browser/site.spec.mjs`, and scripts under `scripts/`.

## Important decisions

- `https://www.laodiceasolutions.com` is the default canonical production origin. Canonicals are never derived from the incoming request host.
- `/{locale}/blog` is the only indexable blog index; the former services-index alias redirects there while article URLs remain unchanged.
- Indexing is opt-in. Only the canonical production deployment should set `SITE_INDEXING_ENABLED=true`.
- Turkish is the default locale, `/` permanently redirects to `/tr`, and `/tr` plus `/en` remain the public localized URL structure.
- Organization schema contains only the public company name, website, logo, email, and social profiles already exposed by the site.
- BlogPosting schema uses the same shared publication date and image as the visible article.
- BreadcrumbList was not added because the UI has no visible breadcrumb trail.
- Service and SoftwareApplication schema were not added because the current service/project pages do not expose enough stable product facts, and several projects are marked “coming soon.”
- No review, rating, address, employee-count, price, or FAQ properties were invented.

## Required deployment configuration

Set these server-side values on the canonical production deployment:

```text
SITE_CANONICAL_ORIGIN=https://www.laodiceasolutions.com
SITE_INDEXING_ENABLED=true
```

All preview, test, and staging deployments must omit `SITE_INDEXING_ENABLED` or set it to `false`. They may keep `SITE_CANONICAL_ORIGIN` pointed at production; they will remain non-indexable.

Optional SEO verification configuration:

```text
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
```

Other existing external configuration includes `NEXT_PUBLIC_GTM_ID` for analytics and the reCAPTCHA/Discord values used by the contact flow.

## External follow-up

### Google Search Console

1. Verify the HTTPS `www` property using `GOOGLE_SITE_VERIFICATION` or DNS.
2. Submit `https://www.laodiceasolutions.com/sitemap.xml` after the production indexing flag is enabled.
3. Inspect `/tr`, `/en`, representative blog articles, and project pages to confirm Google-selected canonicals.
4. Confirm that the apex HTTP/HTTPS variants redirect to the HTTPS `www` host.
5. Monitor Page indexing, International targeting signals, structured-data enhancements, and Core Web Vitals after deployment.

### Bing Webmaster Tools

Verify the canonical host, submit the same sitemap, and monitor crawl/indexing reports.

### Analytics

Confirm that the configured GTM container records production traffic once, without a second direct GA installation. Search Console linking and organic-landing dashboards must be configured externally.

## Remaining recommendations

- Validate production JSON-LD with Google Rich Results Test and Schema.org Validator after deployment.
- Measure real-user LCP, CLS, and INP before further performance refactoring.
- Add visible breadcrumbs before introducing BreadcrumbList schema.
- Reassess Service or SoftwareApplication schema only when public pages expose stable product status, functionality, pricing/offer information, and provider details.
- Update shared article descriptors whenever visible publication dates or hero images change.
