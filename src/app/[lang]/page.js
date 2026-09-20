import JsonLd from "@/components/json-ld";
import { PAGE_METADATA } from "@/lib/content/pages.mjs";
import { localizedMetadata, webPageJsonLd } from "@/lib/seo/site.mjs";
import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Hero from "@/ui/layout/hero";
import About from "@/ui/section/about";
import ContactUs from "@/ui/section/contactUs";
import Project from "@/ui/section/project";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return localizedMetadata({ locale: lang, ...PAGE_METADATA.home[lang] });
}

export default async function Home({ params }) {
  const { lang } = await params;
  return (
    <>
      <JsonLd data={webPageJsonLd({ locale: lang, ...PAGE_METADATA.home[lang] })} />
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <Header />
        <main id="main-content" className="flex flex-1 flex-col items-center">
          <Hero />
          <About />
          <Project />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
}
