import Image from "next/image"
import React from "react"

const MasonryGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-4">
      <Image
        src="/images/carousel-2.png"
        alt="Image 1"
        width={100}
        height={100}
        quality={100}
        className="w-full h-auto rounded-xl object-cover"
      />
      <Image
        src="/images/carousel-3.png"
        alt="Image 2"
        width={100}
        height={100}
        quality={100}
        className="w-full h-auto rounded-xl object-cover"
      />
      <Image
        src="/images/carousel-4.png"
        alt="Image 3"
        width={100}
        height={100}
        quality={100}
        className="w-full h-auto rounded-xl object-cover"
      />
      <Image
        src="/images/carousel-5.png"
        alt="Image 4"
        width={100}
        height={100}
        quality={100}
        className="w-full h-auto rounded-xl object-cover"
      />
    </div>
  )
}

export default MasonryGallery
