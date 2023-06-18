import Image from "next/image"
import React, { useCallback } from "react"

export default function ImageCarousel() {
  return (
    <section className="mb-8 lg:mb-16" id="home">
      <div className="relative text-center">
        <Image
          src="/images/carousel-1.png"
          alt="Luqman & Sinta"
          width={1000}
          height={800}
          className="carousel-container relative"
          priority={true}
        />
        <div className="carousel-description text-light-300">
          <p className="body-medium-md">THE WEDDING OF</p>
          <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
            Luqman & Sinta
          </p>
        </div>
        <Image
          src="/images/mask.webp"
          alt="Mask"
          width={1000}
          height={800}
          className="absolute bottom-0 z-10 mask"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center mt-4">
        <Image
          src="/images/flower.webp"
          alt="Flower"
          width={200}
          height={100}
        />
        <p className="body-medium-l md:w-6/12 my-6 mx-10">
          وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
          لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
          إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </p>
        <p className="md:mx-40 mx-10 mb-2 body-regular-md">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan
          merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.”
        </p>
        <p className="md:mx-40 mb-15 body-bold-md">(QS Ar-Rum : 21)</p>
      </div>
    </section>
  )
}
