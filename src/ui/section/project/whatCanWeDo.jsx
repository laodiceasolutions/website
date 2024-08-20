'use client';

import Link from "next/link"
import { Outfit } from 'next/font/google'
import Image from "next/image";
import { useContext } from "react";
import { ApplicationContext } from "@/context/applicationContext";
const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] });

const menuItems = [
  {
    name: 'productDesign',
    label: 'Product Design',
  },
  {
    name: 'ideationStrategy',
    label: 'Ideation & Strategy',
  },
  {
    name: 'webAndMobile',
    label: 'Web and Mobile',
  },
  {
    name: 'embeddedSystems',
    label: 'Embedded Systems'
  },
]

function OffersMenu() {
  const { dictionary } = useContext(ApplicationContext);
  return (
    <ul className="h-full flex flex-col items-end justify-center list-none divide-y-2 divide-gray-400">
      {
        menuItems.map((item) => (
          <Link key={item.name} href={item.name} className={`w-full max-w-md px-2 py-5 text-gray-100 hover:text-primary focus:text-primary text-2xl ${outfit.className}`}>
            <h4>{dictionary.landingPage.project.WCDFY[item.name]}</h4>
          </Link>
        ))
      }
    </ul>
  )
}

export default function WhatCanWeDo() {
  const { dictionary } = useContext(ApplicationContext);

  return (
    <main className="container bg-[#3f3f3f] bg-[url('/background/stained.png')] rounded-xl relative grid grid-cols-2 h-[450px]">
      <div className="absolute left-44 top-0 text-white">
        <Image
          src="/vectors/wire.svg"
          width={189}
          height={55}
          className="hidden md:block"
          alt="Illustration Wire"
        />
      </div>
      <div className="absolute left-[25%] bottom-2 text-white">
        <Image
          src="/vectors/cookie.svg"
          width={111}
          height={113}

          className="hidden md:block"
          alt="Illustration Cookie"
        />
      </div>
      <div className="absolute left-[50%] top-[50%] text-white">
        <Image
          src="/vectors/arrow-with-tail.svg"
          width={298}
          height={81}
          className="hidden md:block"
          alt="Illustration Cookie"
        />
      </div>
      <div className="absolute right-2 bottom-2 text-white">
        <Image
          src="/vectors/grid-circle.svg"
          width={57}
          height={57}
          className=""
          alt="Illustration Grid Circle"
        />
      </div>
      <div className="col-span-full lg:col-span-1 h-full w-full flex justify-center items-center  bg-contain bg-no-repeat md:bg-[url('/background/grey-design.png')]">
        <p className={`text-3xl md:text-7xl text-gray-100 font-bold max-w-xs whitespace-pre-wrap text-left ${outfit.className}`}>
          {dictionary.landingPage.project.WCDFY.title}
        </p>
      </div>
      <div className="col-span-full lg:col-span-1">
        <OffersMenu />
      </div>
    </main>
  )
}