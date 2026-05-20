import Navbar    from '@/components/layout/Navbar'
import Footer    from '@/components/layout/Footer'
import Hero      from '@/components/sections/Hero'
import Fleet     from '@/components/sections/Fleet'
import Services  from '@/components/sections/Services'
import Calculator from '@/components/sections/Calculator'
import Contact   from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      {/* Ambient background orbs */}
      <div className="orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Fleet />
        <Services />
        <Calculator />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
