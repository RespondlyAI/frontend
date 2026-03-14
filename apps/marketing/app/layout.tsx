import "./globals.css"
import { Geist } from "next/font/google"
import { Navbar1 } from "@/components/blocks/navbar1"

const font = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-black text-white min-h-screen`}>
        <Navbar1 />
        {children}
      </body>
    </html>
  )
}