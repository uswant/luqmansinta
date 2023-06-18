import "./globals.css"
import { Montserrat } from "next/font/google"
import localFont from "next/font/local"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})
const charlotte = localFont({
  src: "../public/fonts/Charlotte-Southern.woff",
  variable: "--font-charlotte",
  display: "swap",
})

export const metadata = {
  title: "The Wedding of Luqman and Sinta",
  description: "A Wedding Invitation of Luqman and Sinta",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${charlotte.variable}`}>
      <body>{children}</body>
    </html>
  )
}
