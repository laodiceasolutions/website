'use client';

import useApplication from "@/ui/hooks/useApplication";
import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Projects from "@/ui/section/project/projects";

export default function PageClient() {
  const { dictionary } = useApplication();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Header fixed />
      <div className=" container mx-auto py-2">
        <h1 className="mt-4 text-2xl font-medium">{dictionary.landingPage.header.navbar.projects}</h1>
        <div className="mt-4">
          <Projects />
        </div>
      </div>
      <Footer />
    </main>
  );
}
