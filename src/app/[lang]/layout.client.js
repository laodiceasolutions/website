'use client';

import { ApplicationProvider } from "@/context/applicationContext";

export default function LayoutClient({ children, dict }) {

  
  return (
    <ApplicationProvider dictionary={dict}>
      {children}
    </ApplicationProvider>

  );
}