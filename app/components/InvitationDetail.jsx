import React from "react"
import NavBar from "./NavBar"
import Music from "./Music"
import ImageCarousel from "./ImageCarousel"
import EventsDetail from "./EventsDetail"
import OurMoments from "./OurMoments"
import RSVP from "./RSVP"
import Couple from "./Couple"

export default function InvitationDetail() {
  return (
    <div>
      <NavBar />
      <Music />
      <ImageCarousel />
      <Couple />
      <EventsDetail />
      <OurMoments />
      <RSVP />
    </div>
  )
}
