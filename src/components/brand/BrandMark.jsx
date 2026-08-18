import { cn } from '@/lib/utils.js'

/**
 * Brend belgisi.
 *
 * Geometriya O'YLAB TOPILMAGAN — `public/logoIcon.svg` (dizayner bergan
 * asl fayl) dan bir-bir ko'chirilgan, shuning uchun React'dagi belgi,
 * favicon va bosma fayl aynan bir xil chiziladi. Belgi o'zgarsa, ikkala
 * joyni birga yangilang.
 *
 * Rang `currentColor`: plitka ichida oq, plitkasiz holda brend ko'ki.
 * viewBox asl fayldagidek — belgi atrofidagi bo'shliq ham o'sha faylniki.
 */
export function BrandGlyph({ className }) {
  return (
    <svg viewBox="0 0 37.76 37.76" fill="none" className={className} aria-hidden="true">
      <path
        d="M28.42 18.1992L23.6906 29.0098L12.88 24.2812L14.5118 20.5498H21.1398V15.0137L28.42 18.1992ZM21.1398 15.0137L17.6085 13.4697L14.5118 20.5498H9.33997V8.75H21.1398V15.0137Z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * O'lchamlar Figmadan: asl belgi 37.76px, radiusi 9.44px (ya'ni 25%).
 * Shu nisbat barcha o'lchamlarda saqlanadi.
 */
const TILE_SIZES = {
  sm: 'h-8 w-8 rounded-[8px]',
  md: 'h-[37.76px] w-[37.76px] rounded-[9.44px]',
  lg: 'h-12 w-12 rounded-[12px]',
  xl: 'h-16 w-16 rounded-[16px]',
}

const TILE_TONES = {
  brand: 'bg-brand text-[#fcfcfc]',
  inverse: 'bg-white text-brand',
  soft: 'bg-brand-soft text-brand',
  outline: 'border border-line bg-panel text-brand',
}

/** Plitkaga o'ralgan belgi — ilova ikonkasi ko'rinishi. */
export default function BrandMark({ size = 'md', tone = 'brand', className }) {
  return (
    <span
      className={cn(
        'inline-flex flex-shrink-0 items-center justify-center',
        TILE_SIZES[size],
        TILE_TONES[tone],
        className,
      )}
    >
      {/* Belgi atrofidagi bo'shliq viewBox ichida — svg plitkani to'liq egallaydi. */}
      <BrandGlyph className="h-full w-full" />
    </span>
  )
}
