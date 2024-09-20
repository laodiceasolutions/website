'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { navbarItems } from "@/utils/constants";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {

  const { dictionary, language } = useContext(ApplicationContext);
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-wrap items-center justify-center gap-2 text-gray-900">
        {
          navbarItems.map((item) => (
            <li key={item.path} className="text-lg font-semibold hover:text-primary focus:border focus:border-primary p-1">
              <span className="sr-only">{item.label}</span>
              <Link href={`/${language}/${item.path}`}>{`${dictionary.landingPage.header.navbar[item.label]}`}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
