import Image from "next/image"
import React from "react"
import MasonryGallery from "./MansoryGallery"

export default function OurMoments() {
  return (
    <section className="mt-10" id="our-moments">
      <div className="flex items-center w-full justify-center drop-shadow-xl">
        <div className="max-w-xs">
          <div className="bg-light-300 rounded-2xl p-6">
            <div className="photo-wrapper text-center pt-8">
              <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
                Our Moments
              </p>
              <div className="my-2">
                <p className="text-center body-bold-md mt-2">
                  &quot;Mencintai bukan untuk menyamai, tetapi keikhlasan
                  menerima perbedaan.&quot;
                </p>
              </div>
              <MasonryGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
