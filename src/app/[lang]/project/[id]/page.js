import { projects } from "@/utils/constants";
import { notFound } from "next/navigation";
import PageClient from "./page.client";

export default function Page(props) {
  const { params: {
    id
  } } = props;
  const project = projects.find((pr) => pr.name === id);
  if (!project) {
    return notFound();
  }

  return (
    <PageClient project={project} />
  )
}