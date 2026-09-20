import { notFound } from "next/navigation";
import PageClient from "./page.client";
import { whatCanDoWeDoOffers } from "@/utils/constants";

export const metadata= {
  robots: {
    index: false,
    follow: false,
  },
}

export default async function Page({ params }) {
  const { id } = await params;
  if (!id) {
    return notFound();
  }

  const offer = whatCanDoWeDoOffers.find((offer) => offer.name === id);
  if (!offer) {
    return notFound();
  }

  return (<PageClient offer={offer} />);
}
