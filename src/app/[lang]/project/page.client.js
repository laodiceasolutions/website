'use client';

import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Projects from "@/ui/section/project/projects";

export default function PageClient() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Header fixed />
      <div className="mt-4">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
