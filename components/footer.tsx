"use client"

import { useLanguage } from "@/context/language-context"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Footer() {
  const { t } = useLanguage()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only render theme-aware content client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="py-6 border-t mt-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center justify-center md:justify-start">
            <a
              href="https://www.ak-bs.ch"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Ausgleichskasse Basel-Stadt"
              className="transition-opacity hover:opacity-80 focus:opacity-100 focus:outline-none"
            >
              <Image
                src="/images/logo-akbs.svg"
                alt="AKBS Logo"
                width={120}
                height={45}
                className={`h-auto ${mounted && resolvedTheme === "dark" ? "dark-logo" : ""}`}
              />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">{t("copyright")}</p>
            <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} Sonderzeichen Plus Plus</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

