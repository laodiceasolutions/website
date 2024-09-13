import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['600',], style: "italic" });

export default function Page(params) {

  return (
    <div
      className={`${montserrat.className} text-9xl font-medium flex justify-center items-center absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`}
      title="Brand"
    >
      <span className="px-8 py-16 rounded-full border shadow-2xl border-gray-600 ">
        L
        {' '}
        <span className="text-primary">
          S
        </span>
      </span>
    </div>
  )
}