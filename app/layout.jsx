import NavBar from "./components/NavBar"
import "./globals.css"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "The Wedding of Luqman and Sinta",
  description: "A Wedding Invitation of Luqman and Sinta",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
