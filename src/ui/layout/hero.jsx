'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Image from "next/image";
import { useContext } from "react";

export default function Hero() {
  const { dictionary } = useContext(ApplicationContext);


  return (
    <section className="relative h-screen w-full bg-cover bg-center bg-[url('/laodicea/columns.jpg')] overflow-hidden">
      <span className="text-gray-300 scale-150 absolute top-2 left-0 w-screen h-screen">
        <Image
          src="/vectors/Group.svg"
          sizes="90vw"
          fill
          className="hidden md:block"
          alt="Laodicea Solutions; One of sculptors of Laodicea"
        />
      </span>
      <div className="absolute inset-0 bg-black/75 flex items-center justify-center w-full lg:w-[50%] lg:rounded-tr-[100px]">
        <text className="text-white text-6xl font-bold text-center lg:text-left leading-snug" dangerouslySetInnerHTML={{__html: dictionary.landingPage.hero.slogan}}>
          
        </text>
      </div>
    </section>
  )
};