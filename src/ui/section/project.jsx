'use client';

import Projects from "./project/projects";
import WhatCanWeDo from "./project/whatCanWeDo";
import { useContext } from "react";
import { ApplicationContext } from "@/context/applicationContext";

export default function Project() {
  const { dictionary } = useContext(ApplicationContext);

  return (
    <section className="relative min-h-screen w-full bg-gray-200 flex justify-center container mx-auto px-4 py-4" id="project">
      <div className="py-5 container flex flex-col justify-between gap-5">
        <h2 className="text-5xl text-secondary font-extrabold">{dictionary.landingPage.header.navbar.projects}</h2>
        <Projects />
        <div className="mt-5">
          <WhatCanWeDo />
        </div>
      </div>
    </section>
  )
}