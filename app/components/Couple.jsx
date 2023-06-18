import React from "react"
import GroomBrideProfile from "./GroomBrideProfile"

export default function Couple() {
  return (
    <section
      id="couple"
      className="grid grid-cols-1 md:grid-cols-2 lg:gap-0 gap-10 mb-8 lg:mb-16"
    >
      <GroomBrideProfile
        status="Groom"
        gender="Putra"
        src="/images/luqman.png"
        name="Luqman Febriansyah"
        parent="Bpk. Yasnan & Ibu Sami (Almh)"
      />
      <GroomBrideProfile
        status="Bride"
        gender="Putri"
        src="/images/sinta.png"
        name="Yasinta Ega Mawarni S.Gz"
        parent="Bpk. Yasturi & Ibu Suwarni"
      />
    </section>
  )
}
