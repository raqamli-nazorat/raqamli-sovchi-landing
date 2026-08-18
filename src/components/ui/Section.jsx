import { cn } from '@/lib/utils.js'
import { useReveal } from '@/hooks/useReveal.js'

/**
 * Sahifa bo'limi: bir xil vertikal bo'shliq, bir xil kenglik cheklovi.
 *
 * `tone="raised"` — och kulrang fon (maketda bo'limlar navbatma-navbat
 * oq va kulrang), `id` esa yuqoridagi menyudan o'tish uchun.
 */
export default function Section({ id, tone = 'plain', className, children }) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 px-4 py-16 sm:px-6 md:py-24',
        tone === 'raised' ? 'bg-raised' : 'bg-surface',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  )
}

/**
 * Bo'lim sarlavhasi: kichik ko'k yorliq + katta sarlavha + izoh.
 *
 * `align="center"` maketdagi xatti-harakatni takrorlaydi: TOR ekranda
 * matn chapga tekislanadi (o'qish qulay bo'lsin), keng ekranda esa
 * markazga o'tadi.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  // Ba'zi bo'limlarda maketda tor ekranda izoh umuman yo'q — o'shanda
  // `subtitleClassName="hidden md:block"` berib yuboriladi.
  subtitleClassName,
}) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        align === 'center' ? 'mx-auto max-w-5xl text-left md:text-center' : 'max-w-5xl text-left',
        className,
      )}
    >
      {/* Figma: 13/16 SemiBold, letter-spacing 0.9px */}
      {eyebrow ? (
        <p className="text-[13px] leading-4 font-semibold tracking-[0.9px] text-brand uppercase">
          {eyebrow}
        </p>
      ) : null}

      {/* Figma: 40/48 Bold, letter-spacing −1px (tor ekranda mutanosib kichrayadi) */}
      <h2 className="mt-3 text-[28px] leading-[36px] font-bold tracking-[-0.6px] text-ink sm:text-[34px] sm:leading-[42px] sm:tracking-[-0.8px] md:text-[40px] md:leading-[48px] md:tracking-[-1px]">
        {title}
      </h2>

      {/* Figma: 18/28 Regular, fg-secondary */}
      {subtitle ? (
        <p
          className={cn(
            'mt-5 text-[16px] leading-[26px] text-muted md:mt-6 md:text-[18px] md:leading-[28px]',
            // Izoh sarlavhadan tor: uzun qator o'qishni qiyinlashtiradi
            align === 'center' && 'mx-auto max-w-4xl',
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

/** Ekranga kirganda yumshoq ko'tarilib chiqadigan o'ram. */
export function Reveal({ delay = 0, className, children }) {
  const ref = useReveal()

  return (
    <div ref={ref} className={cn('reveal', className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
