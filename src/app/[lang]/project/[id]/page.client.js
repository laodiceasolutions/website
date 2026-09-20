'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Image from "next/image";
import { useContext } from "react";

export default function PageClient(props) {
  const { project } = props;
  const { dictionary } = useContext(ApplicationContext);
  const projectHtml = dictionary?.landingPage?.project[`${project.name}_Detail_Large`]
    ?.replaceAll("<h5", "<h3")
    .replaceAll("</h5>", "</h3>");

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header fixed />
      <main id="main-content" className="flex-1">
        <section className="p-1 max-w-4xl mx-auto">
          <div className="container grid grid-cols-12 gap-3 prose prose-lg dark:prose-invert max-w-none">

            <div className="col-span-full mt-3 flex justify-center items-center">
              <Image
                src={project.img}
                width={850}
                height={512}
                className="max-w-md md:max-w-6xl"
                alt={project.title}
              />
            </div>
            <div className="col-span-full grid grid-cols-12 gap-4 py-6" dangerouslySetInnerHTML={{ __html: projectHtml }} >
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
