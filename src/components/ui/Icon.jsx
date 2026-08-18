import { ICONS } from '@/constants/icons.js'
import HugeIcon from '@/components/ui/HugeIcon.jsx'

/**
 * Yagona ikonka komponenti.
 *
 * `lucide-react` komponent qaytaradi, `@hugeicons/core-free-icons` esa
 * [tag, attrs] massivi — farqni shu yerda yopamiz, chaqiruvchi kod faqat
 * MA'NONI ataydi:
 *
 *   <Icon name="curtain" size={20} className="text-brand" />
 *
 * Nom ro'yxatda bo'lmasa hech narsa chizilmaydi (sahifa buzilmaydi), lekin
 * ishlab chiqish paytida konsolga ogohlantirish tushadi.
 */
export default function Icon({ name, size = 18, strokeWidth = 2, className }) {
  const icon = ICONS[name]

  if (!icon) {
    if (import.meta.env.DEV) console.warn(`[Icon] noma'lum ikonka: "${name}"`)
    return null
  }

  if (Array.isArray(icon)) {
    return <HugeIcon icon={icon} size={size} strokeWidth={strokeWidth} className={className} />
  }

  const Lucide = icon
  return <Lucide size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}
