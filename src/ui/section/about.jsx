'use client';

import Image from "next/image";
import PhotoGrid from "./about/photoGrid";
import Description from "./about/description";
import { useContext } from "react";
import { ApplicationContext } from "@/context/applicationContext";

export default function About() {

  const { dictionary } = useContext(ApplicationContext);


  return (
    <section className="relative min-h-screen w-full grid grid-cols-12 gap-8 container pt-16 md:pt-0 mx-auto px-4 py-4" id="about">
      <div className="absolute top-32 md:top-64 left-32 md:left-64">
        <Image
          src="/vectors/right-half.svg"
          width={30}
          height={50}
          className="z-20"
          alt="Laodicea Solutions; Illustration half round"
        />
      </div>
      <div className="absolute top-5">
        <h2 className="text-5xl text-laodicea-secondary font-extrabold">{dictionary.landingPage.header.navbar.about}</h2>
      </div>
      <div className="col-span-full lg:col-span-6 flex items-center">
        <PhotoGrid />
      </div>
      <div className="col-span-full lg:col-span-6 flex items-stretch my-5 md:my-0">
        <Description />
      </div>
    </section>
  )
}