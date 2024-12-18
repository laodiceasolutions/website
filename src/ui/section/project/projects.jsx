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
    <li className="grid grid-rows-4 w-[390px] h-[533px] bg-white hover:shadow-xl hover:scale-95 text-black  rounded-lg">
      <div className={`row-span-1 md:row-span-2`}>
        <div className="bg-black relative">
          <Image
            src={img}
            width={390}
            height={363}
            className=""
            alt={dictionary?.landingPage?.project[name]}
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
                <span className="relative -left-[50%] p-2 rounded-full bg-blue-400 border-2 border-white text-xs text-white">Coming Soon</span>
              </div>
            )
          }
        </div>

      </div>
      <div className="row-span-2 flex flex-col justify-between items-start gap-2 p-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm font-normal">{label}</p>
        <Link
          type="button"
          role="navigation"
          name={name}
          className="text-black w-10 h-10 rounded-full focus:bg-laodicea-primary bg-black hover:bg-laodicea-primary p-2"
          href={link}
        >
          <span className="text-laodicea-primary">
            <Image
              src="/vectors/arrow-right.svg"
              width={48}
              height={48}
              className=""
              alt="right half"
            />
          </span>
        </Link>
      </div>
    </li>
  )
}
export default function Projects() {
  const { dictionary, language } = useContext(ApplicationContext);

  return (
    <ul className="flex justify-start items-stretch gap-3 list-none overflow-x-auto p-1 md:p-0">
      {
        projects.map((project) => (
          <div key={project.name} className="">
            <ProjectItem
              title={project.title}
              name={project.name}
              label={dictionary?.landingPage?.project[project.name]}
              img={project.img}
              tags={project.tags}
              link={`/${language}/${project.link}`}
              soon={project.soon}
            />
          </div>
        ))
      }
    </ul>
  )
};