import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('lang');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div tw="bg-gray-50 flex">
          <div tw="flex md:flex-row w-full py-12 px-4   items-center justify-center p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "Montserrat" }}>
              <span>Laodicea <span tw="ml-2 text-[#60CE70]">Solutions</span></span>
              {
                (!language || language === 'tr') ? (<>Yazılımınızı <span tw="font-extrabold text-[#60CE70]">{'{ }'}</span><br /> birlikte geliştirelim!</>) : (<>Lets make <span tw="font-extrabold text-[#60CE70] whitespace-nowrap">{'{ }'}</span> <br /> software together!</>)
              }
              {/* <span tw="text-gray-600">{language === 'tr' ? "Dijital Dönüşümünüzü Gerçekleştiriyoruz" : ""}</span> */}
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // fonts: [
      //   {
      //     name: 'Montserrat',
      //     data: fontData,
      //     style: 'normal',
      //   },
      // ],
    },
  );
}