import Navbar          from '@/components/layout/Navbar'
import Footer          from '@/components/layout/Footer'
import Hero            from '@/components/sections/Hero'
import Manifesto       from '@/components/sections/Manifesto'
import FleetShowcase   from '@/components/sections/FleetShowcase'
import ServiceShowcase from '@/components/sections/ServiceShowcase'
import Calculator      from '@/components/sections/Calculator'
import Contact         from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      {/* Ambient orbs */}
      <div className="orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Manifesto />
        <FleetShowcase />
        <ServiceShowcase />
        <Calculator />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
