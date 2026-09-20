import JsonLd from "@/components/json-ld";
import { localizedMetadata, webPageJsonLd } from "@/lib/seo/site.mjs";
import { projects } from "@/utils/constants";
import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries";
import PageClient from "./page.client";

function findProject(id) {
  return projects.find((project) => project.name === id);
}

export async function generateMetadata({ params }) {
  const { lang, id } = await params;
  const project = findProject(id);
  if (!project) notFound();
  const dictionary = await getDictionary(lang);
  return localizedMetadata({
    locale: lang,
    suffix: `project/${id}`,
    title: project.title,
    description: dictionary.landingPage.project[`${project.name}_Detail`],
  });
}

export default async function ProjectPage({ params }) {
  const { lang, id } = await params;
  const project = findProject(id);
  if (!project) notFound();
  const dictionary = await getDictionary(lang);
  const title = project.title;
  const description = dictionary.landingPage.project[`${project.name}_Detail`];
  return (
    <>
      <JsonLd data={webPageJsonLd({ locale: lang, suffix: `project/${id}`, title, description })} />
      <PageClient project={project} />
    </>
  );
}
