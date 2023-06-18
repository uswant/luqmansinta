"use client"
import { useSearchParams } from "next/navigation"
import React from "react"

export default function InvitationReceiver() {
  const toParams = useSearchParams()

  const to = toParams.get("to")
  return (
    <p className="heading-bold-h5 lg:my-4 my-3">{to || "Penerima Undangan"}</p>
  )
}
