import { formatSum, initials } from '@/lib/utils.js'
import { PSYCHOLOGISTS } from '@/constants/content.js'
import Button from '@/components/ui/Button.jsx'
import Icon from '@/components/ui/Icon.jsx'
import Section, { Reveal, SectionHeading } from '@/components/ui/Section.jsx'

/** Avatar doirasi ranglari — maketda har bir mutaxassis o'z ohangida. */
const TONES = {
  violet: 'bg-[#efeafe] text-[#6d4fe0] dark:bg-[#221c3a] dark:text-[#a892f7]',
  blue: 'bg-[#e8f2fe] text-[#0474f3] dark:bg-[#10233c] dark:text-[#6fb0f9]',
  green: 'bg-[#e3f7ec] text-[#15803d] dark:bg-[#12261a] dark:text-[#4ade80]',
}

export default function Psychologists() {
  return (
    <Section id="psixolog">
      <SectionHeading
        eyebrow={PSYCHOLOGISTS.eyebrow}
        title={PSYCHOLOGISTS.title}
        subtitle={PSYCHOLOGISTS.subtitle}
      />

      <div className="mt-12 grid gap-5 md:mt-14 lg:grid-cols-3">
        {PSYCHOLOGISTS.items.map((person, i) => (
          <Reveal key={person.name} delay={i * 80} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6">
              <div className="flex items-center gap-3.5">
                <span
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-[15px] font-semibold ${TONES[person.tone]}`}
                >
                  {initials(person.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[17px] font-semibold text-ink">{person.name}</p>
                  <p className="truncate text-[14px] text-muted">{person.role}</p>
                </div>
              </div>

              <p className="mt-5 flex items-center gap-2 text-[15px] text-ink">
                <Icon name="clock" size={16} className="flex-shrink-0 text-faint" />
                {formatSum(person.price)} so‘m · {person.duration}
              </p>

              <div className="mt-auto pt-5">
                <Button size="lg" className="w-full">
                  {PSYCHOLOGISTS.cta}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
