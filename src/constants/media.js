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

/**
 * Hero'dagi telefon — Figmadan eksport qilingan IKKI HOLAT.
 *
 * Bu ikkita o'lcham emas, ikkita BOSHQA rasm: keng ekranda telefon bo'lim
 * pastidan kesilgan holda (pastki menyusi ko'rinmaydi), tor ekranda esa
 * to'liq, menyusi va home-indikatori bilan. Shuning uchun <picture> ichida
 * media-shart orqali almashadi — ikkalasi birga yuklanmaydi.
 *
 * O'lchamlar asl fayldan: CLS bo'lmasligi uchun <img> ga yoziladi.
 */
export const HERO_PHONE = {
  wide: { src: '/iPhone.png', width: 499, height: 688 },
  narrow: { src: '/iPhone (1).png', width: 288, height: 587 },
  alt: 'Ilova ekrani: moslik foizi bilan nomzodlar ro‘yxati, suratlar parda tartibida yopiq',
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
