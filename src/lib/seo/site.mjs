const DEFAULT_SITE_ORIGIN = "https://www.laodiceasolutions.com";

/** @param {string | undefined} value */
export function normalizeCanonicalOrigin(value) {
  const candidate = value || DEFAULT_SITE_ORIGIN;
  let url;
  try {
    url = new URL(candidate);
  } catch {
    throw new Error("SITE_CANONICAL_ORIGIN must be an absolute HTTP(S) URL");
  }
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("SITE_CANONICAL_ORIGIN must use HTTP or HTTPS");
  }
  return url.origin;
}

export const SITE_ORIGIN = normalizeCanonicalOrigin(process.env.SITE_CANONICAL_ORIGIN);
export const SUPPORTED_LOCALES = ["tr", "en"];
export const DEFAULT_LOCALE = "tr";

export function isIndexingEnabled() {
  return process.env.SITE_INDEXING_ENABLED === "true";
}

/** @param {string} locale */
export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

/** @param {string} [pathname] */
export function absoluteUrl(pathname = "/") {
  return new URL(pathname, `${SITE_ORIGIN}/`).toString();
}

/** @param {string} locale @param {string} [suffix] */
export function localizedPath(locale, suffix = "") {
  const cleanSuffix = suffix ? `/${suffix.replace(/^\/+|\/+$/g, "")}` : "";
  return `/${locale}${cleanSuffix}`;
}

/**
 * @param {{locale: string, suffix?: string, title: string, description: string, type?: string, index?: boolean}} options
 */
export function localizedMetadata({
  locale,
  suffix = "",
  title,
  description,
  type = "website",
  index = true,
}) {
  const canonicalPath = localizedPath(locale, suffix);
  const imagePath = locale === "en" ? "/api/og?lang=en" : "/api/og";
  const shouldIndex = index && isIndexingEnabled();

  return {
    title: suffix ? title : { absolute: title },
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        tr: localizedPath("tr", suffix),
        en: localizedPath("en", suffix),
        "x-default": localizedPath(DEFAULT_LOCALE, suffix),
      },
    },
    openGraph: {
      type,
      locale: locale === "en" ? "en_US" : "tr_TR",
      alternateLocale: locale === "en" ? ["tr_TR"] : ["en_US"],
      url: canonicalPath,
      siteName: "Laodicea Solutions",
      title,
      description,
      images: [{ url: imagePath, width: 1200, height: 630, alt: "Laodicea Solutions" }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@laodiceasoln",
      creator: "@laodiceasoln",
      title,
      description,
      images: [imagePath],
    },
    robots: { index: shouldIndex, follow: shouldIndex },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: "Laodicea Solutions",
        url: `${SITE_ORIGIN}/`,
        logo: absoluteUrl("/logo.png"),
        email: "hello@laodiceasolutions.com",
        sameAs: [
          "https://www.facebook.com/profile.php?id=61563294767615",
          "https://www.instagram.com/laodiceasoln",
          "https://x.com/laodiceasoln",
          "https://github.com/laodiceasolutions",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: "Laodicea Solutions",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
        inLanguage: ["tr", "en"],
      },
    ],
  };
}

/** @param {{locale: string, suffix?: string, title: string, description: string, type?: string}} options */
function webPageNode({ locale, suffix = "", title, description, type = "WebPage" }) {
  const url = absoluteUrl(localizedPath(locale, suffix));
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    about: { "@id": `${SITE_ORIGIN}/#organization` },
  };
}

/** @param {{locale: string, suffix?: string, title: string, description: string, type?: string}} options */
export function webPageJsonLd(options) {
  return { "@context": "https://schema.org", ...webPageNode(options) };
}

/** @param {{locale: string, slug: string, title: string, description: string, image: string, datePublished: string}} options */
export function blogPostingJsonLd({ locale, slug, title, description, image, datePublished }) {
  const suffix = `blog/what-we-can-do-for-you/${slug}`;
  const url = absoluteUrl(localizedPath(locale, suffix));
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({ locale, suffix, title, description, type: "WebPage" }),
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        headline: title,
        description,
        image: [absoluteUrl(image)],
        datePublished,
        dateModified: datePublished,
        inLanguage: locale,
        author: { "@id": `${SITE_ORIGIN}/#organization` },
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
    ],
  };
}
