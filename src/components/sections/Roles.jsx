import { ROLES } from '@/constants/content.js'
import Icon from '@/components/ui/Icon.jsx'
import Section, { Reveal, SectionHeading } from '@/components/ui/Section.jsx'

export default function Roles() {
  return (
    <Section id="rollar">
      <SectionHeading eyebrow={ROLES.eyebrow} title={ROLES.title} subtitle={ROLES.subtitle} />

      <div className="mt-10 grid gap-5 md:mt-14 md:gap-6 lg:grid-cols-3">
        {ROLES.items.map((role, i) => (
          <Reveal key={role.key} delay={i * 80} className="h-full">
            <article className="h-full rounded-[20px] border border-line bg-panel p-6 md:p-8">
              {/* Rol nishoni — Figmadan, rangi rolga bog'liq (SVG ichida). */}
              <img src={role.icon} alt="" aria-hidden="true" className="h-10 w-auto" />

              {/* Figma: 22/30 Bold, letter-spacing −0.4px */}
              <h3 className="mt-6 text-[22px] leading-[30px] font-bold tracking-[-0.4px] text-ink">
                {role.name}
              </h3>

              <ul className="mt-6 space-y-3">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-[24px] text-body">
                    <Icon name="check" size={17} className="mt-0.5 flex-shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
