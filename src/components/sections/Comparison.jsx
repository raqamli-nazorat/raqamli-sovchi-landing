import { COMPARISON } from '@/constants/content.js'
import Icon from '@/components/ui/Icon.jsx'
import Section, { Reveal, SectionHeading } from '@/components/ui/Section.jsx'

/**
 * "Muammo — yechim" jadvali.
 *
 * Maketda qatorlar JUFTLIK: chapda kulrang muammo kartochkasi, o'ngda ko'k
 * yechim kartochkasi va ular bir chiziqdan boshlanadi. Ma'lumot ham juftlik
 * ko'rinishida saqlanadi (`rows`), ikkita alohida ro'yxat emas — aks holda
 * uzun matn juftlikni siljitib yuborardi.
 *
 * Kartochkalar balandligi TENGLASHTIRILMAYDI (`items-start`): Figmada ham
 * chap va o'ng kartochka har biri o'z matniga qarab o'lchamda turadi.
 *
 * Figmadan olingan qiymatlar: radius 18px, to'ldirish 26px/28px, oraliq
 * 18px, sarlavha 18/26 Bold, matn 15/24.
 */
export default function Comparison() {
  return (
    <Section>
      <SectionHeading
        align="left"
        eyebrow={COMPARISON.eyebrow}
        title={COMPARISON.title}
        subtitle={COMPARISON.subtitle}
      />

      <div className="mt-14 space-y-[18px] md:mt-16">
        {COMPARISON.rows.map((row, i) => (
          <Reveal key={row.problem.title} delay={i * 70}>
            <div className="grid items-start gap-[18px] md:grid-cols-2">
              <article className="rounded-[18px] border border-line bg-raised px-7 py-[26px]">
                <div className="flex items-center gap-2.5">
                  <Icon name="clock" size={18} className="flex-shrink-0 text-faint" />
                  <h3 className="text-[18px] leading-[26px] font-bold text-ink">
                    {row.problem.title}
                  </h3>
                </div>
                <p className="mt-2 text-[15px] leading-[24px] text-faint">{row.problem.text}</p>
              </article>

              <article className="rounded-[18px] bg-brand-soft px-7 py-[26px]">
                <div className="flex items-center gap-2.5">
                  <Icon name="check" size={18} className="flex-shrink-0 text-on-soft" />
                  <h3 className="text-[18px] leading-[26px] font-bold text-on-soft">
                    {COMPARISON.solutionLabel}
                  </h3>
                </div>
                <p className="mt-2 text-[15px] leading-[24px] text-ink">{row.solution}</p>
              </article>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
