import { CharacterGrid } from "@/components/character-grid"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitch } from "@/components/theme-switch"
import { AboutModal } from "@/components/about-modal"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-6 max-w-6xl">
      <div className="flex justify-end mb-4 items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitch />
        <AboutModal />
      </div>
      <Header />
      <CharacterGrid />
    </main>
  )
}

