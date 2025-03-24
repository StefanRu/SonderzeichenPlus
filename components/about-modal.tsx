"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Info } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function AboutModal() {
  const { t } = useLanguage()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary/30 hover:border-primary"
          aria-label="Info"
        >
          <Info className="h-4 w-4 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-4 text-sm">
        <div className="space-y-3">
          <h3 className="font-medium text-base">{t("about_title")}</h3>
          <p className="text-muted-foreground leading-relaxed">{t("about_description")}</p>
          <p className="text-xs text-muted-foreground pt-2 border-t">{t("copyright")}</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

