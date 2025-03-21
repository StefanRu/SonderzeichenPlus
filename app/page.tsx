import { CharacterGrid } from "@/components/character-grid"
import { SearchBar } from "@/components/search-bar"
import { iso885915Characters } from "@/lib/characters"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">ISO 8859-15 Buchstaben</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Durchsuchen und finden Sie Buchstaben mit Variationen im ISO 8859-15 (Latin-9) Zeichensatz. Klicken Sie auf
          einen Buchstaben, um seine Variationen zu sehen, und dann auf eine Variation, um sie zu kopieren.
        </p>
      </header>

      <SearchBar />

      <main className="mt-8">
        <CharacterGrid characters={iso885915Characters} />
      </main>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>ISO 8859-15 Referenz © {new Date().getFullYear()}</p>
      </footer>

      <Toaster />
    </div>
  )
}

