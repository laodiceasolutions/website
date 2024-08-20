'use client';

import { ApplicationProvider } from "@/context/applicationContext";
import { Header } from "@/ui/layout/header";
import Hero from "@/ui/layout/hero";
import { redirect, usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  redirect(`/tr${pathname}`);
  return (
    <ApplicationProvider>
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Header />
        <Hero />
      </main>
    </ApplicationProvider>
  );
}
