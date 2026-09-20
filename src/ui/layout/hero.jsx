'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Hero() {
  const { dictionary, language } = useContext(ApplicationContext);


  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/laodicea/columns.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <span aria-hidden="true" className="text-gray-300 scale-150 absolute top-2 left-0 w-screen h-screen">
        <Image
          src="/vectors/Group.svg"
          sizes="90vw"
          fill
          className="hidden md:block"
          alt=""
        />
      </span>
      <div className="absolute inset-0 bg-black/75 flex flex-col gap-6 items-center justify-center px-6 w-full lg:w-[50%] lg:rounded-tr-[100px]">
        <h1 className="text-white text-5xl md:text-6xl font-bold text-center lg:text-left leading-snug" dangerouslySetInnerHTML={{__html: dictionary.landingPage.hero.slogan}} />
        <p className="max-w-xl text-center text-lg leading-7 text-gray-100 lg:text-left">
          {dictionary.landingPage.hero.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <Link
            href={`/${language}/#contactUs`}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#147a3a] px-7 py-3 text-lg font-semibold text-white shadow-md hover:bg-[#0f5f2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {dictionary.landingPage.header.navbar.contactUs}
          </Link>
          <Link
            href={`/${language}/#project`}
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-7 py-3 text-lg font-semibold text-white hover:bg-white hover:text-[#147a3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {dictionary.landingPage.hero.viewWork}
          </Link>
        </div>
      </div>
    </section>
  )
};
