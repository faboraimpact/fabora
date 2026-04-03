import { HeroSection, ServiceGrid } from "@/components/landing"

export default function Home() {
  return (
    <main className="selection:bg-muted">
      <HeroSection />
      <ServiceGrid />
    </main>
  )
}
