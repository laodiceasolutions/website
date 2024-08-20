'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Image from "next/image";
import { useContext } from "react";

export default function Description(params) {
  const { dictionary } = useContext(ApplicationContext);

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-3 content-center">
      {/* <div className="row-span-1 relative h-full">
        <div className="absolute top:20 md:top-52 left-0">
          <Image
            src="/vectors/left-half.svg"
            width={110}
            height={200}
            className=""
            alt="Laodicea Solutions; Illustration half round"
          />
        </div>
        <div className="absolute -top-20 md:top-36 right-0">
          <Image
            src="/vectors/grid.svg"
            width={300}
            height={320}
            className=""
            alt="Laodicea Solutions; Illustration grid"
          />
        </div>
      </div> */}
      <div className="row-span-3 h-full flex flex-col items-start justify-center gap-5 p-1 md:p-0 leading-8 text-md font-semibold" dangerouslySetInnerHTML={{__html:dictionary.landingPage.about.description}}>
        {/* <p className=""></p> */}
      </div>
    </div>
  )
}