'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { useContext } from "react";

export default function Description(params) {
  const { dictionary } = useContext(ApplicationContext);

  return (
    <div className="grid content-center">
      <div className="flex h-full max-w-prose flex-col items-start justify-center p-1 text-base font-semibold leading-8 [&>p+p]:mt-5 md:p-0" dangerouslySetInnerHTML={{__html:dictionary.landingPage.about.description}} />
    </div>
  )
}
