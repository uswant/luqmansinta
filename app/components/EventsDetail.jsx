import Image from "next/image"
import React from "react"

export default function EventsDetail() {
  return (
    <section className="mt-10" id="event">
      <div className="flex items-center w-full justify-center drop-shadow-xl">
        <div className="max-w-xs">
          <div className="bg-light-300 events-card p-10">
            <div className="text-center">
              <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
                Akad
              </p>
              <div className="mt-2">
                <p className="text-center heading-bold-h7">
                  - Jum&apos;at, 23 Juni 2023 -
                </p>
                <p className="text-center body-medium-md mt-1">
                  09.00 WIB - selesai
                </p>
              </div>
              <div className="mt-4">
                <div className="inline-flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <p className="ml-1 text-center body-bold-md">
                    Rumah Mempelai Wanita
                  </p>
                </div>
                <p className="text-center body-regular-md">
                  Ds. Gempol RT002 RW003, Balas Klumprik
                </p>
              </div>
              <a
                href="https://goo.gl/maps/Pf3tF6wdCNgeCooA6"
                className="body-regular-md bg-primary-300 hover:bg-light-300 text-light-300 hover:text-primary-400 py-3 px-2 lg:mt-10 mt-6 rounded-full inline-flex justify-center items-center w-[220px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="ml-1">Lihat Lokasi</span>
              </a>
              <Image
                className="rounded-2xl object-cover mx-auto mt-6 mb-2"
                width={400}
                height={400}
                quality={100}
                src="/images/bg-landing-v2.png"
                alt="Luqman & Sinta"
              />
            </div>
            <div className="text-center">
              <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
                Resepsi
              </p>
              <div className="mt-2">
                <p className="text-center heading-bold-h7">
                  - Sabtu, 24 Juni 2023 -
                </p>
                <p className="text-center body-medium-md mt-1">
                  15.00 WIB - selesai
                </p>
              </div>
              <div className="mt-4">
                <div className="inline-flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <p className="ml-1 text-center body-bold-md">
                    Gedung Serbaguna
                  </p>
                </div>
                <p className="text-center body-regular-md">
                  Ds. Gempol RT002 RW003, Balas Klumprik
                </p>
              </div>
              <a
                href="https://goo.gl/maps/FGkcQQAQRBJSGb9w8"
                className="body-regular-md bg-primary-300 hover:bg-light-300 text-light-300 hover:text-primary-400 py-3 px-2 lg:mt-6 mt-3 rounded-full inline-flex justify-center items-center w-[220px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="ml-1">Lihat Lokasi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center drop-shadow-xl mt-10">
        <div className="max-w-xs">
          <div className="bg-light-300 rounded-2xl p-10">
            <div className="photo-wrapper text-center p-2">
              <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
                Prokes
              </p>
              <div className="my-2">
                <p className="text-center body-regular-md mt-2">
                  Untuk menjaga acara pernikahan ini aman dari resiko penularan
                  Covid-19, mohon simak anjuran berikut sebelum anda hadir ke
                  lokasi:
                </p>
              </div>
              <Image
                className="rounded-full object-cover mx-auto"
                width={200}
                height={200}
                quality={100}
                src="/images/protokol-kesehatan.png"
                alt="Protokol Kesehatan"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
