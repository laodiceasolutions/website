import { projects } from "@/utils/constants";

export default async function sitemap(){
  const defaultPages = [
    {
      url: "https://laodiceasolutions.com/",
      lastModified: new Date(2024,8,12),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://laodiceasolutions.com/tr",
      lastModified: new Date(2024,8,12),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://laodiceasolutions.com/en",
      lastModified: new Date(2024,8,12),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://laodiceasolutions.com/tr/blog",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: "https://laodiceasolutions.com/en/blog",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: "https://laodiceasolutions.com/tr/project",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.9
    },
  ];

 
  const sitemap = [
    ...defaultPages,
    ...projects.map((project) => ({
      url: `https://laodiceasolutions.com/tr/project/${project.name}`,
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.8
    })),
    ...projects.map((project) => ({
      url: `https://laodiceasolutions.com/en/project/${project.name}`,
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.8
    })),
    {
      url: "https://laodiceasolutions.com/tr/blog/what-we-can-do-for-you",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://laodiceasolutions.com/en/blog/what-we-can-do-for-you",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://laodiceasolutions.com/tr/blog/what-we-can-do-for-you/ideation-strategy",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://laodiceasolutions.com/en/blog/what-we-can-do-for-you/ideation-strategy",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://laodiceasolutions.com/tr/blog/what-we-can-do-for-you/web-and-mobile",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://laodiceasolutions.com/en/blog/what-we-can-do-for-you/web-and-mobile",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://laodiceasolutions.com/tr/blog/what-we-can-do-for-you/product-design",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://laodiceasolutions.com/en/blog/what-we-can-do-for-you/product-design",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://laodiceasolutions.com/tr/blog/what-we-can-do-for-you/embedded-systems",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://laodiceasolutions.com/en/blog/what-we-can-do-for-you/embedded-systems",
      lastModified: new Date(2024,8,12),
      changeFrequency: "daily",
      priority: 0.7
    },
  ];
 
  return sitemap;
}