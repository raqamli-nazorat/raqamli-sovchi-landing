import { useState } from 'react'

import { cn } from '@/lib/utils.js'
import { FAQ } from '@/constants/content.js'
import Icon from '@/components/ui/Icon.jsx'
import Section, { Reveal, SectionHeading } from '@/components/ui/Section.jsx'

/**
 * Savol-javob.
 *
 * Maketda kartochkalar OCHIQ holatda chizilgan — savol va javob birga
 * ko'rinadi. Shu sabab boshlang'ich holat ham ochiq: sahifa maketdagidek
 * ko'rinadi va javobni topish uchun bosish shart emas. "+" belgisi esa
 * ishlaydi — kerak bo'lsa javobni yig'ib qo'yish mumkin (ochiqda 45°
 * burilib "×" ga aylanadi).
 */
export default function Faq() {
  const [closed, setClosed] = useState(() => new Set())

  const toggle = (index) =>
    setClosed((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })

  return (
    <Section id="savollar">
      <SectionHeading eyebrow={FAQ.eyebrow} title={FAQ.title} />

      <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
        {FAQ.items.map((item, i) => {
          const open = !closed.has(i)

          return (
            <Reveal key={item.q} delay={(i % 2) * 60} className="h-full">
              <div className="h-full rounded-2xl bg-raised">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 px-6 pt-6 text-left"
                >
                  <span className="text-[17px] font-semibold text-ink">{item.q}</span>
                  <Icon
                    name="plus"
                    size={18}
                    className={cn(
                      'mt-1 flex-shrink-0 text-faint transition-transform duration-200',
                      open && 'rotate-45',
                    )}
                  />
                </button>

                {open ? (
                  <p className="px-6 pt-3 pb-6 text-[15px] leading-relaxed text-muted">{item.a}</p>
                ) : (
                  <div className="pb-6" />
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
