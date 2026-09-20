'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Link from "next/link";
import { useContext } from "react";

export default function NotFound(params) {
  const { language } = useContext(ApplicationContext);
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header fixed />
      <main id="main-content" className="flex flex-1 items-center justify-center">
        <div className="mt-4 h-[20vh] flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl font-semibold">404 Project Not Found</h1>
          <Link
            href={`/${language}`}
            className="text-black hover:text-[#147a3a] focus:text-[#147a3a] text-2xl"
          >
            Home Page
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
