import Image from "next/image"
import React from "react"

export default function NavBar() {
  return (
    <nav className="flex fixed z-50 w-full h-16 bottom-4 justify-center items-center mx-1">
      <div className="grid h-full max-w-lg lg:px-6 bg-primary-300 rounded-full grid-cols-5 mx-auto">
        <button
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Image src="/home.png" alt="Home" width={34} height={34} />
          <span className="sr-only">Home</span>
        </button>
        <button
          data-tooltip-target="tooltip-couple"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Image src="/couple.png" alt="Couple" width={34} height={34} />
          <span className="sr-only">Couple</span>
        </button>
        <button
          data-tooltip-target="tooltip-event"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Image src="/event.png" alt="Event" width={34} height={34} />
          <span className="sr-only">Event</span>
        </button>
        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Image src="/moment.png" alt="Home" width={34} height={34} />
          <span className="sr-only">Settings</span>
        </button>
        <button
          data-tooltip-target="tooltip-profile"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Image src="/rsvp.png" alt="Home" width={34} height={34} />
          <span className="sr-only">Profile</span>
        </button>
      </div>
    </nav>
  )
}
