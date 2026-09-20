'use client';

import { ApplicationProvider } from "@/context/applicationContext";

export default function LayoutClient({ children, dict, locale }) {

  
  return (
    <ApplicationProvider dictionary={dict} locale={locale}>
      {children}
    </ApplicationProvider>

  );
}
