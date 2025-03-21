import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Sonderzeichen Plus Plus",
  description: "Special characters from ISO 8859-1 and Latin Extended-A",
  authors: [{ name: "Stefan Rutz", url: "https://github.com/StefanRu" }],
  creator: "v0 by Vercel",
  keywords: ["special characters", "ISO 8859-1", "Latin Extended-A", "Sonderzeichen"],
  openGraph: {
    title: "Sonderzeichen Plus Plus",
    description: "Special characters from ISO 8859-1 and Latin Extended-A",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="developer" content="Coded with v0 under the supervision of Stefan Rutz" />
        <meta name="github" content="https://github.com/StefanRu" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'