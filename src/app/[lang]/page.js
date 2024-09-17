import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Hero from "@/ui/layout/hero";
import About from "@/ui/section/about";
import ContactUs from "@/ui/section/contactUs";
import Project from "@/ui/section/project";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Project />
      <ContactUs />
      <Footer />
    </main>
  );
}
