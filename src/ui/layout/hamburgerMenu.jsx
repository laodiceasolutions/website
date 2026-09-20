'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { navbarItems } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { LanguageSelector } from "./languageSelector";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary, language } = useContext(ApplicationContext);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const pathname = usePathname();
  const drawerId = "mobile-navigation";

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    } else if (!isOpen && dialog.open) {
      dialog.close();
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-gray-700 md:hidden hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary"
        aria-controls={drawerId}
        aria-expanded={isOpen}
        aria-label={language === "en" ? "Open main menu" : "Ana menüyü aç"}
        onClick={() => setIsOpen(true)}
      >
        <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 17 14" fill="none">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={language === "en" ? "Mobile navigation" : "Mobil navigasyon"}
        className="mobile-menu-dialog fixed inset-0 z-20 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 md:hidden"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const focusable = [...event.currentTarget.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          )].filter((element) => element.getClientRects().length > 0);
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <nav
          id={drawerId}
          aria-label={language === "en" ? "Mobile navigation" : "Mobil navigasyon"}
          className="absolute right-0 top-0 h-full w-[min(85vw,24rem)] bg-white p-4 shadow-lg"
        >
          <div className="flex justify-end">
          <button
            ref={closeRef}
            type="button"
            onClick={closeMenu}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary"
            aria-label={language === "en" ? "Close main menu" : "Ana menüyü kapat"}
          >
            <span aria-hidden="true">×</span>
          </button>
          </div>
          <ul className="divide-y divide-gray-200">
          {navbarItems.map((item) => {
            const isCurrent = (item.label === "blog" && pathname.startsWith(`/${language}/blog`))
              || (item.label === "projects" && pathname.startsWith(`/${language}/project`));
            return <li key={item.label}>
              <Link
                href={`/${language}/${item.path}`}
                aria-current={isCurrent ? "page" : undefined}
                className={`block min-h-11 border-l-4 px-3 py-4 text-xl transition-colors hover:bg-gray-100 hover:text-[#147a3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary ${isCurrent ? "border-[#147a3a] bg-green-50 text-[#147a3a]" : "border-transparent"}`}
                onClick={closeMenu}
              >
                {dictionary.landingPage.header.navbar[item.label]}
              </Link>
            </li>;
          })}
          </ul>
          <div className="mt-5 p-2">
            <LanguageSelector />
          </div>
        </nav>
      </dialog>
    </>
  );
}
