import { ApplicationProvider } from "@/context/applicationContext";
import { getDictionary } from "./dictionaries";

export default async function Home({ children, params: { lang } }) {

  const dict = await getDictionary(lang);
  return (
    <ApplicationProvider dictionary={dict}>
      {children}
    </ApplicationProvider>

  );
}
