import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['600',], style: "italic" });


export default function Logo() {
  return (
    <Link
      className={`${montserrat.className} text-2xl`}
      href="/"
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