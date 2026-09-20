'use client';

import useApplication from "@/ui/hooks/useApplication";
import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Projects from "@/ui/section/project/projects";

export default function PageClient() {
  const { dictionary } = useApplication();
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header fixed />
      <main id="main-content" className="flex-1">
        <div className="container mx-auto py-2">
          <h1 className="mt-4 text-2xl font-medium">{dictionary.landingPage.header.navbar.projects}</h1>
          <div className="mt-4">
            <Projects />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
