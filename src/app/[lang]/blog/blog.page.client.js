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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Can We Do For You?</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Discover how our innovative solutions can transform your business
        </p>
      </section>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatCanDoWeDoOffers.map((item) => (
              <article
                key={item.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
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
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {dictionary.landingPage.project.WCDFY[item.name]}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search</h3>
            <div className="flex">
              {/* <Input className="flex-grow" placeholder="Search blog posts" type="search" />
              <Button className="ml-2" size="icon" type="submit">
                <Search className="h-4 w-4" />
              </Button> */}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-primary hover:underline" href="#">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a className="text-primary hover:underline" href="#">
                  Cloud Computing
                </a>
              </li>
              <li>
                <a className="text-primary hover:underline" href="#">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a className="text-primary hover:underline" href="#">
                  Data Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Posts</h3>
            <ul className="space-y-4">
              <li>
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                  10 Ways AI is Transforming Small Businesses
                </a>
              </li>
              <li>
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                  The Future of Cloud Computing: Trends to Watch
                </a>
              </li>
              <li>
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                  Cybersecurity Best Practices for Remote Teams
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}