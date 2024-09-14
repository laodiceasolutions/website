'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import { ArticleJsonLd, } from "next-seo";
import Image from "next/image";
import { useContext } from "react";

export default function PageClient(props) {
  const { project } = props;
  const { dictionary, language } = useContext(ApplicationContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <ArticleJsonLd
        type="Article"
        url={`https://laodiceasolutions.com/${language}/project/${project.name}`}
        title={project.name}
        images={[
          `https://laodiceasolutions.com${project.img}`
        ]}
        datePublished="2024-09-12"
        dateModified="2024-09-12"
        authorName="@laodiceasoln"
        description={dictionary?.landingPage?.project[project.name]}
      />
      <Header fixed />
      <section className="p-1 max-w-4xl mx-auto">
        <div className="container grid grid-cols-12 gap-3 prose prose-lg dark:prose-invert max-w-none">

          <div className="col-span-full mt-3 flex justify-center items-center">
            <Image
              src={project.img}
              width={850}
              height={512}
              className="max-w-md md:max-w-6xl"
              alt={dictionary?.landingPage?.project[project.name]}
            />
          </div>
          <div className="col-span-full grid grid-cols-12 gap-4 py-6" dangerouslySetInnerHTML={{ __html: dictionary?.landingPage?.project[`${project.name}_Detail_Large`] }} >
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}