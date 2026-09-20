'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"], style: "italic", display: "swap" });

export default function Logo() {
  const { language } = useContext(ApplicationContext);
  return (
      <Link
        className={`${montserrat.className} text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary`}
        href={`/${language}`}
        aria-label="Laodicea Solutions"
      >
        Laodicea{" "}<span className="text-[#147a3a]">Solutions</span>
      </Link>
  )
}
