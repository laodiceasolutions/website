'use client';

import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useLayoutEffect, useState } from "react";


const ApplicationContext = createContext({
  language: '',
  setLanguage: () => { },
  dictionary: {},
});

const ApplicationProvider = ({ children, dictionary }) => {

  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState('tr');

  useLayoutEffect(() => {
    if (pathname.startsWith('/en')) {
      setLanguage('en');
    } else if (pathname.length <= 1 || pathname.startsWith('/tr')) {
      setLanguage('tr')
    } else {
      router.push('tr');
    }
  }, [pathname, router]);


  return (
    <ApplicationContext.Provider
      value={{
        language,
        setLanguage,
        dictionary
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}


export { ApplicationContext, ApplicationProvider }