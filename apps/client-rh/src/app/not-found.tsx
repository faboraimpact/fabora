import { Navbar } from "@/src/components/landing/navbar"
import { Footer } from "@/src/components/landing/footer"
import { Hero404, PatternOverlay, DecorativeShapes } from "@/src/components/404"

export default function NotFound() {
  return (
  
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-24 md:px-6 md:pb-20 md:pt-32">
        <PatternOverlay />
        <Hero404 />
        <DecorativeShapes />
      </main>

  
  )
}
