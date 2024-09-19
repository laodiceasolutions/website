import { getDictionary } from "./[lang]/dictionaries";
import PageClient from "./page.client";

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#60CE70' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default async function Home() {
  const trDictionary = await getDictionary('tr');
  return (<PageClient dict={trDictionary} />)
}
