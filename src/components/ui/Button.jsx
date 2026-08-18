import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils.js'

/**
 * Sahifadagi yagona tugma.
 *
 * O'lchamlar Figmadan aynan olingan: burchak radiusi 14px, yon to'ldirish
 * 28px, balandliklar 44 / 52px. Shuning uchun bu yerda Tailwind shkalasi
 * emas, aniq qiymatlar turibdi — maket bilan chetlashib ketmasin.
 *
 * `as` orqali `<a>` ga aylanadi — landingdagi tugmalarning ko'pi aslida
 * bo'limga olib boruvchi havola, lekin ko'rinishi tugma bo'lishi kerak.
 */
const button = cva(
  [
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px]',
    'whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-brand text-brand-ink hover:bg-brand-hover',
        secondary: 'border border-line bg-panel text-ink hover:bg-hover',
        ghost: 'text-ink hover:bg-hover',
        light: 'bg-white text-[#0a0a0a] hover:bg-white/90',
        outlineLight: 'border border-white/40 text-white hover:bg-white/10',
      },
      size: {
        sm: 'h-9 px-4 text-[14px] font-medium',
        // Sarlavhadagi tugma: 44×28, 15/20 Medium
        md: 'h-11 px-7 text-[15px] leading-5 font-medium',
        lg: 'h-12 px-7 text-[15px] font-medium',
        // Hero tugmalari: 52×28, 16px
        xl: 'h-[52px] px-7 text-[15px] leading-5 font-semibold',
        icon: 'h-10 w-10 flex-shrink-0',
      },
    },
    defaultVariants: { variant: 'secondary', size: 'md' },
  },
)

export default function Button({ as: Tag = 'button', variant, size, className, ...rest }) {
  return (
    <Tag
      // `type` faqat haqiqiy tugmada ma'noga ega — `<a>` da React ogohlantiradi.
      {...(Tag === 'button' ? { type: 'button' } : null)}
      className={cn(button({ variant, size }), className)}
      {...rest}
    />
  )
}
