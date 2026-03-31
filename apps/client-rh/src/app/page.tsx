import {
  Navbar,
  HeroSection,
  ServiceGrid,
  ValuesSection,
  Footer,
} from "@/src/components/landing"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="selection:bg-muted">
        <HeroSection />
        <ServiceGrid />
        <ValuesSection />
      </main>
      <Footer />
    </>
  )
}
