'use client';

import { ApplicationContext } from "@/context/applicationContext";
import Image from "next/image";
import { useContext } from "react";

function ProjectItem(props) {
  const { label, img, link, name } = props;
  return (
    <li className="grid grid-rows-4 w-[390px] h-[533px] bg-white hover:bg-[#3F3F3F] text-black hover:text-white rounded-lg">
      <div className={`row-span-3 md:row-span-3 relative`}>
        <Image
          src={img}
          width={390}
          height={363}
          className=""
          alt="right half"
        />
        <div className="z-20 absolute inset-0 bg-opacity-40 flex items-center justify-center w-full">
        </div>
      </div>
      <div className="row-span-1 flex flex-col justify-between items-start gap-2 p-2">
        <h3 className="text-md font-normal">{label}</h3>
        <button
          type="button"
          role="navigation"
          name={name}
          className="text-black w-10 h-10 rounded-full focus:bg-primary bg-black hover:bg-primary p-2"
        >
          <span className="text-primary">
            <Image
              src="/vectors/arrow-right.svg"
              width={48}
              height={48}
              className=""
              alt="right half"
            />
          </span>
        </button>
      </div>
    </li>
  )
}

const projects = [
  {
    label: 'lsCRM',
    // description: '',
    name: 'lsCRM',
    img: '/team/collegues.png',
    link: '',
  },
]
export default function Projects() {
  const { dictionary } = useContext(ApplicationContext);

  return (
    <ul className="flex justify-start items-stretch gap-3 list-none overflow-x-auto p-1 md:p-0">
      {
        projects.map((project) => (
          <div key={project.name} className="flex-1">
            <ProjectItem
              name={project.name}
              label={dictionary?.landingPage?.project[project.name]}
              img={project.img}
            />
          </div>
        ))
      }
    </ul>
  )
};