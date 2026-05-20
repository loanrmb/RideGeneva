import Navbar     from '@/components/layout/Navbar'
import Footer     from '@/components/layout/Footer'
import Hero       from '@/components/sections/Hero'
import Calculator from '@/components/sections/Calculator'
import FleetShowcase from '@/components/sections/FleetShowcase'
import Services   from '@/components/sections/Services'
import Contact    from '@/components/sections/Contact'
import SeoBlock   from '@/components/sections/SeoBlock'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — image + intro */}
        <Hero />
        {/* 2. Estimateur + tarifs fixes */}
        <Calculator />
        {/* 3. Flotte — tab scroll */}
        <FleetShowcase />
        {/* 4. Services — Apple style */}
        <Services />
        {/* 5. CTA */}
        <Contact />
        {/* 6. SEO */}
        <SeoBlock />
      </main>
      <Footer />
    </>
  )
}
