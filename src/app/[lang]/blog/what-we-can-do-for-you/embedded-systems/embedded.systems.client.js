'use client';

import BlogHeader from "@/ui/blog/blogHeader";
import useApplication from "@/ui/hooks/useApplication";
import { whatCanDoWeDoOffers } from "@/utils/constants";
import { ArticleJsonLd } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function EmbeddedSystemsClient(props) {
  const { dictionary, language } = useApplication();

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://laodiceasolutions.com/${language}/blog/what-we-can-do-for-you/embedded-systems`}
        title={dictionary.blog.WCDFY['embedded-systems'].title}
        images={[
          "https://laodiceasolutions.com/blog/products/embedded-systems-circuit.jpeg"
        ]}
        datePublished="2024-09-12"
        dateModified="2024-09-12"
        authorName="@laodiceasoln"
        description={dictionary.blog.WCDFY["embedded-systems"].summary}
        useAppDir={true}
      />
      <article className="max-w-4xl mx-auto">
        <BlogHeader
          title={dictionary.blog.WCDFY['embedded-systems'].title}
          readTime={5}
          publishDate={new Date(2024, 8, 11)}
        />
        <Image
          alt="Laodicea Solutions Embedded Systems Development on electronic circuit cards"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
          height="400"
          src="/blog/products/embedded-systems-circuit.jpeg"
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          width="800"
        />
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section11 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].subtitle2 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section21 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section22 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list21 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list22 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list23 }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section23 }} />
          <Image
            alt="Laodicea Solutions Embedded Systems Development drawing design"
            className="w-full rounded-lg my-8"
            height="300"
            src="/blog/products/embedded-systems-drawing.jpeg"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].subtitle3 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section31 }} />
          <h3 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].mostsubtitle31 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section32 }} />
          <h3 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].mostsubtitle32 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section33 }} />
          <h3 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].mostsubtitle33 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section34 }} />
          <h3 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].mostsubtitle34 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section35 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].subtitle4 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section41 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list41 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list42 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list43 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list44 }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section42 }} />
          <Image
            alt="Laodicea Solutions Embedded System Development with desktop and lapton"
            className="w-full rounded-lg my-8"
            height="300"
            src="/blog/products/embedded-systems-laptop.jpeg"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].subtitle5 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section51 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section52 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].subtitle6 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list61 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list62 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].list63 }} />
          </ul>
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].subtitle7 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section71 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['embedded-systems'].section72 }} />
        </div>
      </article>
      <section className="max-w-4xl mx-auto mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatCanDoWeDoOffers
            .filter((offer) => offer.name !== 'embedded-systems')
            .slice(0, 2)
            .map((offer) => (
              <div
                key={offer.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dictionary.landingPage.project.WCDFY[offer.name]}
                  </h3>
                  <p className="text-gray-600 mb-4">
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