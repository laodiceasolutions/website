import { ApplicationContext } from "@/context/applicationContext";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['600',], style: "italic" });


export default function Logo() {
  const { language } = useContext(ApplicationContext);
  return (
    <Link
      className={`${montserrat.className} text-2xl`}
      href={`/${language}`}
      title="Brand"
    >
      Laodicea
      {' '}
      <span className="text-primary">
        Solutions
      </span>
    </Link>
  )
}