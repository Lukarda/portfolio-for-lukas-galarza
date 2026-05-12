import { Terminal } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="font-mono text-xs">
            {`${year} Lukas Galarza`}
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {"Hecho con Next.js, Tailwind CSS & mucho cafe"}
        </p>
      </div>
    </footer>
  )
}
