import { MATCH } from '@/constants/content.js'
import Icon from '@/components/ui/Icon.jsx'
import AppShot from '@/components/ui/AppShot.jsx'
import { APP_SHOTS } from '@/constants/media.js'
import Section, { Reveal } from '@/components/ui/Section.jsx'

export default function MatchTest() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-16">
        <Reveal className="flex justify-center lg:justify-start">
          <AppShot {...APP_SHOTS.match} className="sm:w-[300px]" />
        </Reveal>

        <Reveal delay={100}>
          <p className="text-[13px] font-semibold tracking-[0.16em] text-brand uppercase">
            {MATCH.eyebrow}
          </p>
          <h2 className="mt-3 text-[28px] leading-[1.16] font-extrabold tracking-[-0.8px] text-ink sm:text-[34px] md:text-[40px] md:leading-[1.14] md:tracking-[-1.2px]">
            {MATCH.title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {MATCH.subtitle}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {MATCH.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-line bg-raised px-5 py-5"
              >
                <p className="text-[26px] font-bold text-brand">{metric.value}</p>
                <p className="mt-1 text-[14px] text-muted">{metric.label}</p>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-3.5">
            {MATCH.points.map((point) => (
              <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <Icon name="check" size={17} className="mt-0.5 flex-shrink-0 text-brand" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
