import Navbar      from '@/components/layout/Navbar'
import Footer      from '@/components/layout/Footer'
import Hero        from '@/components/sections/Hero'
import Stats       from '@/components/sections/Stats'
import HowItWorks  from '@/components/sections/HowItWorks'
import Fleet       from '@/components/sections/Fleet'
import Estimateur  from '@/components/sections/Estimateur'
import TarifsFixes from '@/components/sections/TarifsFixes'
import CtaBanner   from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Fleet />
        <Estimateur />
        <TarifsFixes />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
