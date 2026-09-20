'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { useContext, useEffect, useId, useRef, useState } from "react";


const languageLabel = {
  tr: 'TR',
  en: 'EN'
};
export function LanguageSelector() {
  const applicationContext = useContext(ApplicationContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const selectorId = useId();
  const listId = `${selectorId}-languages`;
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const { language = 'tr' } = applicationContext;
  const handleLanguageChange = (lang) => {
    if (pathname.length === 1) {
      setIsOpen(false);
      router.push(`/${lang}${window.location.hash}`);
      return;
    }
    const segments = pathname.split('/');
    segments[1] = lang;
    const newPath = `${segments.join('/')}${window.location.hash}`;
    setIsOpen(false);
    router.push(newPath);

  };

  const languages = ['tr', 'en'];

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleDismiss = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      } else if (event.type === 'pointerdown' && !containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleDismiss);
    document.addEventListener('pointerdown', handleDismiss);
    return () => {
      document.removeEventListener('keydown', handleDismiss);
      document.removeEventListener('pointerdown', handleDismiss);
    };
  }, [isOpen]);


  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center gap-1 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#147a3a] max-w-14"
        id={selectorId}
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-label={language === 'en' ? 'Choose language' : 'Dil seçin'}
      >
        <Image
          src={`/flags/${language}.svg`}
          alt=""
          width={24}
          height={32}
          className="bg-white shadow-md"
        />
        {languageLabel[language]}
      </button>
      {isOpen && <div
        id={listId}
        className="top-8 absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        aria-labelledby={selectorId}
      >
        <div className="py-1 flex flex-col gap-1 w-20">
          {languages.map((_language, index) => {
            return (
              <button
                key={_language}
                onClick={() => handleLanguageChange(_language)}
                type="button"
                className={`${language === _language
                  ? "bg-gray-100 text-[#147a3a]"
                  : "text-gray-700"
                  } min-h-11 px-4 py-2 text-sm text-start items-center inline-flex gap-1 hover:bg-gray-100 w-full ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
                aria-current={language === _language ? "true" : undefined}
              >
                <Image
                  src={`/flags/${_language}.svg`}
                  alt=""
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
