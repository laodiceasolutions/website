
import { ApplicationProvider } from "@/context/applicationContext";
import { getDictionary } from "../dictionaries";
import LayoutClient from "./layout.client";

export default async function Layout(props) {
  const { children, params: { lang } } = props;
  const dict = await getDictionary(lang);
  return (
    <ApplicationProvider dictionary={dict}>
      <LayoutClient>
        {children}
      </LayoutClient>
    </ApplicationProvider>
  )
}