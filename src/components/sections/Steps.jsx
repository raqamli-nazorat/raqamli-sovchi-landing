import { STEPS } from '@/constants/content.js'
import Section, { Reveal, SectionHeading } from '@/components/ui/Section.jsx'

/**
 * To'rt qadam.
 *
 * Maketda kartochka ichki tartibi breakpointga qarab o'zgaradi:
 *   • tor ekran — raqam va sarlavha BIR QATORDA, matn ostida, matnning
 *     o'zi ham qisqargan variant (`textShort`), izoh esa umuman yo'q;
 *   • keng ekran — raqam tepada, sarlavha va matn ostida (ustun).
 *
 * Figmadan olingan qiymatlar: kartochka radius 20px, to'ldirish 32px,
 * ichki oraliq 12px; raqam 15/20 ExtraBold oq, sarlavha 19/26 Bold,
 * matn 15/24 fg-muted.
 */
export default function Steps() {
  return (
    <Section id="qanday-ishlaydi" tone="raised">
      <SectionHeading
        eyebrow={STEPS.eyebrow}
        title={STEPS.title}
        subtitle={STEPS.subtitle}
        subtitleClassName="hidden md:block"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-4">
        {STEPS.items.map((step, i) => (
          <Reveal key={step.no} delay={i * 80} className="h-full">
            <article className="h-full rounded-[20px] border border-line bg-panel p-5 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 lg:block">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-brand text-[15px] leading-5 font-extrabold text-white">
                  {step.no}
                </span>
                <h3 className="text-[19px] leading-[26px] font-bold text-ink lg:mt-3">
                  {step.title}
                </h3>
              </div>

              <p className="mt-3 text-[15px] leading-[24px] text-faint">
                <span className="lg:hidden">{step.textShort}</span>
                <span className="hidden lg:inline">{step.text}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
