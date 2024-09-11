'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Link from "next/link";
import { useContext } from "react";

export default function NotFound(props) {
  const { language } = useContext(ApplicationContext);
  return (
    <div className="flex justify-center items-center min-h-[60vh] h-full">
      <div className="mt-4 h-[20vh] flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl font-semibold">404 Blog Not Found</h2>
        <Link
          href={`/${language}`}
          className="text-black hover:text-primary focus:text-primary text-2xl"
        >
          Home Page
        </Link>
      </div>
    </div>
  )
}