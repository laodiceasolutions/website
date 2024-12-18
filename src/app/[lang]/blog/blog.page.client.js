'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { whatCanDoWeDoOffers } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function BlogPageClient() {
  const { dictionary, language } = useContext(ApplicationContext);

  return (
    <>
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{dictionary.blog.whatCanWeDoForYou}</h1>
        <p className="text-xl text-gray-600">
          {dictionary.blog.discoverInnovativeSolutions}
        </p>
      </section>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatCanDoWeDoOffers.map((item) => (
              <article
                key={item.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  alt="Blog post image"
                  className="w-full h-48 object-cover"
                  height="200"
                  src={item.cardImageSrc}
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {dictionary.landingPage.project.WCDFY[item.name]}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {dictionary.blog.WCDFY[item.name].summary}
                  </p>
                  <Link
                    className="rounded px-5 py-3 text-white bg-black"
                    href={`/${language}/blog/what-we-can-do-for-you/${item.name}`}
                  >
                    {dictionary.common.readMore}
                    {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{dictionary.blog.popularPosts}</h3>
            <ul className="space-y-4">
              {whatCanDoWeDoOffers.map((item) => (
                <li key={item.name}>
                  <Link
                    className="text-gray-600 hover:text-laodicea-primary"
                    href={`/${language}/blog/what-we-can-do-for-you/${item.name}`}
                  >
                    {dictionary.landingPage.project.WCDFY[item.name]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}