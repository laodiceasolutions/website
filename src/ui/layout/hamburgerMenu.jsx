'use client';
import { navbarItems } from "@/utils/constants";
import Link from "next/link";
import { useContext, useState } from "react";
import { LanguageSelector } from "./languageSelector";
import { ApplicationContext } from "@/context/applicationContext";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary, language } = useContext(ApplicationContext);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
        onClick={toggleMenu}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center mt-2 divide-y divide-gray-200">
          {
            navbarItems.map((item) => (
              <Link
                key={item.label}
                href={`/${language}/${item.path}`}
                className="text-xl hover:text-blue-600 w-full ml-2 py-4"
                onClick={toggleMenu}>
                {dictionary.landingPage.header.navbar[item.label]}
              </Link>
            ))
          }
        </div>
        <div className="mt-5 p-2">
          <LanguageSelector />
        </div>
      </div>
    </>
  )
};