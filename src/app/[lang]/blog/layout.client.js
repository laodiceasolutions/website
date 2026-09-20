'use client';


import { ApplicationContext } from "@/context/applicationContext";
import HamburgerMenu from "@/ui/layout/hamburgerMenu";
import { LanguageSelector } from "@/ui/layout/languageSelector";
import Logo from "@/ui/layout/logo";
import { navbarItems, socialMedias } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Acme } from "next/font/google";

const acme = Acme({ subsets: ["latin"], weight: ["400"], display: "swap" });

export default function LayoutClient(props) {
  const { children } = props;
  const { dictionary, language } = useContext(ApplicationContext);
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav aria-label={language === "en" ? "Primary navigation" : "Ana navigasyon"} className="hidden md:flex flex-wrap items-center gap-2">
            {
              navbarItems.map((item) => {
                const isCurrent = (item.label === "blog" && pathname.startsWith(`/${language}/blog`))
                  || (item.label === "projects" && pathname.startsWith(`/${language}/project`));
                return <Link
                  key={item.path}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`rounded border-b-2 px-2 py-2 text-lg font-semibold transition-colors hover:text-[#147a3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147a3a] ${isCurrent ? "border-[#147a3a] text-[#147a3a]" : "border-transparent"}`}
                  href={`/${language}/${item.path}`}>{`${dictionary.landingPage.header.navbar[item.label]}`}
                </Link>;
              })
            }
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
          </nav>
          <HamburgerMenu />
        </div>
      </header>
      <main id="main-content" className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-start gap-3">
              <span className="rounded-xl bg-white p-1">
                <Logo />
              </span>
              <p className="text-gray-400">
                {dictionary.landingPage.about.slogan}
              </p>
              <a className="font-semibold text-white underline underline-offset-4 hover:no-underline" href="mailto:hello@laodiceasolutions.com">
                hello@laodiceasolutions.com
              </a>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
            </div>
            <div className="w-full md:w-1/3">
              {/* <h4 className="text-lg font-semibold mb-4">Connect With Us</h4> */}
              <ul className="flex flex-wrap items-center gap-3">
                {
                  navbarItems.map((item) => (
                    <li key={item.path} className="text-lg font-semibold p-1">
                      <Link className="rounded hover:text-laodicea-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href={`/${language}/${item.path}`}>{`${dictionary.landingPage.header.navbar[item.label]}`}</Link>
                    </li>
                  ))
                }
                {
                  socialMedias.map((media) => (
                    <li key={media.name}>
                      <Link
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
                          className="bg-[#147a3a] rounded-full"
                        />
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className={`${acme.className} text-sm text-white`}>&copy; {currentYear} Laodicea Solutions. All rights reserved.</p>
            <p className={`${acme.className} text-sm text-white`}>made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
