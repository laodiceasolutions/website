'use client';

import Link from "next/link"
import Image from "next/image";
import { useContext } from "react";
import { ApplicationContext } from "@/context/applicationContext";
import { whatCanDoWeDoOffers } from "@/utils/constants";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], display: "swap" });

function OffersMenu() {
  const { dictionary, language } = useContext(ApplicationContext);
  return (
    <ul className="h-full flex flex-col items-end justify-center list-none divide-y-2 divide-gray-400">
      {
        whatCanDoWeDoOffers.map((item) => (
          <li key={item.name} className="w-full max-w-md">
            <Link
              href={`/${language}/blog/what-we-can-do-for-you/${item.name}`}
              className={`${outfit.className} block w-full px-2 py-5 text-gray-100 hover:text-laodicea-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-2xl`}
            >
              {dictionary.landingPage.project.WCDFY[item.name]}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default function WhatCanWeDo() {
  const { dictionary } = useContext(ApplicationContext);

  return (
    <section aria-labelledby="services-title" className="container bg-[#3f3f3f] bg-[url('/background/stained.png')] rounded-xl relative grid grid-cols-2 min-h-[450px] p-1 md:p-0">
      <div className="absolute left-44 top-0 text-white">
        <Image
          src="/vectors/wire.svg"
          width={189}
          height={55}
          className="hidden xl:block"
          alt=""
        />
      </div>
      <div className="absolute left-[25%] bottom-2 text-white">
        <Image
          src="/vectors/cookie.svg"
          width={111}
          height={113}

          className="hidden md:block"
          alt=""
        />
      </div>
      <div className="absolute left-[50%] top-[50%] text-white">
        <Image
          src="/vectors/arrow-with-tail.svg"
          width={298}
          height={81}
          className="hidden xl:block"
          alt=""
        />
      </div>
      <div className="absolute right-2 bottom-2 text-white">
        <Image
          src="/vectors/grid-circle.svg"
          width={57}
          height={57}
          className=""
          alt=""
        />
      </div>
      <div className="col-span-full lg:col-span-1 h-full w-full flex justify-start lg:justify-center items-center  bg-contain bg-no-repeat md:bg-[url('/background/grey-design.png')]">
        <h3 id="services-title" className={`${outfit.className} text-3xl md:text-7xl text-gray-100 font-bold max-w-xs whitespace-pre-wrap text-left`}>
          {dictionary.landingPage.project.WCDFY.title}
        </h3>
      </div>
      <div className="col-span-full lg:col-span-1">
        <OffersMenu />
      </div>
    </section>
  )
}
