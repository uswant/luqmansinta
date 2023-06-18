import Image from "next/image"
import React from "react"
import CopyButton from "./CopyButton"

export default function WeddingGift() {
  const atmLuqman = "6720491808"
  const atmSinta = "6720719582"
  return (
    <section className="mt-10">
      <div className="flex items-center w-full justify-center drop-shadow-xl">
        <div className="max-w-xs">
          <div className="bg-light-300 rounded-2xl p-6">
            <div className="photo-wrapper text-center pt-8">
              <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
                Wedding Gift
              </p>
              <div className="my-2">
                <p className="text-center body-medium-md mt-2">
                  Silahkan transfer hadiah melalui nomor rekening berikut :
                </p>
              </div>
            </div>
            <Image
              className="object-cover mx-auto my-4"
              width={500}
              height={500}
              quality={100}
              src="/images/atm-luqman.png"
              alt="No Rekening Luqman"
            />
            <div className="flex justify-center">
              <CopyButton accountNumber={atmLuqman} />
            </div>
            <Image
              className="object-cover mx-auto my-4"
              width={500}
              height={500}
              quality={100}
              src="/images/atm-sinta.png"
              alt="No Rekening Sinta"
            />
            <div className="flex justify-center">
              <CopyButton accountNumber={atmSinta} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center lg:mt-20 mt-16">
        <p className="md:mx-40 mx-10 mb-2 body-regular-md">
          “Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
          kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan
          terima kasih.”
        </p>
        <Image
          src="/images/flower.webp"
          alt="Flower"
          width={200}
          height={100}
          className="mt-6"
        />
      </div>
    </section>
  )
}
