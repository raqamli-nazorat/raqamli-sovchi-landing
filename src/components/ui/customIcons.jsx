/**
 * Loyihaning o'z chiziqli nishonlari (Figmadan) — `lucide`/`hugeicons`
 * ro'yxatida mos varianti yo'q yoki Figma bilan aynan bir xil bo'lishi
 * kerak bo'lganlar.
 *
 * `<Icon name="..." />` ularni lucide komponenti kabi chaqiradi
 * (`size` / `strokeWidth` / `className`), shu bois shakl `currentColor`
 * bilan chiziladi va tungi rejimda ham matn rangiga moslashadi.
 */

/** Kalendar — "Band qilish" tugmasi uchun (Figma: ico · calendar). */
export function CalendarIcon({ size = 18, strokeWidth = 1.5, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 2.25V6M12 2.25V6M3 8.25H15M3 4.5H15V15.75H3V4.5Z" />
    </svg>
  )
}
