import { cn } from '@/lib/utils.js'
import { BRAND } from '@/constants/content.js'
import BrandMark from '@/components/brand/BrandMark.jsx'

/**
 * Figmadagi lockup: belgi 37.76px, oraliq 4.72px, umumiy kenglik 186.48px.
 * Shundan matn ~20px chiqadi ("Raqamli" Medium + "Sovchi" ExtraBold).
 */
const TEXT_SIZES = {
  sm: 'text-[16px]',
  md: 'text-[20px]',
  lg: 'text-2xl',
  xl: 'text-3xl',
}

/**
 * To'liq lockup: belgi + so'z belgisi.
 *
 * So'z belgisi maketdagidek IKKI OG'IRLIKDA: "Raqamli" o'rtacha, "Sovchi"
 * juda qalin — rang esa bitta (`text-ink`). Footerda qisqa nom ishlatiladi
 * (`short`), u yerda faqat "Sovchi" turadi.
 */
export default function Logo({
  size = 'md',
  tone = 'default',
  variant = 'lockup',
  short = false,
  withTagline = false,
  href,
  className,
}) {
  const inverse = tone === 'inverse'
  const Tag = href ? 'a' : 'span'
  // "Raqamli Sovchi" → ["Raqamli", "Sovchi"]; nom bitta so'z bo'lsa ham buzilmaydi.
  const [firstWord, ...restWords] = BRAND.name.split(' ')

  return (
    <Tag
      {...(href ? { href } : null)}
      aria-label={short ? BRAND.short : BRAND.name}
      className={cn('inline-flex items-center gap-[4.72px]', className)}
    >
      <BrandMark size={size} tone={inverse ? 'inverse' : 'brand'} />

      {variant === 'lockup' ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'tracking-[-0.02em] whitespace-nowrap',
              TEXT_SIZES[size],
              inverse ? 'text-white' : 'text-ink',
            )}
          >
            {short ? (
              <span className="font-extrabold">{BRAND.short}</span>
            ) : (
              <>
                <span className="font-medium">{firstWord}</span>{' '}
                <span className="font-extrabold">{restWords.join(' ')}</span>
              </>
            )}
          </span>

          {withTagline ? (
            <span className={cn('mt-1.5 text-xs', inverse ? 'text-white/70' : 'text-muted')}>
              {BRAND.tagline}
            </span>
          ) : null}
        </span>
      ) : null}
    </Tag>
  )
}
