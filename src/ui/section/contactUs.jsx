'use client';

import Image from "next/image";
import ContactUsForm from "./contactUs/contactUsForm";
import { ApplicationContext } from "@/context/applicationContext";
import { useContext } from "react";

export default function ContactUs() {
  const { dictionary } = useContext(ApplicationContext);

  return (
    <section className="relative min-h-screen w-full bg-white flex justify-center mt-5" id="contactUs">
       <div className="absolute left-0 -top-16 text-primary">
        <Image
          src="/vectors/wave.svg"
          width={350}
          height={78}
          className="hidden md:block"
          alt="wire"
        />
      </div>
      <div className="py-5 container flex flex-col justify-start items-start gap-5">
        <h2 className="text-5xl text-secondary font-extrabold mt-6">{dictionary.landingPage.header.navbar.contactUs}</h2>
        <ContactUsForm />
      </div>
    </section>
  )
}
