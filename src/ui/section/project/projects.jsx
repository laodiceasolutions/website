'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { projects } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

function ProjectItem(props) {
  const { label, img, link, name, title, tags, soon } = props;
  const { dictionary } = useContext(ApplicationContext);

  return (
    <li className="grid grid-rows-4 w-[min(390px,calc(100vw-3rem))] shrink-0 snap-start min-h-[533px] bg-white hover:shadow-xl text-black rounded-lg">
      <div className={`row-span-1 md:row-span-2`}>
        <div className="bg-black relative">
          <Image
            src={img}
            width={390}
            height={363}
            className=""
            alt=""
          />
          <div className="z-20 absolute inset-0 bg-opacity-40 flex items-center justify-center w-full">
          </div>
          <div className="absolute top-2 left-2 flex justify-start items-center gap-1">
            {
              tags.map((tag) => (
                <span
                  key={tag}
                  className="p-3 bg-[#f4f2f1] rounded text-sm font-medium text-black shadow"
                >
                  {tag}
                </span>
              ))
            }
          </div>
          {
            soon && (
              <div className="absolute bottom-4 left-[50%] ">
                <span className="relative -left-[50%] p-2 rounded-full bg-blue-600 border-2 border-white text-xs text-white">{dictionary.common.comingSoon}</span>
              </div>
            )
          }
        </div>

      </div>
      <div className="row-span-2 flex flex-col justify-between items-start gap-2 p-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm font-normal">{label}</p>
        <Link
          name={name}
          aria-label={`${dictionary.common?.readMore || "Read more"}: ${title}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-5 py-2.5 font-semibold text-white hover:bg-[#147a3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary"
          href={link}
        >
          <span>{dictionary.common?.readMore || "Read more"}</span>
          <Image src="/vectors/arrow-right.svg" width={20} height={20} alt="" />
        </Link>
      </div>
    </li>
  )
}
export default function Projects() {
  const { dictionary, language } = useContext(ApplicationContext);

  return (
    <ul className="flex snap-x snap-mandatory scroll-px-1 justify-start items-stretch gap-4 list-none overflow-x-auto p-1 pb-4 md:snap-none md:p-0">
      {
        projects.map((project) => (
          <ProjectItem
              key={project.name}
              title={project.title}
              name={project.name}
              label={dictionary?.landingPage?.project[project.name]}
              img={project.img}
              tags={project.tags}
              link={`/${language}/${project.link}`}
              soon={project.soon}
            />
        ))
      }
    </ul>
  )
};
