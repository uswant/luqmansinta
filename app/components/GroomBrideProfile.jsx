import Image from "next/image"
import React from "react"

export default function GroomBrideProfile({
  status,
  gender,
  src,
  name,
  parent,
}) {
  return (
    <div className="flex items-center w-full justify-center drop-shadow-xl">
      <div className="max-w-xs">
        <div className="bg-light-300 rounded-2xl p-10">
          <div className="photo-wrapper text-center p-2">
            <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
              {status}
            </p>
            <Image
              className="rounded-full object-cover mx-auto"
              width={200}
              height={200}
              quality={100}
              src={src}
              alt={name}
            />
          </div>
          <div className="mt-2">
            <p className="text-center heading-bold-h6">{name}</p>
            <div className="text-center body-medium-md mt-2">
              <p>{gender} dari :</p>
              <p className="body-bold-md">{parent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
