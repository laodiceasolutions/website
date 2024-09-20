'use client';

import BlogHeader from "@/ui/blog/blogHeader";
import useApplication from "@/ui/hooks/useApplication";
import { whatCanDoWeDoOffers } from "@/utils/constants";
import { ArticleJsonLd } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function WebAndMobileClient(props) {
  const { dictionary, language } = useApplication();

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://laodiceasolutions.com/${language}/blog/what-we-can-do-for-you/web-and-mobile`}
        title={dictionary.blog.WCDFY['web-and-mobile'].title}
        images={[
          "https://laodiceasolutions.com/blog/products/phone-and-tablet.jpeg"
        ]}
        datePublished="2024-09-12"
        dateModified="2024-09-12"
        authorName="@laodiceasoln"
        description={dictionary.blog.WCDFY["web-and-mobile"].summary}
        useAppDir={true}
      />
      <article className="max-w-4xl mx-auto">
        <BlogHeader
          title={dictionary.blog.WCDFY['web-and-mobile'].title}
          readTime={10}
          publishDate={new Date(2024, 8, 12)}
        />
        <Image
          alt="Laodicea Solutions Mobile and Tablet development"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
          height="400"
          src="/blog/products/phone-and-tablet.jpeg"
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          width="800"
        />
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section11 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section12 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].subtitle2 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section21 }} />
          <h3 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].mostsubtitle3 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section31 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section32 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list31 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list32 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list33 }} />
          </ul>
          <h3 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].mostsubtitle4 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section41 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section42 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list41 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list42 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list43 }} />
          </ul>
          <Image
            alt="Laodicea Solutions Mobile Development"
            className="w-full rounded-lg my-8"
            height="300"
            src="/blog/products/phones-and-tablets.jpeg"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].subtitle5 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section51 }} />
          <h3 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].mostsubtitle6 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list61 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list62 }} />
          </ul>
          <h3 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].mostsubtitle7 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list71 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list72 }} />
          </ul>
          <Image
            alt="Laodicea Solutions Mobile and Web Development"
            className="w-full rounded-lg my-8"
            height="300"
            src="/blog/products/phone-and-tablet-parallel.jpeg"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].subtitle8 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section81 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list81 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list82 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list83 }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section82 }} />
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].subtitle9 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section91 }} />
          <ul className="list-disc">
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list91 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list92 }} />
            <li dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].list93 }} />
          </ul>
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].subtitle10 }} />

          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section101 }} />
          <p dangerouslySetInnerHTML={{ __html: dictionary.blog.WCDFY['web-and-mobile'].section102 }} />
        </div>
      </article>
      <section className="max-w-4xl mx-auto mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatCanDoWeDoOffers
            .filter((offer) => offer.name !== 'web-and-mobile')
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