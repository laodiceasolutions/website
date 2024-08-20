import { ApplicationContext } from '@/context/applicationContext';
import { Orbitron } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
const developmentTypes = [
  {
    name: 'webDevelopment',
    label: 'Website Development',
  },
  {
    name: 'mobileDevelopment',
    label: 'Mobile Development',
  },
  {
    name: 'productDesign',
    label: 'Product Design',
  },
]

export default function ContactUsForm() {
  const { dictionary } = useContext(ApplicationContext);
  return (
    <form className={`${orbitron.className} flex flex-col justify-start items-start gap-5 whitespace-pre-wrap overflow-x-clip`}>
      <h6 className={` text-[#3f3f3f] text-2xl md:text-3xl whitespace-pre pl-2 md:pl-0`}>{dictionary.landingPage.contactUs.WCDFY}</h6>
      <div className="grid grid-cols-12 gap-2 md:gap-10">
        <div className="col-span-full lg:col-span-6 flex flex-col justify-start items-center md:items-start gap-5">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-10 mb-5">
            {
              developmentTypes.map((type) => (
                <button
                  key={type.name}
                  type="button"
                  role="button"
                  name="productType"
                  className="px-8 py-4 border border-gray-200 rounded-3xl text-lg text-[#3f3f3f] hover:text-white hover:bg-[#3f3f3f] focus:bg-[#3f3f3f] focus:text-white"
                >
                  {dictionary.landingPage.contactUs[type.name]}
                </button>
              ))
            }
          </div>
          <input
            className="w-full max-w-xs md:max-w-none border-b border-b-[#3f3f3f] py-2.5 m-5 outline-none"
            placeholder={dictionary.landingPage.contactUs.name}
            name="name"
            type="text"
            required
          />
          <input
            className="w-full max-w-xs md:max-w-none border-b border-b-[#3f3f3f] py-2.5 m-5 outline-none"
            placeholder={dictionary.landingPage.contactUs.email}
            name="email"
            type="email"
            required
          />
          <textarea
            className="w-full max-w-xs md:max-w-none border-b border-b-[#3f3f3f] py-2.5 m-5 outline-none"
            placeholder={dictionary.landingPage.contactUs.projectDetail}
            name="details"
            type="text"
            required
            rows={2}
          />
          <button
            type="submit"
            role="form"
            name="productType"
            className="px-8 py-4 border border-gray-200 rounded-3xl text-lg text-white hover:shadow-lg bg-secondary focus:bg-primary"
          >
            <Image
              src="/vectors/arrow-trape.svg"
              alt="Arrow Trapezoid"
              width={58}
              height={20}
            />
          </button>
        </div>
        <div className="col-span-full lg:col-span-6 flex flex-col justify-between mb-5 p-5">
          <div className="flex justify-center items-center">
            <Image
              width={196}
              height={207}
              src="/vectors/grid-primary.svg"
              alt="illustration grid-primary"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="info" className="text-[#898989] text-3xl font-semibold">{dictionary.landingPage.contactUs.email}</label>
            <a id="info" className="text-[#3f3f3f] text-xl" href="mailto:hello@laodiceasolutions.com">hello@laodiceasolutions.com</a>
          </div>
        </div>
      </div>
    </form>
  )
}