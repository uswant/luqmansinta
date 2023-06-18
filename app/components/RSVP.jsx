import Image from "next/image"
import React from "react"
import WeddingGift from "./WeddingGift"

export default function RSVP() {
  return (
    <section id="rsvp">
      <WeddingGift />
      <div className="relative text-center mt-8 lg:mt-12">
        <Image
          src="/images/carousel-6.png"
          alt="Luqman & Sinta"
          width={1000}
          height={800}
          className="carousel-container relative"
          priority={true}
        />
        <div className="carousel-description text-light-300">
          <p className="body-medium-md">KAMI YANG BERBAHAGIA</p>
          <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
            Luqman & Sinta
          </p>
        </div>
        <Image
          src="/images/mask_bottom.webp"
          alt="Mask"
          width={1000}
          height={800}
          className="absolute top-0 z-10 mask"
        />
      </div>
    </section>
  )
}
