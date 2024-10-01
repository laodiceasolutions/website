import { notFound } from "next/navigation";
import PageClient from "./page.client";
import { whatCanDoWeDoOffers } from "@/utils/constants";

export const metadata= {
  robots: {
    index: false,
    follow: false,
  },
}

export default function Page(props) {
  if (!props?.params?.id) {
    return notFound();
  }

  const offer = whatCanDoWeDoOffers.find((offer) => offer.name === props.params.id);
  if (!offer) {
    return notFound();
  }

  return (<PageClient offer={offer} />);
}