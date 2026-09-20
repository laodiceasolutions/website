import { notFound } from "next/navigation";
import { getDictionary } from "./dictionaries";
import LayoutClient from "./layout.client";
import { isSupportedLocale } from "@/lib/seo/site.mjs";

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return <LayoutClient dict={dict} locale={lang}>{children}</LayoutClient>;
}
