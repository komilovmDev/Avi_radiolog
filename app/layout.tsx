import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AviRadiology — Radiologlar uchun AI yordamchisi",
  description:
    "DICOM tasvirlarini tahlil qiladi, patologiyalarni aniqlashga yordam beradi va hisobot tayyorlash jarayonini tezlashtiradi. Radiologlar uchun yangi avlod sun'iy intellekt platformasi.",
  keywords: [
    "radiologiya",
    "AI",
    "DICOM",
    "PACS",
    "tibbiy tasvirlash",
    "sun'iy intellekt",
    "hisobot",
  ],
  openGraph: {
    title: "AviRadiology — Radiologlar uchun AI yordamchisi",
    description:
      "DICOM tasvirlarini tahlil qiladi, patologiyalarni aniqlashga yordam beradi va hisobot tayyorlash jarayonini tezlashtiradi.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
