import { cn } from '@/lib/utils.js'

/**
 * Ilovaning haqiqiy ekran surati.
 *
 * Telefon korpusi RASMNING O'ZIDA (dizayner eksporti), atrofi esa shaffof —
 * shuning uchun bu yerda ramka ham, fon ham chizilmaydi: faqat soya.
 * `filter: drop-shadow` ishlatiladi, `box-shadow` emas — aks holda soya
 * to'rtburchak bo'lib, telefonning yumaloq burchagidan chetga chiqib qolardi.
 *
 * Kenglik: tor ekranda surat deyarli butun kenglikni egallaydi (maketda ham
 * shunday), keng ekranda esa qat'iy 264 / 280px.
 */
export default function AppShot({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn(
        'block h-auto w-[86vw] max-w-[340px] shrink-0',
        'sm:w-[264px] sm:max-w-none lg:w-[280px]',
        'drop-shadow-[0_28px_50px_rgba(16,24,40,0.18)]',
        className,
      )}
    />
  )
}
