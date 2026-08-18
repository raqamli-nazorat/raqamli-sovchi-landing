import { PRIVACY } from '@/constants/content.js'
import { AVATAR_STROKE, AVATAR_TONES } from '@/constants/avatarTones.js'
import Icon from '@/components/ui/Icon.jsx'
import Section, { Reveal, SectionHeading } from '@/components/ui/Section.jsx'

/**
 * Maxfiylik bo'limi — ikkita kartochka.
 *
 * Chapda kafolatlar ro'yxati, o'ngda parda tartibining uch bosqichi
 * (bosqichlar ingichka chiziq bilan ajratilgan). Kartochkalar balandligi
 * TENGLASHTIRILMAYDI (`items-start`): maketda ham har biri o'z matniga
 * qarab o'lchamda turadi.
 *
 * Figma: kartochka radius 20px / to'ldirish 32px; kartochka sarlavhasi
 * 20/28 Bold; kafolat bandlari 15/24 fg-body; bosqich nomi 16/22 SemiBold,
 * izohi 14/21 fg-muted; nishon 44×44.
 */
export default function Privacy() {
  return (
    <Section id="xavfsizlik">
      <SectionHeading
        eyebrow={PRIVACY.eyebrow}
        title={PRIVACY.title}
        subtitle={
          <>
            <span className="md:hidden">{PRIVACY.subtitleShort}</span>
            <span className="hidden md:inline">{PRIVACY.subtitle}</span>
          </>
        }
      />

      <div className="mt-10 grid items-start gap-5 md:mt-14 md:gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-[20px] border border-line bg-panel p-6 md:p-8">
            <h3 className="text-[20px] leading-7 font-bold text-ink">{PRIVACY.guarantees.title}</h3>

            <ul className="mt-5 space-y-3">
              {PRIVACY.guarantees.items.map((item) => (
                <li
                  key={item.text}
                  // Maketda oxirgi band faqat keng ekranda ko'rinadi.
                  className={`flex gap-3 ${item.desktopOnly ? 'hidden md:flex' : ''}`}
                >
                  <Icon name="check" size={17} className="mt-0.5 flex-shrink-0 text-brand" />
                  <span className="text-[15px] leading-[24px] text-body">
                    <span className="md:hidden">{item.textShort ?? item.text}</span>
                    <span className="hidden md:inline">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="rounded-[20px] border border-line bg-panel p-6 md:p-8">
            <h3 className="text-[20px] leading-7 font-bold text-ink">{PRIVACY.curtain.title}</h3>

            <ol className="mt-6 divide-y divide-line border-t border-line">
              {PRIVACY.curtain.steps.map((step) => (
                <li key={step.name} className="flex gap-4 py-5 last:pb-0">
                  <span
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] ${AVATAR_TONES[step.tone]}`}
                  >
                    <Icon name={step.icon} size={20} strokeWidth={AVATAR_STROKE} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[16px] leading-[22px] font-semibold text-ink">{step.name}</p>
                    <p className="mt-1 text-[14px] leading-[21px] text-faint">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
