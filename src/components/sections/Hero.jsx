import { HERO } from '@/constants/content.js'
import Button from '@/components/ui/Button.jsx'
import AppShot from '@/components/ui/AppShot.jsx'
import { APP_SHOTS } from '@/constants/media.js'
import { Reveal } from '@/components/ui/Section.jsx'

/**
 * Bosh ekran.
 *
 * Maketda tor va keng ekran uchun IKKI XIL yechim bor — shunchaki
 * torayish emas:
 *
 *   tor ekran (32/40)                 keng ekran (56/64)
 *   ─────────────────────────         ─────────────────────────
 *   hamma narsa markazda              chapga tekislangan
 *   nishon va matn qisqargan          to'liq matn
 *   tugmalar to'liq kenglikda         yonma-yon, o'z kengligida
 *   ro'yxat YO'Q                      uchta band ko'rinadi
 *   bitta ekran surati                ikkita, zinapoya bo'lib
 *
 * Qiymatlar Figmadan aynan olingani uchun [] ichida yozilgan: nishon 32px
 * baland / 14px yon to'ldirish, sarlavha −1px (tor) va −1.8px (keng)
 * letter-spacing, tugmalar 52px va 15/20 SemiBold.
 */
export default function Hero() {
  return (
    <section id="top" className="bg-raised px-4 pt-10 pb-14 sm:px-6 md:pt-20 md:pb-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 text-center lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:text-left">
        <Reveal>
          <span className="inline-flex h-8 items-center rounded-full bg-brand-soft px-3.5 text-[14px] leading-5 font-medium text-on-soft">
            <span className="lg:hidden">{HERO.badgeShort}</span>
            <span className="hidden lg:inline">{HERO.badge}</span>
          </span>

          <h1 className="mx-auto mt-6 max-w-[560px] text-[32px] leading-[40px] font-extrabold tracking-[-1px] text-ink sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:mx-0 lg:mt-7 lg:text-[56px] lg:leading-[64px] lg:tracking-[-1.8px]">
            {HERO.title}
          </h1>

          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[24px] text-muted lg:mx-0 lg:mt-6 lg:text-[18px] lg:leading-[30px]">
            <span className="lg:hidden">{HERO.descriptionShort}</span>
            <span className="hidden lg:inline">{HERO.description}</span>
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:mt-8 lg:justify-start">
            <Button
              as="a"
              href="#yuklab-olish"
              variant="primary"
              size="xl"
              className="w-full sm:w-auto"
            >
              {HERO.primaryCta}
            </Button>
            <Button as="a" href="#qanday-ishlaydi" size="xl" className="w-full sm:w-auto">
              {HERO.secondaryCta}
            </Button>
          </div>

          {/* Ro'yxat faqat keng maketda — tor ekran maketida u umuman yo'q. */}
          <ul className="mt-8 hidden flex-wrap gap-x-7 gap-y-3 lg:flex">
            {HERO.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[14px] leading-5 font-medium text-faint"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="flex justify-center lg:justify-end">
          <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
            {/* Chapdagi ekran pastroq: keng maketdagi zinapoya shunday. */}
            <AppShot {...APP_SHOTS.candidates} className="sm:mt-16" />
            {/* Ikkinchi ekran faqat keng maketda — tor ekranda joy yetmaydi. */}
            <AppShot {...APP_SHOTS.match} className="hidden sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
