import { cn, formatSum } from '@/lib/utils.js'
import { PRICING } from '@/constants/content.js'
import Button from '@/components/ui/Button.jsx'
import Icon from '@/components/ui/Icon.jsx'
import Section, { Reveal, SectionHeading } from '@/components/ui/Section.jsx'

export default function Pricing() {
  return (
    <Section id="narxlar" tone="raised">
      <SectionHeading eyebrow={PRICING.eyebrow} title={PRICING.title} subtitle={PRICING.subtitle} />

      <div className="mt-12 grid items-start gap-5 md:mt-14 lg:grid-cols-3">
        {PRICING.plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 80}>
            <article
              className={cn(
                'flex flex-col rounded-2xl bg-panel p-6 md:p-8',
                // Maketda ajratilgan tarif faqat KO'K RAMKA bilan belgilangan —
                // baland ko'tarilmaydi va soya olmaydi.
                plan.featured ? 'border-2 border-brand' : 'border border-line',
              )}
            >
              <div className="flex items-center gap-3">
                <h3 className="text-[19px] font-semibold text-ink">{plan.name}</h3>
                {plan.badge ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-[13px] font-medium text-brand">
                    <Icon name="star" size={13} />
                    {plan.badge}
                  </span>
                ) : null}
              </div>

              <p className="mt-5 text-[30px] font-bold tracking-tight text-ink md:text-[34px]">
                {formatSum(plan.price)} soʻm
                {plan.period ? <span className="font-bold text-ink"> {plan.period}</span> : null}
              </p>
              <p className="mt-3 text-[15px] text-muted">{plan.caption}</p>

              <ul className="mt-7 space-y-3.5">
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                    <Icon name="check" size={17} className="mt-0.5 flex-shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Kartochka o'z matniga qarab o'lchamda turadi — cho'zilmaydi,
                  shuning uchun tugma ro'yxatdan keyin darhol keladi. */}
              <div className="pt-8">
                <Button
                  variant={plan.featured ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-left text-[13px] text-faint md:text-center">{PRICING.note}</p>
    </Section>
  )
}
