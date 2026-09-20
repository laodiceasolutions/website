export const BLOG_ARTICLES = Object.freeze({
  "embedded-systems": Object.freeze({
    slug: "embedded-systems",
    image: "/blog/products/embedded-systems-circuit.jpeg",
    datePublished: "2024-09-11",
    readTime: 5,
  }),
  "ideation-strategy": Object.freeze({
    slug: "ideation-strategy",
    image: "/blog/products/office-environment.jpeg",
    datePublished: "2024-09-11",
    readTime: 7,
  }),
  "product-design": Object.freeze({
    slug: "product-design",
    image: "/blog/products/all-products.jpeg",
    datePublished: "2024-09-11",
    readTime: 10,
  }),
  "web-and-mobile": Object.freeze({
    slug: "web-and-mobile",
    image: "/blog/products/phone-and-tablet.jpeg",
    datePublished: "2024-09-12",
    readTime: 10,
  }),
});

/** @param {keyof typeof BLOG_ARTICLES} slug */
export function getBlogArticle(slug) {
  return BLOG_ARTICLES[slug];
}

/** @param {keyof typeof BLOG_ARTICLES} slug */
export function getBlogPublishDate(slug) {
  return new Date(`${BLOG_ARTICLES[slug].datePublished}T12:00:00Z`);
}
