/**
 * Ikonka plitkalari ranglari — Figmadagi `avatar-*` o'zgaruvchilari.
 *
 * Bu ranglar MAVZU TOKENLARI EMAS: ular faqat kartochka nishonlarida
 * uchraydi va mahsulot bo'limlarini bir-biridan ajratib turadi (sarlavhalar
 * bir xil og'irlikda bo'lgani uchun farq faqat rangda). Shu sabab qiymatlar
 * to'g'ridan-to'g'ri shu yerda — lekin BITTA joyda, chunki "Uch rol" va
 * "Imkoniyatlar" bo'limlari aynan bir palitradan foydalanadi.
 *
 * Tungi rejim uchun har biriga mos qorong'i variant bor.
 */
export const AVATAR_TONES = {
  blue: 'bg-[#e5f3ff] text-[#0072cc] dark:bg-[#10233c] dark:text-[#6fb0f9]',
  violet: 'bg-[#eeeafb] text-[#5b4bc4] dark:bg-[#221c3a] dark:text-[#a892f7]',
  green: 'bg-[#e6f5ec] text-[#1e7a48] dark:bg-[#12261a] dark:text-[#4ade80]',
  amber: 'bg-[#fdf0e1] text-[#a65b0b] dark:bg-[#2a1f0e] dark:text-[#fbbf24]',
  neutral: 'bg-[#f5f5f5] text-[#525252] dark:bg-[#232936] dark:text-[#9aa3b2]',
}

/** Maketda ikonka chizig'i 1.74px — barcha nishonlarda bir xil. */
export const AVATAR_STROKE = 1.74
