import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

/**
 * Shartli class'larni birlashtiradi va Tailwind ziddiyatlarini hal qiladi.
 * cn('p-2', isBig && 'p-4') -> 'p-4'
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/** 49000 -> "49 000" */
export function formatSum(value) {
  if (value === null || value === undefined) return ''
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

/** ISO sana → "12.06.2026" */
export function formatDate(iso) {
  if (!iso) return ''
  const d = dayjs(iso)
  return d.isValid() ? d.format('DD.MM.YYYY') : ''
}

/** "Nodira Karimova" → "NK" — rasmi yo'q avatar uchun. */
export function initials(name) {
  if (!name) return ''
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

/** Joriy yil — footer'dagi copyright uchun. */
export const currentYear = new Date().getFullYear()
