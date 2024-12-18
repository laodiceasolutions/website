import Image from "next/image";

export default function PhotoGrid() {

  return (
    <div className="flex justify-center items-center gap-3 relative p-1 md:p-0">
      <div className="flex-[50%]">
        <Image
          src="/team/team-1.png"
          width={321}
          height={333}
          className=""
          alt="Our collegues"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3 flex-[50%]">
        <Image
          src="/team/team-2.png"
          width={321}
          height={333}
          className=""
          alt="Our collegues"
        />
        <Image
          src="/team/team-3.png"
          width={321}
          height={333}
          className=""
          alt="Our collegues"
        />
      </div>
      <div className="absolute -left-20 -bottom-12 border-2 border-dashed border-laodicea-primary rounded-full py-10 px-5">
        <Image
          src="/vectors/asteriks.svg"
          width={118}
          height={118}
          className="z-20"
          alt="Asteriks"
        />
      </div>
    </div>
  )
}
