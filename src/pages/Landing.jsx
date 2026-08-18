import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Hero from '@/components/sections/Hero.jsx'
import Stats from '@/components/sections/Stats.jsx'
import Comparison from '@/components/sections/Comparison.jsx'
import Steps from '@/components/sections/Steps.jsx'
import Roles from '@/components/sections/Roles.jsx'
import Features from '@/components/sections/Features.jsx'
import MatchTest from '@/components/sections/MatchTest.jsx'
import Privacy from '@/components/sections/Privacy.jsx'
import Psychologists from '@/components/sections/Psychologists.jsx'
import Pricing from '@/components/sections/Pricing.jsx'
import Faq from '@/components/sections/Faq.jsx'
import CtaBanner from '@/components/sections/CtaBanner.jsx'

/**
 * Sahifa tartibi.
 *
 * Ketma-ketlik maketdagidek: muammo → yechim → qadamlar → rollar →
 * imkoniyatlar → ishonch → narx → savol. Har bir bo'lim mustaqil komponent,
 * shuning uchun o'rnini almashtirish uchun shu ro'yxatdagi qatorni ko'chirish
 * kifoya.
 */
export default function Landing() {
  return (
    <div className="min-h-dvh bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Comparison />
        <Steps />
        <Roles />
        <Features />
        <MatchTest />
        <Privacy />
        <Psychologists />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
