import { Header } from "@/ui/layout/header";
import Hero from "@/ui/layout/hero";
import Project from "@/ui/section/project";

export default async function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Header />
        <Hero />
        <Project />
      </main>
  );
}
