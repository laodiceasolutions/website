'use client';

import BlogHeader from "@/ui/blog/blogHeader";
import useApplication from "@/ui/hooks/useApplication";
import { whatCanDoWeDoOffers } from "@/utils/constants";
import { ArticleJsonLd } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function IdeationStrategyClient(props) {
  const { dictionary, language } = useApplication();

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://laodiceasolutions.com/${language}/blog/what-we-can-do-for-you/ideation-strategy`}
        title={dictionary.blog.WCDFY['product-design'].title}
        images={[
          "https://laodiceasolutions.com/blog/products/office-environment.jpeg"
        ]}
        datePublished="2024-09-12"
        dateModified="2024-09-12"
        authorName="@laodiceasoln"
        description={dictionary.blog.WCDFY["ideation-strategy"].summary}
        useAppDir={true}
      />
      <article className="max-w-4xl mx-auto">
        <BlogHeader
          title={dictionary.blog.WCDFY['ideation-strategy'].title}
          readTime={7}
          publishDate={new Date(2024, 8, 11)}
        />
        <Image
          alt="Laodicea Solutions Office Environment"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
          height="400"
          src="/blog/products/office-environment.jpeg"
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          width="800"
        />
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section11 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section12 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].subtitle2 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section21 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section22 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section23 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].subtitle3 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section31 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section32 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list31 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list32 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list33 }} />
          </ul>
          <Image
            alt="Laodicea Solutions Office Environment Desk"
            className="w-full rounded-lg my-8"
            height="300"
            src="/blog/products/office-environment-desk.jpeg"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].subtitle4 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section41 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section42 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list41 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list42 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list43 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list44 }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section43 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section44 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].subtitle5 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section51 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section52 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].subtitle6 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section61 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list61 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list62 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list63 }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section62 }} />
          <Image
            alt="Laodicea Solutions Office Environment Charts"
            className="w-full rounded-lg my-8"
            height="300"
            src="/blog/products/office-environment-charts.jpeg"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].subtitle7 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section71 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list71 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list72 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list73 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].list74 }} />
          </ul>
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].subtitle8 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section81 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['ideation-strategy'].section82 }} />
        </div>
      </article>
      <section className="max-w-4xl mx-auto mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatCanDoWeDoOffers
            .filter((offer) => offer.name !== 'ideation-strategy')
            .slice(0, 2)
            .map((offer) => (
              <div
                key={offer.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  alt={dictionary.blog.WCDFY[offer.name].title}
                  className="w-full h-48 object-cover"
                  height="200"
                  src={offer.cardImageSrc}
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {dictionary.landingPage.project.WCDFY[offer.name]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {dictionary.blog.WCDFY[offer.name].summary}
                  </p>
                  <Link
                    className="rounded px-5 py-3 text-white bg-black"
                    href={`/${language}/blog/what-we-can-do-for-you/${offer.name}`}
                  >
                    {dictionary.common.readMore}
                    {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}