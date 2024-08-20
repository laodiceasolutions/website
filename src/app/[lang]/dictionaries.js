import 'server-only'
 
const dictionaries = {
  en: () => import('../../dictionary/en/index.json').then((module) => module.default),
  tr: () => import('../../dictionary/tr/index.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => (dictionaries[locale] ?? dictionaries.tr)()