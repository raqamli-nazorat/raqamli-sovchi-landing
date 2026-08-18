import {
  AppleIcon,
  GooglePlayIcon,
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon,
} from '@/components/brand/BrandIcons.jsx'

/**
 * Aktivlar ro'yxati: rasm manzillari va tashqi nishonlar jadvali.
 *
 * Nima uchun alohida fayl: komponent faylidan komponent BO'LMAGAN narsani
 * eksport qilish Vite'ning "fast refresh" ini buzadi (eslint ham shuni
 * ogohlantiradi). Shuning uchun jadvallar shu yerda.
 */

/** Ilovaning haqiqiy ekran suratlari — `public/` dan. */
export const APP_SHOTS = {
  candidates: { src: '/app-nomzodlar.png', alt: 'Nomzodlar ro‘yxati ekrani' },
  match: { src: '/app-moslik.png', alt: 'Moslik natijasi ekrani' },
}

/** Footer'dagi ijtimoiy tarmoq nomi → nishon. */
export const SOCIAL_ICONS = {
  Telegram: TelegramIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
}

/** CTA lentasidagi do'kon nomi → nishon. */
export const STORE_ICONS = {
  'App Store': AppleIcon,
  'Google Play': GooglePlayIcon,
}
