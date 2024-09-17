'use client';

import Link from "next/link";
import Logo from "./logo";
import { Acme } from 'next/font/google'
import Image from "next/image";
import { ApplicationContext } from "@/context/applicationContext";
import { useContext } from "react";
import { navbarItems, socialMedias } from "@/utils/constants";
import { SocialProfileJsonLd } from "next-seo";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });


export default function Footer() {
  const { dictionary, language } = useContext(ApplicationContext);

  return (
    <>
      <SocialProfileJsonLd
        type="Organization"
        name="Laodicea Solutions"
        url="https://laodiceasolutions.com"
        sameAs={socialMedias.map((media) => media.link)}
      />
      <section className="w-full min-h-[440px] grid grid-cols-12 bg-center bg-contain bg-no-repeat bg-[#24A556] bg-[url('/background/illustration-footer.png')] p-2 md:p-0 mx-auto px-4 py-4" id="footer">
        <div className="col-span-full lg:col-span-6 flex flex-col justify-end items-start max-w-lg gap-5 w-full mx-auto">
          <span className="p-1 bg-white rounded-xl">
            <Logo />
          </span>
          <p className={`text-xl text-white font-semibold `}>
            {dictionary.landingPage.about.slogan}
          </p>
          <p className={`text-lg text-white `}>
            {dictionary.landingPage.footer.description}
          </p>
          <p className={`text-xs text-white `}></p>
        </div>
        <div className="col-span-full lg:col-span-6 flex flex-col justify-end items-start md:max-w-lg gap-5 w-full mx-auto mt-5 md:mt-0">
          <div className="flex items-center justify-center gap-2 w-full ">
            {
              navbarItems.map((item) => (
                <Link
                  key={item.label}
                  href={`/${language}/${item.path}`}
                  className="text-xl text-white w-full ">
                  {dictionary.landingPage.header.navbar[item.label]}
                </Link>
              ))
            }
          </div>
          <div className="flex justify-center items-center gap-5 mx-auto">
            {
              socialMedias.map((media) => (
                <Link
                  key={media.name}
                  type="button"
                  role="navigation"
                  title={media.name}
                  href={media.link}
                  target="_blank"
                >
                  <Image
                    width={35}
                    height={35}
                    src={`/vectors/${media.name}.svg`}
                    alt={media.name}
                  />
                </Link>
              ))
            }
          </div>
        </div>
        <div className="col-span-full flex flex-col justify-end items-center py-5">
          <p className={`${acme.className} text-sm text-white`}>© 2024 Laodicea Solutions. All rights reserved.</p>
          <p className={`${acme.className} text-sm text-white`}>made with ❤️</p>
        </div>
      </section>
    </>
  )
}