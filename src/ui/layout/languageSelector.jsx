'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { useContext, useState } from "react";


const LANGUAGE_SELECTOR_ID = 'language-selector';
const languageLabel = {
  tr: 'TR',
  en: 'EN'
};
export function LanguageSelector() {
  const applicationContext = useContext(ApplicationContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { language = 'tr' } = applicationContext;
  const handleLanguageChange = (lang) => {
    if (pathname.length === 1) {
      router.push(`/${lang}${window.location.hash}`);
      return;
    }
    const newPath = `${pathname.replace(language, lang)}${window.location.hash}`;
    router.push(newPath);

  };

  const languages = ['tr', 'en'];


  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center gap-1 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary max-w-14"
        id={LANGUAGE_SELECTOR_ID}
        aria-expanded={isOpen}
      >
        <Image
          src={`/flags/${language}.svg`}
          alt={`${language}`}
          width={24}
          height={32}
          className="bg-white shadow-md"
        />
        {languageLabel[language]}
      </button>
      {isOpen && <div
        className="top-8 absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={LANGUAGE_SELECTOR_ID}
      >
        <div className="py-1 flex flex-col gap-1 w-20" role="none">
          {languages.map((_language, index) => {
            return (
              <button
                key={_language}
                onClick={() => handleLanguageChange(_language)}
                className={`${language === _language
                  ? "bg-gray-100 text-primary"
                  : "text-gray-700"
                  } px-4 py-2 text-sm text-start items-center inline-flex gap-1 hover:bg-gray-100 w-full ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
                role="menuitem"
              >
                <Image
                  src={`/flags/${_language}.svg`}
                  alt={`${_language}`}
                  width={24}
                  height={24}
                  className="bg-white shadow-md"
                />
                <span className="truncate">{languageLabel[_language]}</span>
              </button>
            );
          })}
        </div>
      </div>}
    </div>
  )
}