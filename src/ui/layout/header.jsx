'use client';

import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "./hamburgerMenu";
import { LanguageSelector } from "./languageSelector";
import Logo from "./logo";
import Navbar from "./navbar";
import classNames from "classnames";

export function Header(props) {
  const { fixed } = props;
  const headerRef = useRef();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    function onScroll(event) {

      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <header
      className={classNames('w-full z-50 transition ease-linear duration-700', {
        'sticky top-0 shadow-xl': sticky || fixed,
        'absolute top-8 md:top-16': !sticky && !fixed,
      })}
      ref={headerRef} >
      <div className={classNames(' py-5 px-5 bg-gray-100 flex justify-between items-center', {
        'md:mx-auto my-auto shadow-md rounded-3xl container': !sticky && !fixed,

      })}>
        <Logo />
        <Navbar />
        <div className="hidden md:block">
          <LanguageSelector />
        </div>
        <div className="block md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header >
  )
}