"use client"

import { useState } from "react"
import { Input } from "@fabora/ui/components/input"
import { Badge } from "@fabora/ui/components/badge"
import { Search } from "lucide-react"

interface FaqHeroProps {
  onSearch?: (query: string) => void
}

export function FaqHero({ onSearch }: FaqHeroProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearch?.(value)
  }

  return (
    <section className="relative overflow-hidden px-4 py-12 md:px-8 md:py-20 lg:py-32">
      {/* Background Blurs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-primary blur-3xl md:size-96" />
        <div className="absolute top-1/2 -right-24 size-64 rounded-full bg-accent blur-3xl md:size-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <Badge
          variant="secondary"
          className="mb-4 bg-accent/10 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase md:mb-6"
        >
          Centre d&apos;assistance
        </Badge>

        {/* Title */}
        <h1 className="font-headline mb-6 text-4xl leading-tight font-black tracking-tight text-foreground md:mb-10 md:text-5xl lg:text-7xl">
          Comment pouvons-nous <br className="hidden md:block" />
          <span className="text-primary">vous aider ?</span>
        </h1>

        {/* Search Input */}
        <div className="group relative mx-auto max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center md:left-5">
            <Search className="size-5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Rechercher une réponse..."
            value={searchQuery}
            onChange={handleSearch}
            className="h-14 rounded-xl border-0 bg-background pr-6 pl-12 text-base shadow-2xl shadow-foreground/5 transition-all focus-visible:ring-2 focus-visible:ring-primary/20 md:h-16 md:pl-14 md:text-lg"
          />
        </div>
      </div>
    </section>
  )
}
