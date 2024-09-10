'use client';
import { ApplicationContext } from "@/context/applicationContext";
import Footer from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import Image from "next/image";
import { useContext } from "react";

export default function PageClient(props) {
  const { project } = props;
  const { dictionary } = useContext(ApplicationContext);
  console.log({ project })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Header fixed />
      <section className="p-1 container grid grid-cols-12 gap-4 ">
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



      </section>
      <Footer />
    </main>
  )
}