'use client';


import { ApplicationContext } from "@/context/applicationContext";
import HamburgerMenu from "@/ui/layout/hamburgerMenu";
import { LanguageSelector } from "@/ui/layout/languageSelector";
import Logo from "@/ui/layout/logo";
import { navbarItems, socialMedias } from "@/utils/constants";
import { Acme } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });


export default function LayoutClient(props) {
  const { children } = props;
  const { dictionary, language } = useContext(ApplicationContext);
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex space-x-4">
            {
              navbarItems.map((item) => (
                <Link
                  key={item.path}
                  className="text-lg font-semibold hover:text-primary focus:border focus:border-primary p-1"
                  href={`/${language}/${item.path}`}>{`${dictionary.landingPage.header.navbar[item.label]}`}
                </Link>
              ))
            }
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
          </nav>
          <HamburgerMenu />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Logo />
              <p className="text-gray-400">
                {dictionary.landingPage.about.slogan}
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
            </div>
            <div className="w-full md:w-1/3">
              {/* <h4 className="text-lg font-semibold mb-4">Connect With Us</h4> */}
              <ul className="flex space-x-4">
                {
                  navbarItems.map((item) => (
                    <li key={item.path} className="text-lg font-semibold hover:text-primary focus:border focus:border-primary p-1">
                      <span className="sr-only">{item.label}</span>
                      <Link href={`/${language}/${item.path}`}>{`${dictionary.landingPage.header.navbar[item.label]}`}</Link>
                    </li>
                  ))
                }
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
                        className="bg-[#24A556] rounded-full"
                      />
                    </Link>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className={`${acme.className} text-sm text-white`}>&copy; 2024 Laodicea Solutions. All rights reserved.</p>
            <p className={`${acme.className} text-sm text-white`}>made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}