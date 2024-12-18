'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { LogoJsonLd } from "next-seo";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['600',], style: "italic" });


export default function Logo(props) {
  const { useAsH1 } = props;
  const { language } = useContext(ApplicationContext);
  return (
    <>
      <LogoJsonLd
        logo="https://laodiceasolutions.com/logo.png"
        url="http://laodiceasolutions.com"
        useAppDir={true}
      />
      <Link
        className={`${montserrat.className} text-2xl`}
        href={`/${language}`}
        title="Brand"
      >
        {
          useAsH1 ? (
            <h1>
              Laodicea
              {' '}
              <span className="text-laodicea-primary">
                Solutions
              </span>
            </h1>
          ) : (
            <>
              Laodicea
              {' '}
              <span className="text-laodicea-primary">
                Solutions
              </span>
            </>
          )
        }
      </Link>
    </>
  )
}