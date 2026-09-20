'use client';

import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import { ApplicationContext } from "@/context/applicationContext";
import { useContext } from "react";
import { navbarItems, socialMedias } from "@/utils/constants";
import { Acme } from "next/font/google";

const acme = Acme({ subsets: ["latin"], weight: ["400"], display: "swap" });

export default function Footer() {
  const { dictionary, language } = useContext(ApplicationContext);
  const currentYear = new Date().getFullYear();

  return (
      <footer className="w-full min-h-[440px] grid grid-cols-12 bg-center bg-contain bg-no-repeat bg-[#147a3a] bg-[url('/background/illustration-footer.png')] p-2 md:p-0 mx-auto px-4 py-4" id="footer">
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
          <a className="text-base font-semibold text-white underline underline-offset-4 hover:no-underline" href="mailto:hello@laodiceasolutions.com">
            hello@laodiceasolutions.com
          </a>
        </div>
        <div className="col-span-full lg:col-span-6 flex flex-col justify-end items-start md:max-w-lg gap-5 w-full mx-auto mt-5 md:mt-0">
          <nav aria-label={language === "en" ? "Footer" : "Alt bilgi"} className="flex flex-wrap items-center justify-center gap-4 w-full">
            {
              navbarItems.map((item) => (
                <Link
                  key={item.label}
                  href={`/${language}/${item.path}`}
                  className="text-lg text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  {dictionary.landingPage.header.navbar[item.label]}
                </Link>
              ))
            }
          </nav>
          <div className="flex justify-center items-center gap-5 mx-auto">
            {
              socialMedias.map((media) => (
                <Link
                  key={media.name}
                  aria-label={`${media.name} (${language === "en" ? "opens in a new tab" : "yeni sekmede açılır"})`}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full"
                >
                  <Image
                    width={35}
                    height={35}
                    src={`/vectors/${media.name}.svg`}
                    alt=""
                  />
                </Link>
              ))
            }
          </div>
        </div>
        <div className="col-span-full flex flex-col justify-end items-center py-5">
          <p className={`${acme.className} text-sm text-white`}>© {currentYear} Laodicea Solutions. All rights reserved.</p>
          <p className={`${acme.className} text-sm text-white`}>made with ❤️</p>
        </div>
      </footer>
  )
}
