import Image from "next/image"
import React from "react"
import { Link } from "react-scroll"

export default function NavBar() {
  return (
    <nav className="flex fixed z-50 w-full h-16 bottom-0 justify-center items-center">
      <div className="grid h-full max-w-lg lg:px-6 bg-primary-300 rounded-t-3xl grid-cols-5 mx-auto">
        <button
          data-tooltip-target="tooltip-home"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            <Image src="/images/home.png" alt="Home" width={34} height={34} />
            <span className="sr-only">Home</span>
          </Link>
        </button>
        <button
          data-tooltip-target="tooltip-couple"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Link
            activeClass="active"
            to="couple"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <Image
              src="/images/couple.png"
              alt="Couple"
              width={34}
              height={34}
            />
            <span className="sr-only">Couple</span>
          </Link>
        </button>
        <button
          data-tooltip-target="tooltip-event"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Link
            activeClass="active"
            to="event"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <Image src="/images/event.png" alt="Event" width={34} height={34} />
            <span className="sr-only">Event</span>
          </Link>
        </button>
        <button
          data-tooltip-target="tooltip-our-moments"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Link
            activeClass="active"
            to="our-moments"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <Image
              src="/images/moment.png"
              alt="Our Moments"
              width={34}
              height={34}
            />
          </Link>
          <span className="sr-only">Our Moments</span>
        </button>
        <button
          data-tooltip-target="tooltip-rsvp"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-primary-400 group"
        >
          <Link
            activeClass="active"
            to="rsvp"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <Image src="/images/rsvp.png" alt="rsvp" width={34} height={34} />
            <span className="sr-only">RSVP</span>
          </Link>
        </button>
      </div>
    </nav>
  )
}
