'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { navbarItems } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Navbar() {

  const { dictionary, language } = useContext(ApplicationContext);
  const pathname = usePathname();
  return (
    <nav aria-label={language === "en" ? "Primary navigation" : "Ana navigasyon"} className="hidden md:block">
      <ul className="flex flex-wrap items-center justify-center gap-2 text-gray-900">
        {
          navbarItems.map((item) => {
            const isCurrent = (item.label === "blog" && pathname.startsWith(`/${language}/blog`))
              || (item.label === "projects" && pathname.startsWith(`/${language}/project`));
            return (
              <li key={item.path} className="text-lg font-semibold p-1">
                <Link
                  aria-current={isCurrent ? "page" : undefined}
                  className={`rounded border-b-2 px-1 py-2 transition-colors hover:text-[#147a3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147a3a] ${isCurrent ? "border-[#147a3a] text-[#147a3a]" : "border-transparent"}`}
                  href={`/${language}/${item.path}`}
                >
                  {dictionary.landingPage.header.navbar[item.label]}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  )
}
