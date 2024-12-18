'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Link from "next/link";
import { useContext } from "react";

export default function NotFound(params) {
  const { language } = useContext(ApplicationContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Header fixed />
      <div className="mt-4 h-[20vh] flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl font-semibold">404 Project Not Found</h2>
        <Link
          href={`/${language}`}
          className="text-black hover:text-laodicea-primary focus:text-laodicea-primary text-2xl"
        >
          Home Page
        </Link>
      </div>
      <Footer />
    </main>
  )
}