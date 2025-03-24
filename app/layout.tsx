import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import { Toaster } from "@/components/ui/toaster"
import { ConsoleCredits } from "@/components/console-credits"
import { CompactModeProvider } from "@/context/compact-mode-context"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Sonderzeichen Plus Plus",
  description: "Special characters from ISO 8859-1 and Latin Extended-A",
  authors: [{ name: "Coded by V0 supervised by Rutz Stefan" }],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <CompactModeProvider>
              <div className="flex flex-col min-h-screen">
                <div className="flex-grow">{children}</div>
              </div>
              <Toaster />
              <ConsoleCredits />
            </CompactModeProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'