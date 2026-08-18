import { FEATURES } from '@/constants/content.js'
import { AVATAR_STROKE, AVATAR_TONES } from '@/constants/avatarTones.js'
import Icon from '@/components/ui/Icon.jsx'
import Section, { Reveal, SectionHeading } from '@/components/ui/Section.jsx'

/**
 * Oltita mexanizm.
 *
 * Maketda tor va keng ekran kartochkasi boshqacha:
 *   • keng — nishon tepada, ostida sarlavha va matn;
 *   • tor  — nishon va sarlavha bir qatorda, matn ostida, matn hamda
 *     ba'zi sarlavhalar qisqargan variantda ("Tasdiqlangan profil",
 *     "Psixolog").
 * Bo'lim sarlavhasi ham tor ekranda qisqaradi.
 *
 * Figma: kartochka radius 20px, sarlavha 19/26 Bold, matn 15/24 fg-muted,
 * nishon 48×48 radius 14px.
 */
export default function Features() {
  return (
    <Section id="imkoniyatlar" tone="raised">
      <SectionHeading
        eyebrow={FEATURES.eyebrow}
        title={
          <>
            <span className="md:hidden">{FEATURES.titleShort}</span>
            <span className="hidden md:inline">{FEATURES.title}</span>
          </>
        }
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
        {FEATURES.items.map((item, i) => (
          <Reveal key={item.key} delay={(i % 3) * 70} className="h-full">
            <article className="h-full rounded-[20px] border border-line bg-panel p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 md:block">
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] md:h-12 md:w-12 md:rounded-[14px] ${AVATAR_TONES[item.tone]}`}
                >
                  <Icon name={item.icon} size={22} strokeWidth={AVATAR_STROKE} />
                </span>
                <h3 className="text-[19px] leading-[26px] font-bold text-ink md:mt-6">
                  <span className="md:hidden">{item.titleShort ?? item.title}</span>
                  <span className="hidden md:inline">{item.title}</span>
                </h3>
              </div>

              <p className="mt-3 text-[15px] leading-[24px] text-faint">
                <span className="md:hidden">{item.textShort}</span>
                <span className="hidden md:inline">{item.text}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
