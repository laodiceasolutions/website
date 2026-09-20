'use client';

import { createContext, useState } from "react";


const ApplicationContext = createContext({
  language: '',
  setLanguage: () => { },
  dictionary: {},
});

const ApplicationProvider = ({ children, dictionary, locale = 'tr' }) => {
  const [language, setLanguage] = useState(locale);


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
